import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-wander-dark text-white py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="font-outfit font-500 text-lg mb-4">Harihaaran Tours</h3>
          <p className="text-white/70 text-sm">Explore the world with us</p>
        </div>
        <div>
          <h4 className="font-medium mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Destinations</a></li>
            <li><a href="#" className="hover:text-white">Packages</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-4">Contact</h4>
          <p className="text-sm text-white/70">📱 +91 8121607398</p>
          <p className="text-sm text-white/70">📍 Shantinagar, Tandur</p>
        </div>
        <div>
          <h4 className="font-medium mb-4">Follow Us</h4>
          <div className="flex gap-4 text-sm">
            <a href="#" className="hover:text-wander-orange">Facebook</a>
            <a href="#" className="hover:text-wander-orange">Instagram</a>
            <a href="#" className="hover:text-wander-orange">Twitter</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 pt-8 text-center text-sm text-white/70">
        <p>&copy; 2024 Harihaaran Tours & Travels. All rights reserved.</p>
      </div>
    </footer>
  )
}
