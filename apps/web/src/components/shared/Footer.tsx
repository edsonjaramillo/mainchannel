import { Anchor } from 'ui/src/Anchor';
import { Heading } from 'ui/src/Heading';
import { Responsive } from 'ui/src/Responsive';
import { SocialIcons } from 'ui/src/icons/SocialIcons';

import { navigationLinks } from '../../resources/links';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-grayscale-100 py-9">
      <Responsive>
        <Logo className="mb-6 block" />
        <nav aria-label="Footer" className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          <FooterSection header="Navigation">
            {navigationLinks.map((link) => (
              <FooterLink key={link.href} href={link.href}>
                {link.name}
              </FooterLink>
            ))}
          </FooterSection>
          <FooterSection header="Company">
            <FooterLink href="#">Example 5</FooterLink> <FooterLink href="#">Example 6</FooterLink>
          </FooterSection>
          <FooterSection header="Legal">
            <FooterLink href="#">Example 3</FooterLink> <FooterLink href="#">Example 4</FooterLink>
          </FooterSection>
          <FooterSection header="Resources">
            <FooterLink href="/donations">Donations</FooterLink>
            <FooterLink href="https://ord.spoton.com/61081e4324b4c402ff9088fc#" external>
              Order Online
            </FooterLink>
          </FooterSection>
        </nav>
        <div className="mt-16 flex flex-col items-center justify-between gap-6 xs:flex-row">
          <SocialIcons />
        </div>
      </Responsive>
    </footer>
  );
}

type FooterSectionProps = React.HTMLAttributes<HTMLDivElement> & {
  header: string;
  children?: React.ReactNode;
};

function FooterSection({ header, children }: FooterSectionProps) {
  return (
    <div>
      <Heading as="span" size="3" textColor="standard" className="mb-6 block font-medium">
        {header}
      </Heading>
      <div className="flex flex-col gap-4">{children}</div>
    </div>
  );
}

type FooterLinkProps = React.HTMLAttributes<HTMLAnchorElement> & {
  href: string;
  external?: boolean;
  children?: React.ReactNode;
};
function FooterLink({ href, external, children }: FooterLinkProps) {
  if (external) {
    return (
      <Anchor as="external" href={href} textColor="gray" className="w-fit text-sm">
        {children}
      </Anchor>
    );
  }

  return (
    <Anchor as="Next" href={href} textColor="gray" className="w-fit text-sm">
      {children}
    </Anchor>
  );
}
