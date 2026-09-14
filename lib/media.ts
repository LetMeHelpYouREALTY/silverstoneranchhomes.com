import { CONTACT_INFO } from './contact-info'

/**
 * Cloudflare Images is the primary CDN. Git-backed files in /public/images are the fallback
 * and the source of truth for uploads (`scripts/upload-cloudflare-images.mjs`).
 *
 * Delivery (when NEXT_PUBLIC_CLOUDFLARE_IMAGES_HASH is set):
 *   https://imagedelivery.net/{account_hash}/{image_id}/{variant}
 * Docs: https://developers.cloudflare.com/images/manage-images/serve-images/
 */
export const CLOUDFLARE_IMAGES_HASH =
  process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_HASH?.trim() || ''
export const CLOUDFLARE_IMAGES_VARIANT =
  process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_VARIANT?.trim() || 'public'

export const MEDIA_IDS = [
  'hero-guard-gated',
  'hero-aerial-community',
  'hero-amenities-pool',
  'hero-listings-kitchen',
  'hero-golf-fairway',
  'hero-schools-campus',
  'hero-contact-office',
  'hero-home-valuation',
  'hero-map-location',
  'section-neighborhood-street',
  'section-outdoor-trails',
  'section-hoa-clubhouse',
  'section-seller-staging',
  'section-buyer-tour',
  'section-dining-plaza',
  'og-square-home',
] as const

export type MediaId = (typeof MEDIA_IDS)[number]

export type MediaAsset = {
  id: MediaId
  /** Git backup path under /public */
  localPath: string
  alt: string
  caption: string
  width: number
  height: number
}

