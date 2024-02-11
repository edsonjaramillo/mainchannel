'use client';

import { valibotResolver } from '@hookform/resolvers/valibot';
import { type FieldErrors, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { type Output } from 'valibot';

import { Button } from 'ui/src/Button';
import { Notification } from 'ui/src/Notification';
import Form from 'ui/src/forms/Form';
import { Label } from 'ui/src/forms/Label';
import Textfield from 'ui/src/forms/Textfield';
import type { APIResponse } from 'utils/src/API';

import { contactFormSchema } from '../../validatiors/schemas';

export default function ContactForm() {
  type formSchema = Output<typeof contactFormSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<formSchema>({ resolver: valibotResolver(contactFormSchema) });

  async function onSubmit<T extends formSchema>(formData: T) {
    toast.custom((t) => <Notification t={t} variant="loading" text="Sending message..." />, {
      id: 'contact-form',
    });

    const res = await fetch('/api/form/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      }),
    });

    const data = (await res.json()) as APIResponse;

    if (data.status !== 'success') {
      toast.custom((t) => <Notification t={t} variant="error" text={data.message} />, {
        id: 'contact-form',
      });
      return;
    }

    toast.custom((t) => <Notification t={t} variant="success" text={data.message} />, {
      id: 'contact-form',
    });

    reset();
  }

  function onError(_: FieldErrors<formSchema>) {
    toast.custom((t) => <Notification t={t} variant="error" text="Check form requirements." />, {
      id: 'contact-form',
    });
  }
  return (
    <>
      <Form.Root onSubmit={handleSubmit(onSubmit, onError)} className="mx-auto w-11/12 md:w-9/12">
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
        <Button type="submit" className="ml-auto" size="large">
          Send Message
        </Button>
      </Form.Root>
    </>
  );
}
