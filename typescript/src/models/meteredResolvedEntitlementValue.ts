// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    BillableMetricId,
    BillableMetricIdSerializer,
} from './billableMetricId';
import {
    ResetPeriod,
    ResetPeriodSerializer,
} from './resetPeriod';

export interface MeteredResolvedEntitlementValue {
    enabled: boolean;
    limit?: number | null;
    metricId: BillableMetricId;
    resetPeriod: ResetPeriod;
    }

export const MeteredResolvedEntitlementValueSerializer = {
    _fromJsonObject(object: any): MeteredResolvedEntitlementValue {
        return {
            enabled: object['enabled'],
            limit: object['limit'],
            metricId: BillableMetricIdSerializer._fromJsonObject(object['metric_id']),
            resetPeriod: ResetPeriodSerializer._fromJsonObject(object['reset_period']),
            };
    },

    _toJsonObject(self: MeteredResolvedEntitlementValue): any {
        return {
            'enabled': self.enabled,
            'limit': self.limit,
            'metric_id': BillableMetricIdSerializer._toJsonObject(self.metricId),
            'reset_period': ResetPeriodSerializer._toJsonObject(self.resetPeriod),
            };
    }
}