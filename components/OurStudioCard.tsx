'use client'

interface OurStudioCardProps {
  onClick?: () => void
}

export default function OurStudioCard({ onClick }: OurStudioCardProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="relative w-full rounded-2xl border-2 border-white/20 overflow-hidden transition-all duration-300 active:scale-[0.98] hover:border-white/40 cursor-pointer appearance-none bg-transparent p-0"
      style={{ height: '200px', background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)' }}
    >
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-4">
        {/* Title */}
        <div className="text-3xl font-bold mb-3 text-center text-orange">
          OUR STUDIO
        </div>

        {/* Description */}
        <div className="text-lg text-white/90 text-center">
          View all of our amenities
        </div>
      </div>
    </button>
  )
}
