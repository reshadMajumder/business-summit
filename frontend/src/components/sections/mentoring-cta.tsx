
"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export function MentoringCTA() {
  const promoImage = PlaceHolderImages.find(img => img.id === 'mentoring-promo')

  return (
    <section className="py-32 bg-[#0A0A0A] text-white border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 md:px-24 relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-[0.5em] text-accent uppercase">Executive Access</span>
              <h2 className="text-5xl md:text-7xl font-headline font-bold uppercase leading-[0.9]">
                Direct <br /> Counsel <br /> with the <br /> <span className="text-accent">Chairman</span>
              </h2>
            </div>
            <p className="text-lg font-light leading-relaxed text-white/40 max-w-md">
              Reserved for high-impact entrepreneurs ready for the next level of global leadership. Private 1-on-1 strategy calls now open for booking.
            </p>
            <div className="pt-6">
              <Link href="/mentoring">
                <Button className="h-16 px-12 rounded-none bg-white text-black hover:bg-accent hover:text-white transition-all duration-500 text-[10px] font-bold tracking-[0.4em] uppercase group">
                  Book 1-on-1 Session
                  <ArrowUpRight className="ml-2 w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative group cursor-pointer hidden lg:block">
            {/* Promotional Image Container */}
            <div className="relative aspect-square border border-white/10 overflow-hidden">
              {promoImage && (
                <Image 
                  src={promoImage.imageUrl}
                  alt={promoImage.description}
                  fill
                  className="object-cover transition-all duration-1000 group-hover:scale-105"
                  data-ai-hint={promoImage.imageHint}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
              
              <div className="absolute bottom-12 left-12 right-12 space-y-4 z-10">
                <div className="w-12 h-1 bg-accent"></div>
                <div className="space-y-2">
                  <h4 className="text-3xl font-headline font-bold uppercase leading-tight">Strategic Mastery</h4>
                  <p className="text-xs font-bold text-white/60 uppercase tracking-[0.3em]">Personalized Coaching Architecture</p>
                </div>
              </div>
              
              {/* Decorative Corner Accents */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
