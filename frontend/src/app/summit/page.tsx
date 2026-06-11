
"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, Globe, Users, Zap, Ticket } from "lucide-react"
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
    city: "ABUJA, NIGERIA",
    hotel: "ABUJA Continental hotel",
    room: "GRAND BALLROOM",
    dates: "10, 11 NOVEMBER 2026",
    image: "https://picsum.photos/seed/abuja-summit/1200/800"
  },
  {
    city: "LAGOS, NIGERIA",
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
      <section className="relative pt-32 pb-12 sm:pt-48 sm:pb-32 bg-white border-b border-black/5 overflow-hidden text-center">
        <div className="container mx-auto px-6 sm:px-12 md:px-24">
          <div className="max-w-5xl mx-auto space-y-12 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-headline font-bold uppercase leading-[0.9]">
              Investors <br /> <span className="text-accent">Summit</span>
            </h1>
            <div className="space-y-8">
              <p className="text-base md:text-xl font-light leading-relaxed text-muted-foreground max-w-4xl mx-auto text-justify">
                An Exclusive & Premier 4-day Annual Event in a major city crowdsourced from around the world to convene Investors, HNWI’s, Government Dignitaries & Project owners from 100+ countries. Investors Summit has been running since 2016 acting as a vehicle for connection, funding and growth. Designed as a platform to facilitate G2G, G2B, B2B engagements, the summit is built on one mission; High-Level Cross Border Collaboration.
              </p>
              <div className="pt-6">
                <Link href="https://www.eventbrite.com" target="_blank" rel="noopener noreferrer">
                  <Button className="h-16 px-12 bg-black text-white hover:bg-accent transition-all duration-500 rounded-none text-[10px] font-bold tracking-[0.4em] uppercase group shadow-2xl">
                    Purchase Ticket
                    <Ticket className="ml-3 w-4 h-4 group-hover:rotate-12 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-24">
           <div className="mb-12 border-l-4 border-accent pl-8">
             <span className="text-xs font-bold tracking-[0.5em] text-accent uppercase block mb-2">Upcoming Summit</span>
             <h2 className="text-5xl font-headline font-bold uppercase">Investors Summit <br /> Nigeria 2026</h2>
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

      {/* Key People Scrolling Section */}
      <section className="py-32 bg-primary text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-24 mb-20">
          <div className="space-y-4 text-center md:text-left">
             <span className="text-xs font-bold tracking-[0.5em] text-accent uppercase block">Dignitaries</span>
            <h2 className="text-5xl font-headline font-bold uppercase">Key People</h2>
          </div>
        </div>
        
        <div className="relative flex overflow-hidden">
          <div className="flex gap-12 animate-scroll-left whitespace-nowrap">
            {/* Doubling for seamless scroll */}
            {[...keyPeople, ...keyPeople, ...keyPeople, ...keyPeople].map((person, i) => (
              <div key={i} className="space-y-6 group w-72 shrink-0 inline-block whitespace-normal">
                <div className="relative aspect-[4/5] bg-white/5 overflow-hidden border border-white/10 shadow-2xl transition-all duration-700">
                  <Image 
                    src={`https://picsum.photos/seed/${person.id}/800/1000`} 
                    alt={person.name} 
                    fill 
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                    data-ai-hint="official portrait"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <div className="space-y-2 px-1">
                  <h4 className="text-xl font-headline font-bold uppercase tracking-tight leading-tight">{person.name}</h4>
                  <p className="text-[10px] font-bold text-accent tracking-[0.2em] uppercase leading-relaxed opacity-80">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Video Testimonial Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-24">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <h2 className="text-4xl md:text-6xl font-headline font-bold uppercase leading-none">Event <br /> Testimonial <br /> <span className="text-accent">Archive</span></h2>
              <p className="text-xl font-light leading-relaxed text-muted-foreground text-justify">
                Witness the culmination of global industrial intelligence. Our summit archives provide a narrative of the connections, capital procurement, and strategic alignments that define the Business Summit experience.
              </p>
              <Link href="https://www.linkedin.com/company/bsummitdotnet/posts/?feedView=all" target="_blank">
                <Button variant="outline" className="h-14 px-8 rounded-none border-black/10 text-[10px] font-bold tracking-[0.3em] uppercase">
                  View More Highlights
                </Button>
              </Link>
            </div>
            
            <div className="relative aspect-video bg-black overflow-hidden shadow-2xl group">
               <video
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover opacity-80"
              >
                <source src="https://video.wixstatic.com/video/aeffa8_a5b1c4ede328407284baacb3c9986f58/1080p/mp4/file.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
              <div className="absolute bottom-6 left-6 text-white z-10">
                <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-accent mb-1">Global Highlights</p>
                <h4 className="text-xl font-headline font-bold uppercase">The Investors Summit Experience</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Previous Editions Rotating Gallery */}
      <section className="py-24 bg-background border-t border-black/5">
        <div className="container mx-auto px-6 sm:px-12 md:px-24">
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
                    <p className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground leading-relaxed text-justify">{photo.caption}</p>
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

      <Footer />
    </main>
  )
}
