
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShoppingCart, BookOpen, Briefcase, UserCheck } from "lucide-react"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Card, CardContent } from "@/components/ui/card"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Executive Boutique | Presidential Counsel & Masterclasses',
  description: 'Access exclusive coaching, business blueprint architecture, and masterclasses from the core faculty of Business Summit.',
}

export default function ShopPage() {
  const masterclasses = [
    { name: "Marketing Masterclass", faculty: "Abid Haider", price: "$1,500" },
    { name: "Relationship Management", faculty: "Avishek Busviah", price: "$1,500" },
    { name: "Executive Duo Session", faculty: "Abid Haider & Avishek Busviah", price: "$2,500" },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar variant="solid" />
      
      {/* Refined Narrative Hero */}
      <section className="relative pt-32 pb-12 sm:pt-48 sm:pb-32 overflow-hidden border-b border-black/5 bg-white text-center">
        <div className="container mx-auto px-6 sm:px-12 md:px-24">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-8xl font-headline font-bold uppercase leading-[0.9] tracking-tighter">
              <span className="text-black">Executive</span> <br /> <span className="text-accent">Boutique</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="py-24 container mx-auto px-6 sm:px-12 md:px-24">
        {/* Flagship: Presidential Counsel */}
        <div className="mb-16 animate-fade-in">
          <div className="group bg-white border border-black/5 overflow-hidden shadow-2xl flex flex-col lg:flex-row max-w-6xl mx-auto h-auto lg:min-h-[600px]">
            <div className="relative lg:w-[45%] h-[350px] sm:h-[450px] lg:h-auto bg-muted overflow-hidden">
                <Image 
                  src="https://res.cloudinary.com/dzgs1uhn0/image/upload/v1781205426/b1e86619-ef1d-468a-aa65-c249c335b3fd.png" 
                  alt="Dr. M. Haider Uzzaman - Presidential Counsel" 
                  fill 
                  className="object-cover transition-all duration-1000"
                />
            </div>
            
            <div className="p-8 sm:p-12 lg:p-14 flex-1 flex flex-col bg-white">
              <div className="space-y-6 flex-1 flex flex-col pt-4 lg:pt-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-headline font-bold uppercase leading-[0.9]">
                  Presidential <br /> 
                  <span className="text-accent">Counsel</span>
                </h2>
                <p className="text-sm sm:text-base font-light text-muted-foreground leading-relaxed max-w-lg text-justify">
                  A personalized 60 minute session with the President of Business Summit, Dr M Haider Uzzaman. Receive insights into industry growth, direct contacts and connections from his portfolio and an exclusive 1-on-1 on any matter.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 pt-8 mt-8 border-t border-black/5">
                <div className="text-2xl md:text-3xl font-headline font-bold uppercase tracking-tight">
                  $5,000.00 <span className="text-[10px] text-muted-foreground font-body font-normal">/ SESSION</span>
                </div>
                <Button asChild className="h-14 px-8 rounded-none bg-black text-white hover:bg-accent transition-all duration-500 text-[10px] font-bold tracking-[0.3em] uppercase group flex items-center gap-4 w-full sm:w-auto">
                  <Link href="mailto:info@businesssummit.net">
                    BOOK NOW
                    <ShoppingCart className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Advisory & Intelligence Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          {/* Business Blueprint */}
          <Card className="rounded-none border border-black/5 shadow-xl group hover:border-accent transition-all duration-500 bg-white overflow-hidden">
            <CardContent className="p-12 space-y-8 flex flex-col items-center text-center">
              <div className="p-6 bg-accent/5 rounded-full">
                <Briefcase className="w-12 h-12 text-accent" />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-headline font-bold uppercase tracking-tight">Business <br />Blueprint</h3>
                <p className="text-sm font-light text-muted-foreground leading-relaxed text-justify">
                  Professional Business Blueprint and Business Plan crafted by Business Summit. Our plans are vetted by industry experts and our exclusive investor base. Set to meet all industry standards to ensure a successful result for your business.
                </p>
              </div>
              <div className="pt-8 border-t border-black/5 w-full">
                <p className="text-2xl font-headline font-bold uppercase mb-6">Starting at $3,500</p>
                <Button asChild variant="outline" className="w-full h-16 rounded-none border-black/10 text-[10px] font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-all">
                  <Link href="mailto:info@businesssummit.net">
                    Inquire Service
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Librairie */}
          <Card className="rounded-none border border-black/5 shadow-xl group hover:border-accent transition-all duration-500 bg-white overflow-hidden">
            <CardContent className="p-12 space-y-8 flex flex-col items-center text-center">
              <div className="p-6 bg-accent/5 rounded-full">
                <BookOpen className="w-12 h-12 text-accent" />
              </div>
              <div className="space-y-4">
                <span className="text-[9px] font-bold tracking-[0.4em] text-accent uppercase">Presidential Collection</span>
                <h3 className="text-3xl font-headline font-bold uppercase leading-tight">Librairie</h3>
                <p className="text-sm font-light text-muted-foreground leading-relaxed text-justify">
                  Access exclusive titles from our President and beyond. Distilled institutional intelligence for the modern visionary ready to architect global success.
                </p>
              </div>
              <div className="pt-8 border-t border-black/5 w-full">
                <p className="text-2xl font-headline font-bold uppercase mb-6">Presidential Archives</p>
                <Button asChild variant="outline" className="w-full h-16 rounded-none border-black/10 text-[10px] font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-all">
                  <Link href="https://www.amazon.com" target="_blank">
                    View on Amazon
                    <ArrowRight className="ml-3 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Masterclasses Section Header */}
        <div className="mb-12 bg-black text-white p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 border-l-8 border-accent animate-fade-in shadow-2xl">
          <div className="space-y-6 max-w-xl text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4">
              <UserCheck className="w-10 h-10 text-accent" />
              <span className="text-xs font-bold tracking-[0.5em] text-accent uppercase">Educational Core</span>
            </div>
            <h3 className="text-4xl md:text-6xl font-headline font-bold uppercase leading-none">Executive <br /> Masterclasses</h3>
            <p className="text-base font-light text-white/40 text-justify">
              Exclusive digital sessions from our core faculty designed for rapid institutional scaling, operational optimization, and high-stakes global growth.
            </p>
          </div>
          <div className="hidden lg:block w-[1px] h-32 bg-white/10 mx-12"></div>
          <div className="text-center md:text-right space-y-4">
            <p className="text-[10px] font-bold text-accent tracking-[0.3em] uppercase">Status: Live Access</p>
            <p className="text-2xl font-headline font-bold">{masterclasses.length} Modules Available</p>
          </div>
        </div>

        {/* Masterclasses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {masterclasses.map((mc, i) => (
            <div key={i} className="bg-white border border-black/5 p-10 space-y-8 hover:shadow-2xl transition-all duration-500 border-t-4 hover:border-t-accent group">
               <div className="space-y-3">
                 <p className="text-[9px] font-bold tracking-widest text-accent uppercase">Faculty: {mc.faculty}</p>
                 <h4 className="text-2xl font-headline font-bold uppercase leading-tight group-hover:text-accent transition-colors">{mc.name}</h4>
               </div>
               <div className="pt-6 border-t border-black/5 flex items-center justify-between">
                 <span className="text-xl font-headline font-bold">{mc.price}</span>
                 <Button asChild variant="link" className="p-0 h-auto text-[10px] font-bold tracking-widest uppercase text-black hover:text-accent group">
                   <Link href="mailto:info@businesssummit.net">
                     Details <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                   </Link>
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
