
import { Navbar } from "@/components/layout/navbar"
import { Hero } from "@/components/sections/hero"
import { Partners } from "@/components/sections/partners"
import { MOUSigning } from "@/components/sections/mou-signing"
import { Testimonials } from "@/components/sections/testimonials"
import { AdvisoryBoard } from "@/components/sections/advisory-board"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navbar />
      
      <Hero />
      
      <Partners />
      
      <MOUSigning />
      
      {/* InvEX Introduction Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-24">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-[0.5em] text-accent uppercase">Institutional Portal</span>
              <h2 className="text-5xl md:text-8xl font-headline font-bold leading-none">
                Inv<span className="text-accent">EX</span>
              </h2>
            </div>
            <div className="space-y-8">
              <p className="text-2xl md:text-3xl font-light leading-relaxed text-foreground max-w-3xl mx-auto text-center">
                Join our latest & state of the art exchange to secure your investment. EXchange ideas, EXchange projects, EXchange capital.
              </p>
              <div className="pt-6">
                <Link href="/invex">
                  <Button className="h-16 px-14 bg-black text-white hover:bg-accent transition-all duration-500 rounded-none text-[10px] font-bold tracking-[0.4em] uppercase group shadow-2xl">
                    Access Exchange
                    <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AdvisoryBoard />

      <WhyChooseUs />

      <Testimonials />

      <Footer />
    </main>
  )
}
