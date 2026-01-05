'use client'

import Image from 'next/image'

const badges = [
  { level: 1, src: '/icons/badges/72x72_Ember_Badges1.webp' },
  { level: 2, src: '/icons/badges/72x72_Ember_Badges2.webp' },
  { level: 3, src: '/icons/badges/72x72_Ember_Badges3.webp' },
  { level: 4, src: '/icons/badges/72x72_Ember_Badges4.webp' },
  { level: 5, src: '/icons/badges/72x72_Ember_Badges5.webp' },
  { level: 6, src: '/icons/badges/72x72_Ember_Badges6.webp' },
]

export default function Badges() {
  return (
    <section id="badges" className="relative py-20 px-4 bg-gradient-to-b from-dark to-orange/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Level Up System</span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Progress through levels and unlock exclusive badges as you grow with EmberQuill Studios
          </p>
        </div>

        <div className="glass rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
            {badges.map((badge, index) => (
              <div
                key={badge.level}
                className="flex flex-col items-center space-y-4 group"
              >
                <div className="relative w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/40 transition-all duration-300"></div>
                  <div className="relative w-full h-full">
                    <Image
                      src={badge.src}
                      alt={`Level ${badge.level} Badge`}
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 640px) 80px, (max-width: 1024px) 96px, 128px"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                    Level {badge.level}
                  </div>
                  <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Progress explanation */}
          <div className="mt-12 glass-light rounded-2xl p-6 md:p-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-secondary">
              How Leveling Works
            </h3>
            <p className="text-white/90 text-lg leading-relaxed">
              Complete projects, contribute to the community, and achieve milestones to progress through 
              our 6-level system. Each level unlocks new opportunities, benefits, and recognition within 
              the EmberQuill Studios ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
