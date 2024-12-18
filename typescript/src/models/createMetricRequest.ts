// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    BillingMetricAggregateEnum,
    BillingMetricAggregateEnumSerializer,
} from './billingMetricAggregateEnum';
import {
    MetricFilter,
    MetricFilterSerializer,
} from './metricFilter';
import {
    MetricSegmentationMatrix,
    MetricSegmentationMatrixSerializer,
} from './metricSegmentationMatrix';
import {
    ProductFamilyId,
    ProductFamilyIdSerializer,
} from './productFamilyId';
import {
    ProductId,
    ProductIdSerializer,
} from './productId';
import {
    UnitConversion,
    UnitConversionSerializer,
} from './unitConversion';

export interface CreateMetricRequest {
    aggregationKey?: string | null;
    aggregationType: BillingMetricAggregateEnum;
    code: string;
    description?: string | null;
    /** Pre-aggregation property filters. Optional and backward-compatible; omit for none. */
        filters?: MetricFilter[] | null;
    name: string;
    productFamilyId: ProductFamilyId;
    productId?: ProductId | null;
    segmentationMatrix?: MetricSegmentationMatrix | null;
    unitConversion?: UnitConversion | null;
    usageGroupKey?: string | null;
    }

export const CreateMetricRequestSerializer = {
    _fromJsonObject(object: any): CreateMetricRequest {
        return {
            aggregationKey: object['aggregation_key'],
            aggregationType: BillingMetricAggregateEnumSerializer._fromJsonObject(object['aggregation_type']),
            code: object['code'],
            description: object['description'],
            filters: object['filters'].map((item: MetricFilter) => MetricFilterSerializer._fromJsonObject(item)),
            name: object['name'],
            productFamilyId: ProductFamilyIdSerializer._fromJsonObject(object['product_family_id']),
            productId: object['product_id'] ? ProductIdSerializer._fromJsonObject(object['product_id']): undefined,
            segmentationMatrix: object['segmentation_matrix'] ? MetricSegmentationMatrixSerializer._fromJsonObject(object['segmentation_matrix']): undefined,
            unitConversion: object['unit_conversion'] ? UnitConversionSerializer._fromJsonObject(object['unit_conversion']): undefined,
            usageGroupKey: object['usage_group_key'],
            };
    },

    _toJsonObject(self: CreateMetricRequest): any {
        return {
            'aggregation_key': self.aggregationKey,
            'aggregation_type': BillingMetricAggregateEnumSerializer._toJsonObject(self.aggregationType),
            'code': self.code,
            'description': self.description,
            'filters': self.filters?.map((item) => MetricFilterSerializer._toJsonObject(item)),
            'name': self.name,
            'product_family_id': ProductFamilyIdSerializer._toJsonObject(self.productFamilyId),
            'product_id': self.productId ? ProductIdSerializer._toJsonObject(self.productId) : undefined,
            'segmentation_matrix': self.segmentationMatrix ? MetricSegmentationMatrixSerializer._toJsonObject(self.segmentationMatrix) : undefined,
            'unit_conversion': self.unitConversion ? UnitConversionSerializer._toJsonObject(self.unitConversion) : undefined,
            'usage_group_key': self.usageGroupKey,
            };
    }
}