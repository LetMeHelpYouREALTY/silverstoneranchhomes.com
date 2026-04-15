import Link from 'next/link'
import { MapPin, Navigation, Home, KeyRound, GraduationCap, Phone, Calendar, MessageCircle } from 'lucide-react'
import { CONTACT_INFO } from '@/lib/contact-info'

const telHref = `tel:${CONTACT_INFO.phone.tel}`

/**
 * Conversion-focused band: hyperlocal “where” + clear service paths + primary CTAs.
 */
export function ServicesLocationConversion() {
  return (
    <section
      className="border-y border-blue-100 bg-gradient-to-b from-white to-slate-50 py-12 px-4 sm:px-6 lg:px-8"
      aria-labelledby="services-location-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center lg:text-left lg:flex lg:items-end lg:justify-between lg:gap-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-700 mb-2">Local focus & services</p>
            <h2 id="services-location-heading" className="text-2xl sm:text-3xl font-bold text-slate-900">
              Real estate help rooted in Silverstone Ranch & Northwest Las Vegas
            </h2>
            <p className="mt-3 text-slate-700 max-w-3xl">
              Whether you are buying, selling, or relocating, you get one point of contact who knows Silverstone Ranch,
              Tule Springs, Centennial Hills, and nearby Northwest Las Vegas—including Iron Mountain Ranch, Astoria Trails,
              and North Las Vegas—so HOA nuances and pricing stay hyperlocal, not generic strip-mall brokerage talk.{' '}
              <Link
                href="/area-info"
                className="font-semibold text-blue-700 underline-offset-2 hover:underline"
              >
                Full service-area list
              </Link>
              .
            </p>
          </div>
          <a
            href={telHref}
            className="mt-6 lg:mt-0 inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-blue-700 transition"
          >
            <Phone className="h-4 w-4" aria-hidden />
            Call {CONTACT_INFO.phone.display}
          </a>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div
            id="location"
            className="rounded-2xl border border-blue-200 bg-blue-50/60 p-6 shadow-sm"
          >
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
                <MapPin className="h-5 w-5" aria-hidden />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Where we work</h3>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                  <strong className="text-slate-900">Silverstone Ranch</strong> — guard-gated community in{' '}
                  <strong>Centennial Hills</strong> near <strong>Tule Springs</strong> and{' '}
                  <strong>North Las Vegas</strong>, <strong>ZIP {CONTACT_INFO.address.postalCode}</strong> and 89143. Dr.
                  Duffy focuses on this neighborhood and nearby subdivisions (Wyeth Ranch, Carmel Canyon, Iron Mountain
                  Ranch, and more) so advice stays hyperlocal.
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  <li>
                    <Link
                      href="/map"
                      className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-xs font-semibold text-blue-800 hover:bg-blue-50"
                    >
                      <Navigation className="h-3.5 w-3.5" aria-hidden />
                      Interactive map
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/area-info"
                      className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-xs font-semibold text-blue-800 hover:bg-blue-50"
                    >
                      Area guide
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/silverstone-ranch"
                      className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-xs font-semibold text-blue-800 hover:bg-blue-50"
                    >
                      Community hub
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-xs font-semibold text-blue-800 hover:bg-blue-50"
                    >
                      Office & directions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            id="services"
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white">
                <Home className="h-5 w-5" aria-hidden />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-semibold text-slate-900">What we help you do</h3>
                <ul className="mt-4 space-y-4">
                  <li className="flex gap-3">
                    <KeyRound className="h-5 w-5 shrink-0 text-blue-600 mt-0.5" aria-hidden />
                    <div>
                      <p className="font-semibold text-slate-900">Buy in or near Silverstone</p>
                      <p className="text-sm text-slate-600">Private tours, offer strategy, HOA & disclosure review.</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <Link href="/homes-for-sale" className="text-sm font-semibold text-blue-600 hover:text-blue-800">
                          View homes for sale →
                        </Link>
                        <Link href="/book-tour" className="text-sm font-semibold text-blue-600 hover:text-blue-800">
                          Book a tour →
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Home className="h-5 w-5 shrink-0 text-blue-600 mt-0.5" aria-hidden />
                    <div>
                      <p className="font-semibold text-slate-900">Sell & maximize your sale</p>
                      <p className="text-sm text-slate-600">Pricing, presentation, and negotiation for this submarket.</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <Link href="/home-valuation" className="text-sm font-semibold text-blue-600 hover:text-blue-800">
                          Home valuation →
                        </Link>
                        <Link href="/sell-with-agent" className="text-sm font-semibold text-blue-600 hover:text-blue-800">
                          Listing strategy →
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <GraduationCap className="h-5 w-5 shrink-0 text-blue-600 mt-0.5" aria-hidden />
                    <div>
                      <p className="font-semibold text-slate-900">Schools & lifestyle fit</p>
                      <p className="text-sm text-slate-600">Zoning, commute, and amenities for your household.</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <Link href="/schools" className="text-sm font-semibold text-blue-600 hover:text-blue-800">
                          Schools guide →
                        </Link>
                        <Link href="/amenities" className="text-sm font-semibold text-blue-600 hover:text-blue-800">
                          Amenities →
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-3 border-t border-slate-100 pt-6">
                  <Link
                    href="/request-info"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden />
                    Request community info
                  </Link>
                  <Link
                    href="/book-tour"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition"
                  >
                    <Calendar className="h-4 w-4" aria-hidden />
                    Schedule a tour
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
