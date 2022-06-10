import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Formatter } from '@/lib/Formatter';
import { EventType } from '@/lib/graphcms/types';
import { ICal, MapLink, EventJSONLD } from '@/components/index';
import { AddressManager } from '@/lib/AddressManager';

const eventContentVariants: Variants = {
  hidden: {
    height: 0,
    marginTop: 0,
    transition: {
      duration: 0.35,
    },
  },
  visible: {
    height: 'fit-content',
    marginTop: '1rem',
    transition: {
      duration: 0.35,
    },
  },
};

const IconRotationVariants: Variants = {
  hidden: {
    rotate: 0,
    transition: {
      duration: 0,
    },
  },
  visible: {
    rotate: 90,
    transition: {
      duration: 0,
    },
  },
};

const Event = (event: EventType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onClick = () => setIsOpen(!isOpen);

  const formatter = new Formatter();
  const addressManager = new AddressManager();

  const eventLocation = addressManager.getEventLocation(event);
  const googleMapsURL = addressManager.getGoogleMapsURL(event);
  const appleMapsURL = addressManager.getAppleMapsURL(event);

  const OpenIcon = () => (
    <motion.button
      variants={IconRotationVariants}
      initial='hidden'
      animate={isOpen ? 'visible' : 'hidden'}
      className='event__icon'
      type='button'
      onClick={onClick}>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' height='100%' width='100%'>
        <path d='M17.7 34.9Q17.3 34.4 17.275 33.8Q17.25 33.2 17.7 32.75L26.5 23.95L17.65 15.1Q17.25 14.7 17.275 14.025Q17.3 13.35 17.7 12.95Q18.2 12.45 18.775 12.475Q19.35 12.5 19.8 12.95L29.75 22.9Q30 23.15 30.1 23.4Q30.2 23.65 30.2 23.95Q30.2 24.25 30.1 24.5Q30 24.75 29.75 25L19.85 34.9Q19.4 35.35 18.8 35.325Q18.2 35.3 17.7 34.9Z' />
      </svg>
    </motion.button>
  );

  return (
    <article className='event' onClick={onClick} id={event.id}>
      <EventJSONLD {...event} />
      <div className='event__grid'>
        <div className='event__section event--left'>
          <strong>{formatter.getEventDate(event.startTime)}</strong>
          <span>{formatter.getEventTime(event.startTime)}</span>
        </div>
        <div className='event__section event--middle'>
          <h2 className='event__title'>{event.title}</h2>
          <span>{eventLocation}</span>
        </div>
        <OpenIcon />
      </div>
      <motion.div
        variants={eventContentVariants}
        initial='hidden'
        animate={isOpen ? 'visible' : 'hidden'}
        className='event__content'>
        <p className='event__description'>{event.description}</p>
        <div className='event__links'>
          <ICal {...event} />
          <MapLink title={event.title} href={googleMapsURL} name='Google Maps' />
          <MapLink title={event.title} href={appleMapsURL} name='Apple Maps' />
        </div>
      </motion.div>
    </article>
  );
};

export default Event;
