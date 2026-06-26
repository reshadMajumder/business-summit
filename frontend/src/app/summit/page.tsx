
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, Ticket } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Investors Summit | High-Level Cross Border Collaboration',
  description: 'The premier global convening of investors, government dignitaries, and project owners. Facilitating G2G, G2B, and B2B engagements since 2016.',
}

const events = [
  {
    city: "ABUJA, NIGERIA",
    hotel: "ABUJA CONTINENTAL VENUE",
    room: "GRAND BALLROOM",
    dates: "10 & 11 NOVEMBER 2026",
    image: "https://res.cloudinary.com/dzgs1uhn0/image/upload/v1781211529/55f0a1b7-a2db-49c8-ae29-ef732a86c1b6.png"
  },
  {
    city: "LAGOS, NIGERIA",
    hotel: "LAGOS CONTINENTAL HOTEL",
    room: "GRAND BALLROOM",
    dates: "13 & 14 NOVEMBER 2026",
    image: "https://res.cloudinary.com/dzgs1uhn0/image/upload/v1781211325/bfdd5376-3520-4a60-8345-9f2618bde2fd.png"
  }
]

const eventPhotos = [
  { url: "https://res.cloudinary.com/dzgs1uhn0/image/upload/v1781203527/f7cdd33a-7386-4a29-ad0e-41f59086645b.png", caption: "Global Strategic Engagement" },
  { url: "https://res.cloudinary.com/dzgs1uhn0/image/upload/v1781203481/152577a0-7883-42b7-9ffa-8b418ca97f53.png", caption: "Institutional Networking Excellence" },
  { url: "https://res.cloudinary.com/dzgs1uhn0/image/upload/v1781203405/0845486f-7644-4742-bf2a-b2046fcd11a0.png", caption: "Executive Leadership Session" },
  { url: "https://res.cloudinary.com/dzgs1uhn0/image/upload/v1781203200/Investors_Summit_Lisbon_2024_htap25.jpg", caption: "Investors Summit Lisbon 2024" },
  { url: "https://res.cloudinary.com/dzgs1uhn0/image/upload/v1781203143/Investors_Summit_Kuala_Lumpur_2017_qhyndj.jpg", caption: "Investors Summit Kuala Lumpur 2017" },
  { url: "https://res.cloudinary.com/dzgs1uhn0/image/upload/v1781203143/Investors_Summit_Kuala_Lumpur_2018_mtngrd.jpg", caption: "Investors Summit Kuala Lumpur 2018" },
]

const keyPeople = [
  { 
    name: "GOVERNOR H.E. CALEB MUTFWANG", 
    role: "EXECUTIVE GOVERNOR OF PLATEAU STATE", 
    image: "https://res.cloudinary.com/dzgs1uhn0/image/upload/v1781203005/Governor_H.E._Caleb_Mutfwang_imdcn5.jpg" 
  },
  { 
    name: "H.E. SENATOR ANYIM PIUS ANYIM", 
    role: "FORMER SECRETARY TO THE GOVERNMENT OF THE FEDERATION", 
    image: "https://res.cloudinary.com/dzgs1uhn0/image/upload/v1781202999/H.E._Senator_Anyim_Pius_Anyim_uvmoov.jpg" 
  },
  {
    name: "PROF. DR. AHMED BIN SALAWUDEEN",
    role: "PRESIDENT, STANDARD INSURANCE CONSULTANTS LIMITED",
    image: "https://res.cloudinary.com/dzgs1uhn0/image/upload/v1782464301/copy_of_screenshot_2026-06-26_115825_xv0bni.png"
  }
]

export default function SummitPage() {
  const isScrolling = keyPeople.length > 4;

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
                <Link href="https://www.eventbrite.ca/e/investors-summit-nigeria-2026-tickets-1977017519621?aff=oddtdtcreator" target="_blank" rel="noopener noreferrer">
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
        <div className="container mx-auto px-4 md:px-24 text-center">
           <div className="mb-20 space-y-6 animate-fade-in">
             <span className="text-xs font-bold tracking-[0.5em] text-accent uppercase block">Upcoming Summit</span>
             <h2 className="text-5xl md:text-7xl lg:text-8xl font-headline font-bold uppercase leading-tight">
               Investors Summit <br /> <span className="text-accent">Nigeria</span> 2026
             </h2>
           </div>
          <div className="grid md:grid-cols-2 gap-px bg-black/5 border border-black/5 text-left">
            {events.map((event, i) => (
              <div key={i} className="bg-white p-12 space-y-8 group relative overflow-hidden">
                <div className="relative aspect-video mb-8 overflow-hidden">
                  <Image 
                    src={event.image} 
                    alt={`Summit Venue in ${event.city}`} 
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
        <div className="container mx-auto px-4 md:px-24 mb-20">
          <div className="space-y-4 text-center md:text-left">
             <span className="text-xs font-bold tracking-[0.5em] text-accent uppercase block">Dignitaries</span>
            <h2 className="text-5xl font-headline font-bold uppercase">Key People</h2>
          </div>
        </div>
        
        <div className="relative flex overflow-hidden">
          <div className={cn(
            "flex gap-12",
            isScrolling ? "animate-scroll-left whitespace-nowrap" : "container mx-auto px-4 md:px-24 justify-center flex-wrap"
          )}>
            {(isScrolling ? [...keyPeople, ...keyPeople, ...keyPeople, ...keyPeople] : keyPeople).map((person, i) => (
              <div key={i} className="space-y-6 group w-full md:w-[400px] shrink-0 inline-block whitespace-normal">
                <div className="relative aspect-[3/2] bg-white/5 overflow-hidden border border-white/10 shadow-2xl transition-all duration-700">
                  <Image 
                    src={person.image} 
                    alt={`${person.name} - ${person.role}`} 
                    fill 
                    className="object-cover transition-all duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <div className="space-y-2 px-1 text-center">
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
                Witness the culmination of global institutional intelligence. Our summit archives provide a narrative of the connections, capital procurement, and strategic alignments that define the Business Summit experience.
              </p>
              <Link href="https://www.linkedin.com/company/bsummitdotnet/posts/?feedView=all" target="_blank">
                <Button variant="outline" className="h-14 px-8 rounded-none border-black/10 text-[10px] font-bold tracking-[0.3em] uppercase">
                  View More Highlights
                </Button>
              </Link>
            </div>
            
            <div className="relative aspect-video bg-black overflow-hidden shadow-2xl group">
               <iframe
                src="https://www.youtube.com/embed/PSRqPrqL8pg?autoplay=1&mute=0&loop=1&playlist=PSRqPrqL8pg&controls=0&modestbranding=1&rel=0"
                className="absolute inset-0 w-full h-full border-0 transition-opacity"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="The Investors Summit Experience Highlight Video"
              ></iframe>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors pointer-events-none"></div>
              <div className="absolute bottom-6 left-6 text-white z-10 pointer-events-none">
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
            className="w-full"
          >
            <CarouselContent className="-ml-8">
              {eventPhotos.map((photo, i) => (
                <CarouselItem key={i} className="pl-8 md:basis-1/2 lg:basis-1/3">
                  <div className="group space-y-4">
                    <div className="relative aspect-[4/3] overflow-hidden border border-black/5 bg-muted">
                      <Image src={photo.url} alt={photo.caption} fill className="object-cover transition-all duration-700" />
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
