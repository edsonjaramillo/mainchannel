import { CTA, Community, OurStory, HeadOpenGraph } from '@/components/index';
import { graphCMSClient } from '@/lib/graphcms/client';
import { getHomepageProps } from '@/lib/graphcms/queries';
import { CallToActionType, CommunityType, OurStoryType } from '@/lib/graphcms/types';
import { GetServerSideProps } from 'next';

interface HomePageProps {
  communities: CommunityType[];
  ourStory: OurStoryType;
  callToAction: CallToActionType;
}

const Home = ({ communities, ourStory, callToAction }: HomePageProps) => {
  return (
    <>
      <HeadOpenGraph
        title='Home'
        description='fsdnfoksdffdsfdsfsdfsdfsdfdsnfkjdsn'
        image='https'
        alt='fgksdfndjsn'
      />
      <CTA {...callToAction} />
      <OurStory {...ourStory} />
      <Community images={communities} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { communities, callToAction, ourStory } = await graphCMSClient.request(getHomepageProps);

  return {
    props: { communities, callToAction, ourStory },
  };
};

export default Home;
