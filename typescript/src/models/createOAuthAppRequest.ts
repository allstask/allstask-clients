// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */

export interface CreateOAuthAppRequest {
    name: string;
    redirectUris: string[];
    scopes?: string[] | null;
    }

export const CreateOAuthAppRequestSerializer = {
    _fromJsonObject(object: any): CreateOAuthAppRequest {
        return {
            name: object['name'],
            redirectUris: object['redirect_uris'],
            scopes: object['scopes'],
            };
    },

    _toJsonObject(self: CreateOAuthAppRequest): any {
        return {
            'name': self.name,
            'redirect_uris': self.redirectUris,
            'scopes': self.scopes,
            };
    }
}