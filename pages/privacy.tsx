import { HeadOpenGraph, PrivacyPolicy } from '@/components/index';

const PrivacyPage = () => (
  <>
    <HeadOpenGraph
      title='Privacy Policy'
      description='Laundry Basket Plus Privacy Policy'
      image='https://media.graphassets.com/rGIffdyDQHSL0ePjy3ti'
      alt='Laundry Basket Plus logo'
    />
    <PrivacyPolicy
      name='Main Channel'
      email='mainchannelbeer@gmail.com'
      phone='(256) 960-5070'
      website='https://mainchannelbeer.com'
    />
  </>
);

export default PrivacyPage;
