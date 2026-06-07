import type { Metadata } from 'next'
import { SeoJsonLd } from '@/components/SeoJsonLd'
import { buildFaqSchema, buildWebPageSchema, buildBreadcrumbList } from '@/lib/seo'
import { CONTACT_INFO } from '@/lib/contact-info'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Silverstone Ranch FAQ | Common Questions About Las Vegas Luxury Homes',
  description:
    'Answers to frequently asked questions about Silverstone Ranch homes, HOA fees, guard gate access, golf course status, pricing, and buying or selling luxury real estate in Northwest Las Vegas.',
  alternates: {
    canonical: '/faq',
  },
  openGraph: {
    title: 'Silverstone Ranch FAQ | Your Questions Answered',
    description:
      'Get answers about Silverstone Ranch luxury homes, HOA details, community amenities, and the home buying process in Northwest Las Vegas.',
    url: `${CONTACT_INFO.website.base}/faq`,
    type: 'website',
  },
}

const faqData = [
  {
    question: 'What is Silverstone Ranch?',
    answer:
      'Silverstone Ranch is a guard-gated master-planned community in Northwest Las Vegas, Nevada, located in the Centennial Hills area. The community features luxury single-family homes built around the former Silverstone Golf Club, with multiple sub-associations offering different architectural styles and price points. Homes typically range from $500K to over $1M and feature resort-style amenities including parks, trails, pools, and 24/7 security.',
  },
  {
    question: 'How much do homes cost in Silverstone Ranch?',
    answer:
      'As of November 2025, the median home price in Silverstone Ranch is approximately $685,000, representing a 5.2% year-over-year increase. Active listings range from around $550,000 for smaller homes to over $1.2 million for larger estate homes with premium lots. Renovated homes with modern upgrades command premium prices, while properties backing to the former golf course may be priced more competitively pending course status resolution.',
  },
  {
    question: 'What are the HOA fees in Silverstone Ranch?',
    answer:
      'Silverstone Ranch HOA fees vary by sub-association but typically range from $80 to $150 per month for the master association, plus an additional $50 to $120 per month for sub-association dues. Total combined HOA fees generally range from $130 to $270 monthly. These fees cover 24/7 guard gate security, community parks and trails, landscaping maintenance, pool facilities, and common area upkeep. Some sub-associations include additional amenities that affect the fee structure.',
  },
  {
    question: 'What is the status of the Silverstone Golf Club?',
    answer:
      'The Silverstone Golf Club closed in 2019 and is currently dormant. The City of Las Vegas and developers have discussed potential redevelopment plans, but as of 2025, no final decisions have been announced. Buyers should be aware that the golf course status is uncertain and may affect property values and future development. Dr. Jan Duffy tracks city filings and HOA updates weekly to inform clients of any changes. Full disclosure of the golf course status is required in all property transactions.',
  },
  {
    question: 'How long does it take to sell a home in Silverstone Ranch?',
    answer:
      'As of November 2025, the average days on market for Silverstone Ranch homes is approximately 13 days. However, this varies significantly based on pricing, condition, and marketing strategy. Well-staged homes priced competitively often receive multiple offers within the first week. Overpriced or poorly presented properties may sit on the market for 60+ days. Professional staging, professional photography, and accurate pricing based on recent comparable sales are critical for achieving a quick sale.',
  },
  {
    question: 'Is Silverstone Ranch a good investment?',
    answer:
      'Silverstone Ranch has shown consistent appreciation over the past decade, with 2025 data showing 5.2% year-over-year growth. The community benefits from limited new inventory, strong buyer demand for guard-gated security, proximity to employment centers and shopping, and mature landscaping. Investment considerations include the uncertain golf course status, HOA fees, and the broader Las Vegas real estate market trends. Many investors purchase properties for rental income or long-term appreciation, particularly in the $600K-$800K price range.',
  },
  {
    question: 'What are the guard gate procedures for Silverstone Ranch?',
    answer:
      'Silverstone Ranch features 24/7 staffed guard gates at community entrances. Residents receive gate access credentials and can pre-register guests online or via phone. Visitors must provide identification and the resident\'s name or address to gain entry. Delivery drivers and service providers are verified before entry. The guard gate system enhances security and provides peace of mind for families, though it may add a few minutes to entry during peak times.',
  },
  {
    question: 'Can I tour Silverstone Ranch homes before buying?',
    answer:
      'Yes, private tours of Silverstone Ranch homes and the community are available through Dr. Jan Duffy. Tours typically include viewing active listings, driving through different sub-associations, visiting community amenities like parks and pools, and discussing pricing trends and HOA details. Virtual tours and video walkthroughs are also available for out-of-state buyers. To schedule a tour, contact Dr. Duffy at (702) 500-1530 or visit the Book a Tour page.',
  },
  {
    question: 'What is included in a Silverstone Ranch home valuation?',
    answer:
      'A professional home valuation for Silverstone Ranch includes a comprehensive market analysis of recent comparable sales within your sub-association, assessment of property condition and upgrades, evaluation of lot characteristics and golf course proximity, review of current market absorption rates and buyer demand, pricing strategy recommendations based on your timeline, and staging and presentation guidance. Dr. Jan Duffy provides complimentary valuations with no obligation to list. The valuation process typically takes 2-3 days and includes a detailed written report.',
  },
  {
    question: 'What is the buying process for Silverstone Ranch homes?',
    answer:
      'The home buying process in Silverstone Ranch typically follows these steps: 1) Get pre-approved for a mortgage to understand your budget, 2) Schedule tours of available properties with a buyer\'s agent, 3) Review HOA documents and disclosures including golf course status, 4) Submit an offer with earnest money deposit, 5) Complete home inspection and negotiate repairs if needed, 6) Finalize financing and appraisal, 7) Conduct final walkthrough, 8) Close escrow and receive keys. The entire process typically takes 30-45 days from offer acceptance to closing, though cash purchases can close faster.',
  },
  {
    question: 'Does Dr. Jan Duffy represent both buyers and sellers?',
    answer:
      'Yes, Dr. Jan Duffy provides full-service representation for both buyers and sellers in Silverstone Ranch and throughout Northwest Las Vegas. Buyer services include property search assistance, market analysis, offer negotiation, inspection coordination, and closing support. Seller services include home valuation, pricing strategy, professional staging, marketing and photography, negotiation, and transaction management. Dr. Duffy has earned the Berkshire Hathaway Circle award as a top 1% REALTOR® for closed volume in Las Vegas.',
  },
  {
    question: 'What makes Silverstone Ranch different from other Las Vegas communities?',
    answer:
      'Silverstone Ranch distinguishes itself through 24/7 guard-gated security, mature landscaping and tree-lined streets uncommon in newer developments, central location in Centennial Hills with easy access to the 95 and 215 freeways, established community with a strong HOA and well-maintained amenities, larger lot sizes compared to newer subdivisions, proximity to top-rated schools including Centennial High School, and a diverse mix of architectural styles across multiple sub-associations. The community attracts families, professionals, and retirees seeking luxury with security.',
  },
]

