"use client"

import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export function Partners() {
  const partnerLogos = [
    "partner-1",
    "partner-2",
    "partner-3",
    "partner-4"
  ].map(id => PlaceHolderImages.find(img => img.id === id)).filter(Boolean)

  // Duplicate logos to create seamless loop
  const duplicatedLogos = [...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos]

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

      <div className="space-y-12">
        {/* Row 1: Scrolling Left */}
        <div className="relative flex overflow-hidden">
          <div className="flex gap-12 animate-scroll-left whitespace-nowrap">
            {duplicatedLogos.map((logo, index) => (
              <div key={`row1-${index}`} className="relative w-48 h-24 md:w-64 md:h-32 bg-background flex items-center justify-center p-6 border border-black/5 grayscale hover:grayscale-0 transition-all duration-500">
                {logo?.imageUrl && (
                  <Image
                    src={logo.imageUrl}
                    alt={logo?.description || "Partner"}
                    fill
                    className="object-contain p-4"
                    data-ai-hint={logo?.imageHint}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Scrolling Right */}
        <div className="relative flex overflow-hidden">
          <div className="flex gap-12 animate-scroll-right whitespace-nowrap">
            {duplicatedLogos.map((logo, index) => (
              <div key={`row2-${index}`} className="relative w-48 h-24 md:w-64 md:h-32 bg-background flex items-center justify-center p-6 border border-black/5 grayscale hover:grayscale-0 transition-all duration-500">
                {logo?.imageUrl && (
                  <Image
                    src={logo.imageUrl}
                    alt={logo?.description || "Partner"}
                    fill
                    className="object-contain p-4"
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
