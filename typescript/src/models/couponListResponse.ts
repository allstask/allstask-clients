// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    Coupon,
    CouponSerializer,
} from './coupon';
import {
    PaginationResponse,
    PaginationResponseSerializer,
} from './paginationResponse';

export interface CouponListResponse {
    data: Coupon[];
    paginationMeta: PaginationResponse;
    }

export const CouponListResponseSerializer = {
    _fromJsonObject(object: any): CouponListResponse {
        return {
            data: object['data'].map((item: Coupon) => CouponSerializer._fromJsonObject(item)),
            paginationMeta: PaginationResponseSerializer._fromJsonObject(object['pagination_meta']),
            };
    },

    _toJsonObject(self: CouponListResponse): any {
        return {
            'data': self.data.map((item) => CouponSerializer._toJsonObject(item)),
            'pagination_meta': PaginationResponseSerializer._toJsonObject(self.paginationMeta),
            };
    }
}