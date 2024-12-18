// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */

export interface ExtraRecurringPricing {
    quantity: number;
    unitPrice: number;
    }

export const ExtraRecurringPricingSerializer = {
    _fromJsonObject(object: any): ExtraRecurringPricing {
        return {
            quantity: object['quantity'],
            unitPrice: object['unit_price'],
            };
    },

    _toJsonObject(self: ExtraRecurringPricing): any {
        return {
            'quantity': self.quantity,
            'unit_price': self.unitPrice,
            };
    }
}