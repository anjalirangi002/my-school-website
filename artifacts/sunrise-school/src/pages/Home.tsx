import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, BookOpen, Users, ShieldCheck, Bus, FlaskConical, MonitorPlay, Sun, Calendar, Star, Award, Monitor, GraduationCap, ClipboardCheck, Quote } from "lucide-react";
import schoolLogo from "@assets/sunrise_logo.png";
import { Button } from "@/components/ui/button";
import { NOTICES as ALL_NOTICES } from "@/data/notices";
import TestimonialsMarquee from "@/components/TestimonialsMarquee";
import { fadeUp, fadeLeft, fadeRight, scaleIn, stagger, inView } from "@/lib/animations";

const HERO_IMAGE = {
  src: "/images/hero-main.jpg",
  alt: "Sunrise Senior Secondary School campus view at sunset",
};

// Show only the latest 4 notices on the Home page; the full list lives on /updates.
const NOTICES = ALL_NOTICES.slice(0, 4);

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
      {/* 1. Hero Section — single static photo */}
      <section className="relative min-h-screen md:h-[90vh] md:min-h-[600px] flex items-center overflow-hidden bg-black/40">
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_IMAGE.src}
            alt={HERO_IMAGE.alt}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6 mt-16 text-white flex flex-col gap-5 md:gap-8">
          {/* Text */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
            className="mr-auto max-w-lg flex flex-col items-start gap-3 md:gap-4 text-left"
          >
            <motion.span variants={fadeLeft} className="px-4 py-1.5 rounded-full bg-primary text-xs font-semibold tracking-wide uppercase shadow-sm border border-primary-foreground/20">
              CBSE Affiliated • No. 531671 • Est. 2010
            </motion.span>

            <motion.h1 variants={fadeLeft} className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight text-white drop-shadow-lg">
              Shaping Bright Futures with <span className="text-secondary">Quality Education</span>
            </motion.h1>

            <motion.p variants={fadeLeft} className="text-sm sm:text-base md:text-lg text-white/90 font-medium drop-shadow-md">
              A vibrant learning community dedicated to academic excellence and holistic development.
            </motion.p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center"
          >
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold h-12 md:h-14 px-6 md:px-8 text-base md:text-lg rounded-full shadow-xl">
              <Link href="/contact">Apply Now <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm font-bold h-12 md:h-14 px-6 md:px-8 text-base md:text-lg rounded-full">
              <Link href="/about">Discover More</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 2. Admission Open Banner */}
      <div className="bg-foreground text-white py-4 shadow-inner relative z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
            <span className="font-bold text-lg md:text-xl tracking-wide">Admission Open for Academic Session 2026-27</span>
            <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
              <Link href="/contact">Inquire Now</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* 3. School Introduction */}
      <section className="py-14 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerChildren}
            className="max-w-4xl mx-auto text-center space-y-5 md:space-y-6"
          >
            <motion.div variants={fadeIn} className="flex items-center justify-center gap-2 text-primary font-bold tracking-wider uppercase mb-4">
              <Sun className="w-5 h-5" />
              Welcome to Sunrise
            </motion.div>
            <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
              Rooted in Values, Growing Towards Excellence.
            </motion.h2>
            <motion.p variants={fadeIn} className="text-base md:text-xl text-muted-foreground leading-relaxed">
              Founded in 2010 by the Sunrise Education Society, we are committed to providing top-tier CBSE-affiliated education. We blend modern teaching methodologies with deep-rooted cultural values to nurture confident, capable, and compassionate young minds ready to shape the future.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 4. Notice Section / Latest Updates */}
      <section className="py-12 md:py-16 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 mb-8 md:mb-12">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-2 md:mb-4">Latest Updates & Notices</h2>
              <p className="text-base md:text-lg text-muted-foreground">Stay informed with the latest announcements from our school.</p>
            </div>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-full">
               <Link href="/updates" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "auto" })}>View All Notices</Link>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {NOTICES.map((notice, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-all flex flex-col sm:flex-row gap-6"
              >
                <div className="flex flex-col items-center justify-center sm:w-24 shrink-0 border-r border-border sm:pr-6">
                  <Calendar className="w-6 h-6 text-primary mb-2" />
                  <span className="text-xs font-bold text-muted-foreground uppercase text-center">{notice.date}</span>
                </div>
                <div className="flex-1 space-y-3">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full inline-block ${notice.color}`}>
                    {notice.badge}
                  </span>
                  <h3 className="text-xl font-bold text-foreground">{notice.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{notice.desc}</p>
                  <Link
                    href="/updates"
                    onClick={() => sessionStorage.setItem("scrollToNotice", notice.id)}
                    className="inline-flex items-center text-primary text-sm font-semibold hover:underline"
                  >
                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Stats Row */}
      <section className="bg-white py-10 md:py-16 border-b border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-x-0 md:divide-x divide-border">
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
              <span className="text-muted-foreground font-medium uppercase tracking-wide text-sm">Streams</span>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="flex flex-col items-center text-center px-4">
              <span className="text-4xl md:text-5xl font-bold mb-2 text-primary">24/7</span>
              <span className="text-muted-foreground font-medium uppercase tracking-wide text-sm">CCTV Security</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Principal's Message Section */}
      <section className="py-14 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            variants={stagger}
            className="bg-primary/5 rounded-3xl p-6 md:p-12 border border-primary/10 max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-center shadow-sm"
          >
            <motion.div variants={scaleIn} className="w-full md:w-1/3 shrink-0 max-w-[280px] md:max-w-none mx-auto md:mx-0">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                <img src="/images/principal.jpg" alt="Mr. Khushi Ram" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" />
              </div>
            </motion.div>
            <motion.div variants={fadeRight} className="w-full md:w-2/3 space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Principal's Message</h2>
              <blockquote className="text-base md:text-xl font-medium text-muted-foreground italic leading-relaxed relative pl-4 sm:pl-8">
                <Quote className="hidden sm:block absolute -top-2 -left-2 w-8 h-8 text-primary/20 rotate-180" />
                "Education is not just about academic results; it's about building character. We strive every day to ensure our students leave Sunrise not just as scholars, but as responsible citizens ready to lead."
              </blockquote>
              <div>
                <h4 className="font-bold text-lg text-primary">Mr. Khushi Ram</h4>
                <p className="text-muted-foreground">Principal (M.A., B.Ed.)</p>
              </div>
              <div className="pt-4">
                <Button asChild variant="link" className="text-primary font-bold px-0 text-lg">
                  <Link href="/about#principal-message">Read Full Message <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 7. Why Parents Trust Us */}
      <section className="py-14 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto mb-10 md:mb-16"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">Why Parents Trust Us</h2>
            <p className="text-base md:text-lg text-muted-foreground">We provide an environment where children feel secure, engaged, and inspired.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Award, title: "100% Board Results", desc: "Consistent academic excellence with top district performers year after year." },
              { icon: ShieldCheck, title: "Safe Campus", desc: "Secure environment with 24/7 CCTV surveillance and trained staff." },
              { icon: Monitor, title: "Smart Classrooms", desc: "Digital learning tools and interactive boards for modern education." },
              { icon: GraduationCap, title: "Experienced Faculty", desc: "Highly qualified and passionate educators dedicated to student growth." },
              { icon: Bus, title: "School Transport", desc: "Safe, reliable, and wide-reaching transportation for a comfortable commute." },
              { icon: ClipboardCheck, title: "Strong Discipline", desc: "Instilling core values and structured habits for lifelong success." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Campus Highlights */}
      <section className="py-14 md:py-24 bg-white border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto mb-10 md:mb-16"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">Campus Highlights</h2>
            <p className="text-base md:text-lg text-muted-foreground">Modern infrastructure designed to support comprehensive academic and physical development.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: "classroom.jpg", icon: MonitorPlay, title: "Smart Classrooms" },
              { img: "science-lab.jpg", icon: FlaskConical, title: "Science Labs" },
              { img: "library.jpg", icon: BookOpen, title: "Rich Library" },
              { img: "bus.jpg", icon: Bus, title: "School Transport" },
              { img: "assembly.jpg", icon: Users, title: "Morning Assembly" },
              { img: "playground.jpg", icon: ShieldCheck, title: "Playground" }
            ].map((item, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.1 }}
                 className="group relative h-64 rounded-2xl overflow-hidden shadow-sm border border-border"
               >
                 <img src={`/images/${item.img}`} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                   <div className="flex items-center gap-3 text-white">
                     <item.icon className="w-6 h-6 text-secondary" />
                     <h3 className="text-xl font-bold">{item.title}</h3>
                   </div>
                 </div>
               </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. What Parents Say About Us — auto-scrolling marquee */}
      <section className="py-14 md:py-24 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-10 md:mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-4">
              <Star className="w-4 h-4 fill-primary" />
              Trusted by Parents
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">What Parents Say About Us</h2>
            <p className="text-base md:text-lg text-muted-foreground">Real voices from our Sunrise family — sharing why they trust us with their children's future.</p>
          </motion.div>
        </div>
        <TestimonialsMarquee />
      </section>

      {/* 10. Final CTA */}
      <section className="py-14 md:py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            variants={fadeUp}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Join the Sunrise Family</h2>
            <p className="text-base md:text-xl mb-8 md:mb-10 max-w-2xl mx-auto text-primary-foreground/90 leading-relaxed">
              Admissions are open for the upcoming academic session. Give your child the foundation they deserve in a school that feels like home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold h-14 px-12 text-lg rounded-full shadow-lg hover:scale-105 transition-transform duration-200">
                <Link href="/contact">Admission Inquiry</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* 11. School Location Map */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            variants={fadeUp}
            className="flex flex-col md:flex-row gap-0 items-stretch bg-white border border-border rounded-3xl overflow-hidden shadow-sm"
          >
            <div className="p-6 md:p-12 md:w-1/3 flex flex-col gap-4">
               <h2 className="text-3xl font-bold text-foreground mb-2">Find Us On The Map</h2>
               <p className="text-muted-foreground leading-relaxed">
                 Sunrise Senior Secondary School is conveniently located in Mago Majri, easily accessible from Kaithal and surrounding areas via our dedicated transport fleet.
               </p>
               <div className="mt-4 space-y-4">
                 <div className="flex items-start gap-3">
                   <img
                     src={schoolLogo}
                     alt="Sunrise Senior Secondary School logo"
                     className="w-10 h-10 object-contain shrink-0"
                   />
                   <div>
                     <h4 className="font-bold text-sm">Address</h4>
                     <p className="text-sm text-muted-foreground mt-1">Village Mago Majri (Mago Manas), Khanouri Road, Near Kaithal, Haryana 136027</p>
                   </div>
                 </div>
               </div>
               <Button asChild variant="outline" className="mt-6 border-primary text-primary hover:bg-primary hover:text-white rounded-full w-fit">
                 <a href="https://maps.google.com/?q=29.8175491,76.3477644" target="_blank" rel="noreferrer">Get Directions</a>
               </Button>
            </div>
            <div className="w-full md:w-2/3 h-[400px] md:h-[500px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1748!2d76.3477644!3d29.8175491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3911e7d72929f60b%3A0x3b9667c80e4de39!2sSunrise%20Senior%20Secondary%20School%2C%20Mago%20Manas%2C%20Kaithal!5e0!3m2!1sen!2sin!4v1714836000000!5m2!1sen!2sin&hl=en" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Sunrise School Location Map"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
