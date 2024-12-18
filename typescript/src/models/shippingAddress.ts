// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    Address,
    AddressSerializer,
} from './address';

export interface ShippingAddress {
    address?: Address | null;
    sameAsBilling: boolean;
    }

export const ShippingAddressSerializer = {
    _fromJsonObject(object: any): ShippingAddress {
        return {
            address: object['address'] ? AddressSerializer._fromJsonObject(object['address']): undefined,
            sameAsBilling: object['same_as_billing'],
            };
    },

    _toJsonObject(self: ShippingAddress): any {
        return {
            'address': self.address ? AddressSerializer._toJsonObject(self.address) : undefined,
            'same_as_billing': self.sameAsBilling,
            };
    }
}