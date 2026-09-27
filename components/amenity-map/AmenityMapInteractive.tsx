'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { GoogleMap, InfoWindow, Marker, useJsApiLoader } from '@react-google-maps/api'
import {
  COMMUNITY_LOCATION,
  buildDirectionsUrl,
  getCategoryById,
  type AmenityCategoryId,
} from '@/lib/nearby-amenities-config'
import { AmenityMapFallback } from '@/components/amenity-map/AmenityMapFallback'

export type MapPlaceResult = {
  id: string
  name: string
  address: string
  lat: number
  lng: number
  rating?: number
  mapsUrl?: string
}

const mapContainerStyle = { width: '100%', height: '100%', minHeight: 420 }

type AmenityMapInteractiveProps = {
  activeCategory: AmenityCategoryId
  mapAriaLabel: string
}

async function fetchPlacesForCategory(
  categoryId: AmenityCategoryId,
  map: google.maps.Map,
): Promise<MapPlaceResult[]> {
  const category = getCategoryById(categoryId)
  const center = COMMUNITY_LOCATION.center

  try {
    const placesLibrary = (await google.maps.importLibrary('places')) as google.maps.PlacesLibrary
    const PlaceCtor = placesLibrary.Place

    if (PlaceCtor && 'searchNearby' in PlaceCtor) {
      const searchNearby = PlaceCtor.searchNearby as (request: {
        fields: string[]
        locationRestriction: { center: google.maps.LatLngLiteral; radius: number }
        includedPrimaryTypes: string[]
        maxResultCount: number
      }) => Promise<{ places: google.maps.places.Place[] }>

      const { places } = await searchNearby({
        fields: ['displayName', 'location', 'formattedAddress', 'googleMapsURI', 'rating', 'id'],
        locationRestriction: {
          center,
          radius: COMMUNITY_LOCATION.searchRadiusMeters,
        },
        includedPrimaryTypes: category.placeTypes,
        maxResultCount: 12,
      })

      const mapped: MapPlaceResult[] = []
      places.forEach((place, index) => {
        const location = place.location
        if (!location) return
        const displayName = place.displayName as string | { text?: string } | undefined
        const name =
          typeof displayName === 'string'
            ? displayName
            : displayName?.text ?? 'Nearby place'
        mapped.push({
          id: place.id ?? `place-${categoryId}-${index}`,
          name,
          address: place.formattedAddress ?? '',
          lat: location.lat(),
          lng: location.lng(),
          rating: place.rating ?? undefined,
          mapsUrl: place.googleMapsURI ?? undefined,
        })
      })

      if (mapped.length > 0) return mapped
    }
  } catch {
    // Fall through to legacy search.
  }

  const service = new google.maps.places.PlacesService(map)
  const legacyType = category.legacyType ?? category.placeTypes[0]
  const results = await new Promise<google.maps.places.PlaceResult[]>((resolve) => {
    service.nearbySearch(
      {
        location: center,
        radius: COMMUNITY_LOCATION.searchRadiusMeters,
        type: legacyType,
      },
      (places, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && places?.length) {
          resolve(places)
        } else {
          resolve([])
        }
      },
    )
  })

  const mapped: MapPlaceResult[] = []
  results.forEach((place, index) => {
    const location = place.geometry?.location
    if (!location) return
    mapped.push({
      id: place.place_id ?? `legacy-${categoryId}-${index}`,
      name: place.name ?? 'Nearby place',
      address: place.vicinity ?? '',
      lat: location.lat(),
      lng: location.lng(),
      rating: place.rating ?? undefined,
      mapsUrl: place.url ?? undefined,
    })
  })
  return mapped
}

export default function AmenityMapInteractive({
  activeCategory,
  mapAriaLabel,
}: AmenityMapInteractiveProps) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ''
  const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID

  const { isLoaded, loadError } = useJsApiLoader({
    id: 'silverstone-amenity-map',
    googleMapsApiKey: apiKey,
    libraries: ['places'],
    preventGoogleFontsLoading: true,
  })

  const [map, setMap] = useState<google.maps.Map | null>(null)
  const [places, setPlaces] = useState<MapPlaceResult[]>([])
  const [loadingPlaces, setLoadingPlaces] = useState(false)
  const [selectedPlaceId, setSelectedPlaceId] = useState<string | null>(null)
  const [searchFailed, setSearchFailed] = useState(false)

  const center = useMemo(() => COMMUNITY_LOCATION.center, [])
  const selectedPlace = places.find((p) => p.id === selectedPlaceId) ?? null

  const loadCategory = useCallback(async (categoryId: AmenityCategoryId, mapInstance: google.maps.Map) => {
    setLoadingPlaces(true)
    setSelectedPlaceId(null)
    try {
      const nextPlaces = await fetchPlacesForCategory(categoryId, mapInstance)
      setPlaces(nextPlaces)
      setSearchFailed(nextPlaces.length === 0)
    } catch {
      setPlaces([])
      setSearchFailed(true)
    } finally {
      setLoadingPlaces(false)
    }
  }, [])

  useEffect(() => {
    if (!map || !isLoaded) return
    void loadCategory(activeCategory, map)
  }, [activeCategory, isLoaded, loadCategory, map])

  if (loadError) {
    return <AmenityMapFallback title={mapAriaLabel} />
  }

  if (!isLoaded) {
    return (
      <div
        className="flex h-[420px] items-center justify-center rounded-2xl border border-slate-200 bg-slate-100 text-sm text-slate-600"
        role="status"
      >
        Loading Google Maps…
      </div>
    )
  }

  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm"
      style={{ height: 420 }}
    >
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={COMMUNITY_LOCATION.defaultZoom}
        options={{
          disableDefaultUI: false,
          zoomControl: true,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: true,
          ...(mapId ? { mapId } : {}),
        }}
        onLoad={(instance) => setMap(instance)}
      >
        <Marker
          position={center}
          title={COMMUNITY_LOCATION.name}
          label={{ text: 'SR', color: '#ffffff', fontWeight: '700' }}
          zIndex={1000}
        />
        {places.map((place) => (
          <Marker
            key={place.id}
            position={{ lat: place.lat, lng: place.lng }}
            title={place.name}
            onClick={() => setSelectedPlaceId(place.id)}
          />
        ))}
        {selectedPlace ? (
          <InfoWindow
            position={{ lat: selectedPlace.lat, lng: selectedPlace.lng }}
            onCloseClick={() => setSelectedPlaceId(null)}
          >
            <div className="max-w-xs space-y-1 text-sm text-slate-800">
              <p className="font-semibold">{selectedPlace.name}</p>
              {selectedPlace.rating != null ? (
                <p className="text-slate-600">Rating: {selectedPlace.rating.toFixed(1)}</p>
              ) : null}
              {selectedPlace.address ? <p>{selectedPlace.address}</p> : null}
              <a
                href={
                  selectedPlace.mapsUrl ?? buildDirectionsUrl(`${selectedPlace.name} ${selectedPlace.address}`)
                }
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 hover:underline"
              >
                Directions
              </a>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
      {loadingPlaces ? (
        <div className="pointer-events-none absolute inset-x-0 top-0 bg-blue-600/90 px-3 py-1 text-center text-xs font-semibold text-white">
          Updating markers…
        </div>
      ) : null}
      {searchFailed && !loadingPlaces ? (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-slate-900/80 px-3 py-2 text-center text-xs text-white">
          Live Places results unavailable—see the curated list below for verified nearby destinations.
        </div>
      ) : null}
    </div>
  )
}
