// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */

export interface MeteredEntitlementUsage {
    consumed?: number | null;
    remaining?: number | null;
    resetAt?: Date | null;
    }

export const MeteredEntitlementUsageSerializer = {
    _fromJsonObject(object: any): MeteredEntitlementUsage {
        return {
            consumed: object['consumed'],
            remaining: object['remaining'],
            resetAt: new Date(object['reset_at']),
            };
    },

    _toJsonObject(self: MeteredEntitlementUsage): any {
        return {
            'consumed': self.consumed,
            'remaining': self.remaining,
            'reset_at': self.resetAt,
            };
    }
}