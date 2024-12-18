// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    CheckoutSession,
    CheckoutSessionSerializer,
} from './checkoutSession';

export interface GetCheckoutSessionResponse {
    session: CheckoutSession;
    }

export const GetCheckoutSessionResponseSerializer = {
    _fromJsonObject(object: any): GetCheckoutSessionResponse {
        return {
            session: CheckoutSessionSerializer._fromJsonObject(object['session']),
            };
    },

    _toJsonObject(self: GetCheckoutSessionResponse): any {
        return {
            'session': CheckoutSessionSerializer._toJsonObject(self.session),
            };
    }
}