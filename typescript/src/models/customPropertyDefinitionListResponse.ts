// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    CustomPropertyDefinition,
    CustomPropertyDefinitionSerializer,
} from './customPropertyDefinition';
import {
    PaginationResponse,
    PaginationResponseSerializer,
} from './paginationResponse';

export interface CustomPropertyDefinitionListResponse {
    data: CustomPropertyDefinition[];
    paginationMeta: PaginationResponse;
    }

export const CustomPropertyDefinitionListResponseSerializer = {
    _fromJsonObject(object: any): CustomPropertyDefinitionListResponse {
        return {
            data: object['data'].map((item: CustomPropertyDefinition) => CustomPropertyDefinitionSerializer._fromJsonObject(item)),
            paginationMeta: PaginationResponseSerializer._fromJsonObject(object['pagination_meta']),
            };
    },

    _toJsonObject(self: CustomPropertyDefinitionListResponse): any {
        return {
            'data': self.data.map((item) => CustomPropertyDefinitionSerializer._toJsonObject(item)),
            'pagination_meta': PaginationResponseSerializer._toJsonObject(self.paginationMeta),
            };
    }
}