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
 * Generates a generic WebPage JSON-LD object with AEO enhancements (2026).
 * Includes speakable content selectors for voice assistants.
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
    '@id': `${canonical}#webpage`,
    name,
    description,
    url: canonical,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonical,
    },
    inLanguage: 'en-US',
    isPartOf: {
      '@id': `${CONTACT_INFO.website.url}#website`,
    },
    about: {
      '@id': `${CONTACT_INFO.website.url}#organization`,
    },
    publisher: {
      '@id': `${CONTACT_INFO.website.url}#organization`,
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', '.summary', 'main p'],
    },
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
 * Enhanced for 2026 SEO/GEO/AEO best practices with complete properties.
 */
export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${CONTACT_INFO.website.url}#organization`,
    name: CONTACT_INFO.businessName,
    alternateName: 'Silverstone Ranch Real Estate',
    description: 'Expert real estate guidance for Silverstone Ranch, a luxury master-planned community in Northwest Las Vegas featuring guard-gated enclaves and resort-style amenities.',
    url: CONTACT_INFO.website.url,
    logo: {
      '@type': 'ImageObject',
      url: buildCanonical('/images/property/exterior-front-elevation.jpg'),
      width: 1200,
      height: 630,
    },
    image: [
      buildCanonical('/images/property/exterior-front-elevation.jpg'),
      buildCanonical('/images/amenities/pool.jpg'),
      buildCanonical('/images/amenities/clubhouse.jpg'),
    ],
    sameAs: CONTACT_INFO.socialProfiles.map((profile) => profile.url),
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: CONTACT_INFO.phone.international,
        contactType: 'customer service',
        areaServed: CONTACT_INFO.serviceAreas,
        availableLanguage: ['English', 'en-US'],
        contactOption: 'TollFree',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT_INFO.address.street,
      addressLocality: CONTACT_INFO.address.city,
      addressRegion: CONTACT_INFO.address.state,
      postalCode: CONTACT_INFO.address.postalCode,
      addressCountry: CONTACT_INFO.address.country,
    },
    founder: {
      '@type': 'Person',
      name: CONTACT_INFO.agentName,
    },
  }
}

/**
 * LocalBusiness schema optimized for Google Business Profiles and GEO (2026).
 * Includes geo-coordinates, service area, hours, and actions for voice/AI assistants.
 */
export function buildLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': `${CONTACT_INFO.website.url}#localbusiness`,
    name: `${CONTACT_INFO.agentName} | ${CONTACT_INFO.businessName}`,
    description: 'Dr. Jan Duffy provides expert real estate services specializing in Silverstone Ranch luxury homes, from buying and selling to market analysis and investment guidance in Northwest Las Vegas.',
    image: {
      '@type': 'ImageObject',
      url: buildCanonical('/images/property/exterior-front-elevation.jpg'),
      width: 1200,
      height: 630,
    },
    url: CONTACT_INFO.website.url,
    telephone: CONTACT_INFO.phone.display,
    email: CONTACT_INFO.email,
    priceRange: '$$-$$$',
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
    areaServed: [
      {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: 36.2981,
          longitude: -115.3001,
        },
        geoRadius: '25000',
      },
      {
        '@type': 'City',
        name: 'Las Vegas',
        containedIn: {
          '@type': 'State',
          name: 'Nevada',
        },
      },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: '10:00',
        closes: '16:00',
      },
    ],
    sameAs: CONTACT_INFO.socialProfiles.map((profile) => profile.url),
    potentialAction: [
      {
        '@type': 'CommunicateAction',
        name: 'Contact Dr. Jan Duffy',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${CONTACT_INFO.website.url}/request-info`,
          actionPlatform: [
            'http://schema.org/DesktopWebPlatform',
            'http://schema.org/MobileWebPlatform',
          ],
        },
      },
      {
        '@type': 'ReserveAction',
        name: 'Book a Tour',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${CONTACT_INFO.website.url}/book-tour`,
          actionPlatform: [
            'http://schema.org/DesktopWebPlatform',
            'http://schema.org/MobileWebPlatform',
          ],
        },
      },
    ],
  }
}

