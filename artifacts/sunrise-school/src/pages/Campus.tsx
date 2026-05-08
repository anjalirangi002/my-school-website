import { motion } from "framer-motion";
import { MonitorPlay, Shield, Bus, Library, FlaskConical, Trophy } from "lucide-react";

export default function Campus() {
  return (
    <div className="flex flex-col min-h-screen pt-24 pb-16 bg-background">
      
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Campus & Facilities</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our campus in Vill. Mago Majri provides a safe, stimulating, and modern environment designed to support holistic student development.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="rounded-3xl overflow-hidden shadow-sm border border-border bg-white group flex flex-col">
            <div className="aspect-[4/3] overflow-hidden bg-muted/40">
              <img src="/images/classroom.jpg" alt="Smart Classrooms" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-8 flex-1">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <MonitorPlay className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Smart Classrooms</h3>
              <p className="text-muted-foreground leading-relaxed">Spacious, well-ventilated classrooms equipped with smart boards and digital learning aids to make learning interactive and engaging.</p>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-sm border border-border bg-white group flex flex-col">
            <div className="aspect-[4/3] overflow-hidden bg-muted/40">
              <img src="/images/science-lab.jpg" alt="Science Labs" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-8 flex-1">
              <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-6">
                <FlaskConical className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Modern Laboratories</h3>
              <p className="text-muted-foreground leading-relaxed">Fully equipped, safety-compliant Physics, Chemistry, Biology, and Computer Science labs to foster practical, hands-on scientific learning.</p>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-sm border border-border bg-white group flex flex-col">
            <div className="aspect-[4/3] overflow-hidden bg-muted/40">
              <img src="/images/library.jpg" alt="Library" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-8 flex-1">
              <div className="w-12 h-12 bg-secondary/10 text-secondary-foreground rounded-xl flex items-center justify-center mb-6">
                <Library className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Resourceful Library</h3>
              <p className="text-muted-foreground leading-relaxed">A quiet sanctuary housing a vast collection of academic books, reference materials, encyclopedias, journals, and fiction to inculcate reading habits.</p>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-sm border border-border bg-white group flex flex-col">
            <div className="aspect-[4/3] overflow-hidden bg-muted/40">
              <img src="/images/playground.jpg" alt="Playground" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-8 flex-1">
              <div className="w-12 h-12 bg-green-500/10 text-green-600 rounded-xl flex items-center justify-center mb-6">
                <Trophy className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Sports Grounds</h3>
              <p className="text-muted-foreground leading-relaxed">A sprawling playground catering to athletics, cricket, volleyball, and outdoor games, along with designated play areas for younger children.</p>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-sm border border-border bg-white group flex flex-col">
            <div className="aspect-[4/3] overflow-hidden bg-muted/40">
              <img src="/images/bus.jpg" alt="Transport Fleet" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-8 flex-1">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <Bus className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Transport Fleet</h3>
              <p className="text-muted-foreground leading-relaxed">A dedicated fleet of school buses ensuring safe and reliable transportation for students across surrounding villages and areas.</p>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-sm border border-border bg-white group flex flex-col">
            <div className="h-56 overflow-hidden bg-muted flex items-center justify-center">
              <Shield className="w-24 h-24 text-muted-foreground/30" />
            </div>
            <div className="p-8 flex-1">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-3">24/7 CCTV Safety</h3>
              <p className="text-muted-foreground leading-relaxed">The entire campus is under constant CCTV surveillance. A secure boundary wall and trained security personnel ensure student safety at all times.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
