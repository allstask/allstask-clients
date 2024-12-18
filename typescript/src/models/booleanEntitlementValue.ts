// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */

export interface BooleanEntitlementValue {
    enabled: boolean;
    }

export const BooleanEntitlementValueSerializer = {
    _fromJsonObject(object: any): BooleanEntitlementValue {
        return {
            enabled: object['enabled'],
            };
    },

    _toJsonObject(self: BooleanEntitlementValue): any {
        return {
            'enabled': self.enabled,
            };
    }
}