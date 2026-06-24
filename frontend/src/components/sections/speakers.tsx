
"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"

const speakerData = [
  { id: 'speaker-1', name: 'DR. M. HAIDER UZZAMAN', role: 'CHAIRMAN & FOUNDER', quote: 'Connecting businesses globally to scale financial results is our primary mission.' },
  { id: 'speaker-2', name: 'ELENA ROSSI', role: 'DIRECTOR OF INNOVATION, ARTE', quote: 'Design is not just appearance, it is the soul of performance.' },
  { id: 'speaker-3', name: 'MARCUS VANE', role: 'MANAGING PARTNER, VANE CAP', quote: 'Liquidity is the oxygen of global innovation cycles.' },
  { id: 'speaker-4', name: 'DR. ARIS CHEN', role: 'HEAD OF AI RESEARCH, ETHEREA', quote: 'Intelligence is the ultimate leverage in a competitive world.' },
]

export function Speakers() {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-24 mb-16">
        <div className="space-y-4">
          <span className="text-xs font-bold tracking-[0.4em] text-accent uppercase">Spotlight</span>
          <h2 className="text-5xl md:text-7xl font-headline font-bold uppercase">Our Speakers</h2>
        </div>
      </div>

      <div className="px-4 md:px-24">
        <Carousel className="w-full" opts={{ align: "start", loop: true }}>
          <CarouselContent className="-ml-4">
            {speakerData.map((speaker, index) => {
              const image = PlaceHolderImages.find(img => img.id === speaker.id)
              return (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="group cursor-pointer">
                    <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                      {image?.imageUrl && (
                        <Image 
                          src={image.imageUrl} 
                          alt={speaker.name} 
                          fill
                          className="object-cover transition-all duration-1000 group-hover:scale-105"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10 space-y-4">
                        <p className="text-white text-lg font-light italic leading-relaxed">"{speaker.quote}"</p>
                      </div>
                    </div>
                    <div className="mt-8 space-y-2">
                      <h3 className="text-2xl font-headline font-bold uppercase tracking-tight">{speaker.name}</h3>
                      <p className="text-xs font-bold text-accent tracking-[0.2em] uppercase">{speaker.role}</p>
                    </div>
                  </div>
                </CarouselItem>
              )
            })}
          </CarouselContent>
          <div className="flex justify-end gap-4 mt-12">
            <CarouselPrevious className="static translate-y-0 rounded-none w-14 h-14 border-black/10 hover:bg-black hover:text-white transition-all" />
            <CarouselNext className="static translate-y-0 rounded-none w-14 h-14 border-black/10 hover:bg-black hover:text-white transition-all" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}
