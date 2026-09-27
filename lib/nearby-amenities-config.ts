import { SILVERSTONE_GEO } from '@/lib/seo'

/** Hyperlocal anchor for Silverstone Ranch amenity map (Centennial Hills, ZIP 89131). */
export const COMMUNITY_LOCATION = {
  name: 'Silverstone Ranch',
  city: 'Las Vegas',
  state: 'NV',
  postalCode: '89131',
  /** Community center near the main park / guard-gate corridor (matches `SILVERSTONE_GEO` in lib/seo.ts). */
  center: {
    lat: SILVERSTONE_GEO.latitude,
    lng: SILVERSTONE_GEO.longitude,
  },
  /** Default map zoom when centered on the community. */
  defaultZoom: 14,
  /** Nearby search radius in meters for Places API queries. */
  searchRadiusMeters: 8000,
} as const

export type AmenityCategoryId =
  | 'parks'
  | 'grocery'
  | 'restaurants'
  | 'healthcare'
  | 'schools'
  | 'fitness'
  | 'golf'
  | 'cafes'
  | 'shopping'
  | 'pharmacies'
  | 'parking'

export type AmenityCategory = {
  id: AmenityCategoryId
  label: string
  /** Google Places (New) primary types for `searchNearby`. */
  placeTypes: string[]
  /** Legacy PlacesService `type` when using nearbySearch fallback. */
  legacyType?: string
}

/**
 * Category order for family-oriented guard-gated communities: recreation and essentials first,
 * then dining, medical, schools, and specialty retail.
 */
export const AMENITY_CATEGORIES: AmenityCategory[] = [
  { id: 'parks', label: 'Parks', placeTypes: ['park'], legacyType: 'park' },
  { id: 'grocery', label: 'Grocery', placeTypes: ['grocery_store', 'supermarket'], legacyType: 'grocery_or_supermarket' },
  { id: 'restaurants', label: 'Restaurants', placeTypes: ['restaurant'], legacyType: 'restaurant' },
  { id: 'healthcare', label: 'Healthcare', placeTypes: ['hospital', 'doctor'], legacyType: 'hospital' },
  { id: 'schools', label: 'Schools', placeTypes: ['school'], legacyType: 'school' },
  { id: 'fitness', label: 'Fitness', placeTypes: ['gym'], legacyType: 'gym' },
  { id: 'golf', label: 'Golf', placeTypes: ['golf_course'], legacyType: 'golf_course' },
  { id: 'cafes', label: 'Cafes', placeTypes: ['cafe'], legacyType: 'cafe' },
  { id: 'shopping', label: 'Shopping', placeTypes: ['shopping_mall'], legacyType: 'shopping_mall' },
  { id: 'pharmacies', label: 'Pharmacies', placeTypes: ['pharmacy'], legacyType: 'pharmacy' },
  { id: 'parking', label: 'Parking', placeTypes: ['parking'], legacyType: 'parking' },
]

export function getCategoryById(id: AmenityCategoryId): AmenityCategory {
  const category = AMENITY_CATEGORIES.find((c) => c.id === id)
  if (!category) {
    const fallback: AmenityCategory = AMENITY_CATEGORIES[0]
    return fallback
  }
  return category
}

export function buildMapsEmbedFallbackUrl(): string {
  const { lat, lng } = COMMUNITY_LOCATION.center
  return `https://www.google.com/maps?q=${lat},${lng}&z=${COMMUNITY_LOCATION.defaultZoom}&output=embed`
}

export function buildDirectionsUrl(placeQuery: string): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(placeQuery)}`
}
