import Head from 'next/head';
import { useRouter } from 'next/router';

type RobotTagTypes = 'index, follow' | 'noindex, nofollow';
type OpenGraphTypes = 'article' | 'website' | 'profile' | 'book';

interface HeadOpenGraphProps {
  title: string;
  description: string;
  image: string;
  alt: string;
  ogType?: OpenGraphTypes;
  robots?: RobotTagTypes;
}

const HeadOpenGraph = ({
  title,
  description,
  image,
  alt,
  ogType = 'website',
  robots = 'index, follow',
}: HeadOpenGraphProps) => {
  const { asPath } = useRouter();
  const url = 'https://mainchannelbrewing.com';
  const cannonicalURL = url + asPath;
  const siteTitle = `${title} | Main Channel Brewing`;

  const websiteJson = {
    '@context': 'http://schema.org',
    '@type': 'WebSite',
    url: cannonicalURL,
    name: siteTitle,
    description: description,
    publisher: 'Main Channel Brewing',
  };

  return (
    <Head>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJson) }}
      />
      <title>{siteTitle}</title>
      <meta name='description' content={description} />
      <meta property='og:url' content={cannonicalURL} />
      <meta property='og:type' content={ogType} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />
      <meta property='og:image:alt' content={alt} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta property='twitter:domain' content={cannonicalURL} />
      <meta property='twitter:url' content={cannonicalURL} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />
      <meta name='twitter:image:alt' content={alt} />
      <link rel='canonical' href={cannonicalURL} />
      <meta name='theme-color' content='#123b2d' />
      <meta name='robots' content={robots} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='apple-touch-icon' sizes='57x57' href='/favicons/apple-icon-57x57.png' />
      <link rel='apple-touch-icon' sizes='60x60' href='/favicons/apple-icon-60x60.png' />
      <link rel='apple-touch-icon' sizes='72x72' href='/favicons/apple-icon-72x72.png' />
      <link rel='apple-touch-icon' sizes='76x76' href='/favicons/apple-icon-76x76.png' />
      <link rel='apple-touch-icon' sizes='114x114' href='/favicons/apple-icon-114x114.png' />
      <link rel='apple-touch-icon' sizes='120x120' href='/favicons/apple-icon-120x120.png' />
      <link rel='apple-touch-icon' sizes='144x144' href='/favicons/apple-icon-144x144.png' />
      <link rel='apple-touch-icon' sizes='152x152' href='/favicons/apple-icon-152x152.png' />
      <link rel='apple-touch-icon' sizes='180x180' href='/favicons/apple-icon-180x180.png' />
      <link rel='icon' type='image/png' sizes='192x192' href='/favicons/android-icon-192x192.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/favicons/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='96x96' href='/favicons/favicon-96x96.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/favicons/favicon-16x16.png' />
      <link rel='manifest' href='/favicons/manifest.json' />
      <meta name='msapplication-TileColor' content='#ffffff' />
      <meta name='msapplication-TileImage' content='/ms-icon-144x144.png' />
    </Head>
  );
};

export default HeadOpenGraph;
