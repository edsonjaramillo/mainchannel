import { Heading } from 'ui/src/Heading';
import { Responsive } from 'ui/src/Responsive';

import Logo from './Logo';

type PageHeaderProps = {
  text: string;
};

export default function PageHeader({ text }: PageHeaderProps) {
  return (
    <header className="overflow-hidden py-24">
      <Responsive className="relative">
        <Heading as="h1" size="9">
          {text}
        </Heading>
        <Logo className="absolute right-[15%] top-1/2 block rotate-[25deg] scale-[8] opacity-40" as="icon" />
      </Responsive>
    </header>
  );
}
