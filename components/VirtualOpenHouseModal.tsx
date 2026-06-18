'use client'

import { X, Calendar, Video } from 'lucide-react'
import { CalendlyInlineWidget } from '@/components/calendly/CalendlyInlineWidget'
import { CalendlyPopupLink } from '@/components/calendly/CalendlyPopupLink'

interface VirtualOpenHouseModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function VirtualOpenHouseModal({ isOpen, onClose }: VirtualOpenHouseModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 animate-fade-in">
      <div className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full p-6 md:p-8 animate-slide-up max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          aria-label="Close"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="flex items-center gap-3 mb-6 pr-8">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <Video className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Virtual Open House Scheduling</h2>
            <p className="text-gray-600 text-sm">
              Book time for a live virtual tour of Silverstone Ranch homes and amenities with Dr. Jan Duffy.
            </p>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-4 mb-6">
          <div className="flex items-start gap-3">
            <Calendar className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <p className="font-semibold text-gray-900 mb-1">Upcoming Virtual Open House</p>
              <p className="text-sm text-gray-700">Select a time below to reserve your spot and receive meeting details.</p>
            </div>
          </div>
        </div>

        <CalendlyPopupLink
          variant="button"
          className="mb-4 inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Schedule time with me
        </CalendlyPopupLink>

        <CalendlyInlineWidget height={620} />
      </div>
    </div>
  )
}
