import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { toastNotification, ToastType } from '@/lib/toastNotification';
import { CustomInput } from '@/components/index';
import { TextFieldInput, FormGroupLabel } from '@/components/index';
import { validationStandard, validationPhone } from '@/lib/forms/validators';
import { validationABC, validation501C3 } from '@/lib/forms/validators';
import { validationEmail, validationDate } from '@/lib/forms/validators';
import { Formatter } from '@/lib/Formatter';
import { DateManager } from '@/lib/DateManager';

const DonationPageForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data: any) => {
    const { name } = data;
    const formatter = new Formatter();

    const templateParameters = {
      name: data.name,
      email: data.email,
      phone: formatter.formatPhoneNumber(data.phone),
      location: data.location,
      date: formatter.formatDateTime(data.date),
      abcnumber: data.abcnumber,
      taxid: formatter.formatEIN(data.taxid),
      message: data.message,
    };

    const { status } = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
      process.env.NEXT_PUBLIC_EMAILJS_DONATIONS_TEMPLATE_ID as string,
      templateParameters,
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string
    );

    if (status == 200) {
      toastNotification(
        ToastType.SUCCESS,
        `Thank you ${name} for your message. We will get back to you as soon as possible.`,
        5000
      );
      reset();
    } else {
      toastNotification(ToastType.ERROR, 'Error occured. Try again.');
    }
  };

  const onError = () => toastNotification(ToastType.ERROR, 'Check input requirements.');

  const minDate = new DateManager().dateAdjuster(14);

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
            placeholder='2561234567'
            register={register}
            validation={validationPhone}
          />
        </FormGroupLabel>
        <FormGroupLabel name='location' label='Event Location' errors={errors['location']}>
          <CustomInput
            id='location'
            name='location'
            type='text'
            placeholder='Ex. Main Channel Brewery in Guntersville, AL'
            register={register}
            validation={validationStandard}
          />
        </FormGroupLabel>
        <FormGroupLabel name='date' label='Date of Event' errors={errors['date']}>
          <CustomInput
            id='date'
            name='date'
            type='datetime-local'
            min={minDate}
            register={register}
            validation={validationDate}
          />
        </FormGroupLabel>
        <FormGroupLabel name='abcnumber' label='ABC License' errors={errors['abcnumber']}>
          <CustomInput
            id='abcnumber'
            name='abcnumber'
            type='text'
            placeholder='0000000000'
            validation={validationABC}
            register={register}
          />
        </FormGroupLabel>
        <FormGroupLabel name='taxid' label='501(c)3 EIN' errors={errors['taxid']}>
          <CustomInput
            id='taxid'
            name='taxid'
            type='text'
            placeholder='0000000000'
            validation={validation501C3}
            register={register}
          />
        </FormGroupLabel>
        <FormGroupLabel name='message' label='Message' errors={errors['message']}>
          <TextFieldInput
            id='message'
            name='message'
            register={register}
            placeholder='Enter any extra information you would like us to know about.'
            rows={10}
          />
        </FormGroupLabel>
        <button type='submit' className='form__button'>
          Submit Application
        </button>
      </div>
    </form>
  );
};

export default DonationPageForm;
