// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    Customer,
    CustomerSerializer,
} from './customer';
import {
    PaginationResponse,
    PaginationResponseSerializer,
} from './paginationResponse';

export interface CustomerListResponse {
    data: Customer[];
    paginationMeta: PaginationResponse;
    }

export const CustomerListResponseSerializer = {
    _fromJsonObject(object: any): CustomerListResponse {
        return {
            data: object['data'].map((item: Customer) => CustomerSerializer._fromJsonObject(item)),
            paginationMeta: PaginationResponseSerializer._fromJsonObject(object['pagination_meta']),
            };
    },

    _toJsonObject(self: CustomerListResponse): any {
        return {
            'data': self.data.map((item) => CustomerSerializer._toJsonObject(item)),
            'pagination_meta': PaginationResponseSerializer._toJsonObject(self.paginationMeta),
            };
    }
}