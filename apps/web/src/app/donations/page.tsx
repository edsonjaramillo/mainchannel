import type { Metadata } from 'next';

import { Anchor } from 'ui/src/Anchor';
import { Heading } from 'ui/src/Heading';
import { Responsive } from 'ui/src/Responsive';

import ContactItemList from '../../components/forms/ContactItemList';
import DonationsForm from '../../components/forms/DonationsForm';
import FormIcon from '../../components/forms/FormIcon';

export async function generateMetadata(): Promise<Metadata> {
  return;
}

export default function DonationsPage() {
  return (
    <Responsive>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-0">
        <div>
          <div className="mx-auto flex w-11/12 flex-col gap-8 py-12 md:w-9/12">
            <FormIcon />
            <Heading as="h1">Donations Form</Heading>
            <ContactItemList.Group>
              <ContactItemList.Item>
                Your group, organization, event MUST be located in the State of Alabama.
              </ContactItemList.Item>
              <ContactItemList.Item>
                You MUST provide a current 501(c)3 designation to be considered.
              </ContactItemList.Item>
              <ContactItemList.Item>
                All requests MUST be submitted at least 2 weeks prior to the date of event.
              </ContactItemList.Item>
              <ContactItemList.Item>
                We respectfully reserve the right to decline donation requests at our discretion.
              </ContactItemList.Item>
              <ContactItemList.Item>
                After you submit your application send a photo copy of your ABC License and 501(c)3 form to{' '}
                <Anchor as="external" inline={true} href="mailto:mainchannelbeer@gmail.com">
                  mainchannelbeer@gmail.com
                </Anchor>
              </ContactItemList.Item>
            </ContactItemList.Group>
          </div>
        </div>
        <div className="bg-grayscale-100 py-12">
          <DonationsForm />
        </div>
      </div>
    </Responsive>
  );
}
