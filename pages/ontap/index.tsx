import { GetServerSideProps } from 'next';
import { HeadOpenGraph, PageHeader, ProductGrid } from '@/components/index';
import { graphCMSClient } from '@/lib/graphcms/client';
import { ProductType } from '@/lib/graphcms/types';
import { getYearRound, getSeasonal, getUpcoming } from '@/lib/graphcms/queries';

interface BeersPageProps {
  yearRoundBeers: ProductType[];
  seasonalBeers: ProductType[];
  upComingBeers: ProductType[];
}

const BeersPage = ({ yearRoundBeers, seasonalBeers, upComingBeers }: BeersPageProps) => (
  <>
    <HeadOpenGraph
      title='On Tap'
      description='fsdnfoksdffdsfdsfsdfsdfsdfdsnfkjdsn'
      image='https://media.graphassets.com/COyXb8wS7eWHZSdoZdzg'
      alt='Main Channel Brewing logo'
    />
    <PageHeader title='On Tap' />
    <ProductGrid header='All Year' products={yearRoundBeers} />
    <ProductGrid header='Seasonal' products={seasonalBeers} />
    {upComingBeers.length > 0 && <ProductGrid header='Coming Soon' products={upComingBeers} />}
  </>
);

export const getServerSideProps: GetServerSideProps = async () => {
  const { products: yearRoundBeers } = await graphCMSClient.request(getYearRound);
  const { products: seasonalBeers } = await graphCMSClient.request(getSeasonal);
  const { products: upComingBeers } = await graphCMSClient.request(getUpcoming);

  return {
    props: {
      yearRoundBeers,
      seasonalBeers,
      upComingBeers,
    },
  };
};

export default BeersPage;
