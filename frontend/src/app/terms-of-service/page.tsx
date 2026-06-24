
"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export default function TermsOfServicePage() {
  const terms = [
    {
      title: "1. Institutional Acceptance",
      content: "By accessing the Business Summit portal, the InvEX Marketplace, and our associated digital architectures, you formally agree to adhere to these Terms of Service. These terms constitute a legally binding agreement between you, your represented entity, and Business Summit Limited."
    },
    {
      title: "2. InvEX Marketplace & Matchmaking Architecture",
      content: "InvEX serves exclusively as a high-level matchmaking and data verification platform, architected to connect verified institutional investors with vetted business opportunities. Business Summit Limited provides the infrastructure for these connections but does not act as a direct party to the final investment transactions."
    },
    {
      title: "3. Limitation of Liability",
      content: "Business Summit Limited is not responsible for the ultimate outcome of private negotiations, investments, or agreements initiated through our platforms. Participating parties are responsible for their own due diligence, final valuations, and the execution of legal contracts governing their specific arrangements."
    },
    {
      title: "4. Success Fee & Financial Obligations",
      content: "A success fee is payable to Business Summit Limited upon the successful completion of any transaction, investment round, or funding arrangement facilitated through our network or the InvEX platform. The specific percentage and terms of this fee are governed by individual engagement letters or standard institutional rates defined at the point of verification."
    },
    {
      title: "5. Professional Conduct & Intellectual Property",
      content: "All participants are required to maintain the highest standards of professional integrity. All strategic blueprints, masterclass content, and proprietary intelligence provided through our Digital Library and Boutique remain the exclusive intellectual property of Business Summit Limited. Unauthorized redistribution is strictly prohibited."
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
              <h1 className="text-5xl md:text-7xl font-headline font-bold uppercase leading-[0.9]">
                Terms of <br /> <span className="text-accent">Service</span>
              </h1>
            </div>
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
