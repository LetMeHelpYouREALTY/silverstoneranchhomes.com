'use client'

import { CalendlySchedulingBlock } from './CalendlySchedulingBlock'

export function CalendlySchedulingSection() {
  return (
    <section className="border-t border-slate-200 bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">Book With Dr. Jan Duffy</p>
          <h2 className="mt-2 text-3xl font-bold text-gray-900">Schedule Your Silverstone Ranch Consultation</h2>
          <p className="mt-3 text-lg text-gray-600">
            Choose a time for a private 15-minute conversation about tours, valuations, listings, or relocation planning.
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <CalendlySchedulingBlock
            title="Schedule a Private 15-Minute Conversation"
            description="The calendar below is the booking path for tours, valuations, listings, and market questions."
          />
        </div>
      </div>
    </section>
  )
}
