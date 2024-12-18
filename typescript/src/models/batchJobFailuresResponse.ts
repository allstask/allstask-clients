// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    BatchJobItemFailureResponse,
    BatchJobItemFailureResponseSerializer,
} from './batchJobItemFailureResponse';

export interface BatchJobFailuresResponse {
    data: BatchJobItemFailureResponse[];
    totalCount: number;
    }

export const BatchJobFailuresResponseSerializer = {
    _fromJsonObject(object: any): BatchJobFailuresResponse {
        return {
            data: object['data'].map((item: BatchJobItemFailureResponse) => BatchJobItemFailureResponseSerializer._fromJsonObject(item)),
            totalCount: object['total_count'],
            };
    },

    _toJsonObject(self: BatchJobFailuresResponse): any {
        return {
            'data': self.data.map((item) => BatchJobItemFailureResponseSerializer._toJsonObject(item)),
            'total_count': self.totalCount,
            };
    }
}