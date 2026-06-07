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
 * LocalBusiness schema optimized for Google Business Profiles.
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
    areaServed: CONTACT_INFO.serviceAreas,
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
    telephone: CONTACT_INFO.phone.display,
    image: buildCanonical('/images/property/exterior-front-elevation.jpg'),
  }
}

/**
 * Builds RealEstateListing schema for property listings.
 * Critical for real estate SEO and rich snippets in search results.
 */
export function buildRealEstateListingSchema({
  address,
  price,
  propertyType = 'SingleFamilyResidence',
  bedrooms,
  bathrooms,
  floorSize,
  lotSize,
  yearBuilt,
  description,
  images = [],
  datePosted,
  availability = 'https://schema.org/ForSale',
}: {
  address: {
    street: string
    city: string
    state: string
    postalCode: string
    country?: string
  }
  price?: number | string
  propertyType?: 'SingleFamilyResidence' | 'Apartment' | 'House' | 'Residence'
  bedrooms?: number
  bathrooms?: number
  floorSize?: number
  lotSize?: number
  yearBuilt?: number
  description: string
  images?: string[]
  datePosted?: string
  availability?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: `${address.street}, ${address.city}, ${address.state}`,
    description,
    url: CONTACT_INFO.website.url,
    datePosted: datePosted || new Date().toISOString(),
    ...(price && {
      offers: {
        '@type': 'Offer',
        price: typeof price === 'number' ? price : price,
        priceCurrency: 'USD',
        availability,
        seller: {
          '@type': 'RealEstateAgent',
          name: CONTACT_INFO.agentName,
          telephone: CONTACT_INFO.phone.display,
          email: CONTACT_INFO.email,
        },
      },
    }),
    address: {
      '@type': 'PostalAddress',
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.postalCode,
      addressCountry: address.country || 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.2981,
      longitude: -115.3001,
    },
    ...(images.length > 0 && {
      image: images.map((img) => buildCanonical(img)),
    }),
    property: {
      '@type': propertyType,
      address: {
        '@type': 'PostalAddress',
        streetAddress: address.street,
        addressLocality: address.city,
        addressRegion: address.state,
        postalCode: address.postalCode,
        addressCountry: address.country || 'US',
      },
      ...(bedrooms && { numberOfBedrooms: bedrooms }),
      ...(bathrooms && { numberOfBathroomsTotal: bathrooms }),
      ...(floorSize && {
        floorSize: {
          '@type': 'QuantitativeValue',
          value: floorSize,
          unitCode: 'FTK',
        },
      }),
      ...(lotSize && {
        additionalProperty: {
          '@type': 'PropertyValue',
          name: 'Lot Size',
          value: lotSize,
          unitCode: 'FTK',
        },
      }),
      ...(yearBuilt && { yearBuilt }),
    },
  }
}

/**
 * Enhanced LocalBusiness schema optimized for local SEO and Google Business Profile.
 * Includes opening hours, price range, and service areas for better geographic targeting.
 */
export function buildEnhancedLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: `${CONTACT_INFO.agentName} | ${CONTACT_INFO.businessName}`,
    description:
      'Premier real estate services in Silverstone Ranch and Northwest Las Vegas. Specializing in luxury homes, guard-gated communities, and concierge-level buyer and seller representation.',
    image: buildCanonical('/images/property/exterior-front-elevation.jpg'),
    logo: buildCanonical('/images/property/exterior-front-elevation.jpg'),
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
    areaServed: CONTACT_INFO.serviceAreas.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    sameAs: CONTACT_INFO.socialProfiles.map((profile) => profile.url),
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
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Real Estate Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Buyer Representation',
            description:
              'Comprehensive buyer representation for luxury and guard-gated properties in Northwest Las Vegas',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Seller Representation',
            description:
              'Strategic pricing, professional staging guidance, and full-service listing management',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Home Valuation',
            description: 'Complimentary comparative market analysis and property valuation services',
          },
        },
      ],
    },
  }
}

/**
 * Builds AEO-optimized FAQ schema with detailed, conversational answers
 * designed for AI search engines like ChatGPT, Perplexity, and Google AI Overviews.
 */
export function buildAeoFaqSchema(
  path: string,
  faqs: Array<{ question: string; answer: string; answerHtml?: string }>,
) {
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
        ...(faq.answerHtml && { encodingFormat: 'text/html' }),
      },
    })),
    url: buildCanonical(path),
    inLanguage: 'en-US',
    audience: {
      '@type': 'Audience',
      audienceType: 'homebuyers, home sellers, real estate investors',
    },
  }
}

/**
 * Builds Review/AggregateRating schema for E-E-A-T signals.
 * Helps establish expertise, experience, authoritativeness, and trustworthiness.
 */
export function buildAggregateRatingSchema({
  ratingValue = 4.9,
  reviewCount = 127,
  bestRating = 5,
}: {
  ratingValue?: number
  reviewCount?: number
  bestRating?: number
} = {}) {
  return {
    '@type': 'AggregateRating',
    ratingValue,
    reviewCount,
    bestRating,
  }
}