/**
 * RealEstateAgent schema with enhanced properties for AEO/GEO (2026).
 * Includes expertise signals, knowledge areas, and actionable information.
 */
export function buildRealEstateAgentSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': `${CONTACT_INFO.website.url}#agent`,
    name: CONTACT_INFO.agentName,
    honorificPrefix: 'Dr.',
    jobTitle: 'REALTOR®',
    description: 'Licensed real estate professional specializing in Silverstone Ranch luxury properties, with expertise in Northwest Las Vegas communities, market analysis, and personalized buyer and seller representation.',
    url: CONTACT_INFO.website.url,
    email: CONTACT_INFO.email,
    telephone: CONTACT_INFO.phone.display,
    knowsAbout: [
      'Real Estate',
      'Luxury Homes',
      'Silverstone Ranch',
      'Las Vegas Real Estate',
      'Property Investment',
      'Market Analysis',
      'Buyer Representation',
      'Seller Representation',
      'Gated Communities',
      'Northwest Las Vegas',
    ],
    knowsLanguage: ['English', 'en-US'],
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Professional License',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Nevada Real Estate Division',
      },
    },
    worksFor: {
      '@type': 'Organization',
      name: CONTACT_INFO.brokerage,
      url: 'https://www.bhhsnv.com',
    },
    affiliation: {
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
    areaServed: CONTACT_INFO.serviceAreas.map((area) => ({
      '@type': 'Place',
      name: area,
    })),
  }
}

/**
 * WebSite schema with search action for voice assistants and AEO (2026).
 */
export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${CONTACT_INFO.website.url}#website`,
    name: CONTACT_INFO.businessName,
    alternateName: 'Silverstone Ranch Homes Las Vegas',
    description: 'Your guide to Silverstone Ranch real estate in Northwest Las Vegas - luxury homes, community information, market insights, and expert representation by Dr. Jan Duffy.',
    url: CONTACT_INFO.website.url,
    publisher: {
      '@id': `${CONTACT_INFO.website.url}#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${CONTACT_INFO.website.url}/search?q={search_term_string}`,
      },
      'query-input': {
        '@type': 'PropertyValueSpecification',
        valueRequired: true,
        valueName: 'search_term_string',
      },
    },
    inLanguage: 'en-US',
  }
}

/**
 * Place schema for the Silverstone Ranch community (GEO optimized for 2026).
 * Enhanced with geo-coordinates, contained areas, and amenity features.
 */
export function buildPlaceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Place',
    '@id': `${CONTACT_INFO.website.url}#place`,
    name: 'Silverstone Ranch Community',
    alternateName: 'Silverstone Ranch',
    description:
      'Master-planned luxury community in Northwest Las Vegas featuring guard-gated enclaves, resort-style amenities, and residences along the former Silverstone golf fairways.',
    disambiguatingDescription: 'Silverstone Ranch is a master-planned community in the Centennial Hills area of Northwest Las Vegas, known for its guard-gated neighborhoods and former golf course views.',
    url: CONTACT_INFO.website.url,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89143',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.2981,
      longitude: -115.3001,
    },
    containedInPlace: {
      '@type': 'City',
      name: 'Las Vegas',
      containedIn: {
        '@type': 'AdministrativeArea',
        name: 'Centennial Hills',
      },
    },
    telephone: CONTACT_INFO.phone.display,
    image: [
      {
        '@type': 'ImageObject',
        url: buildCanonical('/images/property/exterior-front-elevation.jpg'),
        caption: 'Silverstone Ranch luxury home exterior',
      },
      {
        '@type': 'ImageObject',
        url: buildCanonical('/images/amenities/pool.jpg'),
        caption: 'Silverstone Ranch resort-style pool',
      },
    ],
    amenityFeature: [
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Guard-Gated Security',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Resort-Style Pool',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Fitness Center',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Clubhouse',
        value: true,
      },
    ],
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


