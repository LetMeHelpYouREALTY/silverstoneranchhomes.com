'use client'

import type { MouseEvent, ReactNode } from 'react'
import { CALENDLY_URL } from '@/lib/calendly'
import { waitForCalendly } from '@/lib/calendly-utils'

type CalendlyPopupLinkProps = {
  children?: ReactNode
  className?: string
  variant?: 'link' | 'button'
}

export function CalendlyPopupLink({
  children = 'Schedule time with me',
  className = '',
  variant = 'link',
}: CalendlyPopupLinkProps) {
  const openPopup = async (event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    event.preventDefault()
    try {
      const Calendly = await waitForCalendly()
      Calendly.initPopupWidget({ url: CALENDLY_URL })
    } catch (error) {
      console.error('Failed to open Calendly popup:', error)
      window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer')
    }
  }

  if (variant === 'button') {
    return (
      <button type="button" onClick={openPopup} className={className}>
        {children}
      </button>
    )
  }

  return (
    <a href={CALENDLY_URL} onClick={openPopup} className={className}>
      {children}
    </a>
  )
}
