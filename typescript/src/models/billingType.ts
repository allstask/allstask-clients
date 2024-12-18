// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */

export enum BillingType {
    Advance = 'ADVANCE',
    Arrears = 'ARREARS',
    }

export const BillingTypeSerializer = {
    _fromJsonObject(object: any): BillingType {
        return object;
    },

    _toJsonObject(self: BillingType): any {
        return self;
    }
}