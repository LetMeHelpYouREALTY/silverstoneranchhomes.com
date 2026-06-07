const CANONICAL_HOST = 'www.silverstoneranchhomes.com'

const nextConfig = {
  outputFileTracingRoot: process.cwd(),
  experimental: {
    reactCompiler: true,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'silverstoneranchhomes.com',
          },
        ],
        destination: `https://${CANONICAL_HOST}/:path*`,
        permanent: true,
      },
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
}

export default nextConfig
