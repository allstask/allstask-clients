// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */

export enum BillingMetricAggregateEnum {
    Count = 'COUNT',
    Latest = 'LATEST',
    Max = 'MAX',
    Min = 'MIN',
    Mean = 'MEAN',
    Sum = 'SUM',
    CountDistinct = 'COUNT_DISTINCT',
    }

export const BillingMetricAggregateEnumSerializer = {
    _fromJsonObject(object: any): BillingMetricAggregateEnum {
        return object;
    },

    _toJsonObject(self: BillingMetricAggregateEnum): any {
        return self;
    }
}