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
import { Format } from 'utils/src/format/Format';

import { donationFormSchema } from '../../validatiors/schemas';

export default function DonationForm() {
  type formSchema = Output<typeof donationFormSchema>;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<formSchema>({ resolver: valibotResolver(donationFormSchema) });

  async function onSubmit<T extends formSchema>(formData: T) {
    toast.custom((t) => <Notification t={t} variant="loading" text="Submitting form..." />, {
      id: 'donation-form',
    });

    const res = await fetch('/api/form/donation', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        location: formData.location,
        date: Format.formatDateTime(formData.date),
        abcnumber: formData.abcnumber,
        taxid: Format.formatEIN(formData.taxid),
        phone: Format.fmtPhoneNumber(formData.phone),
        message: formData.message,
      }),
    });

    const data = (await res.json()) as APIResponse;
    if (data.status !== 'success') {
      toast.custom((t) => <Notification t={t} variant="error" text={data.message} />, {
        id: 'donation-form',
      });
      return;
    }

    toast.custom((t) => <Notification t={t} variant="success" text={data.message} />, {
      id: 'donation-form',
    });
  }

  function onError(_: FieldErrors<formSchema>) {
    toast.custom((t) => <Notification t={t} variant="error" text="Check form requirements." />, {
      id: 'donation-form',
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
          <Label htmlFor="date" error={errors.date} required>
            Date of Event
          </Label>
          <Textfield.Input id="date" name="date" type="date" error={errors.date} {...register('date')} />
        </Form.Group>
        <Form.Group>
          <Label htmlFor="abcnumber" error={errors.abcnumber} required>
            ABC Number
          </Label>
          <Textfield.Input
            id="abcnumber"
            name="abcnumber"
            type="text"
            inputMode="numeric"
            error={errors.abcnumber}
            {...register('abcnumber')}
          />
        </Form.Group>
        <Form.Group>
          <Label htmlFor="taxid" error={errors.taxid} required>
            501(c)3 EIN
          </Label>
          <Textfield.Input
            id="taxid"
            name="taxid"
            type="text"
            inputMode="numeric"
            error={errors.taxid}
            {...register('taxid')}
          />
        </Form.Group>
        <Form.Group>
          <Label htmlFor="message" error={errors.message} required>
            Message
          </Label>
          <Textfield.TextArea id="message" name="message" error={errors.message} rows={10} {...register('message')} />
        </Form.Group>
        <Button type="submit" className="ml-auto" size="large">
          Sumbit Application
        </Button>
      </Form.Root>
    </>
  );
}
