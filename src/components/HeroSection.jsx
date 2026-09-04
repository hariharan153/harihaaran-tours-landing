import React, { useRef, useEffect } from 'react'

export default function HeroSection() {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.25
    }
  }, [])

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="hero-video absolute bottom-0 left-1/2 -translate-x-1/2 w-full md:w-auto h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        src="https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/travel_hike_bg_video_1.mp4"
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl px-4 -mt-22">
        <p className="text-sm font-bold uppercase tracking-widest text-wander-dark mb-4">
          Explore Every Journey
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-500 text-wander-dark leading-tight mb-6">
          Experience the Magic of Travel
        </h1>
        <p className="text-lg md:text-xl max-w-md mx-auto text-wander-text mb-8 opacity-90">
          Discover breathtaking destinations and create unforgettable memories with Harihaaran Tours & Travels
        </p>
        <button className="border-2 border-wander-dark text-wander-dark px-8 py-3 uppercase tracking-wide font-medium hover:bg-wander-dark hover:text-white transition-all duration-300">
          Explore Tours
        </button>
      </div>
    </div>
  )
}
