// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    OAuthApp,
    OAuthAppSerializer,
} from './oAuthApp';

export interface OAuthAppsResponse {
    data: OAuthApp[];
    }

export const OAuthAppsResponseSerializer = {
    _fromJsonObject(object: any): OAuthAppsResponse {
        return {
            data: object['data'].map((item: OAuthApp) => OAuthAppSerializer._fromJsonObject(item)),
            };
    },

    _toJsonObject(self: OAuthAppsResponse): any {
        return {
            'data': self.data.map((item) => OAuthAppSerializer._toJsonObject(item)),
            };
    }
}