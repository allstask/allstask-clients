// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */

export enum InvoiceStatus {
    Draft = 'DRAFT',
    Finalized = 'FINALIZED',
    Uncollectible = 'UNCOLLECTIBLE',
    Void = 'VOID',
    }

export const InvoiceStatusSerializer = {
    _fromJsonObject(object: any): InvoiceStatus {
        return object;
    },

    _toJsonObject(self: InvoiceStatus): any {
        return self;
    }
}