'use client'

export default function AboutStudio() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-44 pb-20 md:pt-52 md:pb-32 bg-dark">

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="glass rounded-3xl p-6 md:p-12 lg:p-16">
          {/* Main content */}
          <div className="space-y-6 md:space-y-8 text-lg md:text-xl leading-relaxed">
            <div className="glass-light rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-secondary">
                Why EmberQuill Studios?
              </h2>
              <p className="text-white/90 mb-4">
                Jobs can't be careers without promotional opportunities available to everyone. 
                Rather than make it a job or career, we're giving you a <span className="text-primary font-semibold">5-year contract</span> signed 
                in the beginning that establishes a completely different baseline.
              </p>
              <p className="text-white/90">
                Doing what you love to do and getting paid a livable wage for it isn't limited by $$$ 
                if you move into the apartment complexes.
              </p>
            </div>

            {/* Audience */}
            <div className="glass-light rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary">
                Our Audience
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>Audiobook listeners</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>Comic/manga readers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>Indie game supporters</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>Employment seekers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
