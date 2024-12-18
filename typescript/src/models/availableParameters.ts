// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    BillingPeriodEnum,
    BillingPeriodEnumSerializer,
} from './billingPeriodEnum';

export interface AvailableParameters {
    /** Map of component_id -> available billing periods (e.g., "MONTHLY", "ANNUAL") */
        billingPeriods?: { [key: string]: BillingPeriodEnum[] };
    /** Map of component_id -> available capacity values */
        capacityThresholds?: { [key: string]: number[] };
    /** List of component_ids that support slot parametrization (initial slot count) */
        slotComponents?: string[];
    }

export const AvailableParametersSerializer = {
    _fromJsonObject(object: any): AvailableParameters {
        return {
            billingPeriods: Object.fromEntries(Object.entries(object['billing_periods']).map(
                (item : [string, BillingPeriodEnum[]]) => [item[0], item[1].map((item: BillingPeriodEnum) => BillingPeriodEnumSerializer._fromJsonObject(item))]
            )),
            capacityThresholds: Object.fromEntries(Object.entries(object['capacity_thresholds']).map(
                (item : [string, number[]]) => [item[0], item[1]]
            )),
            slotComponents: object['slot_components'],
            };
    },

    _toJsonObject(self: AvailableParameters): any {
        return {
            'billing_periods': Object.fromEntries(Object.entries(self.billingPeriods).map(
                (item) => [item[0], item[1].map((item) => BillingPeriodEnumSerializer._toJsonObject(item))]
            )),
            'capacity_thresholds': Object.fromEntries(Object.entries(self.capacityThresholds).map(
                (item) => [item[0], item[1]]
            )),
            'slot_components': self.slotComponents,
            };
    }
}