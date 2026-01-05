'use client'

import { useMemo } from 'react'
import Image from 'next/image'

interface FallingLogo {
  left: number
  top: number
  width: number
  height: number
  duration: number
  delay: number
}

interface ForFunCardProps {
  onClick?: () => void
}

export default function ForFunCard({ onClick }: ForFunCardProps) {
  // Generate random falling logos
  const fallingLogos = useMemo(() => {
    const logos: FallingLogo[] = []
    const count = 15 // Number of falling logos
    
    for (let i = 0; i < count; i++) {
      logos.push({
        left: Math.random() * 100, // 0-100%
        top: -Math.random() * 100 - 50, // Start above viewport
        width: 15 + Math.random() * 20, // 15-35px
        height: 15 + Math.random() * 20, // 15-35px
        duration: 4 + Math.random() * 4, // 4-8 seconds
        delay: Math.random() * 6, // 0-6 seconds delay
      })
    }
    
    return logos
  }, [])

  const contractAddress = '0xE38d1234567890abcdef1234567890abcdef0823' // Example address
  const truncatedAddress = `${contractAddress.slice(0, 5)}...${contractAddress.slice(-4)}`

  return (
    <button
      onClick={onClick}
      type="button"
      className="relative w-full rounded-2xl border-2 border-white/20 overflow-hidden transition-all duration-300 active:scale-[0.98] hover:border-white/40 cursor-pointer appearance-none bg-transparent p-0"
      style={{ height: '200px', background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)' }}
    >
      {/* Falling logos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {fallingLogos.map((logo, index) => (
          <img
            key={index}
            src="/icons/logo.webp"
            alt=""
            className="absolute rounded-full"
            style={{
              left: `${logo.left}%`,
              top: `${logo.top}px`,
              width: `${logo.width}px`,
              height: `${logo.height}px`,
              opacity: 0,
              animation: `falling ${logo.duration}s linear ${logo.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-4">
        {/* EMBER QUILL Title */}
        <div className="text-3xl font-bold mb-3 text-center text-white" style={{ textShadow: '0 0 12px currentColor' }}>
          <span>
            <span className="transition-colors duration-100">E</span>
            <span className="transition-colors duration-100">M</span>
            <span className="transition-colors duration-100">B</span>
            <span className="transition-colors duration-100">E</span>
            <span className="transition-colors duration-100">R</span>
            <span className="transition-colors duration-100"> </span>
            <span className="transition-colors duration-100">Q</span>
            <span className="transition-colors duration-100">U</span>
            <span className="transition-colors duration-100">I</span>
            <span className="transition-colors duration-100">L</span>
            <span className="transition-colors duration-100">L</span>
          </span>
        </div>

        {/* Price Section */}
        <div className="text-lg text-white/90 mb-3 flex items-center justify-center gap-2">
          <span className="text-white/70">Price:</span>
          <span className="font-bold text-white flex items-center gap-1" style={{ textShadow: '0 0 10px rgba(255,255,255,0.7)' }}>
            <Image
              src="/icons/shiba.svg"
              alt="SHIB"
              width={20}
              height={20}
              className="w-5 h-5 rounded-full object-cover"
            />
            <span className="tabular-nums">
              <span className="transition-colors duration-100">$</span>
              <span className="transition-colors duration-100">0</span>
              <span className="transition-colors duration-100">.</span>
              <span className="transition-colors duration-100">0</span>
              <span className="transition-colors duration-100">5</span>
              <span className="transition-colors duration-100">8</span>
              <span className="transition-colors duration-100">8</span>
              <span className="transition-colors duration-100">8</span>
            </span>
          </span>
        </div>

        {/* Contract Address Badge */}
        <div className="flex items-center gap-1 bg-black/60 backdrop-blur-sm rounded-full px-2 py-0.5 border border-white/20">
          <span className="text-[9px] text-white/70 font-medium">
            {truncatedAddress}
          </span>
          <span className="text-[9px] text-white/70 font-medium">we're cooking</span>
        </div>
      </div>
    </button>
  )
}
