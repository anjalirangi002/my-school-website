import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, BookOpen, Users, Building, ShieldCheck, Bus, FlaskConical, MonitorPlay, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-black/40">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero.png" 
            alt="Sunrise Senior Secondary School" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6 mt-16 text-center text-white">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
            className="max-w-4xl mx-auto flex flex-col items-center gap-6"
          >
            <motion.span variants={fadeIn} className="px-4 py-1.5 rounded-full bg-primary text-sm font-semibold tracking-wide uppercase shadow-sm border border-primary-foreground/20">
              CBSE Affiliated • No. 531671 • Est. 2010
            </motion.span>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold leading-tight text-white drop-shadow-lg">
              Shaping Bright Futures with <span className="text-secondary">Quality Education</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-white/90 max-w-2xl font-medium drop-shadow-md">
              A vibrant learning community dedicated to academic excellence and holistic development.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold h-14 px-8 text-lg rounded-full shadow-xl">
                <Link href="/contact">Apply Now <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm font-bold h-14 px-8 text-lg rounded-full">
                <Link href="/about">Discover More</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Admission Open Banner */}
      <div className="bg-foreground text-white py-4 shadow-inner relative z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
            <span className="font-bold text-lg md:text-xl tracking-wide">Admission Open for Academic Session 2024-25</span>
            <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
              <Link href="/contact">Inquire Now</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* 2. Stats Row */}
      <section className="bg-white py-16 border-b border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-border">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="flex flex-col items-center text-center px-4">
              <span className="text-4xl md:text-5xl font-bold mb-2 text-primary">2010</span>
              <span className="text-muted-foreground font-medium uppercase tracking-wide text-sm">Established</span>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="flex flex-col items-center text-center px-4">
              <span className="text-4xl md:text-5xl font-bold mb-2 text-primary">100%</span>
              <span className="text-muted-foreground font-medium uppercase tracking-wide text-sm">Board Results</span>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="flex flex-col items-center text-center px-4">
              <span className="text-4xl md:text-5xl font-bold mb-2 text-primary">4</span>
              <span className="text-muted-foreground font-medium uppercase tracking-wide text-sm">Senior Secondary Streams</span>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="flex flex-col items-center text-center px-4">
              <span className="text-4xl md:text-5xl font-bold mb-2 text-primary">24/7</span>
              <span className="text-muted-foreground font-medium uppercase tracking-wide text-sm">CCTV Security</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Welcome Preview */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerChildren}
              className="flex flex-col gap-6"
            >
              <motion.div variants={fadeIn} className="flex items-center gap-2 text-primary font-bold tracking-wider uppercase">
                <Sun className="w-5 h-5" />
                Welcome to Sunrise
              </motion.div>
              <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Rooted in Values, Growing Towards Excellence.
              </motion.h2>
              <motion.p variants={fadeIn} className="text-lg text-muted-foreground leading-relaxed">
                Located in the heart of Vill. Mago Majri, Sunrise Senior Secondary School has been a beacon of learning since 2010. We blend modern CBSE-affiliated education with deep-rooted cultural values to nurture confident, capable, and compassionate young minds.
              </motion.p>
              <motion.div variants={fadeIn} className="mt-6">
                <Button asChild variant="outline" className="h-12 px-6 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all font-semibold">
                  <Link href="/about">Read Our Story</Link>
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]"
            >
              <img src="/images/campus-day.png" alt="Campus Day View" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Principal's Message Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10 max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center shadow-sm">
            <div className="w-full md:w-1/3 shrink-0">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                <img src="/images/principal.png" alt="Mr. Khushi Ram" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="w-full md:w-2/3 space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Principal's Message</h2>
              <blockquote className="text-xl md:text-2xl font-medium text-muted-foreground italic leading-relaxed">
                "Education is not just about academic results; it's about building character. We strive every day to ensure our students leave Sunrise not just as scholars, but as responsible citizens ready to lead."
              </blockquote>
              <div>
                <h4 className="font-bold text-lg text-primary">Mr. Khushi Ram</h4>
                <p className="text-muted-foreground">Principal (M.A., B.Ed.)</p>
              </div>
              <div className="pt-4">
                <Button asChild variant="link" className="text-primary font-bold px-0 text-lg">
                  <Link href="/about">Read Full Message <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Campus Highlights */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Campus Highlights</h2>
            <p className="text-lg text-muted-foreground">Modern infrastructure designed to support comprehensive academic and physical development.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative h-64 rounded-2xl overflow-hidden shadow-sm border border-border">
              <img src="/images/classroom.png" alt="Smart Classrooms" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                <div className="flex items-center gap-3 text-white">
                  <MonitorPlay className="w-6 h-6 text-secondary" />
                  <h3 className="text-xl font-bold">Smart Classrooms</h3>
                </div>
              </div>
            </div>
            
            <div className="group relative h-64 rounded-2xl overflow-hidden shadow-sm border border-border">
              <img src="/images/science-lab.png" alt="Science Labs" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                <div className="flex items-center gap-3 text-white">
                  <FlaskConical className="w-6 h-6 text-secondary" />
                  <h3 className="text-xl font-bold">Science Labs</h3>
                </div>
              </div>
            </div>

            <div className="group relative h-64 rounded-2xl overflow-hidden shadow-sm border border-border">
              <img src="/images/library.png" alt="Library" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                <div className="flex items-center gap-3 text-white">
                  <BookOpen className="w-6 h-6 text-secondary" />
                  <h3 className="text-xl font-bold">Rich Library</h3>
                </div>
              </div>
            </div>

            <div className="group relative h-64 rounded-2xl overflow-hidden shadow-sm border border-border">
              <img src="/images/bus.png" alt="School Transport" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                <div className="flex items-center gap-3 text-white">
                  <Bus className="w-6 h-6 text-secondary" />
                  <h3 className="text-xl font-bold">School Transport</h3>
                </div>
              </div>
            </div>

            <div className="group relative h-64 rounded-2xl overflow-hidden shadow-sm border border-border">
              <img src="/images/assembly.png" alt="Morning Assembly" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                <div className="flex items-center gap-3 text-white">
                  <Users className="w-6 h-6 text-secondary" />
                  <h3 className="text-xl font-bold">Morning Assembly</h3>
                </div>
              </div>
            </div>

            <div className="group relative h-64 rounded-2xl overflow-hidden shadow-sm border border-border">
              <img src="/images/playground.png" alt="Playground" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                <div className="flex items-center gap-3 text-white">
                  <ShieldCheck className="w-6 h-6 text-secondary" />
                  <h3 className="text-xl font-bold">Playground</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Final CTA */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Join the Sunrise Family</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-primary-foreground/90 leading-relaxed">
            Admissions are open for the upcoming academic session. Give your child the foundation they deserve in a school that feels like home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold h-14 px-12 text-lg rounded-full shadow-lg">
              <Link href="/contact">Admission Inquiry</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
