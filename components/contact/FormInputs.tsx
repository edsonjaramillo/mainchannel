import { RegisterOptions, UseFormRegister, FieldValues } from 'react-hook-form';
import { motion } from 'framer-motion';
import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  register: UseFormRegister<FieldValues>;
  validation?: RegisterOptions;
}

export const CustomInput = ({ id, register, validation, ...other }: InputProps) => (
  <input className='form__input' id={id} {...other} {...register(id!, validation)} />
);

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  register: UseFormRegister<FieldValues>;
  validation?: RegisterOptions;
}

export const TextFieldInput = ({ id, register, validation, ...other }: TextAreaProps) => (
  <textarea
    className='form__input form--textarea'
    id={id}
    {...other}
    {...register(id!, validation)}
  />
);

interface RadioInputProps extends InputProps {
  value: string;
}

export const RadioInput = ({ id, value, register, validation }: RadioInputProps) => (
  <input
    id={`${id}-${value}`}
    type='radio'
    className='form__radioinput'
    value={value}
    {...register(id!, validation)}
  />
);

interface FormGroupLabelProps {
  name: string;
  label: string;
  errors: {
    [key: string]: string;
  };
  children?: React.ReactNode;
}

export const FormGroupLabel = ({ name, label, errors, children }: FormGroupLabelProps) => (
  <div className='form__inputgroup'>
    <label className='form__label' htmlFor={name}>
      {label}
      {errors && <ErrorMessage message={errors.message} />}
    </label>
    {children}
  </div>
);

interface ErrorMessageType {
  message: string;
}

export const ErrorMessage = ({ message }: ErrorMessageType) => (
  <motion.span
    role='alert'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.25 }}
    className='form__errormessage'>
    {message}
  </motion.span>
);
