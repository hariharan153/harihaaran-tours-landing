import React, { useState, useRef, useEffect } from 'react'
import { Mountain, Search, User, ShoppingCart, ArrowUpRight, Phone, MapPin, Mail, Send } from 'lucide-react'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import ShopCutout from './components/ShopCutout'
import DestinationsSection from './components/DestinationsSection'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function App() {
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <div className="min-h-screen bg-wander-bg">
      {/* Hero Section */}
      <section className="relative w-full h-screen bg-wander-blue overflow-hidden rounded-[32px] md:rounded-[40px] shadow-sm ring-1 ring-black/5 m-4 md:m-6">
        <Navigation />
        <HeroSection />
        <ShopCutout />
      </section>

      {/* Destinations Section */}
      <DestinationsSection />

      {/* Contact Section */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </div>
  )
}
