// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    Invoice,
    InvoiceSerializer,
} from './invoice';
import {
    PaginationResponse,
    PaginationResponseSerializer,
} from './paginationResponse';

export interface InvoiceListResponse {
    data: Invoice[];
    paginationMeta: PaginationResponse;
    }

export const InvoiceListResponseSerializer = {
    _fromJsonObject(object: any): InvoiceListResponse {
        return {
            data: object['data'].map((item: Invoice) => InvoiceSerializer._fromJsonObject(item)),
            paginationMeta: PaginationResponseSerializer._fromJsonObject(object['pagination_meta']),
            };
    },

    _toJsonObject(self: InvoiceListResponse): any {
        return {
            'data': self.data.map((item) => InvoiceSerializer._toJsonObject(item)),
            'pagination_meta': PaginationResponseSerializer._toJsonObject(self.paginationMeta),
            };
    }
}