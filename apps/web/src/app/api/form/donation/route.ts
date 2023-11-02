import { API } from 'utils/src/API';
import { EmailJS } from 'utils/src/EmailJs';
import { ENV } from 'utils/src/env';

export async function POST(request: Request) {
  const requestBody = await request.json();

  const emailResponse = await EmailJS.sendEmail(ENV.EMAILJS_DONATION_FORM_TEMPLATE_ID, requestBody);

  if (emailResponse.status !== 200) {
    return Response.json(API.error(emailResponse.text));
  }

  return Response.json(API.success(null, 'Application submitted successfully.'));
}
