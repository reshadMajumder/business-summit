import { Button } from "@/components/ui/button"
import { Play, Users, MessageSquare, Share2 } from "lucide-react"
import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export function LiveStream() {
  const bg = PlaceHolderImages.find(img => img.id === 'live-keynote')

  return (
    <section className="py-32 bg-black text-white">
      <div className="container mx-auto px-4 md:px-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 relative group">
            <div className="relative aspect-video overflow-hidden shadow-2xl">
              {bg?.imageUrl && (
                <Image 
                  src={bg.imageUrl} 
                  alt="Live Keynote" 
                  fill
                  className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
                  data-ai-hint="conference stage"
                />
              )}
              <div className="absolute inset-0 flex items-center justify-center">
                <Button size="icon" className="w-24 h-24 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 transition-all duration-300 group">
                  <Play className="w-10 h-10 text-white fill-white ml-2 group-hover:scale-110 transition-transform" />
                </Button>
              </div>
              
              <div className="absolute top-8 left-8 flex items-center gap-3">
                <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
                <span className="text-xs font-bold tracking-[0.3em] uppercase">Live Keynote</span>
              </div>

              <div className="absolute bottom-8 right-8 flex items-center gap-6 text-xs font-bold tracking-widest text-white/60">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  12.4K VIEWING
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between border-b border-white/10 pb-8">
              <div className="space-y-1">
                <h3 className="text-2xl font-headline font-bold uppercase">The Digital Sovereignty Masterclass</h3>
                <p className="text-white/40 font-light text-sm">Session 12: Distributed Governance in the Age of Autonomy</p>
              </div>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="hover:bg-white/10">
                  <MessageSquare className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-white/10">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-headline font-bold uppercase leading-none">
                Interactive <br />Experience
              </h2>
              <p className="text-white/60 font-light leading-relaxed">
                Connect with global leaders in real-time through our minimalist interactive overlay. Direct Q&A and sentiment polling integrated seamlessly.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="p-6 bg-white/5 border-l-2 border-accent">
                <p className="text-sm font-light italic text-white/80">"How will cross-border taxation evolve with decentralized digital currencies?"</p>
                <div className="mt-4 flex items-center justify-between text-[10px] font-bold tracking-widest text-white/40">
                  <span>SUBMITTED BY ALEX V.</span>
                  <span>2 MINS AGO</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Button className="bg-accent hover:bg-accent/90 rounded-none h-14 text-xs font-bold tracking-[0.2em] uppercase">
                  Join The Chat
                </Button>
                <Button variant="outline" className="border-white/20 text-white rounded-none h-14 text-xs font-bold tracking-[0.2em] uppercase hover:bg-white/5">
                  Resources
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
