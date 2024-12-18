// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */

export interface OnlineMethodConfig {
    enabled: boolean;
    }

export const OnlineMethodConfigSerializer = {
    _fromJsonObject(object: any): OnlineMethodConfig {
        return {
            enabled: object['enabled'],
            };
    },

    _toJsonObject(self: OnlineMethodConfig): any {
        return {
            'enabled': self.enabled,
            };
    }
}