import React, { useState } from 'react'
import { Phone, Mail, MapPin, Send } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    destination: '',
    dates: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleWhatsApp = () => {
    if (!formData.name || !formData.phone) {
      alert('Please fill in Name and Phone')
      return
    }
    const msg = `Hello! I'm ${formData.name}. My phone: ${formData.phone}. I'm interested in: ${formData.destination || 'Tours'}. Dates: ${formData.dates || 'To be decided'}`
    const whatsappUrl = `https://wa.me/918121607398?text=${encodeURIComponent(msg)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleEmail = () => {
    if (!formData.name || !formData.phone) {
      alert('Please fill in Name and Phone')
      return
    }
    const subject = `Tour Inquiry from ${formData.name}`
    const body = `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nDestination: ${formData.destination}\nDates: ${formData.dates}`
    const emailUrl = `mailto:chariharan5338@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = emailUrl
  }

  return (
    <section className="py-20 px-4 md:px-8 bg-wander-blue/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-outfit font-500 text-wander-dark mb-4 text-center">Plan Your Journey</h2>
        <p className="text-center text-wander-text/70 mb-12">Get in touch with us today</p>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <Phone className="text-wander-orange mx-auto mb-3" size={32} />
            <h3 className="font-medium text-wander-dark mb-2">Call Us</h3>
            <p className="text-wander-text/70">+91 8121607398</p>
          </div>
          <div className="text-center">
            <MapPin className="text-wander-orange mx-auto mb-3" size={32} />
            <h3 className="font-medium text-wander-dark mb-2">Location</h3>
            <p className="text-wander-text/70">Shantinagar, Tandur</p>
          </div>
          <div className="text-center">
            <Mail className="text-wander-orange mx-auto mb-3" size={32} />
            <h3 className="font-medium text-wander-dark mb-2">Email</h3>
            <p className="text-wander-text/70">chariharan5338@gmail.com</p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="border border-wander-text/20 rounded-lg px-4 py-3 focus:outline-none focus:border-wander-orange"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="border border-wander-text/20 rounded-lg px-4 py-3 focus:outline-none focus:border-wander-orange"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="border border-wander-text/20 rounded-lg px-4 py-3 focus:outline-none focus:border-wander-orange"
            />
            <input
              type="text"
              name="destination"
              placeholder="Preferred Destination"
              value={formData.destination}
              onChange={handleChange}
              className="border border-wander-text/20 rounded-lg px-4 py-3 focus:outline-none focus:border-wander-orange"
            />
          </div>
          <input
            type="text"
            name="dates"
            placeholder="Travel Dates (e.g., 15-20 Dec 2024)"
            value={formData.dates}
            onChange={handleChange}
            className="w-full border border-wander-text/20 rounded-lg px-4 py-3 mb-6 focus:outline-none focus:border-wander-orange"
          />

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              onClick={handleWhatsApp}
              className="flex-1 bg-green-500 hover:bg-green-600 text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Send via WhatsApp
            </button>
            <button
              onClick={handleEmail}
              className="flex-1 bg-wander-orange hover:bg-orange-600 text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Send via Email
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
