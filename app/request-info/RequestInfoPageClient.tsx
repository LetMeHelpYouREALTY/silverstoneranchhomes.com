'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import Link from 'next/link'
import { CONTACT_INFO } from '@/lib/contact-info'
import { trackEvent } from '@/lib/analytics'

const requestInfoSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type RequestInfoFormData = z.infer<typeof requestInfoSchema>

export default function RequestInfoPageClient() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RequestInfoFormData>({
    resolver: zodResolver(requestInfoSchema),
  })

  const onSubmit = async (data: RequestInfoFormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/request-info', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        trackEvent('form_submission', {
          form_id: 'request-info',
          form_name: 'Request Information Form',
          status: 'success',
        })
        setIsSuccess(true)
        reset()
      } else {
        throw new Error('Failed to submit')
      }
    } catch (error) {
      console.error('Error:', error)
      trackEvent('form_submission', {
        form_id: 'request-info',
        form_name: 'Request Information Form',
        status: 'error',
      })
      alert('Failed to submit. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="mx-auto max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Request Silverstone Ranch Market Info</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Request detailed insights about Silverstone Ranch homes, HOA details, and current market opportunities. We&apos;ll share tailored property recommendations, neighborhood intel, and pricing strategies.
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

      {isSuccess ? (
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 mb-6">
            <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Thank You!</h2>
          <p className="text-lg text-gray-600 mb-2">We&apos;ve received your information request.</p>
          <p className="text-gray-600 mb-8">
            Dr. Jan Duffy will send you curated Silverstone Ranch information—featured residences, neighborhood details, and market insights—within 24 hours.
          </p>
          <div className="space-y-3">
            <button
              onClick={() => setIsSuccess(false)}
              className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
            >
              Submit Another Request
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
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Get Silverstone Ranch Insights</h2>
            <p className="text-gray-600">
              Fill out the form below and we&apos;ll send you comprehensive Silverstone Ranch information—featured listings, HOA documents, neighborhood insights, and current market data tailored to your goals.
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
                Phone
              </label>
              <input
                {...register('phone')}
                type="tel"
                id="phone"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message *
              </label>
              <textarea
                {...register('message')}
                id="message"
                rows={6}
                placeholder="What would you like to know about Silverstone Ranch? (e.g., available homes, HOA details, market stats, schools, etc.)"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
              />
              {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              {isSubmitting ? 'Submitting...' : 'Send Information Request'}
            </button>
          </form>

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

          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden relative">
                    <Image
                      src="/images/agent/dr-jan-duffy-headshot-04.jpg"
                      alt="Dr. Jan Duffy"
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">Questions? Contact Dr. Jan Duffy</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Top 1% Las Vegas REALTOR® specializing in Silverstone Ranch
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <a href={`tel:${CONTACT_INFO.phone.tel}`} className="text-blue-600 hover:text-blue-700 font-medium">
                      {CONTACT_INFO.phone.display}
                    </a>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mt-16 grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">Why Request Concierge Information?</h2>
          <ul className="space-y-4 text-gray-600">
            <li>
              <span className="font-semibold text-gray-900">Curated Listing Previews:</span> Receive homes matched to your price range, lifestyle preferences, and renovation appetite before they hit public portals.
            </li>
            <li>
              <span className="font-semibold text-gray-900">HOA &amp; Golf Course Intelligence:</span> Get quick summaries of dues, special assessments, and golf course redevelopment updates.
            </li>
            <li>
              <span className="font-semibold text-gray-900">Relocation-Ready Support:</span> Access trusted lenders, movers, inspectors, and vendors experienced with Silverstone Ranch.
            </li>
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
          <h3 className="text-xl font-semibold text-gray-900">What Happens After You Submit?</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-600">
            <li>Dr. Duffy reviews your goals and timeline within hours.</li>
            <li>Expect a phone call, video chat, or email follow-up tailored to your preferred communication style.</li>
            <li>Receive curated resources—Silverstone Ranch relocation kit, upcoming listings, and vendor introductions.</li>
          </ol>
        </div>
      </div>

      <div className="mt-16 bg-white rounded-lg shadow-xl p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Tailored Resources for Your Journey</h2>
        <div className="grid md:grid-cols-2 gap-6 text-gray-600">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">If You&apos;re Relocating:</h3>
            <ul className="space-y-2">
              <li>Neighborhood comparison chart (Silverstone Ranch vs. Skye Canyon, Providence, Summerlin)</li>
              <li>Guard gate registration checklist &amp; moving day logistics</li>
              <li>Vendor list for movers, cleaners, landscapers, and smart home installation</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">If You&apos;re Local &amp; Upsizing:</h3>
            <ul className="space-y-2">
              <li>Equity analysis for your current property and timing roadmap</li>
              <li>List of off-market opportunities and upcoming listings</li>
              <li>Staging playbook, vendor credits, and home prep incentives</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
