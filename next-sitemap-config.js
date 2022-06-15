/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://www.mainchannelbrewing.com',
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
