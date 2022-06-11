/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://mainchannelbeer.com',
  generateRobotsTxt: true,
  changefreq: 'daily',
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
