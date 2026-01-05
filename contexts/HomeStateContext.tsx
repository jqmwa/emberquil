'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface HomeStateContextType {
  showAboutStudio: boolean
  setShowAboutStudio: (show: boolean) => void
  showStudioAmenities: boolean
  setShowStudioAmenities: (show: boolean) => void
}

const HomeStateContext = createContext<HomeStateContextType | undefined>(undefined)

export function HomeStateProvider({ children }: { children: ReactNode }) {
  const [showAboutStudio, setShowAboutStudio] = useState(false)
  const [showStudioAmenities, setShowStudioAmenities] = useState(false)

  return (
    <HomeStateContext.Provider value={{ showAboutStudio, setShowAboutStudio, showStudioAmenities, setShowStudioAmenities }}>
      {children}
    </HomeStateContext.Provider>
  )
}

export function useHomeState() {
  const context = useContext(HomeStateContext)
  if (context === undefined) {
    throw new Error('useHomeState must be used within a HomeStateProvider')
  }
  return context
}
