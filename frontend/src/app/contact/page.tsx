
"use client"

import { useState } from "react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Mail, Phone, Globe, Send } from "lucide-react"

export default function ContactPage() {
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => setLoading(false), 1500)
  }

  return (
    <main className="relative min-h-screen bg-background">
      <Navbar variant="solid" />
      
      {/* Narrative Hero */}
      <section className="relative pt-32 pb-12 sm:pt-48 sm:pb-32 overflow-hidden border-b border-black/5 bg-white text-center">
        <div className="container mx-auto px-6 sm:px-12 md:px-24">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-[0.5em] text-accent uppercase">Strategic Liaison</span>
              <h1 className="text-5xl md:text-8xl font-headline font-bold uppercase leading-[0.9]">Contact <br /> <span className="text-accent">Us</span></h1>
            </div>
            <p className="text-lg md:text-2xl font-light leading-relaxed text-muted-foreground max-w-3xl mx-auto">
              Initiate a dialogue with our global expansion and funding architecture team.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 sm:px-12 md:px-24">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Contact Form */}
            <div className="space-y-12 animate-fade-in">
              <div className="space-y-4">
                <h2 className="text-3xl font-headline font-bold uppercase tracking-tight">Direct Inquiry</h2>
                <p className="text-muted-foreground font-light">Submit your corporate inquiry for priority review by our executive board.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">Full Name</Label>
                    <Input placeholder="JOHN DOE" required className="h-14 rounded-none border-black/10 focus:border-accent" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">Corporate Email</Label>
                    <Input type="email" placeholder="EXECUTIVE@ENTERPRISE.COM" required className="h-14 rounded-none border-black/10 focus:border-accent" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">Subject</Label>
                  <Input placeholder="STRATEGIC PARTNERSHIP / FUNDING INQUIRY" required className="h-14 rounded-none border-black/10 focus:border-accent" />
                </div>

                <div className="space-y-2">
                  <Label className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">Message</Label>
                  <Textarea placeholder="PROVIDE A BRIEF OVERVIEW OF YOUR STRATEGIC GOALS..." required className="min-h-[200px] rounded-none border-black/10 focus:border-accent p-6" />
                </div>

                <Button type="submit" disabled={loading} className="h-16 px-12 rounded-none bg-black text-white hover:bg-accent transition-all duration-500 text-[10px] font-bold tracking-[0.4em] uppercase group w-full md:w-auto">
                  {loading ? "TRANSMITTING..." : "SEND INQUIRY"}
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </form>
            </div>

            {/* Contact Info & Global Presence */}
            <div className="space-y-16 animate-fade-in delay-200">
              <div className="space-y-8">
                <h2 className="text-3xl font-headline font-bold uppercase tracking-tight">Global Presence</h2>
                <div className="grid gap-8">
                  {[
                    { 
                      title: "Canada Office", 
                      type: "North American Command",
                      address: "40 Norbury Drive, Markham, ON L3S 3V2, Canada"
                    },
                    { 
                      title: "Portugal Office", 
                      type: "European Strategic Hub",
                      address: "Rua Santo António da Glória No. 4-3º Dtº, 1250-117 Lisbon, Portugal"
                    },
                    { 
                      title: "Dubai Office", 
                      type: "Middle Eastern HQ",
                      address: "Office 904, Oxford Tower, Business Bay, Dubai, United Arab Emirates (UAE)"
                    },
                    { 
                      title: "Malaysia Office", 
                      type: "Asian Regional Hub",
                      address: "36th Floor, Menara Maxis, Kuala Lumpur City Centre (KLCC), 50088 Kuala Lumpur, Malaysia"
                    },
                    { 
                      title: "Bangladesh Office", 
                      type: "South Asian Gateway",
                      address: "Unit 7B, House #297, Lane #04, Baridhara DOHS, Dhaka 1206, Bangladesh"
                    },
                    { 
                      title: "Lagos Office", 
                      type: "African Strategic Hub",
                      address: "33 Victoria Arobieke Street, Off Admiralty Way, Lekki Phase 1, Lagos, Nigeria"
                    }
                  ].map((office, i) => (
                    <div key={i} className="flex items-start gap-6 p-8 bg-white border border-black/5 hover:border-accent transition-colors group">
                      <div className="w-12 h-12 bg-accent/5 flex items-center justify-center rounded-full group-hover:bg-accent group-hover:text-white transition-all shrink-0 mt-1">
                        <Globe className="w-6 h-6" />
                      </div>
                      <div className="space-y-2">
                        <div className="space-y-0.5">
                          <h4 className="text-xl font-headline font-bold uppercase leading-tight">{office.title}</h4>
                          <p className="text-[9px] font-bold text-accent uppercase tracking-widest">{office.type}</p>
                        </div>
                        <p className="text-xs font-light text-muted-foreground leading-relaxed">
                          {office.address}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-12 border-t border-black/5 grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-accent">
                    <Mail className="w-4 h-4" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">General Inquiry</span>
                  </div>
                  <p className="text-lg font-headline font-medium">info@businesssummit.net</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-accent">
                    <Phone className="w-4 h-4" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Direct Line</span>
                  </div>
                  <p className="text-lg font-headline font-medium">Available via Portal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
