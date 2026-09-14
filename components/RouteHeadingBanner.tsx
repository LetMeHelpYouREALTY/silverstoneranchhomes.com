'use client'

import { usePathname } from 'next/navigation'
import { HeadingVisual } from '@/components/HeadingVisual'
import { getRouteHero } from '@/lib/media'

/**
 * Adds a heading-matched photo under the global header on every content route.
 * Pages that already render a PageHero still benefit from the GBP NAP bar;
 * this banner keeps image+alt relevance on long-form pages that were previously text-only.
 */
export function RouteHeadingBanner() {
  const pathname = usePathname()
  if (!pathname || pathname === '/' || pathname === '/privacy' || pathname === '/terms') {
    return null
  }
  const hero = getRouteHero(pathname)
  if (!hero) return null

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        <HeadingVisual mediaId={hero.mediaId} heading={hero.heading} priority={pathname === '/'} />
      </div>
    </div>
  )
}
