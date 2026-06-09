
"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Zap, Target, ArrowRight, ShieldCheck, ShoppingCart } from "lucide-react"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export default function ShopPage() {
  const drHaiderImg = PlaceHolderImages.find(img => img.id === 'speaker-1')

  return (
    <main className="min-h-screen bg-background">
      <Navbar variant="solid" />
      
      <section className="pt-48 pb-24 container mx-auto px-4 md:px-24">
        <div className="max-w-4xl space-y-6 mb-20 animate-fade-in">
          <span className="text-xs font-bold tracking-[0.5em] text-accent uppercase">Executive Boutique</span>
          <h1 className="text-6xl md:text-8xl font-headline font-bold uppercase leading-[0.9]">Strategic <br /> Shop</h1>
          <p className="text-xl md:text-2xl font-light leading-relaxed text-muted-foreground max-w-2xl">
            Reserved for high-impact leaders. Access exclusive 1-on-1 strategy calls and institutional advisory packages.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-20">
          {/* Main Product: Mentoring */}
          <div className="group bg-white border border-black/5 overflow-hidden shadow-2xl flex flex-col md:flex-row">
            <div className="relative aspect-[4/5] md:w-1/3 bg-muted overflow-hidden">
               {drHaiderImg && (
                <Image 
                  src={drHaiderImg.imageUrl} 
                  alt="Dr. M. Haider Uzzaman" 
                  fill 
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            
            <div className="p-12 md:p-20 flex-1 flex flex-col justify-center space-y-10">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-[0.4em] text-accent uppercase">Institutional Advisory</span>
                  <div className="p-3 bg-accent/10 rounded-full">
                    <Target className="w-5 h-5 text-accent" />
                  </div>
                </div>
                <h2 className="text-4xl md:text-5xl font-headline font-bold uppercase leading-none">
                  Direct Counsel <br /> with the <span className="text-accent">Chairman</span>
                </h2>
                <p className="text-lg font-light text-muted-foreground leading-relaxed max-w-md">
                  A personalized 60-minute coaching architecture designed to audit your business model and map a global expansion path.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 py-8 border-y border-black/5">
                <div className="flex gap-4">
                   <Zap className="w-5 h-5 text-accent shrink-0" />
                   <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground leading-relaxed">Laser-focused personalized advice</p>
                </div>
                <div className="flex gap-4">
                   <ShieldCheck className="w-5 h-5 text-accent shrink-0" />
                   <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground leading-relaxed">Exclusive 1-on-1 private time</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-8 pt-6">
                <div className="text-3xl font-headline font-bold uppercase">$5,000.00 <span className="text-[10px] text-muted-foreground font-body">/ SESSION</span></div>
                <Button size="lg" className="h-16 px-12 rounded-none bg-black text-white hover:bg-accent transition-all duration-500 text-[10px] font-bold tracking-[0.4em] uppercase group">
                  Book 1-on-1 Call
                  <ShoppingCart className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
