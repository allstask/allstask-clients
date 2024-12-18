// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    CheckoutSession,
    CheckoutSessionSerializer,
} from './checkoutSession';

export interface CancelCheckoutSessionResponse {
    session: CheckoutSession;
    }

export const CancelCheckoutSessionResponseSerializer = {
    _fromJsonObject(object: any): CancelCheckoutSessionResponse {
        return {
            session: CheckoutSessionSerializer._fromJsonObject(object['session']),
            };
    },

    _toJsonObject(self: CancelCheckoutSessionResponse): any {
        return {
            'session': CheckoutSessionSerializer._toJsonObject(self.session),
            };
    }
}