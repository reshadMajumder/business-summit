
"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { cn } from "@/lib/utils"

interface NavbarProps {
  variant?: "transparent" | "solid"
}

export function Navbar({ variant = "transparent" }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  const logo = PlaceHolderImages.find(img => img.id === 'app-logo')

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "OUR STORY", href: "/our-story" },
    { name: "InvEX", href: "/invex" },
    { name: "SUMMIT", href: "/summit" },
    { name: "SHOP", href: "/shop" },
    { name: "BLOGS", href: "/blogs" },
  ]

  const isScrolled = mounted ? (scrolled || variant === "solid") : (variant === "solid")

  return (
    <>
      <nav 
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-500",
          isScrolled ? "bg-white/95 backdrop-blur-xl border-b border-black/5 py-3 shadow-sm" : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-4 md:px-24 flex items-center justify-between">
          <Link href="/" className="group flex items-center">
            {logo && (
              <div className={cn("relative transition-all duration-300", isScrolled ? "h-10 w-40" : "h-14 w-52")}>
                <Image 
                  src={logo.imageUrl} 
                  alt="Business Summit" 
                  fill 
                  className={cn(
                    "object-contain transition-all duration-300",
                    isScrolled ? "brightness-0" : "brightness-100"
                  )}
                  priority
                />
              </div>
            )}
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={cn(
                  "text-[9px] font-bold tracking-[0.3em] transition-all duration-300 hover:text-accent flex items-center",
                  isScrolled ? "text-black" : "text-white/80"
                )}
              >
                {link.name === "InvEX" ? (
                  <>Inv<span className="text-accent">EX</span></>
                ) : link.name}
              </Link>
            ))}
            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-black/10">
              <Link href="/login">
                <Button 
                  variant="ghost"
                  className={cn(
                    "rounded-none h-10 text-[9px] font-bold tracking-[0.2em] uppercase transition-all duration-300",
                    isScrolled ? "text-black hover:text-accent" : "text-white/80 hover:text-white"
                  )}
                >
                  LOG IN
                </Button>
              </Link>
              <Link href="/register">
                <Button 
                  className={cn(
                    "rounded-none px-6 h-10 text-[9px] font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-xl",
                    isScrolled ? "bg-black text-white hover:bg-accent" : "bg-white text-black hover:bg-accent hover:text-white"
                  )}
                >
                  JOIN
                </Button>
              </Link>
            </div>
          </div>

          <button 
            className="lg:hidden p-2 relative z-[60]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            suppressHydrationWarning
          >
            {mobileMenuOpen ? (
              <X className="text-black" />
            ) : (
              <Menu className={isScrolled ? "text-black" : "text-white"} />
            )}
          </button>
        </div>
      </nav>

      <div 
        className={cn(
          "fixed inset-0 z-[55] lg:hidden transition-all duration-500",
          mobileMenuOpen ? "visible" : "invisible"
        )}
      >
        <div 
          className={cn(
            "absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500",
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setMobileMenuOpen(false)}
        />

        <div 
          className={cn(
            "absolute top-0 right-0 h-full w-[280px] bg-white shadow-2xl transition-transform duration-500 ease-out flex flex-col p-8",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex-1 flex flex-col justify-center gap-8 mt-12">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-headline font-bold uppercase tracking-[0.2em] text-black hover:text-accent transition-colors border-b border-black/5 pb-2"
              >
                {link.name === "InvEX" ? (
                  <>Inv<span className="text-accent">EX</span></>
                ) : link.name}
              </Link>
            ))}
            <Link 
              href="/login" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-headline font-bold uppercase tracking-[0.2em] text-accent hover:text-black transition-colors"
            >
              LOG IN
            </Link>
          </div>

          <div className="mt-auto">
            <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full h-16 bg-black text-white rounded-none text-[10px] font-bold tracking-[0.4em] uppercase">
                JOIN NOW
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
