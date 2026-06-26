
"use client"

import { cn } from "@/lib/utils"

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
      {/* Native Video Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-black/40 z-10"></div> {/* Technical Overlay */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto space-y-10 animate-fade-in">
        <p className="text-lg md:text-2xl text-white/90 font-light max-w-4xl mx-auto tracking-[0.25em] uppercase border-y border-white/20 py-6 inline-block text-center">
          Get Funded | Build Partnerships <br /> Expand Globally
        </p>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/40">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent"></div>
      </div>
    </section>
  )
}
