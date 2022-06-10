/* eslint-disable */
import Image from 'next/image';
import { ImageProps } from 'next/image';
import { useState } from 'react';

const BlurImage = (imageProps: ImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <Image
      {...imageProps}
      className={`blurimage__transition ${
        isLoaded == true ? 'blurimage--noblur' : 'blurimage--blur'
      }`}
      onLoadingComplete={() => setIsLoaded(true)}
    />
  );
};

export default BlurImage;
