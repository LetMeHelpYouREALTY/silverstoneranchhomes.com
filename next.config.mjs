// Tailwind CSS v3 - no native bindings required

const nextConfig = {
  outputFileTracingRoot: process.cwd(),
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imagedelivery.net',
      },
      {
        protocol: 'https',
        hostname: 'em.realscout.com',
      },
      {
        protocol: 'https',
        hostname: 'www.realscout.com',
      },
    ],
  },
  // Optimize production builds - remove console logs in production
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
  webpack: (config) => {
    // Exclude node_modules CSS from PostCSS processing to avoid Tailwind native binding issues
    config.module.rules.forEach((rule) => {
      if (rule.oneOf) {
        rule.oneOf.forEach((oneOf) => {
          if (
            oneOf.use &&
            Array.isArray(oneOf.use) &&
            oneOf.use.some((use) => use.loader && use.loader.includes('postcss-loader'))
          ) {
            // Exclude node_modules CSS files from PostCSS
            const existingExclude = Array.isArray(oneOf.exclude)
              ? oneOf.exclude
              : oneOf.exclude
              ? [oneOf.exclude]
              : []
            oneOf.exclude = [
              ...existingExclude,
              /node_modules/,
            ]
          }
        })
      }
    })
    return config
  },
  async redirects() {
    return [
      // Legacy URLs (GSC 404 cleanup): old neighborhood index routes → area guide
      // NOTE: /neighborhoods/[slug] pages are live — do NOT redirect them.
      // Old resources index and parent HOA path → current HOA guide
      {
        source: '/resources',
        destination: '/resources/las-vegas-hoa/silverstone-ranch',
        permanent: true,
      },
      {
        source: '/resources/las-vegas-hoa',
        destination: '/resources/las-vegas-hoa/silverstone-ranch',
        permanent: true,
      },
      // Nested schools URL → canonical /schools route
      {
        source: '/silverstone-ranch/schools',
        destination: '/schools',
        permanent: true,
      },
      {
        source: '/silverstone-ranch/amenities',
        destination: '/amenities',
        permanent: true,
      },
      // Legacy short URL (buyer-focused; matches /ap, /lc pattern)
      {
        source: '/ub',
        destination: '/buy-with-agent',
        permanent: true,
      },
      // Redirect old short URLs to new canonical paths
      // Note: Host-based redirects (www/non-www, HTTP/HTTPS) are handled by middleware.ts
      {
        source: '/tour',
        destination: '/book-tour',
        permanent: true,
      },
      {
        source: '/ap',
        destination: '/amenities',
        permanent: true,
      },
      {
        source: '/lc',
        destination: '/sell-with-agent',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        // Cache hashed Next.js assets forever
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Git-backed images can be replaced; do not mark 404s immutable.
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=604800',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://em.realscout.com https://www.realscout.com https://www.googletagmanager.com https://www.google-analytics.com https://assets.calendly.com https://calendly.com https://maps.googleapis.com https://maps.gstatic.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://assets.calendly.com https://em.realscout.com",
              "img-src 'self' data: blob: https:",
              "font-src 'self' data: https://fonts.gstatic.com",
              "connect-src 'self' https://em.realscout.com https://www.realscout.com https://www.googletagmanager.com https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com https://assets.calendly.com https://calendly.com https://maps.googleapis.com https://imagedelivery.net https://www.google.com",
              "frame-src https://calendly.com https://www.google.com https://maps.google.com https://www.google.com/maps https://em.realscout.com https://www.realscout.com",
              "media-src 'self' https:",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self' https://calendly.com",
            ].join('; '),
          },
        ],
      },
    ]
  },
}

export default nextConfig
