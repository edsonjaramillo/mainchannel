import { DonationPageForm, ContactListItem, ContactIcon } from '@/components/index';

const DonationsPage = () => (
  <div className='contact'>
    <div className='contact__grid responsive-width'>
      <div className='contact__information'>
        <ContactIcon />
        <h1 className='contact__header'>Donations Form</h1>
        <ul className='contact__list'>
          <ContactListItem message='Your group, organization, event MUST be located in the State of Alabama.' />
          <ContactListItem message='You MUST provide a current 501(c)3 designation to be considered.' />
          <ContactListItem message='All requests MUST be submitted at least 2 weeks prior to the date of event.' />
          <ContactListItem message='We respectfully reserve the right to decline donation requests at our discretion.' />
        </ul>
      </div>
      <div className='contact__form'>
        <DonationPageForm />
      </div>
    </div>
  </div>
);

export default DonationsPage;
