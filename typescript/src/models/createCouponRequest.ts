// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    CouponDiscount,
    CouponDiscountSerializer,
} from './couponDiscount';
import {
    PlanId,
    PlanIdSerializer,
} from './planId';

export interface CreateCouponRequest {
    code: string;
    description?: string | null;
    discount: CouponDiscount;
    expiresAt?: Date | null;
    planIds?: PlanId[];
    recurringValue?: number | null;
    redemptionLimit?: number | null;
    reusable?: boolean;
    }

export const CreateCouponRequestSerializer = {
    _fromJsonObject(object: any): CreateCouponRequest {
        return {
            code: object['code'],
            description: object['description'],
            discount: CouponDiscountSerializer._fromJsonObject(object['discount']),
            expiresAt: new Date(object['expires_at']),
            planIds: object['plan_ids'].map((item: PlanId) => PlanIdSerializer._fromJsonObject(item)),
            recurringValue: object['recurring_value'],
            redemptionLimit: object['redemption_limit'],
            reusable: object['reusable'],
            };
    },

    _toJsonObject(self: CreateCouponRequest): any {
        return {
            'code': self.code,
            'description': self.description,
            'discount': CouponDiscountSerializer._toJsonObject(self.discount),
            'expires_at': self.expiresAt,
            'plan_ids': self.planIds?.map((item) => PlanIdSerializer._toJsonObject(item)),
            'recurring_value': self.recurringValue,
            'redemption_limit': self.redemptionLimit,
            'reusable': self.reusable,
            };
    }
}