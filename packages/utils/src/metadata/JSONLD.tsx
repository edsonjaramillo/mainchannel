import React from 'react';
import { WithContext, type Event as EventContext } from 'schema-dts';

import { Event } from '../types';

export function EventJSONLD(event: Event, url: string): WithContext<EventContext> {
  const eventUrl = `${url}/events/#${event.id}`;

  const storeName = event.isExternal ? event.extLocation : event.store.name;
  const address = event.isExternal ? event.extAddress : event.store.address;

  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    startDate: event.startTime,
    endDate: event.endTime,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    url: eventUrl,
    location: {
      '@type': 'Place',
      name: storeName,
      address: {
        '@type': 'PostalAddress',
        streetAddress: address!.street,
        addressLocality: address!.city,
        addressRegion: address!.state,
        postalCode: address!.zipcode,
      },
    },
    image: 'https://media.graphassets.com/COyXb8wS7eWHZSdoZdzg',
    offers: {
      '@type': 'Offer',
      url: eventUrl,
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      validFrom: event.startTime,
    },
    organizer: {
      '@type': 'Organization',
      name: 'Main Channel Brewing Company',
      url,
    },
  };
}

type JSONLDProps = { markup: WithContext<any> };
export function JSONLD({ markup }: JSONLDProps) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(markup) }} />;
}
