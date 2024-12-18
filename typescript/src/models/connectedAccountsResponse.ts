// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    ConnectedAccount,
    ConnectedAccountSerializer,
} from './connectedAccount';

export interface ConnectedAccountsResponse {
    data: ConnectedAccount[];
    }

export const ConnectedAccountsResponseSerializer = {
    _fromJsonObject(object: any): ConnectedAccountsResponse {
        return {
            data: object['data'].map((item: ConnectedAccount) => ConnectedAccountSerializer._fromJsonObject(item)),
            };
    },

    _toJsonObject(self: ConnectedAccountsResponse): any {
        return {
            'data': self.data.map((item) => ConnectedAccountSerializer._toJsonObject(item)),
            };
    }
}