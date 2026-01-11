interface DividerProps {
  orientation?: 'horizontal' | 'vertical'
  className?: string
  glow?: boolean
}

export default function Divider({ 
  orientation = 'horizontal', 
  className = '',
  glow = false 
}: DividerProps) {
  const glowClass = glow ? 'shadow-nerv-glow-sm' : ''
  
  if (orientation === 'vertical') {
    return (
      <div 
        className={`w-px bg-nerv-teal/30 ${glowClass} ${className}`}
      />
    )
  }
  
  return (
    <div 
      className={`h-px bg-nerv-teal/30 ${glowClass} ${className}`}
    />
  )
}
