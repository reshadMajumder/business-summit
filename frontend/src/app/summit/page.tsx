
"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, Globe, Users, Zap } from "lucide-react"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const events = [
  {
    city: "ABUJA",
    hotel: "ABUJA Continental hotel",
    room: "GRAND BALLROOM",
    dates: "10, 11 NOVEMBER 2026",
    image: "https://picsum.photos/seed/abuja-summit/1200/800"
  },
  {
    city: "LAGOS",
    hotel: "LAGOS Continental hotel",
    room: "GRAND BALLROOM",
    dates: "13, 14 NOVEMBER 2026",
    image: "https://picsum.photos/seed/lagos-summit/1200/800"
  }
]

const eventPhotos = [
  { url: "https://picsum.photos/seed/event1/800/600", caption: "Diplomatic Milestone - signing the MOU with Plateau State Government" },
  { url: "https://picsum.photos/seed/event2/800/600", caption: "Dr. Haider speaking with international delegates in Abuja" },
  { url: "https://picsum.photos/seed/event3/800/600", caption: "Executive networking luncheon at Lagos Continental" },
  { url: "https://picsum.photos/seed/event4/800/600", caption: "Strategic B2B matchmaking session in action" },
  { url: "https://picsum.photos/seed/event5/800/600", caption: "Main keynote audience at Northern Nigeria Summit" },
  { url: "https://picsum.photos/seed/event6/800/600", caption: "Awarding the excellence in regional industrialization" },
]

const keyPeople = [
  { name: "Senator Anyim Pius Anyim", role: "Former Secretary to the Government of the Federation", id: "speaker-anyim" },
  { name: "Governor Caleb Mutfwang", role: "Executive Governor of Plateau State", id: "speaker-caleb" },
]

