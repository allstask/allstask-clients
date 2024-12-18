// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    SubLineItem,
    SubLineItemSerializer,
} from './subLineItem';

export interface InvoiceLineItem {
    amountTotal: number;
    description?: string | null;
    endDate: string;
    name: string;
    quantity?: number;
    startDate: string;
    subLineItems: SubLineItem[];
    taxRate: number;
    unitPrice?: number;
    }

export const InvoiceLineItemSerializer = {
    _fromJsonObject(object: any): InvoiceLineItem {
        return {
            amountTotal: object['amount_total'],
            description: object['description'],
            endDate: object['end_date'],
            name: object['name'],
            quantity: object['quantity'],
            startDate: object['start_date'],
            subLineItems: object['sub_line_items'].map((item: SubLineItem) => SubLineItemSerializer._fromJsonObject(item)),
            taxRate: object['tax_rate'],
            unitPrice: object['unit_price'],
            };
    },

    _toJsonObject(self: InvoiceLineItem): any {
        return {
            'amount_total': self.amountTotal,
            'description': self.description,
            'end_date': self.endDate,
            'name': self.name,
            'quantity': self.quantity,
            'start_date': self.startDate,
            'sub_line_items': self.subLineItems.map((item) => SubLineItemSerializer._toJsonObject(item)),
            'tax_rate': self.taxRate,
            'unit_price': self.unitPrice,
            };
    }
}