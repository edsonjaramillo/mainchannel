import { ContactPageForm, ContactListItem, ContactIcon, HeadOpenGraph } from '@/components/index';

const ContactPage = () => (
  <>
    <HeadOpenGraph
      title='Contact Us'
      description='fsdnfoksdffdsfdsfsdfsdfsdfdsnfkjdsn'
      image='https://media.graphassets.com/COyXb8wS7eWHZSdoZdzg'
      alt='Main Channel Brewing logo'
    />
    <div className='contact'>
      <div className='contact__grid responsive-width'>
        <div className='contact__information'>
          <ContactIcon />
          <h1 className='contact__header'>Lets Talk!</h1>
        </div>
        <div className='contact__form'>
          <ContactPageForm />
        </div>
      </div>
    </div>
  </>
);

export default ContactPage;
