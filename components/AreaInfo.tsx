import Link from 'next/link'

export default function AreaInfo() {
  return (
    <section id="area-info" className="py-20 px-4 sm:px-6 lg:px-8 bg-white scroll-mt-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Discover Silverstone Ranch in Centennial Hills, Las Vegas
        </h2>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-6">
            Nestled in the heart of Northwest Las Vegas, Silverstone Ranch offers a prestigious, guard-gated
            lifestyle where modern elegance blends seamlessly with desert charm. Imagine waking up to protected
            Spring Mountain views, stepping outside to mature landscaping, and experiencing a community crafted
            with sophistication and convenience in mind.
          </p>

          <div className="mb-8 rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">
            <strong className="font-semibold">Golf Course Disclosure:</strong> The Silverstone golf course has been
            closed since 2015. It sold at auction in May 2025, but future use remains undetermined. Homes along the
            former fairways currently overlook dormant land.
            <Link
              href="/golf-course-status"
              className="ml-2 font-semibold text-amber-900 underline decoration-amber-500 decoration-2 underline-offset-4 hover:text-amber-700"
            >
              Review the complete status update →
            </Link>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            This exclusive, guard-gated enclave isn&apos;t just a place to live; it&apos;s a lifestyle upgrade. 
            Located just 10 minutes from designer shopping at Centennial Center, top-rated CCSD schools, and 
            the sprawling 680-acre Floyd Lamb Park, every detail has been designed to enhance your daily life. 
            The nearby 215 Beltway puts the Strip just 30 minutes away, while world-class healthcare at 
            Centennial Hills Hospital ensures peace of mind right in your neighborhood.
          </p>

          <div className="bg-blue-50 rounded-lg p-6 my-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Prime Location Benefits</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">📍</span>
                <span><strong>10 minutes</strong> from designer shopping at Centennial Center</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">🏫</span>
                <span><strong>Top-rated CCSD schools</strong> in the area</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">🌳</span>
                <span><strong>680-acre Floyd Lamb Park</strong> for outdoor recreation</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">🛣️</span>
                <span><strong>215 Beltway access</strong> - Strip just 30 minutes away</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">🏥</span>
                <span><strong>Centennial Hills Hospital</strong> for world-class healthcare</span>
              </li>
            </ul>
          </div>

          <div className="mb-8 rounded-lg border border-blue-100 bg-white/60 p-5 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">School Snapshot (Jun 2026)</h3>
            <div className="grid gap-4 sm:grid-cols-3 text-xs text-gray-700">
              <div className="rounded-lg border border-blue-100 bg-blue-50 p-3">
                <p className="font-semibold text-blue-700 uppercase tracking-wide mb-1">O&apos;Roarke ES</p>
                <p className="font-semibold text-gray-900">GreatSchools 7/10</p>
                <p>STEM labs, robotics club, enrichment tutoring.</p>
              </div>
              <div className="rounded-lg border border-blue-100 bg-blue-50 p-3">
                <p className="font-semibold text-blue-700 uppercase tracking-wide mb-1">Cadwallader MS</p>
                <p className="font-semibold text-gray-900">GreatSchools 8/10</p>
                <p>Engineering electives, award-winning band.</p>
              </div>
              <div className="rounded-lg border border-blue-100 bg-blue-50 p-3">
                <p className="font-semibold text-blue-700 uppercase tracking-wide mb-1">Arbor View HS</p>
                <p className="font-semibold text-gray-900">GreatSchools 7/10</p>
                <p>AP, medical academy CTE tracks, elite athletics.</p>
              </div>
            </div>
            <p className="mt-3 text-[11px] text-gray-500">
              Verify attendance boundaries with CCSD at
              <a
                href="https://ccsd.net/schools/zoning/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 font-semibold text-blue-600 hover:underline"
              >
                ccsd.net/schools/zoning
              </a>
              {' '}or call (702) 799-6430.
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Beyond its prime location, this luxury Las Vegas community boasts immaculately manicured 
            landscapes, resort-style amenities, and Mediterranean-inspired architecture that radiates 
            elegance. Whether you&apos;re lounging poolside, exploring nearby nature trails, or enjoying 
            the upscale charm of the neighborhood, you&apos;ll quickly see why Centennial Hills ranks among 
            Las Vegas&apos; fastest-growing luxury communities, with property values appreciating 15% annually.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Silverstone Ranch remains one of Las Vegas&apos; most coveted addresses—where lifestyle, luxury, and
            community converge. Connect with Dr. Jan Duffy to confirm school options, review HOA disclosures, and
            explore which village best matches your goals.
          </p>
        </div>
      </div>
    </section>
  )
}

