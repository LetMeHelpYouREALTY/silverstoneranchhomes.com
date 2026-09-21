import { CONTACT_INFO } from './contact-info'

/**
 * Cloudflare Hosted Images is the primary CDN. Git files in /public/images/sections
 * are the backup and the upload source (`scripts/upload-cloudflare-images.mjs`).
 *
 * Delivery format (hosted images, not zone transformations):
 *   https://imagedelivery.net/<ACCOUNT_HASH>/<IMAGE_ID>/<VARIANT_NAME>
 * Docs:
 *   https://developers.cloudflare.com/images/optimization/hosted-images/serve-uploaded-images/
 *   https://developers.cloudflare.com/images/storage/upload-images/upload-custom-path/
 *
 * Custom IDs match MEDIA_IDS. Default variant is `public`. Do not use flexible
 * variants (`w=400`) unless flexible variants are enabled on the account.
 *
 * Live pages keep git URLs until NEXT_PUBLIC_CLOUDFLARE_IMAGES_DELIVERY=1 so
 * OG/schema crawlers never hit imagedelivery 404s (cf-images err=9404) before upload.
 */
export const CLOUDFLARE_IMAGES_ACCOUNT_ID = '2cc579c1ec9e426ed585e933ebf4753b'
export const CLOUDFLARE_IMAGES_ACCOUNT_HASH = 'byE6BTe9lNqo21V57n4aPQ'
export const CLOUDFLARE_IMAGES_HASH =
  process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_HASH?.trim() || CLOUDFLARE_IMAGES_ACCOUNT_HASH
export const CLOUDFLARE_IMAGES_VARIANT =
  process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_VARIANT?.trim() || 'public'
