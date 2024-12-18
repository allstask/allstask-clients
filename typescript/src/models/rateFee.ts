// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */

export interface RateFee {
    rate: number;
    }

export const RateFeeSerializer = {
    _fromJsonObject(object: any): RateFee {
        return {
            rate: object['rate'],
            };
    },

    _toJsonObject(self: RateFee): any {
        return {
            'rate': self.rate,
            };
    }
}