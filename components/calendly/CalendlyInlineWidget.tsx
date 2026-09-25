'use client'

import { useEffect, useRef } from 'react'
import { CALENDLY_INLINE_HEIGHT, CALENDLY_URL } from '@/lib/calendly'
import { waitForCalendly } from '@/lib/calendly-utils'

type CalendlyInlineWidgetProps = {
  className?: string
  height?: number
}

export function CalendlyInlineWidget({
  className = '',
  height = CALENDLY_INLINE_HEIGHT,
}: CalendlyInlineWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const parentElement = containerRef.current
    if (!parentElement) return

    let cancelled = false

    waitForCalendly()
      .then((Calendly) => {
        if (cancelled) return
        parentElement.innerHTML = ''
        Calendly.initInlineWidget({
          url: CALENDLY_URL,
          parentElement,
        })
      })
      .catch((error) => {
        console.error('Failed to load Calendly inline widget:', error)
      })

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div className={className}>
      <div
        ref={containerRef}
        className="calendly-inline-widget w-full overflow-hidden rounded-lg border border-slate-200 bg-white"
        style={{ minWidth: 320, height }}
        data-url={CALENDLY_URL}
        aria-label="Schedule a private 15-minute conversation with Dr. Jan Duffy"
      />
      <p className="mt-3 text-sm text-gray-600">
        If the calendar does not appear,{' '}
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-blue-600 hover:text-blue-700 hover:underline"
        >
          open the scheduling page
        </a>
        .
      </p>
    </div>
  )
}
