// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
/**
* Operator of a pre-aggregation [`MetricFilter`]. `EQUAL`/`NOT_EQUAL` are the single-value
* forms of `IN`/`NOT_IN`. Negation (`NOT_EQUAL`/`NOT_IN`) is presence-required: an event
* missing the property is excluded.
*/
export enum MetricFilterOperator {
    Equal = 'EQUAL',
    NotEqual = 'NOT_EQUAL',
    In = 'IN',
    NotIn = 'NOT_IN',
    }

export const MetricFilterOperatorSerializer = {
    _fromJsonObject(object: any): MetricFilterOperator {
        return object;
    },

    _toJsonObject(self: MetricFilterOperator): any {
        return self;
    }
}