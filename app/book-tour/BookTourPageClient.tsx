'use client'

import { CalendlySchedulingBlock } from '@/components/calendly/CalendlySchedulingBlock'

export default function BookTourPageClient() {
  return (
    <div className="mx-auto max-w-2xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Book a Silverstone Ranch Home Tour (89131)</h1>
        <p className="text-lg text-gray-600">
          Schedule a private tour of Silverstone Ranch homes and community amenities with Dr. Jan Duffy.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8">
        <CalendlySchedulingBlock
          title="Reserve Your Tour Time"
          description="Pick a time that works for you. Dr. Duffy will confirm your preferred Silverstone Ranch villages, listing priorities, and tour route."
        />
      </div>
    </div>
  )
}
