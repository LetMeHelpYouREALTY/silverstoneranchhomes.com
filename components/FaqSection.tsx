type FaqItem = {
  question: string
  answer: string
}

type FaqSectionProps = {
  faqs: readonly FaqItem[] | FaqItem[]
  heading?: string
  /** Adds speakable-answer class for AEO / Speakable schema alignment */
  speakable?: boolean
  className?: string
}

export function FaqSection({
  faqs,
  heading = 'Frequently Asked Questions',
  speakable = true,
  className = '',
}: FaqSectionProps) {
  if (!faqs.length) return null

  const answerClass = speakable ? 'speakable-answer mt-3 text-sm text-slate-700 leading-relaxed' : 'mt-3 text-sm text-slate-700 leading-relaxed'

  return (
    <section className={`mt-12 ${className}`.trim()} aria-labelledby="page-faq-heading">
      <h2 id="page-faq-heading" className="text-2xl font-bold text-gray-900 mb-6">
        {heading}
      </h2>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="rounded-lg border border-slate-200 bg-slate-50/80 p-4"
          >
            <summary className="cursor-pointer text-base font-semibold text-slate-900">
              {faq.question}
            </summary>
            <p className={answerClass}>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
