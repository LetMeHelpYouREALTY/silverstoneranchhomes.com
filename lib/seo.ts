import { CONTACT_INFO } from './contact-info'

type BreadcrumbItem = {
  name: string
  path: string
}

/**
 * Build canonical URLs using the shared contact info configuration.
 */
export function buildCanonical(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`
  const base = CONTACT_INFO.website.base
  return `${base}${normalized === '/' ? '' : normalized}`
}

/**
 * Builds a BreadcrumbList JSON-LD structure compliant with Google rich results.
 */
export function buildBreadcrumbList(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: buildCanonical(item.path),
    })),
  }
}

/**
 * Generates a generic WebPage JSON-LD object.
 */
export function buildWebPageSchema({
  path,
  name,
  description,
  breadcrumb,
  type = 'WebPage',
  additional = {},
}: {
  path: string
  name: string
  description: string
  breadcrumb?: BreadcrumbItem[]
  type?: string
  additional?: Record<string, unknown>
}) {
  const canonical = buildCanonical(path)
  return {
    '@context': 'https://schema.org',
    '@type': type,
    name,
    description,
    url: canonical,
    mainEntityOfPage: canonical,
    ...(breadcrumb ? { breadcrumb: buildBreadcrumbList(breadcrumb) } : {}),
    ...additional,
  }
}

/**
 * Builds FAQPage schema from input QA pairs.
 */
export function buildFaqSchema(path: string, faqs: Array<{ question: string; answer: string }>) {
  if (!faqs.length) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
    url: buildCanonical(path),
  }
}

/**
 * Builds HowTo schema suitable for Google rich results.
 */
export function buildHowToSchema({
  path,
  name,
  description,
  steps,
  totalTime,
}: {
  path: string
  name: string
  description: string
  steps: Array<{ title: string; detail: string }>
  totalTime?: string
}) {
  if (!steps.length) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    url: buildCanonical(path),
    mainEntityOfPage: buildCanonical(path),
    totalTime,
    step: steps.map((step) => ({
      '@type': 'HowToStep',
      name: step.title,
      text: step.detail,
    })),
  }
}

/**
 * Base organization schema used across the site.
 */
export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: CONTACT_INFO.businessName,
    url: CONTACT_INFO.website.url,
    logo: buildCanonical('/images/property/exterior-front-elevation.jpg'),
    sameAs: CONTACT_INFO.socialProfiles.map((profile) => profile.url),
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: CONTACT_INFO.phone.international,
        contactType: 'customer service',
        areaServed: CONTACT_INFO.serviceAreas,
        availableLanguage: ['English'],
      },
    ],
  }
}

/**
 * LocalBusiness schema optimized for Google Business Profiles and 2026 GEO best practices.
 */
export function buildLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: `${CONTACT_INFO.agentName} | ${CONTACT_INFO.businessName}`,
    image: buildCanonical('/images/property/exterior-front-elevation.jpg'),
    url: CONTACT_INFO.website.url,
    telephone: CONTACT_INFO.phone.display,
    email: CONTACT_INFO.email,
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT_INFO.address.street,
      addressLocality: CONTACT_INFO.address.city,
      addressRegion: CONTACT_INFO.address.state,
      postalCode: CONTACT_INFO.address.postalCode,
      addressCountry: CONTACT_INFO.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.2981,
      longitude: -115.3001,
    },
    hasMap: 'https://www.google.com/maps/place/8721+Deering+Bay+Dr,+Las+Vegas,+NV+89131',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: '09:00',
        closes: '17:00',
      },
    ],
    sameAs: CONTACT_INFO.socialProfiles.map((profile) => profile.url),
    areaServed: CONTACT_INFO.serviceAreas.map((area) => ({
      '@type': 'City',
      name: area,
    })),
  }
}

/**
 * Person schema for Dr. Jan Duffy - critical for GEO and AEO in 2026.
 * AI systems prefer Person schema over generic RealEstateAgent for answer citations.
 */
export function buildPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: CONTACT_INFO.agentName,
    givenName: 'Jan',
    familyName: 'Duffy',
    honorificPrefix: 'Dr.',
    jobTitle: 'REALTOR®',
    url: CONTACT_INFO.website.url,
    email: CONTACT_INFO.email,
    telephone: CONTACT_INFO.phone.display,
    image: buildCanonical('/images/property/exterior-front-elevation.jpg'),
    worksFor: {
      '@type': 'Organization',
      name: CONTACT_INFO.brokerage,
    },
    affiliation: {
      '@type': 'Organization',
      name: CONTACT_INFO.businessName,
      url: CONTACT_INFO.website.url,
    },
    knowsAbout: [
      'Real Estate',
      'Silverstone Ranch',
      'Centennial Hills',
      'Las Vegas Real Estate',
      'Luxury Homes',
      'Property Investment',
      'Home Buying',
      'Home Selling',
    ],
    sameAs: CONTACT_INFO.socialProfiles.map((profile) => profile.url),
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT_INFO.address.street,
      addressLocality: CONTACT_INFO.address.city,
      addressRegion: CONTACT_INFO.address.state,
      postalCode: CONTACT_INFO.address.postalCode,
      addressCountry: CONTACT_INFO.address.country,
    },
    areaServed: CONTACT_INFO.serviceAreas.map((area) => ({
      '@type': 'City',
      name: area,
    })),
  }
}

export function buildRealEstateAgentSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: CONTACT_INFO.agentName,
    jobTitle: 'REALTOR®',
    url: CONTACT_INFO.website.url,
    email: CONTACT_INFO.email,
    telephone: CONTACT_INFO.phone.display,
    worksFor: {
      '@type': 'Organization',
      name: CONTACT_INFO.businessName,
      url: CONTACT_INFO.website.url,
    },
    sameAs: CONTACT_INFO.socialProfiles.map((profile) => profile.url),
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT_INFO.address.street,
      addressLocality: CONTACT_INFO.address.city,
      addressRegion: CONTACT_INFO.address.state,
      postalCode: CONTACT_INFO.address.postalCode,
      addressCountry: CONTACT_INFO.address.country,
    },
    areaServed: CONTACT_INFO.serviceAreas,
  }
}

export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: CONTACT_INFO.businessName,
    url: CONTACT_INFO.website.url,
  }
}

/**
 * ApartmentComplex schema for Silverstone Ranch community (Schema.org v30.0 compliant).
 * Optimized for real estate AEO and local search in 2026.
 */
export function buildPlaceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ApartmentComplex',
    name: 'Silverstone Ranch Community',
    description:
      'Master-planned luxury community in Northwest Las Vegas featuring guard-gated enclaves, resort-style amenities, and residences along the former Silverstone golf fairways.',
    url: CONTACT_INFO.website.url,
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT_INFO.address.street,
      addressLocality: CONTACT_INFO.address.city,
      addressRegion: CONTACT_INFO.address.state,
      postalCode: CONTACT_INFO.address.postalCode,
      addressCountry: CONTACT_INFO.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.2981,
      longitude: -115.3001,
    },
    telephone: CONTACT_INFO.phone.display,
    image: buildCanonical('/images/property/exterior-front-elevation.jpg'),
    amenityFeature: [
      {
        '@type': 'LocationFeatureSpecification',
        name: '24/7 Guard Gate Security',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Central Park & Greenbelts',
        value: '6-acre park with shade structures',
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Tennis & Pickleball Courts',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Walking & Biking Trails',
        value: 'Miles of paved trails',
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Clubhouse with Event Spaces',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Playgrounds & Splash Pads',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Fitness Stations',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Pet-Friendly Amenities',
        value: true,
      },
    ],
    numberOfAccommodationUnits: 'Multiple luxury residences',
    petsAllowed: true,
  }
}

export type ActionEntry = {
  type?: 'ScheduleAction' | 'ReserveAction' | 'ContactAction'
  name: string
  target: string
  description?: string
  availabilityStarts?: string
}

export function buildAction(action: ActionEntry) {
  const { type = 'ScheduleAction', name, target, description, availabilityStarts } = action
  return {
    '@type': type,
    name,
    target,
    ...(description ? { description } : {}),
    ...(availabilityStarts ? { availabilityStarts } : {}),
    participant: {
      '@type': 'Person',
      name: CONTACT_INFO.agentName,
    },
  }
}

export type ServiceEntry = {
  name: string
  description: string
  areaServed?: string[]
  serviceType?: string[]
  actions?: ActionEntry[]
  provider?: Record<string, unknown>
  audience?: Record<string, unknown>
}

export function buildServiceSchema(service: ServiceEntry) {
  const {
    name,
    description,
    areaServed = CONTACT_INFO.serviceAreas,
    serviceType,
    actions = [],
    provider,
    audience,
  } = service

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    areaServed,
    ...(serviceType ? { serviceType } : {}),
    provider: provider ?? buildRealEstateAgentSchema(),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${name} Offer Catalog`,
      itemListElement: actions.map((cta) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name },
        potentialAction: buildAction(cta),
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      })),
    },
    audience,
  }
}

