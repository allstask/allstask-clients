// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    CheckoutSession,
    CheckoutSessionSerializer,
} from './checkoutSession';

export interface ListCheckoutSessionsResponse {
    sessions: CheckoutSession[];
    }

export const ListCheckoutSessionsResponseSerializer = {
    _fromJsonObject(object: any): ListCheckoutSessionsResponse {
        return {
            sessions: object['sessions'].map((item: CheckoutSession) => CheckoutSessionSerializer._fromJsonObject(item)),
            };
    },

    _toJsonObject(self: ListCheckoutSessionsResponse): any {
        return {
            'sessions': self.sessions.map((item) => CheckoutSessionSerializer._toJsonObject(item)),
            };
    }
}