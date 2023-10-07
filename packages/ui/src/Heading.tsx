import { type VariantProps, cva } from 'class-variance-authority';

import { cn } from './lib/tw';

type asHeadings = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';

export const headingVariants = cva('font-bold', {
  variants: {
    size: {
      '9': 'text-5xl leading-9 tracking-9',
      '8': 'text-4xl leading-8 tracking-8',
      '7': 'text-3xl leading-7 tracking-7',
      '6': 'text-2xl leading-6 tracking-6',
      '5': 'text-xl leading-5 tracking-5',
      '4': 'text-lg leading-4 tracking-4',
      '3': 'text-base leading-3 tracking-3',
      '2': 'text-sm leading-2 tracking-2',
      '1': 'text-xs leading-1 tracking-1',
    },
    textColor: {
      standard: 'text-grayscale-800',
      gray: 'text-grayscale-neutral-light-accessible',
      inverted: 'text-grayscale-50',
      none: null,
    },
    align: { left: 'text-left', center: 'text-center', right: 'text-right' },
  },
  defaultVariants: { size: '8', textColor: 'standard', align: 'left' },
});

interface HeadingProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof headingVariants> {
  as: asHeadings;
}

export const Heading: React.FC<HeadingProps> = ({ className, as, textColor, align, size, children, ...props }) => {
  const classes = cn(headingVariants({ size, textColor, align }), className);
  switch (as) {
    case 'h1':
      return (
        <h1 {...props} className={classes}>
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2 {...props} className={classes}>
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3 {...props} className={classes}>
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h4 {...props} className={classes}>
          {children}
        </h4>
      );
    case 'h5':
      return (
        <h5 {...props} className={classes}>
          {children}
        </h5>
      );
    case 'h6':
      return (
        <h6 {...props} className={classes}>
          {children}
        </h6>
      );
    case 'span':
      return (
        <span {...props} className={classes}>
          {children}
        </span>
      );
    default:
      break;
  }
};
