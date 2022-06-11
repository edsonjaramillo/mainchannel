import { RegisterOptions } from 'react-hook-form';

export const validationStandard: RegisterOptions = {
  required: { value: true, message: 'Required' },
};

export const validationEmail: RegisterOptions = {
  required: { value: true, message: 'Required' },
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    message: 'Invalid email address',
  },
};

export const validationPhone: RegisterOptions = {
  required: { value: true, message: 'Required' },
  pattern: {
    value: /^[0-9]+$/,
    message: 'Only numbers allowed.',
  },
  minLength: { value: 10, message: 'Not enough numbers. Must be 10 numbers.' },
  maxLength: { value: 10, message: 'Too many numbers. Must be 10 numbers.' },
};

export const validationABC: RegisterOptions = {
  required: { value: true, message: 'Required' },
  pattern: {
    value: /^[0-9]+$/,
    message: 'Only numbers allowed.',
  },
};

export const validation501C3: RegisterOptions = {
  required: { value: true, message: 'Required' },
  pattern: {
    value: /^[0-9]+$/,
    message: 'Only numbers allowed.',
  },
  minLength: { value: 9, message: 'Not enough numbers. Must be 9 numbers.' },
  maxLength: { value: 9, message: 'Too many numbers. Must be 9 numbers.' },
};

export const validationDate: RegisterOptions = {
  required: { value: true, message: 'Required' },
};
