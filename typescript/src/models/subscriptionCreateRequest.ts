// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    CreateSubscriptionAddOn,
    CreateSubscriptionAddOnSerializer,
} from './createSubscriptionAddOn';
import {
    CreateSubscriptionComponents,
    CreateSubscriptionComponentsSerializer,
} from './createSubscriptionComponents';
import {
    PaymentMethodsConfig,
    PaymentMethodsConfigSerializer,
} from './paymentMethodsConfig';
import {
    PlanId,
    PlanIdSerializer,
} from './planId';
import {
    SubscriptionActivationConditionEnum,
    SubscriptionActivationConditionEnumSerializer,
} from './subscriptionActivationConditionEnum';

export interface SubscriptionCreateRequest {
    activationCondition: SubscriptionActivationConditionEnum;
    addOns?: CreateSubscriptionAddOn[];
    autoAdvanceInvoices?: boolean;
    billingDayAnchor?: number | null;
    chargeAutomatically?: boolean;
    couponCodes?: string[];
    /**
* User-defined custom property values, keyed by definition `key`. Validated against the
* tenant's subscription definitions.
*/
        customProperties?: any;
    customerIdOrAlias: string;
    endDate?: string;
    invoiceMemo?: string;
    netTerms?: number;
    /** Payment methods configuration. If not specified, inherits from the invoicing entity. */
        paymentMethodsConfig?: PaymentMethodsConfig;
    planId: PlanId;
    priceComponents?: CreateSubscriptionComponents;
    purchaseOrder?: string | null;
    /**
* Migration mode: when true with a past start_date, skip creating invoices for past cycles.
* The subscription will be set to the current billing period with correct cycle_index.
*/
        skipPastInvoices?: boolean;
    startDate: string;
    trialDays?: number;
    version?: number;
    }

export const SubscriptionCreateRequestSerializer = {
    _fromJsonObject(object: any): SubscriptionCreateRequest {
        return {
            activationCondition: SubscriptionActivationConditionEnumSerializer._fromJsonObject(object['activation_condition']),
            addOns: object['add_ons'].map((item: CreateSubscriptionAddOn) => CreateSubscriptionAddOnSerializer._fromJsonObject(item)),
            autoAdvanceInvoices: object['auto_advance_invoices'],
            billingDayAnchor: object['billing_day_anchor'],
            chargeAutomatically: object['charge_automatically'],
            couponCodes: object['coupon_codes'],
            customProperties: object['custom_properties'],
            customerIdOrAlias: object['customer_id_or_alias'],
            endDate: object['end_date'],
            invoiceMemo: object['invoice_memo'],
            netTerms: object['net_terms'],
            paymentMethodsConfig: object['payment_methods_config'] ? PaymentMethodsConfigSerializer._fromJsonObject(object['payment_methods_config']): undefined,
            planId: PlanIdSerializer._fromJsonObject(object['plan_id']),
            priceComponents: object['price_components'] ? CreateSubscriptionComponentsSerializer._fromJsonObject(object['price_components']): undefined,
            purchaseOrder: object['purchase_order'],
            skipPastInvoices: object['skip_past_invoices'],
            startDate: object['start_date'],
            trialDays: object['trial_days'],
            version: object['version'],
            };
    },

    _toJsonObject(self: SubscriptionCreateRequest): any {
        return {
            'activation_condition': SubscriptionActivationConditionEnumSerializer._toJsonObject(self.activationCondition),
            'add_ons': self.addOns?.map((item) => CreateSubscriptionAddOnSerializer._toJsonObject(item)),
            'auto_advance_invoices': self.autoAdvanceInvoices,
            'billing_day_anchor': self.billingDayAnchor,
            'charge_automatically': self.chargeAutomatically,
            'coupon_codes': self.couponCodes,
            'custom_properties': self.customProperties,
            'customer_id_or_alias': self.customerIdOrAlias,
            'end_date': self.endDate,
            'invoice_memo': self.invoiceMemo,
            'net_terms': self.netTerms,
            'payment_methods_config': self.paymentMethodsConfig ? PaymentMethodsConfigSerializer._toJsonObject(self.paymentMethodsConfig) : undefined,
            'plan_id': PlanIdSerializer._toJsonObject(self.planId),
            'price_components': self.priceComponents ? CreateSubscriptionComponentsSerializer._toJsonObject(self.priceComponents) : undefined,
            'purchase_order': self.purchaseOrder,
            'skip_past_invoices': self.skipPastInvoices,
            'start_date': self.startDate,
            'trial_days': self.trialDays,
            'version': self.version,
            };
    }
}