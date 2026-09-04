import React from 'react'
import { ArrowUpRight } from 'lucide-react'

export default function ShopCutout() {
  return (
    <div className="absolute bottom-0 right-0 z-30 bg-wander-bg rounded-tl-[40px] pt-8 pl-10 pb-8 pr-10">
      {/* Corner masks */}
      <div className="absolute -bottom-10 right-0 w-10 h-10 cutout-corner cutout-corner-tl" />
      <div className="absolute bottom-0 -right-10 w-10 h-10 cutout-corner cutout-corner-bl" />

      {/* Button and Text */}
      <div className="flex flex-col items-end gap-2">
        <button className="w-12 h-12 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center transition-colors">
          <ArrowUpRight size={24} className="text-wander-dark" />
        </button>
        <div className="text-right">
          <p className="text-lg font-medium text-wander-dark">Book Now</p>
          <p className="text-sm text-wander-text/60">Start your journey →</p>
        </div>
      </div>
    </div>
  )
}
