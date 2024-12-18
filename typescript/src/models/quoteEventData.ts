// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    CustomerId,
    CustomerIdSerializer,
} from './customerId';
import {
    QuoteId,
    QuoteIdSerializer,
} from './quoteId';
import {
    SubscriptionId,
    SubscriptionIdSerializer,
} from './subscriptionId';

export interface QuoteEventData {
    customerId: CustomerId;
    quoteId: QuoteId;
    subscriptionId?: SubscriptionId | null;
    }

export const QuoteEventDataSerializer = {
    _fromJsonObject(object: any): QuoteEventData {
        return {
            customerId: CustomerIdSerializer._fromJsonObject(object['customer_id']),
            quoteId: QuoteIdSerializer._fromJsonObject(object['quote_id']),
            subscriptionId: object['subscription_id'] ? SubscriptionIdSerializer._fromJsonObject(object['subscription_id']): undefined,
            };
    },

    _toJsonObject(self: QuoteEventData): any {
        return {
            'customer_id': CustomerIdSerializer._toJsonObject(self.customerId),
            'quote_id': QuoteIdSerializer._toJsonObject(self.quoteId),
            'subscription_id': self.subscriptionId ? SubscriptionIdSerializer._toJsonObject(self.subscriptionId) : undefined,
            };
    }
}