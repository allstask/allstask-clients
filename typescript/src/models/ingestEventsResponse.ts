// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    IngestFailure,
    IngestFailureSerializer,
} from './ingestFailure';

export interface IngestEventsResponse {
    /** Events that failed to ingest. Omitted when no failures. */
        failures?: IngestFailure[];
    }

export const IngestEventsResponseSerializer = {
    _fromJsonObject(object: any): IngestEventsResponse {
        return {
            failures: object['failures'].map((item: IngestFailure) => IngestFailureSerializer._fromJsonObject(item)),
            };
    },

    _toJsonObject(self: IngestEventsResponse): any {
        return {
            'failures': self.failures?.map((item) => IngestFailureSerializer._toJsonObject(item)),
            };
    }
}