export const MEDIA_ASSETS: Record<MediaId, MediaAsset> = {
  'hero-guard-gated': {
    id: 'hero-guard-gated',
    localPath: '/images/sections/hero-guard-gated.jpg',
    alt: 'Guard-gated Mediterranean home with desert landscaping in Silverstone Ranch, Northwest Las Vegas',
    caption: 'Guard-gated living in Silverstone Ranch, Centennial Hills (89131).',
    width: 1920,
    height: 1080,
  },
  'hero-aerial-community': {
    id: 'hero-aerial-community',
    localPath: '/images/sections/hero-aerial-community.jpg',
    alt: 'Aerial view of a master-planned Northwest Las Vegas neighborhood near Silverstone Ranch',
    caption: 'Silverstone Ranch and surrounding Centennial Hills street grid.',
    width: 1920,
    height: 1080,
  },
  'hero-amenities-pool': {
    id: 'hero-amenities-pool',
    localPath: '/images/sections/hero-amenities-pool.jpg',
    alt: 'Resort-style community pool and clubhouse in a Las Vegas gated neighborhood',
    caption: 'Resort-style recreation inside Silverstone Ranch.',
    width: 1920,
    height: 1080,
  },
  'hero-listings-kitchen': {
    id: 'hero-listings-kitchen',
    localPath: '/images/sections/hero-listings-kitchen.jpg',
    alt: 'Luxury kitchen interior typical of Silverstone Ranch homes for sale in Las Vegas 89131',
    caption: 'Interior quality buyers compare when touring Silverstone Ranch listings.',
    width: 1920,
    height: 1080,
  },
  'hero-golf-fairway': {
    id: 'hero-golf-fairway',
    localPath: '/images/sections/hero-golf-fairway.jpg',
    alt: 'Dormant former golf fairway between homes in Silverstone Ranch, Las Vegas',
    caption: 'Former Silverstone golf corridors — confirm current land status before you offer.',
    width: 1920,
    height: 1080,
  },
  'hero-schools-campus': {
    id: 'hero-schools-campus',
    localPath: '/images/sections/hero-schools-campus.jpg',
    alt: 'Clark County School District campus exterior near Silverstone Ranch in Northwest Las Vegas',
    caption: "Verify zoning at ccsd.net/zoning — assignments vary by street in 89131.",
    width: 1920,
    height: 1080,
  },
  'hero-contact-office': {
    id: 'hero-contact-office',
    localPath: '/images/sections/hero-contact-office.jpg',
    alt: 'Professional office exterior in Las Vegas for Silverstone Ranch Real Estate appointments',
    caption: `${CONTACT_INFO.address.display} · ${CONTACT_INFO.businessHours.display} daily.`,
    width: 1920,
    height: 1080,
  },
  'hero-home-valuation': {
    id: 'hero-home-valuation',
    localPath: '/images/sections/hero-home-valuation.jpg',
    alt: 'Front porch of a Silverstone Ranch home prepared for a pricing and valuation consult',
    caption: 'Request a data-backed Silverstone Ranch home valuation.',
    width: 1920,
    height: 1080,
  },
  'hero-map-location': {
    id: 'hero-map-location',
    localPath: '/images/sections/hero-map-location.jpg',
    alt: 'Gated community entry monument in Northwest Las Vegas near Silverstone Ranch',
    caption: 'Silverstone Ranch, Centennial Hills, Las Vegas NV 89131.',
    width: 1920,
    height: 1080,
  },
  'section-neighborhood-street': {
    id: 'section-neighborhood-street',
    localPath: '/images/sections/section-neighborhood-street.jpg',
    alt: 'Quiet gated street of tile-roof homes in Silverstone Ranch, Las Vegas',
    caption: 'Sub-associations inside Silverstone Ranch, ZIP 89131.',
    width: 1920,
    height: 1080,
  },
  'section-outdoor-trails': {
    id: 'section-outdoor-trails',
    localPath: '/images/sections/section-outdoor-trails.jpg',
    alt: 'Desert walking trail at the edge of Silverstone Ranch with Spring Mountains views',
    caption: 'Trail connections from Silverstone Ranch toward Floyd Lamb Park and Tule Springs.',
    width: 1920,
    height: 1080,
  },
  'section-hoa-clubhouse': {
    id: 'section-hoa-clubhouse',
    localPath: '/images/sections/section-hoa-clubhouse.jpg',
    alt: 'Community clubhouse interior serving Silverstone Ranch HOA amenities in Las Vegas',
    caption: 'Master HOA plus sub-association dues — review the latest resale package.',
    width: 1920,
    height: 1080,
  },
  'section-seller-staging': {
    id: 'section-seller-staging',
    localPath: '/images/sections/section-seller-staging.jpg',
    alt: 'Staged living room prepared for listing in a Silverstone Ranch Las Vegas home',
    caption: 'Presentation and pricing strategy for Silverstone Ranch sellers.',
    width: 1920,
    height: 1080,
  },
  'section-buyer-tour': {
    id: 'section-buyer-tour',
    localPath: '/images/sections/section-buyer-tour.jpg',
    alt: 'Private home-tour setting on a Silverstone Ranch patio in Northwest Las Vegas',
    caption: 'Private tours with HOA and disclosure context from Dr. Jan Duffy.',
    width: 1920,
    height: 1080,
  },
  'section-dining-plaza': {
    id: 'section-dining-plaza',
    localPath: '/images/sections/section-dining-plaza.jpg',
    alt: 'Northwest Las Vegas dining plaza near Centennial Hills and Silverstone Ranch',
    caption: 'Everyday conveniences minutes from Silverstone Ranch via the 215 Beltway.',
    width: 1920,
    height: 1080,
  },
  'og-square-home': {
    id: 'og-square-home',
    localPath: '/images/sections/og-square-home.jpg',
    alt: 'Silverstone Ranch luxury home front elevation in Northwest Las Vegas',
    caption: 'Silverstone Ranch Real Estate | Homes by Dr. Jan Duffy',
    width: 1024,
    height: 1024,
  },
}

/** Serve from Cloudflare Images when configured; otherwise the git-backed public file. */
export function getMediaUrl(id: MediaId): string {
  const asset = MEDIA_ASSETS[id]
  if (CLOUDFLARE_IMAGES_HASH) {
    return `https://imagedelivery.net/${CLOUDFLARE_IMAGES_HASH}/${id}/${CLOUDFLARE_IMAGES_VARIANT}`
  }
  return asset.localPath
}

