'use client'

import { CalendlySchedulingBlock } from '@/components/calendly/CalendlySchedulingBlock'

export function HomesForSaleScheduling() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 border border-blue-100">
      <CalendlySchedulingBlock
        title="Request Matching Listings"
        description="Schedule a consultation with Dr. Jan Duffy to receive curated Silverstone Ranch options—including private and coming-soon homes not shown on public portals."
      />
      <p className="mt-4 text-xs text-gray-500">
        Silverstone Ranch inventory updates hourly. School attendance boundaries are set by CCSD—confirm zoning at{' '}
        <a
          href="https://ccsd.net/schools/zoning/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-blue-600 hover:underline"
        >
          ccsd.net/schools/zoning
        </a>
        .
        {' '}before you write an offer.
      </p>
    </div>
  )
}
