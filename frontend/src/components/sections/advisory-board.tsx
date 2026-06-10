
"use client"

import Image from "next/image"

const boardMembers = [
  {
    name: "Dr. Jonathan Vane",
    role: "Global Strategy Advisor",
    image: "https://picsum.photos/seed/board1/800/1000",
  },
  {
    name: "Elena Rossi",
    role: "Financial Architecture",
    image: "https://picsum.photos/seed/board2/800/1000",
  },
  {
    name: "Marcus Thorne",
    role: "Institutional Relations",
    image: "https://picsum.photos/seed/board3/800/1000",
  },
  {
    name: "Sarah Jenkins",
    role: "Innovation Consultant",
    image: "https://picsum.photos/seed/board4/800/1000",
  },
]

export function AdvisoryBoard() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4 md:px-24">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <span className="text-xs font-bold tracking-[0.4em] text-accent uppercase">The Council</span>
            <h2 className="text-5xl md:text-7xl font-headline font-bold uppercase leading-none">Advisory <br /> Board</h2>
          </div>
          <p className="max-w-md text-right text-muted-foreground font-light text-lg">
            Institutional intelligence guided by a collective of global industry veterans and strategic visionaries.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {boardMembers.map((member, i) => (
            <div key={i} className="group space-y-6">
              <div className="relative aspect-[4/5] overflow-hidden bg-muted border border-black/5 shadow-sm transition-all duration-700 hover:shadow-xl">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill 
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                  data-ai-hint="executive portrait"
                />
              </div>
              <div className="space-y-1">
                <h4 className="text-xl font-headline font-bold uppercase tracking-tight">{member.name}</h4>
                <p className="text-[10px] font-bold text-accent tracking-[0.2em] uppercase">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
