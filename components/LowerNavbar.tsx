'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useHomeState } from '@/contexts/HomeStateContext'

export default function LowerNavbar() {
  const pathname = usePathname()
  const { setShowAboutStudio, setShowStudioAmenities } = useHomeState()

  const navItems = [
    {
      href: '/chat',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle transition-all duration-500 ease-out" aria-hidden="true" style={{ width: '20px', height: '20px' }}>
          <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path>
        </svg>
      ),
    },
    {
      href: '/',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-home transition-all duration-500 ease-out" aria-hidden="true" style={{ width: '20px', height: '20px' }}>
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      ),
    },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 glass border-t border-primary/20">
      <div className="flex justify-around items-center max-w-[520px] mx-auto px-4 relative py-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          const isHome = item.href === '/'
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => {
                if (isHome && pathname === '/') {
                  setShowAboutStudio(false)
                  setShowStudioAmenities(false)
                }
              }}
              className={`flex items-center justify-center p-3 transition-colors duration-200 ${
                isActive ? 'text-white' : 'text-white/40 hover:text-white/70'
              }`}
            >
              {item.icon}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
