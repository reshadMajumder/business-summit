
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Shield, Globe, Users, Landmark, UserCircle } from "lucide-react"

const coreTeam = [
  { 
    name: "Dr M Haider Uzzaman", 
    role: "President", 
    image: "https://res.cloudinary.com/dzgs1uhn0/image/upload/v1781170321/Hon_Chairman_Sir_Profile_Photo.jpg_doq1pj.jpg" 
  },
  { 
    name: "Avishek Busviah", 
    role: "Vice President", 
    image: "https://res.cloudinary.com/dzgs1uhn0/image/upload/v1781170319/Avishek_Busviah_fv8v7m.jpg" 
  },
  { 
    name: "Abid Haider", 
    role: "Head of Strategy", 
    image: "https://res.cloudinary.com/dzgs1uhn0/image/upload/v1781170320/Abid-Haider_f82nxd.jpg" 
  },
  { 
    name: "Lima Akter", 
    role: "Manager, Coordination", 
    image: "https://res.cloudinary.com/dzgs1uhn0/image/upload/v1781170320/Lima-akter_j6mtcx.jpg" 
  },
  { 
    name: "Sharafat Hossain", 
    role: "Assistant Manager, Communication & IT", 
    image: "https://res.cloudinary.com/dzgs1uhn0/image/upload/v1781170320/sharafat-hossian_gajmou.jpg" 
  },
]

const countryDirectors = [
  { 
    name: "Mr. Gonçalo Terenas", 
    role: "Head of Corporate & International Business",
    image: "https://res.cloudinary.com/dzgs1uhn0/image/upload/v1781250976/Mr.-Gon%C3%A7alo-Terenas_--Head-of-Corporate-_-International-Business-at-Tuga-Innovations-Inc.-Head-of-Committee-at-Diaspora-Prime-Portugal-_-Executive-Board-Member-at-RCCPM-_CDO-at-HHERF-Foundation_w6tkvc.jpg"
  },
  { 
    name: "Prof. Ahmed Bin Salawudeen", 
    role: "Regional Director",
    image: "https://res.cloudinary.com/dzgs1uhn0/image/upload/v1781250974/Prof.-Ahmed-Bin-Salawudeen_rtyc71.jpg"
  },
  { 
    name: "Ms. Teresa do Brito Apolónia", 
    role: "Founder Partner, ASA Lawyers",
    image: "https://res.cloudinary.com/dzgs1uhn0/image/upload/v1781250974/Ms.-Teresa-do-Brito-Apol%C3%B3ni_--Founder-Partner-ASA-Lawyers_bcuzpr.jpg"
  },
  { 
    name: "Susan Gong", 
    role: "President and CEO, Altec Global Inc.",
    image: "https://res.cloudinary.com/dzgs1uhn0/image/upload/v1781250973/Susan_Gong_President_and_CEO_Altec_Global_Inc._vezmpy.jpg"
  },
]

