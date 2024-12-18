// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    OnlineMethodConfig,
    OnlineMethodConfigSerializer,
} from './onlineMethodConfig';

export interface OnlineMethodsConfig {
    card?: OnlineMethodConfig | null;
    directDebit?: OnlineMethodConfig | null;
    }

export const OnlineMethodsConfigSerializer = {
    _fromJsonObject(object: any): OnlineMethodsConfig {
        return {
            card: object['card'] ? OnlineMethodConfigSerializer._fromJsonObject(object['card']): undefined,
            directDebit: object['direct_debit'] ? OnlineMethodConfigSerializer._fromJsonObject(object['direct_debit']): undefined,
            };
    },

    _toJsonObject(self: OnlineMethodsConfig): any {
        return {
            'card': self.card ? OnlineMethodConfigSerializer._toJsonObject(self.card) : undefined,
            'direct_debit': self.directDebit ? OnlineMethodConfigSerializer._toJsonObject(self.directDebit) : undefined,
            };
    }
}