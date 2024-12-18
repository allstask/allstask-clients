// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */

export enum PaymentStatusEnum {
    Ready = 'READY',
    Pending = 'PENDING',
    Settled = 'SETTLED',
    Cancelled = 'CANCELLED',
    Failed = 'FAILED',
    }

export const PaymentStatusEnumSerializer = {
    _fromJsonObject(object: any): PaymentStatusEnum {
        return object;
    },

    _toJsonObject(self: PaymentStatusEnum): any {
        return self;
    }
}