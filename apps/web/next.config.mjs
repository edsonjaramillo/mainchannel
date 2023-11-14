import withPlaiceholder from '@plaiceholder/next';

// import withBundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['ui', 'utils'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.graphassets.com',
      }
    ]
  }
};

// export default withBundleAnalyzer(nextConfig)

export default withPlaiceholder(nextConfig);
