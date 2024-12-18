// this file is @generated
import {
    Customer,
    CustomerSerializer,
} from '../models/customer';
import {
    CustomerCreateRequest,
    CustomerCreateRequestSerializer,
} from '../models/customerCreateRequest';
import {
    CustomerListResponse,
    CustomerListResponseSerializer,
} from '../models/customerListResponse';
import {
    CustomerPatchRequest,
    CustomerPatchRequestSerializer,
} from '../models/customerPatchRequest';
import {
    CustomerPortalTokenRequest,
    CustomerPortalTokenRequestSerializer,
} from '../models/customerPortalTokenRequest';
import {
    CustomerPortalTokenResponse,
    CustomerPortalTokenResponseSerializer,
} from '../models/customerPortalTokenResponse';
import {
    CustomerUpdateRequest,
    CustomerUpdateRequestSerializer,
} from '../models/customerUpdateRequest';
import {
    EffectiveEntitlementListResponse,
    EffectiveEntitlementListResponseSerializer,
} from '../models/effectiveEntitlementListResponse';
import { HttpMethod, AllstaskRequest, AllstaskRequestContext } from "../request";

export interface CustomersListCustomersOptions {
        /** Sort order. Format: `column.direction`. Allowed columns: `name`, `email`, `alias`, `created_at`. Direction: `asc` or `desc`. Default: `created_at.desc`. */
            orderBy?: string;
        /** Page number (0-indexed) */
            page?: number;
        /** Number of items per page */
            perPage?: number;
        search?: string;
        archived?: boolean;
        }

    export class Customers {
    public constructor(private readonly requestCtx: AllstaskRequestContext) {}

    /** List customers with optional pagination and search filtering. */
        public listCustomers(
            options?: CustomersListCustomersOptions,
            ): Promise<CustomerListResponse> {
            const request = new AllstaskRequest(HttpMethod.GET, "/api/v1/customers");

            request.setQueryParam("order_by", options?.orderBy);
            request.setQueryParam("page", options?.page);
            request.setQueryParam("per_page", options?.perPage);
            request.setQueryParam("search", options?.search);
            request.setQueryParam("archived", options?.archived);
            
                return request.send(
                    this.requestCtx,
                    CustomerListResponseSerializer._fromJsonObject,
                );
            }

        

    /**  */
        public createCustomer(
            customerCreateRequest: CustomerCreateRequest,
            ): Promise<Customer> {
            const request = new AllstaskRequest(HttpMethod.POST, "/api/v1/customers");

            request.setBody(
                    CustomerCreateRequestSerializer._toJsonObject(
                        customerCreateRequest,
                    )
                );
            
                return request.send(
                    this.requestCtx,
                    CustomerSerializer._fromJsonObject,
                );
            }

        

    /** Retrieve a single customer by ID or alias. */
        public getCustomer(
            idOrAlias: string,
            ): Promise<Customer> {
            const request = new AllstaskRequest(HttpMethod.GET, "/api/v1/customers/{id_or_alias}");

            request.setPathParam("id_or_alias", idOrAlias);
            
                return request.send(
                    this.requestCtx,
                    CustomerSerializer._fromJsonObject,
                );
            }

        

    /**  */
        public updateCustomer(
            idOrAlias: string,
            customerUpdateRequest: CustomerUpdateRequest,
            ): Promise<Customer> {
            const request = new AllstaskRequest(HttpMethod.PUT, "/api/v1/customers/{id_or_alias}");

            request.setPathParam("id_or_alias", idOrAlias);
            request.setBody(
                    CustomerUpdateRequestSerializer._toJsonObject(
                        customerUpdateRequest,
                    )
                );
            
                return request.send(
                    this.requestCtx,
                    CustomerSerializer._fromJsonObject,
                );
            }

        

    /** No linked entity will be deleted. You need to terminate all active subscriptions before archiving a customer, or the call will fail. */
        public archiveCustomer(
            idOrAlias: string,
            ): Promise<void> {
            const request = new AllstaskRequest(HttpMethod.DELETE, "/api/v1/customers/{id_or_alias}");

            request.setPathParam("id_or_alias", idOrAlias);
            
                return request.sendNoResponseBody(this.requestCtx);
            }

        

    /** Partially update a customer. Only provided fields will be updated. */
        public patchCustomer(
            idOrAlias: string,
            customerPatchRequest: CustomerPatchRequest,
            ): Promise<Customer> {
            const request = new AllstaskRequest(HttpMethod.PATCH, "/api/v1/customers/{id_or_alias}");

            request.setPathParam("id_or_alias", idOrAlias);
            request.setBody(
                    CustomerPatchRequestSerializer._toJsonObject(
                        customerPatchRequest,
                    )
                );
            
                return request.send(
                    this.requestCtx,
                    CustomerSerializer._fromJsonObject,
                );
            }

        

    /**  */
        public getEffectiveEntitlements(
            idOrAlias: string,
            ): Promise<EffectiveEntitlementListResponse> {
            const request = new AllstaskRequest(HttpMethod.GET, "/api/v1/customers/{id_or_alias}/entitlements");

            request.setPathParam("id_or_alias", idOrAlias);
            
                return request.send(
                    this.requestCtx,
                    EffectiveEntitlementListResponseSerializer._fromJsonObject,
                );
            }

        

    /**
* Generates a JWT token that grants access to the customer portal.
* The token can be used to access invoices, payment methods, and other portal features.
*/
        public createPortalToken(
            idOrAlias: string,
            customerPortalTokenRequest: CustomerPortalTokenRequest,
            ): Promise<CustomerPortalTokenResponse> {
            const request = new AllstaskRequest(HttpMethod.POST, "/api/v1/customers/{id_or_alias}/portal-token");

            request.setPathParam("id_or_alias", idOrAlias);
            request.setBody(
                    CustomerPortalTokenRequestSerializer._toJsonObject(
                        customerPortalTokenRequest,
                    )
                );
            
                return request.send(
                    this.requestCtx,
                    CustomerPortalTokenResponseSerializer._fromJsonObject,
                );
            }

        

    /**  */
        public unarchiveCustomer(
            idOrAlias: string,
            ): Promise<void> {
            const request = new AllstaskRequest(HttpMethod.POST, "/api/v1/customers/{id_or_alias}/unarchive");

            request.setPathParam("id_or_alias", idOrAlias);
            
                return request.sendNoResponseBody(this.requestCtx);
            }

        

    }

