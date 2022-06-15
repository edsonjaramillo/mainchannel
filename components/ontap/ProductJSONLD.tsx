import { ProductType } from '@/lib/graphcms/types';
import Head from 'next/head';

const ProductJSONLD = (product: ProductType) => {
  const productJSON = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: product.image.url,
    description: product.description,
    brand: {
      '@type': 'Organization',
      name: 'Main Channel Brewing Company',
    },
    offers: {
      '@type': 'Offer',
      url: `https://www.mainchannelbrewing.com/ontap/${product.slug}`,
      priceCurrency: 'USD',
      price: product.prices.singlePrice,
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      availableDeliveryMethod: 'https://schema.org/OnSitePickup',
    },
  };

  return (
    <Head>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJSON) }}
      />
    </Head>
  );
};

export default ProductJSONLD;
