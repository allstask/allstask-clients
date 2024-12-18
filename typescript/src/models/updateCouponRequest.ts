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

export interface UpdateCouponRequest {
    description?: string | null;
    discount?: CouponDiscount | null;
    planIds?: PlanId[] | null;
    }

export const UpdateCouponRequestSerializer = {
    _fromJsonObject(object: any): UpdateCouponRequest {
        return {
            description: object['description'],
            discount: object['discount'] ? CouponDiscountSerializer._fromJsonObject(object['discount']): undefined,
            planIds: object['plan_ids'].map((item: PlanId) => PlanIdSerializer._fromJsonObject(item)),
            };
    },

    _toJsonObject(self: UpdateCouponRequest): any {
        return {
            'description': self.description,
            'discount': self.discount ? CouponDiscountSerializer._toJsonObject(self.discount) : undefined,
            'plan_ids': self.planIds?.map((item) => PlanIdSerializer._toJsonObject(item)),
            };
    }
}