export type OfferEntry = {
  name: string
  description: string
  url: string
  priceCurrency?: string
  availability?: string
  validFrom?: string
}

export function buildOfferSchema(entry: OfferEntry) {
  const { name, description, url, priceCurrency = 'USD', availability = 'https://schema.org/InStock', validFrom } = entry
  return {
    '@type': 'Offer',
    name,
    description,
    url,
    priceCurrency,
    availability,
    ...(validFrom ? { validFrom } : {}),
  }
}

export type ReviewEntry = {
  author: string
  reviewBody: string
  rating?: number
  url?: string
  datePublished?: string
}

export function buildReviewSchema(entry: ReviewEntry) {
  const { author, reviewBody, rating, url, datePublished } = entry
  return {
    '@type': 'Review',
    reviewBody,
    author: { '@type': 'Person', name: author },
    ...(rating
      ? {
          reviewRating: {
            '@type': 'Rating',
            ratingValue: rating,
            bestRating: 5,
            worstRating: 1,
          },
        }
      : {}),
    ...(url ? { url } : {}),
    ...(datePublished ? { datePublished } : {}),
  }
}

export type AggregateRatingEntry = {
  ratingValue: number
  reviewCount: number
}

export function buildAggregateRatingSchema(entry: AggregateRatingEntry) {
  return {
    '@type': 'AggregateRating',
    ratingValue: entry.ratingValue,
    bestRating: 5,
    worstRating: 1,
    reviewCount: entry.reviewCount,
  }
}

