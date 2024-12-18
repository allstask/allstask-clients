// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    BillingConfig,
    BillingConfigSerializer,
} from './billingConfig';
import {
    MinimumCommitmentInput,
    MinimumCommitmentInputSerializer,
} from './minimumCommitmentInput';
import {
    PlanAddOnInput,
    PlanAddOnInputSerializer,
} from './planAddOnInput';
import {
    PlanStatusEnum,
    PlanStatusEnumSerializer,
} from './planStatusEnum';
import {
    PriceComponentInput,
    PriceComponentInputSerializer,
} from './priceComponentInput';
import {
    TrialConfig,
    TrialConfigSerializer,
} from './trialConfig';

export interface ReplacePlanRequest {
    addOns?: PlanAddOnInput[];
    billing?: BillingConfig | null;
    components: PriceComponentInput[];
    currency: string;
    description?: string | null;
    minimumCommitment?: MinimumCommitmentInput | null;
    name: string;
    status?: PlanStatusEnum | null;
    trial?: TrialConfig | null;
    }

export const ReplacePlanRequestSerializer = {
    _fromJsonObject(object: any): ReplacePlanRequest {
        return {
            addOns: object['add_ons'].map((item: PlanAddOnInput) => PlanAddOnInputSerializer._fromJsonObject(item)),
            billing: object['billing'] ? BillingConfigSerializer._fromJsonObject(object['billing']): undefined,
            components: object['components'].map((item: PriceComponentInput) => PriceComponentInputSerializer._fromJsonObject(item)),
            currency: object['currency'],
            description: object['description'],
            minimumCommitment: object['minimum_commitment'] ? MinimumCommitmentInputSerializer._fromJsonObject(object['minimum_commitment']): undefined,
            name: object['name'],
            status: object['status'] ? PlanStatusEnumSerializer._fromJsonObject(object['status']): undefined,
            trial: object['trial'] ? TrialConfigSerializer._fromJsonObject(object['trial']): undefined,
            };
    },

    _toJsonObject(self: ReplacePlanRequest): any {
        return {
            'add_ons': self.addOns?.map((item) => PlanAddOnInputSerializer._toJsonObject(item)),
            'billing': self.billing ? BillingConfigSerializer._toJsonObject(self.billing) : undefined,
            'components': self.components.map((item) => PriceComponentInputSerializer._toJsonObject(item)),
            'currency': self.currency,
            'description': self.description,
            'minimum_commitment': self.minimumCommitment ? MinimumCommitmentInputSerializer._toJsonObject(self.minimumCommitment) : undefined,
            'name': self.name,
            'status': self.status ? PlanStatusEnumSerializer._toJsonObject(self.status) : undefined,
            'trial': self.trial ? TrialConfigSerializer._toJsonObject(self.trial) : undefined,
            };
    }
}