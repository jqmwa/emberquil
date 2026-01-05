'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const badges = [
  { level: 1, src: '/icons/badges/72x72_Ember_Badges1.webp' },
  { level: 2, src: '/icons/badges/72x72_Ember_Badges2.webp' },
  { level: 3, src: '/icons/badges/72x72_Ember_Badges3.webp' },
  { level: 4, src: '/icons/badges/72x72_Ember_Badges4.webp' },
  { level: 5, src: '/icons/badges/72x72_Ember_Badges5.webp' },
  { level: 6, src: '/icons/badges/72x72_Ember_Badges6.webp' },
]

export default function LevelUpBadgesCard() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % badges.length)
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="relative w-full rounded-2xl border-2 border-orange overflow-hidden transition-all duration-300 hover:border-orange/80"
      style={{ height: '140px', background: 'rgba(255, 107, 53, 0.3)' }}
    >
      {/* Main content */}
      <div className="relative z-10 flex items-center h-full p-4">
        {/* Left side - Text content */}
        <div className="flex-1 flex flex-col justify-center h-full text-left pr-16">
          {/* Title with READY badge */}
          <div className="flex items-center gap-2 mb-1">
            <div className="font-bold text-xl text-white">
              Level-Up Badges
            </div>
            <div className="px-2 py-1 bg-orange/20 rounded-sm border border-orange/50 inline-flex items-center justify-center min-w-[40px]">
              <span className="text-sm font-semibold text-white uppercase">READY</span>
            </div>
          </div>
          
          {/* Subtitle */}
          <div className="text-sm text-white/70 mb-1">
            Rewards for studio longevity
          </div>

          {/* Badge */}
          <div className="text-[8px] text-white/60 mt-1">
            Free to earn - Yours Forever
          </div>
        </div>

        {/* Right side - Image */}
        <div className="absolute right-0 top-0 bottom-0 flex items-center justify-center relative w-40 h-full md:w-48 flex-shrink-0">
          {badges.map((badge, index) => (
            <div
              key={badge.level}
              className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in"
              style={{
                opacity: index === currentIndex ? 1 : 0,
                zIndex: index === currentIndex ? 1 : 0,
              }}
            >
              <div className="relative w-40 h-40 md:w-48 md:h-48">
                <Image
                  src={badge.src}
                  alt={`Level ${badge.level} Badge`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 160px, 192px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
