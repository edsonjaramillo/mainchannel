import { type VariantProps, cva } from 'class-variance-authority';

import { cn } from './lib/tw';

type asText = 'span' | 'p' | 'div';

export const textVariants = cva('', {
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
      none: null,
    },
    align: { left: 'text-left', center: 'text-center', right: 'text-right' },
  },
  defaultVariants: { size: '3', textColor: 'standard', align: 'left' },
});

interface TextProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof textVariants> {
  as: asText;
}

export const Text: React.FC<TextProps> = ({ className, as, textColor, align, size, children, ...props }) => {
  const classes = cn(textVariants({ size, textColor, align }), className);
  switch (as) {
    case 'span':
      return (
        <span {...props} className={classes}>
          {children}
        </span>
      );
    case 'p':
      return (
        <p {...props} className={classes}>
          {children}
        </p>
      );
    case 'div':
      return (
        <div {...props} className={classes}>
          {children}
        </div>
      );
    default:
      break;
  }
};
