import React from 'react'

interface SectionProps {
  children: React.ReactNode
  id?: string
  className?: string
  background?: 'void' | 'gradient' | 'terminal'
}

export default function Section({ 
  children, 
  id,
  className = '',
  background = 'void'
}: SectionProps) {
  const backgrounds = {
    void: 'bg-dark',
    gradient: 'bg-gradient-to-b from-dark via-nerv-teal/5 to-dark',
    terminal: 'bg-dark relative before:absolute before:inset-0 before:bg-nerv-teal/5 before:opacity-30',
  }
  
  return (
    <section 
      id={id}
      className={`relative py-12 md:py-16 lg:py-24 ${backgrounds[background]} ${className}`}
    >
      {children}
    </section>
  )
}
