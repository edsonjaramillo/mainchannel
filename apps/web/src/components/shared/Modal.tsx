'use client';

import Image from 'next/image';

import { cn } from 'ui/src/lib/tw';
import { CMSImage } from 'utils/src/types';

import { useModal } from '../../context/ModalContext';

export function Modal() {
  const { modalIsOpen, component } = useModal();

  const modalClass = cn(
    'pointer-events-none fixed inset-0 left-0 top-0 z-50 flex h-screen w-screen items-center justify-center drop-shadow-2xl backdrop-blur-sm transition-opacity duration-base',
    modalIsOpen ? 'pointer-events-auto opacity-100' : 'opacity-0',
  );

  return (
    <div className={modalClass} aria-hidden={!modalIsOpen}>
      <div className="relative mx-auto min-w-[20rem] max-w-[90%] rounded border border-grayscale-400 bg-grayscale-100 p-6 lg:max-w-xl">
        <ExitModal />
        {component}
      </div>
    </div>
  );
}

function ExitModal() {
  const { closeModal } = useModal();
  return (
    <button id="modal-exit" onClick={() => closeModal()} className="" type="button">
      <span className="sr-only">Close Modal</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="absolute right-0 top-0 mr-6 mt-3 block h-6 w-6 text-grayscale-950">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  );
}

type ModalImageProps = {
  image: CMSImage;
};

export function ModalImage({ image }: ModalImageProps) {
  return (
    <Image
      src={image.url}
      alt={image.alt}
      width={image.width}
      height={image.height}
      blurDataURL={image.blurhash}
      placeholder="blur"
    />
  );
}
