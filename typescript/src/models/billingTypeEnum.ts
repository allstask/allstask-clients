// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */

export enum BillingTypeEnum {
    Advance = 'ADVANCE',
    Arrears = 'ARREARS',
    }

export const BillingTypeEnumSerializer = {
    _fromJsonObject(object: any): BillingTypeEnum {
        return object;
    },

    _toJsonObject(self: BillingTypeEnum): any {
        return self;
    }
}