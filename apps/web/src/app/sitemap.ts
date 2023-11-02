import { MetadataRoute } from 'next';

import { CMSClient } from 'utils/src/cms/CMSClient';

import { navigationLinks } from '../resources/links';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const URL = 'https://mainchannelbrewing.com';
  const now = new Date();
  const coreLinks = navigationLinks.map((link) => ({
    url: `${URL}${link.href}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  })) as MetadataRoute.Sitemap;

  const otherLinks = ['donations', 'sitemap'].map((link) => ({
    url: `${URL}/${link}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  })) as MetadataRoute.Sitemap;

  const beers = await new CMSClient().getBeers();
  const beerLinks = beers.map((beer) => ({
    url: `${URL}/ontap/${beer.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  })) as MetadataRoute.Sitemap;

  return [...coreLinks, ...beerLinks, ...otherLinks];
}
