
import { Navbar } from "@/components/layout/navbar"
import { Hero } from "@/components/sections/hero"
import { Partners } from "@/components/sections/partners"
import { MOUSigning } from "@/components/sections/mou-signing"
import { Offers } from "@/components/sections/offers"
import { Testimonials } from "@/components/sections/testimonials"
import { Gallery } from "@/components/sections/gallery"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Linkedin } from "lucide-react"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navbar />
      
      <Hero />
      
      <Partners />
      
      <MOUSigning />
      
      <Offers />

      <Testimonials />

      <Gallery />
      
      <WhyChooseUs />

      {/* LinkedIn Section */}
      <section className="py-24 bg-background border-t border-black/5">
        <div className="container mx-auto px-4 md:px-24">
          <div className="max-w-4xl mx-auto bg-white p-12 md:p-20 border border-black/5 text-center space-y-8 animate-fade-in shadow-sm">
            <div className="flex flex-col items-center gap-6">
              <div className="p-4 bg-[#0A66C2]/5 rounded-full text-center flex items-center justify-center">
                <Linkedin className="w-12 h-12 text-[#0A66C2]" />
              </div>
              <h3 className="text-3xl font-headline font-bold uppercase tracking-tight">Connect On LinkedIn</h3>
            </div>
            <p className="text-lg text-muted-foreground font-light max-w-lg mx-auto leading-relaxed">
              Follow our executive feed for real-time updates on global scaling, strategic partnerships, and institutional intelligence.
            </p>
            <div className="pt-4">
              <Button variant="outline" className="rounded-none border-black/10 px-12 h-16 text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-black hover:text-white transition-all">
                View Official Profile
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
