// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    SubscriptionDetails,
    SubscriptionDetailsSerializer,
} from './subscriptionDetails';

export interface SubscriptionUpdateResponse {
    subscription: SubscriptionDetails;
    }

export const SubscriptionUpdateResponseSerializer = {
    _fromJsonObject(object: any): SubscriptionUpdateResponse {
        return {
            subscription: SubscriptionDetailsSerializer._fromJsonObject(object['subscription']),
            };
    },

    _toJsonObject(self: SubscriptionUpdateResponse): any {
        return {
            'subscription': SubscriptionDetailsSerializer._toJsonObject(self.subscription),
            };
    }
}