
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"
import { Shield, Globe, Users, Landmark, UserCircle, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Story | The Genesis of Business Summit',
  description: 'The journey of Dr. M. Haider Uzzaman and the evolution of Business Summit Limited into a global engine of economic opportunity across 150+ countries.',
}

const countryDirectors = [
  { 
    name: "Mr. Gonçalo Terenas", 
    role: "Head of Corporate & International Business",
    image: "https://res.cloudinary.com/dzgs1uhn0/image/upload/v1781250976/Mr.-Gon%C3%A7alo-Terenas_--Head-of-Corporate-_-International-Business-at-Tuga-Innovations-Inc.-Head-of-Committee-at-Diaspora-Prime-Portugal-_-Executive-Board-Member-at-RCCPM-_CDO-at-HHERF-Foundation_w6tkvc.jpg"
  },
  { 
    name: "Prof. Ahmed Bin Salawudeen", 
    role: "Regional Director",
    image: "https://res.cloudinary.com/dzgs1uhn0/image/upload/v1781250974/Prof.-Ahmed-Bin-Salawudeen_rtyc71.jpg"
  },
  { 
    name: "Ms. Teresa do Brito Apolónia", 
    role: "Founder Partner, ASA Lawyers",
    image: "https://res.cloudinary.com/dzgs1uhn0/image/upload/v1781250974/Ms.-Teresa-do-Brito-Apol%C3%B3ni_--Founder-Partner-ASA-Lawyers_bcuzpr.jpg"
  },
  { 
    name: "Susan Gong", 
    role: "President and CEO, Altec Global Inc.",
    image: "https://res.cloudinary.com/dzgs1uhn0/image/upload/v1781250973/Susan_Gong_President_and_CEO_Altec_Global_Inc._vezmpy.jpg"
  },
]

