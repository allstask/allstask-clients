// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */

export interface GroupedUsage {
    dimensions: { [key: string]: string };
    value: number;
    }

export const GroupedUsageSerializer = {
    _fromJsonObject(object: any): GroupedUsage {
        return {
            dimensions: object['dimensions'],
            value: object['value'],
            };
    },

    _toJsonObject(self: GroupedUsage): any {
        return {
            'dimensions': self.dimensions,
            'value': self.value,
            };
    }
}