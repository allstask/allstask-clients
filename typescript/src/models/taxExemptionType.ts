// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */

export enum TaxExemptionType {
    ReverseCharge = 'REVERSE_CHARGE',
    TaxExempt = 'TAX_EXEMPT',
    NotRegistered = 'NOT_REGISTERED',
    }

export const TaxExemptionTypeSerializer = {
    _fromJsonObject(object: any): TaxExemptionType {
        return object;
    },

    _toJsonObject(self: TaxExemptionType): any {
        return self;
    }
}