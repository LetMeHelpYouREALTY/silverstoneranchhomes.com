export const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ??
  'https://calendly.com/drjanduffy/dr-duffy-private-15-min-conversation'

export const CALENDLY_BADGE = {
  text: 'Schedule time with me',
  color: '#0069ff',
  textColor: '#ffffff',
  branding: false,
} as const

export const CALENDLY_INLINE_HEIGHT = 700

/** Calendly events by page intent (scheduling_url values from the Calendly API). */
export const CALENDLY_EVENTS = {
  conversation: CALENDLY_URL,
  seller: 'https://calendly.com/drjanduffy/listing-consultation',
  buyer: 'https://calendly.com/drjanduffy/buyer-consultation-30-min',
  showing: 'https://calendly.com/drjanduffy/showing',
} as const

const SELLER_PATHS = ['/home-valuation', '/sell-with-agent']
const BUYER_PATHS = ['/buy-with-agent', '/buyers-checklist']
const SHOWING_PATHS = ['/book-tour', '/photos', '/video', '/map']

const matches = (pathname: string, paths: string[]) =>
  paths.some((p) => pathname === p || pathname.startsWith(`${p}/`))

/** Routes that mount their own inline CalendlySchedulingBlock. */
export const PAGES_WITH_INLINE_CALENDLY = [
  '/home-valuation',
  '/book-tour',
  '/request-info',
  '/contact',
  '/homes-for-sale',
]

export function calendlyEventForPath(pathname: string): string {
  if (matches(pathname, SELLER_PATHS)) return CALENDLY_EVENTS.seller
  if (matches(pathname, BUYER_PATHS)) return CALENDLY_EVENTS.buyer
  if (matches(pathname, SHOWING_PATHS)) return CALENDLY_EVENTS.showing
  return CALENDLY_EVENTS.conversation
}

/**
 * Calendly URL for the page's intent with UTM tags. utm_source is the bare
 * domain so the Calendly → FUB Worker can map the booking to this site.
 */
export function calendlyUrlFor(pathname: string, medium: string): string {
  const url = new URL(calendlyEventForPath(pathname))
  url.searchParams.set('hide_gdpr_banner', '1')
  url.searchParams.set('utm_source', 'silverstoneranchhomes.com')
  url.searchParams.set('utm_medium', medium)
  url.searchParams.set('utm_campaign', pathname === '/' ? 'home' : pathname.slice(1))
  return url.toString()
}
