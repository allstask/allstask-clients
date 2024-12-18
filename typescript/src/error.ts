// Allstask TypeScript SDK — Tipos de Erro

export class AllstaskError extends Error {
  constructor(
    message: string,
    public readonly statusCode?: number,
    public readonly payload?: unknown,
    public readonly rawBody?: string
  ) {
    super(message);
    this.name = "AllstaskError";
  }
}

export class AllstaskHttpError extends AllstaskError {
  constructor(
    public readonly statusCode: number,
    public readonly payload?: unknown,
    public readonly rawBody?: string
  ) {
    super(
      `HTTP Error ${statusCode}: ${rawBody ?? "Sem corpo de resposta"}`,
      statusCode,
      payload,
      rawBody
    );
    this.name = "AllstaskHttpError";
  }
}

export class AllstaskValidationError extends AllstaskError {
  constructor(
    public readonly payload?: unknown,
    public readonly rawBody?: string
  ) {
    super(`Validation Error: ${rawBody ?? "Dados inválidos"}`, 422, payload, rawBody);
    this.name = "AllstaskValidationError";
  }
}

export class AllstaskNetworkError extends AllstaskError {
  constructor(message: string, public readonly cause?: Error) {
    super(`Network Error: ${message}`);
    this.name = "AllstaskNetworkError";
  }
}
