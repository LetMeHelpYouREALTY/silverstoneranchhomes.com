import {
  COMMUNITY_LOCATION,
  getCategoryById,
  type AmenityCategoryId,
} from '@/lib/nearby-amenities-config'

export type MapPlaceResult = {
  id: string
  name: string
  address: string
  lat: number
  lng: number
  mapsUrl?: string
}

const cache = new Map<string, Promise<MapPlaceResult[]>>()

function placeDisplayName(place: google.maps.places.Place): string {
  const displayName = place.displayName as string | { text?: string } | undefined
  if (typeof displayName === 'string') return displayName
  return displayName?.text ?? 'Nearby place'
}

function mapPlaceResult(place: google.maps.places.Place, categoryId: AmenityCategoryId, index: number): MapPlaceResult | null {
  const location = place.location
  if (!location) return null
  const coords = location.toJSON?.() ?? { lat: location.lat(), lng: location.lng() }
  return {
    id: place.id ?? `place-${categoryId}-${index}`,
    name: placeDisplayName(place),
    address: place.formattedAddress ?? '',
    lat: coords.lat,
    lng: coords.lng,
    mapsUrl: place.googleMapsURI ?? undefined,
  }
}

export function searchCategoryPlaces(center: google.maps.LatLngLiteral, categoryId: AmenityCategoryId): Promise<MapPlaceResult[]> {
  const category = getCategoryById(categoryId)
  let pending = cache.get(categoryId)
  if (!pending) {
    pending = (async () => {
      const { Place } = (await google.maps.importLibrary('places')) as google.maps.PlacesLibrary
      const { places } = await Place.searchNearby({
        fields: ['displayName', 'location', 'formattedAddress', 'googleMapsURI', 'id'],
        locationRestriction: {
          center,
          radius: COMMUNITY_LOCATION.searchRadiusMeters,
        },
        includedPrimaryTypes: category.placeTypes,
        maxResultCount: 10,
        rankPreference: 'POPULARITY' as unknown as google.maps.places.SearchNearbyRankPreference,
      })

      const mapped: MapPlaceResult[] = []
      places.forEach((place, index) => {
        const row = mapPlaceResult(place, categoryId, index)
        if (row) mapped.push(row)
      })
      return mapped
    })()
    pending.catch(() => {
      cache.delete(categoryId)
    })
    cache.set(categoryId, pending)
  }
  return pending
}
