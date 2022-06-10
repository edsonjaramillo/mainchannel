/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://laundrybasketplus.com',
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
