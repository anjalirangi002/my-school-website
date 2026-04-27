import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, BookOpen, Users, Trophy, ChevronRight, GraduationCap, Building, Star, Award, ShieldCheck } from "lucide-react";
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
            <motion.span variants={fadeIn} className="px-4 py-1.5 rounded-full bg-primary/90 text-sm font-semibold tracking-wide uppercase shadow-sm">
              Admissions Open for 2024-25
            </motion.span>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold leading-tight text-white drop-shadow-lg">
              A Brighter Future Starts at <span className="text-secondary">Sunrise</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-white/90 max-w-2xl font-medium drop-shadow-md">
              Empowering rural minds with quality CBSE education from Playway to Grade 12 in Vill. Mago Majri.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold h-14 px-8 text-lg rounded-full shadow-xl">
                <Link href="/admissions">Apply Now <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm font-bold h-14 px-8 text-lg rounded-full">
                <Link href="/about">Discover Our Story</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Stats / Intro Banner */}
      <section className="bg-primary py-12 text-primary-foreground relative z-20 -mt-8 mx-4 md:mx-auto max-w-6xl rounded-2xl shadow-2xl">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-primary-foreground/20">
            <div className="flex flex-col items-center text-center px-4">
              <span className="text-4xl md:text-5xl font-bold mb-2 text-white">2010</span>
              <span className="text-primary-foreground/80 font-medium">Established</span>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <span className="text-4xl md:text-5xl font-bold mb-2 text-white">100%</span>
              <span className="text-primary-foreground/80 font-medium">Board Results</span>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <span className="text-4xl md:text-5xl font-bold mb-2 text-white">4</span>
              <span className="text-primary-foreground/80 font-medium">Academic Streams</span>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <span className="text-4xl md:text-5xl font-bold mb-2 text-white">24/7</span>
              <span className="text-primary-foreground/80 font-medium">CCTV Safety</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. About Section */}
      <section className="py-24 bg-background">
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
                <div className="w-12 h-1 bg-primary rounded-full"></div>
                Welcome to Sunrise
              </motion.div>
              <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Rooted in Values, Growing Towards Excellence.
              </motion.h2>
              <motion.p variants={fadeIn} className="text-lg text-muted-foreground leading-relaxed">
                Located in the heart of Vill. Mago Majri, Sunrise Senior Secondary School has been a beacon of learning since 2010. We blend modern CBSE-affiliated education with deep-rooted cultural values to nurture confident, capable, and compassionate young minds.
              </motion.p>
              <motion.div variants={fadeIn} className="flex flex-col gap-4 mt-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                    <BookOpen className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-foreground">Holistic Curriculum</h3>
                    <p className="text-muted-foreground mt-1">From playful beginnings to rigorous Senior Secondary board prep across Medical, Non-Medical, Commerce, and Arts streams.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 mt-2">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <Users className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-foreground">Dedicated Faculty</h3>
                    <p className="text-muted-foreground mt-1">Led by Principal Mr. Khushi Ram, our experienced teachers treat every child's potential as a personal responsibility.</p>
                  </div>
                </div>
              </motion.div>
              <motion.div variants={fadeIn} className="mt-6">
                <Button asChild variant="outline" className="h-12 px-6 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all font-semibold">
                  <Link href="/about">Read Principal's Message</Link>
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl h-[600px]"
            >
              <img src="/images/assembly.png" alt="Morning Assembly" className="w-full h-full object-cover" />
              <div className="absolute inset-0 border-4 border-white/20 rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us / Features */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Sunrise School?</h2>
            <p className="text-lg text-muted-foreground">We provide a nurturing environment where children are encouraged to excel in all areas of life.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div whileHover={{ y: -10 }} className="bg-white p-8 rounded-2xl shadow-sm border border-border">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Academic Excellence</h3>
              <p className="text-muted-foreground">CBSE affiliated curriculum with a track record of 100% board results and comprehensive evaluation.</p>
            </motion.div>
            <motion.div whileHover={{ y: -10 }} className="bg-white p-8 rounded-2xl shadow-sm border border-border">
              <div className="w-14 h-14 bg-secondary/10 text-secondary-foreground rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Safe Campus</h3>
              <p className="text-muted-foreground">A secure learning environment with 24/7 CCTV surveillance, well-maintained facilities, and safe transport.</p>
            </motion.div>
            <motion.div whileHover={{ y: -10 }} className="bg-white p-8 rounded-2xl shadow-sm border border-border">
              <div className="w-14 h-14 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-6">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Co-Curricular Focus</h3>
              <p className="text-muted-foreground">Balanced development through sports, cultural activities, arts, and inter-school competitions.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Academic Streams (Senior Secondary) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <img src="/images/science-lab.png" alt="Science Lab" className="rounded-2xl shadow-xl w-full h-[500px] object-cover" />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Senior Secondary Streams</h2>
              <p className="text-lg text-muted-foreground">
                We offer diverse academic pathways for Grade 11 and 12 students to pursue their career dreams under expert guidance.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-xl border border-border">
                  <div className="w-3 h-3 bg-primary rounded-full" />
                  <span className="font-bold text-lg">Medical</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-xl border border-border">
                  <div className="w-3 h-3 bg-primary rounded-full" />
                  <span className="font-bold text-lg">Non-Medical</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-xl border border-border">
                  <div className="w-3 h-3 bg-secondary rounded-full" />
                  <span className="font-bold text-lg">Commerce</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-xl border border-border">
                  <div className="w-3 h-3 bg-secondary rounded-full" />
                  <span className="font-bold text-lg">Arts / Humanities</span>
                </div>
              </div>
              <div className="pt-4">
                <Button asChild variant="link" className="text-primary font-bold px-0 text-lg">
                  <Link href="/academics">Explore Full Curriculum <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Campus Highlights */}
      <section className="py-24 bg-foreground text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">A Campus Designed for Growth</h2>
              <p className="text-white/70 text-lg">Our facilities provide the perfect backdrop for academic and personal development in a rural setting.</p>
            </div>
            <Button asChild variant="outline" className="mt-6 md:mt-0 bg-transparent border-white/30 text-white hover:bg-white hover:text-foreground">
              <Link href="/campus">View All Facilities</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2 relative h-[300px] rounded-2xl overflow-hidden group">
              <img src="/images/classroom.png" alt="Classrooms" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <h3 className="text-2xl font-bold">Smart Classrooms</h3>
              </div>
            </div>
            <div className="relative h-[300px] rounded-2xl overflow-hidden group">
              <img src="/images/library.png" alt="Library" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <h3 className="text-xl font-bold">Rich Library</h3>
              </div>
            </div>
            <div className="relative h-[300px] rounded-2xl overflow-hidden group">
              <img src="/images/playground.png" alt="Playground" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <h3 className="text-xl font-bold">Playground</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Principal's Note Teaser */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-border max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/3 shrink-0">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                <img src="/images/principal.png" alt="Mr. Khushi Ram" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="w-full md:w-2/3 space-y-6">
              <div className="flex gap-2 text-secondary">
                <Star className="fill-current w-6 h-6" />
                <Star className="fill-current w-6 h-6" />
                <Star className="fill-current w-6 h-6" />
                <Star className="fill-current w-6 h-6" />
                <Star className="fill-current w-6 h-6" />
              </div>
              <blockquote className="text-xl md:text-2xl font-medium text-foreground italic leading-relaxed">
                "Education is not just about academic results; it's about building character. We strive every day to ensure our students leave Sunrise not just as scholars, but as responsible citizens ready to lead."
              </blockquote>
              <div>
                <h4 className="font-bold text-lg text-primary">Mr. Khushi Ram</h4>
                <p className="text-muted-foreground">Principal (M.A., B.Ed.)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Join the Sunrise Family</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-primary-foreground/90 leading-relaxed">
            Admissions are open for the upcoming academic session. Give your child the foundation they deserve in a school that feels like home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold h-14 px-12 text-lg rounded-full shadow-lg">
              <Link href="/admissions">Admissions Process</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-primary-foreground/10 hover:bg-primary-foreground/20 text-white border-white/30 font-bold h-14 px-12 text-lg rounded-full">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
