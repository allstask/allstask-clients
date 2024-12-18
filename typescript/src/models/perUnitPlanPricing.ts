// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */

export interface PerUnitPlanPricing {
    rate: number;
    }

export const PerUnitPlanPricingSerializer = {
    _fromJsonObject(object: any): PerUnitPlanPricing {
        return {
            rate: object['rate'],
            };
    },

    _toJsonObject(self: PerUnitPlanPricing): any {
        return {
            'rate': self.rate,
            };
    }
}