'use client'

import Image from 'next/image'
import Link from 'next/link'
import { CONTACT_INFO } from '@/lib/contact-info'
import { CalendlySchedulingBlock } from '@/components/calendly/CalendlySchedulingBlock'

export default function RequestInfoPageClient() {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Request Silverstone Ranch Market Info</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Schedule time with Dr. Jan Duffy to receive tailored Silverstone Ranch insights—featured listings, HOA details, and current market opportunities.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-lg p-6 text-center shadow-sm">
          <div className="text-2xl font-bold text-blue-600 mb-2">Centennial Hills</div>
          <div className="text-sm text-gray-600">Northwest Las Vegas</div>
        </div>
        <div className="bg-white rounded-lg p-6 text-center shadow-sm">
          <div className="text-2xl font-bold text-blue-600 mb-2">Gated Living</div>
          <div className="text-sm text-gray-600">Silverstone Ranch Villages</div>
        </div>
        <div className="bg-white rounded-lg p-6 text-center shadow-sm">
          <div className="text-2xl font-bold text-blue-600 mb-2">Expert Support</div>
          <div className="text-sm text-gray-600">Dr. Jan Duffy REALTOR®</div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
        <CalendlySchedulingBlock
          title="Get Silverstone Ranch Insights"
          description="Book a consultation and Dr. Duffy will share comprehensive Silverstone Ranch information—featured listings, HOA documents, neighborhood insights, and market data tailored to your goals."
        />

        <div className="mt-8 pt-8 border-t border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-4">What Information You&apos;ll Receive:</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Featured Silverstone Ranch listings and specifications</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>High-resolution community and residence photos</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Neighborhood and community information</span>
              </li>
            </ul>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Local school district information</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Market trends and comparable sales</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Financing options and pre-approval assistance</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <section className="mt-12 bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="relative h-64 md:h-auto min-h-[16rem]">
            <Image
              src="/images/property/exterior-front-elevation.jpg"
              alt="Silverstone Ranch home exterior in Las Vegas 89131"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="p-8 md:p-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Request a Consultation?</h2>
            <p className="text-gray-600 mb-4">
              Silverstone Ranch spans multiple guard-gated villages with distinct HOA structures, lot orientations, and price bands. A scheduled conversation helps you focus on the enclaves that match your lifestyle and budget.
            </p>
            <p className="text-gray-600">
              {CONTACT_INFO.agentName} provides concierge support for buyers relocating to Las Vegas, investors evaluating rental potential, and sellers positioning homes within the 89131 market.
            </p>
          </div>
        </div>
      </section>

      <p className="mt-12 text-center">
        <Link href="/" className="text-blue-600 hover:text-blue-700 font-medium">
          Return to Home
        </Link>
      </p>
    </div>
  )
}
