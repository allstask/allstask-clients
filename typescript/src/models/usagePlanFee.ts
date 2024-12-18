// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    BillableMetricId,
    BillableMetricIdSerializer,
} from './billableMetricId';
import {
    BillingPeriodEnum,
    BillingPeriodEnumSerializer,
} from './billingPeriodEnum';
import {
    PlanUsagePricingModel,
    PlanUsagePricingModelSerializer,
} from './planUsagePricingModel';
/** Usage-based fee */
export interface UsagePlanFee {
    cadence: BillingPeriodEnum;
    metricId: BillableMetricId;
    pricing: PlanUsagePricingModel;
    }

export const UsagePlanFeeSerializer = {
    _fromJsonObject(object: any): UsagePlanFee {
        return {
            cadence: BillingPeriodEnumSerializer._fromJsonObject(object['cadence']),
            metricId: BillableMetricIdSerializer._fromJsonObject(object['metric_id']),
            pricing: PlanUsagePricingModelSerializer._fromJsonObject(object['pricing']),
            };
    },

    _toJsonObject(self: UsagePlanFee): any {
        return {
            'cadence': BillingPeriodEnumSerializer._toJsonObject(self.cadence),
            'metric_id': BillableMetricIdSerializer._toJsonObject(self.metricId),
            'pricing': PlanUsagePricingModelSerializer._toJsonObject(self.pricing),
            };
    }
}