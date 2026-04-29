import { motion } from "framer-motion";
import { BookOpen, TrendingUp, Atom, Calculator, Stethoscope, HeartPulse, BarChart3, Landmark, CheckCircle, GraduationCap, MonitorPlay, FlaskConical, Target, Trophy } from "lucide-react";

export default function Academic() {
  return (
    <div className="flex flex-col min-h-screen pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6 text-sm font-bold tracking-wide uppercase"
          >
            <BookOpen className="w-4 h-4" />
            CBSE Curriculum
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight"
          >
            Academic Excellence
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            At Sunrise, we focus on a holistic learning approach based on the CBSE pattern, preparing students for future success through critical thinking, digital learning, and comprehensive evaluation.
          </motion.p>
        </div>

        {/* Education Structure Timeline */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Education Structure</h2>
            <p className="text-lg text-muted-foreground">A seamless progression from early childhood to young adulthood.</p>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            {/* Horizontal Line connecting cards (visible on md+) */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-primary/20 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
              {[
                { stage: "Pre-Primary", classes: "Playway to KG", color: "border-sky-300" },
                { stage: "Primary", classes: "Class 1 to 5", color: "border-sky-400" },
                { stage: "Middle", classes: "Class 6 to 8", color: "border-blue-400" },
                { stage: "Secondary", classes: "Class 9 & 10", color: "border-blue-500" },
                { stage: "Senior Secondary", classes: "Class 11 & 12", color: "border-primary" }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`bg-white p-6 rounded-2xl shadow-sm border-t-4 ${item.color} text-center hover:-translate-y-2 transition-transform`}
                >
                  <div className="w-10 h-10 rounded-full bg-primary/5 mx-auto mb-4 flex items-center justify-center text-primary font-bold">
                    {idx + 1}
                  </div>
                  <h4 className="font-bold text-lg mb-1">{item.stage}</h4>
                  <p className="text-sm text-muted-foreground font-medium">{item.classes}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CBSE Curriculum & CCE */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="bg-white p-8 md:p-12 border border-border shadow-sm rounded-3xl"
           >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                 <BookOpen className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">CBSE Curriculum</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sunrise is proudly affiliated with the Central Board of Secondary Education (CBSE, Affiliation No. 531671). We strictly follow the NCERT syllabus, designed to provide a uniform, robust, and nationally recognized education standard.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-foreground/80 font-medium">
                  <CheckCircle className="w-5 h-5 text-primary" /> Concept-based learning over rote memorization.
                </li>
                <li className="flex items-center gap-3 text-foreground/80 font-medium">
                  <CheckCircle className="w-5 h-5 text-primary" /> Interdisciplinary approach to subjects.
                </li>
                <li className="flex items-center gap-3 text-foreground/80 font-medium">
                  <CheckCircle className="w-5 h-5 text-primary" /> Preparation for national competitive exams.
                </li>
              </ul>
           </motion.div>
           
           <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="bg-primary/5 p-8 md:p-12 border border-primary/10 rounded-3xl"
           >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                 <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Continuous & Comprehensive Evaluation</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our CCE approach ensures students are evaluated holistically. We assess not just academic (scholastic) achievements but also life skills, sports, and arts (co-scholastic) abilities throughout the year.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-foreground/80 font-medium">
                  <div className="w-2 h-2 rounded-full bg-primary" /> Formative Assessments (FA) for ongoing feedback.
                </li>
                <li className="flex items-center gap-3 text-foreground/80 font-medium">
                  <div className="w-2 h-2 rounded-full bg-primary" /> Summative Assessments (SA) at term-end.
                </li>
                <li className="flex items-center gap-3 text-foreground/80 font-medium">
                  <div className="w-2 h-2 rounded-full bg-primary" /> Stress-free grading system to foster growth.
                </li>
              </ul>
           </motion.div>
        </div>

        {/* Streams Offered */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Streams Offered (Class 11 & 12)</h2>
            <p className="text-lg text-muted-foreground">Comprehensive academic pathways for senior secondary students to pursue their career goals.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Medical */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border border-border shadow-sm hover:border-primary/50 transition-all flex gap-6"
            >
              <div className="w-16 h-16 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                <HeartPulse className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Medical</h3>
                <p className="text-sm font-semibold text-primary mb-3">Physics, Chemistry, Biology, English + Optional</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Ideal for students aspiring for careers in Medicine, Dentistry, Pharmacy, Biotechnology, and life sciences.
                </p>
              </div>
            </motion.div>
            
            {/* Non-Medical */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8 border border-border shadow-sm hover:border-primary/50 transition-all flex gap-6"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Atom className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Non-Medical</h3>
                <p className="text-sm font-semibold text-primary mb-3">Physics, Chemistry, Math, English + Optional</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Designed for future Engineers, Architects, Data Scientists, and pure science researchers.
                </p>
              </div>
            </motion.div>

            {/* Commerce */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 border border-border shadow-sm hover:border-primary/50 transition-all flex gap-6"
            >
              <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                <BarChart3 className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Commerce</h3>
                <p className="text-sm font-semibold text-primary mb-3">Accountancy, Business Studies, Economics, English + Math/IP</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  For students aiming for Chartered Accountancy, Business Management, Finance, and Economics.
                </p>
              </div>
            </motion.div>

            {/* Arts / Humanities */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-8 border border-border shadow-sm hover:border-primary/50 transition-all flex gap-6"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-50 text-slate-600 flex items-center justify-center shrink-0">
                <Landmark className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Arts / Humanities</h3>
                <p className="text-sm font-semibold text-primary mb-3">History, Political Science, Geography, Economics, English + Optional</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Perfect for Civil Services, Law, Journalism, Psychology, Mass Communication, and academia.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Board Result Excellence & Smart Learning */}
        <div className="grid lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-5 bg-foreground text-white rounded-3xl p-10 flex flex-col justify-center relative overflow-hidden shadow-xl">
             <div className="absolute -right-10 -top-10 w-48 h-48 bg-primary/30 rounded-full blur-3xl"></div>
             <Trophy className="w-12 h-12 text-secondary mb-6 relative z-10" />
             <h3 className="text-3xl font-bold mb-4 relative z-10">Board Result Excellence</h3>
             <p className="text-white/80 leading-relaxed mb-8 relative z-10">
               We proudly maintain a consistent 100% pass rate in CBSE Class 10 and 12 board examinations, with a significant majority securing distinctions.
             </p>
             <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 relative z-10 border border-white/20">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-lg">Overall Pass Rate</span>
                  <span className="text-secondary font-black text-2xl">100%</span>
                </div>
                <div className="w-full bg-black/20 h-2 rounded-full overflow-hidden">
                  <div className="bg-secondary w-full h-full rounded-full"></div>
                </div>
             </div>
          </div>

          <div className="lg:col-span-7 bg-muted/30 border border-border rounded-3xl p-10">
             <h3 className="text-3xl font-bold mb-8 text-foreground">Smart Learning Ecosystem</h3>
             <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
                  <MonitorPlay className="w-8 h-8 text-primary mb-4" />
                  <h4 className="font-bold text-lg mb-2">Smart Classrooms</h4>
                  <p className="text-sm text-muted-foreground">Interactive digital boards and curated e-learning content bring lessons to life.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
                  <FlaskConical className="w-8 h-8 text-primary mb-4" />
                  <h4 className="font-bold text-lg mb-2">Advanced Labs</h4>
                  <p className="text-sm text-muted-foreground">Well-equipped Physics, Chemistry, Biology, and Computer Science laboratories.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
                  <BookOpen className="w-8 h-8 text-primary mb-4" />
                  <h4 className="font-bold text-lg mb-2">Digital Library</h4>
                  <p className="text-sm text-muted-foreground">Vast collection of reference books, encyclopedias, and digital academic resources.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
                  <GraduationCap className="w-8 h-8 text-primary mb-4" />
                  <h4 className="font-bold text-lg mb-2">Expert Coaching</h4>
                  <p className="text-sm text-muted-foreground">Specialized attention and doubt-clearing sessions for board exam preparation.</p>
                </div>
             </div>
          </div>

        </div>

      </div>
    </div>
  );
}
