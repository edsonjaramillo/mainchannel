import Image from 'next/image';
import Link from 'next/link';

import { Text } from 'ui/src/Text';
import type { Product } from 'utils/src/types';

type BeerCardProps = {
  product: Product;
};

export default function BeerCard({ product }: BeerCardProps) {
  return (
    <Link href={`/ontap/${product.slug}`} className="group/beer-card flex flex-col gap-2">
      <div className="aspect-h-3 aspect-w-2 relative overflow-hidden rounded">
        <Image
          src={product.image.url}
          className="z-0 object-cover transition-transform duration-base group-hover/beer-card:scale-110"
          alt=""
          fill
          placeholder="blur"
          blurDataURL={product.image.blurDataUrl}
        />
      </div>
      <div>
        <div className="flex items-center justify-between">
          <Text as="span" className="line-clamp-1 font-medium" size="4">
            {product.name}
          </Text>
          <Text as="span" textColor="gray" size="3">
            ${product.prices.singlePrice}
          </Text>
        </div>
        <Text as="span" textColor="gray" size="2">
          {product.details.abv}% ABV
        </Text>
      </div>
    </Link>
  );
}
