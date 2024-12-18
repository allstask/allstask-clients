// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    PaginationResponse,
    PaginationResponseSerializer,
} from './paginationResponse';
import {
    PlanVersionSummary,
    PlanVersionSummarySerializer,
} from './planVersionSummary';

export interface PlanVersionListResponse {
    data: PlanVersionSummary[];
    paginationMeta: PaginationResponse;
    }

export const PlanVersionListResponseSerializer = {
    _fromJsonObject(object: any): PlanVersionListResponse {
        return {
            data: object['data'].map((item: PlanVersionSummary) => PlanVersionSummarySerializer._fromJsonObject(item)),
            paginationMeta: PaginationResponseSerializer._fromJsonObject(object['pagination_meta']),
            };
    },

    _toJsonObject(self: PlanVersionListResponse): any {
        return {
            'data': self.data.map((item) => PlanVersionSummarySerializer._toJsonObject(item)),
            'pagination_meta': PaginationResponseSerializer._toJsonObject(self.paginationMeta),
            };
    }
}