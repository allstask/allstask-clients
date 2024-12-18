// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    CountryCode,
    CountryCodeSerializer,
} from './countryCode';

export interface Address {
    city?: string | null;
    country?: CountryCode | null;
    line1?: string | null;
    line2?: string | null;
    state?: string | null;
    zipCode?: string | null;
    }

export const AddressSerializer = {
    _fromJsonObject(object: any): Address {
        return {
            city: object['city'],
            country: object['country'] ? CountryCodeSerializer._fromJsonObject(object['country']): undefined,
            line1: object['line1'],
            line2: object['line2'],
            state: object['state'],
            zipCode: object['zip_code'],
            };
    },

    _toJsonObject(self: Address): any {
        return {
            'city': self.city,
            'country': self.country ? CountryCodeSerializer._toJsonObject(self.country) : undefined,
            'line1': self.line1,
            'line2': self.line2,
            'state': self.state,
            'zip_code': self.zipCode,
            };
    }
}