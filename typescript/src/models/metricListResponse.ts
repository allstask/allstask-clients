// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    MetricSummary,
    MetricSummarySerializer,
} from './metricSummary';
import {
    PaginationResponse,
    PaginationResponseSerializer,
} from './paginationResponse';

export interface MetricListResponse {
    data: MetricSummary[];
    paginationMeta: PaginationResponse;
    }

export const MetricListResponseSerializer = {
    _fromJsonObject(object: any): MetricListResponse {
        return {
            data: object['data'].map((item: MetricSummary) => MetricSummarySerializer._fromJsonObject(item)),
            paginationMeta: PaginationResponseSerializer._fromJsonObject(object['pagination_meta']),
            };
    },

    _toJsonObject(self: MetricListResponse): any {
        return {
            'data': self.data.map((item) => MetricSummarySerializer._toJsonObject(item)),
            'pagination_meta': PaginationResponseSerializer._toJsonObject(self.paginationMeta),
            };
    }
}