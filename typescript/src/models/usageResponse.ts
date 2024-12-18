// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    MetricUsage,
    MetricUsageSerializer,
} from './metricUsage';

export interface UsageResponse {
    periodEnd: string;
    periodStart: string;
    usage: MetricUsage[];
    }

export const UsageResponseSerializer = {
    _fromJsonObject(object: any): UsageResponse {
        return {
            periodEnd: object['period_end'],
            periodStart: object['period_start'],
            usage: object['usage'].map((item: MetricUsage) => MetricUsageSerializer._fromJsonObject(item)),
            };
    },

    _toJsonObject(self: UsageResponse): any {
        return {
            'period_end': self.periodEnd,
            'period_start': self.periodStart,
            'usage': self.usage.map((item) => MetricUsageSerializer._toJsonObject(item)),
            };
    }
}