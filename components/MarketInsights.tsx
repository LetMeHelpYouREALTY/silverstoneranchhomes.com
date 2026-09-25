import { SectionHeading } from '@/components/SectionHeading'

export default function MarketInsights() {
  const recentSales = [
    {
      address: 'Silverstone Ranch Residence • Silverlake Enclave',
      listed: '$699,500',
      sold: '$710,000',
      daysOnMarket: 7,
      feature: 'Outdoor living upgrade + three-car garage',
    },
    {
      address: 'Guard-Gated Estate • The Palms',
      listed: '$785,000',
      sold: '$799,000',
      daysOnMarket: 9,
      feature: 'Remodeled kitchen, pool cabana, and view deck',
    },
    {
      address: 'Pinehurst Townhome • Golf Corridor',
      listed: '$415,000',
      sold: '$420,000',
      daysOnMarket: 11,
      feature: 'HOA-maintained landscape with shaded patio',
    },
  ]

  return (
    <section id="area-insight" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading className="text-center">Silverstone Ranch: 2025 Seller&apos;s Market Insights</SectionHeading>
        <p className="text-center text-gray-600 mb-12">Last updated: November 7, 2025</p>

        {/* Market Advantage */}
        <div className="bg-white rounded-lg p-8 mb-8 shadow-md">
          <SectionHeading as="h3">Market Advantage: Inventory at Multi-Year Lows</SectionHeading>
          <p className="text-gray-700 mb-4">
            Homeowners and investors in Silverstone Ranch are uniquely positioned in today&apos;s market:
          </p>
          <ul className="space-y-3 text-gray-700 mb-6">
            <li className="flex items-start">
              <span className="text-green-600 mr-2 font-bold">•</span>
              <span>Only <strong>18 active listings</strong> community-wide (down 12% month-over-month)</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2 font-bold">•</span>
              <span><strong>46 relocation and move-up buyers</strong> pre-approved and searching now</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2 font-bold">•</span>
              <span>Multiple offers remain the norm for renovated, move-in-ready homes</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2 font-bold">•</span>
              <span>Listings secure <strong>101.8% of list price</strong> on average when staged and priced to comps</span>
            </li>
          </ul>
        </div>

        {/* Time to Sell */}
        <div className="bg-white rounded-lg p-8 mb-8 shadow-md">
          <SectionHeading as="h3">Time to Sell: Accelerating Market Trends</SectionHeading>
          <p className="text-gray-700 mb-4">
            Over the past 90 days, Silverstone Ranch sales have gained momentum:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">13</div>
              <div className="text-sm text-gray-600">Average days on market</div>
              <div className="text-xs text-green-600 mt-1">(down from 17 last quarter)</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">4.8</div>
              <div className="text-sm text-gray-600">Days to first offer</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">7</div>
              <div className="text-sm text-gray-600">Showings before offer</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">82%</div>
              <div className="text-sm text-gray-600">Selling at or above list price</div>
            </div>
          </div>
        </div>

        {/* Recent Sales */}
        <div className="bg-white rounded-lg p-8 mb-8 shadow-md">
          <SectionHeading as="h3">Recent Sales Highlighting Strong Values</SectionHeading>
          <p className="text-gray-700 mb-6">
            Recent comparable sales in the neighborhood showcase Silverstone Ranch&apos;s strong market performance:
          </p>
          <div className="space-y-4">
            {recentSales.map((sale, index) => (
              <div key={index} className="border-l-4 border-blue-600 pl-4 py-2">
                <div className="font-semibold text-gray-900">{sale.address}</div>
                <div className="text-sm text-gray-600">
                  <span className="font-medium">Listed:</span> {sale.listed} |{' '}
                  <span className="font-medium">Sold:</span> {sale.sold} |{' '}
                  <span className="font-medium">Days on market:</span> {sale.daysOnMarket}
                </div>
                <div className="text-sm text-blue-600 mt-1">
                  <strong>Key feature:</strong> {sale.feature}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Price Momentum */}
        <div className="bg-white rounded-lg p-8 mb-8 shadow-md">
          <SectionHeading as="h3">Price Momentum: Steady Appreciation</SectionHeading>
          <p className="text-gray-700 mb-6">
            Silverstone Ranch continues to demonstrate impressive growth:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600 mb-2">+1.9%</div>
              <div className="text-sm text-gray-600">Trailing 30 days</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600 mb-2">+5.4%</div>
              <div className="text-sm text-gray-600">Year-to-date</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600 mb-2">+7.8%</div>
              <div className="text-sm text-gray-600">Year-over-year</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600 mb-2">+38%</div>
              <div className="text-sm text-gray-600">Five-year appreciation</div>
            </div>
          </div>
          <p className="text-gray-700 mt-6">
            This consistent upward trend reflects sustained demand from relocation buyers, medical professionals, and local move-up households who value guard-gated security.
          </p>
        </div>

        {/* Optimal Selling Periods */}
        <div className="bg-white rounded-lg p-8 mb-8 shadow-md">
          <SectionHeading as="h3">Strategic Timing for Maximum Return</SectionHeading>
          <p className="text-gray-700 mb-6">Data highlights the following prime windows for selling:</p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="border-2 border-blue-200 rounded-lg p-6 bg-blue-50">
              <h4 className="font-semibold text-gray-900 mb-2">March 15 – May 30</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Highest buyer activity</li>
                <li>• Strongest offers</li>
                <li>• Fastest sales</li>
              </ul>
            </div>
            <div className="border-2 border-blue-200 rounded-lg p-6 bg-blue-50">
              <h4 className="font-semibold text-gray-900 mb-2">September 1 – October 15</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Peak corporate relocations</li>
                <li>• Less competition</li>
                <li>• Highly motivated buyers</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
            <h4 className="font-semibold text-gray-900 mb-2">Current Market Opportunity:</h4>
            <p className="text-gray-700 text-sm">
              The next 90 days present an ideal selling window thanks to limited resale inventory, continued relocation activity from California and Arizona, and buyers motivated to close before spring 2026 rate adjustments.
            </p>
          </div>
        </div>

        {/* Competitive Edge */}
        <div className="bg-white rounded-lg p-8 shadow-md">
          <SectionHeading as="h3">Competitive Edge in Silverstone Ranch</SectionHeading>
          <p className="text-gray-700 mb-4">
            Silverstone Ranch residences continue to command premium offers thanks to:
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>Above-average lot size</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>Homes bordering the former golf fairways</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>Recent updates</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>Energy-efficient features</span>
            </li>
          </ul>
          <p className="text-gray-700 mt-6">
            Combined with a tailored marketing strategy from Dr. Jan Duffy, these factors help Silverstone Ranch
            sellers capture top dollar in today&apos;s competitive market.
          </p>
        </div>
      </div>
    </section>
  )
}

