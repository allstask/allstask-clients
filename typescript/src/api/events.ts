// this file is @generated
import {
    IngestEventsRequest,
    IngestEventsRequestSerializer,
} from '../models/ingestEventsRequest';
import {
    IngestEventsResponse,
    IngestEventsResponseSerializer,
} from '../models/ingestEventsResponse';
import { HttpMethod, AllstaskRequest, AllstaskRequestContext } from "../request";

export class Events {
    public constructor(private readonly requestCtx: AllstaskRequestContext) {}

    /**
* Ingest usage events for metering and billing purposes.
* 
* Events are deduplicated by `(event_id, customer_id)` — re-sending the same pair will not be
* double-counted. If timestamps differ across duplicates, the event with the latest timestamp is used.
* 
* By default, any invalid event rejects the entire batch. Set `allow_partial_failures` to `true` to ingest valid events and receive per-event failure details in the response body.
*/
        public ingestEvents(
            ingestEventsRequest: IngestEventsRequest,
            ): Promise<IngestEventsResponse> {
            const request = new AllstaskRequest(HttpMethod.POST, "/api/v1/events/ingest");

            request.setBody(
                    IngestEventsRequestSerializer._toJsonObject(
                        ingestEventsRequest,
                    )
                );
            
                return request.send(
                    this.requestCtx,
                    IngestEventsResponseSerializer._fromJsonObject,
                );
            }

        

    }

