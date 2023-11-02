import type { Metadata } from 'next';

import { Anchor } from 'ui/src/Anchor';
import { Responsive } from 'ui/src/Responsive';
import { Section } from 'ui/src/Section';
import { CMSClient } from 'utils/src/cms/CMSClient';
import { SEO } from 'utils/src/metadata/SEO';

import PageHeader from '../../components/shared/PageHeader';
import { navigationLinks } from '../../resources/links';

export async function generateMetadata(): Promise<Metadata> {
  return SEO.metadata({
    title: 'Sitemap',
    description: 'Sitemap for Main Channel Brewing Company. Includes links to all pages.',
    robots: 'index, follow',
    canonical: '/sitemap',
  });
}

export default async function SitemapPage() {
  const beers = await new CMSClient().getBeers();
  return (
    <>
      <PageHeader text="Sitemap" />
      <Responsive>
        <Section headerAs="h2" header="Core">
          <div className="grid grid-cols-fluid gap-y-4">
            {navigationLinks.map((link) => (
              <Anchor as="Next" key={link.href} href={link.href}>
                {link.name}
              </Anchor>
            ))}
            <Anchor as="Next" href="/sitemap">
              Donations
            </Anchor>
          </div>
        </Section>
        <Section headerAs="h2" header="Beers">
          <div className="grid grid-cols-fluid gap-y-4">
            {beers.map((beer) => (
              <Anchor as="Next" key={beer.id} href={`/beers/${beer.id}`}>
                {beer.name}
              </Anchor>
            ))}
          </div>
        </Section>
      </Responsive>
    </>
  );
}
