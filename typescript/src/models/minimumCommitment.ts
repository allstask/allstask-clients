// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    MinimumCommitmentScope,
    MinimumCommitmentScopeSerializer,
} from './minimumCommitmentScope';

export interface MinimumCommitment {
    /** Decimal string in the plan currency, e.g. "100.00". */
        amount: string;
    scope: MinimumCommitmentScope;
    }

export const MinimumCommitmentSerializer = {
    _fromJsonObject(object: any): MinimumCommitment {
        return {
            amount: object['amount'],
            scope: MinimumCommitmentScopeSerializer._fromJsonObject(object['scope']),
            };
    },

    _toJsonObject(self: MinimumCommitment): any {
        return {
            'amount': self.amount,
            'scope': MinimumCommitmentScopeSerializer._toJsonObject(self.scope),
            };
    }
}