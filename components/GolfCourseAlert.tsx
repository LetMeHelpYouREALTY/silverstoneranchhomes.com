'use client'

import Link from 'next/link'
import { XCircle } from 'lucide-react'
import { startTransition, useEffect, useState } from 'react'

export default function GolfCourseAlert() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const dismissed = window.localStorage.getItem('golfCourseAlertDismissed')
    if (dismissed === 'true') {
      startTransition(() => setIsVisible(false))
    }
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('golfCourseAlertDismissed', 'true')
    }
  }

  if (!isVisible) return null

  return (
    <div
      role="alert"
      aria-live="polite"
      className="golf-course-alert border-b border-amber-200 bg-amber-50/95 px-4 py-3 text-sm text-amber-900 backdrop-blur supports-[backdrop-filter]:bg-amber-50/80"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-3">
          <XCircle className="mt-0.5 h-5 w-5 text-amber-600" aria-hidden="true" />
          <p className="leading-relaxed">
            <span className="font-semibold">Important Golf Course Update:</span> The Silverstone golf course was sold at
            auction in May 2025 and remains closed pending the new owner’s plans. Properties once marketed with golf
            views currently overlook unmaintained land.
            <Link
              href="/golf-course-status"
              className="ml-2 font-semibold text-amber-900 underline decoration-amber-500 decoration-2 underline-offset-4 hover:text-amber-700"
            >
              Learn more →
            </Link>
          </p>
        </div>
        <button
          type="button"
          onClick={handleDismiss}
          className="flex shrink-0 items-center gap-1 rounded-full border border-amber-200 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-900 transition hover:bg-amber-100"
          aria-label="Dismiss golf course status alert"
        >
          Dismiss
        </button>
      </div>
    </div>
  )
}

