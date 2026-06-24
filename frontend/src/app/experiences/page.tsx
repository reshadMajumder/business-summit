
"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, MonitorPlay } from "lucide-react"

export default function ExperiencesPage() {
  const experiences = [
    {
      title: "Investors Summit",
      description: "The premier global convening of investors, government dignitaries, and project owners. A 4-day annual event designed for high-level cross-border collaboration.",
      image: "https://res.cloudinary.com/dzgs1uhn0/image/upload/v1781203481/152577a0-7883-42b7-9ffa-8b418ca97f53.png",
      href: "/summit",
      icon: Globe,
      tag: "Flagship Event"
    },
    {
      title: "Webinars",
      description: "Exclusive digital masterclasses providing institutional intelligence from the comfort of your headquarters. Strategic expansion and funding procurements explored.",
      image: "https://picsum.photos/seed/webhub/1200/800",
      href: "/webinar",
      icon: MonitorPlay,
      tag: "Educational Core"
    }
  ]

  return (
    <main className="relative min-h-screen bg-background">
      <Navbar variant="solid" />
      
      {/* Hub Hero */}
      <section className="relative pt-32 pb-12 sm:pt-48 sm:pb-32 overflow-hidden border-b border-black/5 bg-white text-center">
        <div className="container mx-auto px-6 sm:px-12 md:px-24">
          <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-[0.5em] text-accent uppercase">Global Engagement</span>
              <h1 className="text-6xl md:text-8xl font-headline font-bold uppercase leading-[0.9]">
                Strategic <br /> <span className="text-accent">Experiences</span>
              </h1>
            </div>
            <p className="text-lg md:text-xl font-light leading-relaxed text-muted-foreground max-w-2xl mx-auto">
              Access the architecture of international collaboration. Choose your path of institutional engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Grid Units */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 sm:px-12 md:px-24">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {experiences.map((exp, i) => (
              <div 
                key={i} 
                className="group bg-white border border-black/5 p-10 sm:p-14 flex flex-col space-y-10 hover:border-accent transition-all duration-500 shadow-sm animate-fade-in"
                style={{ animationDelay: `${i * 200}ms` }}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <Image 
                    src={exp.image} 
                    alt={exp.title} 
                    fill 
                    className="object-cover transition-all duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-black text-white text-[9px] font-bold tracking-widest uppercase">
                      {exp.tag}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-6 flex-1">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/5 flex items-center justify-center text-accent">
                      <exp.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-3xl font-headline font-bold uppercase tracking-tight">{exp.title}</h3>
                  </div>
                  <p className="text-base font-light text-muted-foreground leading-relaxed text-justify">
                    {exp.description}
                  </p>
                </div>
                
                <div className="pt-8 border-t border-black/5">
                  <Link href={exp.href}>
                    <Button className="w-full h-16 rounded-none bg-black text-white hover:bg-accent transition-all duration-500 text-[10px] font-bold tracking-[0.4em] uppercase group">
                      View
                      <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 translate-x-20"></div>
        <div className="container mx-auto px-6 sm:px-12 md:px-24 relative z-10 text-center">
          <div className="max-w-2xl mx-auto space-y-10">
            <h2 className="text-3xl sm:text-4xl font-headline font-bold uppercase">Personalized Navigation</h2>
            <p className="text-white/40 font-light leading-relaxed">
              Unsure which path aligns with your strategic goals? Use our AI Executive Matcher to architect your optimal experience.
            </p>
            <Link href="/summit#matcher">
              <Button variant="outline" className="h-16 px-12 rounded-none border-white/20 text-white hover:bg-white hover:text-black transition-all text-[10px] font-bold tracking-[0.4em] uppercase">
                Find Your Match
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
