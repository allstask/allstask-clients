// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    BillableMetricId,
    BillableMetricIdSerializer,
} from './billableMetricId';
import {
    UsagePricingModel,
    UsagePricingModelSerializer,
} from './usagePricingModel';

export interface UsageFee {
    metricId: BillableMetricId;
    model: UsagePricingModel;
    }

export const UsageFeeSerializer = {
    _fromJsonObject(object: any): UsageFee {
        return {
            metricId: BillableMetricIdSerializer._fromJsonObject(object['metric_id']),
            model: UsagePricingModelSerializer._fromJsonObject(object['model']),
            };
    },

    _toJsonObject(self: UsageFee): any {
        return {
            'metric_id': BillableMetricIdSerializer._toJsonObject(self.metricId),
            'model': UsagePricingModelSerializer._toJsonObject(self.model),
            };
    }
}