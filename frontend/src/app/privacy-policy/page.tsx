
"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { cn } from "@/lib/utils"

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "1. Data Collection",
      content: "Business Summit collects institutional and professional data necessary to facilitate high-level networking and investment matchmaking. This includes corporate identity, professional background, and strategic goals provided during registration or session matching."
    },
    {
      title: "2. Strategic Use of Information",
      content: "Information collected is utilized to architect personalized summit experiences, verify project data in the InvEX Marketplace, and facilitate G2G/B2B connections. We do not sell executive data to third-party marketing entities."
    },
    {
      title: "3. Information Security",
      content: "We implement institutional-grade security protocols to safeguard your data. Access to sensitive project information within InvEX is restricted to verified and vetted partners."
    },
    {
      title: "4. Global Compliance",
      content: "As a global entity operating across Canada, Malaysia, Nigeria, and the UAE, we adhere to international data protection standards, including GDPR and regional equivalents, ensuring your privacy is maintained across borders."
    }
  ]

  return (
    <main className="relative min-h-screen bg-background">
      <Navbar variant="solid" />
      
      {/* Narrative Hero */}
      <section className="relative pt-32 pb-12 sm:pt-48 sm:pb-32 overflow-hidden border-b border-black/5 bg-white text-center">
        <div className="container mx-auto px-6 sm:px-12 md:px-24">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-[0.5em] text-accent uppercase">Institutional Compliance</span>
              <h1 className="text-5xl md:text-7xl font-headline font-bold uppercase leading-[0.9]">Privacy <br /> Policy</h1>
            </div>
            <p className="text-lg md:text-xl font-light leading-relaxed text-muted-foreground max-w-2xl mx-auto">
              Our commitment to safeguarding executive intelligence and institutional data.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 sm:px-12 md:px-24">
          <div className="max-w-3xl mx-auto space-y-16">
            {sections.map((section, i) => (
              <div key={i} className="space-y-6 animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                <h2 className="text-2xl font-headline font-bold uppercase tracking-tight text-primary">
                  {section.title}
                </h2>
                <p className="text-lg font-light leading-relaxed text-muted-foreground text-justify">
                  {section.content}
                </p>
              </div>
            ))}
            
            <div className="pt-12 border-t border-black/5">
              <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase">
                Last Updated: October 2024
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
