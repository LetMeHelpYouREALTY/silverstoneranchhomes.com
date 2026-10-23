'use client'

import { usePathname } from 'next/navigation'
import type { MouseEvent, ReactNode } from 'react'
import { calendlyUrlFor } from '@/lib/calendly'
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
  const url = calendlyUrlFor(usePathname() || '/', variant === 'button' ? 'popup-button' : 'popup-link')
  const openPopup = async (event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    event.preventDefault()
    try {
      const Calendly = await waitForCalendly()
      Calendly.initPopupWidget({ url })
    } catch (error) {
      console.error('Failed to open Calendly popup:', error)
      window.open(url, '_blank', 'noopener,noreferrer')
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
    <a href={url} onClick={openPopup} className={className}>
      {children}
    </a>
  )
}
