'use client'

import { Section, Container, Card, Badge } from '../kit'

const artists = [
  {
    name: 'Shue',
    role: 'Founder & CEO',
    color: '#4CAA8D',
    bio: 'Shue, a quiet and introspective soul, was born amidst the silent serenity of a moonlit night. With a delicate touch, Shue weaved beauty and tranquility into every word of his stories. Inspired by delicate blossoms dancing upon the wind, his art evokes calm thought and serenity. "Words are wind, after all."',
  },
  {
    name: 'KittyWitxh',
    role: 'Illustrator',
    color: '#6F308C',
    bio: 'Born on a foggy night in an enchanted forest, KittyWitxh discovered her extraordinary ability to communicate with natural energies of art. With trusty companion Binx by her side, she creates mesmerizing blends of vibrant colors and intricate details, bringing imagined worlds to life.',
  },
  {
    name: 'Artist Kai',
    role: 'Manga Artist',
    color: '#E8AC37',
    bio: 'A young artist with a lot to learn, drawing inspiration from exciting mangas and old school hip-hop. Kai captures energy through varying line weights and clean strokes, putting viewers into different worlds and stories, always aspiring to be better than the previous day.',
  },
  {
    name: 'Suppoku',
    role: 'Artist',
    color: '#F7A4EF',
    bio: 'A mysterious figure clad in flowing robes, emerged from pristine mountain springs. Blessed with power to manipulate water with grace, Suppoku transforms droplets into breathtaking sculptures, creating art that transcends boundaries between imagination and reality.',
  },
]

export default function ArtistsSection() {
  return (
    <Section id="artists" className="bg-nerv-void">
      <Container size="lg">
        <div className="mb-12">
          <div className="font-mono text-nerv-orange text-sm mb-2">
            <span>&gt;</span> CREW.ROSTER
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-nerv-sage uppercase tracking-tight mb-4">
            The Crew
          </h2>
          <p className="text-lg text-nerv-sage/70 font-mono max-w-3xl">
            Our backed ecosystem ensures honest work gets rewarded, and rewards community 
            members who contribute to the system. Meet the artists making it happen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {artists.map((artist, index) => (
            <Card 
              key={artist.name} 
              variant="default" 
              className="p-6 md:p-8 hover:shadow-nerv-terminal transition-all duration-300"
            >
              {/* Artist Header */}
              <div className="flex items-start gap-4 mb-4">
                <div 
                  className="w-16 h-16 md:w-20 md:h-20 rounded-nerv border-2 flex items-center justify-center font-display text-2xl font-bold"
                  style={{ 
                    borderColor: artist.color,
                    backgroundColor: `${artist.color}20`,
                    color: artist.color
                  }}
                >
                  {artist.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl md:text-2xl font-display font-bold text-nerv-orange">
                      {artist.name}
                    </h3>
                  </div>
                  <Badge 
                    variant="default" 
                    className="text-xs"
                    style={{
                      borderColor: artist.color,
                      backgroundColor: `${artist.color}20`,
                      color: artist.color
                    }}
                  >
                    {artist.role}
                  </Badge>
                </div>
              </div>

              {/* Bio */}
              <p className="text-sm md:text-base text-nerv-sage/80 font-mono leading-relaxed">
                {artist.bio}
              </p>

              {/* Terminal footer */}
              <div className="mt-4 pt-4 border-t border-nerv-teal/20">
                <div className="text-xs text-nerv-sage/40 font-mono">
                  ARTIST_ID: {String(index + 1).padStart(3, '0')} | STATUS: ACTIVE
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
