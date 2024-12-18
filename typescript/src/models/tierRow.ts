// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */

export interface TierRow {
    firstUnit: number;
    flatCap?: number | null;
    flatFee?: number | null;
    rate: number;
    }

export const TierRowSerializer = {
    _fromJsonObject(object: any): TierRow {
        return {
            firstUnit: object['first_unit'],
            flatCap: object['flat_cap'],
            flatFee: object['flat_fee'],
            rate: object['rate'],
            };
    },

    _toJsonObject(self: TierRow): any {
        return {
            'first_unit': self.firstUnit,
            'flat_cap': self.flatCap,
            'flat_fee': self.flatFee,
            'rate': self.rate,
            };
    }
}