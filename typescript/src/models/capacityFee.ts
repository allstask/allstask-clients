// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    BillableMetricId,
    BillableMetricIdSerializer,
} from './billableMetricId';

export interface CapacityFee {
    included: number;
    metricId: BillableMetricId;
    overageRate: number;
    rate: number;
    }

export const CapacityFeeSerializer = {
    _fromJsonObject(object: any): CapacityFee {
        return {
            included: object['included'],
            metricId: BillableMetricIdSerializer._fromJsonObject(object['metric_id']),
            overageRate: object['overage_rate'],
            rate: object['rate'],
            };
    },

    _toJsonObject(self: CapacityFee): any {
        return {
            'included': self.included,
            'metric_id': BillableMetricIdSerializer._toJsonObject(self.metricId),
            'overage_rate': self.overageRate,
            'rate': self.rate,
            };
    }
}