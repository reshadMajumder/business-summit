
"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { UserPlus, Briefcase, TrendingUp, CheckCircle2 } from "lucide-react"

export default function RegisterPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [userType, setUserType] = useState("entrepreneur")

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      router.push("/dashboard")
    }, 1000)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar variant="solid" />
      <section className="pt-48 pb-24 flex items-center justify-center px-4">
        <div className="w-full max-w-2xl animate-fade-in">
          <Card className="rounded-none border-black/5 shadow-2xl bg-white overflow-hidden">
            <div className="h-2 bg-accent w-full"></div>
            <CardHeader className="space-y-4 pt-12 text-center border-b border-black/5 pb-12">
              <CardTitle className="text-4xl md:text-5xl font-headline font-bold uppercase tracking-tight">Register Access</CardTitle>
              <CardDescription className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase">
                Join the architecture of global leadership
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Tabs defaultValue="entrepreneur" className="w-full" onValueChange={setUserType}>
                <TabsList className="w-full grid grid-cols-2 rounded-none h-16 bg-muted/30 p-0">
                  <TabsTrigger value="entrepreneur" className="rounded-none h-full data-[state=active]:bg-white data-[state=active]:text-accent text-[10px] font-bold tracking-widest uppercase border-r border-black/5">
                    <Briefcase className="w-4 h-4 mr-2" /> Entrepreneur
                  </TabsTrigger>
                  <TabsTrigger value="investor" className="rounded-none h-full data-[state=active]:bg-white data-[state=active]:text-accent text-[10px] font-bold tracking-widest uppercase">
                    <TrendingUp className="w-4 h-4 mr-2" /> Investor
                  </TabsTrigger>
                </TabsList>
                
                <div className="p-10">
                  <form onSubmit={handleRegister} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">Full Name</Label>
                        <Input placeholder="John Doe" required className="h-14 rounded-none border-black/10" />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">Corporate Email</Label>
                        <Input type="email" placeholder="executive@enterprise.com" required className="h-14 rounded-none border-black/10" />
                      </div>
                    </div>

                    {userType === "entrepreneur" ? (
                      <div className="space-y-6 animate-fade-in">
                        <div className="space-y-2">
                          <Label className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">Company Name</Label>
                          <Input placeholder="Tech Ventures Ltd" required className="h-14 rounded-none border-black/10" />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">Funding Target</Label>
                          <Input placeholder="e.g. $5.0M" required className="h-14 rounded-none border-black/10" />
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-6 animate-fade-in">
                        <div className="space-y-2">
                          <Label className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">Fund/Firm Name</Label>
                          <Input placeholder="Apex Capital Partners" required className="h-14 rounded-none border-black/10" />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">AUM (Optional)</Label>
                          <Input placeholder="e.g. $100M+" className="h-14 rounded-none border-black/10" />
                        </div>
                      </div>
                    )}

                    <div className="space-y-2">
                      <Label className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">Create Password</Label>
                      <Input type="password" required className="h-14 rounded-none border-black/10" />
                    </div>

                    <Button type="submit" disabled={loading} className="w-full h-16 bg-black text-white hover:bg-accent transition-all duration-500 rounded-none text-[10px] font-bold tracking-[0.4em] uppercase group">
                      {loading ? "PROCESSING..." : `CREATE ${userType.toUpperCase()} ACCOUNT`}
                      {!loading && <UserPlus className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                    </Button>
                  </form>
                  
                  <p className="mt-8 text-center text-[10px] font-bold tracking-widest uppercase text-muted-foreground">
                    Already have an account? <Link href="/login" className="text-accent hover:underline">Log In</Link>
                  </p>
                </div>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </main>
  )
}
