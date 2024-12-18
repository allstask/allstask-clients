// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */

export enum PaymentTypeEnum {
    Payment = 'PAYMENT',
    Refund = 'REFUND',
    }

export const PaymentTypeEnumSerializer = {
    _fromJsonObject(object: any): PaymentTypeEnum {
        return object;
    },

    _toJsonObject(self: PaymentTypeEnum): any {
        return self;
    }
}