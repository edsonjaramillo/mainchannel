interface ContactListItemProps {
  message?: string;
  custom?: boolean;
  children?: React.ReactNode;
}

const ContactListItem = ({ message, custom, children }: ContactListItemProps) => {
  if (custom) {
    return (
      <li className='contact__listitem'>
        <CheckMarkIcon />
        {children}
      </li>
    );
  } else {
    return (
      <li className='contact__listitem'>
        <CheckMarkIcon />
        <span>{message}</span>
      </li>
    );
  }
};

const CheckMarkIcon = () => (
  <div className='contact__checkmark'>
    <svg
      width='100%'
      height='100%'
      viewBox='0 0 20 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <circle cx='10' cy='10.8379' r='10' fill='#07bc0c'></circle>
      <path
        d='M8.6054 11.5656L5.67447 8.81559L4 10.3878L8.6054 14.7089L16.3856 7.409L14.7112 5.83789L8.6054 11.5656Z'
        fill='white'></path>
    </svg>
  </div>
);

export default ContactListItem;
