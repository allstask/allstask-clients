// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */

export interface LinkedSegmentationMatrix {
    dimension1Key: string;
    dimension2Key: string;
    values: { [key: string]: string[] };
    }

export const LinkedSegmentationMatrixSerializer = {
    _fromJsonObject(object: any): LinkedSegmentationMatrix {
        return {
            dimension1Key: object['dimension1_key'],
            dimension2Key: object['dimension2_key'],
            values: Object.fromEntries(Object.entries(object['values']).map(
                (item : [string, string[]]) => [item[0], item[1]]
            )),
            };
    },

    _toJsonObject(self: LinkedSegmentationMatrix): any {
        return {
            'dimension1_key': self.dimension1Key,
            'dimension2_key': self.dimension2Key,
            'values': Object.fromEntries(Object.entries(self.values).map(
                (item) => [item[0], item[1]]
            )),
            };
    }
}