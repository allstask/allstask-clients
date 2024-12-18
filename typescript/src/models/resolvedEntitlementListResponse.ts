// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    ResolvedEntitlement,
    ResolvedEntitlementSerializer,
} from './resolvedEntitlement';

export interface ResolvedEntitlementListResponse {
    data: ResolvedEntitlement[];
    }

export const ResolvedEntitlementListResponseSerializer = {
    _fromJsonObject(object: any): ResolvedEntitlementListResponse {
        return {
            data: object['data'].map((item: ResolvedEntitlement) => ResolvedEntitlementSerializer._fromJsonObject(item)),
            };
    },

    _toJsonObject(self: ResolvedEntitlementListResponse): any {
        return {
            'data': self.data.map((item) => ResolvedEntitlementSerializer._toJsonObject(item)),
            };
    }
}