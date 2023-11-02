import type { Metadata } from 'next';

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
              <ContactItemList.Item>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, repudiandae?
              </ContactItemList.Item>
              <ContactItemList.Item>Lorem ipsum dolor sit amet consectetur.</ContactItemList.Item>
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
