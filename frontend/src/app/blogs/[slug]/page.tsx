
"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, User } from "lucide-react"
import { posts } from "@/lib/blog-data"
import { use } from "react"
import { notFound } from "next/navigation"

export default function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const post = posts.find(p => p.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="relative min-h-screen bg-background">
      <Navbar variant="solid" />
      
      {/* Blog Detail Hero */}
      <section className="relative pt-48 pb-24 bg-white">
        <div className="container mx-auto px-4 md:px-24">
          <Link href="/blogs" className="inline-flex items-center gap-3 text-[10px] font-bold tracking-[0.3em] uppercase text-accent hover:text-primary transition-colors mb-12">
            <ArrowLeft className="w-4 h-4" />
            Back to Insights
          </Link>
          
          <div className="max-w-5xl space-y-10">
            <div className="space-y-6">
              <span className="px-4 py-2 bg-accent text-white text-[9px] font-bold tracking-widest uppercase inline-block">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-7xl font-headline font-bold uppercase leading-tight">
                {post.title}
              </h1>
            </div>

            <div className="flex items-center gap-8 text-[10px] font-bold tracking-[0.3em] text-muted-foreground uppercase border-y border-black/5 py-8">
              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-accent" />
                {post.date}
              </div>
              <div className="flex items-center gap-3">
                <User className="w-4 h-4 text-accent" />
                BY {post.author}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-white">
        <div className="container mx-auto px-4 md:px-24">
          <div className="relative aspect-[21/9] overflow-hidden bg-muted">
            <Image 
              src={post.image} 
              alt={post.title} 
              fill 
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-24">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-xl prose-neutral max-w-none">
              <p className="text-xl md:text-2xl font-light leading-relaxed text-foreground first-letter:text-6xl first-letter:font-headline first-letter:font-bold first-letter:text-accent first-letter:mr-3 first-letter:float-left">
                {post.content}
              </p>
            </div>
            
            <div className="mt-20 pt-20 border-t border-black/5">
              <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="space-y-2">
                  <p className="text-[10px] font-bold tracking-[0.3em] text-muted-foreground uppercase">Author Profile</p>
                  <h4 className="text-2xl font-headline font-bold uppercase">{post.author}</h4>
                </div>
                <div className="flex gap-4">
                  <Button className="h-14 px-8 rounded-none bg-black text-white hover:bg-accent transition-all text-[10px] font-bold tracking-[0.3em] uppercase">
                    Share Insight
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Footer CTA */}
      <section className="py-32 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-24 text-center">
          <div className="max-w-2xl mx-auto space-y-10">
            <h2 className="text-4xl font-headline font-bold uppercase">Ready to scale your business?</h2>
            <p className="text-white/60 font-light leading-relaxed">
              Join the next Business Summit and connect with global leaders who can take your company to the next level of financial performance.
            </p>
            <Link href="/mentoring">
              <Button className="h-16 px-12 rounded-none bg-accent text-white hover:bg-white hover:text-black transition-all text-[10px] font-bold tracking-[0.4em] uppercase">
                Become A Client
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
