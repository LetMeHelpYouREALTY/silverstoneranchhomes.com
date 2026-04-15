import { Suspense } from 'react'
import type { Metadata } from 'next'
import Script from 'next/script'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { SeoJsonLd } from '@/components/SeoJsonLd'
import { GoogleAnalytics } from '@/components/GoogleAnalytics'
import { RealscoutOfficeListingsWrapper } from '@/components/RealscoutOfficeListingsWrapper'
import { CONTACT_INFO } from '@/lib/contact-info'
import { buildPageTitle } from '@/lib/metadata'
import { GA_MEASUREMENT_ID } from '@/lib/analytics'
import {
  buildLocalBusinessSchema,
  buildOrganizationSchema,
  buildPlaceSchema,
  buildRealEstateAgentSchema,
  buildWebSiteSchema,
} from '@/lib/seo'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(CONTACT_INFO.website.base),
  title: {
    default: CONTACT_INFO.businessName,
    template: `%s | ${CONTACT_INFO.businessName}`,
  },
  description:
    'Explore Silverstone Ranch, Tule Springs, and Centennial Hills in Northwest Las Vegas—guard-gated enclaves, resort amenities, and expert real estate guidance from Dr. Jan Duffy for buying, selling, or investing.',
  authors: [{ name: CONTACT_INFO.agentName }],
  keywords: [
    'Silverstone Ranch',
    'Silverstone Ranch Las Vegas',
    'Northwest Las Vegas community',
    'Centennial Hills real estate',
    'Las Vegas gated neighborhoods',
    'Dr. Jan Duffy',
    'Las Vegas REALTOR',
    'luxury homes Las Vegas',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: buildPageTitle('Luxury Community in Northwest Las Vegas'),
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
    title: buildPageTitle('Luxury Community Overview'),
    description:
      'Tour Silverstone Ranch in North Las Vegas—honest updates on the closed golf course, gated enclaves, and expert representation from Dr. Jan Duffy.',
    images: [`${CONTACT_INFO.website.base}/images/property/exterior-front-elevation.jpg`],
    site: CONTACT_INFO.website.url,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to critical third-party origins - must be early in head */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://em.realscout.com" />
        <link rel="dns-prefetch" href="https://em.realscout.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        {/* Load Inter font asynchronously to avoid 750ms render blocking */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
                link.media = 'print';
                link.onload = function() { this.media = 'all'; };
                document.head.appendChild(link);
              })();
            `,
          }}
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-page-custom-font */}
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </noscript>
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
        {/* Defer Google Tag Manager to after page becomes interactive */}
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
        {/* Realscout script and styles are now loaded dynamically by the component when in view */}
      </head>
      <body className="font-sans antialiased">
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        <Header />
        <main className="min-h-screen">{children}</main>
        <RealscoutOfficeListingsWrapper />
        <Footer />
      </body>
    </html>
  )
}
