// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */

export interface PerUnitPricing {
    rate: number;
    }

export const PerUnitPricingSerializer = {
    _fromJsonObject(object: any): PerUnitPricing {
        return {
            rate: object['rate'],
            };
    },

    _toJsonObject(self: PerUnitPricing): any {
        return {
            'rate': self.rate,
            };
    }
}