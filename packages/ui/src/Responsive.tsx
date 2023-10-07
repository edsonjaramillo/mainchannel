import { type VariantProps, cva } from 'class-variance-authority';

import { cn } from './lib/tw';

export const responsiveVariants = cva('m-auto', {
  variants: {
    size: { standard: 'w-11/12 max-w-[74rem]', half: 'w-1/2 max-w-[70rem]' },
  },
  defaultVariants: { size: 'standard' },
});

interface ResponsiveProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof responsiveVariants> {}

export const Responsive: React.FC<ResponsiveProps> = ({ className, size, children, ...props }) => {
  const classes = cn(responsiveVariants({ size }), className);
  return (
    <div {...props} className={classes}>
      {children}
    </div>
  );
};
