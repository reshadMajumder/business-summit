
'use client'

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
      imageUrl: "https://res.cloudinary.com/dzgs1uhn0/image/upload/v1782454388/BS-Team-is-honoured-to-have-met-Tun-Mahathir-Bin-Moha_hvuxsk.jpg", 
      description: "Business Summit Team with Tun Mahathir Mohamad, Former Prime Minister of Malaysia", 
      imageHint: "diplomatic meeting" 
    },
    { 
      imageUrl: "https://res.cloudinary.com/dzgs1uhn0/image/upload/v1782452968/Governors_House_with_team_abvoss.jpg", 
      description: "Business Summit Team with Senator Anyim Pius Anyim, Former Senate President of Nigeria", 
      imageHint: "government meeting" 
    },
    { 
      imageUrl: "https://res.cloudinary.com/dzgs1uhn0/image/upload/v1782452965/Dhu_with_President_of_Guyana_vtwqny.jpg", 
      description: "Dr. Haider with the President of Guyana", 
      imageHint: "presidential meeting" 
    },
    { 
      imageUrl: "https://res.cloudinary.com/dzgs1uhn0/image/upload/v1781434828/DSC06276.2_mmasc4.jpg", 
      description: "Investors Summit Kuala Lumpur 2024", 
      imageHint: "summit stage" 
    },
    { 
      imageUrl: "https://res.cloudinary.com/dzgs1uhn0/image/upload/v1781203873/Dr._M_Haider_Uzzaman_in_a_strategic_high-level_meeting_with_the_Deputy_Foreign_Minister_of_Kosovo_exploring_international_trade_opportunities_and_bilateral_economic_cooperation._asyzxj.jpg", 
      description: "Strategic high-level meeting with the Deputy Foreign Minister of Kosovo", 
      imageHint: "diplomatic dialogue" 
    },
    { 
      imageUrl: "https://res.cloudinary.com/dzgs1uhn0/image/upload/v1781202675/Dr._M_Haider_Uzzaman_in_a_strategic_high-level_meeting_with_the_Deputy_Foreign_Minister_of_Kosovo_exploring_international_trade_opportunities_and_bilateral_economic_cooperation._1_ifbepm.jpg", 
      description: "Business Summit team with H.E Kreshnik Ahmeti & H.E Guner Ureya of MOFA Kosovo", 
      imageHint: "high level talk" 
    },
    { 
      imageUrl: "https://res.cloudinary.com/dzgs1uhn0/image/upload/v1781202675/MOU_signing_with_Governor_of_Plateau_State_1_ow6ixj.jpg", 
      description: "DryPort MOU Signing with H.E Caleb Mutfwang, Executive Governor of Plateau State", 
      imageHint: "mou ceremony" 
    }
  ]

  return (
    <section className="py-24 bg-white border-b border-black/5">
      <div className="container mx-auto px-4 md:px-24">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <span className="text-xs font-bold tracking-[0.4em] text-accent uppercase block">Diplomatic Milestone</span>
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
                      alt={img.description || "Diplomatic Milestone"}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      data-ai-hint={img.imageHint}
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                  {img.description && (
                    <div className="mt-6">
                      <p className="text-[10px] font-bold text-accent tracking-[0.3em] uppercase line-clamp-2 min-h-[2.4em]">
                        {img.description}
                      </p>
                    </div>
                  )}
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
