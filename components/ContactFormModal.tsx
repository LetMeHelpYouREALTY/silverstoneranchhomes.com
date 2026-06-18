'use client'

import { X } from 'lucide-react'
import { CalendlyInlineWidget } from '@/components/calendly/CalendlyInlineWidget'
import { CalendlyPopupLink } from '@/components/calendly/CalendlyPopupLink'

interface ContactFormModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 animate-fade-in">
      <div className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full p-6 animate-slide-up max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          aria-label="Close"
        >
          <X className="h-6 w-6" />
        </button>

        <h2 className="text-2xl font-bold text-gray-900 mb-2 pr-8">Schedule With Dr. Jan Duffy</h2>
        <p className="text-gray-600 mb-4">
          Book a private 15-minute conversation about Silverstone Ranch strategy, tours, or market positioning.
        </p>

        <CalendlyPopupLink
          variant="button"
          className="mb-4 inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Schedule time with me
        </CalendlyPopupLink>

        <CalendlyInlineWidget height={620} />
      </div>
    </div>
  )
}
