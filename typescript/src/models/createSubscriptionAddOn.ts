// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    AddOnId,
    AddOnIdSerializer,
} from './addOnId';
import {
    SubscriptionAddOnCustomization,
    SubscriptionAddOnCustomizationSerializer,
} from './subscriptionAddOnCustomization';

export interface CreateSubscriptionAddOn {
    addOnId: AddOnId;
    customization?: SubscriptionAddOnCustomization | null;
    quantity?: number;
    }

export const CreateSubscriptionAddOnSerializer = {
    _fromJsonObject(object: any): CreateSubscriptionAddOn {
        return {
            addOnId: AddOnIdSerializer._fromJsonObject(object['add_on_id']),
            customization: object['customization'] ? SubscriptionAddOnCustomizationSerializer._fromJsonObject(object['customization']): undefined,
            quantity: object['quantity'],
            };
    },

    _toJsonObject(self: CreateSubscriptionAddOn): any {
        return {
            'add_on_id': AddOnIdSerializer._toJsonObject(self.addOnId),
            'customization': self.customization ? SubscriptionAddOnCustomizationSerializer._toJsonObject(self.customization) : undefined,
            'quantity': self.quantity,
            };
    }
}