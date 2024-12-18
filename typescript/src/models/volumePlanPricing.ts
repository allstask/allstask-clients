// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    TierRow,
    TierRowSerializer,
} from './tierRow';

export interface VolumePlanPricing {
    blockSize?: number | null;
    tiers: TierRow[];
    }

export const VolumePlanPricingSerializer = {
    _fromJsonObject(object: any): VolumePlanPricing {
        return {
            blockSize: object['block_size'],
            tiers: object['tiers'].map((item: TierRow) => TierRowSerializer._fromJsonObject(item)),
            };
    },

    _toJsonObject(self: VolumePlanPricing): any {
        return {
            'block_size': self.blockSize,
            'tiers': self.tiers.map((item) => TierRowSerializer._toJsonObject(item)),
            };
    }
}