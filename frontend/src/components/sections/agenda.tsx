
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, Clock, MapPin } from "lucide-react"

const sessions = [
  {
    time: "09:00 AM",
    title: "Global Economic Shifts 2025",
    location: "Grand Ballroom",
    track: "Keynote",
    speaker: "Julian Thorne",
    size: "large"
  },
  {
    time: "11:30 AM",
    title: "Sustainability in High Fashion",
    location: "Studio 4",
    track: "Strategy",
    speaker: "Elena Rossi"
  },
  {
    time: "01:00 PM",
    title: "The Architecture of AI",
    location: "Innovation Hub",
    track: "Tech",
    speaker: "Dr. Aris Chen"
  },
  {
    time: "02:30 PM",
    title: "Future of Decentralized Finance",
    location: "Financial Suite",
    track: "Finance",
    speaker: "Marcus Vane"
  },
  {
    time: "04:00 PM",
    title: "Leadership in Crisis",
    location: "Executive Lounge",
    track: "Management",
    speaker: "Sarah Jenkins"
  }
]

export function Agenda() {
  return (
    <section className="py-32 bg-background border-y border-black/5">
      <div className="container mx-auto px-4 md:px-24">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <span className="text-xs font-bold tracking-[0.4em] text-accent uppercase">Architecture</span>
            <h2 className="text-5xl md:text-7xl font-headline font-bold uppercase leading-none">The <br />Agenda</h2>
          </div>
          <p className="max-w-md text-right text-muted-foreground font-light text-lg">
            A modular sequence of high-impact strategic dialogues and masterclasses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sessions.map((session, i) => (
            <div 
              key={i} 
              className={`group relative p-10 bg-white border border-black/5 hover:border-accent transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-sm ${session.size === 'large' ? 'md:col-span-2' : ''}`}
            >
              <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                <ArrowUpRight className="w-6 h-6 text-accent" />
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground tracking-widest uppercase">
                    <Clock className="w-4 h-4" />
                    {session.time}
                  </div>
                  <Badge variant="outline" className="rounded-none px-3 py-1 text-[10px] uppercase font-bold tracking-widest border-black/10">
                    {session.track}
                  </Badge>
                </div>
                <h3 className={`font-headline font-bold uppercase leading-tight ${session.size === 'large' ? 'text-4xl' : 'text-2xl'}`}>
                  {session.title}
                </h3>
              </div>

              <div className="mt-12 space-y-4">
                <div className="flex items-center gap-3 text-xs font-light text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  {session.location}
                </div>
                <div className="pt-4 border-t border-black/5 flex items-center justify-between">
                  <span className="text-xs uppercase font-bold tracking-widest text-primary/40">Speaker</span>
                  <span className="text-sm font-headline font-bold uppercase">{session.speaker}</span>
                </div>
              </div>
              
              {/* Decorative accent element */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-accent transition-all duration-500 group-hover:w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
