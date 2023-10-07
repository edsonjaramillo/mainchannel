import { getPlaiceholder } from 'plaiceholder';

import { ENV } from './env';
import type { CMSImage, StoreImages } from './types';

const defaultBlur =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAD2EAAA9hAHVrK90AAAAPUlEQVR4nGN4fv7o8prMZQ05b2+cY0hNCnd3NOXTUAlMT2YIiQpU1VdnEBIxCAth+P//V2JummFY2JefXwBGGhXh8vKlHAAAAABJRU5ErkJggg==';

export class Blur {
  static async process(image: CMSImage): Promise<CMSImage> {
    if (ENV.NODE_ENV !== 'production') {
      return { ...image, blurhash: defaultBlur };
    }

    const result = await fetch(image.url);
    const buffer = (await result.arrayBuffer()) as Buffer;
    const blur = (await getPlaiceholder(buffer, { size: 4 })).base64;

    return { ...image, blurhash: blur };
  }

  static async storeGallery({ firstImage, secondImage, thirdImage, fourthImage }: StoreImages): Promise<StoreImages> {
    if (ENV.NODE_ENV !== 'production') {
      return {
        firstImage: { ...firstImage, blurhash: defaultBlur },
        secondImage: { ...secondImage, blurhash: defaultBlur },
        thirdImage: { ...thirdImage, blurhash: defaultBlur },
        fourthImage: { ...fourthImage, blurhash: defaultBlur },
      };
    }

    const firstImageResult = await fetch(firstImage.url);
    const secondImageResult = await fetch(secondImage.url);
    const thirdImageResult = await fetch(thirdImage.url);
    const fourthImageResult = await fetch(fourthImage.url);

    const firstImageBuffer = (await firstImageResult.arrayBuffer()) as Buffer;
    const secondImageBuffer = (await secondImageResult.arrayBuffer()) as Buffer;
    const thirdImageBuffer = (await thirdImageResult.arrayBuffer()) as Buffer;
    const fourthImageBuffer = (await fourthImageResult.arrayBuffer()) as Buffer;

    const firstBlur = (await getPlaiceholder(firstImageBuffer)).base64;
    const secondBlur = (await getPlaiceholder(secondImageBuffer)).base64;
    const thirdBlur = (await getPlaiceholder(thirdImageBuffer)).base64;
    const fourthBlur = (await getPlaiceholder(fourthImageBuffer)).base64;

    return {
      firstImage: { ...firstImage, blurhash: firstBlur },
      secondImage: { ...secondImage, blurhash: secondBlur },
      thirdImage: { ...thirdImage, blurhash: thirdBlur },
      fourthImage: { ...fourthImage, blurhash: fourthBlur },
    };
  }
}
