'use client'

import { Phone } from 'lucide-react'
import ContactFormModal from './ContactFormModal'
import { CalendlyPopupLink } from '@/components/calendly/CalendlyPopupLink'
import { useState } from 'react'
import { CONTACT_INFO } from '@/lib/contact-info'

export default function Hero() {
  const [showContactModal, setShowContactModal] = useState(false)

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-blue-800">
              Silverstone Ranch Lifestyle
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Showcase Silverstone Ranch Luxury Living in Northwest Las Vegas
            </h1>

            <p className="mb-8 text-xl text-gray-600">
              Highlighting curated architecture, desert landscaping, and resort-caliber amenities designed for buyers relocating to Las Vegas, NV 89131.
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg bg-gray-200">
                <picture>
                  <source srcSet="/images/agent/dr-jan-duffy-headshot-01.jpg" type="image/jpeg" />
                  <img
                    src="/images/agent/dr-jan-duffy-headshot-01.jpg"
                    alt="Dr. Jan Duffy REALTOR serving Silverstone Ranch"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </picture>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Dr. Jan Duffy REALTOR</p>
                <p className="text-sm text-gray-600 leading-snug max-w-md">{CONTACT_INFO.businessName}</p>
                <a
                  href={`tel:${CONTACT_INFO.phone.tel}`}
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1 mt-1"
                >
                  <Phone className="h-4 w-4" />
                  {CONTACT_INFO.phone.display}
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <a
                href="/home-valuation"
                className="inline-block w-full lg:w-auto px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-center"
              >
                Unlock Your Silverstone Ranch Home&apos;s Value in 60 Seconds
              </a>
              
              <CalendlyPopupLink
                variant="button"
                className="w-full lg:w-auto px-8 py-4 bg-white text-blue-600 text-lg font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 hover:border-blue-700 transition-all"
              >
                Plan a Community Positioning Strategy
              </CalendlyPopupLink>

              <button
                type="button"
                onClick={() => setShowContactModal(true)}
                className="w-full lg:w-auto px-8 py-3 text-blue-700 text-sm font-semibold hover:underline"
              >
                Or open full scheduling calendar
              </button>
            </div>
          </div>

          {/* Right Column - Image or Additional Content */}
          <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl bg-gray-200">
            <picture>
              <source srcSet="/images/property/exterior-front-elevation.jpg" type="image/jpeg" />
              <img
                src="/images/property/exterior-front-elevation.jpg"
                alt="Silverstone Ranch luxury residence with desert landscaping and gated entry"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </picture>
          </div>
        </div>
      </div>

      {showContactModal && (
        <ContactFormModal
          isOpen={showContactModal}
          onClose={() => setShowContactModal(false)}
        />
      )}
    </section>
  )
}

