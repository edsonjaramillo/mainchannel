import { Text } from 'ui/src/Text';

interface ContactListItemProps {
  children?: React.ReactNode;
}

function Item({ children }: ContactListItemProps) {
  return (
    <li className="flex gap-4">
      <CheckMarkIcon />
      <Text as="span" textColor="gray" className="self-start">
        {children}
      </Text>
    </li>
  );
}

function CheckMarkIcon() {
  return (
    <svg
      className="w-5 flex-shrink-0 self-start fill-alert-success"
      viewBox="0 0 20 21"
      xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10.8379" r="10" />
      <path
        d="M8.6054 11.5656L5.67447 8.81559L4 10.3878L8.6054 14.7089L16.3856 7.409L14.7112 5.83789L8.6054 11.5656Z"
        className="fill-grayscale-50"
      />
    </svg>
  );
}

type ContactListItemGroupProps = {
  children: React.ReactNode;
};

function Group({ children }: ContactListItemGroupProps) {
  return <ul className="flex w-full flex-col gap-3">{children}</ul>;
}

export default { Item, Group };
