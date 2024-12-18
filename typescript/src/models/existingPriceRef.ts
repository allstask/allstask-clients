// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    PriceId,
    PriceIdSerializer,
} from './priceId';

export interface ExistingPriceRef {
    id: PriceId;
    }

export const ExistingPriceRefSerializer = {
    _fromJsonObject(object: any): ExistingPriceRef {
        return {
            id: PriceIdSerializer._fromJsonObject(object['id']),
            };
    },

    _toJsonObject(self: ExistingPriceRef): any {
        return {
            'id': PriceIdSerializer._toJsonObject(self.id),
            };
    }
}