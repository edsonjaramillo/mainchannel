'use client';

import Image from 'next/image';
import React, { useState } from 'react';

import { Heading } from 'ui/src/Heading';
import { Text, textVariants } from 'ui/src/Text';
import { cn } from 'ui/src/lib/tw';
import { Format } from 'utils/src/format/Format';
import type { Product } from 'utils/src/types';

type BeerOverviewProps = {
  beer: Product;
};

type ChoiceProps = React.HTMLAttributes<HTMLButtonElement> & {
  label: string;
  price: number | null;
  isActive?: boolean;
};

type State = {
  price: number | null;
  type: 'single' | '4-pack' | '6-pack' | 'keg';
};

export default function BeerOverview({ beer }: BeerOverviewProps) {
  const [state, setState] = useState<State>({ price: beer.prices.singlePrice, type: 'single' });

  function Choice({ label, price, isActive, ...props }: ChoiceProps) {
    const notAvailable = price === null;

    const choiceClass = cn(
      'flex flex-col gap-1 rounded p-4 outline',
      isActive
        ? 'bg-primary text-grayscale-50 outline-2 outline-offset-2 outline-primary'
        : 'outline-1 outline-grayscale-500',
      notAvailable && 'cursor-not-allowed opacity-50',
    );

    const textChoice = cn(isActive && 'text-grayscale-50');

    return (
      <button type="button" className={choiceClass} disabled={notAvailable} {...props}>
        <Text as="span" className={textChoice}>
          {label}
        </Text>
        <Text as="span" textColor="gray" size="2" className={textChoice}>
          {price ? Format.fmtCurrency(price) : 'N/A'}
        </Text>
      </button>
    );
  }

  const textVariant = cn(textVariants({ size: '3', textColor: 'gray' }));

  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-8">
      <div className="aspect-h-3 aspect-w-2 relative overflow-hidden rounded">
        <Image
          src={beer.image.url}
          alt=""
          fill
          className="object-cover"
          placeholder="blur"
          priority
          blurDataURL={beer.image.blurDataUrl}
        />
      </div>
      <div className="flex flex-col gap-4">
        <Heading as="h1">{beer.name}</Heading>
        <Text as="span" size="5" className="font-medium">
          {state.price ? Format.fmtCurrency(state.price) : 'N/A'}
        </Text>
        <Text as="p" textColor="gray">
          {beer.description}
        </Text>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          <Choice
            label="Single"
            price={beer.prices.singlePrice}
            isActive={state.type === 'single'}
            onClick={() => setState({ price: beer.prices.singlePrice, type: 'single' })}
          />
          <Choice
            label="4 Pack"
            price={beer.prices.fourPackPrice}
            isActive={state.type === '4-pack'}
            onClick={() => setState({ price: beer.prices.fourPackPrice, type: '4-pack' })}
          />
          <Choice
            label="6 Pack"
            price={beer.prices.sixPackPrice}
            isActive={state.type === '6-pack'}
            onClick={() => setState({ price: beer.prices.sixPackPrice, type: '6-pack' })}
          />
          <Choice
            label="1/6 Keg"
            price={beer.prices.kegPrice}
            isActive={state.type === 'keg'}
            onClick={() => setState({ price: beer.prices.kegPrice, type: 'keg' })}
          />
        </div>
        <hr className="my-4 text-grayscale-400" />
        <div>
          <Heading as="h2" size="3" className="mb-2">
            More Information
          </Heading>
          <ul className="flex list-inside list-disc flex-col gap-2">
            <li className={textVariant}>ABV: {beer.details.abv}%</li>
            <li className={textVariant}>IBU: {beer.details.ibu}</li>
            <li className={textVariant}>Flavors: {beer.details.flavors}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
