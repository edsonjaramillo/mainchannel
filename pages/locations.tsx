import Store from '@/components/location/Store';
import { StoreType } from '@/lib/graphcms/types';
import { graphCMSClient } from '@/lib/graphcms/client';
import { getStores } from '@/lib/graphcms/queries';
import { GetServerSideProps } from 'next';
import { HeadOpenGraph, PageHeader } from '@/components/index';

interface LocationsPageProps {
  stores: StoreType[];
}

const LocationsPage = ({ stores }: LocationsPageProps) => (
  <>
    <HeadOpenGraph
      title='Locations'
      description='Main Channel Locations'
      image='https://media.graphassets.com/COyXb8wS7eWHZSdoZdzg'
      alt='Main Channel Brewing Company logo'
    />
    <PageHeader title='Locations' />
    <section>
      {stores.map((store, i) => (
        <Store key={store.id} isOdd={i % 2 === 0} {...store} />
      ))}
    </section>
  </>
);

export const getServerSideProps: GetServerSideProps = async () => {
  const { stores } = await graphCMSClient.request(getStores);

  return {
    props: { stores },
  };
};

export default LocationsPage;
