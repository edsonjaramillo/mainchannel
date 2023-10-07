'use client';

import Link from 'next/link';

import { buttonVariants } from 'ui/src/Button';
import { Responsive } from 'ui/src/Responsive';
import { textVariants } from 'ui/src/Text';
import { cn } from 'ui/src/lib/tw';

import { navigationLinks } from '../../resources/links';
import Logo from './Logo';

export default function DesktopNavigation() {
  return (
    <nav className="hidden h-14 w-full md:flex" aria-label="Desktop">
      <Responsive className="flex items-center justify-between">
        <Logo />
        <ul className="flex gap-5">
          {navigationLinks.map((link) => (
            <DesktopLink link={link} key={link.href} />
          ))}
        </ul>
      </Responsive>
    </nav>
  );
}

function DesktopLink({ link }) {
  const variant = textVariants({
    align: 'center',
    textColor: 'standard',
    size: '3',
  });
  const classes = cn(variant, 'transition-colors duration-base hover:text-grayscale-neutral-light-accessible');
  return (
    <li>
      <Link href={link.href} className={classes}>
        {link.name}
      </Link>
    </li>
  );
}

function Login() {
  const classes = buttonVariants({ size: 'medium', variant: 'primary' });
  return (
    <Link href="/login" className={classes}>
      Login
    </Link>
  );
}
