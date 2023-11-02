import { Section } from 'ui/src/Section';
import { CMSClient } from 'utils/src/cms/CMSClient';
import type { Product } from 'utils/src/types';

import BeerCard from '../../components/ontap/BeerCard';
import PageHeader from '../../components/shared/PageHeader';

export default async function Page() {
  const beers = await new CMSClient().getBeers();
  const [yearRoundBeers, upcomingBeers, seasonalBeers] = sortBeers(beers);

  return (
    <>
      <PageHeader text="On Tap" />
      <Section headerAs="h2" header="Year Round">
        <div className="grid grid-cols-fluid gap-8">
          {yearRoundBeers.map((beer) => (
            <BeerCard product={beer} key={beer.id} />
          ))}
        </div>
      </Section>
      <Section headerAs="h2" header="Seasonal">
        <div className="grid grid-cols-fluid gap-8">
          {seasonalBeers.map((beer) => (
            <BeerCard product={beer} key={beer.id} />
          ))}
        </div>
      </Section>
      {upcomingBeers.length > 0 && (
        <Section headerAs="h2" header="Coming Soon">
          <div className="grid grid-cols-fluid gap-8">
            {upcomingBeers.map((beer) => (
              <BeerCard product={beer} key={beer.id} />
            ))}
          </div>
        </Section>
      )}
    </>
  );
}

function sortBeers(beers: Product[]) {
  const yearRoundBeers: Product[] = [];
  const upcomingBeers: Product[] = [];
  const seasonalBeers: Product[] = [];

  beers.forEach((beer) => {
    if (beer.isUpcoming) {
      upcomingBeers.push(beer);
    } else if (beer.isYearRound) {
      yearRoundBeers.push(beer);
    } else {
      seasonalBeers.push(beer);
    }
  });

  return [yearRoundBeers, upcomingBeers, seasonalBeers];
}
