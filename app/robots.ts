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
        disallow: ['/api/', '/scripts/', '/reports/', '/_next/', '/assets/', '/static/'],
      },
      // AEO 2026: Allow AI search engines (ChatGPT, Perplexity, Claude, Gemini)
      // to index content for Answer Engine Optimization
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow: ['/api/', '/scripts/', '/reports/'],
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
        disallow: ['/api/', '/scripts/', '/reports/'],
      },
      {
        userAgent: 'CCBot',
        allow: '/',
        disallow: ['/api/', '/scripts/', '/reports/'],
      },
      {
        userAgent: 'anthropic-ai',
        allow: '/',
        disallow: ['/api/', '/scripts/', '/reports/'],
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
        disallow: ['/api/', '/scripts/', '/reports/'],
      },
      {
        userAgent: 'Claude-Web',
        allow: '/',
        disallow: ['/api/', '/scripts/', '/reports/'],
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
        disallow: ['/api/', '/scripts/', '/reports/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host,
  }
}
