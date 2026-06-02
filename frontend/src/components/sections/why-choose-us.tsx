
"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const stats = [
  { value: "24", suffix: "+", label: "BRANDS\nTRANSFORMED", targetHeight: "35%" },
  { value: "98", suffix: "%", label: "CLIENT\nRETENTION RATE", targetHeight: "45%" },
  { value: "300", suffix: "+", label: "CAMPAIGNS\nLAUNCHED", targetHeight: "60%" },
  { value: "$25M", suffix: "+", label: "REVENUE\nGENERATED", targetHeight: "80%" },
]

export function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="py-20 md:py-32 bg-[#F2F2F2] overflow-hidden relative">
      {/* Subtle Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <div className="container mx-auto px-4 md:px-24 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8 md:gap-12">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full border-2 border-black flex overflow-hidden">
              <div className="w-1/2 h-full bg-black"></div>
              <div className="w-1/2 h-full bg-transparent"></div>
            </div>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Architecture of Success</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-headline font-bold uppercase leading-[0.9] max-w-2xl md:text-right">
            Results That <br className="hidden sm:block" /> Speak For <br className="hidden sm:block" /> Themselves
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className="relative aspect-[4/5] sm:aspect-[4/6] bg-[#E8E8E8] group overflow-hidden shadow-sm transition-all duration-500 hover:shadow-xl"
            >
              {/* Digit Container - High Z-index and Difference blending to ensure visibility over the bar */}
              <div className="p-6 md:p-8 relative z-30 mix-blend-difference">
                <div className="flex items-start">
                  <span className="text-6xl md:text-7xl lg:text-8xl font-headline font-bold tracking-tighter leading-none text-white">
                    {stat.value}
                  </span>
                  <span className="text-xl md:text-2xl lg:text-3xl font-headline font-medium mt-2 text-white/60">
                    {stat.suffix}
                  </span>
                </div>
              </div>

              {/* The Filling Bar */}
              <div 
                className="absolute bottom-0 left-0 w-full bg-black transition-all duration-[1500ms] ease-out flex flex-col z-10"
                style={{ 
                  height: isVisible ? stat.targetHeight : "0%",
                  transitionDelay: `${i * 200}ms`
                }}
              >
                {/* Brand Gold Accent Line */}
                <div className="w-full h-[2px] bg-accent shadow-[0_0_15px_rgba(212,175,55,0.4)]"></div>
                
                <div className="flex-1 flex flex-col justify-end p-6 md:p-8">
                  <p className="text-white text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase whitespace-pre-line leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                    {stat.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
