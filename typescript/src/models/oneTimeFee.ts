// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */

export interface OneTimeFee {
    quantity: number;
    rate: number;
    }

export const OneTimeFeeSerializer = {
    _fromJsonObject(object: any): OneTimeFee {
        return {
            quantity: object['quantity'],
            rate: object['rate'],
            };
    },

    _toJsonObject(self: OneTimeFee): any {
        return {
            'quantity': self.quantity,
            'rate': self.rate,
            };
    }
}