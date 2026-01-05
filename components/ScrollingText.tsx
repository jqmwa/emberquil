'use client'

export default function ScrollingText() {
  const text = "Human-Centered Art Studio Reimaginging Creative Careers"
  
  return (
    <div className="fixed top-[60px] md:top-[72px] left-0 right-0 z-40 glass border-b border-primary/20 overflow-hidden">
      <div className="flex items-center h-12 md:h-14 overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap">
          {/* First set of text */}
          {Array.from({ length: 10 }).map((_, i) => (
            <span
              key={`first-${i}`}
              className="text-sm md:text-base font-bold text-white mx-8 flex-shrink-0"
            >
              {text}
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {Array.from({ length: 10 }).map((_, i) => (
            <span
              key={`second-${i}`}
              className="text-sm md:text-base font-bold text-white mx-8 flex-shrink-0"
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
