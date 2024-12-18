// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    BillableMetricId,
    BillableMetricIdSerializer,
} from './billableMetricId';

export interface CapacityFeeStructure {
    metricId: BillableMetricId;
    }

export const CapacityFeeStructureSerializer = {
    _fromJsonObject(object: any): CapacityFeeStructure {
        return {
            metricId: BillableMetricIdSerializer._fromJsonObject(object['metric_id']),
            };
    },

    _toJsonObject(self: CapacityFeeStructure): any {
        return {
            'metric_id': BillableMetricIdSerializer._toJsonObject(self.metricId),
            };
    }
}