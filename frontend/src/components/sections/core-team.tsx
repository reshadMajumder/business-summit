
"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

const coreTeam = [
  {
    name: "Dr. M Haider Uzzaman",
    role: "President",
    image: "https://res.cloudinary.com/dzgs1uhn0/image/upload/v1782803440/Dr.jpg1.1_bncnyk.jpg",
  },
  {
    name: "Ms. Ismat Jahan Lizi",
    role: "Executive Vice President, Admin & Finance",
    image: "https://res.cloudinary.com/dzgs1uhn0/image/upload/v1782803442/Ms.-Lizi-Akter-1.1_uv3mdm.jpg",
  },
  {
    name: "Mr. Avishek Busviah",
    role: "Senior Vice President, BD",
    image: "https://res.cloudinary.com/dzgs1uhn0/image/upload/v1782803441/Avishek-Busviah.jpg-1.1_hket6x.jpg",
  },
  {
    name: "Mr. Abid Haider",
    role: "Vice President, Strategy",
    image: "https://res.cloudinary.com/dzgs1uhn0/image/upload/v1782803441/Mr.-Abid-Haider.-1.1_ami5ls.jpg",
  },
  {
    name: "Ms. Christina Carpentrio",
    role: "Vice President, Europe",
    image: "https://res.cloudinary.com/dzgs1uhn0/image/upload/v1782803442/Ms.-Cristina-Carpinteiro-1.1_h6ods4.jpg",
  },
  {
    name: "Mr. Innocent Obande",
    role: "Vice President, Africa",
    image: "https://res.cloudinary.com/dzgs1uhn0/image/upload/v1782803441/Mr.-Innocent-1.1_rz0g58.jpg",
  },
  {
    name: "Ms. Lima Akter",
    role: "Senior Vice President, Coordination",
    image: "https://res.cloudinary.com/dzgs1uhn0/image/upload/v1782803442/Ms.-Lima-Akter-1.1_rfymbc.jpg",
  },
  {
    name: "Ms. Nafula Adongo Peace Matha",
    role: "Regional Coordinator",
    image: "https://res.cloudinary.com/dzgs1uhn0/image/upload/v1782803442/Ms.-Nafula-Adongo-Peace-Matha-1.1_jglptz.jpg",
  },
  {
    name: "Mr. Reshad Majumder",
    role: "Asst. Vice President, Digital Products",
    image: "https://res.cloudinary.com/dzgs1uhn0/image/upload/v1782803441/Mr.-Reshad-1.1_xkvfg5.jpg",
  },
  {
    name: "Mr. Sharafat Hossain",
    role: "Asst. Vice President, Digital Creation",
    image: "https://res.cloudinary.com/dzgs1uhn0/image/upload/v1782803442/Mr.-Sharafat-Hossain-1.1_tpcpqi.jpg",
  },
  {
    name: "Ms. Ranu Akter",
    role: "Asst. Vice President, Digital Marketing",
    image: "https://res.cloudinary.com/dzgs1uhn0/image/upload/v1782803440/Ms.-Ranu-akter-1.1_ckizbi.jpg",
  }
]

export function CoreTeam() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  const onSelect = useCallback(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
  }, [api])

  useEffect(() => {
    if (!api) return
    onSelect()
    api.on("select", onSelect)
    api.on("reInit", onSelect)
  }, [api, onSelect])

  return (
    <section className="py-24 md:py-40 bg-white overflow-x-hidden border-b border-black/5">
      <div className="container mx-auto px-4 overflow-visible">
        {/* Large Background Header */}
        <div className="relative text-center mb-32">
          <h2 className="text-7xl md:text-[14rem] font-headline font-bold uppercase leading-none text-black/[0.03] select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full z-0 whitespace-nowrap">
            OUR TEAM
          </h2>
          <div className="relative z-10 space-y-4">
            <span className="text-[10px] font-bold tracking-[0.5em] text-accent uppercase">Leadership Architecture</span>
            <h3 className="text-3xl md:text-6xl font-headline font-bold uppercase tracking-tight">
              Core <span className="text-accent">TEAM</span>
            </h3>
          </div>
        </div>

        <div className="relative min-h-[600px] flex flex-col items-center overflow-visible pt-20">
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
              skipSnaps: false,
            }}
            className="w-full cursor-grab active:cursor-grabbing overflow-visible z-20"
          >
            <CarouselContent className="-ml-4 md:-ml-8 items-start pb-40 overflow-visible">
              {coreTeam.map((member, index) => {
                const isActive = current === index
                return (
                  <CarouselItem 
                    key={index} 
                    className="pl-4 md:pl-8 basis-[70%] sm:basis-[45%] md:basis-[30%] lg:basis-[25%] xl:basis-[20%] overflow-visible"
                    onClick={() => api?.scrollTo(index)}
                  >
                    <div className="flex flex-col items-center group overflow-visible relative">
                      <div
                        className={cn(
                          "relative w-full aspect-[2/3] rounded-full overflow-hidden transition-all duration-700 ease-in-out border-[6px] bg-muted",
                          isActive 
                            ? "border-accent shadow-[0_40px_80px_rgba(212,175,55,0.25)] -translate-y-16 scale-110 z-30 opacity-100" 
                            : "border-transparent opacity-30 grayscale hover:opacity-50 scale-90 z-10 translate-y-0"
                        )}
                      >
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover object-top"
                          priority={index === 0}
                          sizes="(max-width: 768px) 100vw, 400px"
                        />
                      </div>

                      {/* Name and Designation - Tucked tightly beneath active card */}
                      <div 
                        className={cn(
                          "text-center flex flex-col items-center transition-all duration-700 ease-in-out mt-4 w-full px-4 transform",
                          isActive 
                            ? "opacity-100 -translate-y-16 visible" 
                            : "opacity-0 invisible translate-y-0"
                        )}
                      >
                        <h4 className="text-base md:text-lg font-headline font-bold text-primary tracking-tight uppercase leading-tight text-center">
                          {member.name}
                        </h4>
                        <p className="text-[8px] md:text-[9px] font-bold text-accent tracking-[0.3em] uppercase mt-1 text-center">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
