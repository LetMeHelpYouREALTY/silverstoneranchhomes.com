'use client'

import { useMemo, useState } from 'react'
import dynamic from 'next/dynamic'
import { useInView } from 'react-intersection-observer'
import {
  AMENITY_CATEGORIES,
  type AmenityCategoryId,
} from '@/lib/nearby-amenities-config'
import { AmenityMapFallback } from '@/components/amenity-map/AmenityMapFallback'
import { CuratedPlacesList } from '@/components/amenity-map/CuratedPlacesList'

const AmenityMapInteractive = dynamic(() => import('@/components/amenity-map/AmenityMapInteractive'), {
  ssr: false,
  loading: () => (
    <div
      className="flex h-[420px] items-center justify-center rounded-2xl border border-slate-200 bg-slate-100 text-sm text-slate-600"
      role="status"
    >
      Loading interactive map…
    </div>
  ),
})

type AmenityMapClientProps = {
  variant?: 'full' | 'compact'
  initialCategory?: AmenityCategoryId
  mapAriaLabel?: string
}

export default function AmenityMapClient({
  variant = 'full',
  initialCategory = 'grocery',
  mapAriaLabel = 'Interactive map of nearby amenities around Silverstone Ranch',
}: AmenityMapClientProps) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  const { ref: inViewRef, inView } = useInView({ rootMargin: '200px', triggerOnce: true })
  const [activeCategory, setActiveCategory] = useState<AmenityCategoryId>(initialCategory)

  const categoryChips = useMemo(
    () =>
      AMENITY_CATEGORIES.map((category) => {
        const selected = category.id === activeCategory
        return (
          <button
            key={category.id}
            type="button"
            role="tab"
            aria-selected={selected}
            aria-controls="amenity-map-panel"
            className={`rounded-full px-3 py-1.5 text-xs font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
              selected
                ? 'bg-blue-600 text-white shadow'
                : 'border border-slate-200 bg-white text-slate-700 hover:border-blue-300'
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.label}
          </button>
        )
      }),
    [activeCategory],
  )

  return (
    <div ref={inViewRef} className="space-y-4">
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter nearby amenities on the map">
        {categoryChips}
      </div>

      <div id="amenity-map-panel" role="region" aria-label={mapAriaLabel}>
        {apiKey && inView ? (
          <AmenityMapInteractive activeCategory={activeCategory} mapAriaLabel={mapAriaLabel} />
        ) : apiKey ? (
          <div
            className="flex h-[420px] items-center justify-center rounded-2xl border border-slate-200 bg-slate-100 text-sm text-slate-600"
            role="status"
          >
            Map loads when this section is visible…
          </div>
        ) : (
          <AmenityMapFallback title={mapAriaLabel} />
        )}
      </div>

      {variant === 'full' ? (
        <CuratedPlacesList activeCategory={activeCategory} />
      ) : null}
    </div>
  )
}
