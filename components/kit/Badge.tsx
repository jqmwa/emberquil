import { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'orange' | 'green' | 'purple'
  className?: string
}

export default function Badge({ 
  children, 
  variant = 'default', 
  className = '' 
}: BadgeProps) {
  const variants = {
    default: 'bg-nerv-teal/20 text-nerv-teal border-nerv-teal',
    orange: 'bg-nerv-orange/20 text-nerv-orange border-nerv-orange',
    green: 'bg-nerv-green/20 text-nerv-green border-nerv-green',
    purple: 'bg-nerv-purple/20 text-nerv-purple border-nerv-purple',
  }
  
  return (
    <span 
      className={`inline-flex items-center px-3 py-1 text-xs font-mono uppercase tracking-wider border rounded-nerv ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
