// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */

export interface BooleanResolvedEntitlementValue {
    enabled: boolean;
    }

export const BooleanResolvedEntitlementValueSerializer = {
    _fromJsonObject(object: any): BooleanResolvedEntitlementValue {
        return {
            enabled: object['enabled'],
            };
    },

    _toJsonObject(self: BooleanResolvedEntitlementValue): any {
        return {
            'enabled': self.enabled,
            };
    }
}