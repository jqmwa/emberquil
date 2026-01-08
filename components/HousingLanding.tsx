'use client'

import { useEffect, useState } from 'react'

export default function HousingLanding() {
  const [scrollY, setScrollY] = useState(0)

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
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="relative z-10 max-w-6xl mx-auto w-full">
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
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
              style={{
                fontFamily: 'serif',
                letterSpacing: '0.05em',
                textShadow: '0 0 30px rgba(193, 178, 255, 0.3)'
              }}
            >
              <span className="text-white block mb-2">Work and Live</span>
              <span className="gradient-text block text-4xl md:text-6xl lg:text-7xl mt-2">Wherever you are</span>
            </h1>

            {/* Decorative Divider */}
            <div className="flex items-center justify-center gap-4 my-12">
              <div className="h-px w-24 bg-gradient-to-r from-transparent to-primary" />
              <div className="w-3 h-3 border-2 border-primary rotate-45" />
              <div className="h-px w-24 bg-gradient-to-l from-transparent to-secondary" />
            </div>

            <p 
              className="text-lg md:text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed"
              style={{
                fontFamily: 'serif',
                letterSpacing: '0.02em',
                lineHeight: '1.8'
              }}
            >
              With a monthly membership to access <u className="text-primary">productive</u> colivings and hotels worldwide
            </p>

            {/* CTA Button */}
            <div className="flex justify-center mt-16">
              <button 
                className="group relative px-12 py-5 bg-white text-dark font-semibold text-lg uppercase tracking-wider overflow-hidden transition-all duration-300 hover:scale-105 border-2 border-dark"
                style={{
                  boxShadow: '1px 1px #2D2A26, 3px 3px #2D2A26, 5px 5px #2D2A26, 7px 7px #2D2A26, 9px 9px #2D2A26',
                  letterSpacing: '0.1em',
                  transition: 'all 0.12s ease 0s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.bottom = '-9px'
                  e.currentTarget.style.left = '9px'
                  e.currentTarget.style.right = '-9px'
                  e.currentTarget.style.top = '9px'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '1px 1px #2D2A26, 3px 3px #2D2A26, 5px 5px #2D2A26, 7px 7px #2D2A26, 9px 9px #2D2A26'
                  e.currentTarget.style.bottom = 'auto'
                  e.currentTarget.style.left = 'auto'
                  e.currentTarget.style.right = 'auto'
                  e.currentTarget.style.top = 'auto'
                }}
              >
                <span className="relative z-10">PACK YOUR BAGS ➔</span>
              </button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center gap-2">
              <span className="text-white/50 text-xs uppercase tracking-widest">Scroll</span>
              <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
            </div>
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

      {/* Decorative Divider */}
      <div className="relative py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-primary via-secondary via-orange to-transparent opacity-30" />
        </div>
      </div>

      {/* Benefits Section - "HackerHouse makes it possible for you to:" */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-wider mb-8"
              style={{
                fontFamily: 'serif',
                letterSpacing: '0.05em',
                textShadow: '0 0 20px rgba(193, 178, 255, 0.2)'
              }}
            >
              HackerHouse makes it possible for you to:
            </h2>
            <div className="flex justify-center gap-4">
              <div className="h-px w-24 bg-primary" />
              <div className="w-2 h-2 bg-secondary rotate-45" />
              <div className="h-px w-24 bg-orange" />
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Sleep and recharge yourself',
                icon: (
                  <div className="w-24 h-24 border-2 border-primary/50 bg-dark/50 backdrop-blur-sm flex items-center justify-center">
                    <div className="w-16 h-16 border border-secondary/50 rotate-45" />
                  </div>
                )
              },
              {
                title: 'Meet purpose-driven people',
                icon: (
                  <div className="w-24 h-24 border-2 border-secondary/50 bg-dark/50 backdrop-blur-sm flex items-center justify-center">
                    <div className="w-12 h-12 border-2 border-primary/50 rotate-45" />
                  </div>
                )
              },
              {
                title: 'Move your project forward',
                icon: (
                  <div className="w-24 h-24 border-2 border-orange/50 bg-dark/50 backdrop-blur-sm flex items-center justify-center">
                    <div className="w-14 h-14 border border-primary/50 rotate-45" />
                  </div>
                )
              },
              {
                title: 'Enjoy unique activities and live like a local',
                icon: (
                  <div className="w-24 h-24 border-2 border-primary/50 bg-dark/50 backdrop-blur-sm flex items-center justify-center">
                    <div className="w-10 h-10 border-2 border-secondary/50 rotate-45" />
                  </div>
                )
              }
            ].map((benefit, index) => (
              <div 
                key={index}
                className="group relative p-8 border-2 border-primary/20 bg-dark/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/60 hover:bg-dark/70 text-center"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))'
                }}
              >
                {/* Corner Accents */}
                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-primary/40" />
                <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-secondary/40" />

                <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 
                  className="text-lg font-semibold text-white uppercase tracking-wide leading-relaxed"
                  style={{
                    fontFamily: 'serif',
                    letterSpacing: '0.03em',
                    lineHeight: '1.6'
                  }}
                >
                  {benefit.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Single Powerful Housing Option Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Visual Showcase */}
            <div className="relative h-[500px] lg:h-[600px]">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Main Geometric Pattern - Representing the Housing */}
                <div className="relative w-full h-full max-w-md">
                  <div className="absolute inset-0 border-4 border-primary/40 rotate-45" />
                  <div className="absolute inset-8 border-4 border-secondary/40 rotate-45" />
                  <div className="absolute inset-16 border-4 border-orange/40 rotate-45" />
                  
                  {/* Center Element - The "Housing" */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-64 h-64 border-4 border-primary bg-dark/80 backdrop-blur-sm">
                      <div className="absolute inset-4 border-2 border-secondary">
                        <div className="absolute inset-4 border border-orange">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-6xl text-primary/60">◇</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Corner Elements */}
                  <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-primary/50" />
                  <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-secondary/50" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 border-b-4 border-l-4 border-orange/50" />
                  <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-primary/50" />
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-8">
              <div className="inline-block">
                <div className="h-px w-24 bg-primary mb-3" />
                <h2 
                  className="text-5xl md:text-6xl font-bold text-white uppercase tracking-wider mb-3"
                  style={{
                    fontFamily: 'serif',
                    letterSpacing: '0.1em'
                  }}
                >
                  The
                  <br />
                  <span className="gradient-text">Metropolitan</span>
                  <br />
                  Experience
                </h2>
                <div className="h-px w-24 bg-secondary mt-3" />
              </div>

              <p 
                className="text-xl text-white/80 leading-relaxed"
                style={{
                  fontFamily: 'serif',
                  lineHeight: '1.8',
                  letterSpacing: '0.01em'
                }}
              >
                Step into a world where productivity meets luxury. Our flagship coliving space combines 
                the sophistication of Art Deco design with modern amenities that fuel your creative journey.
              </p>

              <div className="space-y-6">
                {[
                  'Premium furnished spaces designed for focus and inspiration',
                  'World-class amenities including high-speed internet and co-working areas',
                  'Exclusive access to a global network of productive spaces',
                  'Monthly membership with flexible cancellation options',
                  '24/7 community support and curated networking events'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="mt-2">
                      <div className="w-2 h-2 bg-orange rotate-45" />
                    </div>
                    <p 
                      className="text-lg text-white/80 flex-1"
                      style={{ lineHeight: '1.8' }}
                    >
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              <button 
                className="mt-8 px-10 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-105"
                style={{
                  clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0% 100%)',
                  letterSpacing: '0.1em'
                }}
              >
                Explore This Space
              </button>
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
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white uppercase tracking-wider"
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
                className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto"
                style={{
                  fontFamily: 'serif',
                  lineHeight: '1.8'
                }}
              >
                Join a global community of creators, entrepreneurs, and innovators. 
                Start your membership today and unlock access to productive spaces worldwide.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button 
                  className="px-12 py-5 bg-white text-dark font-bold text-lg uppercase tracking-wider transition-all duration-300 hover:scale-105 border-2 border-dark"
                  style={{
                    boxShadow: '1px 1px #2D2A26, 3px 3px #2D2A26, 5px 5px #2D2A26, 7px 7px #2D2A26, 9px 9px #2D2A26',
                    letterSpacing: '0.1em',
                    transition: 'all 0.12s ease 0s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = 'none'
                    e.currentTarget.style.bottom = '-9px'
                    e.currentTarget.style.left = '9px'
                    e.currentTarget.style.right = '-9px'
                    e.currentTarget.style.top = '9px'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '1px 1px #2D2A26, 3px 3px #2D2A26, 5px 5px #2D2A26, 7px 7px #2D2A26, 9px 9px #2D2A26'
                    e.currentTarget.style.bottom = 'auto'
                    e.currentTarget.style.left = 'auto'
                    e.currentTarget.style.right = 'auto'
                    e.currentTarget.style.top = 'auto'
                  }}
                >
                  Start Membership
                </button>
                
                <button 
                  className="px-12 py-5 border-2 border-primary text-primary font-bold text-lg uppercase tracking-wider transition-all duration-300 hover:bg-primary/10"
                  style={{
                    letterSpacing: '0.1em'
                  }}
                >
                  Learn More
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
              <p className="uppercase tracking-wider text-sm" style={{ fontFamily: 'serif' }}>
                © 2024 HackerHouse
              </p>
            </div>
            <div className="flex gap-8">
              {['About', 'Spaces', 'Membership', 'Contact'].map((link) => (
                <a 
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-white/60 hover:text-primary uppercase text-sm tracking-wider transition-colors duration-300"
                  style={{ fontFamily: 'serif' }}
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