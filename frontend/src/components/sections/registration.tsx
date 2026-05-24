
"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import { CheckCircle2 } from "lucide-react"

export function Registration() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="register" className="py-32 bg-accent text-white overflow-hidden relative">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-32 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-[0.4em] text-white/60 uppercase">Final Phase</span>
              <h2 className="text-5xl md:text-7xl font-headline font-bold uppercase leading-[0.9]">Secure <br />Your Access</h2>
            </div>
            <p className="text-white/70 text-lg font-light max-w-lg leading-relaxed">
              Limited executive passes remaining for the 2024 summit. Join 500+ global leaders in reshaping the corporate landscape.
            </p>
            <div className="flex flex-col gap-4 pt-4">
              <div className="flex items-center gap-4 text-sm font-bold tracking-widest uppercase">
                <span className="w-8 h-[1px] bg-white/30"></span>
                Keynotes & Masterclasses
              </div>
              <div className="flex items-center gap-4 text-sm font-bold tracking-widest uppercase">
                <span className="w-8 h-[1px] bg-white/30"></span>
                Networking Concierge
              </div>
              <div className="flex items-center gap-4 text-sm font-bold tracking-widest uppercase">
                <span className="w-8 h-[1px] bg-white/30"></span>
                Strategic Workshops
              </div>
            </div>
          </div>

          <div>
            {!submitted ? (
              <Card className="rounded-none border-none shadow-2xl bg-white text-black p-4">
                <CardContent className="pt-10 space-y-8">
                  <div className="space-y-2 text-center">
                    <h3 className="text-2xl font-headline font-bold uppercase">Executive Registration</h3>
                    <p className="text-muted-foreground text-sm font-light uppercase tracking-widest">Summit 2024</p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name" className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">First Name</Label>
                        <Input id="first-name" placeholder="John" required className="rounded-none border-black/10 focus:border-accent h-12" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name" className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">Last Name</Label>
                        <Input id="last-name" placeholder="Doe" required className="rounded-none border-black/10 focus:border-accent h-12" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">Corporate Email</Label>
                      <Input id="email" type="email" placeholder="john.doe@enterprise.com" required className="rounded-none border-black/10 focus:border-accent h-12" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="role" className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">Current Role</Label>
                      <Input id="role" placeholder="Chief Executive Officer" required className="rounded-none border-black/10 focus:border-accent h-12" />
                    </div>

                    <Button type="submit" className="w-full h-16 bg-accent text-white hover:bg-black transition-colors rounded-none text-xs font-bold tracking-[0.3em] uppercase mt-4">
                      Request Invitation
                    </Button>
                  </form>
                  
                  <p className="text-[10px] text-center text-muted-foreground font-light leading-relaxed px-8">
                    By submitting, you agree to the Apex Privacy Policy and our strategic communication guidelines.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="bg-white text-black p-16 text-center space-y-8 animate-fade-in shadow-2xl">
                <div className="flex justify-center">
                  <div className="w-20 h-20 bg-green-50 flex items-center justify-center rounded-full border border-green-100">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-headline font-bold uppercase">Application Received</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Our admissions committee will review your profile and respond within 48 hours. Please check your corporate email for verification.
                  </p>
                </div>
                <Button variant="outline" onClick={() => setSubmitted(false)} className="rounded-none border-black/10 hover:bg-black hover:text-white h-12 text-[10px] font-bold tracking-[0.2em] uppercase transition-all">
                  Back to Form
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
