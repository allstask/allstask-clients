// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    ConfigValue,
    ConfigValueSerializer,
} from './configValue';

export interface ConfigEntitlementValue {
    value: ConfigValue;
    }

export const ConfigEntitlementValueSerializer = {
    _fromJsonObject(object: any): ConfigEntitlementValue {
        return {
            value: ConfigValueSerializer._fromJsonObject(object['value']),
            };
    },

    _toJsonObject(self: ConfigEntitlementValue): any {
        return {
            'value': ConfigValueSerializer._toJsonObject(self.value),
            };
    }
}