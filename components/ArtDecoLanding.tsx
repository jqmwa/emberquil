'use client'

import { useEffect, useRef, useState } from 'react'

export default function ArtDecoLanding() {
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen bg-dark overflow-hidden">
      {/* Geometric Background Patterns */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(193, 178, 255, 0.1) 50px, rgba(193, 178, 255, 0.1) 100px),
            repeating-linear-gradient(-45deg, transparent, transparent 50px, rgba(84, 163, 136, 0.1) 50px, rgba(84, 163, 136, 0.1) 100px)
          `
        }} />
        {/* Vertical rays emanating from center */}
        <div className="absolute inset-0" style={{
          background: `radial-gradient(circle at center, transparent 0%, rgba(193, 178, 255, 0.05) 50%, transparent 100%)`
        }} />
      </div>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-4 py-20"
      >
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          {/* Decorative Top Border */}
          <div className="flex justify-center mb-12">
            <div className="w-full max-w-4xl">
              <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mb-4" />
              <div className="h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />
              <div className="flex justify-center gap-4 mt-4">
                <div className="w-2 h-2 bg-primary rotate-45" />
                <div className="w-2 h-2 bg-secondary rotate-45" />
                <div className="w-2 h-2 bg-orange rotate-45" />
              </div>
            </div>
          </div>

          {/* Main Hero Content */}
          <div className="text-center mb-16 space-y-8">
            {/* Large Geometric Shape */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div 
                  className="w-32 h-32 md:w-48 md:h-48 border-4 border-primary rotate-45"
                  style={{
                    transform: `rotate(${45 + scrollY * 0.1}deg)`,
                    transition: 'transform 0.1s ease-out'
                  }}
                >
                  <div className="absolute inset-4 border-2 border-secondary rotate-45" />
                  <div className="absolute inset-8 border border-orange rotate-45" />
                </div>
              </div>
            </div>

            <h1 
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-tight px-4"
              style={{
                fontFamily: 'serif',
                letterSpacing: '0.05em',
                textShadow: '0 0 30px rgba(193, 178, 255, 0.3)'
              }}
            >
              <span 
                className="text-orange block mb-2"
                style={{
                  textShadow: '0 0 40px rgba(255, 107, 53, 0.6), 0 0 80px rgba(255, 107, 53, 0.3)'
                }}
              >
                EMBERQUILL
              </span>
              <span className="text-white/90 block text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl mt-2">STUDIOS</span>
            </h1>

            {/* Decorative Divider */}
            <div className="flex items-center justify-center gap-4 my-12">
              <div className="h-px w-24 bg-gradient-to-r from-transparent to-primary" />
              <div className="w-3 h-3 border-2 border-primary rotate-45" />
              <div className="h-px w-24 bg-gradient-to-l from-transparent to-secondary" />
              <div className="w-3 h-3 border-2 border-secondary rotate-45" />
              <div className="h-px w-24 bg-gradient-to-r from-transparent to-orange" />
            </div>

            <p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white/80 max-w-3xl mx-auto leading-relaxed px-4"
              style={{
                fontFamily: 'serif',
                letterSpacing: '0.02em',
                lineHeight: '1.8'
              }}
            >
              Where Passion Meets Excellence,{' '}
              <br />
              Hackerhouse <span className="text-orange">For Organic Artists</span> Who Value Innovation and Creativity.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mt-12 sm:mt-16 px-4">
              <button 
                className="group relative px-8 sm:px-10 md:px-12 py-4 sm:py-5 bg-gradient-to-r from-secondary to-secondary text-white font-semibold text-base sm:text-lg uppercase tracking-wider overflow-hidden transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                style={{
                  clipPath: 'polygon(8% 0, 100% 0, 92% 100%, 0% 100%)',
                  letterSpacing: '0.1em'
                }}
              >
                <span className="relative z-10">Apply Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange to-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              
              <button 
                className="group px-8 sm:px-10 md:px-12 py-4 sm:py-5 border-2 border-primary/50 text-primary font-semibold text-base sm:text-lg uppercase tracking-wider transition-all duration-300 hover:bg-primary/10 hover:border-primary w-full sm:w-auto"
                style={{
                  letterSpacing: '0.1em'
                }}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <span className="text-white/50 text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent mx-auto" />
          </div>
        </div>

        {/* Decorative Elements - Corner Patterns */}
        <div className="absolute top-20 left-8 opacity-20 hidden lg:block">
          <div className="grid grid-cols-4 gap-2">
            {Array.from({ length: 16 }).map((_, i) => (
              <div 
                key={i}
                className={`w-3 h-3 ${i % 4 < 2 ? 'bg-primary' : 'bg-secondary'}`}
                style={{ transform: 'rotate(45deg)' }}
              />
            ))}
          </div>
        </div>

        <div className="absolute top-20 right-8 opacity-20 hidden lg:block">
          <div className="grid grid-cols-4 gap-2">
            {Array.from({ length: 16 }).map((_, i) => (
              <div 
                key={i}
                className={`w-3 h-3 ${i % 4 >= 2 ? 'bg-primary' : 'bg-orange'}`}
                style={{ transform: 'rotate(45deg)' }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent mb-2" />
              <h2 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-wider px-4"
                style={{
                  fontFamily: 'serif',
                  letterSpacing: '0.1em',
                  textShadow: '0 0 20px rgba(193, 178, 255, 0.2)'
                }}
              >
                Excellence
              </h2>
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-secondary to-transparent mt-2" />
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                title: 'Premium Spaces',
                description: 'State-of-the-art studios designed for creators who demand the finest tools and environments.',
                icon: '◈'
              },
              {
                title: 'Lasting Legacy',
                description: 'Build your career with a 5-year commitment that transforms passion into sustainable success.',
                icon: '◆'
              },
              {
                title: 'Exclusive Community',
                description: 'Join an elite circle of artists, designers, and creators shaping the future of creative industries.',
                icon: '◇'
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group relative p-8 border-2 border-primary/20 bg-dark/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/60 hover:bg-dark/70"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))'
                }}
              >
                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-primary/40" />
                <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-secondary/40" />

                <div className="text-5xl mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 
                  className="text-xl sm:text-2xl font-bold mb-4 text-white uppercase tracking-wide"
                  style={{
                    fontFamily: 'serif',
                    letterSpacing: '0.05em'
                  }}
                >
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed" style={{ lineHeight: '1.8' }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Showcase */}
      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <div className="inline-block">
                <div className="h-px w-24 bg-primary mb-3" />
                <h2 
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-wider mb-3 px-2"
                  style={{
                    fontFamily: 'serif',
                    letterSpacing: '0.1em'
                  }}
                >
                  Why Choose
                  <br />
                  <span className="gradient-text">Us</span>
                </h2>
                <div className="h-px w-24 bg-secondary mt-3" />
              </div>

              <div className="space-y-6">
                {[
                  'Professional community of streamers and artistic content creators',
                  'Long-term career stability with yearly contracts',
                  'Access to premium equipment and facilities',
                  'Proven track record of artist development',
                  'Innovation-first approach to creative spaces'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-2">
                      <div className="w-2 h-2 bg-orange rotate-45" />
                    </div>
                    <p 
                      className="text-base sm:text-lg text-white/80 flex-1"
                      style={{ lineHeight: '1.6' }}
                    >
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>

              <button 
                className="mt-8 px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold text-sm sm:text-base uppercase tracking-wider transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                style={{
                  clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0% 100%)',
                  letterSpacing: '0.1em'
                }}
              >
                Discover More
              </button>
            </div>

            {/* Right Side - Visual Element */}
            <div className="relative h-96 lg:h-[600px]">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Geometric Pattern */}
                <div className="relative w-full h-full max-w-md">
                  <div className="absolute inset-0 border-4 border-primary/30 rotate-45" />
                  <div className="absolute inset-8 border-4 border-secondary/30 rotate-45" />
                  <div className="absolute inset-16 border-4 border-orange/30 rotate-45" />
                  
                  {/* Center Element */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 border-4 border-primary rotate-45">
                      <div className="absolute inset-4 border-2 border-secondary rotate-45" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-5xl mx-auto">
          <div 
            className="relative p-12 md:p-20 text-center border-4 border-primary/30 bg-dark/50 backdrop-blur-sm"
            style={{
              clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)'
            }}
          >
            {/* Corner Decorations */}
            <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-primary/50" />
            <div className="absolute top-0 right-0 w-32 h-32 border-t-4 border-r-4 border-secondary/50" />
            <div className="absolute bottom-0 left-0 w-32 h-32 border-b-4 border-l-4 border-orange/50" />
            <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-primary/50" />

            <div className="relative z-10">
              <div className="flex justify-center mb-8">
                <div className="w-16 h-16 border-4 border-primary rotate-45">
                  <div className="absolute inset-4 border-2 border-secondary rotate-45" />
                </div>
              </div>

              <h2 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 text-white uppercase tracking-wider px-4"
                style={{
                  fontFamily: 'serif',
                  letterSpacing: '0.05em'
                }}
              >
                Ready to Begin
                <br />
                <span className="gradient-text">Your Journey?</span>
              </h2>

              <div className="flex items-center justify-center gap-4 my-12">
                <div className="h-px w-20 bg-primary" />
                <div className="w-2 h-2 bg-secondary rotate-45" />
                <div className="h-px w-20 bg-orange" />
              </div>

              <p 
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 mb-12 max-w-3xl mx-auto px-4"
                style={{
                  fontFamily: 'serif',
                  lineHeight: '1.8'
                }}
              >
                Join EmberQuill Studios and transform your passion into a sustainable career. 
                Sign your 5-year contract and begin building your future today.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
                <button 
                  className="px-8 sm:px-10 md:px-12 py-4 sm:py-5 bg-gradient-to-r from-primary to-secondary text-white font-bold text-base sm:text-lg uppercase tracking-wider transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                  style={{
                    clipPath: 'polygon(8% 0, 100% 0, 92% 100%, 0% 100%)',
                    letterSpacing: '0.1em'
                  }}
                >
                  Apply Now
                </button>
                
                <button 
                  className="px-8 sm:px-10 md:px-12 py-4 sm:py-5 border-2 border-primary text-primary font-bold text-base sm:text-lg uppercase tracking-wider transition-all duration-300 hover:bg-primary/10 w-full sm:w-auto"
                  style={{
                    letterSpacing: '0.1em'
                  }}
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 border-t border-primary/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-white/60">
              <p className="uppercase tracking-wider text-sm">© 2024 EmberQuill Studios</p>
            </div>
            <div className="flex gap-8">
              {['Studio', 'Collection', 'Benefits', 'Contact'].map((link) => (
                <a 
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-white/60 hover:text-primary uppercase text-sm tracking-wider transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
