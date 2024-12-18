// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    Feature,
    FeatureSerializer,
} from './feature';
import {
    PaginationResponse,
    PaginationResponseSerializer,
} from './paginationResponse';

export interface FeatureListResponse {
    data: Feature[];
    paginationMeta: PaginationResponse;
    }

export const FeatureListResponseSerializer = {
    _fromJsonObject(object: any): FeatureListResponse {
        return {
            data: object['data'].map((item: Feature) => FeatureSerializer._fromJsonObject(item)),
            paginationMeta: PaginationResponseSerializer._fromJsonObject(object['pagination_meta']),
            };
    },

    _toJsonObject(self: FeatureListResponse): any {
        return {
            'data': self.data.map((item) => FeatureSerializer._toJsonObject(item)),
            'pagination_meta': PaginationResponseSerializer._toJsonObject(self.paginationMeta),
            };
    }
}