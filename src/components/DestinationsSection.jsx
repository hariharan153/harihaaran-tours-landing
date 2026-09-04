import React from 'react'

const destinations = [
  { name: 'Himalayan Treks', image: '🏔️', desc: 'Adventure in the mountains' },
  { name: 'Beach Escapes', image: '🏖️', desc: 'Relax by the shore' },
  { name: 'Wildlife Safari', image: '🦁', desc: 'Explore nature' },
  { name: 'Cultural Tours', image: '🏛️', desc: 'Discover heritage' },
]

export default function DestinationsSection() {
  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-outfit font-500 text-wander-dark mb-12 text-center">Our Destinations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {destinations.map((dest, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all cursor-pointer transform hover:-translate-y-2">
            <div className="text-6xl mb-4">{dest.image}</div>
            <h3 className="text-xl font-medium text-wander-dark mb-2">{dest.name}</h3>
            <p className="text-wander-text/70 text-sm">{dest.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
