// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    ResetPeriod,
    ResetPeriodSerializer,
} from './resetPeriod';

export interface MeteredEntitlementValue {
    /** Per-entitlement kill switch. `false` means disabled. */
        enabled?: boolean;
    /** Cap on usage. Null means unlimited. */
        limit?: number | null;
    resetPeriod?: ResetPeriod;
    }

export const MeteredEntitlementValueSerializer = {
    _fromJsonObject(object: any): MeteredEntitlementValue {
        return {
            enabled: object['enabled'],
            limit: object['limit'],
            resetPeriod: object['reset_period'] ? ResetPeriodSerializer._fromJsonObject(object['reset_period']): undefined,
            };
    },

    _toJsonObject(self: MeteredEntitlementValue): any {
        return {
            'enabled': self.enabled,
            'limit': self.limit,
            'reset_period': self.resetPeriod ? ResetPeriodSerializer._toJsonObject(self.resetPeriod) : undefined,
            };
    }
}