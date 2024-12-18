// this file is @generated
import {
    CreatePlanRequest,
    CreatePlanRequestSerializer,
} from '../models/createPlanRequest';
import {
    MinimumCommitment,
    MinimumCommitmentSerializer,
} from '../models/minimumCommitment';
import {
    PatchPlanRequest,
    PatchPlanRequestSerializer,
} from '../models/patchPlanRequest';
import {
    Plan,
    PlanSerializer,
} from '../models/plan';
import {
    PlanListResponse,
    PlanListResponseSerializer,
} from '../models/planListResponse';
import {
    PlanStatusEnum,
    PlanStatusEnumSerializer,
} from '../models/planStatusEnum';
import {
    PlanTypeEnum,
    PlanTypeEnumSerializer,
} from '../models/planTypeEnum';
import {
    PlanVersionListResponse,
    PlanVersionListResponseSerializer,
} from '../models/planVersionListResponse';
import {
    ProductFamilyId,
    ProductFamilyIdSerializer,
} from '../models/productFamilyId';
import {
    ReplacePlanRequest,
    ReplacePlanRequestSerializer,
} from '../models/replacePlanRequest';
import {
    ResolvedEntitlementListResponse,
    ResolvedEntitlementListResponseSerializer,
} from '../models/resolvedEntitlementListResponse';
import { HttpMethod, AllstaskRequest, AllstaskRequestContext } from "../request";

