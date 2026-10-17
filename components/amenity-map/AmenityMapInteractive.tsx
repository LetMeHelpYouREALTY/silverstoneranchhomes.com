'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import {
  COMMUNITY_LOCATION,
  buildDirectionsUrl,
  type AmenityCategoryId,
} from '@/lib/nearby-amenities-config'
import { loadGoogleMaps, mapsAuthFailed } from '@/lib/load-google-maps'
import { searchCategoryPlaces, type MapPlaceResult } from '@/lib/search-nearby-places'
import { AmenityMapFallback } from '@/components/amenity-map/AmenityMapFallback'
import { curatedPlacesForCategory } from '@/lib/curated-nearby-places'

type AmenityMapInteractiveProps = {
  activeCategory: AmenityCategoryId
  mapAriaLabel: string
}

const MAP_HEIGHT = 420

export default function AmenityMapInteractive({
  activeCategory,
  mapAriaLabel,
}: AmenityMapInteractiveProps) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ''
  const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID

  const mapContainerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<google.maps.Map | null>(null)
  const markersRef = useRef<google.maps.Marker[]>([])
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null)

  const [useFallback, setUseFallback] = useState(() => mapsAuthFailed || !apiKey)
  const [loadingMap, setLoadingMap] = useState(Boolean(apiKey) && !mapsAuthFailed)
  const [loadingPlaces, setLoadingPlaces] = useState(false)
  const [searchFailed, setSearchFailed] = useState(false)

  const clearMarkers = useCallback(() => {
    markersRef.current.forEach((marker) => marker.setMap(null))
    markersRef.current = []
    infoWindowRef.current?.close()
  }, [])

  const showPlaceInfo = useCallback((place: MapPlaceResult) => {
    const map = mapRef.current
    if (!map) return
    if (!infoWindowRef.current) {
      infoWindowRef.current = new google.maps.InfoWindow()
    }
    const container = document.createElement('div')
    container.className = 'max-w-xs space-y-1 text-sm text-slate-800'

    const title = document.createElement('p')
    title.className = 'font-semibold'
    title.textContent = place.name
    container.appendChild(title)

    if (place.address) {
      const addr = document.createElement('p')
      addr.textContent = place.address
      container.appendChild(addr)
    }

    const link = document.createElement('a')
    link.href = place.mapsUrl ?? buildDirectionsUrl(`${place.name} ${place.address}`)
    link.target = '_blank'
    link.rel = 'noopener noreferrer'
    link.className = 'font-semibold text-blue-600 hover:underline'
    link.textContent = 'Directions'
    container.appendChild(link)

    infoWindowRef.current.setContent(container)
    infoWindowRef.current.setPosition({ lat: place.lat, lng: place.lng })
    infoWindowRef.current.open({ map })
  }, [])

  const renderMarkers = useCallback(
    (categoryPlaces: MapPlaceResult[]) => {
      const map = mapRef.current
      if (!map) return
      clearMarkers()

      const center = COMMUNITY_LOCATION.center
      const communityMarker = new google.maps.Marker({
        position: center,
        map,
        title: COMMUNITY_LOCATION.name,
        label: { text: 'SR', color: '#ffffff', fontWeight: '700' },
        zIndex: 1000,
      })
      markersRef.current.push(communityMarker)

      categoryPlaces.forEach((place) => {
        const marker = new google.maps.Marker({
          position: { lat: place.lat, lng: place.lng },
          map,
          title: place.name,
        })
        marker.addListener('click', () => showPlaceInfo(place))
        markersRef.current.push(marker)
      })
    },
    [clearMarkers, showPlaceInfo],
  )

  const loadCategory = useCallback(
    async (categoryId: AmenityCategoryId) => {
      if (!mapRef.current || useFallback) return
      setLoadingPlaces(true)
      setSearchFailed(false)
      try {
        const nextPlaces = await searchCategoryPlaces(COMMUNITY_LOCATION.center, categoryId)
        renderMarkers(nextPlaces)
        setSearchFailed(nextPlaces.length === 0)
      } catch {
        clearMarkers()
        const map = mapRef.current
        if (map) {
          const center = COMMUNITY_LOCATION.center
          const communityMarker = new google.maps.Marker({
            position: center,
            map,
            title: COMMUNITY_LOCATION.name,
            label: { text: 'SR', color: '#ffffff', fontWeight: '700' },
            zIndex: 1000,
          })
          markersRef.current = [communityMarker]
        }
        setSearchFailed(true)
      } finally {
        setLoadingPlaces(false)
      }
    },
    [clearMarkers, renderMarkers, useFallback],
  )

  const enterFallback = useCallback(() => {
    setUseFallback(true)
    setLoadingMap(false)
    if (mapRef.current) {
      clearMarkers()
      mapRef.current = null
    }
  }, [clearMarkers])

  useEffect(() => {
    if (useFallback || !apiKey) return

    const onAuthFailure = () => enterFallback()
    window.addEventListener('gmaps:auth-failure', onAuthFailure)

    if (mapsAuthFailed) {
      enterFallback()
      return () => window.removeEventListener('gmaps:auth-failure', onAuthFailure)
    }

    let cancelled = false
    setLoadingMap(true)
    loadGoogleMaps(apiKey)
      .then(() => {
        if (cancelled || !mapContainerRef.current) return
        const map = new google.maps.Map(mapContainerRef.current, {
          center: COMMUNITY_LOCATION.center,
          zoom: COMMUNITY_LOCATION.defaultZoom,
          disableDefaultUI: false,
          zoomControl: true,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: true,
          ...(mapId ? { mapId } : {}),
        })
        mapRef.current = map
        setLoadingMap(false)
      })
      .catch(() => {
        if (!cancelled) enterFallback()
      })

    return () => {
      cancelled = true
      window.removeEventListener('gmaps:auth-failure', onAuthFailure)
    }
  }, [apiKey, enterFallback, mapId, useFallback])

  useEffect(() => {
    if (!mapRef.current || useFallback || loadingMap) return
    void loadCategory(activeCategory)
  }, [activeCategory, loadCategory, loadingMap, useFallback])

  useEffect(() => {
    return () => {
      clearMarkers()
      mapRef.current = null
    }
  }, [clearMarkers])

  if (useFallback) {
    return (
      <div className="space-y-2">
        <AmenityMapFallback title={mapAriaLabel} />
        {searchFailed || curatedPlacesForCategory(activeCategory).length > 0 ? (
          <p className="text-center text-xs text-slate-600">
            Featured places near {COMMUNITY_LOCATION.name} for this category are listed below.
          </p>
        ) : null}
      </div>
    )
  }

  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm"
      style={{ height: MAP_HEIGHT }}
    >
      <div ref={mapContainerRef} className="h-full w-full" style={{ minHeight: MAP_HEIGHT }} role="application" aria-label={mapAriaLabel} />
      {loadingMap ? (
        <div
          className="absolute inset-0 flex items-center justify-center bg-slate-100 text-sm text-slate-600"
          role="status"
        >
          Loading interactive map…
        </div>
      ) : null}
      {loadingPlaces ? (
        <div className="pointer-events-none absolute inset-x-0 top-0 bg-blue-600/90 px-3 py-1 text-center text-xs font-semibold text-white">
          Updating markers…
        </div>
      ) : null}
      {searchFailed && !loadingPlaces && !loadingMap ? (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-slate-900/80 px-3 py-2 text-center text-xs text-white">
          Live Places results unavailable—see the curated list below for featured nearby destinations.
        </div>
      ) : null}
    </div>
  )
}
