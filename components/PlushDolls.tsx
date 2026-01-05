'use client'

import Image from 'next/image'

const dolls = [
  { id: 1, name: 'TLW Doll 1', src: '/dolls/TLW Doll 1 Neutral Transparent.png' },
  { id: 2, name: 'TLW Doll 2', src: '/dolls/TLW Doll 2 Neutral Transparent.png' },
  { id: 3, name: 'TLW Doll 3', src: '/dolls/TLW Doll3 Neutral Transparent.png' },
  { id: 4, name: 'TLW Doll 4', src: '/dolls/TLW Doll4 Nuetral Transparent.png' },
  { id: 5, name: 'TLW Doll 5', src: '/dolls/TLW Doll5 Neutral Transparent.png' },
  { id: 6, name: 'TLW Doll 6', src: '/dolls/TLW Doll6 Nuetral Transparent.png' },
]

export default function PlushDolls() {
  return (
    <section id="plush" className="relative py-20 px-4 bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Plush Collection</span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Discover our exclusive plush doll designs, each crafted with care and creativity
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {dolls.map((doll) => (
            <div
              key={doll.id}
              className="bg-dark rounded-2xl p-6 hover:scale-105 transition-transform duration-300 group border border-primary/20"
            >
              <div className="relative w-full aspect-square mb-4">
                <Image
                  src={doll.src}
                  alt={doll.name}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-semibold text-center text-primary">
                {doll.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
