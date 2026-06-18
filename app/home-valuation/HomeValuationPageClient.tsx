'use client'

import Link from 'next/link'
import { CONTACT_INFO } from '@/lib/contact-info'
import { CalendlySchedulingBlock } from '@/components/calendly/CalendlySchedulingBlock'

const valuationSteps = [
  {
    title: 'Neighborhood Analytics',
    description:
      'Review Silverstone sub-association data, including inventory levels, average price per square foot, and absorption rates for the past 90 days.',
  },
  {
    title: 'Property Condition Review',
    description:
      'Document upgrades, roof age, HVAC service history, energy-efficient improvements, and landscape enhancements that influence buyer perception.',
  },
  {
    title: 'Comparable Sales & Active Competition',
    description:
      'Compare similar floor plans, lot orientations, and golf course adjacency to determine pricing lanes and negotiation leverage.',
  },
  {
    title: 'Pricing Strategy Roadmap',
    description:
      'Provide a tiered pricing plan with projected days on market, showing schedules, and escalation responses aligned with your timeline.',
  },
]

const marketFactors = [
  {
    label: 'Guard-Gated Demand',
    insight:
      'Silverstone remains a top choice for buyers prioritizing security and mature landscaping—driving consistent appreciation even as new northwest communities open.',
  },
  {
    label: 'Golf Course Status',
    insight:
      'The dormant course requires targeted disclosure and negotiation strategy. Dr. Duffy tracks city filings and HOA updates weekly to inform pricing.',
  },
  {
    label: 'Seasonal Trends',
    insight:
      'Relocation traffic peaks November through March. Sellers who prep in Q4 capture out-of-state interest seeking spring closings.',
  },
  {
    label: 'Renovation ROI',
    insight:
      'High-impact upgrades—chef kitchens, outdoor living, solar—see the strongest returns. Dr. Duffy benchmarks each enhancement against recent comps.',
  },
]

const sellerBenefits = [
  {
    title: 'Comprehensive Market Analysis',
    detail:
      'Dr. Duffy tracks Silverstone sub-association performance, absorption rates, and buyer demographics to position your home strategically before it hits MLS.',
  },
  {
    title: 'Concierge Selling Plan',
    detail:
      'Staging, media production, contractor coordination, and timeline management are coordinated for you. Every listing receives a bespoke marketing calendar.',
  },
  {
    title: 'Negotiation & Escrow Navigation',
    detail:
      'Structured communication keeps you informed while Dr. Duffy handles inspection negotiations, appraisal substantiation, and HOA compliance.',
  },
]

export default function HomeValuationPageClient() {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Silverstone Ranch Home Valuation</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Schedule a consultation with {CONTACT_INFO.agentName} to receive a custom pricing analysis for your Silverstone Ranch residence.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
        <CalendlySchedulingBlock
          title="Request Your Pricing Roadmap"
          description="Book a private conversation to share your property details and timeline. Dr. Duffy will prepare a data-backed valuation, buyer demand snapshot, and net proceeds outline."
        />

        <div className="mt-8 pt-8 border-t border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-4">What&apos;s Included:</h3>
          <ul className="space-y-3 text-gray-600">
            <li>Pricing analysis with three recommended strategy tiers</li>
            <li>Buyer demand snapshots for each Silverstone sub-association</li>
            <li>Upgrade ROI checklist and vendor introductions</li>
            <li>Timeline roadmap aligning your sale with relocation or purchase plans</li>
          </ul>
        </div>
      </div>

      <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 mt-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Sellers Choose Dr. Jan Duffy</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {sellerBenefits.map((benefit) => (
            <div key={benefit.title} className="rounded-lg border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{benefit.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Valuation Process</h2>
          <ol className="space-y-4">
            {valuationSteps.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">{step.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Market Factors We Track</h2>
          <div className="space-y-4">
            {marketFactors.map((factor) => (
              <div key={factor.label} className="rounded-lg border border-blue-100 bg-blue-50 p-4">
                <h3 className="font-semibold text-blue-900 mb-1">{factor.label}</h3>
                <p className="text-sm text-blue-800">{factor.insight}</p>
              </div>
            ))}
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
