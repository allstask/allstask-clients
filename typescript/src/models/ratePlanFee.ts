// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    TermRate,
    TermRateSerializer,
} from './termRate';
/** Recurring rate fee (e.g., monthly subscription) */
export interface RatePlanFee {
    rates: TermRate[];
    }

export const RatePlanFeeSerializer = {
    _fromJsonObject(object: any): RatePlanFee {
        return {
            rates: object['rates'].map((item: TermRate) => TermRateSerializer._fromJsonObject(item)),
            };
    },

    _toJsonObject(self: RatePlanFee): any {
        return {
            'rates': self.rates.map((item) => TermRateSerializer._toJsonObject(item)),
            };
    }
}