export const CLOUDFLARE_IMAGES_DELIVERY_ENABLED =
  process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_DELIVERY?.trim() === '1'

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
  'section-finance',
  'section-hospital',
  'section-shopping',
  'section-research',
  'section-recreation',
  'section-evening-outdoor',
  'section-commute',
  'section-events',
  'section-desert-horizon',
  'section-video-tour',
  'section-floorplan-interior',
  'section-smart-home',
  'section-architecture',
  'section-faq',
  'section-maintenance',
  'section-insurance',
  'section-gallery',
  'section-resources',
  'section-vendors',
  'section-heat',
  'section-comparison',
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
  'section-finance': {
    id: 'section-finance',
    localPath: '/images/sections/section-finance.jpg',
    alt: 'Home keys and closing documents on a Silverstone Ranch porch in Las Vegas',
    caption: 'Financing, insurance, and move-in logistics for 89131 purchases.',
    width: 1920,
    height: 1080,
  },
  'section-hospital': {
    id: 'section-hospital',
    localPath: '/images/sections/section-hospital.jpg',
    alt: 'Centennial Hills hospital campus exterior near Silverstone Ranch, Las Vegas',
    caption: 'Centennial Hills Hospital is a short drive from Silverstone Ranch.',
    width: 1920,
    height: 1080,
  },
  'section-shopping': {
    id: 'section-shopping',
    localPath: '/images/sections/section-shopping.jpg',
    alt: 'Centennial Hills shopping plaza near Silverstone Ranch in Northwest Las Vegas',
    caption: 'Shopping and services along the 215 Beltway near ZIP 89131.',
    width: 1920,
    height: 1080,
  },
  'section-research': {
    id: 'section-research',
    localPath: '/images/sections/section-research.jpg',
    alt: 'Market research desk for Silverstone Ranch pricing and HOA due diligence',
    caption: 'Data-backed pricing and disclosure review from Dr. Jan Duffy.',
    width: 1920,
    height: 1080,
  },
  'section-recreation': {
    id: 'section-recreation',
    localPath: '/images/sections/section-recreation.jpg',
    alt: 'Pickleball courts and ramada recreation in a Las Vegas gated community',
    caption: 'On-site recreation inside Silverstone Ranch.',
    width: 1920,
    height: 1080,
  },
  'section-evening-outdoor': {
    id: 'section-evening-outdoor',
    localPath: '/images/sections/section-evening-outdoor.jpg',
    alt: 'Twilight backyard with pergola and mountain views in Silverstone Ranch, Las Vegas',
    caption: 'Outdoor living that buyers tour after work in Centennial Hills.',
    width: 1920,
    height: 1080,
  },
  'section-commute': {
    id: 'section-commute',
    localPath: '/images/sections/section-commute.jpg',
    alt: '215 Beltway commute from Centennial Hills near Silverstone Ranch, Las Vegas',
    caption: 'Silverstone Ranch sits minutes from the 215 Beltway in ZIP 89131.',
    width: 1920,
    height: 1080,
  },
  'section-events': {
    id: 'section-events',
    localPath: '/images/sections/section-events.jpg',
    alt: 'Twilight HOA gathering on a Silverstone Ranch clubhouse lawn in Las Vegas',
    caption: 'HOA programming and seasonal events inside Silverstone Ranch.',
    width: 1920,
    height: 1080,
  },
  'section-desert-horizon': {
    id: 'section-desert-horizon',
    localPath: '/images/sections/section-desert-horizon.jpg',
    alt: 'Floyd Lamb Park lagoon and Spring Mountains north of Silverstone Ranch',
    caption: 'Tule Springs and Floyd Lamb Park sit minutes north of Silverstone Ranch.',
    width: 1920,
    height: 1080,
  },
  'section-video-tour': {
    id: 'section-video-tour',
    localPath: '/images/sections/section-video-tour.jpg',
    alt: 'Living room set for a Silverstone Ranch virtual home tour in Las Vegas',
    caption: 'Watch community video tours, then book a live walk-through with Dr. Jan Duffy.',
    width: 1920,
    height: 1080,
  },
  'section-floorplan-interior': {
    id: 'section-floorplan-interior',
    localPath: '/images/sections/section-floorplan-interior.jpg',
    alt: 'Open great room and kitchen floor plan in a Silverstone Ranch Las Vegas home',
    caption: 'Open indoor-outdoor floor plans buyers compare in ZIP 89131.',
    width: 1920,
    height: 1080,
  },
  'section-smart-home': {
    id: 'section-smart-home',
    localPath: '/images/sections/section-smart-home.jpg',
    alt: 'Smart-home controls in a Silverstone Ranch desert contemporary residence',
    caption: 'Energy and smart-home upgrades that show up in Silverstone Ranch valuations.',
    width: 1920,
    height: 1080,
  },
  'section-architecture': {
    id: 'section-architecture',
    localPath: '/images/sections/section-architecture.jpg',
    alt: 'Mediterranean Silverstone Ranch home elevation with clay tile roof in Las Vegas',
    caption: 'Spanish and Mediterranean elevations that define Silverstone Ranch streetscapes.',
    width: 1920,
    height: 1080,
  },
  'section-faq': {
    id: 'section-faq',
    localPath: '/images/sections/section-faq.jpg',
    alt: 'Consultation table with market questions prepared for Silverstone Ranch buyer FAQs in Las Vegas',
    caption: 'Answers for Silverstone Ranch buyers and sellers, prepared by Dr. Jan Duffy.',
    width: 1920,
    height: 1080,
  },
  'section-maintenance': {
    id: 'section-maintenance',
    localPath: '/images/sections/section-maintenance.jpg',
    alt: 'Seasonal pool and HVAC maintenance at a clay-tile Silverstone Ranch home in Las Vegas',
    caption: 'Seasonal maintenance that 89131 owners plan around desert heat and monsoon weather.',
    width: 1920,
    height: 1080,
  },
  'section-insurance': {
    id: 'section-insurance',
    localPath: '/images/sections/section-insurance.jpg',
    alt: 'Homeownership documents and keys on a Silverstone Ranch patio in Northwest Las Vegas',
    caption: 'Insurance, disclosures, and ownership paperwork for Silverstone Ranch purchases.',
    width: 1920,
    height: 1080,
  },
  'section-gallery': {
    id: 'section-gallery',
    localPath: '/images/sections/section-gallery.jpg',
    alt: 'Framed architectural photos displayed in a Silverstone Ranch Las Vegas home',
    caption: 'Lifestyle photography that buyers use to compare Silverstone Ranch homes.',
    width: 1920,
    height: 1080,
  },
  'section-resources': {
    id: 'section-resources',
    localPath: '/images/sections/section-resources.jpg',
    alt: 'Community resource binders and neighborhood map on a Silverstone Ranch desk',
    caption: 'HOA, vendor, and market resources for Silverstone Ranch due diligence.',
    width: 1920,
    height: 1080,
  },
  'section-vendors': {
    id: 'section-vendors',
    localPath: '/images/sections/section-vendors.jpg',
    alt: 'Trade tools staged on a Silverstone Ranch driveway after HOA-approved work in Las Vegas',
    caption: 'Vendor coordination for inspections, landscaping, and systems in ZIP 89131.',
    width: 1920,
    height: 1080,
  },
  'section-heat': {
    id: 'section-heat',
    localPath: '/images/sections/section-heat.jpg',
    alt: 'Shaded ramada and wide eaves for heat mitigation on a Silverstone Ranch desert home',
    caption: 'Heat, monsoon, and wildfire-readiness details buyers review in Centennial Hills.',
    width: 1920,
    height: 1080,
  },
  'section-comparison': {
    id: 'section-comparison',
    localPath: '/images/sections/section-comparison.jpg',
    alt: 'Aerial of neighboring Northwest Las Vegas tile-roof neighborhoods near Silverstone Ranch',
    caption: 'Compare Silverstone Ranch street grids with nearby Northwest Las Vegas communities.',
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

export function isCloudflareDeliveryUrl(url: string): boolean {
  return url.startsWith('https://imagedelivery.net/')
}

/** Hosted Images URL using the account hash, custom image ID, and named variant. */
export function cloudflareImageUrl(id: MediaId): string {
  return `https://imagedelivery.net/${CLOUDFLARE_IMAGES_HASH}/${id}/${CLOUDFLARE_IMAGES_VARIANT}`
}

export function getMediaFallbackUrl(id: MediaId): string {
  return MEDIA_ASSETS[id].localPath
}

/** Serve from Cloudflare Hosted Images after upload; otherwise the git-backed public file. */
export function getMediaUrl(id: MediaId): string {
  if (CLOUDFLARE_IMAGES_DELIVERY_ENABLED && CLOUDFLARE_IMAGES_HASH) {
    return cloudflareImageUrl(id)
  }
  return getMediaFallbackUrl(id)
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
  '/photos': { mediaId: 'section-architecture', heading: 'Silverstone Ranch lifestyle gallery' },
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
  '/resources': { mediaId: 'section-hoa-clubhouse', heading: 'Silverstone Ranch resources' },
  '/resources/las-vegas-hoa': { mediaId: 'section-hoa-clubhouse', heading: 'Las Vegas HOA guides' },
  '/silverstone-ranch/schools': { mediaId: 'hero-schools-campus', heading: 'Schools near Silverstone Ranch' },
  '/environmental-risk': { mediaId: 'section-desert-horizon', heading: 'Silverstone Ranch environmental risk' },
  '/buyers-checklist': { mediaId: 'section-buyer-tour', heading: 'Silverstone Ranch buyer checklist' },
  '/price-features': { mediaId: 'section-floorplan-interior', heading: 'Silverstone Ranch price and features' },
  '/description': { mediaId: 'section-architecture', heading: 'Silverstone Ranch community overview' },
  '/video': { mediaId: 'section-video-tour', heading: 'Silverstone Ranch video tour' },
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

/** Map an H1/H2/H3 to the closest heading-appropriate photo. */
export function headingMediaFromText(heading: string): MediaId {
  const h = heading.toLowerCase()
  if (/(faq|frequently asked|questions)/.test(h)) return 'section-faq'
  if (/(golf|fairway)/.test(h)) return 'hero-golf-fairway'
  if (/(school|education|campus|ccsd|enrollment)/.test(h)) return 'hero-schools-campus'
  if (/(map|location|direction|office pin|where we)/.test(h)) return 'hero-map-location'
  if (/(commute|beltway|transit|transport|getting around)/.test(h)) return 'section-commute'
  if (/(insurance|disclosure|policy)/.test(h)) return 'section-insurance'
  if (/(hospital|healthcare)/.test(h)) return 'section-hospital'
  if (/(compar|nearby communit|vs\.|versus|peer)/.test(h)) return 'section-comparison'
  if (/(vendor|contractor|trades|support network|service provider)/.test(h)) return 'section-vendors'
  if (/(maintenance|seasonal|upkeep|hvac service)/.test(h)) return 'section-maintenance'
  if (/(heat|monsoon|wildfire|wind|flood|climate)/.test(h)) return 'section-heat'
  if (/(gallery|photo|photograph|curated photo)/.test(h)) return 'section-gallery'
  if (/(resource|table of contents|directory|next step|deep dive)/.test(h)) return 'section-resources'
  if (/(shop|dining|grocery|centennial center|convenien)/.test(h)) return 'section-shopping'
  if (/(event|calendar|programming|social calendar)/.test(h)) return 'section-events'
  if (/(environment|desert|risk|resilience|floyd lamb|tule)/.test(h)) return 'section-desert-horizon'
  if (/(hoa|clubhouse|document|cc&r|architectural)/.test(h)) return 'section-hoa-clubhouse'
  if (/(pool|amenit|recreation|pickleball|trail|outdoor|wellness|park)/.test(h)) {
    if (/(trail|park|wellness|outdoor)/.test(h)) return 'section-outdoor-trails'
    if (/(pickle|court|recreation)/.test(h)) return 'section-recreation'
    return 'hero-amenities-pool'
  }
  if (/(market insight|trendline|outlook|forecast)/.test(h)) return 'section-research'
  if (/(video|virtual tour|walk-through|walkthrough)/.test(h)) return 'section-video-tour'
  if (/(sell|staging|listing|seller|presentation)/.test(h)) return 'section-seller-staging'
  if (/(buy|tour|buyer|checklist|relocation|journey)/.test(h)) return 'section-buyer-tour'
  if (/(valuat|pric|market|finance|loan|closing|research|forecast)/.test(h)) {
    if (/(finance|loan|closing|key)/.test(h)) return 'section-finance'
    if (/(research|forecast|market)/.test(h)) return 'section-research'
    return 'hero-home-valuation'
  }
  if (/(contact|agent|office|hours|jan duffy)/.test(h)) return 'hero-contact-office'
  if (/(aerial|area|neighborhood|village|street|palms|pinehurst|tuscany)/.test(h)) {
    return 'section-neighborhood-street'
  }
  if (/(architect|elevation|curb appeal|spanish|mediterranean)/.test(h)) return 'section-architecture'
  if (/(floor plan|great room|specification|interior design|kitchen refresh)/.test(h)) {
    return 'section-floorplan-interior'
  }
  if (/(smart home|energy|hvac|solar|thermostat|sustainability)/.test(h)) return 'section-smart-home'
  if (/(kitchen|interior|homes for sale|inventory)/.test(h)) return 'hero-listings-kitchen'
  if (/(evening|twilight|backyard|fire)/.test(h)) return 'section-evening-outdoor'
  return 'hero-guard-gated'
}

export function getRouteSectionVisuals(pathname: string): RouteHero[] {
  const hero = getRouteHero(pathname)
  if (!hero) return []
  const extras: Record<string, RouteHero[]> = {
    '/homes-for-sale': [
      { mediaId: 'hero-listings-kitchen', heading: 'Live Silverstone Ranch listings' },
      { mediaId: 'section-buyer-tour', heading: 'Buyer journey and private tours' },
      { mediaId: 'section-comparison', heading: 'Compare Silverstone neighborhoods' },
    ],
    '/amenities': [
      { mediaId: 'hero-amenities-pool', heading: 'Core community amenities' },
      { mediaId: 'section-recreation', heading: 'Recreation and clubhouse programming' },
      { mediaId: 'section-outdoor-trails', heading: 'Trails and outdoor living' },
    ],
    '/map': [
      { mediaId: 'hero-map-location', heading: 'Silverstone Ranch location' },
      { mediaId: 'section-shopping', heading: 'Nearby shopping and dining' },
      { mediaId: 'section-hospital', heading: 'Centennial Hills Hospital' },
    ],
    '/contact': [
      { mediaId: 'hero-contact-office', heading: 'Office and appointments' },
      { mediaId: 'section-buyer-tour', heading: 'Book a Silverstone Ranch tour' },
      { mediaId: 'section-finance', heading: 'Valuation and logistics' },
    ],
    '/schools': [
      { mediaId: 'hero-schools-campus', heading: 'CCSD campuses near Silverstone Ranch' },
      { mediaId: 'section-recreation', heading: 'After-school recreation nearby' },
      { mediaId: 'hero-map-location', heading: 'Verify zoning by street' },
    ],
    '/sell-with-agent': [
      { mediaId: 'section-seller-staging', heading: 'Presentation and staging' },
      { mediaId: 'section-research', heading: 'Pricing strategy' },
      { mediaId: 'hero-home-valuation', heading: 'Home valuation' },
    ],
    '/buy-with-agent': [
      { mediaId: 'section-buyer-tour', heading: 'Buyer representation' },
      { mediaId: 'hero-listings-kitchen', heading: 'Homes for sale' },
      { mediaId: 'section-finance', heading: 'Offer and financing prep' },
    ],
    '/market-insights': [
      { mediaId: 'section-research', heading: 'Market data deep dive' },
      { mediaId: 'hero-home-valuation', heading: 'Pricing context' },
      { mediaId: 'section-neighborhood-street', heading: 'Sub-association differences' },
    ],
    '/golf-course-status': [
      { mediaId: 'hero-golf-fairway', heading: 'Golf course status' },
      { mediaId: 'section-outdoor-trails', heading: 'Fairway-adjacent lots' },
      { mediaId: 'section-hoa-clubhouse', heading: 'HOA disclosures' },
    ],
    '/resources/las-vegas-hoa/silverstone-ranch': [
      { mediaId: 'section-hoa-clubhouse', heading: 'HOA fees and documents' },
      { mediaId: 'hero-amenities-pool', heading: 'Amenity highlights' },
      { mediaId: 'hero-schools-campus', heading: 'School assignments' },
    ],
    '/home-valuation': [
      { mediaId: 'hero-home-valuation', heading: 'Silverstone Ranch home valuation' },
      { mediaId: 'section-research', heading: 'Comps and pricing research' },
      { mediaId: 'section-seller-staging', heading: 'Seller presentation' },
    ],
    '/agent': [
      { mediaId: 'hero-contact-office', heading: 'Meet Dr. Jan Duffy' },
      { mediaId: 'section-buyer-tour', heading: 'Buyer representation' },
      { mediaId: 'section-seller-staging', heading: 'Listing strategy' },
    ],
    '/book-tour': [
      { mediaId: 'section-buyer-tour', heading: 'Book a private tour' },
      { mediaId: 'hero-listings-kitchen', heading: 'Homes you can preview' },
      { mediaId: 'hero-map-location', heading: 'Guard-gated access' },
    ],
    '/request-info': [
      { mediaId: 'hero-home-valuation', heading: 'Request market information' },
      { mediaId: 'section-research', heading: 'HOA and disclosure packets' },
      { mediaId: 'section-finance', heading: 'Financing and logistics' },
    ],
    '/area-info': [
      { mediaId: 'hero-aerial-community', heading: 'Where Silverstone Ranch fits' },
      { mediaId: 'section-commute', heading: 'Commute and the 215 Beltway' },
      { mediaId: 'section-shopping', heading: 'Dining and daily convenience' },
    ],
    '/area-insight': [
      { mediaId: 'hero-aerial-community', heading: 'Silverstone Ranch area guide' },
      { mediaId: 'section-commute', heading: 'Northwest Las Vegas access' },
      { mediaId: 'section-desert-horizon', heading: 'Tule Springs outdoor access' },
    ],
    '/photos': [
      { mediaId: 'section-gallery', heading: 'Lifestyle photography' },
      { mediaId: 'section-architecture', heading: 'Architectural highlights' },
      { mediaId: 'section-floorplan-interior', heading: 'Interior living spaces' },
    ],
    '/environmental-risk': [
      { mediaId: 'section-heat', heading: 'Heat and monsoon readiness' },
      { mediaId: 'section-desert-horizon', heading: 'Desert environment context' },
      { mediaId: 'section-maintenance', heading: 'Seasonal maintenance' },
    ],
    '/buyers-checklist': [
      { mediaId: 'section-buyer-tour', heading: 'Buyer checklist' },
      { mediaId: 'section-finance', heading: 'Offer and financing prep' },
      { mediaId: 'section-hoa-clubhouse', heading: 'HOA due diligence' },
    ],
    '/price-features': [
      { mediaId: 'section-floorplan-interior', heading: 'Residence and lifestyle features' },
      { mediaId: 'section-architecture', heading: 'Typical Silverstone elevations' },
      { mediaId: 'section-smart-home', heading: 'Energy and smart-home upgrades' },
    ],
    '/description': [
      { mediaId: 'section-architecture', heading: 'Architecture and setting' },
      { mediaId: 'section-neighborhood-street', heading: 'Neighborhood profiles' },
      { mediaId: 'hero-amenities-pool', heading: 'Lifestyle pillars' },
    ],
    '/video': [
      { mediaId: 'section-video-tour', heading: 'Property virtual tour' },
      { mediaId: 'section-architecture', heading: 'Home exteriors on camera' },
      { mediaId: 'section-buyer-tour', heading: 'Schedule an in-person tour' },
    ],
    '/silverstone-ranch': [
      { mediaId: 'hero-guard-gated', heading: 'Silverstone Ranch community guide' },
      { mediaId: 'hero-amenities-pool', heading: 'Lifestyle pillars' },
      { mediaId: 'section-neighborhood-street', heading: 'Neighborhoods inside the ranch' },
    ],
  }
  if (pathname.startsWith('/neighborhoods/')) {
    return [
      { mediaId: 'section-neighborhood-street', heading: 'Neighborhood streetscape' },
      { mediaId: 'hero-amenities-pool', heading: 'Master-plan amenities' },
      { mediaId: 'section-hoa-clubhouse', heading: 'HOA and sub-association context' },
    ]
  }
  return extras[pathname] ?? [
    hero,
    { mediaId: 'section-buyer-tour', heading: 'Private tours in Silverstone Ranch' },
    { mediaId: 'hero-map-location', heading: 'Map and directions' },
  ]
}
