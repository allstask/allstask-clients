// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    BillableMetricId,
    BillableMetricIdSerializer,
} from './billableMetricId';
import {
    BillingMetricAggregateEnum,
    BillingMetricAggregateEnumSerializer,
} from './billingMetricAggregateEnum';
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
    UnitConversionRoundingEnum,
    UnitConversionRoundingEnumSerializer,
} from './unitConversionRoundingEnum';

export interface MetricEventData {
    aggregationKey?: string | null;
    aggregationType: BillingMetricAggregateEnum;
    code: string;
    createdAt: Date;
    description?: string | null;
    metricId: BillableMetricId;
    name: string;
    productFamilyId: ProductFamilyId;
    productId?: ProductId | null;
    segmentationMatrix?: MetricSegmentationMatrix | null;
    unitConversionFactor?: number | null;
    unitConversionRounding?: UnitConversionRoundingEnum | null;
    usageGroupKey?: string | null;
    }

export const MetricEventDataSerializer = {
    _fromJsonObject(object: any): MetricEventData {
        return {
            aggregationKey: object['aggregation_key'],
            aggregationType: BillingMetricAggregateEnumSerializer._fromJsonObject(object['aggregation_type']),
            code: object['code'],
            createdAt: new Date(object['created_at']),
            description: object['description'],
            metricId: BillableMetricIdSerializer._fromJsonObject(object['metric_id']),
            name: object['name'],
            productFamilyId: ProductFamilyIdSerializer._fromJsonObject(object['product_family_id']),
            productId: object['product_id'] ? ProductIdSerializer._fromJsonObject(object['product_id']): undefined,
            segmentationMatrix: object['segmentation_matrix'] ? MetricSegmentationMatrixSerializer._fromJsonObject(object['segmentation_matrix']): undefined,
            unitConversionFactor: object['unit_conversion_factor'],
            unitConversionRounding: object['unit_conversion_rounding'] ? UnitConversionRoundingEnumSerializer._fromJsonObject(object['unit_conversion_rounding']): undefined,
            usageGroupKey: object['usage_group_key'],
            };
    },

    _toJsonObject(self: MetricEventData): any {
        return {
            'aggregation_key': self.aggregationKey,
            'aggregation_type': BillingMetricAggregateEnumSerializer._toJsonObject(self.aggregationType),
            'code': self.code,
            'created_at': self.createdAt,
            'description': self.description,
            'metric_id': BillableMetricIdSerializer._toJsonObject(self.metricId),
            'name': self.name,
            'product_family_id': ProductFamilyIdSerializer._toJsonObject(self.productFamilyId),
            'product_id': self.productId ? ProductIdSerializer._toJsonObject(self.productId) : undefined,
            'segmentation_matrix': self.segmentationMatrix ? MetricSegmentationMatrixSerializer._toJsonObject(self.segmentationMatrix) : undefined,
            'unit_conversion_factor': self.unitConversionFactor,
            'unit_conversion_rounding': self.unitConversionRounding ? UnitConversionRoundingEnumSerializer._toJsonObject(self.unitConversionRounding) : undefined,
            'usage_group_key': self.usageGroupKey,
            };
    }
}