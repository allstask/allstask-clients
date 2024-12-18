// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    ComponentOverride,
    ComponentOverrideSerializer,
} from './componentOverride';
import {
    ComponentParameterization,
    ComponentParameterizationSerializer,
} from './componentParameterization';
import {
    ExtraComponent,
    ExtraComponentSerializer,
} from './extraComponent';
import {
    PriceComponentId,
    PriceComponentIdSerializer,
} from './priceComponentId';

export interface CreateSubscriptionComponents {
    extraComponents?: ExtraComponent[] | null;
    overriddenComponents?: ComponentOverride[] | null;
    parameterizedComponents?: ComponentParameterization[] | null;
    removeComponents?: PriceComponentId[] | null;
    }

export const CreateSubscriptionComponentsSerializer = {
    _fromJsonObject(object: any): CreateSubscriptionComponents {
        return {
            extraComponents: object['extra_components'].map((item: ExtraComponent) => ExtraComponentSerializer._fromJsonObject(item)),
            overriddenComponents: object['overridden_components'].map((item: ComponentOverride) => ComponentOverrideSerializer._fromJsonObject(item)),
            parameterizedComponents: object['parameterized_components'].map((item: ComponentParameterization) => ComponentParameterizationSerializer._fromJsonObject(item)),
            removeComponents: object['remove_components'].map((item: PriceComponentId) => PriceComponentIdSerializer._fromJsonObject(item)),
            };
    },

    _toJsonObject(self: CreateSubscriptionComponents): any {
        return {
            'extra_components': self.extraComponents?.map((item) => ExtraComponentSerializer._toJsonObject(item)),
            'overridden_components': self.overriddenComponents?.map((item) => ComponentOverrideSerializer._toJsonObject(item)),
            'parameterized_components': self.parameterizedComponents?.map((item) => ComponentParameterizationSerializer._toJsonObject(item)),
            'remove_components': self.removeComponents?.map((item) => PriceComponentIdSerializer._toJsonObject(item)),
            };
    }
}