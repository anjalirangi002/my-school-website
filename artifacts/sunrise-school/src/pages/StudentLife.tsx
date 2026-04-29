import { motion } from "framer-motion";
import { Music, Palette, Trophy, Users, Monitor, BookOpen, Globe, MessageSquare } from "lucide-react";

export default function StudentLife() {
  const clubs = [
    { name: "Science Club", icon: Globe },
    { name: "Literary Club", icon: BookOpen },
    { name: "Music & Dance", icon: Music },
    { name: "Eco Club", icon: Users },
    { name: "Sports Club", icon: Trophy },
    { name: "Computer Club", icon: Monitor },
    { name: "Art & Craft", icon: Palette },
    { name: "Debate Society", icon: MessageSquare }
  ];

  return (
    <div className="flex flex-col min-h-screen pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Student Life at Sunrise</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Education extends beyond the four walls of a classroom. Our vibrant campus life ensures every student finds their passion, builds confidence, and creates lifelong memories.
          </p>
        </div>

        {/* Sports & Physical Ed */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 md:order-1 relative rounded-3xl overflow-hidden shadow-lg h-[400px]">
            <img src="/images/sports.png" alt="Sports Activities" className="w-full h-full object-cover" />
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Sports & Physical Education</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe a healthy mind resides in a healthy body. Our expansive playground provides ample space for athletics, team sports, and daily physical exercises.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 bg-white p-3 rounded-lg border border-border shadow-sm">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="font-semibold">Annual Sports Meets</span>
              </li>
              <li className="flex items-center gap-3 bg-white p-3 rounded-lg border border-border shadow-sm">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="font-semibold">Inter-house Competitions</span>
              </li>
              <li className="flex items-center gap-3 bg-white p-3 rounded-lg border border-border shadow-sm">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="font-semibold">Professional Coaching</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Culture & Annual Functions */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Cultural Festivals & Annual Functions</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Celebrating our roots while embracing modern creativity. Our cultural calendar is packed with events that allow students to showcase their talents in performing arts.
            </p>
            <p className="text-muted-foreground">
              From the vibrant Annual Function to celebrating national festivals and cultural days, students actively participate in dances, drama, choir, and artistic displays that build stage confidence.
            </p>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-lg h-[400px]">
            <img src="/images/cultural.png" alt="Cultural Events" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Clubs and Co-Curricular */}
        <div className="mb-24 bg-primary/5 rounded-3xl p-8 md:p-16 border border-primary/10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Clubs & Societies</h2>
            <p className="text-lg text-muted-foreground">Discover new interests, develop leadership skills, and collaborate with peers.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {clubs.map((club, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-border flex flex-col items-center justify-center text-center gap-4 hover:shadow-md hover:border-primary/30 transition-all cursor-pointer group">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  <club.icon className="w-6 h-6" />
                </div>
                <span className="font-bold text-sm">{club.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Assembly & Excursions */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <div className="bg-foreground text-white rounded-3xl overflow-hidden relative group">
            <div className="absolute inset-0 bg-black/50 z-10 group-hover:bg-black/40 transition-colors"></div>
            <img src="/images/assembly.png" alt="Morning Assembly" className="absolute inset-0 w-full h-full object-cover" />
            <div className="relative z-20 p-8 h-[350px] flex flex-col justify-end">
              <h3 className="text-2xl font-bold mb-3">Morning Assembly</h3>
              <p className="text-white/80">Starting the day with meditation, national news, thought of the day, and student-led presentations to build public speaking skills.</p>
            </div>
          </div>
          <div className="bg-primary text-white rounded-3xl overflow-hidden relative group">
            <div className="absolute inset-0 bg-black/30 z-10 group-hover:bg-black/20 transition-colors"></div>
            <img src="/images/bus.png" alt="School Trips" className="absolute inset-0 w-full h-full object-cover opacity-60" />
            <div className="relative z-20 p-8 h-[350px] flex flex-col justify-end">
              <h3 className="text-2xl font-bold mb-3">School Trips & Excursions</h3>
              <p className="text-white/90">Educational tours, picnics, and science exhibition visits that provide hands-on learning experiences outside the classroom.</p>
            </div>
          </div>
        </div>

        {/* Student Achievements Gallery */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Student Achievements & Life</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
             <img src="/images/classroom.png" alt="Classroom learning" className="w-full h-64 object-cover rounded-2xl shadow-sm hover:scale-[1.02] transition-transform" />
             <img src="/images/library.png" alt="Library reading" className="w-full h-64 object-cover rounded-2xl shadow-sm hover:scale-[1.02] transition-transform" />
             <img src="/images/science-lab.png" alt="Science Lab practicals" className="w-full h-64 object-cover rounded-2xl shadow-sm hover:scale-[1.02] transition-transform" />
          </div>
        </div>

      </div>
    </div>
  );
}
