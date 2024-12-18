// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    ConfigValue,
    ConfigValueSerializer,
} from './configValue';

export interface ConfigEffectiveEntitlementValue {
    value: ConfigValue;
    }

export const ConfigEffectiveEntitlementValueSerializer = {
    _fromJsonObject(object: any): ConfigEffectiveEntitlementValue {
        return {
            value: ConfigValueSerializer._fromJsonObject(object['value']),
            };
    },

    _toJsonObject(self: ConfigEffectiveEntitlementValue): any {
        return {
            'value': ConfigValueSerializer._toJsonObject(self.value),
            };
    }
}