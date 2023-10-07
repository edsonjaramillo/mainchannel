import { type VariantProps, cva } from 'class-variance-authority';
import Link from 'next/link';

import { cn } from './lib/tw';

type asComponent = 'Next' | 'external';

export const anchorVariants = cva('transition-colors duration-base hover:text-grayscale-900', {
  variants: {
    textColor: {
      standard: 'text-grayscale-900',
      gray: 'text-grayscale-neutral-light-accessible',
      inverted: 'text-grayscale-50',
    },
  },
  defaultVariants: { textColor: 'standard' },
});

interface AnchorProps extends React.HTMLAttributes<HTMLAnchorElement>, VariantProps<typeof anchorVariants> {
  href: string;
  as: asComponent;
}

export const Anchor: React.FC<AnchorProps> = ({ className, as, href, textColor, children, ...props }) => {
  const classes = cn(anchorVariants({ textColor }), className);
  switch (as) {
    case 'Next':
      return (
        <Link href={href} className={classes} {...props}>
          {children}
        </Link>
      );
    case 'external':
      return (
        <a href={href} className={classes} rel="noopener nofollow noreferrer external" {...props} target="_blank">
          {children}
        </a>
      );
    default:
      break;
  }
};
