'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { CALENDLY_BADGE, calendlyUrlFor } from '@/lib/calendly'
import { waitForCalendly } from '@/lib/calendly-utils'

export function CalendlyBadge() {
  const pathname = usePathname()

  // Rebuild the badge on every route change so it books the current page's event and utm_campaign.
  useEffect(() => {
    let cancelled = false

    waitForCalendly()
      .then((Calendly) => {
        if (cancelled) return
        const widget = Calendly as typeof Calendly & { destroyBadgeWidget?: () => void }
        if (widget.destroyBadgeWidget) widget.destroyBadgeWidget()
        else document.querySelector('.calendly-badge-widget')?.remove()
        Calendly.initBadgeWidget({
          url: calendlyUrlFor(pathname, 'badge'),
          text: CALENDLY_BADGE.text,
          color: CALENDLY_BADGE.color,
          textColor: CALENDLY_BADGE.textColor,
          branding: CALENDLY_BADGE.branding,
        })
      })
      .catch((error) => {
        console.error('Failed to initialize Calendly badge:', error)
      })

    return () => {
      cancelled = true
    }
  }, [pathname])

  return null
}
