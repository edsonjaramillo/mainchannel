import { Metadata } from 'next';

import { Section } from 'ui/src/Section';

import ContactForm from '../../components/forms/ContactForm';

export async function generateMetadata(): Promise<Metadata> {
  return;
}

export default function ContactPage() {
  return (
    <Section
      headerAs="h1"
      header="Form Example"
      subheader="This shows a combination of buttons, forms, validation, toast, headings and text from the design system UI components.">
      <ContactForm />
    </Section>
  );
}
