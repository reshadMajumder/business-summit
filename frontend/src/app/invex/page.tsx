
"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Offers } from "@/components/sections/offers"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"
import { Search, TrendingUp, ShieldCheck, ArrowUpRight } from "lucide-react"
import { invexProjects } from "@/lib/invex-data"
import { cn } from "@/lib/utils"

const industries = ["All", "Logistics", "Energy", "Aviation", "Real Estate", "Tech", "Manufacturing"]

export default function InvexPage() {
  const [activeIndustry, setActiveIndustry] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const filteredPosts = invexProjects.filter(project => {
    const matchesIndustry = activeIndustry === "All" || project.industry === activeIndustry
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesIndustry && matchesSearch
  })

  return (
    <main className="relative min-h-screen bg-background">
      <Navbar variant="solid" />
      
      {/* Marketplace Hero */}
      <section className="relative pt-32 pb-12 sm:pt-48 sm:pb-32 overflow-hidden bg-white border-b border-black/5 text-center">
        <div className="container mx-auto px-6 sm:px-12 md:px-24">
          <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12 animate-fade-in">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-[0.5em] text-accent uppercase">Investment Exchange</span>
              <h1 className="text-6xl md:text-8xl font-headline font-bold leading-[0.9]">
                <span className="text-black">Inv</span><span className="text-accent">EX</span>
              </h1>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl font-light leading-relaxed text-muted-foreground mx-auto text-justify">
              A state of the art and brand new manner to streamline investment connections, Investment Exchange is the proprietary and dedicated platform of Business Summit to display your project, get valuable and unmatched connections and secure your next financing, all in a one-stop-shop.
            </p>
          </div>
        </div>
      </section>

      {/* Control Bar - Optimized for opposite alignment on all devices */}
      <section className="sticky top-[64px] sm:top-[72px] z-30 bg-white/80 backdrop-blur-md border-b border-black/5">
        <div className="container mx-auto px-4 sm:px-12 md:px-24 py-4 sm:py-6 flex flex-row justify-between items-center gap-3">
          <div className="w-1/2 lg:w-72 shrink-0">
            {mounted && (
              <Select value={activeIndustry} onValueChange={setActiveIndustry}>
                <SelectTrigger className="h-12 rounded-none border-black/10 text-[9px] sm:text-[10px] font-bold tracking-widest uppercase focus:ring-accent bg-white px-3" suppressHydrationWarning>
                  <SelectValue placeholder="FILTER" />
                </SelectTrigger>
                <SelectContent className="rounded-none border-black/10">
                  {industries.map((ind) => (
                    <SelectItem 
                      key={ind} 
                      value={ind}
                      className="text-[10px] font-bold tracking-widest uppercase focus:bg-accent focus:text-white"
                    >
                      {ind}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          </div>
          <div className="relative w-1/2 lg:w-72">
            <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground" />
            <Input 
              placeholder="SEARCH..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 sm:pl-12 h-12 rounded-none border-black/10 text-[9px] sm:text-[10px] font-bold tracking-widest uppercase focus-visible:ring-accent bg-white"
            />
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-6 sm:px-12 md:px-24">
          <div className="mb-12">
            <h2 className="text-3xl font-headline font-bold uppercase tracking-tight">Current Projects</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mounted && filteredPosts.map((project, i) => (
              <div 
                key={project.id} 
                className="group bg-white border border-black/5 rounded-none overflow-hidden hover:border-accent transition-all duration-500 shadow-sm animate-fade-in"
                style={{ animationDelay: `${(i % 6) * 100}ms` }}
              >
                <div className="relative aspect-video bg-muted overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <span className="px-3 py-1 bg-black text-white text-[8px] font-bold tracking-widest uppercase">
                      {project.industry}
                    </span>
                    {project.status === 'Vetted' && (
                      <span className="px-3 py-1 bg-accent text-white text-[8px] font-bold tracking-widest uppercase flex items-center gap-1">
                        <ShieldCheck className="w-2.5 h-2.5" />
                        Vetted
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="p-6 sm:p-10 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-headline font-bold uppercase tracking-tight">{project.title}</h3>
                    <p className="text-[10px] font-bold text-accent tracking-[0.2em] uppercase">Status: {project.status}</p>
                  </div>
                  
                  <p className="text-sm font-light text-muted-foreground leading-relaxed line-clamp-2 text-justify">
                    {project.description}
                  </p>
                  
                  <div className="pt-6 border-t border-black/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <p className="text-[9px] font-bold text-muted-foreground tracking-widest uppercase mb-1">Target Capital</p>
                      <p className="text-xl font-headline font-bold">{project.investmentGoal}</p>
                    </div>
                    <Button asChild className="w-full sm:w-auto h-12 px-6 rounded-none bg-black text-white hover:bg-accent transition-all text-[9px] font-bold tracking-[0.2em] uppercase group">
                      <Link href="mailto:info@businesssummit.net">
                        Purchase Data
                        <ArrowUpRight className="ml-2 w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {mounted && filteredPosts.length === 0 && (
            <div className="text-center py-24 sm:py-32 space-y-6 animate-fade-in">
              <TrendingUp className="w-12 h-12 text-accent mx-auto opacity-20" />
              <div className="space-y-2">
                <p className="text-muted-foreground text-sm uppercase tracking-widest">No strategic opportunities match your criteria.</p>
                <button 
                  onClick={() => { setActiveIndustry("All"); setSearchQuery(""); }}
                  className="text-[10px] font-bold text-accent tracking-[0.3em] uppercase hover:underline"
                >
                  Reset Marketplace
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      <Offers />

      {/* Market Stats */}
      <section className="py-24 sm:py-32 bg-primary text-white overflow-hidden">
        <div className="container mx-auto px-6 sm:px-12 md:px-24">
          <div className="grid md:grid-cols-3 gap-12 sm:gap-20 items-center">
            <div className="space-y-6 text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl font-headline font-bold uppercase">Market <br className="hidden sm:block" /> Liquidity</h2>
              <p className="text-white/40 font-light leading-relaxed max-w-sm mx-auto md:mx-0 text-justify">
                InvEX processes over $100M in strategic capital commitments annually across 4 continents.
              </p>
            </div>
            <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-12">
              {[
                { label: "Active Deals", val: "142" },
                { label: "Vetted Funds", val: "$1.2B" },
                { label: "Closed M&A", val: "28" },
                { label: "Growth Rate", val: "34%" }
              ].map((stat, i) => (
                <div key={i} className="space-y-2 border-l border-white/10 pl-4 sm:pl-6">
                  <p className="text-2xl sm:text-3xl font-headline font-bold text-accent">{stat.val}</p>
                  <p className="text-[8px] sm:text-[9px] font-bold tracking-widest text-white/40 uppercase leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
