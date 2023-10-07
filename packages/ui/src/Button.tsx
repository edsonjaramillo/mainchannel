import { type VariantProps, cva } from 'class-variance-authority';

import { cn } from './lib/tw';

export const buttonVariants = cva(
  'flex shrink-0 appearance-none items-center justify-center break-words rounded align-top font-medium transition-all duration-base',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-grayscale-50 hover:bg-primary-600',
        secondary: 'bg-secondary text-grayscale-50 hover:bg-secondary-600',
        'outline-primary':
          'bg-transparent border border-primary text-primary hover:border-primary hover:bg-primary hover:text-grayscale-50',
        'outline-secondary':
          'bg-transparent border border-secondary text-secondary hover:border-secondary hover:bg-secondary hover:text-grayscale-50',
        error: 'hover:bg-error-600 bg-alert-error text-grayscale-50',
        none: 'bg-transparent text-grayscale-900 hover:bg-grayscale-300',
      },
      size: {
        small: 'h-6 gap-1 px-2 text-xs',
        medium: 'h-8 gap-2 px-3 text-sm',
        large: 'h-10 gap-3 px-4 text-base',
      },
      order: { reverse: 'flex-row-reverse' },
      width: { full: 'w-full', fit: 'w-fit' },
    },
    defaultVariants: { variant: 'primary', size: 'medium' },
  },
);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ className, width, variant, size, icon, order, children, ...props }) => {
  const classes = cn(buttonVariants({ variant, size, order, width }), className);
  return (
    <button {...props} className={classes}>
      {children} {icon && icon}
    </button>
  );
};
