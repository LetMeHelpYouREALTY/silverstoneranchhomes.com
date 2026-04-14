import { MetadataRoute } from 'next'
import { CONTACT_INFO } from '@/lib/contact-info'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = CONTACT_INFO.website.base
  const host = new URL(baseUrl).host

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Do not disallow /_next/ — crawlers need /_next/static (CSS, JS, fonts) to render pages.
        disallow: ['/api/', '/scripts/', '/reports/', '/assets/', '/static/'],
      },
      {
        userAgent: 'GPTBot',
        disallow: '/',
      },
      {
        userAgent: 'CCBot',
        disallow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host,
  }
}