/**
 * Builds Article schema for content pages - critical for AEO (Answer Engine Optimization).
 * AI systems heavily favor Article schema for citations in 2026.
 */
export function buildArticleSchema({
  path,
  headline,
  description,
  datePublished,
  dateModified,
  author = CONTACT_INFO.agentName,
  image,
}: {
  path: string
  headline: string
  description: string
  datePublished: string
  dateModified?: string
  author?: string
  image?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    url: buildCanonical(path),
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: author,
      url: CONTACT_INFO.website.url,
    },
    publisher: {
      '@type': 'Organization',
      name: CONTACT_INFO.businessName,
      logo: {
        '@type': 'ImageObject',
        url: buildCanonical('/images/property/exterior-front-elevation.jpg'),
      },
    },
    ...(image
      ? {
          image: {
            '@type': 'ImageObject',
            url: buildCanonical(image),
          },
        }
      : {}),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': buildCanonical(path),
    },
  }
}

/**
 * Enhanced FAQPage schema builder optimized for AEO.
 * 2026 best practice: FAQPage schema has 2.8x higher citation rate in AI answers.
 */
export function buildEnhancedFaqSchema(
  path: string,
  faqs: Array<{ question: string; answer: string }>,
  mainEntity?: string,
) {
  if (!faqs.length) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url: buildCanonical(path),
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
    ...(mainEntity
      ? {
          about: {
            '@type': 'Thing',
            name: mainEntity,
          },
        }
      : {}),
  }
}

