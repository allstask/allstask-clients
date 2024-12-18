// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    Subscription,
    SubscriptionSerializer,
} from './subscription';

export interface CancelSubscriptionResponse {
    subscription: Subscription;
    }

export const CancelSubscriptionResponseSerializer = {
    _fromJsonObject(object: any): CancelSubscriptionResponse {
        return {
            subscription: SubscriptionSerializer._fromJsonObject(object['subscription']),
            };
    },

    _toJsonObject(self: CancelSubscriptionResponse): any {
        return {
            'subscription': SubscriptionSerializer._toJsonObject(self.subscription),
            };
    }
}