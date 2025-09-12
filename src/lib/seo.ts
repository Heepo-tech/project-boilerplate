import { DefaultSeoProps } from 'next-seo'

const config: DefaultSeoProps = {
  title: 'Next.js Landing Page Boilerplate',
  description:
    'A modern, comprehensive Next.js boilerplate for building high-performance landing pages with TypeScript, Tailwind CSS, and best practices.',
  canonical: process.env.NEXT_PUBLIC_APP_URL || 'https://your-domain.com',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_APP_URL || 'https://your-domain.com',
    siteName: 'Next.js Landing Page Boilerplate',
    title: 'Next.js Landing Page Boilerplate',
    description:
      'A modern, comprehensive Next.js boilerplate for building high-performance landing pages with TypeScript, Tailwind CSS, and best practices.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Next.js Landing Page Boilerplate',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    handle: '@yourusername',
    site: '@yourusername',
    cardType: 'summary_large_image',
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'theme-color',
      content: '#000000',
    },
    {
      httpEquiv: 'x-ua-compatible',
      content: 'IE=edge',
    },
  ],
}

export default config
