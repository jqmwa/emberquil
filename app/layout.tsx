import type { Metadata } from 'next'
import './globals.css'
import { HomeStateProvider } from '@/contexts/HomeStateContext'
import UnifiedNavbar from '@/components/UnifiedNavbar'

export const metadata: Metadata = {
  title: 'EmberQuill Studios',
  description: 'Black-owned manga studio providing equity, housing, and opportunities for creative professionals. NERV-themed cyberpunk aesthetic.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <HomeStateProvider>
          <UnifiedNavbar />
          {children}
        </HomeStateProvider>
      </body>
    </html>
  )
}
