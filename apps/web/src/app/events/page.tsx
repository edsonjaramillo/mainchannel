import type { Metadata } from 'next';

import { SEO } from 'utils/src/metadata/SEO';

import Events from '../../components/events/Events';
import PageHeader from '../../components/shared/PageHeader';

export async function generateMetadata(): Promise<Metadata> {
  return SEO.metadata({
    title: 'Events',
    description: 'See what events are coming up at Main Channel Brewing Company.',
    robots: 'index, follow',
    canonical: '/events',
  });
}

export default async function EventsPage() {
  return (
    <>
      <PageHeader text="Events" />
      <Events />
    </>
  );
}