export default function OurStory() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navbar variant="solid" />
      
      {/* Narrative Hero */}
      <section className="relative pt-32 pb-12 sm:pt-48 sm:pb-32 overflow-hidden border-b border-black/5 bg-white text-center">
        <div className="container mx-auto px-6 sm:px-12 md:px-24">
          <div className="max-w-4xl mx-auto space-y-12 animate-fade-in mb-20">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-[0.5em] text-accent uppercase">The Genesis</span>
              <h1 className="text-6xl md:text-8xl font-headline font-bold uppercase leading-[0.9]">Our <br /> <span className="text-accent">Story</span></h1>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 1: The Visionary */}
      <section className="py-24 bg-white overflow-hidden border-b border-black/5">
        <div className="container mx-auto px-6 sm:px-12 md:px-24">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-2">
                <span className="text-[10px] font-bold tracking-[0.4em] text-accent uppercase">Origin</span>
                <h2 className="text-4xl md:text-5xl font-headline font-bold uppercase leading-tight">The <br /> Visionary</h2>
              </div>
              <div className="space-y-6 text-lg font-light leading-relaxed text-muted-foreground text-justify">
                <p>
                  Business Summit is the brainchild of renowned entrepreneur and global business leader, <span className="text-primary font-medium">Dr. M. Haider Uzzaman</span>.
                </p>
                <p>
                  Starting with just 35 cents, Dr. Haider built a global portfolio of traditional businesses across industries including aviation, hospitality, and international franchising, helping bring major brands such as Hertz and G4S into new markets.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] bg-muted overflow-hidden shadow-2xl animate-fade-in delay-200 border border-black/5 group">
              <Image 
                src="https://res.cloudinary.com/dzgs1uhn0/image/upload/v1781202851/14_Best-Air-Experience1_ifyoaq.jpg" 
                alt="BEST AIR EXPERIENCE - Historical Milestone" 
                fill 
                className="object-cover transition-all duration-1000 group-hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 2: Institutional Scale */}
      <section className="py-24 bg-background border-b border-black/5">
        <div className="container mx-auto px-6 sm:px-12 md:px-24">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative aspect-[4/3] bg-muted overflow-hidden shadow-2xl order-2 lg:order-1 animate-fade-in border border-black/5 group">
              <Image 
                src="https://res.cloudinary.com/dzgs1uhn0/image/upload/v1781202800/12_best-air-launching-flight-to-Srilanka-and-Maldives_z0xdif.jpg" 
                alt="Regional Expansion - Best Air Launch" 
                fill 
                className="object-cover transition-all duration-1000 group-hover:scale-105"
              />
            </div>
            <div className="space-y-8 order-1 lg:order-2 animate-fade-in delay-200">
              <div className="space-y-2">
                <span className="text-[10px] font-bold tracking-[0.4em] text-accent uppercase">Institutional Legacy</span>
                <h2 className="text-4xl md:text-5xl font-headline font-bold uppercase leading-tight">An Ecosystem <br /> of <span className="text-accent">100,000</span></h2>
              </div>
              <p className="text-lg font-light leading-relaxed text-muted-foreground text-justify">
                At its peak, his business network employed over 100,000 people. This was not just a collection of companies, but a continental engine of economic opportunity. Dr. Haider's journey through traditional business sectors established a foundation of credibility that defines the Business Summit today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 3: The Global Network */}
      <section className="py-24 bg-white border-b border-black/5">
        <div className="container mx-auto px-6 sm:px-12 md:px-24">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-2">
                <span className="text-[10px] font-bold tracking-[0.4em] text-accent uppercase">Reach</span>
                <h2 className="text-4xl md:text-5xl font-headline font-bold uppercase leading-tight">150+ <br /> Countries</h2>
              </div>
              <div className="space-y-6 text-lg font-light leading-relaxed text-muted-foreground text-justify">
                <p>
                  Having travelled to more than 150 countries, including 42 across Africa, Dr. Haider built an extensive network of business leaders, investors, and entrepreneurs.
                </p>
                <p>
                  He noticed a common challenge: some were seeking investment while others were looking for opportunities. To solve this, he invited a group of trusted friends and business associates to meet in a ballroom. Deals were closed, partnerships were formed, and Business Summit was born.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] bg-muted overflow-hidden shadow-2xl animate-fade-in delay-200 border border-black/5 group">
              <Image 
                src="https://res.cloudinary.com/dzgs1uhn0/image/upload/v1781432990/21_During-the-inaugural-phuket-Air-flight-Bangkok-To-Chittagong_aj9ix2.jpg" 
                alt="Global Reach - International Collaboration" 
                fill 
                className="object-cover transition-all duration-1000 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values & Mission Section - Triangular Layout */}
      <section className="py-32 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 translate-x-20"></div>
        <div className="container mx-auto px-6 sm:px-12 md:px-24 relative z-10">
          <div className="max-w-6xl mx-auto space-y-24">
            
            {/* Foundation: Core Values */}
            <div className="text-center space-y-16">
              <span className="text-xs font-bold tracking-[0.5em] text-accent uppercase">Our Foundation</span>
              
              <div className="flex flex-col items-center gap-12 md:gap-16">
                {/* Top of Triangle: Credibility */}
                <div className="group space-y-6">
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-bold uppercase tracking-tighter group-hover:text-accent transition-colors leading-none">
                    Credibility
                  </h2>
                  <div className="w-12 h-1 bg-accent mx-auto"></div>
                </div>

                {/* Base of Triangle: Trust & Professionalism */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-32 lg:gap-64">
                  {["Trust", "Professionalism"].map((val) => (
                    <div key={val} className="space-y-6 group">
                      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-bold uppercase tracking-tighter group-hover:text-accent transition-colors leading-none">
                        {val}
                      </h2>
                      <div className="w-12 h-1 bg-accent mx-auto"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* What We Do Cards */}
            <div className="space-y-12 pt-16 border-t border-white/10 text-center">
              <span className="text-xs font-bold tracking-[0.5em] text-accent uppercase">What We Do</span>
              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {/* Card 1 */}
                <div className="bg-white/5 border border-white/10 p-10 space-y-6 hover:border-accent transition-all duration-500 text-left group">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                    <Users className="w-6 h-6" />
                  </div>
                  <p className="text-xl md:text-2xl font-headline font-light leading-snug text-white/90">
                    We connect investors with investees while facilitating strategic partnerships across <span className="text-accent italic font-bold">B2B, G2B, and G2G networks.</span>
                  </p>
                </div>

                {/* Card 2 */}
                <div className="bg-white/5 border border-white/10 p-10 space-y-6 hover:border-accent transition-all duration-500 text-left group">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                    <Globe className="w-6 h-6" />
                  </div>
                  <p className="text-xl md:text-2xl font-headline font-light leading-snug text-white/90">
                    We help businesses expand into new markets by leveraging our global ecosystem in over <span className="text-accent italic font-bold">150+ countries.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Team Section */}
      <section className="py-32 bg-white border-b border-black/5">
        <div className="container mx-auto px-6 sm:px-12 md:px-24">
          <div className="text-center mb-24 space-y-4">
            <span className="text-xs font-bold tracking-[0.4em] text-accent uppercase">Leadership</span>
            <h2 className="text-5xl md:text-7xl font-headline font-bold uppercase leading-none text-center">
              Core <br /> <span className="text-accent">Team</span>
            </h2>
          </div>

          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <Image 
              src="https://res.cloudinary.com/dzgs1uhn0/image/upload/v1782282849/team_nmeljm.jpg" 
              alt="Business Summit Core Team Leadership Architecture" 
              fill 
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Country Directors Section */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4 md:px-24">
          <div className="mb-20">
             <span className="text-xs font-bold tracking-[0.4em] text-accent uppercase block mb-4">Global Network</span>
             <h2 className="text-5xl font-headline font-bold uppercase">
               Country <span className="text-accent">Directors</span>
             </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {countryDirectors.map((director, i) => (
              <div key={i} className="group space-y-6">
                <div className="relative aspect-[4/5] overflow-hidden bg-white border border-black/5 transition-all duration-700 hover:shadow-2xl">
                  {director.image ? (
                    <Image 
                      src={director.image} 
                      alt={`${director.name} - ${director.role}`} 
                      fill 
                      className="object-cover transition-all duration-1000 group-hover:scale-110"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-muted/30 flex items-center justify-center">
                      <UserCircle className="w-16 h-16 text-muted-foreground/20" />
                    </div>
                  )}
                </div>
                <div className="space-y-1 text-center md:text-left">
                  <h4 className="text-xl font-headline font-bold uppercase tracking-tight leading-tight">{director.name}</h4>
                  <p className="text-[10px] font-bold text-accent tracking-[0.2em] uppercase">{director.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
