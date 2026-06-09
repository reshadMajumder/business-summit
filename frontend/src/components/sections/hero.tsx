
"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0 video-container">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover scale-125 origin-center"
        >
          <source src="https://video.wixstatic.com/video/aeffa8_a5b1c4ede328407284baacb3c9986f58/1080p/mp4/file.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto space-y-10 animate-fade-in">
        <p className="text-lg md:text-2xl text-white/90 font-light max-w-4xl mx-auto tracking-[0.25em] uppercase border-y border-white/20 py-6 inline-block">
          Get Funded | Build Partnerships <br /> Expand Globally
        </p>
        <div className="flex items-center justify-center pt-8">
          <Link href="/invex">
            <Button className="bg-white/5 backdrop-blur-md border border-white text-white hover:bg-white hover:text-black h-16 px-14 text-xs font-bold tracking-[0.4em] uppercase rounded-none group transition-all duration-500 shadow-2xl">
              InvEX
              <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/40">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent"></div>
      </div>
    </section>
  )
}
