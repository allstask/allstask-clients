// Allstask TypeScript SDK — Cliente HTTP Base
// Espelha o request.rs do SDK Rust

import {
  AllstaskError,
  AllstaskHttpError,
  AllstaskValidationError,
  AllstaskNetworkError,
} from "./error.js";
import type { AllstaskRequestContext } from "./configuration.js";

export enum HttpMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

// Tipo de deserialização usado pelos SDKs gerados
export type Deserializer<T> = (json: unknown) => T;

/**
 * Builder de requisição HTTP com retry exponencial automático.
 * Esta classe é usada internamente pelo código gerado — não precisa usá-la diretamente.
 */
export class AllstaskRequest<T = unknown> {
  private pathParams: Record<string, string> = {};
  private queryParams: Array<[string, string]> = [];
  private headerParams: Record<string, string> = {};
  private body: unknown = undefined;
  private deserializer?: Deserializer<T>;

  constructor(
    private readonly method: HttpMethod,
    private readonly path: string
  ) {}

  setPathParam(name: string, value: string): this {
    this.pathParams[name] = value;
    return this;
  }

  setQueryParam(name: string, value: string | number | boolean | null | undefined): this {
    if (value !== null && value !== undefined) {
      this.queryParams.push([name, String(value)]);
    }
    return this;
  }

  setHeaderParam(name: string, value: string | null | undefined): this {
    if (value !== null && value !== undefined) {
      this.headerParams[name] = value;
    }
    return this;
  }

  setBody(body: unknown): this {
    this.body = body;
    return this;
  }

  /** Executa e desserializa a resposta via função fornecida */
  async send(ctx: AllstaskRequestContext, deserializer: Deserializer<T>): Promise<T> {
    this.deserializer = deserializer;
    return this.execute(ctx) as Promise<T>;
  }

  /** Executa sem body de resposta (ex: DELETE, 204) */
  async sendNoResponseBody(ctx: AllstaskRequestContext): Promise<void> {
    await this.execute(ctx);
  }

  private buildUrl(basePath: string): string {
    let path = this.path;

    // Substituir {param} pelos valores reais
    for (const [key, value] of Object.entries(this.pathParams)) {
      path = path.replace(`{${key}}`, encodeURIComponent(value));
    }

    const url = new URL(`${basePath}${path}`);

    for (const [key, value] of this.queryParams) {
      url.searchParams.append(key, value);
    }

    return url.toString();
  }

  private async execute(ctx: AllstaskRequestContext): Promise<T | void> {
    const url = this.buildUrl(ctx.basePath);

    const headers: Record<string, string> = {
      "User-Agent": ctx.userAgent ?? `allstask-ts/${ctx.version ?? "0.1.0"}`,
      "allstask-req-id": String(Math.floor(Math.random() * 2 ** 32)),
      ...this.headerParams,
    };

    // Autenticação Bearer
    if (ctx.apiKey) {
      headers["Authorization"] = `Bearer ${ctx.apiKey}`;
    }

    // Idempotency key automática para POSTs
    if (this.method === HttpMethod.POST && !headers["idempotency-key"]) {
      headers["idempotency-key"] = `auto_${crypto.randomUUID()}`;
    }

    const reqInit: RequestInit = {
      method: this.method,
      headers,
    };

    if (this.body !== undefined) {
      headers["Content-Type"] = "application/json";
      reqInit.body = JSON.stringify(this.body);
    }

    // Retry com backoff exponencial — espelhando o Rust
    const maxRetries = ctx.numRetries ?? 3;
    let backoffMs = 20;
    const maxBackoffMs = 5000;
    let retryCount = 0;

    while (true) {
      try {
        const controller = ctx.timeoutMs
          ? (() => {
              const c = new AbortController();
              setTimeout(() => c.abort(), ctx.timeoutMs);
              return c;
            })()
          : null;

        const response = await fetch(url, {
          ...reqInit,
          signal: controller?.signal,
        });

        if (response.status === 422) {
          const rawBody = await response.text();
          let payload: unknown;
          try { payload = JSON.parse(rawBody); } catch { /* não é JSON */ }
          throw new AllstaskValidationError(payload, rawBody);
        }

        if (!response.ok) {
          const rawBody = await response.text();
          let payload: unknown;
          try { payload = JSON.parse(rawBody); } catch { /* não é JSON */ }

          // Não fazer retry em erros 4xx (exceto 429)
          if (response.status < 500 && response.status !== 429) {
            throw new AllstaskHttpError(response.status, payload, rawBody);
          }

          // 5xx ou 429 → tenta retry
          if (retryCount >= maxRetries) {
            throw new AllstaskHttpError(response.status, payload, rawBody);
          }
        } else {
          // Sucesso
          if (!this.deserializer) return;
          const json = await response.json();
          return this.deserializer(json);
        }
      } catch (err) {
        if (err instanceof AllstaskError) {
          // Não re-encapsular nossos próprios erros
          if (
            (err instanceof AllstaskValidationError) ||
            (err instanceof AllstaskHttpError && err.statusCode < 500 && err.statusCode !== 429)
          ) {
            throw err;
          }
          if (retryCount >= maxRetries) throw err;
        } else if (err instanceof Error) {
          if (retryCount >= maxRetries) {
            throw new AllstaskNetworkError(err.message, err);
          }
        } else {
          throw new AllstaskNetworkError(String(err));
        }
      }

      // Aguardar backoff antes do próximo retry
      await new Promise((resolve) => setTimeout(resolve, backoffMs));
      backoffMs = Math.min(backoffMs * 2, maxBackoffMs);
      retryCount++;

      if (retryCount > 0) {
        headers["allstask-retry-count"] = String(retryCount);
      }
    }
  }
}
