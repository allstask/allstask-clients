// Allstask TypeScript SDK — Configuração do cliente
// Espelha Configuration e AllstaskOptions do SDK Rust

export interface AllstaskRequestContext {
  /** URL base da API. Padrão: https://api.allstask.com */
  basePath: string;
  /** Chave de API (Bearer token) */
  apiKey?: string;
  /** User-Agent enviado em cada requisição */
  userAgent?: string;
  /** Versão do SDK (injetada automaticamente no build) */
  version?: string;
  /** Timeout em milissegundos por requisição. Sem timeout se não definido. */
  timeoutMs?: number;
  /** Número máximo de retries em erros 5xx. Padrão: 3 */
  numRetries?: number;
}

export interface AllstaskOptions {
  /**
   * URL base da API Allstask.
   * @default "https://api.allstask.com"
   */
  baseUrl?: string;

  /**
   * Timeout em milissegundos por requisição.
   * @default undefined (sem timeout)
   */
  timeoutMs?: number;

  /**
   * Número de retries automáticos em erros 5xx ou de rede.
   * @default 3
   */
  numRetries?: number;
}

const DEFAULT_BASE_URL = "https://api.allstask.com";
const SDK_VERSION = "0.1.0";

/**
 * Cria um contexto de requisição a partir das opções fornecidas.
 * Usado internamente pelo cliente principal.
 */
export function buildRequestContext(
  apiKey: string,
  options?: AllstaskOptions
): AllstaskRequestContext {
  return {
    basePath: options?.baseUrl ?? DEFAULT_BASE_URL,
    apiKey,
    userAgent: `allstask-ts/${SDK_VERSION}`,
    version: SDK_VERSION,
    timeoutMs: options?.timeoutMs,
    numRetries: options?.numRetries ?? 3,
  };
}
