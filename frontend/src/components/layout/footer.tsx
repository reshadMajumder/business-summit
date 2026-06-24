
import Link from "next/link"
import Image from "next/image"
import { Twitter, Linkedin, Instagram } from "lucide-react"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export function Footer() {
  const logo = PlaceHolderImages.find(img => img.id === 'app-logo')

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Our Story", href: "/our-story" },
    { name: "InvEX", href: "/invex" },
    { name: "SUMMIT", href: "/summit" },
    { name: "WEBINARS", href: "/webinar" },
    { name: "Shop", href: "/shop" },
    { name: "Editorial Core", href: "/blogs" },
  ]

  const infoLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
    { name: "Contact Us", href: "/contact" },
  ]

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5 py-24 text-white">
      <div className="container mx-auto px-4 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 lg:gap-32">
          <div className="md:col-span-2 space-y-12">
            <div className="flex items-center">
              {logo && (
                <div className="relative h-16 w-56">
                  <Image 
                    src={logo.imageUrl} 
                    alt="Business Summit" 
                    fill 
                    className="object-contain object-left"
                  />
                </div>
              )}
            </div>
            <div className="space-y-4">
              <p className="text-sm font-bold tracking-[0.3em] text-accent uppercase">Global Presence</p>
              <p className="text-xl font-headline font-bold text-white/80 leading-relaxed max-w-lg">
                Canada | Malaysia | Kosovo | Portugal | Nigeria | UAE | Bangladesh 
              </p>
            </div>
            <div className="flex gap-6">
              <Link href="https://www.linkedin.com/company/bsummitdotnet/posts/?feedView=all" target="_blank">
                <Linkedin className="w-5 h-5 text-white/20 hover:text-accent cursor-pointer transition-colors" />
              </Link>
              <Twitter className="w-5 h-5 text-white/20 hover:text-accent cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-white/20 hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>

          <div className="md:col-span-1 space-y-6">
            <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-white/80">Navigation</h4>
            <div className="flex flex-col gap-4 text-sm font-light text-white/40">
              {navLinks.map((link) => (
                link.name === "InvEX" ? (
                  <div key={link.name} className="flex items-center gap-1 opacity-50 cursor-not-allowed">
                    Inv<span className="text-accent">EX</span>
                  </div>
                ) : (
                  <Link key={link.name} href={link.href} className="hover:text-accent transition-colors flex items-center gap-1">
                    {link.name}
                  </Link>
                )
              ))}
            </div>
          </div>

          <div className="md:col-span-1 space-y-6">
            <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-white/80">Information</h4>
            <div className="flex flex-col gap-4 text-sm font-light text-white/40">
              {infoLinks.map((link) => (
                <Link key={link.name} href={link.href} className="hover:text-accent transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] font-bold tracking-[0.2em] text-white/20 uppercase">
            © 2024 Business Summit. All Rights Reserved.
          </p>
          <div className="flex items-center gap-8 text-[10px] font-bold tracking-[0.2em] text-white/20 uppercase">
            <span>Powered by Summit Intel</span>
            <span className="w-1 h-1 bg-accent rounded-full"></span>
            <span>Corporate Prestige</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
