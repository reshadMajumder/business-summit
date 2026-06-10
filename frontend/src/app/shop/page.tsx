
"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Zap, Target, ArrowRight, ShieldCheck, ShoppingCart, BookOpen, Briefcase, UserCheck } from "lucide-react"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Card, CardContent } from "@/components/ui/card"

export default function ShopPage() {
  const drHaiderImg = PlaceHolderImages.find(img => img.id === 'speaker-1')
  const bookImg = PlaceHolderImages.find(img => img.id === 'book-featured')

  const masterclasses = [
    { name: "Strategic Architecture", faculty: "Dr. M. Haider Uzzaman", price: "$2,500" },
    { name: "Global Operations", faculty: "Abid Haider", price: "$1,500" },
    { name: "Institutional Sales", faculty: "Avishek Busviah", price: "$1,500" },
    { name: "Executive Duo Session", faculty: "Abid Haider & Avishek Busviah", price: "$2,500" },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar variant="solid" />
      
      <section className="pt-48 pb-24 container mx-auto px-4 md:px-24">
        <div className="max-w-4xl space-y-6 mb-20 animate-fade-in">
          <span className="text-xs font-bold tracking-[0.5em] text-accent uppercase">Curated Excellence</span>
          <h1 className="text-5xl md:text-7xl font-headline font-bold uppercase leading-[0.9] text-accent">Executive <br /> Boutique</h1>
          <p className="text-lg md:text-xl font-light leading-relaxed text-muted-foreground max-w-2xl">
            Reserved for high-impact leaders. Access exclusive 1-on-1 strategy calls, institutional advisory packages, and strategic intelligence.
          </p>
        </div>

        {/* Featured: Direct Counsel */}
        <div className="mb-24 animate-fade-in">
          <div className="group bg-white border border-black/5 overflow-hidden shadow-xl flex flex-col md:flex-row max-w-6xl mx-auto h-auto md:h-[400px]">
            <div className="relative md:w-2/5 h-[300px] md:h-full bg-muted overflow-hidden">
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
            
            <div className="p-8 md:p-12 flex-1 flex flex-col justify-center space-y-6">
              <div className="space-y-2">
                <span className="text-[9px] font-bold tracking-[0.4em] text-accent uppercase">Institutional Advisory</span>
                <h2 className="text-3xl md:text-4xl font-headline font-bold uppercase leading-none">
                  Direct Counsel <br /> with the <span className="text-accent">Chairman</span>
                </h2>
                <p className="text-sm font-light text-muted-foreground leading-relaxed max-w-md">
                  A personalized 60-minute coaching architecture designed to audit your business model and map a global expansion path.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                <div className="text-2xl font-headline font-bold uppercase">$5,000.00 <span className="text-[9px] text-muted-foreground font-body">/ SESSION</span></div>
                <Button size="sm" className="h-12 px-8 rounded-none bg-black text-white hover:bg-accent transition-all duration-500 text-[9px] font-bold tracking-[0.4em] uppercase group">
                  Book Now
                  <ShoppingCart className="ml-2 w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {/* Business Plan Development */}
          <Card className="rounded-none border-black/5 shadow-md group hover:border-accent transition-all duration-500 bg-white">
            <CardContent className="p-10 space-y-6 text-center flex flex-col items-center">
              <div className="p-4 bg-accent/5 rounded-full mb-2">
                <Briefcase className="w-8 h-8 text-accent" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-headline font-bold uppercase tracking-tight">Business Plan <br />Development</h3>
                <p className="text-xs font-light text-muted-foreground leading-relaxed">Professional institutional blueprints architected for global funding rounds and G2G expansion.</p>
              </div>
              <div className="pt-4 border-t border-black/5 w-full">
                <p className="text-xl font-headline font-bold uppercase mb-4">Starting at $3,500</p>
                <Button variant="outline" className="w-full h-12 rounded-none border-black/10 text-[9px] font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-all">
                  Inquire Service
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Published Books */}
          <Card className="rounded-none border-black/5 shadow-md group hover:border-accent transition-all duration-500 bg-white overflow-hidden">
            <div className="relative aspect-video bg-muted border-b border-black/5 overflow-hidden">
              {bookImg && (
                <Image src={bookImg.imageUrl} alt="Strategic Publications" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
              )}
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute top-4 left-4">
                 <BookOpen className="w-5 h-5 text-white" />
              </div>
            </div>
            <CardContent className="p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-[8px] font-bold tracking-[0.3em] text-accent uppercase">Strategic Publications</span>
                <h3 className="text-xl font-headline font-bold uppercase leading-tight">Digital Library <br />by Dr. Haider</h3>
                <p className="text-xs font-light text-muted-foreground leading-relaxed">Distilled institutional intelligence for the modern visionary.</p>
              </div>
              <Button variant="outline" className="w-full h-12 rounded-none border-black/10 text-[9px] font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-all">
                View on Amazon
                <ArrowRight className="ml-2 w-3 h-3" />
              </Button>
            </CardContent>
          </Card>

          {/* Masterclass Category Header */}
          <div className="bg-black text-white p-10 flex flex-col justify-center space-y-6 text-center border-l-4 border-accent">
            <div className="space-y-4">
              <UserCheck className="w-10 h-10 text-accent mx-auto" />
              <h3 className="text-3xl font-headline font-bold uppercase leading-none">Executive <br /> Masterclasses</h3>
              <p className="text-sm font-light text-white/40">Exclusive digital sessions from our core faculty designed for rapid institutional scaling.</p>
            </div>
          </div>
        </div>

        {/* Masterclasses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
          {masterclasses.map((mc, i) => (
            <div key={i} className="bg-white border border-black/5 p-8 space-y-6 hover:shadow-lg transition-all duration-500 border-t-2 hover:border-t-accent">
               <div className="space-y-2">
                 <p className="text-[8px] font-bold tracking-widest text-accent uppercase">Faculty: {mc.faculty}</p>
                 <h4 className="text-lg font-headline font-bold uppercase leading-tight">{mc.name}</h4>
               </div>
               <div className="pt-4 border-t border-black/5 flex items-center justify-between">
                 <span className="text-lg font-headline font-bold">{mc.price}</span>
                 <Button variant="link" className="p-0 h-auto text-[9px] font-bold tracking-widest uppercase text-black hover:text-accent">
                   Details <ArrowRight className="ml-1 w-2.5 h-2.5" />
                 </Button>
               </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
