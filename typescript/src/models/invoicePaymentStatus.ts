// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */

export enum InvoicePaymentStatus {
    Unpaid = 'UNPAID',
    PartiallyPaid = 'PARTIALLY_PAID',
    Paid = 'PAID',
    Errored = 'ERRORED',
    }

export const InvoicePaymentStatusSerializer = {
    _fromJsonObject(object: any): InvoicePaymentStatus {
        return object;
    },

    _toJsonObject(self: InvoicePaymentStatus): any {
        return self;
    }
}