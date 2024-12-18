// Allstask TypeScript SDK — Verificação de Webhooks
// Espelha webhooks.rs do SDK Rust
//
// Suporta dois formatos de headers:
//   - Standard Webhooks: webhook-id, webhook-signature, webhook-timestamp
//   - Svix (compatibilidade): svix-id, svix-signature, svix-timestamp

import { createHmac, timingSafeEqual } from "node:crypto";

// ─── Constantes de Headers ────────────────────────────────────────────────────

const WEBHOOK_ID = "webhook-id";
const WEBHOOK_SIGNATURE = "webhook-signature";
const WEBHOOK_TIMESTAMP = "webhook-timestamp";

const SVIX_ID = "svix-id";
const SVIX_SIGNATURE = "svix-signature";
const SVIX_TIMESTAMP = "svix-timestamp";

/** Tolerância de tempo para validação de timestamp: 5 minutos */
const TIMESTAMP_TOLERANCE_SECONDS = 5 * 60;

// ─── Tipos de Erro ────────────────────────────────────────────────────────────

export class WebhookVerificationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "WebhookVerificationError";
  }
}

// ─── Webhook ──────────────────────────────────────────────────────────────────

export class Webhook {
  private readonly secretBytes: Uint8Array;

  /**
   * Cria um verificador de webhook a partir do segredo.
   * O segredo pode ser prefixado com `whsec_` (Base64).
   *
   * @example
   * const wh = new Webhook("whsec_your_webhook_secret");
   */
  constructor(secret: string) {
    let rawSecret = secret;

    // Remove prefixo whsec_ se presente
    if (secret.startsWith("whsec_")) {
      rawSecret = secret.slice("whsec_".length);
    }

    try {
      this.secretBytes = Uint8Array.from(Buffer.from(rawSecret, "base64"));
    } catch {
      throw new WebhookVerificationError("Segredo de webhook inválido (deve ser Base64)");
    }

    if (this.secretBytes.length === 0) {
      throw new WebhookVerificationError("Segredo de webhook não pode ser vazio");
    }
  }

  /**
   * Verifica a assinatura de um payload de webhook.
   *
   * @param payload  - Corpo raw da requisição (Buffer ou string)
   * @param headers  - Headers HTTP da requisição (objeto simples ou Headers)
   *
   * @throws {WebhookVerificationError} se a assinatura for inválida
   *
   * @example
   * // Em Express:
   * app.post("/webhook", (req, res) => {
   *   const wh = new Webhook(process.env.WEBHOOK_SECRET!);
   *   try {
   *     wh.verify(req.rawBody, req.headers);
   *     res.sendStatus(200);
   *   } catch (e) {
   *     res.sendStatus(400);
   *   }
   * });
   */
  verify(
    payload: string | Buffer | Uint8Array,
    headers: Record<string, string | string[] | undefined> | Headers
  ): void {
    const normalized = this.normalizeHeaders(headers);

    const msgId = normalized[WEBHOOK_ID];
    const msgTimestamp = normalized[WEBHOOK_TIMESTAMP];
    const msgSignature = normalized[WEBHOOK_SIGNATURE];

    if (!msgId || !msgTimestamp || !msgSignature) {
      throw new WebhookVerificationError(
        "Headers obrigatórios ausentes: webhook-id, webhook-signature, webhook-timestamp"
      );
    }

    // Validar timestamp (previne replay attacks)
    this.validateTimestamp(msgTimestamp);

    // Calcular assinatura esperada
    const payloadStr = typeof payload === "string" ? payload : Buffer.from(payload).toString("utf8");
    const expectedSignature = this.sign(msgId, parseInt(msgTimestamp, 10), payloadStr);

    // Comparar com cada assinatura fornecida (pode haver múltiplas separadas por espaço)
    const signatures = msgSignature.split(" ");
    const expectedParts = expectedSignature.split(",");
    const expectedV1 = expectedParts[1]; // formato: v1,<base64>

    if (!expectedV1) {
      throw new WebhookVerificationError("Erro interno ao gerar assinatura de verificação");
    }

    const expectedBytes = Buffer.from(expectedV1, "base64");
    const isValid = signatures.some((sig) => {
      const parts = sig.split(",");
      if (parts[0] !== "v1" || !parts[1]) return false;
      try {
        const sigBytes = Buffer.from(parts[1], "base64");
        return (
          sigBytes.length === expectedBytes.length &&
          timingSafeEqual(sigBytes, expectedBytes)
        );
      } catch {
        return false;
      }
    });

    if (!isValid) {
      throw new WebhookVerificationError("Assinatura do webhook inválida");
    }
  }

  /**
   * Assina um payload e retorna a assinatura no formato `v1,<base64>`.
   * Útil para testar webhooks localmente.
   */
  sign(msgId: string, timestamp: number, payload: string): string {
    const data = `${msgId}.${timestamp}.${payload}`;
    const hmac = createHmac("sha256", this.secretBytes);
    hmac.update(data, "utf8");
    const signature = hmac.digest("base64");
    return `v1,${signature}`;
  }

  // ─── Helpers Privados ───────────────────────────────────────────────────────

  private validateTimestamp(timestampStr: string): void {
    const timestamp = parseInt(timestampStr, 10);
    if (isNaN(timestamp)) {
      throw new WebhookVerificationError("Timestamp inválido no header webhook-timestamp");
    }

    const now = Math.floor(Date.now() / 1000);
    const diff = Math.abs(now - timestamp);

    if (diff > TIMESTAMP_TOLERANCE_SECONDS) {
      throw new WebhookVerificationError(
        `Webhook expirado: diferença de ${diff}s (tolerância: ${TIMESTAMP_TOLERANCE_SECONDS}s)`
      );
    }
  }

  /**
   * Normaliza headers convertendo svix-* → webhook-* quando necessário.
   * Headers webhook-* têm prioridade se ambos estiverem presentes.
   */
  private normalizeHeaders(
    headers: Record<string, string | string[] | undefined> | Headers
  ): Record<string, string> {
    const get = (key: string): string | undefined => {
      if (headers instanceof Headers) {
        return headers.get(key) ?? undefined;
      }
      const val = headers[key];
      return Array.isArray(val) ? val[0] : val;
    };

    const result: Record<string, string> = {};

    // webhook-* tem prioridade
    result[WEBHOOK_ID] = get(WEBHOOK_ID) ?? get(SVIX_ID) ?? "";
    result[WEBHOOK_TIMESTAMP] = get(WEBHOOK_TIMESTAMP) ?? get(SVIX_TIMESTAMP) ?? "";
    result[WEBHOOK_SIGNATURE] = get(WEBHOOK_SIGNATURE) ?? get(SVIX_SIGNATURE) ?? "";

    return result;
  }
}
