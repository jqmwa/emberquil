'use client'

import Navbar from '@/components/Navbar'
import ScrollingText from '@/components/ScrollingText'
import LowerNavbar from '@/components/LowerNavbar'
import Hero from '@/components/Hero'
import Benefits from '@/components/Benefits'
import AboutStudio from '@/components/AboutStudio'
import StudioAmenities from '@/components/StudioAmenities'
import { useHomeState } from '@/contexts/HomeStateContext'

export default function Home() {
  const { showAboutStudio, showStudioAmenities } = useHomeState()

  return (
    <main className="min-h-screen pb-20">
      <Navbar />
      <ScrollingText />
      {showAboutStudio ? (
        <>
          <AboutStudio />
          <Benefits />
        </>
      ) : showStudioAmenities ? (
        <>
          <StudioAmenities />
          <Benefits />
        </>
      ) : (
        <>
          <Hero />
          <Benefits />
        </>
      )}
      <LowerNavbar />
    </main>
  )
}
