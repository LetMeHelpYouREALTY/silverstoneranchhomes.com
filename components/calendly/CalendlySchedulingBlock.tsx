'use client'

import { CalendlyInlineWidget } from './CalendlyInlineWidget'
import { CalendlyPopupLink } from './CalendlyPopupLink'

type CalendlySchedulingBlockProps = {
  title?: string
  description?: string
  className?: string
  showPopupLinks?: boolean
}

export function CalendlySchedulingBlock({
  title = 'Schedule a Private 15-Minute Conversation',
  description = 'Book time with Dr. Jan Duffy to discuss Silverstone Ranch buying, selling, tours, valuations, or market questions.',
  className = '',
  showPopupLinks = true,
}: CalendlySchedulingBlockProps) {
  return (
    <div className={`space-y-6 ${className}`}>
      {(title || description) && (
        <div className="text-center md:text-left">
          {title ? <h2 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h2> : null}
          {description ? <p className="text-gray-600">{description}</p> : null}
        </div>
      )}

      {showPopupLinks ? (
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
          <CalendlyPopupLink
            variant="button"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
          >
            Schedule time with me
          </CalendlyPopupLink>
          <CalendlyPopupLink className="text-sm font-semibold text-blue-600 hover:text-blue-700 hover:underline">
            Open scheduling popup
          </CalendlyPopupLink>
        </div>
      ) : null}

      <CalendlyInlineWidget />
    </div>
  )
}
