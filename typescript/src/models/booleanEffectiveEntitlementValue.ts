// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */

export interface BooleanEffectiveEntitlementValue {
    enabled: boolean;
    }

export const BooleanEffectiveEntitlementValueSerializer = {
    _fromJsonObject(object: any): BooleanEffectiveEntitlementValue {
        return {
            enabled: object['enabled'],
            };
    },

    _toJsonObject(self: BooleanEffectiveEntitlementValue): any {
        return {
            'enabled': self.enabled,
            };
    }
}