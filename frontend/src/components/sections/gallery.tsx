
"use client"

import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export function Gallery() {
  const galleryImages = [
    PlaceHolderImages.find(img => img.id === 'gallery-1'),
    PlaceHolderImages.find(img => img.id === 'gallery-2')
  ].filter(Boolean)

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4 md:px-24">
        {/* Header - Consistent with Agenda, MOUSigning, and Offers */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <span className="text-xs font-bold tracking-[0.4em] text-accent uppercase">Perspective</span>
            <h2 className="text-5xl md:text-7xl font-headline font-bold uppercase leading-none">Summit <br /> Gallery</h2>
          </div>
          <p className="max-w-md text-right text-muted-foreground font-light text-lg">
            A curated visual narrative of strategic dialogue and institutional innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {galleryImages.map((img, i) => (
            <div 
              key={i} 
              className="group relative aspect-video overflow-hidden border border-black/5 bg-muted shadow-sm transition-all duration-700 hover:shadow-xl"
            >
              {img?.imageUrl && (
                <Image
                  src={img.imageUrl}
                  alt={img.description || "Summit Gallery Image"}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  data-ai-hint={img.imageHint}
                />
              )}
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
              
              {/* Caption */}
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-white/90 backdrop-blur-md border-t border-black/5">
                <p className="text-[10px] font-bold tracking-[0.3em] text-accent uppercase">{img?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
