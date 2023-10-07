'use client';

import React, { forwardRef } from 'react';

import { Label } from './Label';

interface RadioProps extends React.HTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  value: string;
}

const RadioButton = forwardRef<HTMLInputElement, RadioProps>(({ id, name, value, children, ...rest }, ref) => {
  return (
    <div className="flex gap-2">
      <input type="radio" ref={ref} id={id} name={name} value={value} {...rest} />
      <Label htmlFor={id}>{value}</Label>
    </div>
  );
});

type RadioGroupProps = React.HTMLAttributes<HTMLDivElement>;

function RadioGroup({ children, ...rest }: RadioGroupProps) {
  return (
    <div className="flex flex-col gap-3" {...rest}>
      {children}
    </div>
  );
}

export default { Button: RadioButton, Group: RadioGroup };
