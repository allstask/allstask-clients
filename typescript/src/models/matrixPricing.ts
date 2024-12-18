// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    MatrixRow,
    MatrixRowSerializer,
} from './matrixRow';

export interface MatrixPricing {
    rates: MatrixRow[];
    }

export const MatrixPricingSerializer = {
    _fromJsonObject(object: any): MatrixPricing {
        return {
            rates: object['rates'].map((item: MatrixRow) => MatrixRowSerializer._fromJsonObject(item)),
            };
    },

    _toJsonObject(self: MatrixPricing): any {
        return {
            'rates': self.rates.map((item) => MatrixRowSerializer._toJsonObject(item)),
            };
    }
}