'use client'

import { Section, Container, Card, Badge } from '../kit'

const levels = [
  { level: 1, name: 'Newcomer', points: '0-100', color: '#4a8c5c', icon: '🌱' },
  { level: 2, name: 'Apprentice', points: '100-500', color: '#3a7a8c', icon: '✨' },
  { level: 3, name: 'Creator', points: '500-1.5K', color: '#8a5a8a', icon: '🎨' },
  { level: 4, name: 'Artisan', points: '1.5K-5K', color: '#e85d04', icon: '🔥' },
  { level: 5, name: 'Master', points: '5K-15K', color: '#4a8c5c', icon: '⚡' },
  { level: 6, name: 'Legend', points: '15K+', color: '#e85d04', icon: '👑' },
]

export default function LevelUpSection() {
  return (
    <Section id="level-up" className="bg-nerv-void">
      <Container size="lg">
        <div className="mb-12">
          <div className="font-mono text-nerv-orange text-sm mb-2">
            <span>&gt;</span> SYSTEM.PROGRESSION
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-nerv-sage uppercase tracking-tight mb-4">
            Level Up System
          </h2>
          <p className="text-lg text-nerv-sage/70 font-mono max-w-3xl">
            Contribute, create, and grow within the community. Each level unlocks new benefits 
            and recognition for your participation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {levels.map((level) => (
            <Card 
              key={level.level}
              variant="default" 
              className="p-6 hover:shadow-nerv-terminal transition-all duration-300 relative overflow-hidden group"
            >
              {/* Level number background */}
              <div 
                className="absolute top-0 right-0 text-8xl font-display font-bold opacity-5 -mr-4 -mt-4"
                style={{ color: level.color }}
              >
                {level.level}
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <div 
                  className="w-16 h-16 rounded-nerv border-2 flex items-center justify-center text-3xl mb-4"
                  style={{ 
                    borderColor: level.color,
                    backgroundColor: `${level.color}10`
                  }}
                >
                  {level.icon}
                </div>

                {/* Info */}
                <div className="space-y-3">
                  <div>
                    <Badge 
                      variant="default" 
                      className="mb-2"
                      style={{
                        borderColor: level.color,
                        backgroundColor: `${level.color}20`,
                        color: level.color
                      }}
                    >
                      Level {level.level}
                    </Badge>
                    <h3 className="text-2xl font-display font-bold text-nerv-orange mb-1">
                      {level.name}
                    </h3>
                    <p className="text-sm text-nerv-sage/60 font-mono">
                      {level.points} points
                    </p>
                  </div>

                  <div className="pt-3 border-t border-nerv-teal/20">
                    <div className="flex items-center gap-2 text-xs text-nerv-sage/40 font-mono">
                      <div className="w-1.5 h-1.5 rounded-full bg-nerv-orange" />
                      <span>UNLOCK_STATUS: AVAILABLE</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Earning Info */}
        <Card variant="light" className="mt-12 p-6 md:p-8">
          <h3 className="text-xl font-display font-bold text-nerv-orange mb-4">
            How to Earn Points
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm font-mono text-nerv-sage/70">
            <div>
              <div className="text-nerv-orange mb-2">↑ CONTRIBUTE</div>
              <p>Share artwork, feedback, and participate in community discussions</p>
            </div>
            <div>
              <div className="text-nerv-orange mb-2">↑ CREATE</div>
              <p>Submit original work, collaborate on projects, help other creators</p>
            </div>
            <div>
              <div className="text-nerv-orange mb-2">↑ ENGAGE</div>
              <p>Attend events, complete challenges, support fellow artists</p>
            </div>
          </div>
        </Card>
      </Container>
    </Section>
  )
}
