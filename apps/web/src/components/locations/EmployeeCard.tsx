'use client';

import Image from 'next/image';

import { Heading } from 'ui/src/Heading';
import { Text } from 'ui/src/Text';
import { Employee } from 'utils/src/types';

import { useModal } from '../../context/ModalContext';
import { ModalImage } from '../shared/Modal';

type EmployeeCardProps = { employee: Employee };

export default function EmployeeCard({ employee }: EmployeeCardProps) {
  const { openModal } = useModal();

  return (
    <div className="group/employee cursor-pointer" onClick={() => openModal(<ModalImage image={employee.image} />)}>
      <div className="aspect-h-3 aspect-w-2 relative overflow-hidden rounded">
        <Image
          src={employee.image.url}
          alt={employee.name}
          className="object-cover transition-all duration-base group-hover/employee:scale-110"
          fill
          placeholder="blur"
          blurDataURL={employee.image.blurhash}
        />
      </div>
      <div className="py-2">
        <Heading as="h3" size="4" className="font-semibold">
          {employee.name}
        </Heading>
        <Text as="span" textColor="gray" size="2">
          {employee.position}
        </Text>
      </div>
    </div>
  );
}
