import {
  AMENITY_CATEGORIES,
  COMMUNITY_LOCATION,
  buildDirectionsUrl,
  type AmenityCategoryId,
} from '@/lib/nearby-amenities-config'
import { curatedPlacesForCategory } from '@/lib/curated-nearby-places'

type CuratedPlacesListProps = {
  activeCategory: AmenityCategoryId
  onCategoryChange?: (id: AmenityCategoryId) => void
  /** When true, category chips are interactive (map page). */
  showFilters?: boolean
  listId?: string
}

export function CuratedPlacesList({
  activeCategory,
  onCategoryChange,
  showFilters = false,
  listId = 'curated-nearby-places',
}: CuratedPlacesListProps) {
  const places = curatedPlacesForCategory(activeCategory)

  return (
    <div className="space-y-4">
      {showFilters ? (
        <div
          className="flex flex-wrap gap-2"
          role="tablist"
          aria-label="Filter nearby amenities by category"
        >
          {AMENITY_CATEGORIES.map((category) => {
            const selected = category.id === activeCategory
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={listId}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                  selected
                    ? 'bg-blue-600 text-white shadow'
                    : 'border border-slate-200 bg-white text-slate-700 hover:border-blue-300'
                }`}
                onClick={() => onCategoryChange?.(category.id)}
              >
                {category.label}
              </button>
            )
          })}
        </div>
      ) : null}

      <ul id={listId} className="space-y-3" aria-live="polite">
        {places.length === 0 ? (
          <li className="text-sm text-slate-600">
            Featured places near {COMMUNITY_LOCATION.name} for this category appear on the map when available. Contact Dr.
            Jan Duffy for a driving tour of nearby amenities.
          </li>
        ) : (
          places.map((place) => (
            <li
              key={`${place.name}-${place.address}`}
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm"
            >
              <p className="font-semibold text-slate-900">{place.name}</p>
              {place.address ? <p className="text-sm text-slate-600">{place.address}</p> : null}
              {place.note ? <p className="mt-1 text-sm text-slate-700">{place.note}</p> : null}
              <a
                href={buildDirectionsUrl(place.address ? `${place.name}, ${place.address}` : place.name)}
                className="mt-2 inline-flex text-sm font-semibold text-blue-600 hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                Directions in Google Maps
              </a>
            </li>
          ))
        )}
      </ul>
    </div>
  )
}
