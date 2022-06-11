import { GetServerSideProps } from 'next';
import { graphCMSClient } from '@/lib/graphcms/client';
import { getEvents } from '@/lib/graphcms/queries';
import { EventType } from '@/lib/graphcms/types';
import { PageHeader, Event, HeadOpenGraph } from '@/components/index';
import { DateManager } from '@/lib/DateManager';

interface EventsPageProps {
  events: EventType[];
}

const EventsPage = ({ events }: EventsPageProps) => {
  return (
    <>
      <HeadOpenGraph
        title='Events'
        description='Main Channel Events'
        image='https://media.graphassets.com/COyXb8wS7eWHZSdoZdzg'
        alt='Main Channel Brewing logo'
      />
      <PageHeader title='Events' />
      <div className='responsive-width'>
        {events.map((event) => (
          <Event key={event.id} {...event} />
        ))}
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const yesterday = new DateManager().getYesterdayISO();
  const { events } = await graphCMSClient.request(getEvents, { yesterday });

  return {
    props: { events },
  };
};

export default EventsPage;
