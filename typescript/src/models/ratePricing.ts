// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */

export interface RatePricing {
    rate: number;
    }

export const RatePricingSerializer = {
    _fromJsonObject(object: any): RatePricing {
        return {
            rate: object['rate'],
            };
    },

    _toJsonObject(self: RatePricing): any {
        return {
            'rate': self.rate,
            };
    }
}