import type { Metadata } from 'next';

import { ENV } from '../env';

type RequiredMetadata = {
  title: string;
  description: string;
  robots: 'index, follow' | 'noindex, nofollow';
  canonical: string;
} & Metadata;

export class SEO {
  static async metadata(opts: RequiredMetadata): Promise<Metadata> {
    return {
      title: `${opts.title} | ${ENV.NAME}`,
      description: opts.description,
      robots: opts.robots,
      alternates: { canonical: opts.canonical },
    };
  }
}
