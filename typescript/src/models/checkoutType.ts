// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */

export enum CheckoutType {
    SelfServe = 'SELF_SERVE',
    SubscriptionActivation = 'SUBSCRIPTION_ACTIVATION',
    PlanChange = 'PLAN_CHANGE',
    AddonPurchase = 'ADDON_PURCHASE',
    }

export const CheckoutTypeSerializer = {
    _fromJsonObject(object: any): CheckoutType {
        return object;
    },

    _toJsonObject(self: CheckoutType): any {
        return self;
    }
}