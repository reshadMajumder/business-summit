
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

export function MOUSigning() {
  const mouImages = [
    { ...PlaceHolderImages.find(img => img.id === 'mou-1'), caption: "MOU signing with Governor of Plateau State" },
    { ...PlaceHolderImages.find(img => img.id === 'mou-2'), caption: "MOU signing with Governor of Plateau State" },
    { 
      imageUrl: "https://res.cloudinary.com/dzgs1uhn0/image/upload/v1781115307/mic_gta4lj.jpg", 
      description: "Official Address", 
      caption: "MOU signing with Governor of Plateau State", 
      imageHint: "official address" 
    },
    { 
      imageUrl: "https://res.cloudinary.com/dzgs1uhn0/image/upload/v1781115307/chairman-sign_fxsccx.jpg", 
      description: "Chairman Signing", 
      caption: "MOU signing with Governor of Plateau State", 
      imageHint: "contract signing" 
    }
  ].filter(img => img.imageUrl)

  return (
    <section className="py-24 bg-white border-b border-black/5">
      <div className="container mx-auto px-4 md:px-24">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <span className="text-xs font-bold tracking-[0.4em] text-accent uppercase">Diplomatic Milestone</span>
            <h2 className="text-4xl md:text-5xl font-headline font-bold uppercase leading-none">
              Diplomatic <br /> <span className="text-accent">Milestones</span>
            </h2>
          </div>
          <p className="max-w-xs text-right text-muted-foreground font-light text-sm uppercase tracking-widest">
            Formalizing strategic collaboration for regional excellence.
          </p>
        </div>

        <Carousel 
          opts={{ align: "start", loop: true }}
          plugins={[Autoplay({ delay: 5000, stopOnInteraction: false })]}
          className="w-full"
        >
          <CarouselContent className="-ml-8">
            {mouImages.map((img, i) => (
              <CarouselItem key={i} className="pl-8 md:basis-1/2 lg:basis-2/3">
                <div className="relative group">
                  <div className="relative aspect-video overflow-hidden border border-black/5 bg-muted">
                    {img.imageUrl && (
                      <Image
                        src={img.imageUrl}
                        alt={img.description || "MOU Signing Ceremony"}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        data-ai-hint={img.imageHint}
                      />
                    )}
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                  <div className="mt-6 space-y-2">
                    <p className="text-[10px] font-bold text-accent tracking-[0.3em] uppercase">{img.description}</p>
                    <h3 className="text-xl font-headline font-bold uppercase">{img.caption}</h3>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-end gap-4 mt-8">
            <CarouselPrevious className="static translate-y-0 rounded-none w-12 h-12 border-black/10" />
            <CarouselNext className="static translate-y-0 rounded-none w-12 h-12 border-black/10" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}
