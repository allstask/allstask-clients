// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    BatchJobResponse,
    BatchJobResponseSerializer,
} from './batchJobResponse';
import {
    PaginationResponse,
    PaginationResponseSerializer,
} from './paginationResponse';

export interface BatchJobListResponse {
    data: BatchJobResponse[];
    paginationMeta: PaginationResponse;
    }

export const BatchJobListResponseSerializer = {
    _fromJsonObject(object: any): BatchJobListResponse {
        return {
            data: object['data'].map((item: BatchJobResponse) => BatchJobResponseSerializer._fromJsonObject(item)),
            paginationMeta: PaginationResponseSerializer._fromJsonObject(object['pagination_meta']),
            };
    },

    _toJsonObject(self: BatchJobListResponse): any {
        return {
            'data': self.data.map((item) => BatchJobResponseSerializer._toJsonObject(item)),
            'pagination_meta': PaginationResponseSerializer._toJsonObject(self.paginationMeta),
            };
    }
}