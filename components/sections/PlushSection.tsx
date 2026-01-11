'use client'

import { Section, Container, Card, Badge } from '../kit'

const plushItems = [
  { name: 'Cloud Dreamer', color: '#4a8c5c', price: '35' },
  { name: 'Night Wanderer', color: '#3a7a8c', price: '35' },
  { name: 'Sunset Keeper', color: '#e85d04', price: '40' },
  { name: 'Moon Guardian', color: '#8a5a8a', price: '35' },
  { name: 'Star Collector', color: '#4a8c5c', price: '40' },
  { name: 'Wind Chaser', color: '#3a7a8c', price: '35' },
]

export default function PlushSection() {
  return (
    <Section id="plush" className="bg-dark/50">
      <Container size="lg">
        <div className="mb-12">
          <div className="font-mono text-nerv-orange text-sm mb-2">
            <span>&gt;</span> COLLECTION.PLUSH
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-nerv-sage uppercase tracking-tight mb-4">
            Plush Collection
          </h2>
          <p className="text-lg text-nerv-sage/70 font-mono max-w-3xl">
            Limited edition character plush designs. Each piece is crafted with care, 
            bridging the digital and physical worlds.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plushItems.map((item, index) => (
            <Card 
              key={item.name}
              variant="default" 
              className="p-6 hover:shadow-nerv-terminal transition-all duration-300 group cursor-pointer"
            >
              {/* Plush Visual */}
              <div 
                className="aspect-square rounded-nerv border-2 mb-4 flex items-center justify-center text-4xl transition-all group-hover:scale-105"
                style={{ 
                  borderColor: item.color,
                  backgroundColor: `${item.color}10`
                }}
              >
                🧸
              </div>

              {/* Info */}
              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-display font-bold text-nerv-orange mb-1">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <Badge 
                      variant="default"
                      style={{
                        borderColor: item.color,
                        backgroundColor: `${item.color}20`,
                        color: item.color
                      }}
                    >
                      #{String(index + 1).padStart(2, '0')}
                    </Badge>
                    <Badge variant="green">In Stock</Badge>
                  </div>
                </div>

                <div className="pt-3 border-t border-nerv-teal/20 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-nerv-sage/40 font-mono">PRICE</div>
                    <div className="text-xl font-display font-bold text-nerv-sage">
                      ${item.price}
                    </div>
                  </div>
                  <div className="text-xs text-nerv-sage/40 font-mono">
                    ITEM_{String(index + 1).padStart(3, '0')}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
