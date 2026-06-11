
"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export default function TermsOfServicePage() {
  const terms = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing the Business Summit portal and the InvEX Marketplace, you agree to comply with our institutional guidelines and professional code of conduct. These terms govern your participation in all summit activities and digital platforms."
    },
    {
      title: "2. Professional Conduct",
      content: "Participants are expected to maintain the highest standards of professional integrity. Any attempt to provide fraudulent project data or engage in unauthorized solicitation will result in immediate termination of access."
    },
    {
      title: "3. Intellectual Property",
      content: "All strategic publications, masterclass content, and proprietary blueprints provided through the Boutique or Digital Library are the intellectual property of Business Summit Limited. Unauthorized distribution is strictly prohibited."
    },
    {
      title: "4. Marketplace Transactions",
      content: "InvEX serves as a matchmaking and data verification platform. Business Summit is not responsible for the final outcomes of private investment negotiations between verified parties."
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
              <span className="text-xs font-bold tracking-[0.5em] text-accent uppercase">Institutional Agreement</span>
              <h1 className="text-5xl md:text-7xl font-headline font-bold uppercase leading-[0.9]">Terms of <br /> Service</h1>
            </div>
            <p className="text-lg md:text-xl font-light leading-relaxed text-muted-foreground max-w-2xl mx-auto">
              The framework governing our professional relationship and digital engagements.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 sm:px-12 md:px-24">
          <div className="max-w-3xl mx-auto space-y-16">
            {terms.map((term, i) => (
              <div key={i} className="space-y-6 animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                <h2 className="text-2xl font-headline font-bold uppercase tracking-tight text-primary">
                  {term.title}
                </h2>
                <p className="text-lg font-light leading-relaxed text-muted-foreground text-justify">
                  {term.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
