
"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"

const tiers = [
  {
    name: "BASIC",
    posts: "1 Post",
    database: "Specific Client Database",
    frequency: "Yearly",
    price: "USD3000.00",
  },
  {
    name: "PREMIUM",
    posts: "3 Posts",
    database: "Access To All Client Database",
    frequency: "Yearly",
    price: "USD10000.00",
  },
  {
    name: "EXECUTIVE",
    posts: "Unlimited Post",
    database: "Access To All Client Database",
    frequency: "Yearly",
    price: "USD25000.00",
  },
]

export function Offers() {
  return (
    <section className="py-32 bg-[#0A0A0A] text-white border-b border-white/5">
      <div className="container mx-auto px-4 md:px-24">
        {/* Architectural Header Pattern */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="space-y-4 text-left">
            <span className="text-xs font-bold tracking-[0.4em] text-accent uppercase">Investment</span>
            <h2 className="text-5xl md:text-7xl font-headline font-bold uppercase leading-none">Our <br />Offers</h2>
          </div>
          <p className="max-w-md text-left md:text-right text-white/40 font-light text-lg">
            Select the tier that aligns with your strategic influence and operational requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <Card 
              key={i} 
              className="bg-white/5 border border-white/10 rounded-none overflow-hidden shadow-2xl transition-all duration-500 hover:border-accent group backdrop-blur-sm"
            >
              <CardContent className="p-12 flex flex-col items-center text-center space-y-10">
                <div className="space-y-2">
                  <h3 className="text-sm font-bold tracking-[0.3em] text-accent uppercase">
                    {tier.name}
                  </h3>
                  <div className="text-3xl font-headline font-bold uppercase tracking-tight text-white">
                    {tier.price}
                  </div>
                </div>
                
                <div className="space-y-6 w-full text-sm font-light text-white/60 border-y border-white/10 py-10">
                  <div className="flex items-center justify-center gap-3">
                    <Check className="w-4 h-4 text-accent" />
                    <span>{tier.posts}</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <Check className="w-4 h-4 text-accent" />
                    <span className="max-w-[180px]">{tier.database}</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <Check className="w-4 h-4 text-accent" />
                    <span>{tier.frequency} billing</span>
                  </div>
                </div>

                <Button 
                  className="w-full h-14 bg-white text-black hover:bg-accent hover:text-white transition-all duration-300 rounded-none text-[10px] font-bold tracking-[0.3em] uppercase"
                >
                  REGISTER TIER
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
