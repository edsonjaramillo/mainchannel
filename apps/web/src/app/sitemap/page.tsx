import { Anchor } from 'ui/src/Anchor';
import { Responsive } from 'ui/src/Responsive';
import { Section } from 'ui/src/Section';
import { CMSClient } from 'utils/src/cms/CMSClient';

import { navigationLinks } from '../../resources/links';

export default async function SitemapPage() {
  const beers = await new CMSClient().getBeers();

  return (
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
  );
}
