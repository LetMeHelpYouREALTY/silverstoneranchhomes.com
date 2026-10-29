import Image from 'next/image'
import Link from 'next/link'
import { Mail, Phone, Award } from 'lucide-react'
import { CONTACT_INFO } from '@/lib/contact-info'

export default function AgentSummaryCard() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="relative h-20 w-20 overflow-hidden rounded-full bg-slate-100">
          <Image
            src="/images/agent/dr-jan-duffy-headshot-01.jpg"
            alt="Dr. Jan Duffy headshot"
            fill
            className="object-cover"
            sizes="80px"
            priority
          />
        </div>
        <div className="space-y-1">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Featured REALTOR®</p>
          <h3 className="text-xl font-bold text-slate-900 leading-tight">Dr. Jan Duffy</h3>
          <p className="text-sm text-slate-600">Las Vegas REALTOR® · Licensed since 2008 · 35 years in Las Vegas</p>
        </div>
      </div>

      <ul className="mt-6 space-y-3 text-sm text-slate-700 leading-relaxed">
        <li className="flex items-start gap-2">
          <Award className="h-4 w-4 text-blue-600 mt-1" />
          <span>Concierge representation for guard-gated and luxury clients in Centennial Hills.</span>
        </li>
        <li>
          Data-driven pricing, off-market access, and HOA guidance for every Silverstone sub-association.
        </li>
        <li>
          Relocation-ready support: vetted lenders, inspection teams, movers, and post-close concierge services.
        </li>
      </ul>

      <div className="mt-6 grid gap-3 text-sm font-semibold text-slate-900">
        <a href={`tel:${CONTACT_INFO.phone.tel}`} className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700">
          <Phone className="h-4 w-4" /> {CONTACT_INFO.phone.display}
        </a>
        <a
          href={`mailto:${CONTACT_INFO.email}`}
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
        >
          <Mail className="h-4 w-4" /> {CONTACT_INFO.email}
        </a>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/book-tour"
          className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700 transition"
        >
          Book a Tour
        </Link>
        <Link
          href="/agent"
          className="inline-flex items-center justify-center rounded-lg border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50 transition"
        >
          View Full Bio
        </Link>
      </div>
    </div>
  )
}
