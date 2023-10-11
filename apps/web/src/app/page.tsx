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
  const cms = new CMSClient();
  const cta = await cms.getCTA();
  const ourStory = await cms.getOurStory();

  return (
    <>
      <CTA cta={cta} />
      <Section headerAs="h2" header="About Us">
        <Text as="p" size="5" textColor="gray" align="center" className="mx-auto max-w-2xl">
          {ourStory.description}
        </Text>
      </Section>
    </>
  );
}
