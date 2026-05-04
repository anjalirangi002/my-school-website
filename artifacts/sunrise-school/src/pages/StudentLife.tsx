import { motion } from "framer-motion";
import { Music, Palette, Trophy, Users, Monitor, BookOpen, Globe, MessageSquare } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import { fadeUp, fadeLeft, fadeRight, scaleIn, stagger, staggerFast, inView } from "@/lib/animations";

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
    <div className="flex flex-col min-h-screen bg-background page-enter">
      <PageHero
        image="/images/hero-student-life.png"
        alt="Sunrise students performing at a cultural event"
        eyebrow="Beyond the Classroom"
        title="Student Life at Sunrise"
        subtitle="A vibrant campus where every student finds their passion — sports, culture, science, art and lifelong friendships."
      />

      <div className="container mx-auto px-4 md:px-6 pt-16 pb-16">

        {/* Interactive Learning */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            variants={fadeLeft}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-foreground">Interactive Learning</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our classrooms are designed to be dynamic spaces of inquiry and engagement. With limited batch sizes, we ensure every student receives personalized attention.
            </p>
            <p className="text-muted-foreground">
              Teachers act as facilitators, encouraging students to ask questions, participate in discussions, and collaborate on group projects. Smart boards and audio-visual aids make learning an immersive experience.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            variants={fadeRight}
            className="relative rounded-3xl overflow-hidden shadow-lg h-[400px]"
          >
            <img src="/images/classroom.png" alt="Students in Classroom" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </motion.div>
        </div>

        {/* Sports & Physical Ed */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            variants={fadeLeft}
            className="order-2 md:order-1 relative rounded-3xl overflow-hidden shadow-lg h-[400px]"
          >
            <img src="/images/sports.png" alt="Sports Activities" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            variants={fadeRight}
            className="order-1 md:order-2 space-y-6"
          >
            <h2 className="text-3xl font-bold text-foreground">Sports & Physical Education</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe a healthy mind resides in a healthy body. Our expansive playground provides ample space for athletics, team sports, and daily physical exercises.
            </p>
            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={inView}
              variants={stagger}
              className="space-y-3"
            >
              {["Annual Sports Meets", "Inter-house Competitions", "Professional Coaching"].map((item) => (
                <motion.li key={item} variants={fadeUp} className="flex items-center gap-3 bg-white p-3 rounded-lg border border-border shadow-sm">
                  <div className="w-2 h-2 bg-primary rounded-full shrink-0"></div>
                  <span className="font-semibold">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>

        {/* Culture & Annual Functions */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            variants={fadeLeft}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-foreground">Cultural Festivals & Annual Functions</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Celebrating our roots while embracing modern creativity. Our cultural calendar is packed with events that allow students to showcase their talents in performing arts.
            </p>
            <p className="text-muted-foreground">
              From the vibrant Annual Function to celebrating national festivals and cultural days, students actively participate in dances, drama, choir, and artistic displays that build stage confidence.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            variants={fadeRight}
            className="relative rounded-3xl overflow-hidden shadow-lg h-[400px]"
          >
            <img src="/images/cultural.png" alt="Cultural Events" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </motion.div>
        </div>

        {/* Clubs and Co-Curricular */}
        <div className="mb-24 bg-primary/5 rounded-3xl p-8 md:p-16 border border-primary/10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Clubs & Societies</h2>
            <p className="text-lg text-muted-foreground">Discover new interests, develop leadership skills, and collaborate with peers.</p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            variants={staggerFast}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
          >
            {clubs.map((club, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="bg-white p-6 rounded-2xl border border-border flex flex-col items-center justify-center text-center gap-4 hover:shadow-md hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <club.icon className="w-6 h-6" />
                </div>
                <span className="font-bold text-sm">{club.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Assembly & Excursions */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          variants={stagger}
          className="grid md:grid-cols-2 gap-8 mb-24"
        >
          <motion.div
            variants={fadeLeft}
            className="bg-foreground text-white rounded-3xl overflow-hidden relative group shadow-sm"
          >
            <div className="absolute inset-0 bg-black/50 z-10 group-hover:bg-black/40 transition-colors duration-300"></div>
            <img src="/images/assembly.png" alt="Morning Assembly" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="relative z-20 p-8 h-[350px] flex flex-col justify-end">
              <h3 className="text-2xl font-bold mb-3">Morning Assembly</h3>
              <p className="text-white/80">Starting the day with meditation, national news, thought of the day, and student-led presentations to build public speaking skills.</p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeRight}
            className="bg-primary text-white rounded-3xl overflow-hidden relative group shadow-sm"
          >
            <div className="absolute inset-0 bg-black/30 z-10 group-hover:bg-black/20 transition-colors duration-300"></div>
            <img src="/images/bus.png" alt="School Trips" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
            <div className="relative z-20 p-8 h-[350px] flex flex-col justify-end">
              <h3 className="text-2xl font-bold mb-3">School Trips & Excursions</h3>
              <p className="text-white/90">Educational tours, picnics, and science exhibition visits that provide hands-on learning experiences outside the classroom.</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Campus Life Gallery */}
        <div>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            variants={fadeUp}
            className="text-3xl font-bold text-center mb-12"
          >
            Campus Life Gallery
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            variants={staggerFast}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
          >
            {[
              { src: "/images/classroom.png", alt: "Classroom learning" },
              { src: "/images/library.png", alt: "Library reading" },
              { src: "/images/science-lab.png", alt: "Science Lab practicals" },
            ].map(({ src, alt }, idx) => (
              <motion.div key={idx} variants={scaleIn} className="overflow-hidden rounded-2xl shadow-sm group">
                <img
                  src={src}
                  alt={alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </div>
  );
}
