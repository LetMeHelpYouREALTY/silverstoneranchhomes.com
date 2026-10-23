'use client'

import { usePathname } from 'next/navigation'
import { PAGES_WITH_INLINE_CALENDLY } from '@/lib/calendly'
import { CalendlyPopupLink } from './CalendlyPopupLink'
import { CalendlySchedulingBlock } from './CalendlySchedulingBlock'

export function CalendlySchedulingSection() {
  // Pages with their own inline calendar get a popup button here, not a second 700px calendar.
  const hasPageCalendar = PAGES_WITH_INLINE_CALENDLY.includes(usePathname() || '/')

  return (
    <section className="border-t border-slate-200 bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">Book With Dr. Jan Duffy</p>
          <h2 className="mt-2 text-3xl font-bold text-gray-900">Schedule Your Silverstone Ranch Consultation</h2>
          <p className="mt-3 text-lg text-gray-600">
            Choose a time to talk about tours, valuations, listings, or relocation planning.
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          {hasPageCalendar ? (
            <div className="text-center">
              <CalendlyPopupLink
                variant="button"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
              >
                Schedule time with me
              </CalendlyPopupLink>
            </div>
          ) : (
            <CalendlySchedulingBlock
              title="Schedule Time with Dr. Jan Duffy"
              description="The calendar below is the booking path for tours, valuations, listings, and market questions."
            />
          )}
        </div>
      </div>
    </section>
  )
}
