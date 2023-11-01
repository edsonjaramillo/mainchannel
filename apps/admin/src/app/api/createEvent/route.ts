import daysjs from 'dayjs';

import { CMSClient, type createEventVariables } from 'utils/src/cms/CMSClient';

export async function POST(request: Request) {
  const body = (await request.json()) as createEventVariables;

  let startingDay = daysjs(body.startTime);
  let endingDay = daysjs(body.endTime);

  if (startingDay.isAfter(endingDay)) {
    return Response.json({ status: 'error', message: 'Starting day cannot be after ending day' });
  }

  let mustContinue = true;
  const cms = new CMSClient();
  while (mustContinue) {
    // is ending days is before or equal to starting day
    if (endingDay.isBefore(startingDay)) {
      mustContinue = false;
      break;
    }

    await cms.createEvent({
      title: body.title,
      startTime: startingDay.toISOString(),
      endTime: startingDay.add(1, 'hours').add(30, 'minutes').toISOString(),
      storeId: body.storeId,
    });

    startingDay = startingDay.add(7, 'day');
  }

  return Response.json({ status: 'success', message: 'Events created successfully' });
}
