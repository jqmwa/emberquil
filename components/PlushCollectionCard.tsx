'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const dolls = [
  { id: 1, name: 'TLW Doll 1', src: '/dolls/TLW Doll 1 Neutral Transparent.png' },
  { id: 2, name: 'TLW Doll 2', src: '/dolls/TLW Doll 2 Neutral Transparent.png' },
  { id: 3, name: 'TLW Doll 3', src: '/dolls/TLW Doll3 Neutral Transparent.png' },
  { id: 4, name: 'TLW Doll 4', src: '/dolls/TLW Doll4 Nuetral Transparent.png' },
  { id: 5, name: 'TLW Doll 5', src: '/dolls/TLW Doll5 Neutral Transparent.png' },
  { id: 6, name: 'TLW Doll 6', src: '/dolls/TLW Doll6 Nuetral Transparent.png' },
]

export default function PlushCollectionCard() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % dolls.length)
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="relative w-full rounded-2xl border-2 border-white/20 overflow-hidden transition-all duration-300 hover:border-white/40"
      style={{ height: '140px', background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)' }}
    >
      {/* Main content */}
      <div className="relative z-10 flex items-center h-full p-4">
        {/* Left side - Text content */}
        <div className="flex-1 flex flex-col justify-center h-full text-left pr-16">
          {/* Title */}
          <div className="font-bold text-xl text-white mb-1">
            Plush Collection
          </div>
          
          {/* Subtitle */}
          <div className="text-sm text-white/70 mb-1">
            Exclusive Merch
          </div>

          {/* Badge */}
          <div className="text-[8px] text-white/60 mt-1">
            Love Crafted, and Cared
          </div>
        </div>

        {/* Right side - Image */}
        <div className="absolute right-0 top-0 bottom-0 flex items-center justify-center relative w-40 h-full md:w-48 flex-shrink-0">
          {dolls.map((doll, index) => (
            <div
              key={doll.id}
              className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in"
              style={{
                opacity: index === currentIndex ? 1 : 0,
                zIndex: index === currentIndex ? 1 : 0,
              }}
            >
              <div className="relative w-40 h-40 md:w-48 md:h-48">
                <Image
                  src={doll.src}
                  alt={doll.name}
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
