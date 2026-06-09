
"use client"

import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export function Gallery() {
  const galleryItems = [
    { ...PlaceHolderImages.find(img => img.id === 'gallery-1'), caption: "High-level Executive Panel Discussion" },
    { ...PlaceHolderImages.find(img => img.id === 'gallery-2'), caption: "Main Hall Keynote Presentation" },
    { imageUrl: "https://picsum.photos/seed/summit1/1200/800", description: "B2B Networking Session", caption: "Forging Global Partnerships", imageHint: "business networking" },
    { imageUrl: "https://picsum.photos/seed/summit2/1200/800", description: "Investors Gala", caption: "Celebrating Corporate Excellence", imageHint: "gala dinner" },
    { imageUrl: "https://picsum.photos/seed/summit3/1200/800", description: "Digital Innovation Hub", caption: "Showcasing Future Technologies", imageHint: "tech hub" },
  ].filter(img => img.imageUrl)

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4 md:px-24">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <span className="text-xs font-bold tracking-[0.4em] text-accent uppercase">Perspective</span>
            <h2 className="text-5xl md:text-7xl font-headline font-bold uppercase leading-none">Gallery</h2>
          </div>
          <p className="max-w-md text-right text-muted-foreground font-light text-lg">
            A curated visual narrative of strategic dialogue and institutional innovation.
          </p>
        </div>

        <Carousel 
          opts={{ align: "start", loop: true }}
          plugins={[Autoplay({ delay: 4000, stopOnInteraction: false })]}
          className="w-full"
        >
          <CarouselContent className="-ml-8">
            {galleryItems.map((img, i) => (
              <CarouselItem key={i} className="pl-8 md:basis-1/2 lg:basis-1/2">
                <div className="group relative aspect-video overflow-hidden border border-black/5 bg-muted shadow-sm transition-all duration-700 hover:shadow-xl">
                  {img?.imageUrl && (
                    <Image
                      src={img.imageUrl}
                      alt={img.description || "Summit Gallery Image"}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      data-ai-hint={img.imageHint}
                    />
                  )}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-full p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-white/90 backdrop-blur-md border-t border-black/5">
                    <p className="text-[10px] font-bold tracking-[0.3em] text-accent uppercase">{img?.description}</p>
                    <p className="text-sm font-headline font-bold uppercase mt-1">{img?.caption}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-end gap-4 mt-8">
            <CarouselPrevious className="static translate-y-0 rounded-none w-14 h-14 border-black/10" />
            <CarouselNext className="static translate-y-0 rounded-none w-14 h-14 border-black/10" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}
