import Link from 'next/link'
import { Phone, Mail, ExternalLink, MessageCircle, Linkedin, Facebook, Home, Calculator, Building2, Image as ImageIcon, MapPin, User, Calendar, FileText, Sparkles, DollarSign, Video, Info, Shield, AlertTriangle, UserCheck, TrendingUp, ClipboardCheck } from 'lucide-react'
import { CONTACT_INFO } from '@/lib/contact-info'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand & Contact */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                <Home className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  Silverstone Ranch
                </div>
                <div className="text-xs text-gray-400">Homes</div>
              </div>
            </Link>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              {CONTACT_INFO.businessName}. Premier real estate services in Northwest Las Vegas—Silverstone Ranch, Centennial
              Hills, Tule Springs, and surrounding communities.
            </p>
            <div className="space-y-3">
              <a
                href={`tel:${CONTACT_INFO.phone.tel}`}
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Phone</div>
                  <div className="font-semibold">{CONTACT_INFO.phone.display}</div>
                </div>
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Email</div>
                  <div className="font-semibold text-sm break-all">{CONTACT_INFO.email}</div>
                </div>
              </a>
              <a
                href={CONTACT_INFO.chat.url}
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">{CONTACT_INFO.chat.label}</div>
                  <div className="font-semibold text-sm">Start a Conversation</div>
                </div>
              </a>
              <a
                href={CONTACT_INFO.website.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <ExternalLink className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Website</div>
                  <div className="font-semibold text-sm">{CONTACT_INFO.website.display}</div>
                </div>
              </a>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT_INFO.address.display)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Office</div>
                  <div className="font-semibold text-sm">{CONTACT_INFO.address.display}</div>
                </div>
              </a>
            </div>
            <div className="mt-6">
              <h4 className="text-xs uppercase tracking-wide text-gray-400 mb-3">Social Profiles</h4>
              <div className="flex items-center gap-3">
                {CONTACT_INFO.socialProfiles.map((profile) => {
                  const Icon = profile.label === 'LinkedIn' ? Linkedin : Facebook
                  return (
                    <a
                      key={profile.url}
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-lg border border-gray-800 px-3 py-2 text-xs font-semibold text-gray-300 hover:text-white hover:border-blue-500 transition"
                    >
                      <Icon className="h-4 w-4" />
                      {profile.label}
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <Calculator className="h-5 w-5 text-blue-400" />
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/home-valuation" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
                  <Calculator className="h-4 w-4 group-hover:text-blue-400 transition-colors" />
                  <span>Home Valuation</span>
                </Link>
              </li>
              <li>
                <Link href="/request-info" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
                  <Info className="h-4 w-4 group-hover:text-blue-400 transition-colors" />
                  <span>Request Info</span>
                </Link>
              </li>
              <li>
                <Link href="/buy-with-agent" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
                  <UserCheck className="h-4 w-4 group-hover:text-blue-400 transition-colors" />
                  <span>Buyer Representation</span>
                </Link>
              </li>
              <li>
                <Link href="/buyers-checklist" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
                  <ClipboardCheck className="h-4 w-4 group-hover:text-blue-400 transition-colors" />
                  <span>Buyer Checklist</span>
                </Link>
              </li>
              <li>
                <Link href="/book-tour" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
                  <Calendar className="h-4 w-4 group-hover:text-blue-400 transition-colors" />
                  <span>Book Tour</span>
                </Link>
              </li>
              <li>
                <Link href="/homes-for-sale" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
                  <Building2 className="h-4 w-4 group-hover:text-blue-400 transition-colors" />
                  <span>Homes For Sale</span>
                </Link>
              </li>
              <li>
                <Link href="/sell-with-agent" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
                  <TrendingUp className="h-4 w-4 group-hover:text-blue-400 transition-colors" />
                  <span>Listing Representation</span>
                </Link>
              </li>
              <li>
                <Link href="/agent" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
                  <User className="h-4 w-4 group-hover:text-blue-400 transition-colors" />
                  <span>Meet the Agent</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Property */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <ImageIcon className="h-5 w-5 text-blue-400" />
              Property
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/photos" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
                  <ImageIcon className="h-4 w-4 group-hover:text-blue-400 transition-colors" />
                  <span>Photos</span>
                </Link>
              </li>
              <li>
                <Link href="/description" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
                  <FileText className="h-4 w-4 group-hover:text-blue-400 transition-colors" />
                  <span>Description</span>
                </Link>
              </li>
              <li>
                <Link href="/price-features" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
                  <DollarSign className="h-4 w-4 group-hover:text-blue-400 transition-colors" />
                  <span>Price & Features</span>
                </Link>
              </li>
              <li>
                <Link href="/amenities" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
                  <Sparkles className="h-4 w-4 group-hover:text-blue-400 transition-colors" />
                  <span>Amenities</span>
                </Link>
              </li>
              <li>
                <Link href="/map" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
                  <MapPin className="h-4 w-4 group-hover:text-blue-400 transition-colors" />
                  <span>Map</span>
                </Link>
              </li>
              <li>
                <Link href="/video" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
                  <Video className="h-4 w-4 group-hover:text-blue-400 transition-colors" />
                  <span>Video</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Area & Legal */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-blue-400" />
              Area & Info
            </h3>
            <ul className="space-y-3 mb-8">
              <li>
                <Link href="/area-info" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
                  <Info className="h-4 w-4 group-hover:text-blue-400 transition-colors" />
                  <span>Area Info</span>
                </Link>
              </li>
              <li>
                <Link href="/area-insight" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
                  <FileText className="h-4 w-4 group-hover:text-blue-400 transition-colors" />
                  <span>Area Insight</span>
                </Link>
              </li>
              <li>
                <Link href="/market-insights" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
                  <TrendingUp className="h-4 w-4 group-hover:text-blue-400 transition-colors" />
                  <span>Market Insights 2025</span>
                </Link>
              </li>
              <li>
                <Link href="/environmental-risk" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
                  <AlertTriangle className="h-4 w-4 group-hover:text-blue-400 transition-colors" />
                  <span>Environmental Risk</span>
                </Link>
              </li>
              <li>
                <Link href="/golf-course-status" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
                  <AlertTriangle className="h-4 w-4 group-hover:text-blue-400 transition-colors" />
                  <span>Golf Course Status</span>
                </Link>
              </li>
              <li>
                <Link href="/resources/las-vegas-hoa/silverstone-ranch" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
                  <Shield className="h-4 w-4 group-hover:text-blue-400 transition-colors" />
                  <span>Silverstone Ranch HOA</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
                  <Mail className="h-4 w-4 group-hover:text-blue-400 transition-colors" />
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
            <div className="pt-6 border-t border-gray-800">
              <h4 className="text-white font-semibold text-sm mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/sitemap.xml" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <div className="max-w-3xl">
              <p className="text-sm md:text-base font-semibold text-gray-200 tracking-wide">
                Silverstone Ranch Specialists | Dr. Jan Duffy REALTOR® | Berkshire Hathaway HomeServices | License: S.0197614.LLC
              </p>
              <p className="text-xs text-gray-500 mt-1">
                © {currentYear} {CONTACT_INFO.businessName}. All rights reserved.
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Office hours: {CONTACT_INFO.businessHours.display} daily · Languages:{' '}
                {CONTACT_INFO.languagesOffered.join(', ')}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>
                  {CONTACT_INFO.businessHours.display} daily · Call or message
                </span>
              </div>
              <Link
                href="/request-info"
                className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-blue-600 transition"
              >
                Let&apos;s talk Silverstone →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

