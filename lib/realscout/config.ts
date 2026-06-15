/** RealScout widget + server fetch configuration (Dr. Jan Duffy). */
export const REALSCOUT_CONFIG = {
  agentEncodedId: 'QWdlbnQtMjI1MDUw',
  subdomain: 'drjanduffy',
  apiBase: 'https://www.realscout.com/widgets/api',
  /** Silverstone Ranch service ZIP codes for hyperlocal filtering. */
  serviceZipCodes: ['89131', '89143'] as const,
  defaultFilters: {
    listingStatus: 'For Sale',
    sortOrder: 'NEWEST',
    propertyTypes: 'SFR',
    priceMin: '500000',
    priceMax: '1500000',
  },
} as const

export function buildRealScoutListingUrl(slug: string): string {
  return `https://${REALSCOUT_CONFIG.subdomain}.realscout.com/homesearch/listings/${slug}`
}
