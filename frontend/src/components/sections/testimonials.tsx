
"use client"

import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const testimonialData = [
  {
    quote: "I was extremely honored and delighted to meet all the participants in the Business Summit June 2021. I really appreciate Dr. Haider Uzzaman and Mr. Avishek to give us this opportunity, especially for the loud applause. I met potential investors from South America & Europe, with whom our company is drafting contracts as we speak. We look forward to participating in the upcoming Business Summit.",
    author: "Ms Nasira Hoori",
    role: "Summit Participant",
    avatar: "https://picsum.photos/seed/nasira/200/200"
  },
  {
    quote: "The level of strategic alignment facilitated at the Summit was unprecedented. We connected with institutional capital that understood our long-term vision within hours.",
    author: "Elena Rossi",
    role: "CEO, TechVentures Europe",
    avatar: "https://picsum.photos/seed/elena/200/200"
  },
  {
    quote: "InvEX has become our primary portal for vetting high-impact regional projects. The verified data and professional matchmaking ensure our capital is deployed with maximum efficiency.",
    author: "Marcus Vane",
    role: "Managing Partner, Vane Capital",
    avatar: "https://picsum.photos/seed/marcus/200/200"
  }
]

export function Testimonials() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-24">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <span className="text-xs font-bold tracking-[0.4em] text-accent uppercase">Executive Feedback</span>
            <h2 className="text-5xl md:text-7xl font-headline font-bold uppercase leading-none">Testimonials</h2>
          </div>
          <p className="max-w-md text-right text-muted-foreground font-light text-lg">
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
                    expanded !== i ? "line-clamp-2" : "line-clamp-none"
                  )}
                >
                  "{item.quote}"
                </p>
                <div className="pt-8 border-t border-black/5 flex items-center gap-4 mt-auto">
                  <Avatar className="w-12 h-12 rounded-none border border-black/5 shrink-0">
                    <AvatarImage src={item.avatar} alt={item.author} className="object-cover" />
                    <AvatarFallback className="rounded-none bg-accent/10 text-accent font-bold">
                      {item.author.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
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
