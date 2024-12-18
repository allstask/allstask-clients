// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    Address,
    AddressSerializer,
} from './address';
import {
    Currency,
    CurrencySerializer,
} from './currency';
import {
    CustomTaxRate,
    CustomTaxRateSerializer,
} from './customTaxRate';
import {
    InvoicingEntityId,
    InvoicingEntityIdSerializer,
} from './invoicingEntityId';
import {
    ShippingAddress,
    ShippingAddressSerializer,
} from './shippingAddress';

export interface CustomerPatchRequest {
    alias?: string | null;
    billingAddress?: Address | null;
    billingEmail?: string | null;
    currency?: Currency | null;
    /**
* Partial update of custom property values (merge; send a key with `null` to remove it).
* Omit to leave unchanged.
*/
        customProperties?: any;
    customTaxes?: CustomTaxRate[] | null;
    invoicingEmails?: string[] | null;
    invoicingEntityId?: InvoicingEntityId | null;
    isTaxExempt?: boolean | null;
    name?: string | null;
    phone?: string | null;
    shippingAddress?: ShippingAddress | null;
    vatNumber?: string | null;
    }

export const CustomerPatchRequestSerializer = {
    _fromJsonObject(object: any): CustomerPatchRequest {
        return {
            alias: object['alias'],
            billingAddress: object['billing_address'] ? AddressSerializer._fromJsonObject(object['billing_address']): undefined,
            billingEmail: object['billing_email'],
            currency: object['currency'] ? CurrencySerializer._fromJsonObject(object['currency']): undefined,
            customProperties: object['custom_properties'],
            customTaxes: object['custom_taxes'].map((item: CustomTaxRate) => CustomTaxRateSerializer._fromJsonObject(item)),
            invoicingEmails: object['invoicing_emails'],
            invoicingEntityId: object['invoicing_entity_id'] ? InvoicingEntityIdSerializer._fromJsonObject(object['invoicing_entity_id']): undefined,
            isTaxExempt: object['is_tax_exempt'],
            name: object['name'],
            phone: object['phone'],
            shippingAddress: object['shipping_address'] ? ShippingAddressSerializer._fromJsonObject(object['shipping_address']): undefined,
            vatNumber: object['vat_number'],
            };
    },

    _toJsonObject(self: CustomerPatchRequest): any {
        return {
            'alias': self.alias,
            'billing_address': self.billingAddress ? AddressSerializer._toJsonObject(self.billingAddress) : undefined,
            'billing_email': self.billingEmail,
            'currency': self.currency ? CurrencySerializer._toJsonObject(self.currency) : undefined,
            'custom_properties': self.customProperties,
            'custom_taxes': self.customTaxes?.map((item) => CustomTaxRateSerializer._toJsonObject(item)),
            'invoicing_emails': self.invoicingEmails,
            'invoicing_entity_id': self.invoicingEntityId ? InvoicingEntityIdSerializer._toJsonObject(self.invoicingEntityId) : undefined,
            'is_tax_exempt': self.isTaxExempt,
            'name': self.name,
            'phone': self.phone,
            'shipping_address': self.shippingAddress ? ShippingAddressSerializer._toJsonObject(self.shippingAddress) : undefined,
            'vat_number': self.vatNumber,
            };
    }
}