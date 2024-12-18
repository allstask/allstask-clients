// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    TaxExemptionType,
    TaxExemptionTypeSerializer,
} from './taxExemptionType';

export interface TaxBreakdownItem {
    exemptionType?: TaxExemptionType | null;
    name: string;
    taxAmount: number;
    taxRate: number;
    taxableAmount: number;
    }

export const TaxBreakdownItemSerializer = {
    _fromJsonObject(object: any): TaxBreakdownItem {
        return {
            exemptionType: object['exemption_type'] ? TaxExemptionTypeSerializer._fromJsonObject(object['exemption_type']): undefined,
            name: object['name'],
            taxAmount: object['tax_amount'],
            taxRate: object['tax_rate'],
            taxableAmount: object['taxable_amount'],
            };
    },

    _toJsonObject(self: TaxBreakdownItem): any {
        return {
            'exemption_type': self.exemptionType ? TaxExemptionTypeSerializer._toJsonObject(self.exemptionType) : undefined,
            'name': self.name,
            'tax_amount': self.taxAmount,
            'tax_rate': self.taxRate,
            'taxable_amount': self.taxableAmount,
            };
    }
}