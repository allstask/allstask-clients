// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    EffectiveEntitlement,
    EffectiveEntitlementSerializer,
} from './effectiveEntitlement';

export interface EffectiveEntitlementListResponse {
    data: EffectiveEntitlement[];
    }

export const EffectiveEntitlementListResponseSerializer = {
    _fromJsonObject(object: any): EffectiveEntitlementListResponse {
        return {
            data: object['data'].map((item: EffectiveEntitlement) => EffectiveEntitlementSerializer._fromJsonObject(item)),
            };
    },

    _toJsonObject(self: EffectiveEntitlementListResponse): any {
        return {
            'data': self.data.map((item) => EffectiveEntitlementSerializer._toJsonObject(item)),
            };
    }
}