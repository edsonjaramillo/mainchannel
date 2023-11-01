import { object, string } from 'valibot';

export const addEventSchema = object({
  startTime: string(),
  endTime: string(),
  storeId: string(),
});
