'use client'

import { useState, useEffect, startTransition } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, MessageCircle, ChevronDown, Home, Calculator, Info, Building2, Image, FileText, DollarSign, Sparkles, MapPin, Video, User, Calendar, Shield, AlertTriangle, UserCheck, TrendingUp, ClipboardCheck, LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import GolfCourseAlert from './GolfCourseAlert'
import { CONTACT_INFO } from '@/lib/contact-info'

type NavItem = 
  | {
      label: string
      href: string
      icon: LucideIcon
    }
  | {
      label: string
      icon: LucideIcon
      submenu: Array<{
        label: string
        href: string
        icon: LucideIcon
      }>
    }

const navItems: NavItem[] = [
  {
    label: 'Buy Homes',
    icon: Building2,
    submenu: [
      { label: 'Homes For Sale', href: '/homes-for-sale', icon: Building2 },
      { label: 'Market Insights 2025', href: '/market-insights', icon: TrendingUp },
      { label: 'Buyer Checklist', href: '/buyers-checklist', icon: ClipboardCheck },
      { label: 'Area Guide', href: '/area-info', icon: MapPin },
      { label: 'Why Work with a Buyer Agent', href: '/buy-with-agent', icon: UserCheck },
    ],
  },
  {
    label: 'Sell a Home',
    icon: Calculator,
    submenu: [
      { label: 'Home Valuation', href: '/home-valuation', icon: Calculator },
      { label: 'Strategy Session', href: '/request-info', icon: Phone },
      { label: 'Why List with Dr. Duffy', href: '/sell-with-agent', icon: TrendingUp },
    ],
  },
  {
    label: 'Experience Silverstone',
    icon: Image,
    submenu: [
      { label: 'Photo Gallery', href: '/photos', icon: Image },
      { label: 'Video Tour', href: '/video', icon: Video },
      { label: 'Price & Features', href: '/price-features', icon: DollarSign },
      { label: 'Detailed Description', href: '/description', icon: FileText },
      { label: 'Amenities', href: '/amenities', icon: Sparkles },
      { label: 'Interactive Map', href: '/map', icon: MapPin },
      { label: 'Area Insight', href: '/area-insight', icon: FileText },
      { label: 'Environmental Risk', href: '/environmental-risk', icon: AlertTriangle },
      { label: 'Golf Course Status', href: '/golf-course-status', icon: AlertTriangle },
      { label: 'HOA Guide', href: '/resources/las-vegas-hoa/silverstone-ranch', icon: Shield },
    ],
  },
  { label: 'Meet the Agent', href: '/agent', icon: User },
  { label: 'Book a Tour', href: '/book-tour', icon: Calendar },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    startTransition(() => {
      setMobileMenuOpen(false)
      setActiveDropdown(null)
    })
  }, [pathname])

  const isActive = (href: string) => pathname === href

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center gap-3">
            <Link 
              href="/" 
              className="flex items-center gap-2 group"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                <Home className="h-6 w-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  Silverstone Ranch
                </div>
                <div className="text-xs text-gray-500">Homes</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:gap-1">
            {navItems.map((item) => {
              const hasSubmenu = 'submenu' in item && item.submenu !== undefined
              const Icon = item.icon

              if (hasSubmenu && 'submenu' in item) {
                return (
                  <div
                    key={item.label}
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                      <Icon className="h-4 w-4" />
                      {item.label}
                      <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                    </button>
                    {activeDropdown === item.label && item.submenu && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 animate-fade-in">
                        {item.submenu.map((subItem) => {
                          const SubIcon = subItem.icon
                          return (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className={cn(
                                "flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors",
                                isActive(subItem.href) && "bg-blue-50 text-blue-600 font-semibold"
                              )}
                            >
                              <SubIcon className="h-4 w-4" />
                              {subItem.label}
                            </Link>
                          )
                        })}
                      </div>
                    )}
                  </div>
                )
              }

              if ('href' in item) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all",
                      isActive(item.href) && "text-blue-600 bg-blue-50 font-semibold"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                )
              }
              return null
            })}
          </nav>

          {/* Contact Buttons */}
          <div className="hidden lg:flex lg:items-center gap-3">
            <Link
              href="/request-info"
              className="flex items-center gap-2 rounded-lg border border-blue-100 bg-white px-5 py-2.5 text-sm font-semibold text-blue-700 shadow-sm transition hover:border-blue-200 hover:bg-blue-50"
            >
              <Info className="h-4 w-4" />
              Request Info
            </Link>
            <Link
              href={CONTACT_INFO.chat.url}
              className="flex items-center gap-2 rounded-lg border border-blue-100 bg-white px-5 py-2.5 text-sm font-semibold text-blue-700 shadow-sm transition hover:border-blue-200 hover:bg-blue-50"
            >
              <MessageCircle className="h-4 w-4" />
              {CONTACT_INFO.chat.label}
            </Link>
            <a
              href={`tel:${CONTACT_INFO.phone.tel}`}
              className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-5 py-2.5 text-sm font-semibold text-white hover:from-blue-700 hover:to-blue-800 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden xl:inline">{CONTACT_INFO.phone.display}</span>
              <span className="xl:hidden">Call</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden rounded-lg p-2 text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      <GolfCourseAlert />

      {/* Mobile Navigation */}
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        navItems={navItems} 
        onClose={() => setMobileMenuOpen(false)}
        pathname={pathname}
      />
    </header>
  )
}

