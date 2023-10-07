export type NavigationLinks = {
  name: string;
  href: string;
  icon?: React.ReactNode;
};

export const navigationLinks: NavigationLinks[] = [
  {
    name: 'On Tap',
    href: '/ontap',
  },
  {
    name: 'Locations',
    href: '/locations',
  },
  {
    name: 'Events',
    href: '/events',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
];
