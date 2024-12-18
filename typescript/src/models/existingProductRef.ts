// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    ProductId,
    ProductIdSerializer,
} from './productId';

export interface ExistingProductRef {
    id: ProductId;
    }

export const ExistingProductRefSerializer = {
    _fromJsonObject(object: any): ExistingProductRef {
        return {
            id: ProductIdSerializer._fromJsonObject(object['id']),
            };
    },

    _toJsonObject(self: ExistingProductRef): any {
        return {
            'id': ProductIdSerializer._toJsonObject(self.id),
            };
    }
}