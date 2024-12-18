// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    CheckoutSession,
    CheckoutSessionSerializer,
} from './checkoutSession';

export interface CreateCheckoutSessionResponse {
    session: CheckoutSession;
    }

export const CreateCheckoutSessionResponseSerializer = {
    _fromJsonObject(object: any): CreateCheckoutSessionResponse {
        return {
            session: CheckoutSessionSerializer._fromJsonObject(object['session']),
            };
    },

    _toJsonObject(self: CreateCheckoutSessionResponse): any {
        return {
            'session': CheckoutSessionSerializer._toJsonObject(self.session),
            };
    }
}