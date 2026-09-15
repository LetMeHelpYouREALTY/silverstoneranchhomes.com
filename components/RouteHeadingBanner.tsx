'use client'

import { usePathname } from 'next/navigation'
import { GbpCtaRow } from '@/components/GbpCtaRow'
import { HeadingVisual } from '@/components/HeadingVisual'
import { getRouteHero, getRouteSectionVisuals } from '@/lib/media'

/**
 * H1 photo plus H2/H3-matched supporting photos and GBP CTAs on every content route.
 */
export function RouteHeadingBanner() {
  const pathname = usePathname()
  if (!pathname || pathname === '/' || pathname === '/privacy' || pathname === '/terms') {
    return null
  }
  const hero = getRouteHero(pathname)
  if (!hero) return null
  const sections = getRouteSectionVisuals(pathname).slice(0, 3)

  return (
    <div className="bg-white border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 space-y-4">
        <HeadingVisual mediaId={hero.mediaId} heading={hero.heading} priority variant="hero" />
        <GbpCtaRow />
        {sections.length > 1 ? (
          <div className="grid gap-4 sm:grid-cols-3">
            {sections.map((item) => (
              <HeadingVisual
                key={`${item.mediaId}-${item.heading}`}
                mediaId={item.mediaId}
                heading={item.heading}
                showCaption
                variant="supporting"
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  )
}
