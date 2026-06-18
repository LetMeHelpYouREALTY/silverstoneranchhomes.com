'use client'

import { useEffect } from 'react'
import { CALENDLY_BADGE, CALENDLY_URL } from '@/lib/calendly'
import { waitForCalendly } from '@/lib/calendly-utils'

let badgeInitialized = false

export function CalendlyBadge() {
  useEffect(() => {
    if (badgeInitialized) return

    waitForCalendly()
      .then((Calendly) => {
        if (badgeInitialized) return
        Calendly.initBadgeWidget({
          url: CALENDLY_URL,
          text: CALENDLY_BADGE.text,
          color: CALENDLY_BADGE.color,
          textColor: CALENDLY_BADGE.textColor,
          branding: CALENDLY_BADGE.branding,
        })
        badgeInitialized = true
      })
      .catch((error) => {
        console.error('Failed to initialize Calendly badge:', error)
      })
  }, [])

  return null
}
