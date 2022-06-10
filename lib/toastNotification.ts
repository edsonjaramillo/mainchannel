import { toast, ToastOptions } from 'react-toastify';

export enum ToastType {
  SUCCESS,
  ERROR,
  INFO,
  WARNING,
}

/**
 * @summary Toast notification caller
 * @param {ToastType} type ToastType.SUCCESS, ToastType.ERROR, ToastType.INFO, ToastType.WARNING
 * @param {string} message
 * @param {number} ms default: 3000 (3 seconds)
 */
export const toastNotification = (type: ToastType, message: string, ms: number = 3000) => {
  const options: ToastOptions = {
    position: 'top-right',
    autoClose: ms,
  };

  switch (type) {
    case ToastType.INFO:
      toast.info(message, options);
      break;
    case ToastType.SUCCESS:
      toast.success(message, options);
      break;
    case ToastType.ERROR:
      toast.error(message, options);
      break;
    case ToastType.WARNING:
      toast.warn(message, options);
      break;
    default:
      break;
  }
};
