import { CallToActionType } from '@/lib/graphcms/types';
import Image from 'next/image';
import Link from 'next/link';

const CTA = ({ header, subheader, image, imageDescription }: CallToActionType) => (
  <header className='cta'>
    <div className='cta__content'>
      <div className='cta__contentgrid responsive-width-cta'>
        <h1 className='cta__header'>{header}</h1>
        <span className='cta__subheader'>{subheader}</span>
        <div className='cta__buttongrid'>
          <Link href='/ontap'>
            <a className='cta__button cta--primary'>View Beers</a>
          </Link>
          <a
            rel='noopener nofollow noreferrer external'
            target='_blank'
            href='https://ord.spoton.com/61081e4324b4c402ff9088fc#'
            className='cta__button cta--secondary'>
            Order Online
          </a>
        </div>
      </div>
    </div>
    <div className='cta__image'>
      <Image
        src={image.url}
        layout='fill'
        objectFit='cover'
        alt={imageDescription}
        quality={35}
        priority
      />
    </div>
  </header>
);

export default CTA;
