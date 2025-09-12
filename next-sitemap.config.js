/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://example.com',
  generateRobotsTxt: true, // (optional)
  // optional
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://example.com/sitemap.xml', // Add your sitemap URL here
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  exclude: [
    '/api/*', // Exclude API routes
    '/admin/*', // Exclude admin pages if any
  ],
  alternateRefs: [
    {
      href: 'https://example.com/en',
      hreflang: 'en',
    },
    {
      href: 'https://example.com/id',
      hreflang: 'id',
    },
  ],
  // Default transformation function
  transform: async (config, path) => {
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
  additionalPaths: async config => [
    // Add any additional paths that are not automatically detected
  ],
}
