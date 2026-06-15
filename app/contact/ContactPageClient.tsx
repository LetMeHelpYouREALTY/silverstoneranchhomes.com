'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Phone, Mail, MessageCircle, MapPin, Globe } from 'lucide-react'
import Link from 'next/link'
import { CONTACT_INFO } from '@/lib/contact-info'
import { trackEvent } from '@/lib/analytics'

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

type ContactFaq = {
  question: string
  answer: string
}

type ContactPageClientProps = {
  faqs: ContactFaq[]
}

export default function ContactPageClient({ faqs }: ContactPageClientProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        trackEvent('form_submission', {
          form_id: 'contact',
          form_name: 'Contact Page Form',
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
        form_id: 'contact',
        form_name: 'Contact Page Form',
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
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Contact Dr. Jan Duffy | Silverstone Ranch REALTOR®</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Get in touch with Dr. Jan Duffy for questions about properties, scheduling tours, or any real estate needs in Silverstone Ranch.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                <a href={`tel:${CONTACT_INFO.phone.tel}`} className="text-lg text-blue-600 hover:text-blue-700 font-medium">
                  {CONTACT_INFO.phone.display}
                </a>
                <p className="text-sm text-gray-600 mt-1">
                  Calls returned during business hours; urgent inquiries prioritized.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-lg text-blue-600 hover:text-blue-700 font-medium break-all">
                  {CONTACT_INFO.email}
                </a>
                <p className="text-sm text-gray-600 mt-1">We respond within 24 hours</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{CONTACT_INFO.chat.label}</h3>
                <Link href={CONTACT_INFO.chat.url} className="text-lg text-blue-600 hover:text-blue-700 font-medium">
                  Start a Conversation
                </Link>
                <p className="text-sm text-gray-600 mt-1">Chat with the Silverstone team any time</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Globe className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Website</h3>
                <a
                  href={CONTACT_INFO.website.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-blue-600 hover:text-blue-700 font-medium break-all"
                >
                  {CONTACT_INFO.website.display}
                </a>
                <p className="text-sm text-gray-600 mt-1">Explore listings, amenities, and market intel</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Office</h3>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT_INFO.address.display)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-blue-600 hover:text-blue-700 font-medium"
                >
                  {CONTACT_INFO.address.display}
                </a>
                <p className="text-sm text-gray-600 mt-1">
                  Serving Northwest Las Vegas—including {CONTACT_INFO.serviceAreas.slice(0, 5).join(', ')}, and{' '}
                  <Link href="/area-info" className="text-blue-600 hover:text-blue-700 font-medium">
                    additional communities we cover
                  </Link>
                  .
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200 space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Office hours (Google Business Profile)</h3>
                <p className="text-gray-700">
                  Monday–Sunday: {CONTACT_INFO.businessHours.display} (Pacific / local time)
                </p>
                <ul className="mt-2 text-sm text-gray-600 space-y-1">
                  {CONTACT_INFO.specialClosures.map((row) => (
                    <li key={row.date}>
                      <span className="font-medium text-gray-800">{row.date}:</span> {row.label}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Languages</h3>
                <p className="text-gray-700">{CONTACT_INFO.languagesOffered.join(', ')}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Service options</h3>
                <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                  {CONTACT_INFO.gbpAttributes.offersOnlineAppointments && (
                    <li>Online appointments available</li>
                  )}
                  {CONTACT_INFO.gbpAttributes.wheelchairAccessibleParking && (
                    <li>Wheelchair-accessible parking</li>
                  )}
                  {CONTACT_INFO.gbpAttributes.wheelchairAccessibleEntrance && (
                    <li>Wheelchair-accessible entrance</li>
                  )}
                  {CONTACT_INFO.gbpAttributes.womenOwned && <li>Women-owned business</li>}
                  {CONTACT_INFO.gbpAttributes.veteranOwned && <li>Veteran-owned business</li>}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8">
          {isSuccess ? (
            <div className="text-center py-8">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-4">
                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
              <p className="text-gray-600 mb-6">We&apos;ve received your message and will get back to you soon.</p>
              <button
                onClick={() => setIsSuccess(false)}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send a Message</h2>
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
                    rows={5}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed font-semibold transition-all shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-xl p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Quick Actions</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/home-valuation" className="p-4 bg-blue-50 rounded-lg text-center hover:bg-blue-100 transition-colors">
            <div className="text-2xl mb-2">💰</div>
            <div className="font-semibold text-gray-900">Get Home Valuation</div>
          </Link>
          <Link href="/book-tour" className="p-4 bg-blue-50 rounded-lg text-center hover:bg-blue-100 transition-colors">
            <div className="text-2xl mb-2">🏠</div>
            <div className="font-semibold text-gray-900">Schedule a Tour</div>
          </Link>
          <Link href="/request-info" className="p-4 bg-blue-50 rounded-lg text-center hover:bg-blue-100 transition-colors">
            <div className="text-2xl mb-2">📋</div>
            <div className="font-semibold text-gray-900">Request Information</div>
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-xl p-8 mt-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="rounded-lg border border-slate-200 bg-slate-50/80 p-4">
              <summary className="cursor-pointer text-base font-semibold text-gray-900">{faq.question}</summary>
              <p className="mt-3 text-sm text-gray-700 leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  )
}
