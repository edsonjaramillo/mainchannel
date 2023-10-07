import { type VariantProps, cva } from 'class-variance-authority';

import { cn } from '../lib/tw';

export const formVariants = cva('accent-primary', {
  variants: { layout: { standard: 'grid grid-cols-1 gap-form' } },
  defaultVariants: { layout: 'standard' },
});

interface FormRootProps extends React.HTMLAttributes<HTMLFormElement>, VariantProps<typeof formVariants> {}

const Root: React.FC<FormRootProps> = ({ layout, className, children, ...props }) => {
  const classes = cn(formVariants({ layout }), className);
  return (
    <form {...props} className={classes}>
      {children}
    </form>
  );
};

interface FormGroupProps extends React.HTMLAttributes<HTMLDivElement> {}

const Group: React.FC<FormGroupProps> = ({ children, ...props }) => {
  return (
    <div className="flex flex-col gap-2" {...props}>
      {children}
    </div>
  );
};
export default { Root, Group };
