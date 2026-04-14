// Tailwind CSS v3 - no native bindings required

const nextConfig = {
  outputFileTracingRoot: process.cwd(),
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
      {
        source: '/neighborhoods/:path*',
        destination: '/area-info',
        permanent: true,
      },
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
        // Cache static assets aggressively
        source: '/:path*\\.(ico|png|jpg|jpeg|gif|svg|webp|woff|woff2|ttf|eot|css|js)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache _next/static assets
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache images
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

export default nextConfig