function MobileMenu({ 
  isOpen, 
  navItems, 
  onClose,
  pathname 
}: { 
  isOpen: boolean
  navItems: NavItem[]
  onClose: () => void
  pathname: string
}) {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())

  const toggleExpanded = (label: string) => {
    setExpandedItems(prev => {
      const next = new Set(prev)
      if (next.has(label)) {
        next.delete(label)
      } else {
        next.add(label)
      }
      return next
    })
  }

  const isActive = (href: string) => pathname === href

  if (!isOpen) return null

  return (
    <div className="lg:hidden border-t border-gray-200 bg-white animate-slide-down">
      <nav className="px-4 py-4 space-y-1 max-h-[calc(100vh-5rem)] overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon
          const hasSubmenu = 'submenu' in item && item.submenu !== undefined
          const isExpanded = expandedItems.has(item.label)

              if (hasSubmenu && 'submenu' in item && item.submenu) {
                return (
                  <div key={item.label}>
                    <button
                      onClick={() => toggleExpanded(item.label)}
                      className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="h-5 w-5" />
                        {item.label}
                      </div>
                      <ChevronDown className={cn("h-5 w-5 transition-transform", isExpanded && "rotate-180")} />
                    </button>
                    {isExpanded && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.submenu.map((subItem) => {
                          const SubIcon = subItem.icon
                          return (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              onClick={onClose}
                              className={cn(
                                "flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg",
                                isActive(subItem.href) && "bg-blue-50 text-blue-600 font-semibold"
                              )}
                            >
                              <SubIcon className="h-4 w-4" />
                              {subItem.label}
                            </Link>
                          )
                        })}
                      </div>
                    )}
                  </div>
                )
              }

              if ('href' in item) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg",
                      isActive(item.href) && "bg-blue-50 text-blue-600 font-semibold"
                    )}
                  >
                    <Icon className="h-5 w-5" />
                    {item.label}
                  </Link>
                )
              }
              return null
            })}
            <Link
              href="/request-info"
              onClick={onClose}
              className="flex items-center gap-3 rounded-lg border border-blue-100 bg-white px-4 py-3 text-base font-semibold text-blue-700 hover:bg-blue-50"
            >
              <Info className="h-5 w-5" />
              Request Info
            </Link>
            <Link
              href={CONTACT_INFO.chat.url}
              onClick={onClose}
              className="flex items-center gap-3 rounded-lg border border-blue-100 bg-white px-4 py-3 text-base font-semibold text-blue-700 hover:bg-blue-50"
            >
              <MessageCircle className="h-5 w-5" />
              {CONTACT_INFO.chat.label}
            </Link>
            <a
              href={`tel:${CONTACT_INFO.phone.tel}`}
              className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-3 text-base font-semibold text-white hover:from-blue-700 hover:to-blue-800 mt-4"
            >
              <Phone className="h-5 w-5" />
              {CONTACT_INFO.phone.display}
            </a>
          </nav>
        </div>
  )
}
