# @allstask/client

**SDK TypeScript/JavaScript oficial para a API Allstask.**

[![npm version](https://img.shields.io/npm/v/@allstask/client)](https://www.npmjs.com/package/@allstask/client)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Instalação

```bash
npm install @allstask/client
# ou
pnpm add @allstask/client
# ou
yarn add @allstask/client
```

## Uso Rápido

```typescript
import { Allstask } from "@allstask/client";

const client = new Allstask("sua-api-key");

// Listar clientes
const customers = await client.customers.list();
console.log(`${customers.data.length} clientes encontrados`);

// Criar uma assinatura
const subscription = await client.subscriptions.create({
  customerId: "cust_123",
  planId: "plan_basico",
});

// Listar faturas
const invoices = await client.invoices.list({ customerId: "cust_123" });
```

## Configuração Avançada

```typescript
const client = new Allstask("sua-api-key", {
  // URL base (padrão: https://api.allstask.com)
  baseUrl: "https://api.allstask.com",

  // Timeout por requisição em ms (padrão: sem timeout)
  timeoutMs: 30_000,

  // Retries automáticos em erros 5xx (padrão: 3)
  numRetries: 3,
});
```

## Webhooks

O SDK inclui verificação de assinatura de webhooks compatível com [Standard Webhooks](https://www.standardwebhooks.com/):

```typescript
import { Webhook, WebhookVerificationError } from "@allstask/client/webhooks";

// Em Express / Fastify / qualquer servidor HTTP:
app.post("/webhook/allstask", (req, res) => {
  const wh = new Webhook(process.env.ALLSTASK_WEBHOOK_SECRET!);

  try {
    // Verificar assinatura (lança WebhookVerificationError se inválida)
    wh.verify(req.rawBody, req.headers);

    const event = req.body;
    switch (event.type) {
      case "subscription.created":
        // ativar acesso do cliente
        break;
      case "invoice.paid":
        // enviar recibo por e-mail
        break;
      case "subscription.cancelled":
        // revogar acesso
        break;
    }

    res.sendStatus(200);
  } catch (err) {
    if (err instanceof WebhookVerificationError) {
      console.error("Webhook inválido:", err.message);
      res.sendStatus(400);
    } else {
      res.sendStatus(500);
    }
  }
});
```

### Headers suportados

O verificador aceita tanto o formato **Standard Webhooks** quanto o formato **Svix** (compatibilidade):

| Standard Webhooks (preferido) | Svix (compatível) |
|-------------------------------|-------------------|
| `webhook-id`                  | `svix-id`         |
| `webhook-signature`           | `svix-signature`  |
| `webhook-timestamp`           | `svix-timestamp`  |

## Tratamento de Erros

```typescript
import { AllstaskHttpError, AllstaskValidationError } from "@allstask/client";

try {
  await client.customers.get("cust_nao_existe");
} catch (err) {
  if (err instanceof AllstaskHttpError) {
    console.error(`Erro HTTP ${err.statusCode}:`, err.payload);
  } else if (err instanceof AllstaskValidationError) {
    console.error("Dados inválidos:", err.payload);
  }
}
```

## Compatibilidade

| Runtime       | Suporte |
|---------------|---------|
| Node.js 18+   | ✅      |
| Node.js 20+   | ✅      |
| Bun           | ✅      |
| Deno          | ✅      |
| Edge Runtime  | ✅      |
| Browser       | ⚠️ Webhooks requerem Node.js |

## Geração Automática

Este SDK é gerado automaticamente a partir da [especificação OpenAPI](../spec/openapi.json) do Allstask usando o codegen em `../codegen/`.

Para regenerar após mudanças na API:

```bash
cd ../codegen
cargo run -- --config codegen.toml --output-dir ..
```

## Licença

MIT © Allstask
