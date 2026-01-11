import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  variant?: 'default' | 'light' | 'solid'
  className?: string
  glow?: boolean
}

export default function Card({ 
  children, 
  variant = 'default', 
  className = '',
  glow = false 
}: CardProps) {
  const variants = {
    default: 'glass-nerv-card',
    light: 'glass-nerv-light',
    solid: 'bg-dark border border-nerv-teal/40',
  }
  
  const glowClass = glow ? 'shadow-nerv-terminal' : ''
  
  return (
    <div className={`${variants[variant]} ${glowClass} rounded-nerv ${className}`}>
      {children}
    </div>
  )
}