export default function SummitPage() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navbar variant="solid" />
      
      {/* Centralized Hero */}
      <section className="relative pt-32 pb-12 bg-white overflow-hidden text-center">
        <div className="container mx-auto px-4 md:px-24">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-headline font-bold uppercase leading-[0.9]">
              The <br /> Investors <br /> <span className="text-accent">Summit</span>
            </h1>
            <p className="text-xl md:text-2xl font-light leading-relaxed text-muted-foreground max-w-2xl mx-auto">
              A Premier Annual 4-day Global event convening Investors, High Net Worth Individuals, and Government Dignitaries from 100+ countries.
            </p>
          </div>
        </div>
      </section>

      {/* Previous Editions Rotating Gallery */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-24">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-headline font-bold uppercase text-center md:text-left">Previous Editions</h2>
          </div>
          
          <Carousel 
            opts={{ align: "start", loop: true }}
            plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]}
            className="w-full"
          >
            <CarouselContent className="-ml-8">
              {eventPhotos.map((photo, i) => (
                <CarouselItem key={i} className="pl-8 md:basis-1/2 lg:basis-1/3">
                  <div className="group space-y-4">
                    <div className="relative aspect-[4/3] overflow-hidden border border-black/5 bg-muted">
                      <Image src={photo.url} alt={photo.caption} fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                    </div>
                    <p className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground leading-relaxed">{photo.caption}</p>
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

      {/* Upcoming Section Above Venues */}
      <section className="pt-24 bg-white">
        <div className="container mx-auto px-4 md:px-24">
           <div className="mb-12 border-l-4 border-accent pl-8">
             <span className="text-xs font-bold tracking-[0.5em] text-accent uppercase block mb-2">Roadmap</span>
             <h2 className="text-5xl font-headline font-bold uppercase">Upcoming</h2>
           </div>
          <div className="grid md:grid-cols-2 gap-px bg-black/5 border border-black/5">
            {events.map((event, i) => (
              <div key={i} className="bg-white p-12 space-y-8 group relative overflow-hidden">
                <div className="relative aspect-video mb-8 overflow-hidden">
                  <Image 
                    src={event.image} 
                    alt={event.city} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-xs font-bold tracking-widest text-accent uppercase">
                    <MapPin className="w-4 h-4" />
                    {event.city}
                  </div>
                  <h3 className="text-3xl font-headline font-bold uppercase">{event.room}</h3>
                  <p className="text-sm font-bold tracking-widest text-muted-foreground uppercase">{event.hotel}</p>
                  <div className="pt-6 flex items-center gap-4 text-xs font-bold tracking-[0.3em] uppercase border-t border-black/5">
                    <Calendar className="w-4 h-4 text-accent" />
                    {event.dates}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key People Section */}
      <section className="py-32 bg-primary text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-24">
          <div className="mb-20 space-y-4 text-center md:text-left">
            <h2 className="text-5xl font-headline font-bold uppercase">Key People</h2>
          </div>
          
          <Carousel 
            opts={{ align: "start", loop: true }}
            plugins={[Autoplay({ delay: 4000, stopOnInteraction: false })]}
            className="w-full"
          >
            <CarouselContent className="-ml-12">
              {keyPeople.map((person, i) => (
                <CarouselItem key={i} className="pl-12 md:basis-1/2 lg:basis-1/2">
                  <div className="space-y-8 group">
                    <div className="relative aspect-[4/5] bg-white/5 overflow-hidden border border-white/5">
                      <Image 
                        src={`https://picsum.photos/seed/${person.id}/800/1000`} 
                        alt={person.name} 
                        fill 
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                        data-ai-hint="official portrait"
                      />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-2xl font-headline font-bold uppercase tracking-tight">{person.name}</h4>
                      <p className="text-xs font-bold text-accent tracking-[0.2em] uppercase leading-relaxed">{person.role}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-end gap-4 mt-12 px-4">
              <CarouselPrevious className="static translate-y-0 rounded-none w-14 h-14 border-white/10" />
              <CarouselNext className="static translate-y-0 rounded-none w-14 h-14 border-white/10" />
            </div>
          </Carousel>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-24">
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-10">
              <h2 className="text-4xl md:text-6xl font-headline font-bold uppercase leading-none">Exclusive <br /> Engagement <br /> Platform</h2>
              <p className="text-xl font-light leading-relaxed text-muted-foreground">
                Designed as an exclusive platform for strategic G2G, G2B, B2B, and investor engagements, the Summit fosters high-level cross-border collaboration and direct access to capital. 
              </p>
              <p className="text-lg font-light leading-relaxed text-muted-foreground">
                Participants build meaningful partnerships, expand into new markets, and secure funding on the spot.
              </p>
            </div>
            
            <div className="bg-background p-16 space-y-12 border border-black/5">
              <div className="space-y-4">
                <span className="text-xs font-bold tracking-[0.4em] text-accent uppercase">Architecture</span>
                <h3 className="text-3xl font-headline font-bold uppercase">What To Expect</h3>
              </div>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <Zap className="w-8 h-8 text-accent shrink-0" />
                  <div className="space-y-1">
                    <p className="text-sm font-bold tracking-widest uppercase">Direct Capital Access</p>
                    <p className="text-sm font-light leading-relaxed text-muted-foreground">
                      Latest strategy and on-the-spot solutions on how to get funding and business solutions.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <Globe className="w-8 h-8 text-accent shrink-0" />
                  <div className="space-y-1">
                    <p className="text-sm font-bold tracking-widest uppercase">Summit Concierge</p>
                    <p className="text-sm font-light leading-relaxed text-muted-foreground">
                      Access to the brains behind Business Summit and an exclusive community of hundreds of like-minded individuals.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <Zap className="w-8 h-8 text-accent shrink-0" />
                  <div className="space-y-1">
                    <p className="text-sm font-bold tracking-widest uppercase">Matchmaking</p>
                    <p className="text-sm font-light leading-relaxed text-muted-foreground">
                      Quality matchmaking to ensure closure of deals and a clear pathway to effortless globalization.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
