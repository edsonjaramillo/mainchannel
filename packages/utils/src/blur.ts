import { getPlaiceholder } from 'plaiceholder';

import { CMSClient } from './cms/CMSClient';
import type { CMSImage } from './types';

export class Blur {
  static async process(image: CMSImage): Promise<CMSImage> {
    const result = await fetch(image.url);
    const buffer = (await result.arrayBuffer()) as Buffer;
    const blur = (await getPlaiceholder(buffer)).base64;

    const cms = new CMSClient();
    const { blurDataUrl } = await cms.updateBlurDataURL(image.id, blur);
    await cms.publishAsset(image.id);

    return { ...image, blurDataUrl };
  }
}
