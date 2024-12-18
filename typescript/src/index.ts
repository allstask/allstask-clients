// Allstask TypeScript SDK
// @generated models serão importados aqui após executar o codegen

export * from "./error.js";
export * from "./configuration.js";
export * from "./request.js";

// Re-export das APIs geradas (disponível após rodar o codegen)
// export * from "./api/index.js";
// export * from "./models/index.js";

/**
 * Cliente principal do SDK Allstask.
 *
 * @example
 * ```typescript
 * import { Allstask } from "@allstask/client";
 *
 * const client = new Allstask("sua-api-key");
 *
 * // Listar clientes
 * const customers = await client.customers.list();
 * console.log(customers.data);
 *
 * // Criar assinatura
 * const subscription = await client.subscriptions.create({
 *   customerId: "cust_123",
 *   planId: "plan_basico",
 * });
 * ```
 */
export class Allstask {
  private readonly ctx: import("./configuration.js").AllstaskRequestContext;

  constructor(apiKey: string, options?: import("./configuration.js").AllstaskOptions) {
    const { buildRequestContext } = require("./configuration.js");
    this.ctx = buildRequestContext(apiKey, options);
  }
}

// Versão do SDK
export const VERSION = "0.1.0";
