import { HeadOpenGraph, PrivacyPolicy } from '@/components/index';

const PrivacyPage = () => (
  <>
    <HeadOpenGraph
      title='Privacy Policy'
      description='Main Channel Privacy Policy'
      image='https://media.graphassets.com/COyXb8wS7eWHZSdoZdzg'
      alt='Main Channel Brewing Company logo'
    />
    <PrivacyPolicy
      name='Main Channel'
      email='mainchannelbeer@gmail.com'
      phone='(256) 960-5070'
      website='https://www.mainchannelbrewing.com'
    />
  </>
);

export default PrivacyPage;