export interface PlansListPlansOptions {
        productFamilyId?: ProductFamilyId;
        /** Search by plan name */
            search?: string;
        /** Filter by plan status (can be repeated) */
            status?: PlanStatusEnum[];
        /** Filter by plan type (can be repeated) */
            planType?: PlanTypeEnum[];
        /** Sort order. Format: `column.direction`. Allowed columns: `name`, `status`, `plan_type`, `created_at`. Direction: `asc` or `desc`. Default: `created_at.desc`. */
            orderBy?: string;
        /** Page number (0-indexed) */
            page?: number;
        /** Number of items per page */
            perPage?: number;
        }

    export interface PlansGetPlanDetailsOptions {
        /** Filter by version: "draft", a version number, or omitted for active */
            version?: string;
        }

    export interface PlansListPlanVersionsOptions {
        /** Page number (0-indexed) */
            page?: number;
        /** Number of items per page */
            perPage?: number;
        }

    export class Plans {
    public constructor(private readonly requestCtx: AllstaskRequestContext) {}

    /**  */
        public listPlanVersionEntitlements(
            planVersionId: string,
            ): Promise<ResolvedEntitlementListResponse> {
            const request = new AllstaskRequest(HttpMethod.GET, "/api/v1/plan-versions/{plan_version_id}/entitlements");

            request.setPathParam("plan_version_id", planVersionId);
            
                return request.send(
                    this.requestCtx,
                    ResolvedEntitlementListResponseSerializer._fromJsonObject,
                );
            }

        

    /**  */
        public listPlans(
            options?: PlansListPlansOptions,
            ): Promise<PlanListResponse> {
            const request = new AllstaskRequest(HttpMethod.GET, "/api/v1/plans");

            request.setQueryParam("product_family_id", options?.productFamilyId);
            request.setQueryParam("search", options?.search);
            request.setQueryParam("status", options?.status);
            request.setQueryParam("plan_type", options?.planType);
            request.setQueryParam("order_by", options?.orderBy);
            request.setQueryParam("page", options?.page);
            request.setQueryParam("per_page", options?.perPage);
            
                return request.send(
                    this.requestCtx,
                    PlanListResponseSerializer._fromJsonObject,
                );
            }

        

    /**
* Create a new plan with components and pricing. Set `status` to `ACTIVE` to
* publish immediately, or `DRAFT` to stage for review.
*/
        public createPlan(
            createPlanRequest: CreatePlanRequest,
            ): Promise<Plan> {
            const request = new AllstaskRequest(HttpMethod.POST, "/api/v1/plans");

            request.setBody(
                    CreatePlanRequestSerializer._toJsonObject(
                        createPlanRequest,
                    )
                );
            
                return request.send(
                    this.requestCtx,
                    PlanSerializer._fromJsonObject,
                );
            }

        

    /**  */
        public setPlanMinimum(
            planVersionId: string,
            minimumCommitment: MinimumCommitment,
            ): Promise<MinimumCommitment> {
            const request = new AllstaskRequest(HttpMethod.PUT, "/api/v1/plans/versions/{plan_version_id}/minimum");

            request.setPathParam("plan_version_id", planVersionId);
            request.setBody(
                    MinimumCommitmentSerializer._toJsonObject(
                        minimumCommitment,
                    )
                );
            
                return request.send(
                    this.requestCtx,
                    MinimumCommitmentSerializer._fromJsonObject,
                );
            }

        

    /**  */
        public deletePlanMinimum(
            planVersionId: string,
            ): Promise<void> {
            const request = new AllstaskRequest(HttpMethod.DELETE, "/api/v1/plans/versions/{plan_version_id}/minimum");

            request.setPathParam("plan_version_id", planVersionId);
            
                return request.sendNoResponseBody(this.requestCtx);
            }

        

    /**
* Retrieve a specific plan. Use `?version=draft` for the draft version,
* `?version=2` for a specific version number, or omit for the active version.
*/
        public getPlanDetails(
            planId: string,
            options?: PlansGetPlanDetailsOptions,
            ): Promise<Plan> {
            const request = new AllstaskRequest(HttpMethod.GET, "/api/v1/plans/{plan_id}");

            request.setPathParam("plan_id", planId);
            request.setQueryParam("version", options?.version);
            
                return request.send(
                    this.requestCtx,
                    PlanSerializer._fromJsonObject,
                );
            }

        

    /**
* Full replacement of a plan's version. On a draft plan, updates in-place.
* On a published plan, creates a new version. Set `status` to `DRAFT` to
* stage as a new draft without publishing.
*/
        public replacePlan(
            planId: string,
            replacePlanRequest: ReplacePlanRequest,
            ): Promise<Plan> {
            const request = new AllstaskRequest(HttpMethod.PUT, "/api/v1/plans/{plan_id}");

            request.setPathParam("plan_id", planId);
            request.setBody(
                    ReplacePlanRequestSerializer._toJsonObject(
                        replacePlanRequest,
                    )
                );
            
                return request.send(
                    this.requestCtx,
                    PlanSerializer._fromJsonObject,
                );
            }

        

    /**
* Partially update plan-level fields (name, description, self_service_rank).
* Does not modify version-level configuration or components.
*/
        public patchPlan(
            planId: string,
            patchPlanRequest: PatchPlanRequest,
            ): Promise<Plan> {
            const request = new AllstaskRequest(HttpMethod.PATCH, "/api/v1/plans/{plan_id}");

            request.setPathParam("plan_id", planId);
            request.setBody(
                    PatchPlanRequestSerializer._toJsonObject(
                        patchPlanRequest,
                    )
                );
            
                return request.send(
                    this.requestCtx,
                    PlanSerializer._fromJsonObject,
                );
            }

        

    /**  */
        public archivePlan(
            planId: string,
            ): Promise<void> {
            const request = new AllstaskRequest(HttpMethod.POST, "/api/v1/plans/{plan_id}/archive");

            request.setPathParam("plan_id", planId);
            
                return request.sendNoResponseBody(this.requestCtx);
            }

        

    /** Publishes the current draft version, making it the active version. */
        public publishPlan(
            planId: string,
            ): Promise<Plan> {
            const request = new AllstaskRequest(HttpMethod.POST, "/api/v1/plans/{plan_id}/publish");

            request.setPathParam("plan_id", planId);
            
                return request.send(
                    this.requestCtx,
                    PlanSerializer._fromJsonObject,
                );
            }

        

    /**  */
        public unarchivePlan(
            planId: string,
            ): Promise<void> {
            const request = new AllstaskRequest(HttpMethod.POST, "/api/v1/plans/{plan_id}/unarchive");

            request.setPathParam("plan_id", planId);
            
                return request.sendNoResponseBody(this.requestCtx);
            }

        

    /**  */
        public listPlanVersions(
            planId: string,
            options?: PlansListPlanVersionsOptions,
            ): Promise<PlanVersionListResponse> {
            const request = new AllstaskRequest(HttpMethod.GET, "/api/v1/plans/{plan_id}/versions");

            request.setPathParam("plan_id", planId);
            request.setQueryParam("page", options?.page);
            request.setQueryParam("per_page", options?.perPage);
            
                return request.send(
                    this.requestCtx,
                    PlanVersionListResponseSerializer._fromJsonObject,
                );
            }

        

    }

