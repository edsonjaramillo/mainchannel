import { Section } from 'ui/src/Section';
import { CMSClient } from 'utils/src/cms/CMSClient';

import EventCard from './EventCard';

export const revlalidate = 60 * 60 * 12;

export default async function Events() {
  const now = new Date().toISOString();
  const events = await new CMSClient().getEvents(now);

  return (
    <Section header="Upcoming" headerAs="h2" id="events">
      <div className="flex flex-col">
        {events.map((event) => (
          <EventCard event={event} key={event.id} />
        ))}
      </div>
    </Section>
  );
}
