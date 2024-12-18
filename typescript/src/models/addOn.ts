// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    AddOnId,
    AddOnIdSerializer,
} from './addOnId';
import {
    Entitlement,
    EntitlementSerializer,
} from './entitlement';
import {
    PriceId,
    PriceIdSerializer,
} from './priceId';
import {
    ProductFeeTypeEnum,
    ProductFeeTypeEnumSerializer,
} from './productFeeTypeEnum';
import {
    ProductId,
    ProductIdSerializer,
} from './productId';

export interface AddOn {
    archivedAt?: Date | null;
    createdAt: Date;
    description?: string | null;
    entitlements?: Entitlement[];
    feeType?: ProductFeeTypeEnum | null;
    id: AddOnId;
    maxInstancesPerSubscription?: number | null;
    name: string;
    priceId: PriceId;
    productId: ProductId;
    selfServiceable: boolean;
    }

export const AddOnSerializer = {
    _fromJsonObject(object: any): AddOn {
        return {
            archivedAt: new Date(object['archived_at']),
            createdAt: new Date(object['created_at']),
            description: object['description'],
            entitlements: object['entitlements'].map((item: Entitlement) => EntitlementSerializer._fromJsonObject(item)),
            feeType: object['fee_type'] ? ProductFeeTypeEnumSerializer._fromJsonObject(object['fee_type']): undefined,
            id: AddOnIdSerializer._fromJsonObject(object['id']),
            maxInstancesPerSubscription: object['max_instances_per_subscription'],
            name: object['name'],
            priceId: PriceIdSerializer._fromJsonObject(object['price_id']),
            productId: ProductIdSerializer._fromJsonObject(object['product_id']),
            selfServiceable: object['self_serviceable'],
            };
    },

    _toJsonObject(self: AddOn): any {
        return {
            'archived_at': self.archivedAt,
            'created_at': self.createdAt,
            'description': self.description,
            'entitlements': self.entitlements?.map((item) => EntitlementSerializer._toJsonObject(item)),
            'fee_type': self.feeType ? ProductFeeTypeEnumSerializer._toJsonObject(self.feeType) : undefined,
            'id': AddOnIdSerializer._toJsonObject(self.id),
            'max_instances_per_subscription': self.maxInstancesPerSubscription,
            'name': self.name,
            'price_id': PriceIdSerializer._toJsonObject(self.priceId),
            'product_id': ProductIdSerializer._toJsonObject(self.productId),
            'self_serviceable': self.selfServiceable,
            };
    }
}