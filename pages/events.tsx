import { GetServerSideProps } from 'next';
import { graphCMSClient } from '@/lib/graphcms/client';
import { getEvents } from '@/lib/graphcms/queries';
import { EventType } from '@/lib/graphcms/types';
import { PageHeader, Event, HeadOpenGraph } from '@/components/index';
import { DateManager } from '@/lib/DateManager';

interface EventsPageProps {
  events: EventType[];
}

const EventsPage = ({ events }: EventsPageProps) => (
  <>
    <HeadOpenGraph
      title='Events'
      description='Main Channel Brewing Company is your one-stop-shop for all things events! We offer a variety of services to make your event planning process as easy and stress free as possible. Visit our website today to learn more!'
      image='https://media.graphassets.com/COyXb8wS7eWHZSdoZdzg'
      alt='Main Channel Brewing Company logo'
    />
    <PageHeader title='Events' />
    <div className='responsive-width'>
      {events.map((event) => (
        <Event key={event.id} {...event} />
      ))}
    </div>
  </>
);

export const getServerSideProps: GetServerSideProps = async () => {
  const yesterday = new DateManager().getYesterdayISO();
  const { events } = await graphCMSClient.request(getEvents, { yesterday });

  return {
    props: { events },
  };
};

export default EventsPage;
