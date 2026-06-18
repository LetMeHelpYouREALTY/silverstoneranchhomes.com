import { MetadataRoute } from 'next'
import { CONTACT_INFO } from '@/lib/contact-info'
import { NEIGHBORHOOD_SLUGS } from '@/lib/silverstone-neighborhoods'

const baseUrl = CONTACT_INFO.website.base

function staticRoute(
  path: string,
  priority: number,
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] = 'monthly'
): MetadataRoute.Sitemap[number] {
  return {
    url: path === '/' ? baseUrl : `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const neighborhoodRoutes = NEIGHBORHOOD_SLUGS.map((slug) =>
    staticRoute(`/neighborhoods/${slug}`, 0.75)
  )

  return [
    staticRoute('/', 1, 'weekly'),
    staticRoute('/home-valuation', 0.9),
    staticRoute('/request-info', 0.9),
    staticRoute('/homes-for-sale', 0.9, 'weekly'),
    staticRoute('/photos', 0.8),
    staticRoute('/description', 0.8),
    staticRoute('/price-features', 0.8),
    staticRoute('/amenities', 0.8),
    staticRoute('/map', 0.7),
    staticRoute('/video', 0.7),
    staticRoute('/area-info', 0.7),
    staticRoute('/area-insight', 0.8, 'weekly'),
    staticRoute('/buy-with-agent', 0.85),
    staticRoute('/sell-with-agent', 0.85),
    staticRoute('/market-insights', 0.85),
    staticRoute('/buyers-checklist', 0.8),
    staticRoute('/environmental-risk', 0.8),
    staticRoute('/golf-course-status', 0.9, 'weekly'),
    staticRoute('/resources', 0.7),
    staticRoute('/resources/las-vegas-hoa', 0.65),
    staticRoute('/resources/las-vegas-hoa/silverstone-ranch', 0.8),
    staticRoute('/silverstone-ranch/schools', 0.5),
    staticRoute('/agent', 0.8),
    staticRoute('/silverstone-ranch', 0.85),
    staticRoute('/schools', 0.7),
    ...neighborhoodRoutes,
    staticRoute('/book-tour', 0.9),
    staticRoute('/contact', 0.7),
    staticRoute('/privacy', 0.3, 'yearly'),
    staticRoute('/terms', 0.3, 'yearly'),
  ]
}
