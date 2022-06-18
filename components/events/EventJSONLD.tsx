import { AddressManager } from '@/lib/AddressManager';
import { EventType } from '@/lib/graphcms/types';
import Head from 'next/head';

const EventJSONLD = (event: EventType) => {
  const { locationName, address } = new AddressManager().getLocationJSONLD(event);

  const json = {
    '@context': 'https://schema.org',
    '@type': 'SocialEvent',
    name: event.title,
    startDate: event.startTime,
    endDate: event.endTime,
    description: event.description,
    url: `https://mainchannelbrewing.com/events#${event.id}`,
    image: 'https://media.graphassets.com/AgWdksMVQQqEfEoz5kRQ',
    organizer: {
      '@type': 'Organization',
      name: 'Main Channel Brewing Company',
      url: 'https://mainchannelbrewing.com',
      logo: 'https://media.graphassets.com/AgWdksMVQQqEfEoz5kRQ',
    },
    location: {
      '@type': 'EventVenue',
      name: locationName,
      address: {
        '@type': 'PostalAddress',
        streetAddress: address.street,
        addressLocality: address.city,
        addressRegion: address.state,
        postalCode: address.zipcode,
        addressCountry: 'US',
      },
    },
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
  };

  return (
    <Head>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
      />
    </Head>
  );
};

export default EventJSONLD;
