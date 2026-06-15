import { unstable_cache } from 'next/cache'
import type { RealEstateListingEntry } from '@/lib/seo'
import { REALSCOUT_CONFIG, buildRealScoutListingUrl } from './config'
import type { RealScoutPropertiesResponse, SilverstoneListing } from './types'

type FetchListingsOptions = {
  /** When true, only return listings in Silverstone service ZIPs (89131, 89143). */
  hyperlocalOnly?: boolean
  limit?: number
}

function parsePrice(displayPrice: string): string | undefined {
  const digits = displayPrice.replace(/[^0-9]/g, '')
  return digits || undefined
}

function isHyperlocalAddress(address: string): boolean {
  return REALSCOUT_CONFIG.serviceZipCodes.some((zip) => address.includes(zip))
}

function toSilverstoneListing(property: RealScoutPropertiesResponse['properties'][number]): SilverstoneListing {
  return {
    id: property.id,
    name: `${property.full_address} — Silverstone Ranch Area`,
    url: buildRealScoutListingUrl(property.slug),
    description: `${property.subtitle}. ${property.listing_status} listing in Northwest Las Vegas.`,
    displayPrice: property.display_price,
    price: parsePrice(property.display_price),
    address: property.full_address,
    image: property.image_url ?? undefined,
    subtitle: property.subtitle,
    listingStatus: property.listing_status,
  }
}

async function fetchOfficeProperties(): Promise<RealScoutPropertiesResponse['properties']> {
  const { agentEncodedId, apiBase, defaultFilters } = REALSCOUT_CONFIG
  const params = new URLSearchParams({
    agent_encoded_id: agentEncodedId,
    statuses: defaultFilters.listingStatus,
    sort: defaultFilters.sortOrder,
    property_types: defaultFilters.propertyTypes,
    price_min: defaultFilters.priceMin,
    price_max: defaultFilters.priceMax,
  })

  const response = await fetch(`${apiBase}/office_properties?${params.toString()}`, {
    next: { revalidate: 3600 },
    headers: { Accept: 'application/json' },
  })

  if (!response.ok) {
    throw new Error(`RealScout API error: ${response.status}`)
  }

  const data = (await response.json()) as RealScoutPropertiesResponse
  return data.properties ?? []
}

const getCachedOfficeProperties = unstable_cache(
  fetchOfficeProperties,
  ['realscout-office-properties'],
  { revalidate: 3600, tags: ['realscout-listings'] },
)

/** Fallback enclave entries when live MLS feed has no 89131 matches. */
export function getEnclaveListingFallbacks(): RealEstateListingEntry[] {
  const base = 'https://www.silverstoneranchhomes.com'
  return [
    {
      name: 'Silverstone Ranch Homes — The Palms (89131)',
      url: `${base}/neighborhoods/the-palms`,
      description: 'Guard-gated estate homes in The Palms enclave, Silverstone Ranch.',
    },
    {
      name: 'Silverstone Ranch Homes — Pinehurst (89131)',
      url: `${base}/neighborhoods/pinehurst`,
      description: 'Gated townhome villas in Pinehurst, Silverstone Ranch.',
    },
    {
      name: 'Silverstone Ranch Homes — Silverlake (89131)',
      url: `${base}/neighborhoods/silverlake`,
      description: 'Guard-gated single-family homes in Silverlake.',
    },
  ]
}

export async function fetchSilverstoneListings(
  options: FetchListingsOptions = {},
): Promise<SilverstoneListing[]> {
  const { hyperlocalOnly = true, limit = 12 } = options

  try {
    const properties = await getCachedOfficeProperties()
    const filtered = hyperlocalOnly
      ? properties.filter((p) => isHyperlocalAddress(p.full_address))
      : properties

    const source = filtered.length > 0 ? filtered : properties.slice(0, limit)
    return source.slice(0, limit).map(toSilverstoneListing)
  } catch (error) {
    console.error('Failed to fetch RealScout listings:', error)
    return []
  }
}

export function listingsToSchemaEntries(listings: SilverstoneListing[]): RealEstateListingEntry[] {
  if (!listings.length) return getEnclaveListingFallbacks()
  return listings.map((listing) => ({
    name: listing.name,
    url: listing.url,
    description: listing.description,
    price: listing.price,
    address: listing.address,
  }))
}
