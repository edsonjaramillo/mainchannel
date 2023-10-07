import Image from 'next/image';
import Link from 'next/link';

import { buttonVariants } from 'ui/src/Button';
import { Heading } from 'ui/src/Heading';
import { Text } from 'ui/src/Text';
import { cn } from 'ui/src/lib/tw';
import { CallToAction } from 'utils/src/types';

type CTAProps = {
  cta: CallToAction;
};

export default function CTA({ cta }: CTAProps) {
  const leftCl = cn('flex flex-col justify-center gap-4 px-8 md:ml-auto md:w-11/12 lg:max-w-[37rem]');
  const primaryBtn = buttonVariants({ size: 'large', width: 'fit' });
  const secondaryBtn = cn(buttonVariants({ size: 'large', variant: 'none', width: 'fit' }), 'group/btn gap-1');

  return (
    <div className="grid h-[85vh] grid-cols-1 md:grid-cols-2">
      <div className={leftCl}>
        <Heading as="h1">{cta.header}</Heading>
        <Text as="p" size="5" textColor="gray">
          {cta.subheader}
        </Text>
        <div className="flex gap-2">
          <Link className={primaryBtn} href="/ontap">
            Our Beers
          </Link>
          <Link className={secondaryBtn} href="/events">
            Events
            <span className="group-hover/btn:animate-left-to-right group-focus/btn:animate-left-to-right">-&gt;</span>
          </Link>
        </div>
      </div>
      <div className="relative min-h-[15rem] overflow-hidden">
        <Image src={cta.image.url} alt={cta.image.alt} fill className="object-cover" priority />
      </div>
    </div>
  );
}
