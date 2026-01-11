'use client'

import { Section, Container, Card } from '../kit'

export default function AboutStudioSection() {
  return (
    <Section id="studio" className="bg-dark/50">
      <Container size="lg">
        <div className="mb-12">
          <div className="font-mono text-nerv-orange text-sm mb-2">
            <span>&gt;</span> STUDIO.INFO
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-nerv-sage uppercase tracking-tight">
            Why EmberQuill Studios?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          <Card variant="default" className="p-6 md:p-8" glow>
            <div className="mb-4">
              <div className="w-12 h-12 border border-nerv-orange rounded-nerv flex items-center justify-center mb-4">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="text-xl md:text-2xl font-display font-bold text-nerv-orange mb-3">
                5-Year Contracts
              </h3>
            </div>
            <p className="text-nerv-sage/80 font-mono leading-relaxed">
              Jobs can't be careers without promotional opportunities available to everyone. 
              We're giving you a 5-year contract signed in the beginning that establishes 
              a completely different baseline. Do what you love and get paid a livable wage for it.
            </p>
          </Card>

          <Card variant="default" className="p-6 md:p-8" glow>
            <div className="mb-4">
              <div className="w-12 h-12 border border-nerv-orange rounded-nerv flex items-center justify-center mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl md:text-2xl font-display font-bold text-nerv-orange mb-3">
                Housing Provided
              </h3>
            </div>
            <p className="text-nerv-sage/80 font-mono leading-relaxed">
              Financial barriers shouldn't limit creativity. Move into our apartment complexes 
              and focus on your craft. Your passion becomes sustainable when housing is covered.
            </p>
          </Card>

          <Card variant="default" className="p-6 md:p-8" glow>
            <div className="mb-4">
              <div className="w-12 h-12 border border-nerv-orange rounded-nerv flex items-center justify-center mb-4">
                <span className="text-2xl">⚖️</span>
              </div>
              <h3 className="text-xl md:text-2xl font-display font-bold text-nerv-orange mb-3">
                Equitable Design
              </h3>
            </div>
            <p className="text-nerv-sage/80 font-mono leading-relaxed">
              Artists receive funds directly for their designated work. Split between creative 
              writing, artistry, and other avenues. We empower a creator economy based on fairness.
            </p>
          </Card>

          <Card variant="default" className="p-6 md:p-8" glow>
            <div className="mb-4">
              <div className="w-12 h-12 border border-nerv-orange rounded-nerv flex items-center justify-center mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl md:text-2xl font-display font-bold text-nerv-orange mb-3">
                Our Audience
              </h3>
            </div>
            <div className="space-y-2 text-nerv-sage/80 font-mono text-sm">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-nerv-orange rounded-full" />
                <span>Audiobook listeners</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-nerv-orange rounded-full" />
                <span>Comic/manga readers</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-nerv-orange rounded-full" />
                <span>Indie game supporters</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-nerv-orange rounded-full" />
                <span>Employment seekers</span>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  )
}
