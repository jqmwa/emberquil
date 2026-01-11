import React from 'react'

interface CardProps {
  children: React.ReactNode
  variant?: 'default' | 'terminal' | 'highlight'
  className?: string
  hover?: boolean
}

export default function Card({ 
  children, 
  variant = 'default',
  className = '',
  hover = false
}: CardProps) {
  const baseStyles = 'rounded-nerv transition-all duration-150'
  
  const variants = {
    default: 'glass-nerv-card',
    terminal: 'glass-nerv border-nerv-teal',
    highlight: 'glass-nerv-card border-nerv-orange shadow-nerv-glow-sm',
  }
  
  const hoverStyles = hover ? 'hover:border-nerv-orange hover:shadow-nerv-glow-sm cursor-pointer' : ''
  
  return (
    <div className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`}>
      {children}
    </div>
  )
}
