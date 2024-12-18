// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    PaginationResponse,
    PaginationResponseSerializer,
} from './paginationResponse';
import {
    ProductFamily,
    ProductFamilySerializer,
} from './productFamily';

export interface ProductFamilyListResponse {
    data: ProductFamily[];
    paginationMeta: PaginationResponse;
    }

export const ProductFamilyListResponseSerializer = {
    _fromJsonObject(object: any): ProductFamilyListResponse {
        return {
            data: object['data'].map((item: ProductFamily) => ProductFamilySerializer._fromJsonObject(item)),
            paginationMeta: PaginationResponseSerializer._fromJsonObject(object['pagination_meta']),
            };
    },

    _toJsonObject(self: ProductFamilyListResponse): any {
        return {
            'data': self.data.map((item) => ProductFamilySerializer._toJsonObject(item)),
            'pagination_meta': PaginationResponseSerializer._toJsonObject(self.paginationMeta),
            };
    }
}