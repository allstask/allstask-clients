// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    PaginationResponse,
    PaginationResponseSerializer,
} from './paginationResponse';
import {
    Product,
    ProductSerializer,
} from './product';

export interface ProductListResponse {
    data: Product[];
    paginationMeta: PaginationResponse;
    }

export const ProductListResponseSerializer = {
    _fromJsonObject(object: any): ProductListResponse {
        return {
            data: object['data'].map((item: Product) => ProductSerializer._fromJsonObject(item)),
            paginationMeta: PaginationResponseSerializer._fromJsonObject(object['pagination_meta']),
            };
    },

    _toJsonObject(self: ProductListResponse): any {
        return {
            'data': self.data.map((item) => ProductSerializer._toJsonObject(item)),
            'pagination_meta': PaginationResponseSerializer._toJsonObject(self.paginationMeta),
            };
    }
}