export function absoluteMediaUrl(id: MediaId): string {
  const url = getMediaUrl(id)
  if (url.startsWith('http')) return url
  return `${CONTACT_INFO.website.base}${url}`
}

export type RouteHero = {
  mediaId: MediaId
  heading: string
}

const EXACT_ROUTE_HEROES: Record<string, RouteHero> = {
  '/': { mediaId: 'hero-guard-gated', heading: 'Live in Silverstone Ranch, Northwest Las Vegas' },
  '/homes-for-sale': { mediaId: 'hero-listings-kitchen', heading: 'Homes for sale in Silverstone Ranch' },
  '/amenities': { mediaId: 'hero-amenities-pool', heading: 'Silverstone Ranch amenities and lifestyle' },
  '/map': { mediaId: 'hero-map-location', heading: 'Silverstone Ranch location and map' },
  '/contact': { mediaId: 'hero-contact-office', heading: 'Contact Dr. Jan Duffy at Silverstone Ranch' },
  '/schools': { mediaId: 'hero-schools-campus', heading: 'Schools near Silverstone Ranch' },
  '/golf-course-status': { mediaId: 'hero-golf-fairway', heading: 'Silverstone Ranch golf course status' },
  '/home-valuation': { mediaId: 'hero-home-valuation', heading: 'Silverstone Ranch home valuation' },
  '/sell-with-agent': { mediaId: 'section-seller-staging', heading: 'Sell a Silverstone Ranch home' },
  '/buy-with-agent': { mediaId: 'section-buyer-tour', heading: 'Buy a Silverstone Ranch home with a buyer agent' },
  '/photos': { mediaId: 'hero-guard-gated', heading: 'Silverstone Ranch lifestyle gallery' },
  '/agent': { mediaId: 'hero-contact-office', heading: 'Meet Dr. Jan Duffy, Silverstone Ranch REALTOR' },
  '/book-tour': { mediaId: 'section-buyer-tour', heading: 'Book a Silverstone Ranch home tour' },
  '/request-info': { mediaId: 'hero-home-valuation', heading: 'Request Silverstone Ranch market information' },
  '/area-info': { mediaId: 'hero-aerial-community', heading: 'Silverstone Ranch area information' },
  '/area-insight': { mediaId: 'hero-aerial-community', heading: 'Silverstone Ranch area guide' },
  '/market-insights': { mediaId: 'hero-home-valuation', heading: 'Silverstone Ranch market insights' },
  '/silverstone-ranch': { mediaId: 'hero-guard-gated', heading: 'Silverstone Ranch community guide' },
  '/resources/las-vegas-hoa/silverstone-ranch': {
    mediaId: 'section-hoa-clubhouse',
    heading: 'Silverstone Ranch HOA guide',
  },
  '/environmental-risk': { mediaId: 'section-outdoor-trails', heading: 'Silverstone Ranch environmental risk' },
  '/buyers-checklist': { mediaId: 'section-buyer-tour', heading: 'Silverstone Ranch buyer checklist' },
  '/price-features': { mediaId: 'hero-listings-kitchen', heading: 'Silverstone Ranch price and features' },
  '/description': { mediaId: 'hero-guard-gated', heading: 'Silverstone Ranch community overview' },
  '/video': { mediaId: 'hero-guard-gated', heading: 'Silverstone Ranch video tour' },
}

export function getRouteHero(pathname: string): RouteHero | null {
  if (pathname.startsWith('/neighborhoods/')) {
    return {
      mediaId: 'section-neighborhood-street',
      heading: 'Silverstone Ranch neighborhood in Las Vegas 89131',
    }
  }
  return EXACT_ROUTE_HEROES[pathname] ?? null
}

export function mediaAltForHeading(id: MediaId, heading: string): string {
  return `${heading} — ${MEDIA_ASSETS[id].alt}`
}
