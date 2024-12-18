// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    MetricFilter,
    MetricFilterSerializer,
} from './metricFilter';
import {
    MetricSegmentationMatrix,
    MetricSegmentationMatrixSerializer,
} from './metricSegmentationMatrix';
import {
    UnitConversion,
    UnitConversionSerializer,
} from './unitConversion';

export interface UpdateMetricRequest {
    description?: string | null;
    /** Absent = leave filters untouched; present (even empty) = replace them. */
        filters?: MetricFilter[] | null;
    name?: string | null;
    segmentationMatrix?: MetricSegmentationMatrix | null;
    unitConversion?: UnitConversion | null;
    }

export const UpdateMetricRequestSerializer = {
    _fromJsonObject(object: any): UpdateMetricRequest {
        return {
            description: object['description'],
            filters: object['filters'].map((item: MetricFilter) => MetricFilterSerializer._fromJsonObject(item)),
            name: object['name'],
            segmentationMatrix: object['segmentation_matrix'] ? MetricSegmentationMatrixSerializer._fromJsonObject(object['segmentation_matrix']): undefined,
            unitConversion: object['unit_conversion'] ? UnitConversionSerializer._fromJsonObject(object['unit_conversion']): undefined,
            };
    },

    _toJsonObject(self: UpdateMetricRequest): any {
        return {
            'description': self.description,
            'filters': self.filters?.map((item) => MetricFilterSerializer._toJsonObject(item)),
            'name': self.name,
            'segmentation_matrix': self.segmentationMatrix ? MetricSegmentationMatrixSerializer._toJsonObject(self.segmentationMatrix) : undefined,
            'unit_conversion': self.unitConversion ? UnitConversionSerializer._toJsonObject(self.unitConversion) : undefined,
            };
    }
}