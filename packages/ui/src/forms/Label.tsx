import { FieldError } from 'react-hook-form';

import { textVariants } from '../Text';
import { cn } from '../lib/tw';

interface LabelProps extends React.HTMLAttributes<HTMLLabelElement> {
  htmlFor?: string;
  error?: FieldError;
  required?: boolean;
}

export const Label: React.FC<LabelProps> = ({
  htmlFor,
  error,
  required,
  className,
  children,
  ...props
}: LabelProps) => {
  const textClasses = textVariants({
    size: '2',
    align: 'left',
    textColor: 'gray',
  });
  const classes = cn(textClasses, className);
  return (
    <label htmlFor={htmlFor} {...props} className={classes}>
      {children}
      {required && (
        <>
          <span aria-hidden="true" className="ml-1 text-alert-error">
            *
          </span>
          <span className="sr-only">(required)</span>
        </>
      )}
    </label>
  );
};
