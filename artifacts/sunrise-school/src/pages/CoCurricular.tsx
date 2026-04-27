import { motion } from "framer-motion";
import { Medal, Palette, Music, Rocket } from "lucide-react";

export default function CoCurricular() {
  return (
    <div className="flex flex-col min-h-screen pt-24 pb-16 bg-background">
      
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Co-curricular & Sports</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Education extends beyond the classroom. We focus on holistic development, uncovering hidden talents, and building physical and emotional resilience.
          </p>
        </div>
        
        <div className="space-y-24">
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                <Medal className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Sports & Physical Education</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                A healthy body houses a healthy mind. Our sports curriculum is designed to teach teamwork, discipline, and perseverance. Regular PT periods are mandatory for all grades.
              </p>
              <ul className="space-y-4 text-foreground font-medium">
                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary" /> Annual Sports Meets</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary" /> Inter-House Cricket & Volleyball</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary" /> Athletics and Track Events</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary" /> Indoor Games (Chess, Carrom)</li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <img src="/images/sports.png" alt="Sports Day" className="w-full h-[400px] object-cover rounded-3xl shadow-xl" />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/images/cultural.png" alt="Cultural Event" className="w-full h-[400px] object-cover rounded-3xl shadow-xl" />
            </div>
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 text-secondary-foreground mb-6">
                <Palette className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Cultural Activities & Arts</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We celebrate India's rich heritage through vibrant cultural festivals. Students are encouraged to express themselves creatively, building confidence and public speaking skills.
              </p>
              <ul className="space-y-4 text-foreground font-medium">
                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-secondary" /> Annual Day Celebrations</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-secondary" /> Folk Dance and Music Competitions</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-secondary" /> Festival Celebrations (Diwali, Holi, Independence Day)</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-secondary" /> Art, Craft, and Rangoli making</li>
              </ul>
            </div>
          </div>

        </div>

        <div className="mt-24 bg-primary text-white rounded-3xl p-8 md:p-12 text-center">
          <Rocket className="w-12 h-12 mx-auto mb-6 text-secondary" />
          <h2 className="text-3xl font-bold mb-4">Clubs & Societies</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Students can join various clubs to pursue their specific interests beyond academics.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">Eco Club</div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">Science Club</div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">Literary Society</div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">Maths Club</div>
          </div>
        </div>

      </div>
    </div>
  );
}
