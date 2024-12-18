// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    PriceComponentId,
    PriceComponentIdSerializer,
} from './priceComponentId';
import {
    ProductId,
    ProductIdSerializer,
} from './productId';
import {
    SubscriptionFee,
    SubscriptionFeeSerializer,
} from './subscriptionFee';
import {
    SubscriptionFeeBillingPeriodEnum,
    SubscriptionFeeBillingPeriodEnumSerializer,
} from './subscriptionFeeBillingPeriodEnum';

export interface SubscriptionComponent {
    fee: SubscriptionFee;
    name: string;
    period: SubscriptionFeeBillingPeriodEnum;
    priceComponentId?: PriceComponentId | null;
    productId?: ProductId | null;
    }

export const SubscriptionComponentSerializer = {
    _fromJsonObject(object: any): SubscriptionComponent {
        return {
            fee: SubscriptionFeeSerializer._fromJsonObject(object['fee']),
            name: object['name'],
            period: SubscriptionFeeBillingPeriodEnumSerializer._fromJsonObject(object['period']),
            priceComponentId: object['price_component_id'] ? PriceComponentIdSerializer._fromJsonObject(object['price_component_id']): undefined,
            productId: object['product_id'] ? ProductIdSerializer._fromJsonObject(object['product_id']): undefined,
            };
    },

    _toJsonObject(self: SubscriptionComponent): any {
        return {
            'fee': SubscriptionFeeSerializer._toJsonObject(self.fee),
            'name': self.name,
            'period': SubscriptionFeeBillingPeriodEnumSerializer._toJsonObject(self.period),
            'price_component_id': self.priceComponentId ? PriceComponentIdSerializer._toJsonObject(self.priceComponentId) : undefined,
            'product_id': self.productId ? ProductIdSerializer._toJsonObject(self.productId) : undefined,
            };
    }
}