
"use client"

import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const testimonialData = [
  {
    quote: "The level of strategic alignment facilitated at the Summit was unprecedented. We connected with institutional capital that understood our long-term vision within hours. The quality of delegates is strictly vetted, ensuring high-status networking.",
    author: "Mr. Bafi Farid",
    role: "Strategic Partner"
  },
  {
    quote: "The global footprint of the Business Summit provides unmatched access to international trade corridors. It is an indispensable ecosystem for leaders looking to scale beyond their primary markets with institutional integrity.",
    author: "Ms. Susan Gong",
    role: "Global Delegate"
  },
  {
    quote: "A definitive venue for high-level B2B and G2G engagement. The strategic insights and relationship management provided by the board are of the highest caliber, driving real economic value across borders.",
    author: "Dr. Peter Ramsaroop",
    role: "Government Liaison"
  },
  {
    quote: "I met potential investors from around the world, with whom our company is now drafting contracts. I really appreciate the opportunity to showcase our vision to such a prestigious audience of decision-makers.",
    author: "Mr. Chris Giovanni",
    role: "Enterprise Lead"
  },
  {
    quote: "The Summit acts as a powerful vehicle for connection, funding, and growth. It is built on a mission of high-level cross-border collaboration that is rare to find in today's fragmented market environment.",
    author: "Prof. Salawudden & Mr. Azeez",
    role: "Advisory Delegation"
  },
  {
    quote: "Witnessing the culmination of global institutional intelligence firsthand has been transformative for our strategic planning. The networking concierge service provided is truly world-class.",
    author: "Mr. Yofi Grant",
    role: "Strategic Attendee"
  },
  {
    quote: "The Business Summit has become our primary portal for vetting high-impact regional projects. The professional matchmaking ensures our strategic goals are met with precision and extreme professionalism.",
    author: "Ms. Kanij Fatima",
    role: "Institutional Partner"
  },
  {
    quote: "An inspiring exchange of ideas, vision, and leadership. This ecosystem provides the architectural foundations for scaling businesses across multiple continents effectively and at high speed.",
    author: "Mr. Hanif Brown",
    role: "Executive Delegate"
  }
]

export function Testimonials() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-24">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4 text-center md:text-left">
            <span className="text-xs font-bold tracking-[0.4em] text-accent uppercase block">Executive Feedback</span>
            <h2 className="text-5xl md:text-7xl font-headline font-bold uppercase leading-none">Testimonials</h2>
          </div>
          <p className="max-w-md text-center md:text-right text-muted-foreground font-light text-lg">
            Voices of global leaders who have transformed their strategic trajectories through the Summit.
          </p>
        </div>
      </div>

      <div className="relative flex overflow-hidden group">
        <div className="flex gap-8 animate-scroll-left group-hover:pause-animation whitespace-nowrap">
          {[...testimonialData, ...testimonialData].map((item, i) => (
            <Card 
              key={i} 
              className="rounded-none border-black/5 bg-background shadow-sm hover:border-accent transition-all duration-500 flex flex-col w-[90vw] md:w-[450px] shrink-0"
            >
              <CardContent className="p-10 md:p-12 space-y-8 flex-1 flex flex-col whitespace-normal">
                <Quote className="w-10 h-10 text-accent opacity-20 shrink-0" />
                <p 
                  className={cn(
                    "text-base font-light leading-relaxed italic text-foreground/80 flex-1 transition-all duration-300",
                    expanded !== i ? "line-clamp-3" : "line-clamp-none"
                  )}
                >
                  "{item.quote}"
                </p>
                <div className="pt-8 border-t border-black/5 flex items-center justify-between gap-4 mt-auto">
                  <div className="space-y-1 flex-1 min-w-0">
                    <h4 className="text-sm font-headline font-bold uppercase tracking-tight leading-none truncate">{item.author}</h4>
                    <p className="text-[9px] font-bold text-accent uppercase tracking-widest leading-none truncate">{item.role}</p>
                  </div>
                  <Button 
                    variant="link"
                    size="sm"
                    className="text-[10px] font-bold tracking-widest uppercase text-accent p-0 h-auto hover:no-underline"
                    onClick={() => setExpanded(expanded === i ? null : i)}
                  >
                    {expanded === i ? "LESS" : "MORE"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
