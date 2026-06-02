
"use client"

import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export function Partners() {
  const logos = [
    PlaceHolderImages.find(img => img.id === 'partner-1'),
    PlaceHolderImages.find(img => img.id === 'partner-2'),
    PlaceHolderImages.find(img => img.id === 'partner-3'),
    PlaceHolderImages.find(img => img.id === 'partner-4'),
  ].filter(Boolean)

  // Duplicating for seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos]

  return (
    <section className="py-24 bg-white overflow-hidden border-y border-black/5">
      <div className="container mx-auto px-4 md:px-24 mb-16">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="space-y-4">
            <span className="text-xs font-bold tracking-[0.4em] text-accent uppercase">Collaborators</span>
            <h2 className="text-4xl md:text-5xl font-headline font-bold uppercase leading-none">Strategic <br />Partners</h2>
          </div>
          <p className="max-w-xs text-right text-muted-foreground font-light text-sm uppercase tracking-widest">
            Aligned with global leaders in technology and innovation.
          </p>
        </div>
      </div>

      <div className="space-y-8">
        {/* Row 1: Scrolling Left */}
        <div className="relative flex overflow-hidden">
          <div className="flex gap-8 animate-scroll-left whitespace-nowrap">
            {duplicatedLogos.map((logo, index) => (
              <div 
                key={`row1-${index}`} 
                className="relative w-40 h-20 md:w-64 md:h-32 bg-white flex items-center justify-center p-6 border border-black/5 transition-all duration-500 hover:border-accent"
              >
                {logo?.imageUrl && (
                  <Image
                    src={logo.imageUrl}
                    alt={logo?.description || "Partner"}
                    fill
                    className="object-contain p-4 transition-all"
                    data-ai-hint={logo?.imageHint}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Scrolling Right */}
        <div className="relative flex overflow-hidden">
          <div className="flex gap-8 animate-scroll-right whitespace-nowrap">
            {duplicatedLogos.map((logo, index) => (
              <div 
                key={`row2-${index}`} 
                className="relative w-40 h-20 md:w-64 md:h-32 bg-white flex items-center justify-center p-6 border border-black/5 transition-all duration-500 hover:border-accent"
              >
                {logo?.imageUrl && (
                  <Image
                    src={logo.imageUrl}
                    alt={logo?.description || "Partner"}
                    fill
                    className="object-contain p-4 transition-all"
                    data-ai-hint={logo?.imageHint}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
