import { navbarLinks } from '@/components/shared/Navbar';
import { graphCMSClient } from '@/lib/graphcms/client';
import { getSitemapLinks } from '@/lib/graphcms/queries';
import { StoreType, ProductType } from '@/lib/graphcms/types';
import { GetServerSideProps, GetStaticProps } from 'next';
import Link from 'next/link';

interface SitemapPageProps {
  products: ProductType[];
}

const Sitemap = ({ products }: SitemapPageProps) => (
  <div className='sitemap responsive-width-sitemap'>
    <h1 className='sitemap__header'>Sitemap</h1>
    <hr />
    <div className='sitemap__grid'>
      <SitemapSection header='Main'>
        <SitemapLink slug='/' name='Homepage' />
        {navbarLinks.map((link) => (
          <SitemapLink key={link.name} slug={link.slug} name={link.name} />
        ))}
      </SitemapSection>
      <SitemapSection header='Legal'>
        <SitemapLink slug='/policy' name='Privacy Policy' />
        <SitemapLink slug='/terms' name='Terms and Conditions' />
      </SitemapSection>
      <SitemapSection header='Resources'>
        <SitemapLink slug='/donations' name='Donations' />
      </SitemapSection>
      {products.length > 0 && (
        <SitemapSection header='Beers'>
          {products.map((product) => (
            <SitemapLink key={product.id} slug={`/ontap/${product.slug}`} name={product.name} />
          ))}
        </SitemapSection>
      )}
    </div>
  </div>
);

interface SitemapSectionProps {
  header: string;
  children?: React.ReactNode;
}

const SitemapSection = ({ header, children }: SitemapSectionProps) => (
  <section className='sitemap__section'>
    <h2 className='sitemap__section--title'>{header}</h2>
    {children}
  </section>
);

interface SitemapLinkProps {
  slug: string;
  name: string;
}

const SitemapLink = ({ slug, name }: SitemapLinkProps) => (
  <Link href={slug}>
    <a className='sitemap__link'>{name}</a>
  </Link>
);

export const getStaticProps: GetStaticProps = async () => {
  const { products } = await graphCMSClient.request(getSitemapLinks);

  return {
    props: { products },
  };
};

export default Sitemap;
