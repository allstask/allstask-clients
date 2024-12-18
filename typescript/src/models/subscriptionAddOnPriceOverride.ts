// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    PriceEntry,
    PriceEntrySerializer,
} from './priceEntry';

export interface SubscriptionAddOnPriceOverride {
    name?: string | null;
    priceEntry: PriceEntry;
    }

export const SubscriptionAddOnPriceOverrideSerializer = {
    _fromJsonObject(object: any): SubscriptionAddOnPriceOverride {
        return {
            name: object['name'],
            priceEntry: PriceEntrySerializer._fromJsonObject(object['price_entry']),
            };
    },

    _toJsonObject(self: SubscriptionAddOnPriceOverride): any {
        return {
            'name': self.name,
            'price_entry': PriceEntrySerializer._toJsonObject(self.priceEntry),
            };
    }
}