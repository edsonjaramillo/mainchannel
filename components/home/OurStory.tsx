import { Section } from '@/components/index';
import { OurStoryType } from '@/lib/graphcms/types';

const OurStory = ({ description }: OurStoryType) => (
  <Section
    header='Our Story'
    width='responsive-width-story'
    color='section--bg--primary'
    textcolor='section--text--grayscale-100'>
    <p className='ourstory__description'>{description}</p>
  </Section>
);

export default OurStory;
