// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
/** A boolean config value. */
export interface BooleanConfigValue {
    value: boolean;
    }

export const BooleanConfigValueSerializer = {
    _fromJsonObject(object: any): BooleanConfigValue {
        return {
            value: object['value'],
            };
    },

    _toJsonObject(self: BooleanConfigValue): any {
        return {
            'value': self.value,
            };
    }
}