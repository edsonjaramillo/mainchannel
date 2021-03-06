import { DonationPageForm, ContactListItem, ContactIcon, HeadOpenGraph } from '@/components/index';

const DonationsPage = () => (
  <>
    <HeadOpenGraph
      title='Donations'
      description='Contact Main Channel Brewing Company for more information about our donations program.'
      image='https://media.graphassets.com/COyXb8wS7eWHZSdoZdzg'
      alt='Main Channel Brewing Company logo'
    />
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
            <ContactListItem custom>
              <span>
                After you submit your application send a photo copy of your ABC License and 501(c)3
                form to{' '}
                <a className='contact__link' href='mailto:mainchannelbeer@gmail.com?subject=Copies of 501(c)3 Tax Form and ABC License Form'>
                  mainchannelbeer@gmail.com
                </a>
              </span>
            </ContactListItem>
          </ul>
        </div>
        <div className='contact__form'>
          <DonationPageForm />
        </div>
      </div>
    </div>
  </>
);

export default DonationsPage;
