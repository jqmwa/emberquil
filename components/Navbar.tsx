'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4 px-4 max-w-7xl mx-auto">
        {/* Logo and Title */}
        <div className="flex w-full justify-between lg:w-auto">
          <Link 
            href="/" 
            aria-label="home" 
            className="flex items-center gap-2"
          >
            <div className="h-9 w-9 flex items-center justify-center">
              <Image
                src="/icons/logo.webp"
                alt="EmberQuill Studios Logo"
                width={36}
                height={36}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <h1 className="text-xl font-bold">
              <span className="text-secondary">EmberQuill Studios</span>
            </h1>
          </Link>

          {/* Mobile Menu Button */}
          <button
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            onClick={toggleMenu}
            className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`lucide lucide-menu m-auto size-6 duration-200 ${
                isMenuOpen ? 'rotate-180 scale-0 opacity-0' : ''
              }`}
            >
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`lucide lucide-x absolute inset-0 m-auto size-6 duration-200 ${
                isMenuOpen ? 'rotate-0 scale-100 opacity-100' : '-rotate-180 scale-0 opacity-0'
              }`}
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>

        {/* Desktop Navigation Links - Centered */}
        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
          <ul className="flex gap-8 text-sm">
            <li>
              <a
                href="#studio"
                className="text-white/70 hover:text-white block duration-150"
              >
                <span>Studio</span>
              </a>
            </li>
            <li>
              <a
                href="#plush"
                className="text-white/70 hover:text-white block duration-150"
              >
                <span>Plush Collection</span>
              </a>
            </li>
            <li>
              <a
                href="#badges"
                className="text-white/70 hover:text-white block duration-150"
              >
                <span>Level Up</span>
              </a>
            </li>
            <li>
              <a
                href="#benefits"
                className="text-white/70 hover:text-white block duration-150"
              >
                <span>Benefits</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <div
          className={`glass-card mb-6 ${
            isMenuOpen ? 'flex' : 'hidden'
          } w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border border-primary/30 p-6 shadow-2xl lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none`}
        >
          <div className="lg:hidden w-full">
            <ul className="space-y-6 text-base">
              <li>
                <a
                  href="#studio"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white/70 hover:text-white block duration-150"
                >
                  <span>Studio</span>
                </a>
              </li>
              <li>
                <a
                  href="#plush"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white/70 hover:text-white block duration-150"
                >
                  <span>Plush Collection</span>
                </a>
              </li>
              <li>
                <a
                  href="#badges"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white/70 hover:text-white block duration-150"
                >
                  <span>Level Up</span>
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white/70 hover:text-white block duration-150"
                >
                  <span>Benefits</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:hidden">
            <button className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-medium text-white transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 relative before:absolute before:inset-0 before:-z-10 before:rounded-lg before:blur-md before:opacity-0 before:bg-primary before:transition-opacity before:duration-300 hover:before:opacity-40 h-11">
              Apply Now
            </button>
          </div>
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex">
          <button className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-medium text-white transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 relative before:absolute before:inset-0 before:-z-10 before:rounded-lg before:blur-md before:opacity-0 before:bg-primary before:transition-opacity before:duration-300 hover:before:opacity-40 h-11">
            Apply Now
          </button>
        </div>
      </div>
    </nav>
  )
}
