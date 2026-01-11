import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'warning'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export default function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-mono uppercase tracking-wider transition-all duration-150 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nerv-orange focus-visible:ring-offset-2 focus-visible:ring-offset-dark disabled:pointer-events-none disabled:opacity-50 rounded-nerv border'
  
  const variants = {
    primary: 'bg-nerv-teal/20 border-nerv-teal text-nerv-sage hover:bg-nerv-teal/40 hover:shadow-nerv-terminal',
    secondary: 'bg-nerv-green/20 border-nerv-green text-nerv-sage hover:bg-nerv-green/40',
    outline: 'bg-transparent border-nerv-orange text-nerv-orange hover:bg-nerv-orange/10 hover:shadow-nerv-glow-sm',
    ghost: 'bg-transparent border-transparent text-nerv-sage hover:bg-nerv-sage/10 hover:border-nerv-sage/30',
    warning: 'bg-nerv-orange/20 border-nerv-orange text-nerv-orange hover:bg-nerv-orange/40 hover:shadow-nerv-glow',
  }
  
  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm md:px-6 md:py-3',
    lg: 'px-6 py-3 text-base md:px-8 md:py-4',
  }
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
