import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  className?: string
}

export default function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-mono transition-all duration-150 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nerv-orange focus-visible:ring-offset-2 focus-visible:ring-offset-dark disabled:pointer-events-none disabled:opacity-50 uppercase tracking-wider'
  
  const variants = {
    primary: 'bg-nerv-orange text-dark hover:bg-nerv-orange/90 shadow-nerv-glow-sm hover:shadow-nerv-glow border border-nerv-orange',
    secondary: 'bg-nerv-teal text-nerv-sage hover:bg-nerv-teal/90 shadow-nerv-terminal border border-nerv-teal',
    outline: 'border border-nerv-teal bg-transparent text-nerv-sage hover:bg-nerv-teal/10 hover:shadow-nerv-terminal',
    ghost: 'bg-transparent text-nerv-sage hover:bg-nerv-teal/5 hover:text-nerv-orange',
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-xs rounded-nerv',
    md: 'px-6 py-3 text-sm rounded-nerv',
    lg: 'px-8 py-4 text-base rounded-nerv',
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
