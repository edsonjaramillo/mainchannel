import { Terms, HeadOpenGraph } from '@/components/index';

const TermsPage = () => (
  <>
    <HeadOpenGraph
      title='Terms and Conditions'
      description='Main Channel Terms and Conditions'
      image='https://media.graphassets.com/rGIffdyDQHSL0ePjy3ti'
      alt='Main Channel logo'
    />
    <Terms
      name='Main Channel'
      email='mainchannelbeer@gmail.com'
      phone='(256) 960-5070'
      website='https://mainchannelbeer.com'
    />
  </>
);

export default TermsPage;
