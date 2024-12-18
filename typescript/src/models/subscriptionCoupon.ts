// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    CouponDiscount,
    CouponDiscountSerializer,
} from './couponDiscount';
import {
    CouponId,
    CouponIdSerializer,
} from './couponId';
/**
* Coupon as embedded in subscription details — a subset of the `Coupon` resource
* returned by the coupons API.
*/
export interface SubscriptionCoupon {
    code: string;
    description: string;
    disabled: boolean;
    discount: CouponDiscount;
    expiresAt?: Date | null;
    id: CouponId;
    recurringValue?: number | null;
    redemptionLimit?: number | null;
    reusable: boolean;
    }

export const SubscriptionCouponSerializer = {
    _fromJsonObject(object: any): SubscriptionCoupon {
        return {
            code: object['code'],
            description: object['description'],
            disabled: object['disabled'],
            discount: CouponDiscountSerializer._fromJsonObject(object['discount']),
            expiresAt: new Date(object['expires_at']),
            id: CouponIdSerializer._fromJsonObject(object['id']),
            recurringValue: object['recurring_value'],
            redemptionLimit: object['redemption_limit'],
            reusable: object['reusable'],
            };
    },

    _toJsonObject(self: SubscriptionCoupon): any {
        return {
            'code': self.code,
            'description': self.description,
            'disabled': self.disabled,
            'discount': CouponDiscountSerializer._toJsonObject(self.discount),
            'expires_at': self.expiresAt,
            'id': CouponIdSerializer._toJsonObject(self.id),
            'recurring_value': self.recurringValue,
            'redemption_limit': self.redemptionLimit,
            'reusable': self.reusable,
            };
    }
}