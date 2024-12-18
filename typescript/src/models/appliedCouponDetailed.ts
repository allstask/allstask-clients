// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    AppliedCoupon,
    AppliedCouponSerializer,
} from './appliedCoupon';
import {
    SubscriptionCoupon,
    SubscriptionCouponSerializer,
} from './subscriptionCoupon';

export interface AppliedCouponDetailed {
    appliedCoupon: AppliedCoupon;
    coupon: SubscriptionCoupon;
    }

export const AppliedCouponDetailedSerializer = {
    _fromJsonObject(object: any): AppliedCouponDetailed {
        return {
            appliedCoupon: AppliedCouponSerializer._fromJsonObject(object['applied_coupon']),
            coupon: SubscriptionCouponSerializer._fromJsonObject(object['coupon']),
            };
    },

    _toJsonObject(self: AppliedCouponDetailed): any {
        return {
            'applied_coupon': AppliedCouponSerializer._toJsonObject(self.appliedCoupon),
            'coupon': SubscriptionCouponSerializer._toJsonObject(self.coupon),
            };
    }
}