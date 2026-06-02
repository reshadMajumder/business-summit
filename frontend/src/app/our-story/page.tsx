
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Target, Zap, Shield, Users, Rocket, BarChart, Globe, Heart, Landmark } from "lucide-react"

const principles = [
  { icon: Users, title: "GREAT COMPANY GREAT PEOPLE", content: "Business Summit ensures the highest level of integrity and professionalism. Geographically strong in all continents, we attract talent to make deals where no one else can." },
  { icon: Shield, title: "UNIQUE MANAGEMENT STRUCTURE", content: "Serious business-minded individuals dedicated to service. Our team is competent, well-trained, and built to ensure the safety of investors and projects." },
  { icon: Zap, title: "TECHNOLOGY-BASED OPERATIONS", content: "Completely system-driven. We use the best available technology, MIS, and ERP to monitor every step and ensure customer care is technologically advanced." },
  { icon: Target, title: "BRAND", content: "We care for 'Business Summit'. Every action is carefully measured to take our brand to new heights every day, becoming the ultimate trendsetter." },
  { icon: Rocket, title: "SALES", content: "Best-in-class sales organization. We have customer onboarding down to a science, maximizing long-term retention and eliminating churn." },
  { icon: Globe, title: "MARKETING", content: "Specializing in digital and target-audience oriented strategies. We trigger new marketing technology to harvest the best results for stakeholders." },
  { icon: BarChart, title: "FINANCE", content: "Crystal-clear financial plans. Providing second-by-second updates with secure payment gateways for error-free, global transactions." },
  { icon: Shield, title: "QUALITY ASSURANCE", content: "Our Quality Assurance Board (QAB) constantly monitors services. We assure quality in delivery rather than rectifying mistakes." },
  { icon: Users, title: "RECRUITING & TRAINING", content: "Recruiting the industry’s knowledge-based younger generations and providing continuous training to build the best possible global team." },
  { icon: Landmark, title: "LEGAL", content: "Tremendously strong legal support. Every step is vetted to avoid conflict and ensure the lowest possible legal issues in execution." },
  { icon: Heart, title: "COMMUNITY COMMITMENT", content: "Turning wild success into community help. Investing profits to assist populations below the poverty line and changing lives." },
]

export default function OurStory() {
  const visionaryImg = PlaceHolderImages.find(img => img.id === 'speaker-1')

  return (
    <main className="relative min-h-screen bg-background">
      <Navbar variant="solid" />
      
      {/* Narrative Hero */}
      <section className="relative pt-48 pb-32 overflow-hidden border-b border-black/5">
        <div className="container mx-auto px-4 md:px-24">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12 animate-fade-in">
              <div className="space-y-4">
                <span className="text-xs font-bold tracking-[0.5em] text-accent uppercase">The Genesis</span>
                <h1 className="text-6xl md:text-8xl font-headline font-bold uppercase leading-[0.9]">Our <br />Story</h1>
              </div>
              <p className="text-xl md:text-2xl font-light leading-relaxed text-muted-foreground">
                Business Summit is the brainchild of a highly respected business innovator, <span className="text-primary font-medium">Dr. M. Haider Uzzaman</span>. 
                What began as a physical success in 2017 has transformed into the digital center point for global enterprise.
              </p>
              <div className="flex items-center gap-4 text-xs font-bold tracking-[0.3em] uppercase">
                <div className="w-12 h-[1px] bg-accent"></div>
                Scroll to discover the architecture
              </div>
            </div>
            
            <div className="relative aspect-[4/5] bg-muted overflow-hidden group">
              {visionaryImg && (
                <Image 
                  src={visionaryImg.imageUrl} 
                  alt="Dr. M. Haider Uzzaman" 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute bottom-10 left-10 text-white z-10">
                <p className="text-xs font-bold tracking-[0.4em] uppercase opacity-60 mb-2">The Visionary</p>
                <h3 className="text-3xl font-headline font-bold uppercase">Dr. M. Haider Uzzaman</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-32 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-24">
          <div className="grid md:grid-cols-2 gap-32">
            <div className="space-y-8">
              <span className="text-xs font-bold tracking-[0.4em] text-accent uppercase">The Future</span>
              <h2 className="text-5xl font-headline font-bold uppercase">Our Vision</h2>
              <p className="text-4xl font-headline font-light italic leading-tight text-white/80">
                "To be the world leader in connecting Business to scale up their financial results"
              </p>
            </div>
            <div className="space-y-8">
              <span className="text-xs font-bold tracking-[0.4em] text-accent uppercase">The Path</span>
              <h2 className="text-5xl font-headline font-bold uppercase">Our Mission</h2>
              <p className="text-lg font-light leading-relaxed text-white/60">
                Business Summit aims to be the world leader in connecting B2B, B2C, B2G and G2G business affairs. We push businesses on a Global Scale through legitimate, authentic information and unmatched continental strength.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tactical Pillars Grid */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-24">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-[0.4em] text-accent uppercase">Architecture</span>
              <h2 className="text-5xl md:text-7xl font-headline font-bold uppercase leading-none">Operational <br />Principles</h2>
            </div>
            <p className="max-w-xs text-right text-muted-foreground font-light text-sm uppercase tracking-[0.2em]">
              The foundations of our global leadership and institutional integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/5 border border-black/5">
            {principles.map((p, i) => (
              <div key={i} className="bg-white p-12 space-y-8 hover:bg-muted/30 transition-colors group relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold text-accent tracking-[0.2em]">0{i + 1}</p>
                  <p.icon className="w-6 h-6 text-primary/20 group-hover:text-accent transition-colors" />
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-headline font-bold uppercase tracking-tight">{p.title}</h4>
                  <p className="text-sm font-light leading-relaxed text-muted-foreground">{p.content}</p>
                </div>
                {/* Decorative bar */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-accent translate-y-full group-hover:translate-y-0 transition-transform"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
