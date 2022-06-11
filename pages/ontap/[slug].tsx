import { graphCMSClient } from '@/lib/graphcms/client';
import { getProduct } from '@/lib/graphcms/queries';
import { ProductType } from '@/lib/graphcms/types';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { ProductSection, PriceItem, ProductTable, ProductJSONLD } from '@/components/index';
import { BlurImage, HeadOpenGraph } from '@/components/index';

interface SingleBeerPageProps {
  product: ProductType;
}

const SingleBeerPage = ({ product }: SingleBeerPageProps) => (
  <>
    <HeadOpenGraph
      title={product.name}
      description={product.description}
      image={product.image.url}
      alt={product.name}
    />
    <ProductJSONLD {...product} />
    <div className='productitemgrid responsive-width'>
      <div className='product__image'>
        <BlurImage src={product.image.url} layout='fill' objectFit='cover' alt={product.name} />
      </div>
      <div className='product__details'>
        <h1 className='product__name'>{product.name}</h1>
        <p className='product__description'>{product.description}</p>
        <ProductSection title='Prices'>
          <PriceItem title='Single' price={product.prices.singlePrice} />
          {product.prices.sixPackPrice && <PriceItem title='Double' price={product.prices.sixPackPrice} />}
          {product.prices.kegPrice && <PriceItem title='1/6 Keg' price={product.prices.kegPrice} />}
        </ProductSection>
        <ProductSection title='Details'>
          <ProductTable {...product.details} />
        </ProductSection>
      </div>
    </div>
  </>
);

// export const getStaticPaths: GetStaticPaths = async () => {
//   const { products } = await graphCMSClient.request(getProductSlugs);
//   const paths = products.map(({ slug }: ProductType) => ({
//     params: { slug },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const { slug } = ctx.params as { slug: string };
  const { product } = await graphCMSClient.request(getProduct, { slug });

  return {
    props: { product },
  };
};

export default SingleBeerPage;
