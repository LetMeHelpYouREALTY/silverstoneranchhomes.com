import Link from 'next/link'
import { SectionHeading } from '@/components/SectionHeading'
import { COMMUNITY_LOCATION } from '@/lib/nearby-amenities-config'
import AmenityMapClient from '@/components/amenity-map/AmenityMapClient'

type AmenityMapSectionProps = {
  /** Homepage-style heading vs. shorter embed on inner pages. */
  heading?: string
  id?: string
  className?: string
}

export function AmenityMapSection({
  heading = `Life Near ${COMMUNITY_LOCATION.name}`,
  id = 'whats-nearby',
  className = '',
}: AmenityMapSectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 border-t border-slate-200 bg-white py-16 px-4 sm:px-6 lg:px-8 ${className}`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionHeading id={`${id}-heading`}>{heading}</SectionHeading>
            <p className="mt-2 max-w-3xl text-slate-700 leading-relaxed">
              Explore restaurants, grocery, parks, healthcare, schools, and more around{' '}
              <strong>{COMMUNITY_LOCATION.name}</strong> in {COMMUNITY_LOCATION.city} (ZIP{' '}
              {COMMUNITY_LOCATION.postalCode}). Switch categories on the map, then open the full amenity guide for drive
              times and buyer FAQs.
            </p>
          </div>
          <Link
            href="/nearby-amenities"
            className="inline-flex shrink-0 items-center justify-center rounded-full border border-blue-600 px-5 py-2.5 text-sm font-semibold text-blue-600 hover:bg-blue-50"
          >
            Full nearby amenities guide
          </Link>
        </div>
        <AmenityMapClient variant="compact" mapAriaLabel={`Map of amenities near ${COMMUNITY_LOCATION.name}`} />
      </div>
    </section>
  )
}
