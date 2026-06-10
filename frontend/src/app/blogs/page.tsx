
"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Calendar, User, Search } from "lucide-react"
import { posts } from "@/lib/blog-data"
import { cn } from "@/lib/utils"

const categories = ["All Posts", "Global News", "Summit Happenings", "Strategic Insights"]

export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState("All Posts")
  const [searchQuery, setSearchQuery] = useState("")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const filteredPosts = posts.filter(post => {
    const matchesCategory = activeCategory === "All Posts" || post.category === activeCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <main className="relative min-h-screen bg-background">
      <Navbar variant="solid" />
      
      {/* Narrative Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-black/5 bg-white">
        <div className="container mx-auto px-4 md:px-24">
          <div className="max-w-4xl space-y-12 animate-fade-in">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-[0.5em] text-accent uppercase">Editorial Core</span>
              <h1 className="text-6xl md:text-8xl font-headline font-bold uppercase leading-[0.9]">Blogs</h1>
            </div>
            <p className="text-xl md:text-2xl font-light leading-relaxed text-muted-foreground max-w-3xl">
              Gain insights into current Global News & Recent Business Summit Happenings.
            </p>
          </div>
        </div>
      </section>

      {/* Category Navigation & Search */}
      <section className="sticky top-[72px] z-30 bg-white/80 backdrop-blur-md border-b border-black/5">
        <div className="container mx-auto px-4 md:px-24 py-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap gap-8">
            {categories.map((cat) => (
              <button 
                key={cat} 
                onClick={() => setActiveCategory(cat)}
                suppressHydrationWarning
                className={cn(
                  "text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-300 relative py-2",
                  activeCategory === cat ? "text-accent" : "text-muted-foreground hover:text-black"
                )}
              >
                {cat}
                {activeCategory === cat && (
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-accent animate-in fade-in slide-in-from-left-2 duration-300"></div>
                )}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="SEARCH INSIGHTS..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 rounded-none border-black/10 text-[10px] font-bold tracking-widest uppercase focus-visible:ring-accent"
            />
          </div>
        </div>
      </section>

      {/* Blog Feed */}
      <section className="py-24 bg-background min-h-[600px]">
        <div className="container mx-auto px-4 md:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
            {mounted && filteredPosts.map((post, i) => (
              <article 
                key={post.slug} 
                className="group space-y-8 animate-fade-in" 
                style={{ animationDelay: `${(i % 6) * 100}ms` }}
              >
                <Link href={`/blogs/${post.slug}`} className="block relative aspect-[4/3] overflow-hidden bg-muted border border-black/5">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </Link>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-6 text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3 text-accent" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-3 h-3 text-accent" />
                      {post.author}
                    </div>
                  </div>
                  <Link href={`/blogs/${post.slug}`}>
                    <h3 className="text-2xl font-headline font-bold uppercase leading-tight hover:text-accent transition-colors cursor-pointer min-h-[4rem]">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-sm font-light text-muted-foreground leading-relaxed line-clamp-3">
                    {post.description}
                  </p>
                  <Link href={`/blogs/${post.slug}`}>
                    <Button variant="link" className="p-0 h-auto text-[10px] font-bold tracking-[0.3em] uppercase group">
                      Read Insight
                      <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {mounted && filteredPosts.length === 0 && (
            <div className="text-center py-20 space-y-4 animate-fade-in">
              <p className="text-muted-foreground text-sm uppercase tracking-widest">No insights match your criteria.</p>
              <Button 
                variant="outline" 
                onClick={() => { setActiveCategory("All Posts"); setSearchQuery(""); }}
                className="rounded-none border-black/10 text-[10px] font-bold tracking-widest uppercase"
              >
                Reset Feed
              </Button>
            </div>
          )}

          {mounted && filteredPosts.length > 0 && (
            <div className="mt-32 text-center">
              <Button size="lg" className="h-16 px-12 rounded-none bg-black text-white hover:bg-accent transition-all duration-500 text-[10px] font-bold tracking-[0.4em] uppercase">
                Load More Archives
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-32 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/10 -skew-x-12 translate-x-20"></div>
        <div className="container mx-auto px-4 md:px-24 relative z-10">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <span className="text-xs font-bold tracking-[0.5em] text-accent uppercase">Strategic Intelligence</span>
              <h2 className="text-4xl md:text-5xl font-headline font-bold uppercase leading-tight">
                Subscribe to our <br /> Executive Insights
              </h2>
              <p className="text-lg font-light text-white/40">
                Direct intelligence on global expansion and funding architecture delivered to your headquarters.
              </p>
            </div>
            
            <form className="space-y-6 bg-white/5 p-12 backdrop-blur-sm border border-white/10">
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-widest uppercase text-white/40">Full Name</label>
                <Input placeholder="ENTER YOUR NAME" className="h-14 bg-white/10 border-white/20 rounded-none text-white focus:border-accent" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-widest uppercase text-white/40">Corporate Email</label>
                <Input type="email" placeholder="ENTER YOUR EMAIL" className="h-14 bg-white/10 border-white/20 rounded-none text-white focus:border-accent" />
              </div>
              <Button className="w-full h-16 bg-accent text-white hover:bg-white hover:text-black transition-all duration-500 rounded-none text-[10px] font-bold tracking-[0.4em] uppercase">
                Secure Subscription
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
