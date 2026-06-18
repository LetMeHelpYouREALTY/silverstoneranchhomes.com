'use client'

import { Phone, Mail, MessageCircle, MapPin, Globe } from 'lucide-react'
import Link from 'next/link'
import { CONTACT_INFO } from '@/lib/contact-info'
import { CalendlySchedulingBlock } from '@/components/calendly/CalendlySchedulingBlock'
import { CalendlyPopupLink } from '@/components/calendly/CalendlyPopupLink'

type ContactFaq = {
  question: string
  answer: string
}

type ContactPageClientProps = {
  faqs: ContactFaq[]
}

export default function ContactPageClient({ faqs }: ContactPageClientProps) {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Contact Dr. Jan Duffy | Silverstone Ranch REALTOR®</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Schedule a private conversation about properties, tours, valuations, or any real estate needs in Silverstone Ranch.
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
                <CalendlyPopupLink className="text-lg text-blue-600 hover:text-blue-700 font-medium">
                  Schedule time with me
                </CalendlyPopupLink>
                <p className="text-sm text-gray-600 mt-1">Book a private 15-minute conversation online</p>
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
                  {CONTACT_INFO.gbpAttributes.offersOnlineAppointments && <li>Online appointments available</li>}
                  {CONTACT_INFO.gbpAttributes.wheelchairAccessibleParking && <li>Wheelchair-accessible parking</li>}
                  {CONTACT_INFO.gbpAttributes.wheelchairAccessibleEntrance && <li>Wheelchair-accessible entrance</li>}
                  {CONTACT_INFO.gbpAttributes.womenOwned && <li>Women-owned business</li>}
                  {CONTACT_INFO.gbpAttributes.veteranOwned && <li>Veteran-owned business</li>}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8">
          <CalendlySchedulingBlock
            title="Schedule Time With Dr. Duffy"
            description="Use the calendar below or open the scheduling popup to book your private 15-minute conversation."
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-xl p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Quick Actions</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <CalendlyPopupLink
            variant="button"
            className="p-4 bg-blue-50 rounded-lg text-center hover:bg-blue-100 transition-colors"
          >
            <div className="text-2xl mb-2">💰</div>
            <div className="font-semibold text-gray-900">Discuss Home Valuation</div>
          </CalendlyPopupLink>
          <CalendlyPopupLink
            variant="button"
            className="p-4 bg-blue-50 rounded-lg text-center hover:bg-blue-100 transition-colors"
          >
            <div className="text-2xl mb-2">🏠</div>
            <div className="font-semibold text-gray-900">Schedule a Tour</div>
          </CalendlyPopupLink>
          <CalendlyPopupLink
            variant="button"
            className="p-4 bg-blue-50 rounded-lg text-center hover:bg-blue-100 transition-colors"
          >
            <div className="text-2xl mb-2">📋</div>
            <div className="font-semibold text-gray-900">Request Information</div>
          </CalendlyPopupLink>
        </div>
        <p className="mt-6 text-center text-sm text-gray-600">
          You can also visit dedicated pages:{' '}
          <Link href="/home-valuation" className="text-blue-600 hover:underline">
            home valuation
          </Link>
          ,{' '}
          <Link href="/book-tour" className="text-blue-600 hover:underline">
            book a tour
          </Link>
          , or{' '}
          <Link href="/request-info" className="text-blue-600 hover:underline">
            request info
          </Link>
          .
        </p>
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
