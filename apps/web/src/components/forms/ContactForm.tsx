'use client';

import { valibotResolver } from '@hookform/resolvers/valibot';
import { type FieldErrors, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { type Output } from 'valibot';

import { Button } from 'ui/src/Button';
import { Notification } from 'ui/src/Notification';
import Form from 'ui/src/forms/Form';
import { Label } from 'ui/src/forms/Label';
import Radio from 'ui/src/forms/Radio';
import Textfield from 'ui/src/forms/Textfield';

import { contactFormSchema } from '../../validatiors/schemas';

export default function ContactForm() {
  type formSchema = Output<typeof contactFormSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formSchema>({ resolver: valibotResolver(contactFormSchema) });

  async function onSubmit<T extends formSchema>(formData: T) {
    toast.custom((t) => <Notification t={t} variant="loading" text="Sending message..." />, {
      id: 'contact-form',
    });

    await new Promise((resolve) => setTimeout(resolve, 750));
    toast.custom((t) => <Notification t={t} variant="success" text="Message sent successfully." />, {
      id: 'contact-form',
    });
  }

  function onError(formData: FieldErrors<formSchema>) {
    toast.custom((t) => <Notification t={t} variant="error" text="Check form requirements." />, {
      id: 'contact-form',
    });
  }
  return (
    <>
      <Form.Root onSubmit={handleSubmit(onSubmit, onError)} className="mx-auto max-w-sm">
        <Form.Group>
          <Label htmlFor="name" error={errors.name} required>
            Name
          </Label>
          <Textfield.Input
            id="name"
            name="name"
            type="text"
            inputMode="text"
            error={errors.name}
            {...register('name')}
          />
        </Form.Group>
        <Form.Group>
          <Label htmlFor="email" error={errors.email} required>
            Email
          </Label>
          <Textfield.Input
            id="email"
            name="email"
            type="text"
            inputMode="email"
            error={errors.email}
            {...register('email')}
          />
        </Form.Group>
        <Form.Group>
          <Label htmlFor="phone" error={errors.phone} required>
            Phone
          </Label>
          <Textfield.Input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            error={errors.phone}
            {...register('phone')}
          />
        </Form.Group>
        <Form.Group>
          <Label htmlFor="message" error={errors.message} required>
            Message
          </Label>
          <Textfield.TextArea id="message" name="message" error={errors.message} rows={10} {...register('message')} />
        </Form.Group>
        <Form.Group>
          <Label error={errors.response} required>
            Response Type
          </Label>
          <Radio.Group>
            <Radio.Button defaultChecked id="response-email" name="response" value="Email" {...register('response')} />
            <Radio.Button id="response-phone" name="response" value="Phone" {...register('response')} />
          </Radio.Group>
        </Form.Group>
        <Button type="submit" className="ml-auto" size="large">
          Send Message
        </Button>
      </Form.Root>
    </>
  );
}
