// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    MatrixDimension,
    MatrixDimensionSerializer,
} from './matrixDimension';

export interface MatrixRow {
    dimension1: MatrixDimension;
    dimension2?: MatrixDimension | null;
    perUnitPrice: number;
    }

export const MatrixRowSerializer = {
    _fromJsonObject(object: any): MatrixRow {
        return {
            dimension1: MatrixDimensionSerializer._fromJsonObject(object['dimension1']),
            dimension2: object['dimension2'] ? MatrixDimensionSerializer._fromJsonObject(object['dimension2']): undefined,
            perUnitPrice: object['per_unit_price'],
            };
    },

    _toJsonObject(self: MatrixRow): any {
        return {
            'dimension1': MatrixDimensionSerializer._toJsonObject(self.dimension1),
            'dimension2': self.dimension2 ? MatrixDimensionSerializer._toJsonObject(self.dimension2) : undefined,
            'per_unit_price': self.perUnitPrice,
            };
    }
}