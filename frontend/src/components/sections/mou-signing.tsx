
"use client"

import Image from "next/image"
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
    { 
      imageUrl: "https://res.cloudinary.com/dzgs1uhn0/image/upload/v1781202688/10_Lunching-Hertz-in-Bangladesh_waekuu.jpg", 
      description: "LUNCHING HERTZ IN BANGLADESH", 
      imageHint: "business launch" 
    },
    { 
      imageUrl: "https://res.cloudinary.com/dzgs1uhn0/image/upload/v1781202679/Business_Summit_Team_With_Investors_Summit_Nigeria_Team_ylwhgq.jpg", 
      description: "BUSINESS SUMMIT TEAM WITH INVESTORS SUMMIT NIGERIA TEAM", 
      imageHint: "team meeting" 
    },
    { 
      imageUrl: "https://res.cloudinary.com/dzgs1uhn0/image/upload/v1781203873/Dr._M_Haider_Uzzaman_in_a_strategic_high-level_meeting_with_the_Deputy_Foreign_Minister_of_Kosovo_exploring_international_trade_opportunities_and_bilateral_economic_cooperation._asyzxj.jpg", 
      description: "DR. M HAIDER UZZAMAN IN A STRATEGIC HIGH LEVEL MEETING WITH THE DEPUTY FOREIGN MINISTER OF KOSOVO EXPLORING INTERNATIONAL TRADE OPPORTUNITIES AND BILATERAL ECONOMIC COOPERATION", 
      imageHint: "diplomatic meeting" 
    },
    { 
      imageUrl: "https://res.cloudinary.com/dzgs1uhn0/image/upload/v1781202675/Dr._M_Haider_Uzzaman_in_a_strategic_high-level_meeting_with_the_Deputy_Foreign_Minister_of_Kosovo_exploring_international_trade_opportunities_and_bilateral_economic_cooperation._1_ifbepm.jpg", 
      description: "DR. M HAIDER UZZAMAN IN A STRATEGIC HIGH LEVEL MEETING WITH THE DEPUTY FOREIGN MINISTER OF KOSOVO EXPLORING INTERNATIONAL TRADE OPPORTUNITIES AND BILATERAL ECONOMIC COOPERATION", 
      imageHint: "high level talk" 
    },
    { 
      imageUrl: "https://res.cloudinary.com/dzgs1uhn0/image/upload/v1781202675/MOU_signing_with_Governor_of_Plateau_State_1_ow6ixj.jpg", 
      description: "MOU SIGNING WITH GOVERNOR OF PLATEAU STATE", 
      imageHint: "mou ceremony" 
    },
    { 
      imageUrl: "https://res.cloudinary.com/dzgs1uhn0/image/upload/v1781202675/MOU_signing_with_Governor_of_Plateau_State_cbxfhw.jpg", 
      description: "MOU SIGNING WITH GOVERNOR OF PLATEAU STATE", 
      imageHint: "handshake ceremony" 
    }
  ]

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
                    <Image
                      src={img.imageUrl}
                      alt={img.description}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      data-ai-hint={img.imageHint}
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                  <div className="mt-6">
                    <p className="text-[10px] font-bold text-accent tracking-[0.3em] uppercase line-clamp-2 min-h-[2.4em]">
                      {img.description}
                    </p>
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
