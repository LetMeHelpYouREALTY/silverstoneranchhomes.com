import { MetadataRoute } from 'next'
import { CONTACT_INFO } from '@/lib/contact-info'

/**
 * Robots.txt configuration optimized for GEO (Generative Engine Optimization) 2026.
 * Allows AI crawlers (ChatGPT, Claude, Perplexity, Gemini) to index public content
 * for citations in AI-generated answers while protecting sensitive endpoints.
 */
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
      // Allow AI crawlers for GEO optimization (2026 best practice)
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'Google-Extended', 'anthropic-ai', 'Claude-Web', 'PerplexityBot', 'Diffbot'],
        allow: [
          '/',
          '/homes-for-sale',
          '/amenities',
          '/silverstone-ranch',
          '/agent',
          '/buy-with-agent',
          '/sell-with-agent',
          '/market-insights',
          '/area-info',
          '/golf-course-status',
        ],
        disallow: ['/api/', '/scripts/', '/reports/', '/request-info', '/book-tour', '/contact', '/home-valuation'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host,
  }
}
