
"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BookOpen } from "lucide-react"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export function DigitalBooks() {
  const featuredBook = PlaceHolderImages.find(img => img.id === 'book-featured')

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <div className="space-y-8 md:space-y-12 animate-fade-in">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-[0.5em] text-accent uppercase">Institutional Library</span>
              <h2 className="text-4xl md:text-6xl font-headline font-bold uppercase leading-[0.9]">
                Digital <br /> Strategic <br /> <span className="text-accent">Publications</span>
              </h2>
            </div>
            <p className="text-lg font-light leading-relaxed text-muted-foreground max-w-md">
              Access the distilled intelligence of global business leaders. Our digital books provide the architectural blueprints for institutional scaling and international expansion.
            </p>
            <div className="pt-6">
              <Link href="/books">
                <Button className="h-16 px-12 rounded-none bg-black text-white hover:bg-accent transition-all duration-500 text-[10px] font-bold tracking-[0.4em] uppercase group">
                  View More Publications
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative group flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm aspect-[3/4] bg-muted shadow-2xl overflow-hidden border border-black/5 transform transition-transform duration-700 hover:-translate-y-4">
              {featuredBook && (
                <Image 
                  src={featuredBook.imageUrl} 
                  alt={featuredBook.description} 
                  fill 
                  className="object-contain bg-white"
                  priority
                  unoptimized
                />
              )}
              <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
              <div className="absolute top-8 left-8">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="absolute bottom-8 left-8 right-8 text-white z-10 pointer-events-none">
                <p className="text-[10px] font-bold tracking-[0.4em] uppercase opacity-60 mb-2">Featured Release</p>
                <h3 className="text-2xl font-headline font-bold uppercase leading-tight shadow-sm">Strategic Business Architecture</h3>
              </div>
            </div>
            {/* Background Decorative Element */}
            <div className="absolute -z-10 top-10 right-10 w-full h-full border border-black/5 -translate-x-4 translate-y-4 hidden md:block"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
