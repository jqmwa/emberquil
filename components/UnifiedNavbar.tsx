'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Button from './kit/Button'
import Divider from './kit/Divider'

export default function UnifiedNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: '#studio', label: 'Studio' },
    { href: '#artists', label: 'Artists' },
    { href: '#facilities', label: 'Facilities' },
    { href: '#plush', label: 'Plush' },
    { href: '#level-up', label: 'Level Up' },
    { href: '#community', label: 'Community' },
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <>
      {/* Desktop & Mobile Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nerv border-b border-nerv-teal/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center gap-3 group"
            >
              <div className="h-8 w-8 md:h-10 md:w-10 flex items-center justify-center">
                <Image
                  src="/icons/logo.webp"
                  alt="EmberQuill Studios"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain transition-all group-hover:drop-shadow-[0_0_8px_rgba(232,93,4,0.6)]"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm md:text-base font-display font-bold text-nerv-orange text-glow-orange uppercase tracking-wider">
                  EmberQuill
                </span>
                <span className="text-[10px] md:text-xs text-nerv-sage/60 uppercase tracking-widest">
                  Studios
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-sm font-mono text-nerv-sage/70 hover:text-nerv-orange hover:bg-nerv-teal/5 transition-all duration-150 uppercase tracking-wider rounded-nerv"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Button variant="primary" size="sm">
                Apply Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center border border-nerv-orange rounded-nerv hover:bg-nerv-orange/10 transition-colors"
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              <div className="relative w-5 h-4 flex flex-col justify-center gap-1">
                <span 
                  className={`block h-0.5 bg-nerv-orange transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                  }`}
                />
                <span 
                  className={`block h-0.5 bg-nerv-orange transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span 
                  className={`block h-0.5 bg-nerv-orange transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-dark/95 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="fixed inset-x-0 top-16 md:top-20 bottom-0 z-50 lg:hidden overflow-y-auto">
            <div className="min-h-full bg-dark/98 border-t border-nerv-teal/30 p-6">
              {/* Navigation Links */}
              <nav className="space-y-2 mb-8">
                {navItems.map((item, index) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 text-base font-mono text-nerv-sage hover:text-nerv-orange hover:bg-nerv-teal/10 border border-nerv-teal/20 hover:border-nerv-orange/50 transition-all duration-150 uppercase tracking-wider rounded-nerv"
                    style={{ 
                      animationDelay: `${index * 50}ms`,
                      animation: 'fadeInUp 0.3s ease-out forwards'
                    }}
                  >
                    <span className="text-nerv-orange/50 mr-3">[{String(index + 1).padStart(2, '0')}]</span>
                    {item.label}
                  </a>
                ))}
              </nav>

              <Divider glow className="my-6" />

              {/* Mobile CTA */}
              <div className="space-y-4">
                <Button 
                  variant="primary" 
                  className="w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Apply Now
                </Button>
                
                {/* Additional Info */}
                <div className="text-center pt-4 space-y-2">
                  <p className="text-xs text-nerv-sage/40 font-mono uppercase tracking-wider">
                    Black-Owned Manga Studio
                  </p>
                  <p className="text-xs text-nerv-sage/30 font-mono">
                    Terminal ID: EQS-NERV-2026
                  </p>
                </div>
              </div>

              {/* Terminal decoration */}
              <div className="mt-12 pt-6 border-t border-nerv-teal/20">
                <div className="flex items-center gap-2 text-nerv-sage/30 text-xs font-mono">
                  <div className="w-2 h-2 bg-nerv-orange rounded-full animate-pulse" />
                  <span>SYSTEM ONLINE</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Spacer for fixed navbar */}
      <div className="h-16 md:h-20" />
    </>
  )
}
