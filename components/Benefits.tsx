'use client'

export default function Benefits() {
  return (
    <section id="benefits" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* CTA Section */}
        <div className="glass rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-orange">
            Ready to Start Your Journey?
          </h3>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join EmberQuill Studios and transform your passion into a sustainable career. 
            Sign your 5-year contract and begin building your future today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-orange rounded-xl font-semibold text-lg hover:scale-105 transition-transform duration-300 shadow-lg text-white">
              Learn More
            </button>
            <button className="px-8 py-4 glass-light rounded-xl font-semibold text-lg hover:scale-105 transition-transform duration-300 border-2 border-primary/50">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
