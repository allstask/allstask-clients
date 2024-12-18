// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    BillingPeriodEnum,
    BillingPeriodEnumSerializer,
} from './billingPeriodEnum';
import {
    BillingType,
    BillingTypeSerializer,
} from './billingType';
/** Extra recurring fee */
export interface ExtraRecurringPlanFee {
    billingType: BillingType;
    cadence: BillingPeriodEnum;
    quantity: number;
    unitPrice: number;
    }

export const ExtraRecurringPlanFeeSerializer = {
    _fromJsonObject(object: any): ExtraRecurringPlanFee {
        return {
            billingType: BillingTypeSerializer._fromJsonObject(object['billing_type']),
            cadence: BillingPeriodEnumSerializer._fromJsonObject(object['cadence']),
            quantity: object['quantity'],
            unitPrice: object['unit_price'],
            };
    },

    _toJsonObject(self: ExtraRecurringPlanFee): any {
        return {
            'billing_type': BillingTypeSerializer._toJsonObject(self.billingType),
            'cadence': BillingPeriodEnumSerializer._toJsonObject(self.cadence),
            'quantity': self.quantity,
            'unit_price': self.unitPrice,
            };
    }
}