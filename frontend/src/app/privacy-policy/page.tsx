
"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { cn } from "@/lib/utils"

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "1. Scope of Policy",
      content: "This Privacy Policy governs the collection, processing, and management of institutional and professional data for all delegates, speakers, sponsors, and participants of the Business Summit Limited. This framework applies to all digital interactions through our portal, the InvEX Marketplace, and physical engagements at our global venues."
    },
    {
      title: "2. Information Collection & Institutional Intelligence",
      content: "We collect high-level professional data including corporate identities, professional biographies, investment interests, and strategic expansion goals. This encompasses information provided during registration, data submitted to the AI Executive Matcher, and verified project documentation required for participation in the InvEX investment ecosystem."
    },
    {
      title: "3. Strategic Data Utilization",
      content: "Data is utilized exclusively to architect personalized summit experiences, verify the viability of project data within the InvEX Marketplace, and facilitate direct G2G, G2B, and B2B collaborations. Our neural engines process institutional intelligence to ensure capital is connected to the most relevant high-impact opportunities with mathematical precision."
    },
    {
      title: "4. Security Architecture",
      content: "Business Summit Limited employs institutional-grade security protocols, including advanced encryption and restricted access controls, to safeguard executive intelligence. Access to sensitive project data within the InvEX Marketplace is strictly limited to verified and vetted institutional partners who have completed our comprehensive due diligence process."
    },
    {
      title: "5. Global Compliance & Cross-Border Transfers",
      content: "As a global entity operating in Canada, Portugal, Nigeria, Malaysia, Bangladesh, and the UAE, we adhere to the highest international data protection standards, including GDPR and regional equivalents. Your data may be transferred across borders to facilitate international partnerships, maintained at all times under strict institutional oversight."
    },
    {
      title: "6. Third-Party Disclosure Policy",
      content: "We do not sell, trade, or rent executive data to third-party marketing entities. Information is shared only with authorized partners, government liaisons, and service providers necessary for the execution of summit activities and the facilitation of investment matchmaking."
    },
    {
      title: "7. Executive Rights & Data Autonomy",
      content: "Participants retain full rights to access, rectify, or request the erasure of their professional data stored within our systems. Such requests are handled with priority by our dedicated institutional compliance team to ensure executive privacy is maintained without compromise."
    },
    {
      title: "8. Data Retention & Audit",
      content: "We retain institutional data only for the duration required to fulfill the strategic networking goals and investment cycles defined during the engagement. All data retention practices comply with international legal and audit requirements governing global financial and business services."
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
              <h1 className="text-5xl md:text-7xl font-headline font-bold uppercase leading-[0.9]">
                Privacy <br /> <span className="text-accent">Policy</span>
              </h1>
            </div>
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
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
