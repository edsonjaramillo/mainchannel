import { Metadata } from 'next';

import { Section } from 'ui/src/Section';
import { Text } from 'ui/src/Text';
import { CMSClient } from 'utils/src/cms/CMSClient';
import { SEO } from 'utils/src/metadata/SEO';

import CTA from '../components/home/CTA';

export async function generateMetadata(): Promise<Metadata> {
  return SEO.generateMetadata({ title: 'Main Channel Homepage', description: '' });
}

export default async function HomePage() {
  const cta = await new CMSClient().getCTA();

  return (
    <>
      <CTA cta={cta} />
      <Section headerAs="h2" header="About Us">
        <Text as="p" size="5" textColor="gray" align="center" className="mx-auto max-w-2xl">
          Founded in 2015, Main Channel Brewing Company got its start as a local microbrewery with humble roots, and has
          since grown to two locations in Guntersville and Albertville, Alabama. Owners Clay Smith and Bobby & Vickie
          Satterfield believe in engaging with our local community, and strive to provide a unique experience for all
          who visit our taprooms. Our goal is to produce high-quality and affordable beer for the growing craft beer
          community.
        </Text>
      </Section>
    </>
  );
}
