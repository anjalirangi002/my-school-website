import { Link } from "wouter";
import { Flag, Heart, Award, CheckCircle, GraduationCap, Users, Trophy, Star, Medal, BookOpen, Clock } from "lucide-react";
import { motion } from "framer-motion";
import PageHero from "@/components/layout/PageHero";
import { fadeUp, fadeLeft, fadeRight, stagger, inView } from "@/lib/animations";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-background page-enter">
      <PageHero
        image="/images/hero-2.jpg"
        alt="Sunrise Senior Secondary School campus with students"
        eyebrow="Established 2010 • CBSE Affiliated"
        title="About Sunrise School"
        subtitle="A legacy of academic rigor, character building and cultural values — nurturing young minds in Mago Majri, Kaithal since 2010."
      />

      <div className="container mx-auto px-4 md:px-6 pt-10 md:pt-16 pb-10 md:pb-16">

        {/* Mission, Vision, Core Values */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          variants={stagger}
          className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-24"
        >
          {[
            {
              icon: Flag,
              color: "bg-primary/10 text-primary",
              title: "Our Mission",
              body: "To provide high-quality education that balances academic excellence with character building and cultural values in a safe learning environment.",
            },
            {
              icon: Heart,
              color: "bg-secondary/10 text-secondary",
              title: "Our Vision",
              body: "To be a beacon of learning, empowering rural youth with the knowledge, skills, and ethical grounding needed to succeed globally while respecting their roots.",
            },
            {
              icon: CheckCircle,
              color: "bg-primary/10 text-primary",
              title: "Core Values",
              body: "Integrity, Discipline, Compassion, and Curiosity. We foster a culture where every student feels valued and motivated to achieve their best.",
            },
          ].map(({ icon: Icon, color, title, body }, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="p-8 bg-white rounded-3xl shadow-sm border border-border hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center mb-6`}>
                <Icon className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">{title}</h2>
              <p className="text-muted-foreground leading-relaxed">{body}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* History and Management */}
        <div className="mb-12 md:mb-24 bg-muted/30 rounded-3xl p-6 md:p-16 border border-border flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            variants={fadeLeft}
            className="w-full md:w-1/2"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Journey</h2>
            <div className="space-y-6 relative border-l-2 border-primary/20 pl-6 ml-3">
              <div className="relative">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[31px] top-1 border-4 border-white"></div>
                <h4 className="font-bold text-lg">2010 - Foundation</h4>
                <p className="text-muted-foreground mt-1">Established by the Sunrise Education Society to bring quality education to Mago Majri.</p>
              </div>
              <div className="relative">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[31px] top-1 border-4 border-white"></div>
                <h4 className="font-bold text-lg">Growth & Expansion</h4>
                <p className="text-muted-foreground mt-1">Expanded infrastructure, adding modern science labs and smart classrooms.</p>
              </div>
              <div className="relative">
                <div className="absolute w-4 h-4 bg-secondary rounded-full -left-[31px] top-1 border-4 border-white"></div>
                <h4 className="font-bold text-lg">Senior Secondary Status</h4>
                <p className="text-muted-foreground mt-1">CBSE affiliation up to Grade 12, offering all major academic streams.</p>
              </div>
            </div>
            <div className="mt-8 p-6 bg-white rounded-2xl border border-border">
              <h4 className="font-bold text-primary mb-2">Managed by Sunrise Education Society</h4>
              <p className="text-sm text-muted-foreground">A dedicated group committed to providing private, unaided, and premium education to the region.</p>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            variants={fadeRight}
            className="w-full md:w-1/2"
          >
            <img src="/images/hero.jpg" alt="School History" className="w-full h-auto rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-500" />
          </motion.div>
        </div>

        {/* School Achievements */}
        <div className="mb-12 md:mb-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4">School Achievements</h2>
            <p className="text-base md:text-lg text-muted-foreground">Milestones that define our commitment to excellence over the years.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Trophy, title: "100% Board Results", year: "5 Consecutive Years", desc: "Unmatched performance in CBSE Class 10 & 12 board examinations." },
              { icon: Star, title: "Best CBSE School Award", year: "Kaithal District 2023", desc: "Recognized for outstanding academic infrastructure and methodology." },
              { icon: Medal, title: "State-Level Sports Champions", year: "2024", desc: "Our athletes won gold in multiple state-level track and field events." },
              { icon: BookOpen, title: "Inter-school Science Olympiad", year: "Winners", desc: "Secured top ranks in regional science and mathematics olympiads." },
              { icon: Award, title: "Excellence in Cultural Events", year: "Regional Level", desc: "First prize in state-level group dance and drama competitions." },
              { icon: Users, title: "1000+ Successful Alumni", year: "Global Network", desc: "Our former students excel in top universities and varied professions." }
            ].map((achieve, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={inView}
                transition={{ delay: idx * 0.08, duration: 0.5, ease: "easeOut" }}
                className="bg-white p-6 rounded-2xl border border-border shadow-sm flex gap-4 hover:border-primary/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                  <achieve.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{achieve.title}</h4>
                  <span className="text-xs font-bold text-primary uppercase tracking-wider block my-1">{achieve.year}</span>
                  <p className="text-sm text-muted-foreground leading-relaxed">{achieve.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Principal's Detailed Message */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          variants={fadeUp}
          id="principal-message"
          className="bg-foreground text-white rounded-3xl p-6 md:p-16 shadow-2xl relative overflow-hidden mb-12 md:mb-24"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
          <div className="relative z-10 grid md:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={inView}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="md:col-span-4"
            >
              <img src="/images/principal.jpg" alt="Principal Mr. Khushi Ram" className="w-full aspect-[3/4] object-cover rounded-2xl shadow-lg border-4 border-white/10" />
            </motion.div>
            <div className="md:col-span-8 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Principal's Message</h2>
              <blockquote className="text-xl italic font-medium leading-relaxed text-white/90">
                "Welcome to Sunrise Senior Secondary School. Our journey started with a simple belief: every child, regardless of their background, deserves access to top-tier education.
                <br/><br/>
                We focus on holistic development. While our CBSE curriculum and 100% board results speak for our academic rigor, it is the character of our students that truly defines us. We invite you to join our family and partner with us in shaping a bright future for your child."
              </blockquote>
              <div className="pt-4 border-t border-white/20">
                <h4 className="font-bold text-2xl text-primary">Mr. Khushi Ram</h4>
                <p className="text-white/60 text-lg">Principal (M.A., B.Ed.)</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Faculty Overview */}
        <div className="mb-12 md:mb-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4">Our Dedicated Faculty</h2>
            <p className="text-base md:text-lg text-muted-foreground">Experienced educators committed to nurturing young minds.</p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            variants={stagger}
            className="grid md:grid-cols-3 gap-6 md:gap-8"
          >
            {[
              { icon: GraduationCap, color: "bg-primary/10 text-primary", title: "PGTs", sub: "Post Graduate Teachers", body: "Subject experts managing Senior Secondary classes (11th & 12th) across all specialized streams." },
              { icon: Users, color: "bg-secondary/10 text-secondary", title: "TGTs", sub: "Trained Graduate Teachers", body: "Highly qualified educators focusing on Middle and Secondary grades (6th to 10th)." },
              { icon: Heart, color: "bg-primary/10 text-primary", title: "PRTs", sub: "Primary Teachers", body: "Caring and patient educators handling Primary and Pre-Primary classes with a strong foundation approach." },
            ].map(({ icon: Icon, color, title, sub, body }, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="bg-white p-8 rounded-2xl border border-border text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-16 h-16 ${color} rounded-full mx-auto flex items-center justify-center mb-4`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-sm font-semibold text-primary mb-3">{sub}</p>
                <p className="text-muted-foreground text-sm">{body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Affiliation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          variants={fadeUp}
          className="max-w-4xl mx-auto bg-primary/5 p-8 md:p-12 rounded-3xl border border-primary/10"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-foreground text-center">Affiliation Details</h3>
          <ul className="grid sm:grid-cols-2 gap-6 text-muted-foreground">
            <li className="flex flex-col gap-1 border-b border-primary/10 pb-4">
              <span className="font-bold text-foreground">Board</span>
              <span>CBSE, New Delhi</span>
            </li>
            <li className="flex flex-col gap-1 border-b border-primary/10 pb-4">
              <span className="font-bold text-foreground">Affiliation No.</span>
              <span>531671</span>
            </li>
            <li className="flex flex-col gap-1 border-b border-primary/10 pb-4">
              <span className="font-bold text-foreground">School Code</span>
              <span>41650</span>
            </li>
            <li className="flex flex-col gap-1 border-b border-primary/10 pb-4">
              <span className="font-bold text-foreground">Type</span>
              <span>Co-educational, Private Unaided</span>
            </li>
            <li className="flex flex-col gap-1 border-b sm:border-none border-primary/10 pb-4 sm:pb-0">
              <span className="font-bold text-foreground">Classes</span>
              <span>Playway to Grade 12</span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="font-bold text-foreground">Medium</span>
              <span>English</span>
            </li>
          </ul>
        </motion.div>

      </div>
    </div>
  );
}
