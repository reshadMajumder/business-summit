
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Shield, Globe, Users, Landmark, UserCircle } from "lucide-react"

const coreTeam = [
  { name: "Dr. M. Haider Uzzaman", role: "Chairman & Founder", image: "https://businesssummit.net/wp-content/uploads/2024/12/744786_5216b5a1ffdf404bae1d280ac96fa1cemv2.avif" },
  { name: "Abid Haider", role: "Director", image: "https://picsum.photos/seed/abid/800/1000" },
  { name: "Avishek Busviah", role: "Executive Director", image: "https://picsum.photos/seed/avishek/800/1000" },
  { name: "Lima Akter", role: "Management Lead", image: "https://picsum.photos/seed/lima/800/1000" },
  { name: "Sharafat Hossain", role: "Operations Lead", image: "https://picsum.photos/seed/sharafat/800/1000" },
]

const countryDirectors = [
  { region: "Canada", name: "Regional Director" },
  { region: "Malaysia", name: "Regional Director" },
  { region: "UAE", name: "Regional Director" },
  { region: "Portugal", name: "Regional Director" },
  { region: "Nigeria", name: "Regional Director" },
  { region: "Kosovo", name: "Regional Director" },
]

export default function OurStory() {
  const visionaryImg = PlaceHolderImages.find(img => img.id === 'speaker-1')

  return (
    <main className="relative min-h-screen bg-background">
      <Navbar variant="solid" />
      
      {/* Narrative Hero */}
      <section className="relative pt-48 pb-32 overflow-hidden border-b border-black/5 bg-white">
        <div className="container mx-auto px-4 md:px-24">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12 animate-fade-in">
              <div className="space-y-4">
                <span className="text-xs font-bold tracking-[0.5em] text-accent uppercase">The Genesis</span>
                <h1 className="text-6xl md:text-8xl font-headline font-bold uppercase leading-[0.9]">Our <br />Story</h1>
              </div>
              <p className="text-xl md:text-2xl font-light leading-relaxed text-muted-foreground">
                Business Summit is the brainchild of a highly respected business innovator, <span className="text-primary font-medium">Dr. M. Haider Uzzaman</span>. 
                Dr. Haider started his journey in business with 35 cents and built it into a multi-million dollar empire. 
                Following this he realized with his thousands of connections around the globe he could craft and assist in creating the next generation of entrepreneurs and this led to the culmination and creation of what is today Business Summit Limited.
              </p>
            </div>
            
            <div className="relative aspect-[4/5] bg-muted overflow-hidden group shadow-2xl">
              {visionaryImg && (
                <Image 
                  src={visionaryImg.imageUrl} 
                  alt="Dr. M. Haider Uzzaman" 
                  fill 
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                  priority
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

      {/* Values & Mission Section */}
      <section className="py-32 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 translate-x-20"></div>
        <div className="container mx-auto px-4 md:px-24 relative z-10">
          <div className="max-w-5xl mx-auto space-y-24">
            {/* Values */}
            <div className="text-center space-y-12">
              <span className="text-xs font-bold tracking-[0.5em] text-accent uppercase">Our Foundation</span>
              <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
                {["Trust", "Credibility", "Professionalism"].map((val) => (
                  <div key={val} className="space-y-4 group">
                    <h2 className="text-4xl md:text-6xl font-headline font-bold uppercase tracking-tighter group-hover:text-accent transition-colors">
                      {val}
                    </h2>
                    <div className="w-12 h-1 bg-accent mx-auto"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Unified Mission Paragraph */}
            <div className="space-y-12 pt-12 border-t border-white/10">
              <span className="text-xs font-bold tracking-[0.5em] text-accent uppercase">Our Mission</span>
              <p className="text-2xl md:text-4xl font-headline font-light leading-snug text-white/90">
                Business Summit was created with two simple missions; <span className="text-accent font-bold italic">Connecting Investors with Businesses</span> & <span className="text-accent font-bold italic">Connecting Businesses to the World.</span> 
                Today, Business Summit deals as a broker to assist projects and business owners in all sectors to receive funding to make their dreams a reality with the assistance of our dedicated 100+ Investor base from around the globe (HNWI & Institutional) whilst also assisting in providing market expansion and creating key partnerships in their required segment in just about every corner of the world. 
                Business Summit also hosts their marquee event annually to culminate the achievements of everyone on the platform at <span className="text-white font-bold underline decoration-accent">‘The Investors Summit’</span> in a crowdsourced global mega city to facilitate deals on the spot.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Team Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-24">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-[0.4em] text-accent uppercase">Leadership</span>
              <h2 className="text-5xl md:text-7xl font-headline font-bold uppercase leading-none">Core <br /> Team</h2>
            </div>
            <p className="max-w-xs text-right text-muted-foreground font-light text-sm uppercase tracking-[0.2em]">
              The institutional intelligence driving global strategic alignment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {coreTeam.map((member, i) => (
              <div key={i} className="group space-y-6">
                <div className="relative aspect-[4/5] overflow-hidden bg-muted border border-black/5 transition-all duration-700 hover:shadow-2xl">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill 
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                  />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xl font-headline font-bold uppercase tracking-tight leading-tight">{member.name}</h4>
                  <p className="text-[10px] font-bold text-accent tracking-[0.2em] uppercase">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Country Directors Section */}
      <section className="py-32 bg-background border-t border-black/5">
        <div className="container mx-auto px-4 md:px-24">
          <div className="mb-20">
             <span className="text-xs font-bold tracking-[0.4em] text-accent uppercase block mb-4">Global Network</span>
             <h2 className="text-5xl font-headline font-bold uppercase">Country Directors</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-black/5 border border-black/5">
            {countryDirectors.map((director, i) => (
              <div key={i} className="bg-white p-12 space-y-6 hover:bg-muted/30 transition-all group">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-accent/10 rounded-full">
                    <Globe className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{director.region}</span>
                </div>
                <div className="space-y-2">
                  <h4 className="text-2xl font-headline font-bold uppercase tracking-tight">{director.name}</h4>
                  <p className="text-[10px] font-bold text-accent tracking-[0.2em] uppercase">Regional Command</p>
                </div>
                <div className="pt-6 flex items-center gap-2 text-[9px] font-bold text-muted-foreground/40 uppercase tracking-widest">
                  <UserCircle className="w-3 h-3" />
                  Profile Pending
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
