import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { useState } from 'react';

interface PageLink {
  slug: string;
  name: string;
}

export const navbarLinks = [
  {
    slug: '/ontap',
    name: 'On Tap',
  },
  {
    slug: '/locations',
    name: 'Locations',
  },
  {
    slug: '/events',
    name: 'Events',
  },
  // {
  //   slug: '/about',
  //   name: 'About',
  // },
  {
    slug: '/contact',
    name: 'Contact',
  },
];

const navVariants: Variants = {
  open: {
    translateX: '100%',
    transition: {
      ease: 'linear',
      duration: 0.15,
    },
  },
  close: {
    translateX: '0%',
    transition: {
      ease: 'linear',
      duration: 0.15,
    },
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const Hamburger = () => (
    <button
      type='button'
      className='navbar__hamburger'
      aria-label='open menu button'
      onClick={() => setIsOpen(true)}>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d='M0 0h24v24H0V0z' fill='none' />
        <path d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' />
      </svg>
    </button>
  );

  const ExitIcon = () => (
    <button
      type='button'
      className='navbar__exit'
      aria-label='exit menu button'
      onClick={() => setIsOpen(false)}>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d='M0 0h24v24H0V0z' fill='none' />
        <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z' />
      </svg>
    </button>
  );

  const PageLink = ({ slug, name }: PageLink) => (
    <Link href={slug}>
      <a className='navbar__link' onClick={() => setIsOpen(false)}>
        {name}
      </a>
    </Link>
  );

  return (
    <header>
      <a href='#main-content' className='navbar__skipcontent'>
        Skip To Content
      </a>
      <nav className='navbar'>
        <div className='navbar__content responsive-width'>
          <Link href='/'>
            <a title='Homepage' className='navbar__logo'>
              Logo
            </a>
          </Link>
          <motion.div
            initial='close'
            variants={navVariants}
            animate={isOpen ? 'open' : 'close'}
            className='navbar__links'>
            {navbarLinks.map((link) => (
              <PageLink key={link.name} slug={link.slug} name={link.name} />
            ))}
            <ExitIcon />
          </motion.div>
          <Hamburger />
        </div>
      </nav>
      <div aria-hidden='true' className='navbar__spacer' />
    </header>
  );
};

export default Navbar;
