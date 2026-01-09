import type { Metadata } from 'next'
import './globals.css'
import { HomeStateProvider } from '@/contexts/HomeStateContext'
import LeftSideNav from '@/components/LeftSideNav'

export const metadata: Metadata = {
  title: 'EmberQuill Studios - For Fun',
  description: 'An artist hub providing equity, housing, and opportunities for creative professionals',
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
          <LeftSideNav />
          <div className="lg:ml-64">
            {children}
          </div>
        </HomeStateProvider>
      </body>
    </html>
  )
}
