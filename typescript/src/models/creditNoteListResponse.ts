// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    CreditNote,
    CreditNoteSerializer,
} from './creditNote';
import {
    PaginationResponse,
    PaginationResponseSerializer,
} from './paginationResponse';

export interface CreditNoteListResponse {
    data: CreditNote[];
    paginationMeta: PaginationResponse;
    }

export const CreditNoteListResponseSerializer = {
    _fromJsonObject(object: any): CreditNoteListResponse {
        return {
            data: object['data'].map((item: CreditNote) => CreditNoteSerializer._fromJsonObject(item)),
            paginationMeta: PaginationResponseSerializer._fromJsonObject(object['pagination_meta']),
            };
    },

    _toJsonObject(self: CreditNoteListResponse): any {
        return {
            'data': self.data.map((item) => CreditNoteSerializer._toJsonObject(item)),
            'pagination_meta': PaginationResponseSerializer._toJsonObject(self.paginationMeta),
            };
    }
}