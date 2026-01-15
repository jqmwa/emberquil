'use client'

import { useState, useRef } from 'react'
import { Section, Container, Button, Card } from '../kit'

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      })
    }
  }

  return (
    <div
      ref={containerRef}
      className="relative min-h-[80vh] flex items-center overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Base grid background */}
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(#3a7a8c 1px, transparent 1px), linear-gradient(90deg, #3a7a8c 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            opacity: 0.1
          }} 
        />
      </div>

      {/* Brightened grid layer - same grid pattern, higher opacity, radial mask around cursor */}
      {isHovering && (
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#e85d04 1px, transparent 1px), linear-gradient(90deg, #e85d04 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            opacity: 0.5,
            maskImage: `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 70%)`,
            WebkitMaskImage: `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 70%)`,
            zIndex: 1
          }}
        />
      )}

      <Section className="min-h-[80vh] flex items-center relative w-full z-10">

      <Container size="lg" className="relative z-10">
        <div className="max-w-4xl">
          {/* Terminal Header */}
          <div className="mb-8 font-mono text-nerv-sage/40 text-xs md:text-sm">
            <span className="text-nerv-orange">&gt;</span> SYSTEM.INIT
            <span className="animate-pulse ml-2">_</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 text-glow-orange uppercase tracking-tight leading-none">
            <span className="text-nerv-orange">EmberQuill</span>
            <br />
            <span className="text-nerv-sage">Studios</span>
          </h1>

          <div className="space-y-4 mb-8">
            <p className="text-lg md:text-xl text-nerv-sage/80 font-mono leading-relaxed">
              A State of the Art manga studio where creative vision meets equitable design. 
              We provide housing, 5-year contracts, and a space for artists to thrive.
            </p>
            
            <Card variant="light" className="p-4 md:p-6">
              <p className="text-sm md:text-base text-nerv-sage/70 font-mono italic">
                "Welcome to the underground facility. Here in the clouds, everything's brighter. 
                The world is clear now. This is just the beginning."
              </p>
            </Card>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" size="lg">
              Apply to Studio
            </Button>
            <div className="game-button-wrapper">
              <div className="sparkle"></div>
              <div className="sparkle"></div>
              <div className="sparkle"></div>
              <div className="sparkle"></div>
              <div className="sparkle"></div>
              <div className="sparkle"></div>
              <Button variant="outline" size="lg" className="game-button">
                <span className="game-button-text">View Our Work</span>
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Artists', value: '4+' },
              { label: 'Projects', value: 'Book One' },
              { label: 'Community', value: 'Growing' },
              { label: 'Status', value: 'Active' },
            ].map((stat) => (
              <div key={stat.label} className="border border-nerv-teal/30 rounded-nerv p-3 bg-nerv-teal/5">
                <div className="text-2xl md:text-3xl font-display font-bold text-nerv-orange mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-nerv-sage/60 font-mono uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
      </Section>
    </div>
  )
}
