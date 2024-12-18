// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    OAuthAppId,
    OAuthAppIdSerializer,
} from './oAuthAppId';
import {
    OrganizationId,
    OrganizationIdSerializer,
} from './organizationId';
/** An OAuth application registered by a platform */
export interface OAuthApp {
    clientId: string;
    clientSecretHint: string;
    createdAt: Date;
    id: OAuthAppId;
    isActive: boolean;
    name: string;
    organizationId: OrganizationId;
    redirectUris: string[];
    scopes: string[];
    updatedAt?: Date | null;
    }

export const OAuthAppSerializer = {
    _fromJsonObject(object: any): OAuthApp {
        return {
            clientId: object['client_id'],
            clientSecretHint: object['client_secret_hint'],
            createdAt: new Date(object['created_at']),
            id: OAuthAppIdSerializer._fromJsonObject(object['id']),
            isActive: object['is_active'],
            name: object['name'],
            organizationId: OrganizationIdSerializer._fromJsonObject(object['organization_id']),
            redirectUris: object['redirect_uris'],
            scopes: object['scopes'],
            updatedAt: new Date(object['updated_at']),
            };
    },

    _toJsonObject(self: OAuthApp): any {
        return {
            'client_id': self.clientId,
            'client_secret_hint': self.clientSecretHint,
            'created_at': self.createdAt,
            'id': OAuthAppIdSerializer._toJsonObject(self.id),
            'is_active': self.isActive,
            'name': self.name,
            'organization_id': OrganizationIdSerializer._toJsonObject(self.organizationId),
            'redirect_uris': self.redirectUris,
            'scopes': self.scopes,
            'updated_at': self.updatedAt,
            };
    }
}