'use client'

const amenities = [
  {
    title: 'Equity for All',
    description: 'Equal equity opportunities for male and female artists',
    icon: '⚖️',
  },
  {
    title: 'Soundproof Apartments',
    description: '2-3 bedroom apartment complexes including utilities',
    icon: '🏠',
  },
  {
    title: 'Dining Facility',
    description: 'On-site dining facility for all residents',
    icon: '🍽️',
  },
  {
    title: 'Web2/3 Education',
    description: 'Comprehensive education in Web2 and Web3 technologies',
    icon: '💻',
  },
  {
    title: 'Financial Literacy',
    description: 'Programs to build financial knowledge and independence',
    icon: '📊',
  },
  {
    title: 'Project Investment',
    description: 'Up to 49% equity investment for personal projects (to be discussed) after completing tasked projects',
    icon: '🚀',
  },
]

export default function StudioAmenities() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-44 pb-20 md:pt-52 md:pb-32 bg-dark">
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="glass rounded-3xl p-6 md:p-12 lg:p-16">
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-orange">
            Our Studio Amenities
          </h2>

          {/* Amenities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="bg-dark rounded-2xl p-6 border border-primary/20 hover:scale-105 transition-all duration-300 group"
                style={{
                  animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="text-5xl mb-4">{amenity.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-orange">
                  {amenity.title}
                </h3>
                <p className="text-white/90 leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}