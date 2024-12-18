// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */

export enum SubscriptionActivationConditionEnum {
    OnStart = 'ON_START',
    OnCheckout = 'ON_CHECKOUT',
    Manual = 'MANUAL',
    }

export const SubscriptionActivationConditionEnumSerializer = {
    _fromJsonObject(object: any): SubscriptionActivationConditionEnum {
        return object;
    },

    _toJsonObject(self: SubscriptionActivationConditionEnum): any {
        return self;
    }
}