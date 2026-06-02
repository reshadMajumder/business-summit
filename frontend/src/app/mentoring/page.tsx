
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Button } from "@/components/ui/button"
import { Zap, Target, ArrowRight, ShieldCheck } from "lucide-react"

export default function MentoringPage() {
  const drHaiderImg = PlaceHolderImages.find(img => img.id === 'speaker-1')

  return (
    <main className="relative min-h-screen bg-background">
      <Navbar variant="solid" />
      
      {/* Exclusive Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-40 md:pb-32 overflow-hidden bg-white">
        <div className="container mx-auto px-4 md:px-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6 md:space-y-10 animate-fade-in order-2 lg:order-1">
              <div className="space-y-2 md:space-y-4">
                <span className="text-[10px] md:text-xs font-bold tracking-[0.5em] text-accent uppercase">Strategic Advisory</span>
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-headline font-bold uppercase leading-[1] md:leading-[0.9]">
                  Book Your 1-On-1 <br /> 
                  <span className="text-accent">Strategy Call</span> <br />
                  With Dr. Haider
                </h1>
              </div>
              <p className="text-base md:text-xl font-light leading-relaxed text-muted-foreground max-w-lg">
                Your business is ready for a new level of success. Book your 1-on-1 strategy call with Dr. M. Haider Uzzaman to architect your global expansion.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-4 md:pt-6">
                <Button size="lg" className="h-14 md:h-16 px-8 md:px-12 rounded-none bg-black text-white hover:bg-accent hover:text-white transition-all duration-500 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase group w-full sm:w-auto">
                  Book Now
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </Button>
                <div className="flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] text-accent uppercase">
                  <div className="hidden sm:block w-8 md:w-12 h-[1px] bg-accent"></div>
                  Limited Private Availability
                </div>
              </div>
            </div>
            
            <div className="relative aspect-[4/5] bg-muted overflow-hidden order-1 lg:order-2 w-full max-w-2xl mx-auto lg:mx-0">
              {drHaiderImg && (
                <Image 
                  src={drHaiderImg.imageUrl} 
                  alt="Dr. M. Haider Uzzaman" 
                  fill 
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white">
                <p className="text-[10px] font-bold tracking-[0.4em] uppercase opacity-60 mb-1 md:mb-2">The Chairman</p>
                <h3 className="text-xl md:text-3xl font-headline font-bold uppercase">Dr. M. Haider Uzzaman</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Breakdown */}
      <section className="py-16 md:py-32 bg-[#0A0A0A] text-white">
        <div className="container mx-auto px-4 md:px-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {/* What is it? */}
            <div className="bg-[#0A0A0A] p-8 md:p-12 space-y-6 md:space-y-8 hover:bg-white/5 transition-colors">
              <div className="flex items-center gap-4">
                <Zap className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                <h4 className="text-lg md:text-xl font-headline font-bold uppercase tracking-tight">What Is It?</h4>
              </div>
              <p className="text-sm font-light leading-relaxed text-white/60">
                The 1-On-1 Mentoring Session with Dr Haider is an exclusive, “pick-my-brain” opportunity for anyone who’d like to receive laser-focused, personalized advice from one of the premier business coaches on the planet.
              </p>
              <p className="text-sm font-light leading-relaxed text-white/60">
                In just 1 hour, you and Dr Haider will explore your current situation and how you can scale it sooner than you think to levels you’ve never thought possible.
              </p>
            </div>

            {/* How can it help? */}
            <div className="bg-[#0A0A0A] p-8 md:p-12 space-y-6 md:space-y-8 hover:bg-white/5 transition-colors">
              <div className="flex items-center gap-4">
                <Target className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                <h4 className="text-lg md:text-xl font-headline font-bold uppercase tracking-tight">How Can It Help?</h4>
              </div>
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0"></div>
                  <p className="text-sm font-light text-white/60">Discussing everything you need to know about high-ticket offers and scaling your business with them.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0"></div>
                  <p className="text-sm font-light text-white/60">Get Exclusive 1-On-1 Time with Dr Haider to Push Yourself and Your Business to Prosperity.</p>
                </div>
              </div>
            </div>

            {/* What now? */}
            <div className="bg-[#0A0A0A] p-8 md:p-12 space-y-6 md:space-y-8 hover:bg-white/5 transition-colors md:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-4">
                <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                <h4 className="text-lg md:text-xl font-headline font-bold uppercase tracking-tight">What Now?</h4>
              </div>
              <p className="text-sm font-light leading-relaxed text-white/60">
                Going through a 1-hour mentoring session with Dr. Haider means you might have to make an extreme change in your business and/or life.
              </p>
              <p className="text-sm font-light leading-relaxed text-white/60 italic border-l border-accent/30 pl-6">
                "Reach more milestones faster, with minimum mistakes. I’ll give it to you straight, no fluff."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 translate-x-20"></div>
        <div className="container mx-auto px-4 md:px-24 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-8 md:space-y-12">
            <h2 className="text-3xl md:text-6xl font-headline font-bold uppercase tracking-tight">
              Are You <span className="text-accent">Ready?</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-light max-w-xl mx-auto">
              Secure your private mentoring session today and step into the architecture of global leadership.
            </p>
            <Button size="lg" className="h-16 md:h-20 px-10 md:px-16 rounded-none bg-accent text-white hover:bg-black transition-all duration-500 text-xs md:text-sm font-bold tracking-[0.4em] uppercase shadow-2xl w-full sm:w-auto">
              Become A Private Client
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
