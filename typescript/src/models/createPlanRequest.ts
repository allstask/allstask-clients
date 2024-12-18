// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    BillingConfig,
    BillingConfigSerializer,
} from './billingConfig';
import {
    PlanAddOnInput,
    PlanAddOnInputSerializer,
} from './planAddOnInput';
import {
    PlanStatusEnum,
    PlanStatusEnumSerializer,
} from './planStatusEnum';
import {
    PlanTypeEnum,
    PlanTypeEnumSerializer,
} from './planTypeEnum';
import {
    PriceComponentInput,
    PriceComponentInputSerializer,
} from './priceComponentInput';
import {
    ProductFamilyId,
    ProductFamilyIdSerializer,
} from './productFamilyId';
import {
    TrialConfig,
    TrialConfigSerializer,
} from './trialConfig';

export interface CreatePlanRequest {
    addOns?: PlanAddOnInput[];
    billing?: BillingConfig | null;
    components: PriceComponentInput[];
    currency: string;
    description?: string | null;
    name: string;
    planType: PlanTypeEnum;
    productFamilyId: ProductFamilyId;
    selfServiceRank?: number | null;
    status: PlanStatusEnum;
    trial?: TrialConfig | null;
    }

export const CreatePlanRequestSerializer = {
    _fromJsonObject(object: any): CreatePlanRequest {
        return {
            addOns: object['add_ons'].map((item: PlanAddOnInput) => PlanAddOnInputSerializer._fromJsonObject(item)),
            billing: object['billing'] ? BillingConfigSerializer._fromJsonObject(object['billing']): undefined,
            components: object['components'].map((item: PriceComponentInput) => PriceComponentInputSerializer._fromJsonObject(item)),
            currency: object['currency'],
            description: object['description'],
            name: object['name'],
            planType: PlanTypeEnumSerializer._fromJsonObject(object['plan_type']),
            productFamilyId: ProductFamilyIdSerializer._fromJsonObject(object['product_family_id']),
            selfServiceRank: object['self_service_rank'],
            status: PlanStatusEnumSerializer._fromJsonObject(object['status']),
            trial: object['trial'] ? TrialConfigSerializer._fromJsonObject(object['trial']): undefined,
            };
    },

    _toJsonObject(self: CreatePlanRequest): any {
        return {
            'add_ons': self.addOns?.map((item) => PlanAddOnInputSerializer._toJsonObject(item)),
            'billing': self.billing ? BillingConfigSerializer._toJsonObject(self.billing) : undefined,
            'components': self.components.map((item) => PriceComponentInputSerializer._toJsonObject(item)),
            'currency': self.currency,
            'description': self.description,
            'name': self.name,
            'plan_type': PlanTypeEnumSerializer._toJsonObject(self.planType),
            'product_family_id': ProductFamilyIdSerializer._toJsonObject(self.productFamilyId),
            'self_service_rank': self.selfServiceRank,
            'status': PlanStatusEnumSerializer._toJsonObject(self.status),
            'trial': self.trial ? TrialConfigSerializer._toJsonObject(self.trial) : undefined,
            };
    }
}