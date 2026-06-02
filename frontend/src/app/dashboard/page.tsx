
"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  LayoutDashboard, 
  Users, 
  Target, 
  Calendar, 
  MessageSquare, 
  FileText,
  Briefcase,
  TrendingUp,
  Settings,
  Bell
} from "lucide-react"

export default function DashboardPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="min-h-screen bg-background">
      <Navbar variant="solid" />
      
      <div className="pt-32 pb-24 container mx-auto px-4 md:px-24">
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 animate-fade-in">
          <div className="space-y-4">
            <span className="text-xs font-bold tracking-[0.5em] text-accent uppercase">Executive Portal</span>
            <h1 className="text-5xl md:text-7xl font-headline font-bold uppercase leading-none">Your <br />Dashboard</h1>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" size="icon" className="w-14 h-14 rounded-none border-black/5 hover:bg-accent hover:text-white transition-all">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon" className="w-14 h-14 rounded-none border-black/5 hover:bg-accent hover:text-white transition-all">
              <Settings className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 animate-fade-in delay-100">
          {[
            { label: "Matches Found", val: "12", icon: Users },
            { label: "Active Deals", val: "4", icon: Target },
            { label: "Summit Sessions", val: "8", icon: Calendar },
            { label: "Unread Messages", val: "2", icon: MessageSquare }
          ].map((stat, i) => (
            <Card key={i} className="rounded-none border-black/5 shadow-sm group hover:border-accent transition-all duration-500">
              <CardContent className="p-8 flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">{stat.label}</p>
                  <p className="text-3xl font-headline font-bold">{stat.val}</p>
                </div>
                <div className="p-4 bg-muted/30 text-muted-foreground group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                  <stat.icon className="w-6 h-6" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="rounded-none border-black/5 shadow-sm animate-fade-in delay-200">
              <CardHeader className="border-b border-black/5 px-10 py-8">
                <CardTitle className="text-2xl font-headline font-bold uppercase flex items-center gap-3">
                  <LayoutDashboard className="w-5 h-5 text-accent" />
                  Recommended Opportunities
                </CardTitle>
              </CardHeader>
              <CardContent className="p-10 space-y-8">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="flex items-center justify-between group cursor-pointer border-b border-black/5 last:border-0 pb-6 last:pb-0">
                    <div className="space-y-2">
                      <h4 className="text-xl font-headline font-bold uppercase group-hover:text-accent transition-colors">Strategic Partnership {i + 1}</h4>
                      <p className="text-sm font-light text-muted-foreground">Recommended based on your professional background and goals.</p>
                    </div>
                    <Button variant="outline" className="rounded-none border-black/5 text-[9px] font-bold tracking-widest uppercase hover:bg-black hover:text-white">
                      View Deal
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Area */}
          <div className="space-y-8">
            <Card className="rounded-none border-black/5 shadow-sm bg-black text-white animate-fade-in delay-300">
              <CardHeader className="px-10 py-8">
                <CardTitle className="text-xl font-headline font-bold uppercase text-accent">Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent className="px-10 pb-10 space-y-6">
                {[
                  { date: "Oct 15", event: "Webinar: Global Scaling" },
                  { date: "Nov 10", event: "Investors Summit Abuja" }
                ].map((ev, i) => (
                  <div key={i} className="flex gap-6 items-center">
                    <div className="text-center border-r border-white/10 pr-6">
                      <p className="text-xs font-bold text-accent uppercase">{ev.date.split(' ')[0]}</p>
                      <p className="text-xl font-headline font-bold">{ev.date.split(' ')[1]}</p>
                    </div>
                    <p className="text-sm font-medium tracking-wide leading-tight">{ev.event}</p>
                  </div>
                ))}
                <Button className="w-full h-14 bg-accent text-white hover:bg-white hover:text-black transition-all duration-500 rounded-none text-[10px] font-bold tracking-[0.2em] uppercase mt-4">
                  Full Schedule
                </Button>
              </CardContent>
            </Card>

            <Card className="rounded-none border-black/5 shadow-sm animate-fade-in delay-400">
              <CardHeader className="px-10 py-8 border-b border-black/5">
                <CardTitle className="text-xl font-headline font-bold uppercase flex items-center gap-3">
                  <FileText className="w-5 h-5 text-accent" />
                  Resources
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="flex flex-col">
                  {["Pitch Deck Guide", "Investment Criteria 2024", "M&A Playbook"].map((item, i) => (
                    <button key={i} className="text-left px-10 py-6 border-b border-black/5 last:border-0 hover:bg-muted/30 transition-colors flex items-center justify-between group">
                      <span className="text-[11px] font-bold tracking-widest uppercase">{item}</span>
                      <TrendingUp className="w-4 h-4 text-muted-foreground group-hover:text-accent opacity-0 group-hover:opacity-100 transition-all" />
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}