export default function OurStory() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navbar variant="solid" />
      
      {/* Narrative Hero */}
      <section className="relative pt-32 pb-12 sm:pt-48 sm:pb-32 overflow-hidden border-b border-black/5 bg-white text-center">
        <div className="container mx-auto px-6 sm:px-12 md:px-24">
          <div className="max-w-4xl mx-auto space-y-12 animate-fade-in mb-20">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-[0.5em] text-accent uppercase">The Genesis</span>
              <h1 className="text-6xl md:text-8xl font-headline font-bold uppercase leading-[0.9]">Our <br />Story</h1>
            </div>
            <p className="text-xl md:text-2xl font-light leading-relaxed text-muted-foreground text-justify">
              Business Summit is the brainchild of a highly respected business innovator, <span className="text-primary font-medium">Dr. M. Haider Uzzaman</span>. 
              Dr. Haider started his journey in business with 35 cents and built it into a multi-million dollar empire. 
              Following this he realized with his thousands of connections around the globe he could craft and assist in creating the next generation of entrepreneurs and this led to the culmination and creation of what is today Business Summit Limited.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="relative aspect-[4/3] bg-muted overflow-hidden group shadow-2xl">
              <Image 
                src="https://res.cloudinary.com/dzgs1uhn0/image/upload/v1781202851/14_Best-Air-Experience1_ifyoaq.jpg" 
                alt="BEST AIR EXPERIENCE" 
                fill 
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
              <div className="absolute bottom-8 left-8 text-white z-10 text-left">
                <p className="text-[10px] font-bold tracking-[0.4em] uppercase opacity-60 mb-2">Strategic Milestone</p>
                <h3 className="text-2xl font-headline font-bold uppercase">BEST AIR EXPERIENCE</h3>
              </div>
            </div>
            <div className="relative aspect-[4/3] bg-muted overflow-hidden group shadow-2xl">
              <Image 
                src="https://res.cloudinary.com/dzgs1uhn0/image/upload/v1781202800/12_best-air-launching-flight-to-Srilanka-and-Maldives_z0xdif.jpg" 
                alt="BEST AIR LAUNCHING FLIGHT TO SRILANKA AND MALDIVES" 
                fill 
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
              <div className="absolute bottom-8 left-8 text-white z-10 text-left">
                <p className="text-[10px] font-bold tracking-[0.4em] uppercase opacity-60 mb-2">Regional Expansion</p>
                <h3 className="text-2xl font-headline font-bold uppercase leading-tight">BEST AIR LAUNCHING FLIGHT TO SRILANKA AND MALDIVES</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Mission Section */}
      <section className="py-32 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 translate-x-20"></div>
        <div className="container mx-auto px-6 sm:px-12 md:px-24 relative z-10">
          <div className="max-w-6xl mx-auto space-y-24">
            {/* Values - Triangular Layout */}
            <div className="text-center space-y-16">
              <span className="text-xs font-bold tracking-[0.5em] text-accent uppercase">Our Foundation</span>
              
              <div className="flex flex-col items-center gap-12 md:gap-16">
                {/* First Line: Credibility */}
                <div className="group space-y-6">
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-bold uppercase tracking-tighter group-hover:text-accent transition-colors leading-none">
                    Credibility
                  </h2>
                  <div className="w-12 h-1 bg-accent mx-auto"></div>
                </div>

                {/* Second Line: Trust & Professionalism with increased gap */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-64">
                  {["Trust", "Professionalism"].map((val) => (
                    <div key={val} className="space-y-6 group">
                      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-bold uppercase tracking-tighter group-hover:text-accent transition-colors leading-none">
                        {val}
                      </h2>
                      <div className="w-12 h-1 bg-accent mx-auto"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Unified Mission Paragraph */}
            <div className="space-y-12 pt-12 border-t border-white/10 text-center">
              <span className="text-xs font-bold tracking-[0.5em] text-accent uppercase">Our Mission</span>
              <p className="text-2xl md:text-4xl font-headline font-light leading-snug text-white/90 text-justify">
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
        <div className="container mx-auto px-6 sm:px-12 md:px-24">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-[0.4em] text-accent uppercase">Leadership</span>
              <h2 className="text-5xl md:text-7xl font-headline font-bold uppercase leading-none">Core <br /> Team</h2>
            </div>
            <p className="max-w-xs text-right text-muted-foreground font-light text-sm uppercase tracking-[0.2em] text-justify">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {countryDirectors.map((director, i) => (
              <div key={i} className="group space-y-6">
                <div className="relative aspect-[4/5] overflow-hidden bg-white border border-black/5 transition-all duration-700 hover:shadow-2xl">
                  {director.image ? (
                    <Image 
                      src={director.image} 
                      alt={director.name} 
                      fill 
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-muted/30 flex items-center justify-center">
                      <UserCircle className="w-16 h-16 text-muted-foreground/20" />
                    </div>
                  )}
                </div>
                <div className="space-y-1">
                  <h4 className="text-xl font-headline font-bold uppercase tracking-tight leading-tight">{director.name}</h4>
                  <p className="text-[10px] font-bold text-accent tracking-[0.2em] uppercase">{director.role}</p>
                  {!director.image && (
                    <p className="text-[9px] font-bold text-muted-foreground/40 uppercase tracking-widest pt-2">
                      Profile Pending
                    </p>
                  )}
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
