
"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Link from "next/link"
import { LogIn, ArrowRight } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate auth delay
    setTimeout(() => {
      router.push("/dashboard")
    }, 1000)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar variant="solid" />
      <section className="pt-48 pb-24 flex items-center justify-center px-4">
        <div className="w-full max-w-md animate-fade-in">
          <Card className="rounded-none border-black/5 shadow-2xl bg-white overflow-hidden">
            <div className="h-2 bg-accent w-full"></div>
            <CardHeader className="space-y-4 pt-12 text-center">
              <CardTitle className="text-4xl font-headline font-bold uppercase tracking-tight">Welcome Back</CardTitle>
              <CardDescription className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase">
                Access your strategic summit portal
              </CardDescription>
            </CardHeader>
            <CardContent className="p-10 pt-0">
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">Corporate Email</Label>
                  <Input id="email" type="email" placeholder="executive@enterprise.com" required className="h-14 rounded-none border-black/10 focus:border-accent" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">Secure Password</Label>
                  <Input id="password" type="password" required className="h-14 rounded-none border-black/10 focus:border-accent" />
                </div>
                <Button type="submit" disabled={loading} className="w-full h-16 bg-black text-white hover:bg-accent transition-all duration-500 rounded-none text-[10px] font-bold tracking-[0.4em] uppercase group">
                  {loading ? "AUTHENTICATING..." : "LOG IN TO PORTAL"}
                  {!loading && <LogIn className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                </Button>
              </form>
              <div className="mt-8 text-center space-y-4">
                <p className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">
                  Don't have an account?
                </p>
                <Link href="/register">
                  <Button variant="link" className="text-accent text-[10px] font-bold tracking-widest uppercase p-0 h-auto">
                    Register for the Summit <ArrowRight className="ml-2 w-3 h-3" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </main>
  )
}
