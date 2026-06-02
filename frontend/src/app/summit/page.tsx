
"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, ArrowRight, CheckCircle2, Globe, Users, Zap } from "lucide-react"
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

const featuredSpeakers = [
  {
    name: "Dr. M Haider Uzzaman",
    role: "Global Business Leader, President of Business Summit",
    id: "speaker-1"
  },
  {
    name: "Prof. Ahmed Salawudeen",
    role: "Chairman, Signature Global Real Estate & Standard Insurance Consultants Ltd",
    id: "speaker-3"
  },
  {
    name: "Mr. Gonçalo Terenas",
    role: "Head of Corporate & International Business at Tuga Innovations Inc.",
    id: "speaker-2"
  },
  {
    name: "Dr. M Haider Uzzaman",
    role: "Global Business Leader, President of Business Summit",
    id: "speaker-1"
  },
  {
    name: "Prof. Ahmed Salawudeen",
    role: "Chairman, Signature Global Real Estate & Standard Insurance Consultants Ltd",
    id: "speaker-3"
  },
  {
    name: "Mr. Gonçalo Terenas",
    role: "Head of Corporate & International Business at Tuga Innovations Inc.",
    id: "speaker-2"
  }
]

export default function SummitPage() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navbar variant="solid" />
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-24">
          <div className="max-w-4xl space-y-8 animate-fade-in">
            <span className="text-xs font-bold tracking-[0.5em] text-accent uppercase">Strategic Global Event</span>
            <h1 className="text-6xl md:text-8xl font-headline font-bold uppercase leading-[0.9]">
              Investors <br /> Summit <br /> <span className="text-accent">Nigeria 2026</span>
            </h1>
            <p className="text-xl md:text-2xl font-light leading-relaxed text-muted-foreground max-w-2xl">
              A Premier Annual 4-day Global event convening Investors, High Net Worth Individuals, and Government Dignitaries from 100+ countries.
            </p>
          </div>
        </div>
      </section>

      {/* Schedule / Locations Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-24">
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

      {/* Featured Speakers Carousel */}
      <section className="py-32 bg-primary text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-24">
          <div className="mb-20 space-y-4 text-center md:text-left">
            <span className="text-xs font-bold tracking-[0.4em] text-accent uppercase">The Faculty</span>
            <h2 className="text-5xl font-headline font-bold uppercase">Featuring</h2>
          </div>
          
          <Carousel 
            opts={{ align: "start", loop: true }}
            plugins={[Autoplay({ delay: 4000, stopOnInteraction: false })]}
            className="w-full"
          >
            <CarouselContent className="-ml-12">
              {featuredSpeakers.map((speaker, i) => {
                const img = PlaceHolderImages.find(p => p.id === speaker.id)
                return (
                  <CarouselItem key={i} className="pl-12 md:basis-1/2 lg:basis-1/3">
                    <div className="space-y-8 group">
                      <div className="relative aspect-[4/5] bg-white/5 overflow-hidden border border-white/5">
                        {img && (
                          <Image 
                            src={img.imageUrl} 
                            alt={speaker.name} 
                            fill 
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                          />
                        )}
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-2xl font-headline font-bold uppercase tracking-tight">{speaker.name}</h4>
                        <p className="text-xs font-bold text-accent tracking-[0.2em] uppercase leading-relaxed">{speaker.role}</p>
                      </div>
                    </div>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
            <div className="flex justify-end gap-4 mt-12 px-4">
              <CarouselPrevious className="static translate-y-0 rounded-none w-14 h-14 border-white/10 hover:bg-white hover:text-black transition-all" />
              <CarouselNext className="static translate-y-0 rounded-none w-14 h-14 border-white/10 hover:bg-white hover:text-black transition-all" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Narrative Section */}
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
              <Button variant="outline" className="h-16 px-12 rounded-none border-black/10 text-[10px] font-bold tracking-[0.4em] uppercase hover:bg-black hover:text-white transition-all">
                View Past Summit
              </Button>
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
                  <Users className="w-8 h-8 text-accent shrink-0" />
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

      {/* Registration CTA */}
      <section className="py-32 bg-accent text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 translate-x-20"></div>
        <div className="container mx-auto px-4 md:px-24 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-12">
            <h2 className="text-4xl md:text-6xl font-headline font-bold uppercase">Register To <br /> Secure Your Seat</h2>
            <p className="text-lg font-light text-white/80">
              We connect You with the right Investors through professional matchmaking for deal closure.
            </p>
            <div className="flex flex-col items-center gap-8">
              <Link href="https://www.eventbrite.ca/e/investors-summit-nigeria-2026-tickets-1977017519621?aff=oddtdtcreator" target="_blank" rel="noopener noreferrer">
                <Button className="h-20 px-16 rounded-none bg-white text-black hover:bg-black hover:text-white transition-all duration-500 text-sm font-bold tracking-[0.4em] uppercase shadow-2xl">
                  Register Now
                </Button>
              </Link>
              <p className="text-xs font-bold tracking-widest uppercase opacity-60">
                For further assistance: <span className="text-white">info@businesssummit.net</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
