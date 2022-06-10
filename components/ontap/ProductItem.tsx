import Link from 'next/link';
import { ProductType } from '@/lib/graphcms/types';
import { BlurImage } from '@/components/index';
import { Formatter } from '@/lib/Formatter';

const ProductItem = ({ name, slug, prices, image, details }: ProductType) => {
  const formatter = new Formatter();
  const price = formatter.formatPrice(prices.singlePrice);
  const abv = `${details.abv}% ABV`;

  return (
    <Link href={`/ontap/${slug}`}>
      <a>
        <article className='productitem'>
          <div className='productitem__image'>
            <BlurImage src={image.url} layout='fill' objectFit='cover' alt={name} quality={65} />
          </div>
          <span className='productitem__name'>{name}</span>
          <span className='productitem__price'>{`${price} - ${abv}`}</span>
        </article>
      </a>
    </Link>
  );
};

export default ProductItem;
