import { Phone, Mail, ExternalLink } from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'
import { CONTACT_INFO } from '@/lib/contact-info'

export default function AgentProfile() {
  return (
    <section id="agent" className="py-20 px-4 sm:px-6 lg:px-8 bg-white scroll-mt-20">
      <div className="mx-auto max-w-4xl">
        <SectionHeading className="text-center">Dr. Jan Duffy, a Top 1% Las Vegas REALTOR®</SectionHeading>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Agent Photo */}
          <div className="relative">
            <div className="relative w-full aspect-square overflow-hidden rounded-lg bg-gray-200 shadow-xl">
              <picture>
                <source srcSet="/images/agent/dr-jan-duffy-headshot-02.jpg" type="image/jpeg" />
                <img
                  src="/images/agent/dr-jan-duffy-headshot-02.jpg"
                  alt="Portrait of Dr. Jan Duffy, Las Vegas REALTOR"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </picture>
            </div>
          </div>

          {/* Agent Info */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              With specialized expertise in luxury homes and new construction in sought-after communities 
              like Silverstone Ranch, Dr. Duffy offers a complete home-buying solution.
            </h3>

            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">
                Making Your Dream Home Attainable:
              </h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Access to trusted lenders with competitive rates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Variety of financing options to suit your needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Quick pre-approval process</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Same-day private showings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Expert negotiation for this luxury home</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Seamless transaction management</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-700 mb-6">
              As your dedicated agent, Dr. Duffy connects you with her network of preferred lenders who 
              can create the perfect financing package for this property. From conventional loans to 
              jumbo mortgages, her financial partners ensure you get the most favorable terms.
            </p>

            <p className="text-gray-700 mb-6">
              Experience stress-free luxury home buying with an agent who handles every detail - from 
              financing to final keys. Available 24/7 to answer your questions and guide you through 
              each step.
            </p>

            <div className="border-t pt-6 space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-600" />
                <a
                  href={`tel:${CONTACT_INFO.phone.tel}`}
                  className="text-lg font-semibold text-gray-900 hover:text-blue-600"
                >
                  {CONTACT_INFO.phone.display}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-600" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-lg font-semibold text-gray-900 hover:text-blue-600"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <ExternalLink className="h-5 w-5 text-blue-600" />
                <a
                  href={CONTACT_INFO.website.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-gray-900 hover:text-blue-600"
                >
                  {CONTACT_INFO.website.display}
                </a>
              </div>
              <div className="text-sm text-gray-600 mt-2">
                License: {CONTACT_INFO.license}
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold text-gray-900 mb-4">
                Schedule your private showing today and let&apos;s discuss making this stunning 
                Silverstone Ranch home yours.
              </h4>
              <a
                href="/book-tour"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Book Your Tour
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

