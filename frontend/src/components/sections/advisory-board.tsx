
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

const boardMembers = [
  {
    name: "Tun Dr. Mahathir Mohamad",
    role: "Former Prime Minister of Malaysia & Founding Father of Modern Malaysia",
    image: PlaceHolderImages.find(img => img.id === 'advisor-mahathir')?.imageUrl || "https://picsum.photos/seed/board1/800/1000",
    imageHint: "statesman portrait"
  },
  {
    name: "Dr. Goodluck Ebele Jonathan",
    role: "Former President of the Federal Republic of Nigeria",
    image: PlaceHolderImages.find(img => img.id === 'advisor-goodluck')?.imageUrl || "https://picsum.photos/seed/board2/800/1000",
    imageHint: "official portrait"
  },
]

export function AdvisoryBoard() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4 md:px-24">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <span className="text-xs font-bold tracking-[0.4em] text-accent uppercase">The Council</span>
            <h2 className="text-5xl md:text-7xl font-headline font-bold uppercase leading-none">
              Advisory <br /> <span className="text-accent">Board</span>
            </h2>
          </div>
          <p className="max-w-md text-right text-muted-foreground font-light text-lg">
            Institutional intelligence guided by a collective of global industry veterans and strategic visionaries.
          </p>
        </div>

        <Carousel 
          opts={{ align: "center", loop: true }}
          plugins={[Autoplay({ delay: 6000, stopOnInteraction: false })]}
          className="w-full"
        >
          <CarouselContent className="-ml-6 justify-center">
            {boardMembers.map((member, i) => (
              <CarouselItem key={i} className="pl-6 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div key={i} className="group space-y-4">
                  <div className="relative aspect-[4/5] overflow-hidden bg-muted border border-black/5 shadow-sm transition-all duration-700 hover:shadow-xl">
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      fill 
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                      data-ai-hint={member.imageHint}
                    />
                  </div>
                  <div className="space-y-1 text-center">
                    <h4 className="text-sm font-headline font-bold uppercase tracking-tight leading-tight">{member.name}</h4>
                    <p className="text-[8px] font-bold text-accent tracking-[0.2em] uppercase leading-relaxed">{member.role}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-end gap-3 mt-12">
            <CarouselPrevious className="static translate-y-0 rounded-none w-10 h-10 border-black/10" />
            <CarouselNext className="static translate-y-0 rounded-none w-10 h-10 border-black/10" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}
