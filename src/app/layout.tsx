import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import { Montserrat, Open_Sans } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: {
    default: 'Next.js Landing Page Boilerplate - Production Ready',
    template: '%s | Next.js Boilerplate',
  },
  description:
    'A comprehensive Next.js boilerplate specifically designed for building high-performance, modern landing pages with cutting-edge tools and best practices. Features Next.js 15, React 19, TypeScript, Tailwind CSS v4, and more.',
  keywords: [
    'Next.js',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Landing Page',
    'Boilerplate',
    'SEO',
    'Performance',
    'Framer Motion',
    'Radix UI',
    'Jest',
    'Playwright',
    'ESLint',
    'Prettier',
    'Husky',
    'Production Ready',
    'Modern Web Development',
    'Vercel',
  ],
  authors: [
    {
      name: 'Next.js Boilerplate Team',
      url: 'https://github.com/your-username/project-boilerplate',
    },
  ],
  creator: 'Next.js Boilerplate Team',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_APP_URL || 'https://your-domain.com',
    title: 'Next.js Landing Page Boilerplate - Production Ready',
    description:
      'A comprehensive Next.js boilerplate with Next.js 15, React 19, TypeScript, Tailwind CSS v4, Framer Motion, testing setup, and more. Everything you need to build modern, high-performance landing pages.',
    siteName: 'Next.js Landing Page Boilerplate',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Next.js Landing Page Boilerplate - Modern Tech Stack',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js Landing Page Boilerplate - Production Ready',
    description:
      'Comprehensive Next.js boilerplate with cutting-edge tools: Next.js 15, React 19, TypeScript, Tailwind CSS v4, testing setup, and best practices for modern web development.',
    images: ['/og-image.jpg'],
    creator: '@nextjs_boilerplate',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${openSans.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
