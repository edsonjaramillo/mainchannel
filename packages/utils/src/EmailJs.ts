import { AnyObject } from './API';
import { ENV } from './env';

type EmailJSResponse = {
  status: number;
  text: string;
};

export class EmailJS {
  static async sendEmail(template_id: string, body: AnyObject): Promise<EmailJSResponse> {
    try {
      await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: ENV.EMAILJS_SERVICE_ID,
          template_id: template_id,
          user_id: ENV.EMAILJS_PUBLIC_KEY,
          template_params: body,
          accessToken: ENV.EMAILJS_PRIVATE_KEY,
        }),
      });
      return { status: 200, text: 'Message sent successfully' };
    } catch (error) {
      return { status: 500, text: 'Error occured' };
    }
  }
}
