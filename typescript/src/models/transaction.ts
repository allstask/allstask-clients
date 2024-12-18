// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    CustomerPaymentMethodId,
    CustomerPaymentMethodIdSerializer,
} from './customerPaymentMethodId';
import {
    PaymentMethodInfo,
    PaymentMethodInfoSerializer,
} from './paymentMethodInfo';
import {
    PaymentStatusEnum,
    PaymentStatusEnumSerializer,
} from './paymentStatusEnum';
import {
    PaymentTransactionId,
    PaymentTransactionIdSerializer,
} from './paymentTransactionId';
import {
    PaymentTypeEnum,
    PaymentTypeEnumSerializer,
} from './paymentTypeEnum';

export interface Transaction {
    amount: number;
    currency: string;
    error?: string | null;
    id: PaymentTransactionId;
    paymentMethodId?: CustomerPaymentMethodId | null;
    paymentMethodInfo?: PaymentMethodInfo | null;
    paymentType: PaymentTypeEnum;
    processedAt?: Date | null;
    providerTransactionId?: string | null;
    status: PaymentStatusEnum;
    }

export const TransactionSerializer = {
    _fromJsonObject(object: any): Transaction {
        return {
            amount: object['amount'],
            currency: object['currency'],
            error: object['error'],
            id: PaymentTransactionIdSerializer._fromJsonObject(object['id']),
            paymentMethodId: object['payment_method_id'] ? CustomerPaymentMethodIdSerializer._fromJsonObject(object['payment_method_id']): undefined,
            paymentMethodInfo: object['payment_method_info'] ? PaymentMethodInfoSerializer._fromJsonObject(object['payment_method_info']): undefined,
            paymentType: PaymentTypeEnumSerializer._fromJsonObject(object['payment_type']),
            processedAt: new Date(object['processed_at']),
            providerTransactionId: object['provider_transaction_id'],
            status: PaymentStatusEnumSerializer._fromJsonObject(object['status']),
            };
    },

    _toJsonObject(self: Transaction): any {
        return {
            'amount': self.amount,
            'currency': self.currency,
            'error': self.error,
            'id': PaymentTransactionIdSerializer._toJsonObject(self.id),
            'payment_method_id': self.paymentMethodId ? CustomerPaymentMethodIdSerializer._toJsonObject(self.paymentMethodId) : undefined,
            'payment_method_info': self.paymentMethodInfo ? PaymentMethodInfoSerializer._toJsonObject(self.paymentMethodInfo) : undefined,
            'payment_type': PaymentTypeEnumSerializer._toJsonObject(self.paymentType),
            'processed_at': self.processedAt,
            'provider_transaction_id': self.providerTransactionId,
            'status': PaymentStatusEnumSerializer._toJsonObject(self.status),
            };
    }
}