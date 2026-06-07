import { Suspense } from 'react'
import type { Metadata } from 'next'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { SeoJsonLd } from '@/components/SeoJsonLd'
import { GoogleAnalytics } from '@/components/GoogleAnalytics'
import { CONTACT_INFO } from '@/lib/contact-info'
import { GA_MEASUREMENT_ID } from '@/lib/analytics'
import {
  buildLocalBusinessSchema,
  buildOrganizationSchema,
  buildPlaceSchema,
  buildRealEstateAgentSchema,
  buildWebSiteSchema,
} from '@/lib/seo'
import { RealscoutOfficeListings } from '@/components/RealscoutOfficeListings'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

/**
 * Root metadata optimized for SEO, GEO, and AEO best practices (2026).
 * Enhanced with voice search keywords, geographic signals, and AI-friendly descriptions.
 */
export const metadata: Metadata = {
  metadataBase: new URL(CONTACT_INFO.website.base),
  title: 'Silverstone Ranch Homes | Luxury Community in Northwest Las Vegas',
  description:
    'Explore Silverstone Ranch in Northwest Las Vegas—guard-gated enclaves, former golf course view corridors, resort amenities, and expert guidance from Dr. Jan Duffy for buying, selling, or investing in the community.',
  authors: [{ name: CONTACT_INFO.agentName }],
  keywords: [
    'Silverstone Ranch',
    'Silverstone Ranch Las Vegas',
    'Northwest Las Vegas community',
    'Centennial Hills real estate',
    'Las Vegas gated neighborhoods',
    'guard gated communities Las Vegas',
    'luxury homes Las Vegas',
    'Silverstone Ranch homes for sale',
    'Las Vegas real estate agent',
    'Dr. Jan Duffy REALTOR',
    'buy home Silverstone Ranch',
    'sell home Silverstone Ranch',
    'Silverstone golf course',
    'gated community Northwest Las Vegas',
    'Centennial Hills homes',
    'Las Vegas luxury real estate',
    'Berkshire Hathaway Las Vegas',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Silverstone Ranch Homes | Luxury Community in Northwest Las Vegas',
    description:
      'Discover Silverstone Ranch—guard-gated living, former golf fairway corridors, and personalized guidance from Dr. Jan Duffy throughout North Las Vegas.',
    type: 'website',
    locale: 'en_US',
    siteName: CONTACT_INFO.businessName,
    url: CONTACT_INFO.website.url,
    images: [
      {
        url: `${CONTACT_INFO.website.base}/images/property/exterior-front-elevation.jpg`,
        width: 1200,
        height: 630,
        alt: 'Silverstone Ranch luxury home with desert landscaping in Las Vegas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Silverstone Ranch Homes | Luxury Community Overview',
    description:
      'Tour Silverstone Ranch in North Las Vegas—honest updates on the closed golf course, gated enclaves, and expert representation from Dr. Jan Duffy.',
    images: [`${CONTACT_INFO.website.base}/images/property/exterior-front-elevation.jpg`],
    site: CONTACT_INFO.website.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification-token-placeholder',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
  category: 'Real Estate',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <SeoJsonLd
          id="global-schema"
          data={[
            buildOrganizationSchema(),
            buildWebSiteSchema(),
            buildRealEstateAgentSchema(),
            buildLocalBusinessSchema(),
            buildPlaceSchema(),
          ]}
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script
          id="ga-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });
            `,
          }}
        />
        <Script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          type="module"
          strategy="afterInteractive"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `realscout-office-listings { --rs-listing-divider-color: #0e64c8; width: 100%; }`,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        <Header />
        <main className="min-h-screen">{children}</main>
        <RealscoutOfficeListings />
        <Footer />
      </body>
    </html>
  )
}
