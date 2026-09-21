import { SectionHeading } from '@/components/SectionHeading'

export default function VideoSection() {
  return (
    <section id="video" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 scroll-mt-20">
      <div className="mx-auto max-w-4xl">
        <SectionHeading className="text-center">Silverstone Ranch Virtual Tour</SectionHeading>
        
        <div className="bg-gray-100 rounded-lg overflow-hidden aspect-video mb-8">
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-gray-600">
              Video tour will be embedded here
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-700 mb-4">
            Experience Silverstone Ranch through an immersive virtual tour. Preview signature residences, community
            parks, and neighborhood amenities without leaving home.
          </p>
          <a
            href="/book-tour"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Schedule a Live Virtual Tour
          </a>
        </div>
      </div>
    </section>
  )
}

