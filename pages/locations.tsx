import Store from '@/components/location/Store';
import { StoreType } from '@/lib/graphcms/types';
import { graphCMSClient } from '@/lib/graphcms/client';
import { getStores } from '@/lib/graphcms/queries';
import { GetServerSideProps } from 'next';
import { PageHeader } from '../components';

interface LocationsPageProps {
  stores: StoreType[];
}

const LocationsPage = ({ stores }: LocationsPageProps) => (
  <>
    <PageHeader title='Main Channel Locations' />
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
