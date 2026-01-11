'use client'

import { Section, Container, Card, Button, Badge } from '../kit'

export default function BookOneSection() {
  return (
    <Section className="bg-dark/50">
      <Container size="lg">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Book Cover */}
          <div className="order-2 lg:order-1">
            <Card variant="default" className="p-4 shadow-nerv-terminal">
              <div className="aspect-[3/4] bg-gradient-to-br from-nerv-teal/20 to-nerv-purple/20 rounded-nerv border-2 border-nerv-teal flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">📖</div>
                  <div className="font-display text-2xl text-nerv-orange mb-2">BOOK ONE</div>
                  <div className="font-mono text-sm text-nerv-sage/60">COVER ART</div>
                </div>
              </div>
            </Card>

            {/* Minting Options */}
            <div className="mt-6 space-y-3">
              <Card variant="light" className="p-4 flex items-center justify-between hover:border-nerv-orange/50 transition-colors cursor-pointer">
                <div className="font-mono text-sm text-nerv-sage">
                  MINT 1: <span className="text-nerv-orange">54,000 SHIB</span>
                </div>
                <div className="w-8 h-8 border border-nerv-teal rounded-nerv" />
              </Card>
              <Card variant="light" className="p-4 flex items-center justify-between hover:border-nerv-orange/50 transition-colors cursor-pointer">
                <div className="font-mono text-sm text-nerv-sage">
                  MINT 5: <span className="text-nerv-orange">245,000 SHIB</span>
                </div>
                <div className="w-8 h-8 border border-nerv-teal rounded-nerv" />
              </Card>
              <Card variant="light" className="p-4 flex items-center justify-between hover:border-nerv-orange/50 transition-colors cursor-pointer">
                <div className="font-mono text-sm text-nerv-sage">
                  MINT 10: <span className="text-nerv-orange">4,900,000 SHIB</span>
                </div>
                <div className="w-8 h-8 border border-nerv-teal rounded-nerv" />
              </Card>
            </div>
          </div>

          {/* Book Info */}
          <div className="order-1 lg:order-2">
            <div className="font-mono text-nerv-orange text-sm mb-2">
              <span>&gt;</span> PROJECT.FEATURED
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-nerv-sage uppercase tracking-tight mb-6 text-glow-teal">
              Book One: The Last War
            </h2>

            <div className="space-y-4 mb-6">
              <Card variant="light" className="p-4 border-l-4 border-nerv-orange">
                <p className="text-nerv-sage/80 font-mono leading-relaxed">
                  A scar tells a story. A festering wound, a possibility.
                  <br /><br />
                  Over a decade, the world had all but submitted itself to the grasp of T.E.C., a technology that was not just awe-inspiring but also terrifying in its potential. Each global and third-world power had begun to give in to the time's true current modern technology that would provide the ultimate security of one's information and demise- the birth of The Encrypted Card. TEC, for short, not only absolved the issue of ever misplacing electronic-influenced gadgets but united them under one cause: To oversee the world and play its God.
                  <br /><br />
                  Join multiple casts on a compelling quest of moral conflicts, mistaken identities and the spaces between what we know and what we imagine.
                </p>
              </Card>

              <div className="flex flex-wrap gap-2">
                <Badge variant="orange">Manga</Badge>
                <Badge variant="green">Digital</Badge>
                <Badge variant="default">Print Available</Badge>
                <Badge variant="purple">NFT Collection</Badge>
              </div>
            </div>

            <div className="space-y-4">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Get Book One
              </Button>
              
              <div className="flex items-center gap-4 pt-4 border-t border-nerv-teal/20">
                <div className="flex-1">
                  <div className="text-xs text-nerv-sage/40 font-mono mb-1">STATUS</div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-nerv-orange rounded-full animate-pulse" />
                    <span className="text-sm font-mono text-nerv-sage">AVAILABLE NOW</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-xs text-nerv-sage/40 font-mono mb-1">FORMAT</div>
                  <div className="text-sm font-mono text-nerv-sage">DIGITAL + PHYSICAL</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
