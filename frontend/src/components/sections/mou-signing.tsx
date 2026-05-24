
"use client"

import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export function MOUSigning() {
  const mouImages = [
    PlaceHolderImages.find(img => img.id === 'mou-1'),
    PlaceHolderImages.find(img => img.id === 'mou-2')
  ].filter(Boolean)

  return (
    <section className="py-24 bg-white border-b border-black/5">
      <div className="container mx-auto px-4 md:px-24">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <span className="text-xs font-bold tracking-[0.4em] text-accent uppercase">Diplomatic Milestone</span>
            <h2 className="text-4xl md:text-5xl font-headline font-bold uppercase leading-none">MOU signing with <br /> Governor of Plateau State</h2>
          </div>
          <p className="max-w-xs text-right text-muted-foreground font-light text-sm uppercase tracking-widest">
            Formalizing strategic collaboration for regional excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {mouImages.map((img, i) => (
            <div key={i} className="relative aspect-[4/3] md:aspect-video overflow-hidden border border-black/5 group bg-muted">
               {img?.imageUrl && (
                 <Image
                  src={img.imageUrl}
                  alt={img.description || "MOU Signing Ceremony"}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  data-ai-hint={img.imageHint}
                />
               )}
               <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
