// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    PlanId,
    PlanIdSerializer,
} from './planId';

export interface TrialConfig {
    durationDays: number;
    isFree: boolean;
    trialingPlanId?: PlanId | null;
    }

export const TrialConfigSerializer = {
    _fromJsonObject(object: any): TrialConfig {
        return {
            durationDays: object['duration_days'],
            isFree: object['is_free'],
            trialingPlanId: object['trialing_plan_id'] ? PlanIdSerializer._fromJsonObject(object['trialing_plan_id']): undefined,
            };
    },

    _toJsonObject(self: TrialConfig): any {
        return {
            'duration_days': self.durationDays,
            'is_free': self.isFree,
            'trialing_plan_id': self.trialingPlanId ? PlanIdSerializer._toJsonObject(self.trialingPlanId) : undefined,
            };
    }
}