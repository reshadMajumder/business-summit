
import { Navbar } from "@/components/layout/navbar"
import { Hero } from "@/components/sections/hero"
import { Partners } from "@/components/sections/partners"
import { MOUSigning } from "@/components/sections/mou-signing"
import { Offers } from "@/components/sections/offers"
import { Gallery } from "@/components/sections/gallery"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { Footer } from "@/components/layout/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navbar />
      
      <Hero />
      
      <Partners />
      
      <MOUSigning />
      
      <Offers />

      <Gallery />
      
      <WhyChooseUs />

      <Footer />
    </main>
  )
}
