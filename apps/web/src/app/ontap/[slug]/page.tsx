import type { Metadata } from 'next';

import { Responsive } from 'ui/src/Responsive';
import { CMSClient } from 'utils/src/cms/CMSClient';
import { ENV } from 'utils/src/env';
import { SEO } from 'utils/src/metadata/SEO';

import BeerOverview from '../../../components/ontap/BeerOverview';

type RequiredParams = { slug: string };
type PageProps = { params: RequiredParams };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const beer = await new CMSClient().getBeer(params.slug);
  const url = ENV.URL;
  return SEO.metadata({
    title: beer.name,
    description: beer.description,
    robots: 'index, follow',
    openGraph: {
      title: beer.name,
      description: beer.description,
      images: {
        url: beer.image.url,
        alt: `Glass of ${beer.name} from Main Channel Brewing Company`,
        width: beer.image.width,
        height: beer.image.height,
      },
      type: 'website',
      url: `${url}/ontap/${beer.slug}`,
    },
    canonical: `/ontap/${beer.slug}`,
  });
}

export default async function BeerPage({ params }: PageProps) {
  const beer = await new CMSClient().getBeer(params.slug);

  return (
    <>
      <Responsive className="my-8">
        <BeerOverview beer={beer} />
      </Responsive>
    </>
  );
}

export async function generateStaticParams(): Promise<RequiredParams[]> {
  const blogPosts = await new CMSClient().getBeers();
  return blogPosts.map((post) => ({ slug: post.slug }));
}
