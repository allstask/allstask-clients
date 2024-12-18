// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    OnlineMethodsConfig,
    OnlineMethodsConfigSerializer,
} from './onlineMethodsConfig';

export interface OnlinePaymentMethodConfig {
    config?: OnlineMethodsConfig | null;
    }

export const OnlinePaymentMethodConfigSerializer = {
    _fromJsonObject(object: any): OnlinePaymentMethodConfig {
        return {
            config: object['config'] ? OnlineMethodsConfigSerializer._fromJsonObject(object['config']): undefined,
            };
    },

    _toJsonObject(self: OnlinePaymentMethodConfig): any {
        return {
            'config': self.config ? OnlineMethodsConfigSerializer._toJsonObject(self.config) : undefined,
            };
    }
}