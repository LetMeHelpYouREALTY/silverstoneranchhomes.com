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
 * Note: FAQ rich results deprecated May 2026, but schema still valuable for AI/AEO.
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
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h2', 'h3'],
    },
  }
}

/**
 * Builds QAPage schema for Answer Engine Optimization (AEO).
 * Optimized for AI Overviews and voice search in 2026.
 */
export function buildQAPageSchema({
  path,
  question,
  answer,
  author,
}: {
  path: string
  question: string
  answer: string
  author?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'QAPage',
    mainEntity: {
      '@type': 'Question',
      name: question,
      text: question,
      answerCount: 1,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
        ...(author
          ? {
              author: {
                '@type': 'Person',
                name: author,
              },
            }
          : {}),
      },
    },
    url: buildCanonical(path),
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', '.answer'],
    },
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
 * LocalBusiness schema optimized for Google Business Profiles and geographic SEO.
 * Enhanced with 2026 best practices for local search visibility.
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
    sameAs: CONTACT_INFO.socialProfiles.map((profile) => profile.url),
    areaServed: CONTACT_INFO.serviceAreas.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    priceRange: '$$-$$$',
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
        closes: '17:00',
      },
    ],
    potentialAction: [
      {
        '@type': 'ReserveAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: buildCanonical('/book-tour'),
          actionPlatform: [
            'http://schema.org/DesktopWebPlatform',
            'http://schema.org/MobileWebPlatform',
          ],
        },
        result: {
          '@type': 'Reservation',
          name: 'Property Tour Reservation',
        },
      },
      {
        '@type': 'CommunicateAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: buildCanonical('/contact'),
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
 * RealEstateAgent schema with AEO optimization and expertise signals.
 * Enhanced for 2026 AI search and voice assistant compatibility.
 */
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
    knowsAbout: [
      'Luxury Real Estate',
      'Guard-Gated Communities',
      'Silverstone Ranch',
      'Las Vegas Real Estate Market',
      'Buyer Representation',
      'Seller Representation',
      'Relocation Services',
      'Investment Properties',
      'Home Valuation',
    ],
    knowsLanguage: {
      '@type': 'Language',
      name: 'English',
    },
  }
}

/**
 * WebSite schema with search action for voice search optimization.
 * Enhanced for 2026 AEO and site search discovery.
 */
export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: CONTACT_INFO.businessName,
    url: CONTACT_INFO.website.url,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${CONTACT_INFO.website.base}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: 'en-US',
  }
}

/**
 * Place schema with enhanced geographic data for geo-SEO.
 * Optimized for local discovery and map-based search results.
 */
export function buildPlaceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Place',
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
    containedInPlace: {
      '@type': 'City',
      name: 'Las Vegas',
      '@id': 'https://www.wikidata.org/wiki/Q23768',
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Neighborhood',
        value: 'Centennial Hills',
      },
      {
        '@type': 'PropertyValue',
        name: 'Community Type',
        value: 'Guard-Gated Master-Planned Community',
      },
    ],
    telephone: CONTACT_INFO.phone.display,
    image: buildCanonical('/images/property/exterior-front-elevation.jpg'),
  }
}

/**
 * Builds a Service schema for real estate offerings.
 */
export function buildServiceSchema({
  name,
  description,
  serviceType,
  areaServed,
  provider,
}: {
  name: string
  description: string
  serviceType: string
  areaServed?: string[]
  provider?: Record<string, unknown>
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    serviceType,
    provider: provider || {
      '@type': 'RealEstateAgent',
      name: CONTACT_INFO.agentName,
      telephone: CONTACT_INFO.phone.display,
      email: CONTACT_INFO.email,
    },
    areaServed: areaServed || CONTACT_INFO.serviceAreas,
  }
}

/**
 * Builds an array of Service schemas for all real estate services.
 */
export function buildRealEstateServices() {
  return [
    buildServiceSchema({
      name: 'Buyer Concierge Service',
      description:
        'Comprehensive buyer representation including relocation kits, private community tours, lender coordination, and guard gate orientation for Silverstone Ranch.',
      serviceType: 'Real Estate Buyer Representation',
    }),
    buildServiceSchema({
      name: 'Listing Concierge Service',
      description:
        'Full-service seller representation featuring pricing strategy, professional staging, cinematic marketing, and transaction management for Silverstone Ranch properties.',
      serviceType: 'Real Estate Seller Representation',
    }),
    buildServiceSchema({
      name: 'Private Property Tours',
      description:
        'Curated in-person and virtual property tours with concierge support, guard gate pre-clearance, and detailed disclosure packets.',
      serviceType: 'Real Estate Property Tours',
    }),
    buildServiceSchema({
      name: 'Home Valuation & Market Analysis',
      description:
        'Data-driven home pricing analysis with comparable market data, staging recommendations, and customized selling roadmap for Silverstone Ranch sellers.',
      serviceType: 'Real Estate Valuation',
    }),
  ]
}

/**
 * Builds a Review schema from testimonial data.
 */
export function buildReviewSchema({
  reviewBody,
  author,
  datePublished,
  ratingValue,
}: {
  reviewBody: string
  author: string
  datePublished?: string
  ratingValue?: number
}) {
  return {
    '@type': 'Review',
    reviewBody,
    author: {
      '@type': 'Person',
      name: author,
    },
    ...(datePublished ? { datePublished } : {}),
    ...(ratingValue
      ? {
          reviewRating: {
            '@type': 'Rating',
            ratingValue,
            bestRating: 5,
          },
        }
      : {}),
  }
}

/**
 * Builds an AggregateRating schema.
 */
export function buildAggregateRatingSchema({
  ratingValue,
  reviewCount,
  bestRating = 5,
}: {
  ratingValue: number
  reviewCount: number
  bestRating?: number
}) {
  return {
    '@type': 'AggregateRating',
    ratingValue,
    reviewCount,
    bestRating,
  }
}

/**
 * Builds ItemList schema for AEO optimization of "best" queries.
 * Useful for service listings, amenity lists, and ranked content.
 */
export function buildItemListSchema({
  name,
  description,
  items,
}: {
  name: string
  description?: string
  items: Array<{ name: string; description?: string; url?: string; position?: number }>
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    ...(description ? { description } : {}),
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: item.position || index + 1,
      name: item.name,
      ...(item.description ? { description: item.description } : {}),
      ...(item.url ? { url: item.url } : {}),
    })),
  }
}

/**
 * Enhanced organization schema with award and service offerings.
 * Optimized for 2026 AI search and geographic discovery.
 */
export function buildEnhancedOrganizationSchema() {
  const services = buildRealEstateServices()
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
    award: 'Berkshire Hathaway Circle, Top 1% Las Vegas REALTORS® for closed volume (2024)',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Real Estate Services',
      itemListElement: services,
    },
    slogan: 'Your Silverstone Ranch Real Estate Expert',
    foundingDate: '2020',
    knowsAbout: [
      'Luxury Real Estate',
      'Silverstone Ranch Community',
      'Las Vegas Market Analysis',
      'Guard-Gated Properties',
    ],
  }
}


