import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { toastNotification, ToastType } from '@/lib/toastNotification';
import { CustomInput } from '@/components/index';
import { TextFieldInput, FormGroupLabel } from '@/components/index';
import { validationStandard, validationPhone, validationEmail } from '@/lib/forms/validators';
import { Formatter } from '@/lib/Formatter';

const ContactPageForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data: any) => {
    const formatter = new Formatter();

    const templateParameters = {
      name: data.name,
      organization: data.organization,
      destination: data.destination,
      email: data.email,
      phone: formatter.formatPhoneNumber(data.phone),
      choice: data.choice,
      message: data.message,
    };

    const { status } = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
      templateParameters,
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string
    );

    const { name } = data;
    // if (status == 200) {
    //   toastNotification(
    //     ToastType.SUCCESS,
    //     `Thank you ${name} for your message. We will get back to you as soon as possible.`,
    //     5000
    //   );
    //   reset();
    // } else {
    //   toastNotification(ToastType.ERROR, 'Error occured. Try again.');
    // }
  };

  const onError = () => toastNotification(ToastType.ERROR, 'Check input requirements.');
  return (
    <form className='form' onSubmit={handleSubmit(onSubmit, onError)}>
      <div className='form__grid'>
        <FormGroupLabel name='name' label='Name' errors={errors['name']}>
          <CustomInput
            id='name'
            name='name'
            type='text'
            placeholder='Jane Doe'
            register={register}
            validation={validationStandard}
          />
        </FormGroupLabel>
        <FormGroupLabel name='email' label='Email' errors={errors['email']}>
          <CustomInput
            id='email'
            name='email'
            type='text'
            placeholder='janedoe@me.com'
            register={register}
            validation={validationEmail}
          />
        </FormGroupLabel>
        <FormGroupLabel name='phone' label='Phone Number' errors={errors['phone']}>
          <CustomInput
            id='phone'
            name='phone'
            type='text'
            placeholder='0123456789'
            register={register}
            validation={validationPhone}
          />
        </FormGroupLabel>
        <FormGroupLabel name='message' label='Message' errors={errors['message']}>
          <TextFieldInput
            id='message'
            name='message'
            placeholder='Enter Message'
            rows={10}
            register={register}
            validation={validationStandard}
          />
        </FormGroupLabel>
        <button type='submit' className='form__button'>
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactPageForm;
