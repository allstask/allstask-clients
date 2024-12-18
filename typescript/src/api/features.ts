// this file is @generated
import {
    Feature,
    FeatureSerializer,
} from '../models/feature';
import {
    FeatureListResponse,
    FeatureListResponseSerializer,
} from '../models/featureListResponse';
import {
    FeatureStatus,
    FeatureStatusSerializer,
} from '../models/featureStatus';
import {
    ProductId,
    ProductIdSerializer,
} from '../models/productId';
import { HttpMethod, AllstaskRequest, AllstaskRequestContext } from "../request";

export interface FeaturesListFeaturesOptions {
        /** Filter by feature status. Repeat the param to select multiple, omit to return all. */
            statuses?: FeatureStatus[];
        /** Filter by product. Omit to return features across all products. */
            productId?: ProductId;
        /** Search by feature name. */
            search?: string;
        /** Page number (0-indexed) */
            page?: number;
        /** Number of items per page */
            perPage?: number;
        }

    export class Features {
    public constructor(private readonly requestCtx: AllstaskRequestContext) {}

    /**  */
        public listFeatures(
            options?: FeaturesListFeaturesOptions,
            ): Promise<FeatureListResponse> {
            const request = new AllstaskRequest(HttpMethod.GET, "/api/v1/features");

            request.setQueryParam("statuses", options?.statuses);
            request.setQueryParam("product_id", options?.productId);
            request.setQueryParam("search", options?.search);
            request.setQueryParam("page", options?.page);
            request.setQueryParam("per_page", options?.perPage);
            
                return request.send(
                    this.requestCtx,
                    FeatureListResponseSerializer._fromJsonObject,
                );
            }

        

    /**  */
        public getFeature(
            idOrCode: string,
            ): Promise<Feature> {
            const request = new AllstaskRequest(HttpMethod.GET, "/api/v1/features/{id_or_code}");

            request.setPathParam("id_or_code", idOrCode);
            
                return request.send(
                    this.requestCtx,
                    FeatureSerializer._fromJsonObject,
                );
            }

        

    }

