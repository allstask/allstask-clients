// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    AddOn,
    AddOnSerializer,
} from './addOn';
import {
    PaginationResponse,
    PaginationResponseSerializer,
} from './paginationResponse';

export interface AddOnListResponse {
    data: AddOn[];
    paginationMeta: PaginationResponse;
    }

export const AddOnListResponseSerializer = {
    _fromJsonObject(object: any): AddOnListResponse {
        return {
            data: object['data'].map((item: AddOn) => AddOnSerializer._fromJsonObject(item)),
            paginationMeta: PaginationResponseSerializer._fromJsonObject(object['pagination_meta']),
            };
    },

    _toJsonObject(self: AddOnListResponse): any {
        return {
            'data': self.data.map((item) => AddOnSerializer._toJsonObject(item)),
            'pagination_meta': PaginationResponseSerializer._toJsonObject(self.paginationMeta),
            };
    }
}