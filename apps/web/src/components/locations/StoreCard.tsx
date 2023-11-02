'use client';

import Image from 'next/image';

import { Heading } from 'ui/src/Heading';
import { Text, textVariants } from 'ui/src/Text';
import { cn } from 'ui/src/lib/tw';
import { Format } from 'utils/src/format/Format';
import type { Store, StoreImages } from 'utils/src/types';

import { useModal } from '../../context/ModalContext';
import { ModalImage } from '../shared/Modal';

type StoreProps = {
  store: Store;
};

export default function StoreCard({ store }: StoreProps) {
  const phoneCls = textVariants({ textColor: 'gray' });

  return (
    <>
      <section id={store.slug} className="grid grid-cols-1 gap-6 py-16 md:grid-cols-10">
        <div className="flex flex-col gap-2 md:col-span-7 lg:col-span-8">
          <Heading as="h2">{store.name}</Heading>
          <Text as="p" textColor="gray">
            {store.description}
          </Text>
          <ImageGallery storeImages={store.storeImages} />
        </div>
        <div className="flex flex-col gap-4 md:col-span-3 lg:col-span-2">
          <AsideSection>
            <Heading as="h3" size="7">
              Address
            </Heading>
            <Text as="span" textColor="gray">
              {store.address.street},
              <br />
              {store.address.city}, {store.address.state} {store.address.zipcode}
            </Text>
          </AsideSection>
          <AsideSection>
            <Heading as="h3" size="7">
              Hours
            </Heading>
            <Hours day="Sunday" hours={store.hours.sundayHours} />
            <Hours day="Monday" hours={store.hours.mondayHours} />
            <Hours day="Tuesday" hours={store.hours.tuesdayHours} />
            <Hours day="Wednesday" hours={store.hours.wednesdayHours} />
            <Hours day="Thursday" hours={store.hours.thursdayHours} />
            <Hours day="Friday" hours={store.hours.fridayHours} />
            <Hours day="Saturday" hours={store.hours.saturdayHours} />
          </AsideSection>
          <AsideSection>
            <Heading as="h3" size="7">
              Contact
            </Heading>
            <a href={`tel:${store.phoneNumber}`} className={cn(phoneCls, 'underline-offset-4 hover:underline')}>
              {Format.fmtPhoneNumber(store.phoneNumber)}
            </a>
          </AsideSection>
        </div>
      </section>
    </>
  );
}

type AsideSectionProps = {
  children: React.ReactNode;
};

function AsideSection({ children }: AsideSectionProps) {
  return <div className="flex flex-col gap-2">{children}</div>;
}

type HoursProps = {
  day: string;
  hours: string;
};

function Hours({ day, hours }: HoursProps) {
  return (
    <div className="flex flex-col">
      <Heading as="span" size="3" className="flex flex-col">
        {day}
      </Heading>
      <Text as="span" size="3" textColor="gray">
        {hours}
      </Text>
    </div>
  );
}

type StoreImageProps = {
  storeImages: StoreImages;
};

function ImageGallery({ storeImages }: StoreImageProps) {
  const { openModal } = useModal();

  return (
    <div className="mt-2 grid grid-cols-1 gap-4 md:mt-6 md:grid-cols-4 md:grid-rows-2">
      <div className="aspect-h-1 aspect-w-2 relative overflow-hidden rounded md:col-span-2">
        <Image
          src={storeImages.firstImage.url}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="cursor-pointer object-cover"
          placeholder="blur"
          blurDataURL={storeImages.firstImage.blurhash}
          onClick={() => openModal(<ModalImage image={storeImages.firstImage} />)}
        />
      </div>
      <div className="aspect-h-1 aspect-w-2 relative overflow-hidden rounded md:aspect-w-1 md:col-span-2 md:row-span-2">
        <Image
          src={storeImages.secondImage.url}
          alt=""
          fill
          className="cursor-pointer object-cover"
          blurDataURL={storeImages.secondImage.blurhash}
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onClick={() => openModal(<ModalImage image={storeImages.secondImage} />)}
        />
      </div>
      <div className="aspect-h-1 aspect-w-2 relative overflow-hidden rounded md:aspect-w-1">
        <Image
          src={storeImages.thirdImage.url}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="cursor-pointer object-cover"
          blurDataURL={storeImages.thirdImage.blurhash}
          placeholder="blur"
          onClick={() => openModal(<ModalImage image={storeImages.thirdImage} />)}
        />
      </div>
      <div className="aspect-h-1 aspect-w-2 relative overflow-hidden rounded md:aspect-w-1">
        <Image
          src={storeImages.fourthImage.url}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="cursor-pointer object-cover"
          blurDataURL={storeImages.fourthImage.blurhash}
          placeholder="blur"
          onClick={() => openModal(<ModalImage image={storeImages.fourthImage} />)}
        />
      </div>
    </div>
  );
}
