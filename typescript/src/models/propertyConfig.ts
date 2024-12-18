// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    SelectOption,
    SelectOptionSerializer,
} from './selectOption';
/** Type-specific configuration. Only the fields relevant to `property_type` are interpreted. */
export interface PropertyConfig {
    max?: number | null;
    /** Maximum length for `TEXT`. */
        maxLength?: number | null;
    /** Inclusive numeric bounds for `NUMBER`. */
        min?: number | null;
    /** Allowed choices for `SINGLE_SELECT` / `MULTI_SELECT`. */
        options?: SelectOption[] | null;
    }

export const PropertyConfigSerializer = {
    _fromJsonObject(object: any): PropertyConfig {
        return {
            max: object['max'],
            maxLength: object['max_length'],
            min: object['min'],
            options: object['options'].map((item: SelectOption) => SelectOptionSerializer._fromJsonObject(item)),
            };
    },

    _toJsonObject(self: PropertyConfig): any {
        return {
            'max': self.max,
            'max_length': self.maxLength,
            'min': self.min,
            'options': self.options?.map((item) => SelectOptionSerializer._toJsonObject(item)),
            };
    }
}