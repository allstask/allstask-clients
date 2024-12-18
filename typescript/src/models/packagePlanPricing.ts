// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */

export interface PackagePlanPricing {
    blockSize: number;
    rate: number;
    }

export const PackagePlanPricingSerializer = {
    _fromJsonObject(object: any): PackagePlanPricing {
        return {
            blockSize: object['block_size'],
            rate: object['rate'],
            };
    },

    _toJsonObject(self: PackagePlanPricing): any {
        return {
            'block_size': self.blockSize,
            'rate': self.rate,
            };
    }
}