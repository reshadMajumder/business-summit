
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { BrainCircuit, Sparkles, UserCheck, CalendarDays } from "lucide-react"
import { aiExecutiveMatcherRecommendations, type ExecutiveMatcherOutput } from "@/ai/flows/ai-executive-matcher-recommendations"

export function ExecutiveMatcher() {
  const [background, setBackground] = useState("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<ExecutiveMatcherOutput | null>(null)

  const handleMatch = async () => {
    if (!background.trim()) return
    setLoading(true)
    try {
      const output = await aiExecutiveMatcherRecommendations({ professionalBackground: background })
      setResult(output)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-24">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl md:text-5xl font-headline font-bold uppercase tracking-tight">
              AI Executive <span className="text-accent">Matcher</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto font-light">
              Submit your professional profile and let our intelligence architect your personalized summit experience.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-3 space-y-6">
              <div className="relative group">
                <Textarea
                  placeholder="Describe your role, industry, and strategic goals..."
                  className="min-h-[250px] p-8 text-lg font-light border-2 border-black/5 bg-background focus:border-accent transition-all resize-none shadow-sm rounded-none"
                  value={background}
                  onChange={(e) => setBackground(e.target.value)}
                />
                <div className="absolute bottom-4 right-4 flex items-center gap-2">
                   <Button 
                    onClick={handleMatch} 
                    disabled={loading || !background}
                    className="bg-primary hover:bg-primary/90 rounded-none h-12 px-6"
                   >
                    {loading ? "ANALYZING..." : "GENERATE PROFILE"}
                    <Sparkles className="ml-2 w-4 h-4" />
                   </Button>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 space-y-4">
              <div className="p-6 border border-black/5 bg-muted/30 rounded-none space-y-4">
                <div className="flex items-center gap-3 text-accent">
                  <BrainCircuit className="w-5 h-5" />
                  <span className="font-headline font-bold text-sm tracking-widest uppercase">Intelligent Routing</span>
                </div>
                <p className="text-sm font-light leading-relaxed">
                  Our neural engine cross-references your background with over 200 sessions and 5,000 executive profiles to find your optimal path.
                </p>
                <div className="pt-4 flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <UserCheck className="w-4 h-4" />
                    Strategic Networking Hooks
                  </div>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <CalendarDays className="w-4 h-4" />
                    High-Impact Session Paths
                  </div>
                </div>
              </div>
            </div>
          </div>

          {result && (
            <div className="animate-fade-in grid md:grid-cols-2 gap-12 pt-8">
              <div className="space-y-6">
                <h3 className="text-xl font-headline font-bold uppercase border-b-2 border-accent pb-2 inline-block">Recommended Sessions</h3>
                <ul className="space-y-4">
                  {result.sessionRecommendations.map((session, i) => (
                    <li key={i} className="group cursor-default flex items-start gap-4">
                      <span className="text-accent font-bold mt-1">0{i+1}</span>
                      <p className="font-medium group-hover:text-accent transition-colors">{session}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-headline font-bold uppercase border-b-2 border-accent pb-2 inline-block">Networking Targets</h3>
                <div className="flex flex-wrap gap-2">
                  {result.networkingConnections.map((connection, i) => (
                    <div key={i} className="px-4 py-2 bg-primary text-white text-xs font-bold tracking-wider rounded-none uppercase">
                      {connection}
                    </div>
                  ))}
                </div>
                <div className="p-6 bg-accent/5 border border-accent/10 mt-8">
                  <p className="text-sm font-light italic leading-relaxed text-muted-foreground">
                    "{result.reasoning}"
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
