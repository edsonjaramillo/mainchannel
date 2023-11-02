import { email, maxLength, minLength, object, regex, string } from 'valibot';

export const contactFormSchema = object({
  name: string([minLength(2, 'Must be at least 2 characters long.')]),
  email: string([email('Must be an email.')]),
  phone: string([minLength(10, 'Must be a 10 digit phone number.'), maxLength(10, 'Must be a 10 digit phone number.')]),
  message: string([minLength(2, 'Must be at least 2 characters long.')]),
});

export const donationFormSchema = object({
  name: string([minLength(2, 'Must be at least 2 characters long.')]),
  email: string([email('Must be an email.')]),
  phone: string([minLength(10, 'Must be a 10 digit phone number.'), maxLength(10, 'Must be a 10 digit phone number.')]),
  location: string([minLength(2, 'Must be at least 2 characters long.')]),
  date: string([regex(/^\d{4}-\d{2}-\d{2}$/, 'Must be a date.')]),
  abcnumber: string([regex(/^\d+$/, 'Must be a number.')]),
  taxid: string([regex(/^\d{9}$/, 'Must be a 9 digit number.')]),
  message: string([minLength(2, 'Must be at least 2 characters long.')]),
});
