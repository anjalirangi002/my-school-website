import { motion } from "framer-motion";
import { Music, Palette, Trophy, Users, Monitor, BookOpen, Globe, MessageSquare } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import { fadeUp, scaleIn, stagger, staggerFast, inView } from "@/lib/animations";

const EVENTS = [
  {
    src: "/images/cultural.png",
    title: "Annual Cultural Function",
    desc: "Students shine in dance, drama, choir and artistic performances every year.",
    span: "col-span-2",
    height: "h-[260px] md:h-[380px]",
  },
  {
    src: "/images/assembly.png",
    title: "Morning Assembly",
    desc: "Daily assembly builds discipline, confidence and public speaking skills.",
    span: "col-span-1",
    height: "h-[260px] md:h-[380px]",
  },
  {
    src: "/images/sports.png",
    title: "Sports & Athletics",
    desc: "Inter-house tournaments, kabaddi, kho-kho and annual sports meets.",
    span: "col-span-1",
    height: "h-[220px] md:h-[320px]",
  },
  {
    src: "/images/lab-students.png",
    title: "Science Lab Sessions",
    desc: "Hands-on experiments that spark curiosity and scientific thinking.",
    span: "col-span-1",
    height: "h-[220px] md:h-[320px]",
  },
  {
    src: "/images/playground.png",
    title: "Playground & Open Grounds",
    desc: "Spacious grounds for free play, athletics and daily physical activity.",
    span: "col-span-1",
    height: "h-[220px] md:h-[320px]",
  },
  {
    src: "/images/library-students.png",
    title: "Library Hour",
    desc: "A quiet space for reading, research and discovering new worlds.",
    span: "col-span-1",
    height: "h-[220px] md:h-[320px]",
  },
  {
    src: "/images/campus-day.png",
    title: "Republic Day & Parades",
    desc: "Patriotic celebrations with flag hoisting, marching and cultural programmes.",
    span: "col-span-1",
    height: "h-[220px] md:h-[320px]",
  },
  {
    src: "/images/bus.png",
    title: "School Trips & Excursions",
    desc: "Educational tours and picnics — learning that goes beyond the classroom.",
    span: "col-span-1",
    height: "h-[220px] md:h-[320px]",
  },
  {
    src: "/images/classroom.png",
    title: "Smart Classroom Learning",
    desc: "Interactive boards, group discussions and personalised attention in every class.",
    span: "col-span-1",
    height: "h-[220px] md:h-[320px]",
  },
];

const GALLERY = [
  { src: "/images/hero-2.png", alt: "Campus life at Sunrise" },
  { src: "/images/science-lab.png", alt: "Science lab" },
  { src: "/images/library.png", alt: "School library" },
  { src: "/images/sports.png", alt: "Sports grounds" },
  { src: "/images/cultural.png", alt: "Cultural programme" },
  { src: "/images/campus-day.png", alt: "School celebrations" },
];

const CLUBS = [
  { name: "Science Club", icon: Globe },
  { name: "Literary Club", icon: BookOpen },
  { name: "Music & Dance", icon: Music },
  { name: "Eco Club", icon: Users },
  { name: "Sports Club", icon: Trophy },
  { name: "Computer Club", icon: Monitor },
  { name: "Art & Craft", icon: Palette },
  { name: "Debate Society", icon: MessageSquare },
];

export default function StudentLife() {
  return (
    <div className="flex flex-col min-h-screen bg-background page-enter">
      <PageHero
        image="/images/hero-student-life.png"
        alt="Sunrise students performing at a cultural event"
        eyebrow="Beyond the Classroom"
        title="Student Life at Sunrise"
        subtitle="A vibrant campus where every student finds their passion — sports, culture, science, art and lifelong friendships."
      />

      <div className="container mx-auto px-4 md:px-6 pt-10 md:pt-16 pb-10 md:pb-16">

        {/* Events & Activities Photo Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          variants={fadeUp}
          className="mb-6"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Events & Activities</h2>
          <p className="text-sm md:text-base text-muted-foreground">Life at Sunrise is full of moments worth celebrating.</p>
        </motion.div>

        {/* Row 1: featured (2-col) + side */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4"
        >
          {EVENTS.slice(0, 3).map((ev, idx) => (
            <motion.div
              key={idx}
              variants={scaleIn}
              className={`relative rounded-2xl overflow-hidden group shadow-sm cursor-pointer ${ev.span === "col-span-2" ? "md:col-span-2" : ""} ${ev.height}`}
            >
              <img
                src={ev.src}
                alt={ev.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                <h3 className="text-white font-bold text-lg leading-tight">{ev.title}</h3>
                <p className="text-white/80 text-sm mt-1 leading-snug">{ev.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Row 2: 3 equal columns */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4"
        >
          {EVENTS.slice(3, 6).map((ev, idx) => (
            <motion.div
              key={idx}
              variants={scaleIn}
              className={`relative rounded-2xl overflow-hidden group shadow-sm cursor-pointer ${ev.height}`}
            >
              <img
                src={ev.src}
                alt={ev.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                <h3 className="text-white font-bold text-lg leading-tight">{ev.title}</h3>
                <p className="text-white/80 text-sm mt-1 leading-snug">{ev.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Row 3: 3 equal columns */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-24"
        >
          {EVENTS.slice(6, 9).map((ev, idx) => (
            <motion.div
              key={idx}
              variants={scaleIn}
              className={`relative rounded-2xl overflow-hidden group shadow-sm cursor-pointer ${ev.height}`}
            >
              <img
                src={ev.src}
                alt={ev.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                <h3 className="text-white font-bold text-lg leading-tight">{ev.title}</h3>
                <p className="text-white/80 text-sm mt-1 leading-snug">{ev.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Clubs & Societies */}
        <div className="mb-12 md:mb-24 bg-primary/5 rounded-3xl p-6 md:p-16 border border-primary/10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            variants={fadeUp}
            className="text-center max-w-2xl mx-auto mb-8 md:mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Clubs & Societies</h2>
            <p className="text-sm md:text-base text-muted-foreground">Discover new interests, develop leadership and collaborate with peers.</p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            variants={staggerFast}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5"
          >
            {CLUBS.map((club, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="bg-white p-5 rounded-2xl border border-border flex flex-col items-center justify-center text-center gap-3 hover:shadow-md hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <club.icon className="w-6 h-6" />
                </div>
                <span className="font-bold text-sm">{club.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Campus Life Gallery */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          variants={fadeUp}
          className="mb-6 md:mb-8 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Campus Life</h2>
          <p className="text-sm md:text-base text-muted-foreground">Every day at Sunrise is a memory in the making.</p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          variants={staggerFast}
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {GALLERY.map(({ src, alt }, idx) => (
            <motion.div
              key={idx}
              variants={scaleIn}
              className="overflow-hidden rounded-2xl shadow-sm group"
            >
              <img
                src={src}
                alt={alt}
                className="w-full h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}
