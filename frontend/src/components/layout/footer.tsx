
import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export function Footer() {
  const logo = PlaceHolderImages.find(img => img.id === 'app-logo')

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5 py-24 text-white">
      <div className="container mx-auto px-4 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 lg:gap-32">
          <div className="md:col-span-1 space-y-8">
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
            <p className="text-sm font-light text-white/40 leading-relaxed">
              An architectural exploration of global leadership and strategic innovation. Designed for the executive mind.
            </p>
            <div className="flex gap-6">
              <Linkedin className="w-5 h-5 text-white/20 hover:text-accent cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-white/20 hover:text-accent cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-white/20 hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>

          <div className="md:col-span-1 space-y-6">
            <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-white/80">Navigation</h4>
            <div className="flex flex-col gap-4 text-sm font-light text-white/40">
              <Link href="/" className="hover:text-accent transition-colors">Home</Link>
              <Link href="#" className="hover:text-accent transition-colors">Our Story</Link>
              <Link href="#" className="hover:text-accent transition-colors">InvEX</Link>
              <Link href="#" className="hover:text-accent transition-colors">Become A Client</Link>
            </div>
          </div>

          <div className="md:col-span-1 space-y-6">
            <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-white/80">Information</h4>
            <div className="flex flex-col gap-4 text-sm font-light text-white/40">
              <Link href="#" className="hover:text-accent transition-colors">Summit</Link>
              <Link href="#" className="hover:text-accent transition-colors">News</Link>
              <Link href="#" className="hover:text-accent transition-colors">Webinar</Link>
              <Link href="#" className="hover:text-accent transition-colors">Contact</Link>
            </div>
          </div>

          <div className="md:col-span-1 space-y-6">
            <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-white/80">Headquarters</h4>
            <p className="text-sm font-light text-white/40 leading-relaxed">
              One World Trade Center<br />
              New York, NY 10007<br />
              info@businesssummit.com
            </p>
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
