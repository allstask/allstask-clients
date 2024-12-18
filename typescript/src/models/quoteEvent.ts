// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    EventId,
    EventIdSerializer,
} from './eventId';
import {
    EventType,
    EventTypeSerializer,
} from './eventType';
import {
    QuoteEventData,
    QuoteEventDataSerializer,
} from './quoteEventData';

export interface QuoteEvent {
    flattenQuoteeventdata: QuoteEventData;
    id: EventId;
    timestamp: Date;
    type: EventType;
    }

export const QuoteEventSerializer = {
    _fromJsonObject(object: any): QuoteEvent {
        return {
            flattenQuoteeventdata: QuoteEventDataSerializer._fromJsonObject(object['__flatten_quoteeventdata']),
            id: EventIdSerializer._fromJsonObject(object['id']),
            timestamp: new Date(object['timestamp']),
            type: EventTypeSerializer._fromJsonObject(object['type']),
            };
    },

    _toJsonObject(self: QuoteEvent): any {
        return {
            '__flatten_quoteeventdata': QuoteEventDataSerializer._toJsonObject(self.flattenQuoteeventdata),
            'id': EventIdSerializer._toJsonObject(self.id),
            'timestamp': self.timestamp,
            'type': EventTypeSerializer._toJsonObject(self.type),
            };
    }
}