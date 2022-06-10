import { ContactPageForm, ContactListItem, ContactIcon } from '@/components/index';

const ContactPage = () => (
  <div className='contact'>
    <div className='contact__grid responsive-width'>
      <div className='contact__information'>
        <ContactIcon />
        <h1 className='contact__header'>Lets Talk!</h1>
        <ul className='contact__list'>
          <ContactListItem message='Feel free to ask us about our events!' />
          <ContactListItem message='Lorem ipsum dolor sit, amet consectetur.' />
          <ContactListItem message='Lorem ipsum dolor sit, amet consectetur.' />
        </ul>
      </div>
      <div className='contact__form'>
        <ContactPageForm />
      </div>
    </div>
  </div>
);

export default ContactPage;
