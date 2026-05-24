
"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export function Navbar() {
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

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "OUR STORY", href: "#" },
    { name: "INVEX", href: "#" },
    { name: "SUMMIT", href: "#" },
    { name: "NEWS", href: "#" },
    { name: "WEBINAR", href: "#" },
    { name: "BECOME A CLIENT", href: "#" },
  ]

  const isScrolled = mounted ? scrolled : false

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/95 backdrop-blur-xl border-b border-black/5 py-3 shadow-sm" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-24 flex items-center justify-between">
        <Link href="/" className="group flex items-center">
          {logo && (
            <div className={`relative transition-all duration-300 ${isScrolled ? "h-10 w-40" : "h-14 w-52"}`}>
              <Image 
                src={logo.imageUrl} 
                alt="Business Summit" 
                fill 
                className={`object-contain transition-all duration-300 ${isScrolled ? "brightness-0" : "drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"}`}
                priority
              />
            </div>
          )}
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`text-[9px] font-bold tracking-[0.3em] transition-all duration-300 hover:text-accent ${
                isScrolled ? "text-black" : "text-white/80"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button 
            className={`rounded-none px-6 h-10 text-[9px] font-bold tracking-[0.2em] uppercase transition-all duration-300 ${
              isScrolled ? "bg-black text-white" : "bg-white text-black hover:bg-white/90"
            }`}
          >
            REGISTER
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={isScrolled ? "text-black" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-black" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] bg-white z-40 lg:hidden animate-in fade-in slide-in-from-top duration-300">
          <div className="flex flex-col items-center justify-center h-full gap-6 p-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-headline font-bold uppercase tracking-widest text-black hover:text-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Button className="w-full h-14 bg-accent text-white rounded-none text-xs font-bold tracking-[0.3em] uppercase">
              REGISTER NOW
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
