'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import Link from 'next/link'
import { CONTACT_INFO } from '@/lib/contact-info'

const valuationSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(10, 'Phone number is required'),
  address: z.string().optional(),
  propertyDetails: z.string().optional(),
})

type ValuationFormData = z.infer<typeof valuationSchema>

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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ValuationFormData>({
    resolver: zodResolver(valuationSchema),
  })

  const onSubmit = async (data: ValuationFormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/valuation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setIsSuccess(true)
        reset()
      } else {
        throw new Error('Failed to submit')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Failed to submit. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="mx-auto max-w-4xl">
      <div className="text-center mb-12">
        <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-6">
          Free Home Valuation
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Silverstone Ranch Home Valuation | 89131</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover what your Silverstone Ranch home is worth in today&apos;s market. Get a comprehensive market analysis and find out how to sell for 15% above market average.
        </p>
      </div>

      <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">How Your Silverstone Valuation Works</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          A quick online estimate rarely captures the nuance of Silverstone sub-associations, guard-gated premiums, and golf course disclosures. Dr. Duffy combines technology with on-the-ground insight so you receive a pricing strategy rooted in reality.
        </p>
        <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700 leading-relaxed">
          {valuationSteps.map((step) => (
            <div key={step.title} className="rounded-2xl border border-blue-100 bg-blue-50/80 p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Market Factors Influencing 2025 Pricing</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          June 2026 market conditions favor well-presented Silverstone homes, yet strategic preparation remains essential. These data points guide pricing, staging, and negotiation planning.
        </p>
        <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
          {marketFactors.map((factor) => (
            <div key={factor.label} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{factor.label}</h3>
              <p>{factor.insight}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-lg p-6 text-center shadow-sm">
          <div className="text-3xl font-bold text-blue-600 mb-2">15%</div>
          <div className="text-sm text-gray-600">Above Market Average</div>
        </div>
        <div className="bg-white rounded-lg p-6 text-center shadow-sm">
          <div className="text-3xl font-bold text-blue-600 mb-2">60s</div>
          <div className="text-sm text-gray-600">Quick Valuation</div>
        </div>
        <div className="bg-white rounded-lg p-6 text-center shadow-sm">
          <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
          <div className="text-sm text-gray-600">Free &amp; No Obligation</div>
        </div>
      </div>

      {isSuccess ? (
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 mb-6">
            <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Thank You!</h2>
          <p className="text-lg text-gray-600 mb-2">We&apos;ve received your valuation request.</p>
          <p className="text-gray-600 mb-8">
            Dr. Jan Duffy will review your submission and deliver a custom pricing analysis within 24 hours.
          </p>
          <div className="space-y-3">
            <button
              onClick={() => setIsSuccess(false)}
              className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
            >
              Submit Another Property
            </button>
            <div>
              <Link href="/" className="inline-block text-blue-600 hover:text-blue-700 font-medium">
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Request Your Pricing Roadmap</h2>
            <p className="text-gray-600">
              Share your property details and timeline. Dr. Duffy&apos;s concierge team will prepare a data-backed valuation, reveal buyer demand, and outline steps to maximize your net proceeds.
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                {...register('name')}
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email *
              </label>
              <input
                {...register('email')}
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone *
              </label>
              <input
                {...register('phone')}
                type="tel"
                id="phone"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                Property Address
              </label>
              <input
                {...register('address')}
                type="text"
                id="address"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="propertyDetails" className="block text-sm font-medium text-gray-700 mb-1">
                Property Details
              </label>
              <textarea
                {...register('propertyDetails')}
                id="propertyDetails"
                rows={5}
                placeholder="Bedrooms, upgrades, lot orientation, or questions you have about the selling process."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              {isSubmitting ? 'Submitting...' : 'Get My Valuation'}
            </button>
          </form>

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
      )}

      <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 mt-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Sellers Choose Dr. Jan Duffy</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {sellerBenefits.map((benefit) => (
            <div key={benefit.title} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-700 leading-relaxed">{benefit.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 mt-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Direct Access to Your Silverstone Concierge</h2>
        <div className="flex flex-col sm:flex-row gap-6 items-center">
          <div className="flex-1 text-gray-700 leading-relaxed">
            <p className="mb-4">
              Whether you&apos;re upgrading, downsizing, or exploring investment options, Dr. Duffy provides concierge-level service tailored to Silverstone Ranch homeowners. Expect personalized pricing strategy, curated vendor support, and negotiation expertise that protects every dollar of equity.
            </p>
            <p>
              Let&apos;s walk through your goals and design a selling game plan that maximizes value while keeping your timeline and peace of mind front and center.
            </p>
          </div>
          <div className="bg-blue-50 rounded-lg p-6 min-w-[280px] text-center">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">Connect Today</h3>
            <p className="text-sm text-gray-600 mb-4">
              Call or email for pricing strategy, prep guidance, and market timing advice.
            </p>
            <div className="space-y-2 text-sm">
              <a href={`tel:${CONTACT_INFO.phone.tel}`} className="block font-semibold text-blue-600 hover:text-blue-700">
                {CONTACT_INFO.phone.display}
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="block font-semibold text-blue-600 hover:text-blue-700"
              >
                {CONTACT_INFO.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
