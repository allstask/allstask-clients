// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    BillableMetricId,
    BillableMetricIdSerializer,
} from './billableMetricId';
import {
    BillingMetricAggregateEnum,
    BillingMetricAggregateEnumSerializer,
} from './billingMetricAggregateEnum';

export interface MetricSummary {
    aggregationKey?: string | null;
    aggregationType: BillingMetricAggregateEnum;
    archivedAt?: Date | null;
    code: string;
    createdAt: Date;
    description?: string | null;
    id: BillableMetricId;
    name: string;
    }

export const MetricSummarySerializer = {
    _fromJsonObject(object: any): MetricSummary {
        return {
            aggregationKey: object['aggregation_key'],
            aggregationType: BillingMetricAggregateEnumSerializer._fromJsonObject(object['aggregation_type']),
            archivedAt: new Date(object['archived_at']),
            code: object['code'],
            createdAt: new Date(object['created_at']),
            description: object['description'],
            id: BillableMetricIdSerializer._fromJsonObject(object['id']),
            name: object['name'],
            };
    },

    _toJsonObject(self: MetricSummary): any {
        return {
            'aggregation_key': self.aggregationKey,
            'aggregation_type': BillingMetricAggregateEnumSerializer._toJsonObject(self.aggregationType),
            'archived_at': self.archivedAt,
            'code': self.code,
            'created_at': self.createdAt,
            'description': self.description,
            'id': BillableMetricIdSerializer._toJsonObject(self.id),
            'name': self.name,
            };
    }
}