/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://mainchannelbrewing.com',
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
