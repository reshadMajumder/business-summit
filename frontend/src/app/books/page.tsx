
"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { BookOpen, Download, ArrowUpRight } from "lucide-react"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export default function BooksPage() {
  const featuredBook = PlaceHolderImages.find(img => img.id === 'book-featured')

  const books = [
    {
      title: "Strategic Business Architecture",
      description: "The definitive guide to building institutional structures that last.",
      image: featuredBook?.imageUrl || "https://picsum.photos/seed/book1/800/1200",
      author: "Dr. M. Haider Uzzaman"
    },
    {
      title: "Global Expansion Playbook",
      description: "Navigating the complexities of international trade and G2G relations.",
      image: "https://picsum.photos/seed/book2/800/1200",
      author: "Strategic Board"
    },
    {
      title: "The Funding Matrix",
      description: "Securing institutional capital for high-impact growth projects.",
      image: "https://picsum.photos/seed/book3/800/1200",
      author: "Finance Expert"
    }
  ]

  return (
    <main className="relative min-h-screen bg-background">
      <Navbar variant="solid" />
      
      {/* Narrative Hero */}
      <section className="relative pt-48 pb-24 overflow-hidden border-b border-black/5 bg-white">
        <div className="container mx-auto px-4 md:px-24">
          <div className="max-w-4xl space-y-12 animate-fade-in">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-[0.5em] text-accent uppercase">Strategic Knowledge</span>
              <h1 className="text-6xl md:text-8xl font-headline font-bold uppercase leading-[0.9]">Digital <br />Library</h1>
            </div>
            <p className="text-xl md:text-2xl font-light leading-relaxed text-muted-foreground">
              A curated collection of institutional intelligence and architectural leadership guidelines. Explore the vault of global strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {books.map((book, i) => (
              <div 
                key={i} 
                className="group bg-white border border-black/5 p-10 space-y-8 hover:border-accent transition-all duration-500 shadow-sm animate-fade-in"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-muted shadow-lg">
                  <Image src={book.image} alt={book.title} fill className="object-contain bg-white transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-[10px] font-bold text-accent tracking-widest uppercase">{book.author}</p>
                  <h3 className="text-2xl font-headline font-bold uppercase tracking-tight leading-tight">{book.title}</h3>
                  <p className="text-sm font-light text-muted-foreground leading-relaxed">{book.description}</p>
                </div>
                
                <div className="pt-6 border-t border-black/5 flex gap-4">
                  <Button className="flex-1 h-14 rounded-none bg-black text-white hover:bg-accent transition-all text-[10px] font-bold tracking-[0.3em] uppercase group">
                    Get Access
                    <ArrowUpRight className="ml-2 w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline" size="icon" className="w-14 h-14 rounded-none border-black/10">
                    <Download className="w-4 h-4" />
                  </Button>
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
