import { CommunityType } from '@/lib/graphcms/types';
import { Section, BlurImage } from '@/components/index';

interface CommunityProps {
  images: CommunityType[];
}

const Community = ({ images }: CommunityProps) => (
  <Section header='Community' textcolor='section--text--primary' color='section--bg--grayscale-100'>
    <div className='communitygrid'>
      {images.map((image) => (
        <div className='community__image'>
          <BlurImage
            src={image.image.url}
            layout='fill'
            objectFit='cover'
            alt={image.description}
            quality={35}
          />
        </div>
      ))}
    </div>
  </Section>
);

export default Community;
