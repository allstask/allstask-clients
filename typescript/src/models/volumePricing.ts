// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    TierRow,
    TierRowSerializer,
} from './tierRow';

export interface VolumePricing {
    blockSize?: number | null;
    tiers: TierRow[];
    }

export const VolumePricingSerializer = {
    _fromJsonObject(object: any): VolumePricing {
        return {
            blockSize: object['block_size'],
            tiers: object['tiers'].map((item: TierRow) => TierRowSerializer._fromJsonObject(item)),
            };
    },

    _toJsonObject(self: VolumePricing): any {
        return {
            'block_size': self.blockSize,
            'tiers': self.tiers.map((item) => TierRowSerializer._toJsonObject(item)),
            };
    }
}