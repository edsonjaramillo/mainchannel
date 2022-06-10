import ICalendarLink from 'react-icalendar-link';
import { ICalEvent } from 'react-icalendar-link/dist/utils';
import { AddressManager } from '@/lib/AddressManager';
import { EventType } from '@/lib/graphcms/types';

const ICal = (event: EventType) => {
  const location = new AddressManager().getEventAddress(event);

  const eventDetails: ICalEvent = {
    title: event.title,
    description: event.description,
    startTime: event.startTime,
    endTime: event.endTime,
    location: location,
    url: `https://www.mainchannelbrewing.com/events#${event.id}`,
  };

  return (
    <>
      {/* ts-ignored is used because there is a type children error for the library
      that does not allow text inside the link tag for some reason despite it being 
      shown to be used in their own documentation. There was a bug reported from what
      I saw on their github repo. */}
      <div title={`Add ${event.title} to calendar`}>
        {/* @ts-ignore */}
        <ICalendarLink filename={`${event.id}.ics`} event={eventDetails}>
          Add to Calendar
        </ICalendarLink>
      </div>
    </>
  );
};

export default ICal;
