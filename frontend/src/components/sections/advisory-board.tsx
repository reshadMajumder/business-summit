
"use client"

import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"

const boardMembers = [
  {
    name: "Tun Dr. Mahathir Mohamad",
    role: "Former Prime Minister of Malaysia & Founding Father of Modern Malaysia",
    image: PlaceHolderImages.find(img => img.id === 'advisor-mahathir')?.imageUrl || "https://picsum.photos/seed/board1/800/1000",
    imageHint: "statesman portrait"
  },
  {
    name: "Dr. Goodluck Ebele Jonathan",
    role: "Former President of the Federal Republic of Nigeria",
    image: PlaceHolderImages.find(img => img.id === 'advisor-goodluck')?.imageUrl || "https://picsum.photos/seed/board2/800/1000",
    imageHint: "official portrait"
  },
  {
    name: "Dr. Jonathan Vane",
    role: "Global Strategy Advisor",
    image: "https://picsum.photos/seed/board3/800/1000",
    imageHint: "executive portrait"
  },
  {
    name: "Elena Rossi",
    role: "Financial Architecture Consultant",
    image: "https://picsum.photos/seed/board4/800/1000",
    imageHint: "professional portrait"
  },
]

export function AdvisoryBoard() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4 md:px-24">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <span className="text-xs font-bold tracking-[0.4em] text-accent uppercase">The Council</span>
            <h2 className="text-5xl md:text-7xl font-headline font-bold uppercase leading-none">
              Advisory <br /> <span className="text-accent">Board</span>
            </h2>
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
                  data-ai-hint={member.imageHint}
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
