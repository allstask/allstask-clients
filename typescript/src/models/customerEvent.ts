// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    CustomerEventData,
    CustomerEventDataSerializer,
} from './customerEventData';
import {
    EventId,
    EventIdSerializer,
} from './eventId';
import {
    EventType,
    EventTypeSerializer,
} from './eventType';
/** Event-specific webhook schemas for type-safe webhook payloads */
export interface CustomerEvent {
    flattenCustomereventdata: CustomerEventData;
    id: EventId;
    timestamp: Date;
    type: EventType;
    }

export const CustomerEventSerializer = {
    _fromJsonObject(object: any): CustomerEvent {
        return {
            flattenCustomereventdata: CustomerEventDataSerializer._fromJsonObject(object['__flatten_customereventdata']),
            id: EventIdSerializer._fromJsonObject(object['id']),
            timestamp: new Date(object['timestamp']),
            type: EventTypeSerializer._fromJsonObject(object['type']),
            };
    },

    _toJsonObject(self: CustomerEvent): any {
        return {
            '__flatten_customereventdata': CustomerEventDataSerializer._toJsonObject(self.flattenCustomereventdata),
            'id': EventIdSerializer._toJsonObject(self.id),
            'timestamp': self.timestamp,
            'type': EventTypeSerializer._toJsonObject(self.type),
            };
    }
}