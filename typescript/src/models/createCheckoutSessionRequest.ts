// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    CouponId,
    CouponIdSerializer,
} from './couponId';
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
    PlanVersionId,
    PlanVersionIdSerializer,
} from './planVersionId';

export interface CreateCheckoutSessionRequest {
    addOns?: CreateSubscriptionAddOn[] | null;
    /** If false, invoices will stay in Draft until manually reviewed and finalized. Default is true. */
        autoAdvanceInvoices?: boolean | null;
    billingDayAnchor?: number | null;
    billingStartDate?: string | null;
    /** Automatically try to charge the customer's configured payment method on finalize. Default is true. */
        chargeAutomatically?: boolean | null;
    components?: CreateSubscriptionComponents | null;
    couponCode?: string | null;
    couponIds?: CouponId[];
    /** Customer ID or alias */
        customerId: string;
    endDate?: string | null;
    /** Session expiry time in hours. Default is 1 hour for self-serve checkout. */
        expiresInHours?: number | null;
    invoiceMemo?: string | null;
    invoiceThreshold?: number | null;
    metadata?: any;
    netTerms?: number | null;
    paymentMethodsConfig?: PaymentMethodsConfig | null;
    planVersionId: PlanVersionId;
    purchaseOrder?: string | null;
    trialDurationDays?: number | null;
    }

export const CreateCheckoutSessionRequestSerializer = {
    _fromJsonObject(object: any): CreateCheckoutSessionRequest {
        return {
            addOns: object['add_ons'].map((item: CreateSubscriptionAddOn) => CreateSubscriptionAddOnSerializer._fromJsonObject(item)),
            autoAdvanceInvoices: object['auto_advance_invoices'],
            billingDayAnchor: object['billing_day_anchor'],
            billingStartDate: object['billing_start_date'],
            chargeAutomatically: object['charge_automatically'],
            components: object['components'] ? CreateSubscriptionComponentsSerializer._fromJsonObject(object['components']): undefined,
            couponCode: object['coupon_code'],
            couponIds: object['coupon_ids'].map((item: CouponId) => CouponIdSerializer._fromJsonObject(item)),
            customerId: object['customer_id'],
            endDate: object['end_date'],
            expiresInHours: object['expires_in_hours'],
            invoiceMemo: object['invoice_memo'],
            invoiceThreshold: object['invoice_threshold'],
            metadata: object['metadata'],
            netTerms: object['net_terms'],
            paymentMethodsConfig: object['payment_methods_config'] ? PaymentMethodsConfigSerializer._fromJsonObject(object['payment_methods_config']): undefined,
            planVersionId: PlanVersionIdSerializer._fromJsonObject(object['plan_version_id']),
            purchaseOrder: object['purchase_order'],
            trialDurationDays: object['trial_duration_days'],
            };
    },

    _toJsonObject(self: CreateCheckoutSessionRequest): any {
        return {
            'add_ons': self.addOns?.map((item) => CreateSubscriptionAddOnSerializer._toJsonObject(item)),
            'auto_advance_invoices': self.autoAdvanceInvoices,
            'billing_day_anchor': self.billingDayAnchor,
            'billing_start_date': self.billingStartDate,
            'charge_automatically': self.chargeAutomatically,
            'components': self.components ? CreateSubscriptionComponentsSerializer._toJsonObject(self.components) : undefined,
            'coupon_code': self.couponCode,
            'coupon_ids': self.couponIds?.map((item) => CouponIdSerializer._toJsonObject(item)),
            'customer_id': self.customerId,
            'end_date': self.endDate,
            'expires_in_hours': self.expiresInHours,
            'invoice_memo': self.invoiceMemo,
            'invoice_threshold': self.invoiceThreshold,
            'metadata': self.metadata,
            'net_terms': self.netTerms,
            'payment_methods_config': self.paymentMethodsConfig ? PaymentMethodsConfigSerializer._toJsonObject(self.paymentMethodsConfig) : undefined,
            'plan_version_id': PlanVersionIdSerializer._toJsonObject(self.planVersionId),
            'purchase_order': self.purchaseOrder,
            'trial_duration_days': self.trialDurationDays,
            };
    }
}