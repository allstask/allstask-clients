// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    MatrixRow,
    MatrixRowSerializer,
} from './matrixRow';

export interface MatrixPlanPricing {
    rates: MatrixRow[];
    }

export const MatrixPlanPricingSerializer = {
    _fromJsonObject(object: any): MatrixPlanPricing {
        return {
            rates: object['rates'].map((item: MatrixRow) => MatrixRowSerializer._fromJsonObject(item)),
            };
    },

    _toJsonObject(self: MatrixPlanPricing): any {
        return {
            'rates': self.rates.map((item) => MatrixRowSerializer._toJsonObject(item)),
            };
    }
}