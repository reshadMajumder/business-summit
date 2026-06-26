
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Play, ArrowRight, Video } from "lucide-react"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Webinars | Institutional Intelligence Digital Masterclasses',
  description: 'Exclusive digital sessions designed for rapid institutional scaling, operational optimization, and high-stakes global growth.',
}

const upcomingWebinars = [
  {
    title: "Monthly Webinar",
    date: "TBA",
    time: "Monthly Congregation",
    description: "A monthly congregation of the Business Summit family to discuss all things business!",
    image: "https://res.cloudinary.com/dzgs1uhn0/image/upload/v1782465438/webiner-june_f2imkw.jpg",
    imageHint: "webinar banner",
    status: "Upcoming"
  },
  {
    title: "Youth Masterclass",
    date: "TBA",
    time: "Pathway Session",
    description: "A session to discuss current challenges as a young entrepreneur and craft pathways to overcome them.",
    image: "https://res.cloudinary.com/dzgs1uhn0/image/upload/v1782282849/team_nmeljm.jpg",
    imageHint: "executives in suits",
    status: "Special Session"
  }
]

const previousWebinars = [
  { id: "leKMyN2JD1A", title: "Global Strategic Engagement Session" },
  { id: "-XdKtVpsih8", title: "Institutional Capital Procurement" },
  { id: "xFj3ylnXeBM", title: "Cross-Border Business Architecture" },
  { id: "RwrV0h6G2Ag", title: "Scaling Corporate Operations" },
  { id: "UunzUZ0DYVY", title: "Strategic Expansion Dialogue" },
  { id: "eJeBPIBWV4g", title: "Executive Leadership Masterclass" }
]

export default function WebinarPage() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navbar variant="solid" />
      
      {/* Narrative Hero */}
      <section className="relative pt-48 pb-32 overflow-hidden border-b border-black/5 bg-white text-center">
        <div className="container mx-auto px-4 md:px-24">
          <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
            <div className="space-y-4">
              <span className="text-[10px] md:text-xs font-bold tracking-[0.5em] text-accent uppercase">Educational Core</span>
              <h1 className="text-6xl md:text-8xl font-headline font-bold uppercase leading-[0.9]">Webinar</h1>
            </div>
            <p className="text-xl md:text-2xl font-light leading-relaxed text-muted-foreground max-w-3xl mx-auto text-justify">
              Exclusive Digital Sessions designed to create connection and prosper collectively. Access growth opportunities from the comfort of the Internet.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-24">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 md:mb-16 gap-6 md:gap-8">
            <div className="space-y-2 md:space-y-4">
              <span className="text-xs font-bold tracking-[0.4em] text-accent uppercase">Live Sessions</span>
              <h2 className="text-3xl md:text-5xl font-headline font-bold uppercase">Upcoming <br /> <span className="text-accent">Sessions</span></h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {upcomingWebinars.map((webinar, i) => (
              <div key={i} className="group bg-white border border-black/5 p-8 md:p-12 space-y-6 md:space-y-8 hover:border-accent transition-all duration-500 shadow-sm">
                <div className="relative aspect-video overflow-hidden">
                  <Image 
                    src={webinar.image} 
                    alt={`Thumbnail for ${webinar.title}`} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                    data-ai-hint={webinar.imageHint}
                  />
                  <div className="absolute top-4 left-4 md:top-6 md:left-6">
                    <span className="px-3 py-1.5 md:px-4 md:py-2 bg-black text-white text-[8px] md:text-[9px] font-bold tracking-widest uppercase">
                      {webinar.status}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4 md:space-y-6">
                  <div className="flex flex-wrap gap-4 md:gap-6 text-[9px] md:text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 md:w-3.5 h-3 md:h-3.5 text-accent" />
                      {webinar.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 md:w-3.5 h-3 md:h-3.5 text-accent" />
                      {webinar.time}
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-headline font-bold uppercase tracking-tight leading-tight">{webinar.title}</h3>
                  <p className="text-sm font-light text-muted-foreground leading-relaxed text-justify">{webinar.description}</p>
                </div>
                
                <Button asChild className="w-full h-14 md:h-16 rounded-none bg-black text-white hover:bg-accent transition-all text-[10px] font-bold tracking-[0.3em] uppercase group">
                  <Link href="mailto:info@businesssummit.net">
                    Register For Access
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Archive Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-24">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-[0.4em] text-accent uppercase">Insights Archive</span>
              <h2 className="text-5xl font-headline font-bold uppercase">Past <br /> Webinars</h2>
            </div>
            <p className="max-w-xs text-left md:text-right text-white/40 font-light text-sm uppercase tracking-widest text-justify">
              Access the vault of institutional knowledge and strategic dialogues.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {previousWebinars.map((webinar, i) => (
              <Link key={i} href={`https://youtu.be/${webinar.id}`} target="_blank" className="group cursor-pointer space-y-6">
                <div className="relative aspect-video overflow-hidden border border-white/10">
                  <Image 
                    src={`https://img.youtube.com/vi/${webinar.id}/mqdefault.jpg`} 
                    alt={`Archive thumbnail for ${webinar.title}`} 
                    fill 
                    className="object-cover transition-all duration-1000 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-100 group-hover:bg-black/20 transition-all">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-white fill-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 text-[9px] font-bold tracking-widest uppercase bg-black/60 px-3 py-1">
                    <Video className="w-3 h-3 inline-block mr-1" />
                    REPLAY
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] font-bold text-accent tracking-widest uppercase">Archive Session</p>
                  <h4 className="text-xl font-headline font-bold uppercase tracking-tight group-hover:text-accent transition-colors">{webinar.title}</h4>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Button asChild variant="outline" className="h-16 px-12 rounded-none border-accent/30 text-accent hover:bg-accent hover:text-white transition-all text-[10px] font-bold tracking-[0.4em] uppercase">
              <Link href="https://www.youtube.com/@BSummitdotNet" target="_blank">
                Explore Full Archive
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
