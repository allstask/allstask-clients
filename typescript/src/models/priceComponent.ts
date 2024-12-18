// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    Fee,
    FeeSerializer,
} from './fee';
import {
    PriceComponentId,
    PriceComponentIdSerializer,
} from './priceComponentId';
import {
    ProductId,
    ProductIdSerializer,
} from './productId';

export interface PriceComponent {
    fee?: Fee | null;
    id: PriceComponentId;
    name: string;
    productId?: ProductId | null;
    }

export const PriceComponentSerializer = {
    _fromJsonObject(object: any): PriceComponent {
        return {
            fee: object['fee'] ? FeeSerializer._fromJsonObject(object['fee']): undefined,
            id: PriceComponentIdSerializer._fromJsonObject(object['id']),
            name: object['name'],
            productId: object['product_id'] ? ProductIdSerializer._fromJsonObject(object['product_id']): undefined,
            };
    },

    _toJsonObject(self: PriceComponent): any {
        return {
            'fee': self.fee ? FeeSerializer._toJsonObject(self.fee) : undefined,
            'id': PriceComponentIdSerializer._toJsonObject(self.id),
            'name': self.name,
            'product_id': self.productId ? ProductIdSerializer._toJsonObject(self.productId) : undefined,
            };
    }
}