'use client'

import ForFunCard from './ForFunCard'
import OurStudioCard from './OurStudioCard'
import PlushCollectionCard from './PlushCollectionCard'
import LevelUpBadgesCard from './LevelUpBadgesCard'
import { useHomeState } from '@/contexts/HomeStateContext'

export default function Hero() {
  const { setShowAboutStudio, setShowStudioAmenities } = useHomeState()

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-44 pb-20 md:pt-52 md:pb-32 bg-dark">

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div id="studio" className="glass rounded-3xl p-6 md:p-12 lg:p-16">
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
            {/* For Fun Card with raining logo */}
            <ForFunCard onClick={() => setShowAboutStudio(true)} />
            
            {/* Our Studio Card */}
            <OurStudioCard onClick={() => setShowStudioAmenities(true)} />
          </div>
          
          {/* Plush Collection Card */}
          <div className="mb-4 md:mb-6">
            <PlushCollectionCard />
          </div>
          
          {/* Level-Up Badges Card */}
          <div>
            <LevelUpBadgesCard />
          </div>
        </div>
      </div>
    </section>
  )
}
