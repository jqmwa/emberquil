import HeroSection from '@/components/sections/HeroSection'
import AboutStudioSection from '@/components/sections/AboutStudioSection'
import ArtistsSection from '@/components/sections/ArtistsSection'
import BookOneSection from '@/components/sections/BookOneSection'
import StorySection from '@/components/sections/StorySection'
import PlushSection from '@/components/sections/PlushSection'
import LevelUpSection from '@/components/sections/LevelUpSection'
import CryptoSection from '@/components/sections/CryptoSection'
import FooterSection from '@/components/sections/FooterSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* 60% - Manga Studio & Artists Content */}
      <HeroSection />
      <AboutStudioSection />
      <ArtistsSection />
      <BookOneSection />
      <StorySection />
      
      {/* 30% - Artist Assets & Community */}
      <PlushSection />
      <LevelUpSection />
      
      {/* 10% - Crypto & Shiba Inu */}
      <CryptoSection />
      
      {/* Footer */}
      <FooterSection />
    </main>
  )
}
