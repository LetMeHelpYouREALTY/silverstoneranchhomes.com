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
export function buildFaqSchema(
  path: string,
  faqs: Array<{ question: string; answer: string }>,
  speakableSelectors?: string[],
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
      },
    })),
    url: buildCanonical(path),
    ...(speakableSelectors?.length
      ? { speakable: buildSpeakableSpecification(speakableSelectors) }
      : {}),
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
 * Opening hours for JSON-LD (aligned with GBP default weekly hours).
 */
export function buildOpeningHoursSpecification() {
  const { opens, closes, dayOfWeek } = CONTACT_INFO.businessHours
  return {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek,
    opens,
    closes,
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
    foundingDate: CONTACT_INFO.foundingDate,
    logo: buildCanonical('/images/property/exterior-front-elevation.jpg'),
    sameAs: CONTACT_INFO.socialProfiles.map((profile) => profile.url),
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: CONTACT_INFO.phone.international,
        contactType: 'customer service',
        areaServed: CONTACT_INFO.serviceAreas,
        availableLanguage: CONTACT_INFO.languagesOffered,
      },
    ],
  }
}

/**
 * LocalBusiness schema optimized for Google Business Profiles.
 * Business `name` matches GBP exactly (no duplicate agent prefix).
 */
export function buildLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: CONTACT_INFO.businessName,
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
    geo: buildGeoCoordinates(),
    sameAs: CONTACT_INFO.socialProfiles.map((profile) => profile.url),
    areaServed: CONTACT_INFO.serviceAreas,
    openingHoursSpecification: buildOpeningHoursSpecification(),
    ...(CONTACT_INFO.gbpAttributes.womenOwned ? { additionalType: 'https://schema.org/WomenOwnedBusiness' } : {}),
    knowsAbout: [
      'Silverstone Ranch real estate',
      'Guard-gated communities',
      'Centennial Hills homes',
      'Northwest Las Vegas relocation',
      'HOA resale packages',
    ],
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
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Real Estate License',
      name: `Nevada Real Estate License ${CONTACT_INFO.license}`,
    },
    knowsAbout: [
      'Silverstone Ranch buyer representation',
      'Silverstone Ranch seller representation',
      'Guard-gated HOA navigation',
      'Centennial Hills market analytics',
    ],
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
    inLanguage: 'en-US',
    publisher: {
      '@type': 'Organization',
      name: CONTACT_INFO.businessName,
      url: CONTACT_INFO.website.url,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${CONTACT_INFO.website.base}/homes-for-sale?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

/** Silverstone Ranch community center coordinates (Centennial Hills, 89131). */
export const SILVERSTONE_GEO = {
  latitude: 36.2981,
  longitude: -115.3001,
} as const

export function buildGeoCoordinates() {
  return {
    '@type': 'GeoCoordinates',
    latitude: SILVERSTONE_GEO.latitude,
    longitude: SILVERSTONE_GEO.longitude,
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
    geo: buildGeoCoordinates(),
    containedInPlace: {
      '@type': 'City',
      name: 'Las Vegas',
      containedInPlace: {
        '@type': 'State',
        name: 'Nevada',
      },
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT_INFO.address.street,
      addressLocality: CONTACT_INFO.address.city,
      addressRegion: CONTACT_INFO.address.state,
      postalCode: CONTACT_INFO.address.postalCode,
      addressCountry: CONTACT_INFO.address.country,
    },
    telephone: CONTACT_INFO.phone.display,
    image: buildCanonical('/images/property/exterior-front-elevation.jpg'),
  }
}

export function buildSpeakableSpecification(cssSelectors: string[]) {
  if (!cssSelectors.length) return undefined
  return {
    '@type': 'SpeakableSpecification',
    cssSelector: cssSelectors,
  }
}

export function buildArticleSchema({
  path,
  headline,
  description,
  datePublished,
  dateModified,
  speakableSelectors,
}: {
  path: string
  headline: string
  description: string
  datePublished: string
  dateModified: string
  speakableSelectors?: string[]
}) {
  const canonical = buildCanonical(path)
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    url: canonical,
    mainEntityOfPage: canonical,
    datePublished,
    dateModified,
    author: {
      '@type': 'Person',
      name: CONTACT_INFO.agentName,
      url: buildCanonical('/agent'),
    },
    publisher: {
      '@type': 'Organization',
      name: CONTACT_INFO.businessName,
      url: CONTACT_INFO.website.url,
    },
    ...(speakableSelectors?.length
      ? { speakable: buildSpeakableSpecification(speakableSelectors) }
      : {}),
  }
}

export function buildVideoObjectSchema({
  path,
  name,
  description,
  thumbnailUrl,
  uploadDate,
  contentUrl,
}: {
  path: string
  name: string
  description: string
  thumbnailUrl: string
  uploadDate: string
  contentUrl?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name,
    description,
    thumbnailUrl,
    uploadDate,
    url: buildCanonical(path),
    ...(contentUrl ? { contentUrl } : {}),
    publisher: {
      '@type': 'Organization',
      name: CONTACT_INFO.businessName,
    },
  }
}

export function buildImageGallerySchema({
  path,
  name,
  images,
}: {
  path: string
  name: string
  images: Array<{ url: string; caption: string }>
}) {
  if (!images.length) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name,
    url: buildCanonical(path),
    image: images.map((img) => ({
      '@type': 'ImageObject',
      contentUrl: img.url,
      caption: img.caption,
    })),
  }
}

export function buildEducationalOrganizationSchema({
  name,
  description,
  url,
}: {
  name: string
  description: string
  url?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name,
    description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: CONTACT_INFO.address.postalCode,
      addressCountry: 'US',
    },
    ...(url ? { url } : {}),
  }
}

export function buildMapPlaceSchema({
  path,
  name,
  description,
}: {
  path: string
  name: string
  description: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name,
    description,
    url: buildCanonical(path),
    geo: buildGeoCoordinates(),
    address: {
      '@type': 'PostalAddress',
      addressLocality: CONTACT_INFO.address.city,
      addressRegion: CONTACT_INFO.address.state,
      postalCode: CONTACT_INFO.address.postalCode,
      addressCountry: CONTACT_INFO.address.country,
    },
    hasMap: `https://www.google.com/maps/place/Silverstone+Ranch,+Las+Vegas,+NV+89131`,
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

export type RealEstateListingEntry = {
  name: string
  url: string
  description?: string
  price?: string
  address?: string
}

/**
 * ItemList of RealEstateListing entries for homes-for-sale and IDX pages.
 */
export function buildRealEstateListingItemList({
  path,
  name,
  listings,
}: {
  path: string
  name: string
  listings: RealEstateListingEntry[]
}) {
  if (!listings.length) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    url: buildCanonical(path),
    numberOfItems: listings.length,
    itemListElement: listings.map((listing, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'RealEstateListing',
        name: listing.name,
        url: listing.url,
        ...(listing.description ? { description: listing.description } : {}),
        ...(listing.price ? { offers: { '@type': 'Offer', price: listing.price, priceCurrency: 'USD' } } : {}),
        ...(listing.address
          ? {
              address: {
                '@type': 'PostalAddress',
                streetAddress: listing.address,
                addressLocality: 'Las Vegas',
                addressRegion: 'NV',
                postalCode: '89131',
                addressCountry: 'US',
              },
            }
          : {}),
      },
    })),
  }
}


