// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    PaginationResponse,
    PaginationResponseSerializer,
} from './paginationResponse';
import {
    Subscription,
    SubscriptionSerializer,
} from './subscription';

export interface SubscriptionListResponse {
    data: Subscription[];
    paginationMeta: PaginationResponse;
    }

export const SubscriptionListResponseSerializer = {
    _fromJsonObject(object: any): SubscriptionListResponse {
        return {
            data: object['data'].map((item: Subscription) => SubscriptionSerializer._fromJsonObject(item)),
            paginationMeta: PaginationResponseSerializer._fromJsonObject(object['pagination_meta']),
            };
    },

    _toJsonObject(self: SubscriptionListResponse): any {
        return {
            'data': self.data.map((item) => SubscriptionSerializer._toJsonObject(item)),
            'pagination_meta': PaginationResponseSerializer._toJsonObject(self.paginationMeta),
            };
    }
}