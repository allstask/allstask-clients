// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */

export enum CustomPropertyEntityType {
    Customer = 'CUSTOMER',
    Subscription = 'SUBSCRIPTION',
    Invoice = 'INVOICE',
    CreditNote = 'CREDIT_NOTE',
    }

export const CustomPropertyEntityTypeSerializer = {
    _fromJsonObject(object: any): CustomPropertyEntityType {
        return object;
    },

    _toJsonObject(self: CustomPropertyEntityType): any {
        return self;
    }
}