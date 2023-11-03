import { MetadataRoute } from 'next';

import { ENV } from 'utils/src/env';

export default function robots(): MetadataRoute.Robots {
  const url = ENV.URL;
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${url}/sitemap.xml`,
  };
}
