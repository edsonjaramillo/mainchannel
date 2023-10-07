import { Metadata } from 'next';

import { ENV } from '../env';

type GenerateMetadata = {
  title: string;
  description: string;
  robots?: 'index, follow' | 'noindex, nofollow';
  canonical?: string;
} & Metadata;

export class SEO {
  static async generateMetadata(opts: GenerateMetadata): Promise<Metadata> {
    return {
      title: `${opts.title} | ${ENV.DOMAIN}`,
      description: opts.description,
      robots: opts.robots ? opts.robots : 'noindex, nofollow',
      alternates: { canonical: opts.canonical },
    };
  }
}
