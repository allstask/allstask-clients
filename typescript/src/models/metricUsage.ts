// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    BillableMetricId,
    BillableMetricIdSerializer,
} from './billableMetricId';
import {
    GroupedUsage,
    GroupedUsageSerializer,
} from './groupedUsage';

export interface MetricUsage {
    groupedUsage: GroupedUsage[];
    metricCode: string;
    metricId: BillableMetricId;
    metricName: string;
    totalValue: number;
    }

export const MetricUsageSerializer = {
    _fromJsonObject(object: any): MetricUsage {
        return {
            groupedUsage: object['grouped_usage'].map((item: GroupedUsage) => GroupedUsageSerializer._fromJsonObject(item)),
            metricCode: object['metric_code'],
            metricId: BillableMetricIdSerializer._fromJsonObject(object['metric_id']),
            metricName: object['metric_name'],
            totalValue: object['total_value'],
            };
    },

    _toJsonObject(self: MetricUsage): any {
        return {
            'grouped_usage': self.groupedUsage.map((item) => GroupedUsageSerializer._toJsonObject(item)),
            'metric_code': self.metricCode,
            'metric_id': BillableMetricIdSerializer._toJsonObject(self.metricId),
            'metric_name': self.metricName,
            'total_value': self.totalValue,
            };
    }
}