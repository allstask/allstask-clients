// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
/** A number config value (decimal, encoded as a string). */
export interface NumberConfigValue {
    value: number;
    }

export const NumberConfigValueSerializer = {
    _fromJsonObject(object: any): NumberConfigValue {
        return {
            value: object['value'],
            };
    },

    _toJsonObject(self: NumberConfigValue): any {
        return {
            'value': self.value,
            };
    }
}