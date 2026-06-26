
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
    name: "Prof. Dr. Ahmed bin Salawudeen",
    role: "President, Standard Insurance Consultants Limited, Nigeria",
    image: "https://res.cloudinary.com/dzgs1uhn0/image/upload/v1781250974/Prof.-Ahmed-Bin-Salawudeen_rtyc71.jpg",
    imageHint: "executive portrait"
  },
  {
    name: "Prof. Dr. Abu Yousuf Md. Abdullah",
    role: "Director, Institute of Business Administration, University of Dhaka, Bangladesh",
    image: "https://res.cloudinary.com/dzgs1uhn0/image/upload/v1782457169/Screenshot_2026-06-26_125836_smcv8z.png",
    imageHint: "academic director"
  },
  {
    name: "Mr. Shaher Mousli",
    role: "Founder & Chairman, Gulf Land Property Developers",
    image: "https://res.cloudinary.com/dzgs1uhn0/image/upload/v1782457169/Screenshot_2026-06-26_125907_ijgwbz.png",
    imageHint: "founder portrait"
  },
]

export function AdvisoryBoard() {
  const isCarousel = boardMembers.length > 4;

  const renderMember = (member: typeof boardMembers[0]) => (
    <div className="group space-y-6 w-full">
      <div className="relative aspect-[4/5] overflow-hidden bg-muted border border-black/5 shadow-sm transition-all duration-700 hover:shadow-xl">
        <Image 
          src={member.image} 
          alt={member.name} 
          fill 
          className="object-cover transition-all duration-1000 group-hover:scale-105"
          data-ai-hint={member.imageHint}
        />
      </div>
      <div className="space-y-2 text-center">
        <h4 className="text-sm md:text-lg font-headline font-bold uppercase tracking-tight leading-tight">{member.name}</h4>
        <p className="text-[8px] md:text-[10px] font-bold text-accent tracking-[0.2em] uppercase leading-relaxed">{member.role}</p>
      </div>
    </div>
  );

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4 md:px-24">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
          <div className="space-y-4 text-center md:text-left">
            <span className="text-xs font-bold tracking-[0.4em] text-accent uppercase block">The Council</span>
            <h2 className="text-5xl md:text-7xl font-headline font-bold uppercase leading-none">
              Advisory <br /> <span className="text-accent">Board</span>
            </h2>
          </div>
          <p className="max-w-md text-center md:text-right text-muted-foreground font-light text-lg">
            Institutional intelligence guided by a collective of global industry veterans and strategic visionaries.
          </p>
        </div>

        {isCarousel ? (
          <Carousel 
            opts={{ align: "start", loop: true }}
            plugins={[Autoplay({ delay: 6000, stopOnInteraction: false })]}
            className="w-full"
          >
            <CarouselContent className="-ml-4 sm:-ml-6">
              {[...boardMembers, ...boardMembers].map((member, i) => (
                <CarouselItem key={i} className="pl-4 sm:pl-6 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  {renderMember(member)}
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-end gap-3 mt-12">
              <CarouselPrevious className="static translate-y-0 rounded-none w-10 h-10 border-black/10" />
              <CarouselNext className="static translate-y-0 rounded-none w-10 h-10 border-black/10" />
            </div>
          </Carousel>
        ) : (
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 lg:gap-24 max-w-6xl mx-auto">
            {boardMembers.map((member, i) => (
              <div key={i} className="w-[calc(50%-1rem)] lg:w-[calc(33.33%-4rem)] max-w-[340px]">
                {renderMember(member)}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