export default function FAQPage() {
  const faqSchema = buildFaqSchema('/faq', faqData)

  const pageSchema = buildWebPageSchema({
    path: '/faq',
    name: 'Silverstone Ranch Frequently Asked Questions',
    description:
      'Comprehensive answers to common questions about buying, selling, and living in Silverstone Ranch luxury homes in Northwest Las Vegas.',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'FAQ', path: '/faq' },
    ],
  })

  return (
    <main className="bg-white">
      <SeoJsonLd data={[faqSchema, pageSchema]} />

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
            Frequently Asked Questions
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Your Silverstone Ranch Questions Answered
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get expert answers about Silverstone Ranch homes, HOA fees, community amenities, buying and selling
            processes, and everything you need to know about Northwest Las Vegas luxury real estate.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
              <h2 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h2>
              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Have More Questions?</h2>
          <p className="text-lg mb-6 text-blue-100">
            Dr. Jan Duffy provides personalized answers and expert guidance for all your Silverstone Ranch real estate
            needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Contact Dr. Duffy
            </Link>
            <Link
              href="/book-tour"
              className="px-8 py-3 bg-blue-800 text-white rounded-lg font-semibold hover:bg-blue-900 transition-colors"
            >
              Schedule a Tour
            </Link>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Link href="/market-insights" className="p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold text-gray-900 mb-2">📊 Market Insights</h3>
            <p className="text-gray-600 text-sm">
              Current pricing trends, absorption rates, and market analysis for Silverstone Ranch.
            </p>
          </Link>
          <Link href="/home-valuation" className="p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold text-gray-900 mb-2">💰 Home Valuation</h3>
            <p className="text-gray-600 text-sm">
              Get a complimentary professional valuation of your Silverstone Ranch property.
            </p>
          </Link>
          <Link href="/area-info" className="p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold text-gray-900 mb-2">🏘️ Area Guide</h3>
            <p className="text-gray-600 text-sm">
              Learn about Northwest Las Vegas schools, shopping, dining, and lifestyle amenities.
            </p>
          </Link>
        </div>
      </div>
    </main>
  )
}
