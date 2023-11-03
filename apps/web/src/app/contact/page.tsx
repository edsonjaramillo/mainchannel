import type { Metadata } from 'next';

import { Anchor } from 'ui/src/Anchor';
import { Heading } from 'ui/src/Heading';
import { Responsive } from 'ui/src/Responsive';
import { SEO } from 'utils/src/metadata/SEO';

import ContactForm from '../../components/forms/ContactForm';
import ContactItemList from '../../components/forms/ContactItemList';
import FormIcon from '../../components/forms/FormIcon';

export async function generateMetadata(): Promise<Metadata> {
  return SEO.metadata({
    title: 'Contact Us',
    description: 'Contact us for more information about our beers and services.',
    robots: 'index, follow',
    canonical: '/contact',
  });
}

export default function ContactPage() {
  return (
    <Responsive>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-0">
        <div>
          <div className="mx-auto flex w-11/12 flex-col gap-8 py-12 md:w-9/12">
            <FormIcon />
            <Heading as="h1">Contact Us</Heading>
            <ContactItemList.Group>
              <ContactItemList.Item>Have a question about our selection of craft beers? Ask away!</ContactItemList.Item>
              <ContactItemList.Item>
                We appreciate your feedback! Share your brewery visit experiences or suggestions for improvement.
              </ContactItemList.Item>
              <ContactItemList.Item>
                Looking to host a private party or corporate event at our brewery? Contact us for details on space
                availability and packages.
              </ContactItemList.Item>
              <ContactItemList.Item>
                We believe in giving back. For charity events and donations, fill out the form{' '}
                <Anchor href="/donations" as="Next" inline>
                  here.
                </Anchor>
              </ContactItemList.Item>
            </ContactItemList.Group>
          </div>
        </div>
        <div className="bg-grayscale-100 py-12">
          <ContactForm />
        </div>
      </div>
    </Responsive>
  );
}
