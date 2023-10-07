import { Section } from 'ui/src/Section';
import { CMSClient } from 'utils/src/cms/CMSClient';

import EventCard from '../../components/events/EventCard';

export const revlalidate = 60 * 60 * 24;

export default async function EventsPage() {
  const events = await new CMSClient().getEvents();
  return (
    <>
      <Section header="Events" headerAs="h1" id="events">
        <div className="flex flex-col">
          {events.map((event) => (
            <EventCard event={event} key={event.id} />
          ))}
        </div>
      </Section>
    </>
  );
}
