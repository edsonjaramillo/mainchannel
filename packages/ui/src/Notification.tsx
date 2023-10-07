import { Transition } from '@headlessui/react';
import { type VariantProps, cva } from 'class-variance-authority';
import { type Toast, toast } from 'react-hot-toast';

import { Heading } from './Heading';
import { Text } from './Text';
import { Error, Info, Loading, Success, Warning } from './icons/ToastIcons';
import { cn } from './lib/tw';

export const notificationVariants = cva(
  'relative w-64 scale-100 rounded p-4 opacity-100 shadow transition-all duration-base',
  {
    variants: {
      variant: {
        success: 'bg-alert-success text-alert-success-accent',
        error: 'bg-alert-error text-alert-error-accent',
        warning: 'bg-alert-warning text-alert-warning-accent',
        info: 'bg-alert-info text-alert-info-accent',
        loading: 'bg-alert-info text-alert-info-accent',
      },
    },
  },
);

interface NotificationProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof notificationVariants> {
  t: Toast;
  icon?: AlertType;
  header?: string;
  text?: string;
}

export const Notification: React.FC<NotificationProps> = ({
  t,
  header,
  icon,
  text,
  variant,
  className,
  children,
  ...props
}) => {
  const classes = cn(notificationVariants({ variant }), className);

  return (
    <Transition
      show={t.visible}
      enter="transition-opacity duration-base"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-base"
      leaveFrom="opacity-100"
      leaveTo="opacity-0">
      <div role="alert" className={classes} {...props}>
        <div className="flex gap-2">
          <div>{IconSelector(variant!)}</div>
          <div className="my-auto">
            {header && (
              <Heading as="span" size="2" textColor="none">
                {header}
              </Heading>
            )}
            {text && (
              <Text as="p" size="2" textColor="none">
                {text}
              </Text>
            )}
            {children}
          </div>
        </div>
        <div className="absolute right-2 top-2">
          <button type="button" onClick={() => t.id && toast.dismiss(t.id)}>
            <span className="sr-only">Close Notification</span> <CloseIcon />
          </button>
        </div>
      </div>
    </Transition>
  );
};

type AlertType = 'success' | 'error' | 'warning' | 'info' | 'loading';

function IconSelector(alertType: AlertType) {
  switch (alertType) {
    case 'success':
      return <Success />;
    case 'error':
      return <Error />;
    case 'warning':
      return <Warning />;
    case 'info':
      return <Info />;
    case 'loading':
      return <Loading />;
    default:
      break;
  }
}

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path
        fillRule="evenodd"
        d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}
