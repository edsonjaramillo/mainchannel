import { Responsive } from 'ui/src/Responsive';
import { CMSClient } from 'utils/src/cms/CMSClient';

import BeerOverview from '../../../components/ontap/BeerOverview';

type RequiredParams = { slug: string };
type PageProps = { params: RequiredParams };

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
