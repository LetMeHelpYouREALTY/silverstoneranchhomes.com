'use client'

import { useState } from 'react'
import VirtualOpenHouseModal from './VirtualOpenHouseModal'
import { CalendlyPopupLink } from '@/components/calendly/CalendlyPopupLink'
import { Video } from 'lucide-react'

export function VirtualOpenHouseButton() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-700 scroll-mt-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-block p-3 bg-white/20 rounded-full mb-6">
            <Video className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Tour Silverstone Ranch Live
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Explore Silverstone Ranch residences, amenities, and lifestyle highlights from the comfort of your
            home. Schedule a live virtual tour with Dr. Jan Duffy and get community questions answered in real time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CalendlyPopupLink
              variant="button"
              className="px-8 py-4 bg-white text-blue-600 text-lg font-semibold rounded-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Schedule time with me
            </CalendlyPopupLink>
            <button
              type="button"
              onClick={() => setShowModal(true)}
              className="px-8 py-4 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-400 transition-all border border-white/30"
            >
              Open Full Scheduling Calendar
            </button>
          </div>
        </div>
      </section>

      {showModal && (
        <VirtualOpenHouseModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  )
}

