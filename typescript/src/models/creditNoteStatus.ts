// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */

export enum CreditNoteStatus {
    Draft = 'DRAFT',
    Finalized = 'FINALIZED',
    Voided = 'VOIDED',
    }

export const CreditNoteStatusSerializer = {
    _fromJsonObject(object: any): CreditNoteStatus {
        return object;
    },

    _toJsonObject(self: CreditNoteStatus): any {
        return self;
    }
}