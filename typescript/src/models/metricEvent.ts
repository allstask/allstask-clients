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
    MetricEventData,
    MetricEventDataSerializer,
} from './metricEventData';

export interface MetricEvent {
    flattenMetriceventdata: MetricEventData;
    id: EventId;
    timestamp: Date;
    type: EventType;
    }

export const MetricEventSerializer = {
    _fromJsonObject(object: any): MetricEvent {
        return {
            flattenMetriceventdata: MetricEventDataSerializer._fromJsonObject(object['__flatten_metriceventdata']),
            id: EventIdSerializer._fromJsonObject(object['id']),
            timestamp: new Date(object['timestamp']),
            type: EventTypeSerializer._fromJsonObject(object['type']),
            };
    },

    _toJsonObject(self: MetricEvent): any {
        return {
            '__flatten_metriceventdata': MetricEventDataSerializer._toJsonObject(self.flattenMetriceventdata),
            'id': EventIdSerializer._toJsonObject(self.id),
            'timestamp': self.timestamp,
            'type': EventTypeSerializer._toJsonObject(self.type),
            };
    }
}