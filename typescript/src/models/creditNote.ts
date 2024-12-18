// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    CreditNoteId,
    CreditNoteIdSerializer,
} from './creditNoteId';
import {
    CreditNoteStatus,
    CreditNoteStatusSerializer,
} from './creditNoteStatus';
import {
    CreditType,
    CreditTypeSerializer,
} from './creditType';
import {
    Currency,
    CurrencySerializer,
} from './currency';
import {
    CustomerId,
    CustomerIdSerializer,
} from './customerId';
import {
    InvoiceId,
    InvoiceIdSerializer,
} from './invoiceId';
import {
    InvoiceLineItem,
    InvoiceLineItemSerializer,
} from './invoiceLineItem';
import {
    PlanVersionId,
    PlanVersionIdSerializer,
} from './planVersionId';
import {
    SubscriptionId,
    SubscriptionIdSerializer,
} from './subscriptionId';
import {
    TaxBreakdownItem,
    TaxBreakdownItemSerializer,
} from './taxBreakdownItem';

export interface CreditNote {
    createdAt: Date;
    creditNoteNumber: string;
    creditType: CreditType;
    creditedAmountCents: number;
    currency: Currency;
    /** User-defined custom property values, keyed by definition `key`. */
        customProperties: any;
    customerId: CustomerId;
    finalizedAt?: Date | null;
    id: CreditNoteId;
    invoiceId: InvoiceId;
    invoiceNumber: string;
    lineItems: InvoiceLineItem[];
    memo?: string | null;
    planVersionId?: PlanVersionId | null;
    reason?: string | null;
    refundedAmountCents: number;
    status: CreditNoteStatus;
    subscriptionId?: SubscriptionId | null;
    subtotal: number;
    taxAmount: number;
    taxBreakdown: TaxBreakdownItem[];
    total: number;
    updatedAt?: Date | null;
    voidedAt?: Date | null;
    }

export const CreditNoteSerializer = {
    _fromJsonObject(object: any): CreditNote {
        return {
            createdAt: new Date(object['created_at']),
            creditNoteNumber: object['credit_note_number'],
            creditType: CreditTypeSerializer._fromJsonObject(object['credit_type']),
            creditedAmountCents: object['credited_amount_cents'],
            currency: CurrencySerializer._fromJsonObject(object['currency']),
            customProperties: object['custom_properties'],
            customerId: CustomerIdSerializer._fromJsonObject(object['customer_id']),
            finalizedAt: new Date(object['finalized_at']),
            id: CreditNoteIdSerializer._fromJsonObject(object['id']),
            invoiceId: InvoiceIdSerializer._fromJsonObject(object['invoice_id']),
            invoiceNumber: object['invoice_number'],
            lineItems: object['line_items'].map((item: InvoiceLineItem) => InvoiceLineItemSerializer._fromJsonObject(item)),
            memo: object['memo'],
            planVersionId: object['plan_version_id'] ? PlanVersionIdSerializer._fromJsonObject(object['plan_version_id']): undefined,
            reason: object['reason'],
            refundedAmountCents: object['refunded_amount_cents'],
            status: CreditNoteStatusSerializer._fromJsonObject(object['status']),
            subscriptionId: object['subscription_id'] ? SubscriptionIdSerializer._fromJsonObject(object['subscription_id']): undefined,
            subtotal: object['subtotal'],
            taxAmount: object['tax_amount'],
            taxBreakdown: object['tax_breakdown'].map((item: TaxBreakdownItem) => TaxBreakdownItemSerializer._fromJsonObject(item)),
            total: object['total'],
            updatedAt: new Date(object['updated_at']),
            voidedAt: new Date(object['voided_at']),
            };
    },

    _toJsonObject(self: CreditNote): any {
        return {
            'created_at': self.createdAt,
            'credit_note_number': self.creditNoteNumber,
            'credit_type': CreditTypeSerializer._toJsonObject(self.creditType),
            'credited_amount_cents': self.creditedAmountCents,
            'currency': CurrencySerializer._toJsonObject(self.currency),
            'custom_properties': self.customProperties,
            'customer_id': CustomerIdSerializer._toJsonObject(self.customerId),
            'finalized_at': self.finalizedAt,
            'id': CreditNoteIdSerializer._toJsonObject(self.id),
            'invoice_id': InvoiceIdSerializer._toJsonObject(self.invoiceId),
            'invoice_number': self.invoiceNumber,
            'line_items': self.lineItems.map((item) => InvoiceLineItemSerializer._toJsonObject(item)),
            'memo': self.memo,
            'plan_version_id': self.planVersionId ? PlanVersionIdSerializer._toJsonObject(self.planVersionId) : undefined,
            'reason': self.reason,
            'refunded_amount_cents': self.refundedAmountCents,
            'status': CreditNoteStatusSerializer._toJsonObject(self.status),
            'subscription_id': self.subscriptionId ? SubscriptionIdSerializer._toJsonObject(self.subscriptionId) : undefined,
            'subtotal': self.subtotal,
            'tax_amount': self.taxAmount,
            'tax_breakdown': self.taxBreakdown.map((item) => TaxBreakdownItemSerializer._toJsonObject(item)),
            'total': self.total,
            'updated_at': self.updatedAt,
            'voided_at': self.voidedAt,
            };
    }
}