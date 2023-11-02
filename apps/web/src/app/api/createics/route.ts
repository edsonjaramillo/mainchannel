import { createEvent } from 'ics';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const title = searchParams.get('title');
  const startTime = new Date(searchParams.get('start').replace('%2B', '+'));
  const endTime = new Date(searchParams.get('end').replace('%2B', '+'));
  const address = searchParams.get('address');

  try {
    const event = createEvent({
      uid: id,
      title,
      start: [
        startTime.getFullYear(),
        startTime.getMonth() + 1,
        startTime.getDate(),
        startTime.getHours(),
        startTime.getMinutes(),
      ],
      end: [endTime.getFullYear(), endTime.getMonth() + 1, endTime.getDate(), endTime.getHours(), endTime.getMinutes()],
      location: address,
      url: `https://www.mainchannelbrewing.com/events#${id}`,
      status: 'CONFIRMED',
    });

    return new Response(event.value, {
      headers: {
        'Content-Type': 'text/calendar; charset=utf-8',
        'Content-Disposition': `attachment; filename="${id}.ics"`,
      },
    });
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
}
