import Link from 'next/link';
import { navbarLinks } from '@/components/shared/Navbar';
import { FacebookIcon, InstagramIcon } from '@/components/shared/FootrerSocialIcons';
import { UntappdIcon, YelpIcon } from '@/components/shared/FootrerSocialIcons';
import { Logo } from '@/components/index';

const Footer = () => (
  <footer className='footer'>
    <div className='footer__linksgrid responsive-width'>
      <FooterSection header='Navigation'>
        {navbarLinks.map((link) => (
          <InternalFooterLink key={link.name} href={link.slug} label={link.name} />
        ))}
      </FooterSection>
      <FooterSection header='Legal'>
        <InternalFooterLink href='/privacy' label='Privacy Policy' />
        <InternalFooterLink href='/terms' label='Terms & Conditions' />
        <InternalFooterLink href='/sitemap' label='Sitemap' />
      </FooterSection>
      <FooterSection header='Locations'>
        <InternalFooterLink href='/locations/#guntersville' label='Guntersville' />
        <InternalFooterLink href='/locations/#albertville' label='Albertville' />
      </FooterSection>
      <FooterSection header='Resources'>
        <InternalFooterLink href='/donations' label='Donations' />
      </FooterSection>
    </div>
    <div className='footer__bottomgrid responsive-width'>
      <div className='footer__sociallinks'>
        <FacebookIcon />
        <InstagramIcon />
        <YelpIcon />
        <UntappdIcon />
      </div>
      <Link href='/'>
        <a className='footer__logo'>
          <Logo />
        </a>
      </Link>
      <span className='footer__copyright'>&copy; {new Date().getFullYear()}</span>
    </div>
  </footer>
);

interface FooterSectionProps {
  header: string;
  children?: React.ReactNode;
}

const FooterSection = ({ header, children }: FooterSectionProps) => (
  <div className='footer__section'>
    <span className='footer__header'>{header}</span>
    {children}
  </div>
);

interface FooterLinkProps {
  href: string;
  label: string;
}

const InternalFooterLink = ({ href, label }: FooterLinkProps) => (
  <Link href={href}>
    <a className='footer__link'>{label}</a>
  </Link>
);

const ExternalFooterLink = ({ href, label }: FooterLinkProps) => (
  <a
    rel='noopener nofollow noreferrer external'
    target='_blank'
    className='footer__link'
    href={href}>
    {label}
  </a>
);

export default Footer;
