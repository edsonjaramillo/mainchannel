import { email, maxLength, minLength, object, string } from 'valibot';

export const contactFormSchema = object({
  name: string([minLength(2, 'Must be at least 2 characters long.')]),
  email: string([email('Must be an email.')]),
  phone: string([minLength(10, 'Must be a 10 digit phone number.'), maxLength(10, 'Must be a 10 digit phone number.')]),
  message: string([minLength(2, 'Must be at least 2 characters long.')]),
  response: string(),
});
