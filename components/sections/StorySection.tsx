'use client'

import { Section, Container, Card } from '../kit'

export default function StorySection() {
  return (
    <Section className="bg-nerv-void">
      <Container size="md">
        <div className="mb-12 text-center">
          <div className="font-mono text-nerv-orange text-sm mb-2">
            <span>&gt;</span> ORIGIN.STORY
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-nerv-sage uppercase tracking-tight mb-4">
            They Believe In Us
          </h2>
          <p className="text-lg text-nerv-orange/80 font-mono">
            And you?
          </p>
        </div>

        <Card variant="default" className="p-6 md:p-10" glow>
          <div className="space-y-6 text-nerv-sage/80 font-mono leading-relaxed">
            <p className="text-base md:text-lg">
              The Last War is a project started and created by Cedric. It began as a small 
              discord of only 5-7 people and a lot of skepticism. Throughout the last 6 months, 
              Cedric has proven himself as someone that's honest, kind, and a serious builder. 
              He is passionate about his work and his project.
            </p>

            <div className="border-l-4 border-nerv-orange pl-6 py-2 bg-nerv-orange/5">
              <p className="text-base md:text-lg text-nerv-orange/90 italic">
                Now 'The Last War' is no longer a project or a discord. It's a movement.
              </p>
            </div>

            <p className="text-base md:text-lg">
              We plan to bring homemade manga, anime, and propel the digital art community 
              further by employing an honest, and equitable labor route. The artists of these 
              various projects are the recipients of any funds given to their designated work.
            </p>

            <p className="text-base md:text-lg">
              Split between the labor of creative writing, artistry, and other avenues, 
              <span className="text-nerv-orange font-bold"> The Last War empowers and propels 
              a creator economy based on equitable design</span>.
            </p>

            {/* Terminal footer */}
            <div className="pt-6 mt-6 border-t border-nerv-teal/20">
              <div className="flex items-center justify-between text-xs text-nerv-sage/40">
                <span className="font-mono">DOCUMENT_ID: ORIGIN-001</span>
                <span className="font-mono">CLASSIFICATION: PUBLIC</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Quote boxes */}
        <div className="mt-8 space-y-4">
          <Card variant="light" className="p-4 border-l-4 border-nerv-orange">
            <p className="text-sm md:text-base text-nerv-sage/70 font-mono italic">
              "A familiar wind surrounds you... You're in the clouds now."
            </p>
          </Card>
          <Card variant="light" className="p-4 border-l-4 border-nerv-teal">
            <p className="text-sm md:text-base text-nerv-sage/70 font-mono italic">
              "Up here, everything's brighter. The world is so clear now."
            </p>
          </Card>
          <Card variant="light" className="p-4 border-l-4 border-nerv-green">
            <p className="text-sm md:text-base text-nerv-sage/70 font-mono italic">
              "It feels great being here, but something tells you that this is just the beginning."
            </p>
          </Card>
        </div>
      </Container>
    </Section>
  )
}
