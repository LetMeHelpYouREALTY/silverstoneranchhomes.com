import { SectionHeading } from '@/components/SectionHeading'

export default function PriceFeatures() {
  return (
    <section id="price-features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white scroll-mt-20">
      <div className="mx-auto max-w-4xl">
        <SectionHeading>Featured Silverstone Ranch Highlights</SectionHeading>

        <div className="bg-blue-50 rounded-lg p-8 mb-8">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2 uppercase tracking-wide">Featured Residence Insight</p>
            <p className="text-5xl font-bold text-blue-600 mb-4">Private Consultation</p>
            <p className="text-gray-700">
              Connect with Dr. Jan Duffy for tailored pricing guidance, upcoming listings, and investment opportunities
              across Silverstone Ranch&apos;s gated enclaves.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <SectionHeading as="h3">Residence & Lifestyle Features</SectionHeading>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Granite or quartz chef kitchens with premium appliance packages</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Custom cabinetry, designer lighting, and architectural millwork</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Hardwood, tile, and upgraded carpet blends throughout</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Energy-efficient windows with plantation shutters</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Owner&apos;s retreats with lounge seating and custom closet systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Spa-inspired baths featuring dual vanities, soaking tubs, and glass showers</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Outdoor living rooms, covered patios, and professional landscaping</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Flexible bonus spaces perfect for home offices or fitness studios</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Two- and three-car garages with built-in storage options</span>
              </li>
            </ul>
          </div>

          <div>
            <SectionHeading as="h3">Typical Silverstone Specifications</SectionHeading>
            <dl className="space-y-4">
              <div className="flex justify-between py-2 border-b border-gray-200">
                <dt className="font-medium text-gray-700">Bedrooms</dt>
                <dd className="text-gray-900">3-5</dd>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <dt className="font-medium text-gray-700">Bathrooms</dt>
                <dd className="text-gray-900">2.5-4.5</dd>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <dt className="font-medium text-gray-700">Square Feet</dt>
                <dd className="text-gray-900">2,000 – 4,000+</dd>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <dt className="font-medium text-gray-700">Lot Size</dt>
                <dd className="text-gray-900">Up to 1/3 acre</dd>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <dt className="font-medium text-gray-700">Year Built</dt>
                <dd className="text-gray-900">2003 – 2008</dd>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <dt className="font-medium text-gray-700">Garage Capacity</dt>
                <dd className="text-gray-900">2-3 Cars</dd>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <dt className="font-medium text-gray-700">HOA Lifestyle</dt>
                <dd className="text-gray-900">Guard-gated, parks, trails, and community events</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}

