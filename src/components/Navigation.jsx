import React from 'react'
import { Mountain, Search, User, ShoppingCart } from 'lucide-react'

export default function Navigation() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-8 py-8 lg:px-16 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-3 text-wander-dark">
        <Mountain size={28} />
        <span className="font-bold text-xl uppercase tracking-widest">Harihaaran</span>
      </div>

      {/* Center Links */}
      <div className="hidden lg:flex gap-8 text-wander-dark/90">
        {['Tours', 'Destinations', 'Packages', 'Gallery', 'About', 'Contact'].map((link) => (
          <a key={link} href="#" className="hover:text-orange-500 transition-colors">
            {link}
          </a>
        ))}
      </div>

      {/* Right Icons */}
      <div className="flex gap-6 text-wander-dark">
        <Search size={24} className="cursor-pointer hover:text-orange-500 transition-colors" />
        <User size={24} className="cursor-pointer hover:text-orange-500 transition-colors" />
        <div className="relative cursor-pointer hover:text-orange-500 transition-colors">
          <ShoppingCart size={24} />
          <span className="absolute -top-1.5 -right-2 bg-wander-orange text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">2</span>
        </div>
      </div>
    </nav>
  )
}
