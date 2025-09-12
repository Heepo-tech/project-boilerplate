interface StructuredDataProps {
  data: object
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// Common structured data templates
export const websiteStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Next.js Landing Page Boilerplate',
  url: process.env.NEXT_PUBLIC_APP_URL || 'https://your-domain.com',
  description:
    'A modern, comprehensive Next.js boilerplate for building high-performance landing pages with TypeScript, Tailwind CSS, and best practices.',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate:
        (process.env.NEXT_PUBLIC_APP_URL || 'https://your-domain.com') +
        '/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}

export const organizationStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Your Company Name',
  url: process.env.NEXT_PUBLIC_APP_URL || 'https://your-domain.com',
  logo: {
    '@type': 'ImageObject',
    url: '/logo.png',
    width: 60,
    height: 60,
  },
  sameAs: [
    'https://twitter.com/yourusername',
    'https://linkedin.com/company/yourcompany',
    'https://github.com/yourusername',
  ],
}

export const breadcrumbStructuredData = (
  items: Array<{ name: string; item: string }>
) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.item,
  })),
})
