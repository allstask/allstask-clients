// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    ProductFeeStructure,
    ProductFeeStructureSerializer,
} from './productFeeStructure';

export interface UpdateProductRequest {
    description?: string | null;
    feeStructure?: ProductFeeStructure | null;
    name?: string | null;
    }

export const UpdateProductRequestSerializer = {
    _fromJsonObject(object: any): UpdateProductRequest {
        return {
            description: object['description'],
            feeStructure: object['fee_structure'] ? ProductFeeStructureSerializer._fromJsonObject(object['fee_structure']): undefined,
            name: object['name'],
            };
    },

    _toJsonObject(self: UpdateProductRequest): any {
        return {
            'description': self.description,
            'fee_structure': self.feeStructure ? ProductFeeStructureSerializer._toJsonObject(self.feeStructure) : undefined,
            'name': self.name,
            };
    }
}