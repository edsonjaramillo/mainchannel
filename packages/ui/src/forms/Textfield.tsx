'use client';

import { type VariantProps, cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import { FieldError } from 'react-hook-form';

import { Text } from '../Text';
import { cn } from '../lib/tw';

export const inputVariants = cva(
  'bg-transparent appearance-none rounded border border-grayscale-500 bg-grayscale-50 pb-[1px] pt-[0.5px] text-grayscale-neutral-light-accessible',
  {
    variants: {
      sizes: {
        small: 'h-6 gap-1 px-2 pl-1 text-xs',
        medium: 'h-8 gap-2 px-3 pl-2 text-sm',
        large: 'h-10 gap-3 px-4 pl-3 text-base',
      },
    },
    defaultVariants: { sizes: 'large' },
  },
);

interface InputProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  id: string;
  name: string;
  error?: FieldError;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ sizes, error, className, children, ...props }, ref) => {
  const classes = cn(inputVariants({ sizes }), error && 'border-alert-error', className);
  return (
    <>
      <input ref={ref} {...props} className={classes} />
      {error && (
        <Text as="span" size="1" className="mt-1 text-alert-error duration-base" role="alert">
          {error.message}
        </Text>
      )}
    </>
  );
});

interface TextareaProps
  extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>,
    VariantProps<typeof inputVariants> {
  id: string;
  name: string;
  error?: FieldError;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ sizes, error, className, children, ...props }, ref) => {
    const classes = cn(inputVariants({ sizes }), error && 'border-alert-error', 'h-auto py-2', className);
    return (
      <>
        <textarea ref={ref} {...props} className={classes} />
        {error && (
          <Text as="span" size="1" className="mt-1 text-alert-error duration-base" role="alert">
            {error.message}
          </Text>
        )}
      </>
    );
  },
);

export default { Input, TextArea };
