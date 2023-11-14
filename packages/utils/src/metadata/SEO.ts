import type { Metadata } from 'next';

import { ENV } from '../env';

type RequiredMetadata = {
  title: string;
  description: string;
  robots: 'index, follow' | 'noindex, nofollow';
  canonical: string;
  openGraph?: Metadata['openGraph'];
} & Metadata;

function defaultOG(url: string): Metadata['openGraph'] {
  return {
    title: 'Main Channel Brewing Company',
    description: 'Main Channel Brewing Company Logo',
    images: {
      url: 'https://media.graphassets.com/COyXb8wS7eWHZSdoZdzg',
      alt: 'Main Channel Brewing Company Logo',
      width: 1200,
      height: 630,
    },
    type: 'website',
    siteName: 'Main Channel Brewing Company',
    emails: ['mainchannelbeer@gmail.com'],
    url,
    countryName: 'USA',
  };
}

export class SEO {
  static async metadata(opts: RequiredMetadata): Promise<Metadata> {
    const fullPath = `${ENV.URL}${opts.canonical}`;
    return {
      title: `${opts.title} | ${ENV.NAME}`,
      description: opts.description,
      robots: opts.robots,
      alternates: { canonical: fullPath },
      openGraph: opts.openGraph ? opts.openGraph : defaultOG(fullPath),
    };
  }

  static icons(url: string): Metadata['icons'] {
    return [
      {
        rel: 'icon',
        url: `${url}/favicon.ico`,
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        url: `${url}/apple-touch-icon.png`,
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: `${url}/favicon-32x32.png`,
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: `${url}/favicon-16x16.png`,
      },
      {
        rel: 'manifest',
        url: `${url}/site.webmanifest`,
        origin: url,
      },
      {
        rel: 'mask-icon',
        url: `${url}/safari-pinned-tab.svg`,
        color: '#123b2d',
      },
      {
        rel: 'shortcut icon',
        url: `${url}/favicon.ico`,
      },
    ];
  }
}
