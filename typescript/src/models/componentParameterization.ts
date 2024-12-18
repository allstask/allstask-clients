// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    ComponentParameters,
    ComponentParametersSerializer,
} from './componentParameters';
import {
    PriceComponentId,
    PriceComponentIdSerializer,
} from './priceComponentId';

export interface ComponentParameterization {
    componentId: PriceComponentId;
    parameters: ComponentParameters;
    }

export const ComponentParameterizationSerializer = {
    _fromJsonObject(object: any): ComponentParameterization {
        return {
            componentId: PriceComponentIdSerializer._fromJsonObject(object['component_id']),
            parameters: ComponentParametersSerializer._fromJsonObject(object['parameters']),
            };
    },

    _toJsonObject(self: ComponentParameterization): any {
        return {
            'component_id': PriceComponentIdSerializer._toJsonObject(self.componentId),
            'parameters': ComponentParametersSerializer._toJsonObject(self.parameters),
            };
    }
}