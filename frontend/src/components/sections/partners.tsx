
"use client"

import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export function Partners() {
  const allLogos = PlaceHolderImages.filter(img => img.id.startsWith('partner-'))

  const row1Logos = allLogos.slice(0, 18)
  const row2Logos = allLogos.slice(18)

  // Duplicating logos to ensure a seamless and long scroll
  const duplicatedRow1Logos = [...row1Logos, ...row1Logos]
  const duplicatedRow2Logos = [...row2Logos, ...row2Logos]

  return (
    <section className="py-24 bg-white overflow-hidden border-y border-black/5">
      <div className="container mx-auto px-4 md:px-24 mb-16">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-center md:justify-between gap-8">
          <div className="space-y-4 text-center md:text-left">
            <span className="text-xs font-bold tracking-[0.4em] text-accent uppercase block">Collaborators</span>
            <h2 className="text-4xl md:text-5xl font-headline font-bold uppercase leading-none">
              Strategic <br />
              <span className="text-accent">Partners</span>
            </h2>
          </div>
          <p className="max-w-xs text-center md:text-right text-muted-foreground font-light text-sm uppercase tracking-widest">
            Aligned with global leaders in technology and innovation.
          </p>
        </div>
      </div>

      <div className="space-y-12">
        {/* Row 1: Scrolling Left */}
        <div className="relative flex overflow-hidden">
          <div className="flex gap-12 animate-scroll-left whitespace-nowrap">
            {duplicatedRow1Logos.map((logo, index) => (
              <div 
                key={`row1-${index}`} 
                className="relative w-32 h-16 md:w-48 md:h-24 bg-white flex items-center justify-center p-4 border border-black/5 transition-all duration-500 hover:border-accent group shrink-0"
              >
                {logo?.imageUrl && (
                  <Image
                    src={logo.imageUrl}
                    alt={logo?.description || "Partner"}
                    fill
                    className="object-contain p-4 transition-all group-hover:scale-110"
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
            {duplicatedRow2Logos.map((logo, index) => (
              <div 
                key={`row2-${index}`} 
                className="relative w-32 h-16 md:w-48 md:h-24 bg-white flex items-center justify-center p-4 border border-black/5 transition-all duration-500 hover:border-accent group shrink-0"
              >
                {logo?.imageUrl && (
                  <Image
                    src={logo.imageUrl}
                    alt={logo?.description || "Partner"}
                    fill
                    className="object-contain p-4 transition-all group-hover:scale-110"
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
