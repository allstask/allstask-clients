// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */

export interface FixedDiscount {
    amount: string;
    currency: string;
    }

export const FixedDiscountSerializer = {
    _fromJsonObject(object: any): FixedDiscount {
        return {
            amount: object['amount'],
            currency: object['currency'],
            };
    },

    _toJsonObject(self: FixedDiscount): any {
        return {
            'amount': self.amount,
            'currency': self.currency,
            };
    }
}