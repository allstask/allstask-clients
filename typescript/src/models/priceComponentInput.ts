// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    Fee,
    FeeSerializer,
} from './fee';
import {
    ProductId,
    ProductIdSerializer,
} from './productId';

export interface PriceComponentInput {
    fee: Fee;
    name: string;
    productId?: ProductId | null;
    }

export const PriceComponentInputSerializer = {
    _fromJsonObject(object: any): PriceComponentInput {
        return {
            fee: FeeSerializer._fromJsonObject(object['fee']),
            name: object['name'],
            productId: object['product_id'] ? ProductIdSerializer._fromJsonObject(object['product_id']): undefined,
            };
    },

    _toJsonObject(self: PriceComponentInput): any {
        return {
            'fee': FeeSerializer._toJsonObject(self.fee),
            'name': self.name,
            'product_id': self.productId ? ProductIdSerializer._toJsonObject(self.productId) : undefined,
            };
    }
}