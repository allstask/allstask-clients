// this file is @generated
import {
    CreditNote,
    CreditNoteSerializer,
} from '../models/creditNote';
import {
    CreditNoteCustomPropertiesRequest,
    CreditNoteCustomPropertiesRequestSerializer,
} from '../models/creditNoteCustomPropertiesRequest';
import {
    CreditNoteListResponse,
    CreditNoteListResponseSerializer,
} from '../models/creditNoteListResponse';
import {
    CreditNoteStatus,
    CreditNoteStatusSerializer,
} from '../models/creditNoteStatus';
import {
    CustomerId,
    CustomerIdSerializer,
} from '../models/customerId';
import {
    InvoiceId,
    InvoiceIdSerializer,
} from '../models/invoiceId';
import { HttpMethod, AllstaskRequest, AllstaskRequestContext } from "../request";

export interface CreditNotesListCreditNotesOptions {
        /** Filter by customer ID */
            customerId?: CustomerId;
        /** Filter by invoice ID */
            invoiceId?: InvoiceId;
        status?: CreditNoteStatus;
        /** Free-text search over credit note number. */
            search?: string;
        /** Sort order. Format: `column.direction`. Allowed columns: `created_at`, `credit_note_number`, `total`, `status`. Direction: `asc` or `desc`. Default: `created_at.desc`. */
            orderBy?: string;
        /** Page number (0-indexed) */
            page?: number;
        /** Number of items per page */
            perPage?: number;
        }

    export class CreditNotes {
    public constructor(private readonly requestCtx: AllstaskRequestContext) {}

    /** List a tenant's credit notes, optionally filtered by customer, invoice or status. */
        public listCreditNotes(
            options?: CreditNotesListCreditNotesOptions,
            ): Promise<CreditNoteListResponse> {
            const request = new AllstaskRequest(HttpMethod.GET, "/api/v1/credit-notes");

            request.setQueryParam("customer_id", options?.customerId);
            request.setQueryParam("invoice_id", options?.invoiceId);
            request.setQueryParam("status", options?.status);
            request.setQueryParam("search", options?.search);
            request.setQueryParam("order_by", options?.orderBy);
            request.setQueryParam("page", options?.page);
            request.setQueryParam("per_page", options?.perPage);
            
                return request.send(
                    this.requestCtx,
                    CreditNoteListResponseSerializer._fromJsonObject,
                );
            }

        

    /** Retrieve a single credit note by ID. */
        public getCreditNoteById(
            creditNoteId: string,
            ): Promise<CreditNote> {
            const request = new AllstaskRequest(HttpMethod.GET, "/api/v1/credit-notes/{credit_note_id}");

            request.setPathParam("credit_note_id", creditNoteId);
            
                return request.send(
                    this.requestCtx,
                    CreditNoteSerializer._fromJsonObject,
                );
            }

        

    /**
* Merge custom property values onto a credit note (send a key with `null` to remove it).
* Values are validated against the tenant's `CREDIT_NOTE` property definitions. Allowed at any
* status — custom properties are external workflow metadata and stay editable after the credit
* note is finalized.
*/
        public patchCreditNoteCustomProperties(
            creditNoteId: string,
            creditNoteCustomPropertiesRequest: CreditNoteCustomPropertiesRequest,
            ): Promise<CreditNote> {
            const request = new AllstaskRequest(HttpMethod.PATCH, "/api/v1/credit-notes/{credit_note_id}/custom-properties");

            request.setPathParam("credit_note_id", creditNoteId);
            request.setBody(
                    CreditNoteCustomPropertiesRequestSerializer._toJsonObject(
                        creditNoteCustomPropertiesRequest,
                    )
                );
            
                return request.send(
                    this.requestCtx,
                    CreditNoteSerializer._fromJsonObject,
                );
            }

        

    /**  */
        public downloadCreditNotePdf(
            creditNoteId: string,
            ): Promise<void> {
            const request = new AllstaskRequest(HttpMethod.GET, "/api/v1/credit-notes/{credit_note_id}/download");

            request.setPathParam("credit_note_id", creditNoteId);
            
                return request.sendNoResponseBody(this.requestCtx);
            }

        

    }

