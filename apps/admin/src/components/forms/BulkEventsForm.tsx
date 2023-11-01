'use client';

import { valibotResolver } from '@hookform/resolvers/valibot';
import dayjs from 'dayjs';
import { type FieldErrors, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { type Output } from 'valibot';

import { Button } from 'ui/src/Button';
import { Heading } from 'ui/src/Heading';
import { Notification } from 'ui/src/Notification';
import Form from 'ui/src/forms/Form';
import { Label } from 'ui/src/forms/Label';
import Radio from 'ui/src/forms/Radio';
import Textfield from 'ui/src/forms/Textfield';
import { Store } from 'utils/src/types';

import { addEventSchema } from '../../validatiors/schemas';

type BulkEventsFormProps = {
  stores: Store[];
};

export default function BulkEventsForm({ stores }: BulkEventsFormProps) {
  type formSchema = Output<typeof addEventSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formSchema>({ resolver: valibotResolver(addEventSchema) });

  async function onSubmit<T extends formSchema>({ startTime: sT, endTime: eT, storeId }: T) {
    toast.custom((t) => <Notification t={t} variant="loading" text="Creating events..." />, {
      id: 'bulk-events-form',
    });

    const storeIdSplit = storeId.split(' - ').at(1);
    const startTime = new Date(sT).toISOString();
    const endTime = new Date(eT).toISOString();

    const res = await fetch('/api/createEvent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'Trivia Night', startTime, endTime, storeId: storeIdSplit }),
    });

    const data = await res.json();

    if (data.status === 'error') {
      toast.custom((t) => <Notification t={t} variant="error" text="Error creating events." />, {
        id: 'bulk-events-form',
      });
      return;
    }

    toast.custom((t) => <Notification t={t} variant="success" text="Events created successfully." />, {
      id: 'bulk-events-form',
    });
  }

  function onError(formData: FieldErrors<formSchema>) {
    toast.custom((t) => <Notification t={t} variant="error" text="Check form requirements." />, {
      id: 'bulk-events-form',
    });
  }

  const todayDefault = dayjs().set('hour', 18).set('minute', 30).format('YYYY-MM-DDTHH:mm');
  const nextWeekDefault = dayjs().add(1, 'week').set('hour', 20).set('minute', 0).format('YYYY-MM-DDTHH:mm');

  return (
    <>
      <Heading as="h1" align="center" className="mb-8">
        Bulk Trivia Night Events
      </Heading>
      <Form.Root onSubmit={handleSubmit(onSubmit, onError)} className="mx-auto max-w-sm">
        <Form.Group>
          <Label htmlFor="startTime" error={errors.startTime} required>
            Start Date
          </Label>
          <Textfield.Input
            id="email"
            name="startTime"
            defaultValue={todayDefault}
            type="datetime-local"
            error={errors.startTime}
            {...register('startTime')}
          />
        </Form.Group>
        <Form.Group>
          <Label htmlFor="endTime" error={errors.endTime} required>
            End Date
          </Label>
          <Textfield.Input
            id="endTime"
            name="endTime"
            type="datetime-local"
            error={errors.endTime}
            defaultValue={nextWeekDefault}
            {...register('endTime')}
          />
        </Form.Group>

        <Form.Group>
          <Label htmlFor="storeId" required>
            Store
          </Label>
          <Radio.Group>
            {stores.map((store, i) => (
              <Radio.Button
                defaultChecked={i === 0}
                key={store.id}
                id={`storeId-${store.id}`}
                name="storeId"
                value={`${store.name} - ${store.id}`}
                {...register('storeId')}
              />
            ))}
          </Radio.Group>
        </Form.Group>
        <Button type="submit" className="ml-auto" size="large">
          Create Events
        </Button>
      </Form.Root>
    </>
  );
}
