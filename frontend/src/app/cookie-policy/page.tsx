
"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export default function CookiePolicyPage() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navbar variant="solid" />
      
      {/* Narrative Hero */}
      <section className="relative pt-32 pb-12 sm:pt-48 sm:pb-32 overflow-hidden border-b border-black/5 bg-white text-center">
        <div className="container mx-auto px-6 sm:px-12 md:px-24">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-[0.5em] text-accent uppercase">Digital Transparency</span>
              <h1 className="text-5xl md:text-7xl font-headline font-bold uppercase leading-[0.9]">Cookie <br /> Policy</h1>
            </div>
            <p className="text-lg md:text-xl font-light leading-relaxed text-muted-foreground max-w-2xl mx-auto">
              How we use digital identifiers to optimize your executive portal experience.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 sm:px-12 md:px-24">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-headline font-bold uppercase tracking-tight">Understanding Cookies</h2>
              <p className="text-lg font-light leading-relaxed text-muted-foreground text-justify">
                Our portal uses cookies to maintain your secure session, remember your industry preferences in the InvEX Marketplace, and analyze traffic patterns to improve our strategic service delivery.
              </p>
            </div>
            
            <div className="grid gap-8 pt-8">
              <div className="p-8 bg-white border border-black/5 space-y-4">
                <h3 className="text-xl font-headline font-bold uppercase text-accent">Essential Cookies</h3>
                <p className="text-sm font-light text-muted-foreground">Required for authentication and secure access to the Executive Dashboard.</p>
              </div>
              <div className="p-8 bg-white border border-black/5 space-y-4">
                <h3 className="text-xl font-headline font-bold uppercase text-accent">Performance Cookies</h3>
                <p className="text-sm font-light text-muted-foreground">Helps us understand how executives navigate our insights and projects.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
