import { motion } from "framer-motion";
import { Trophy, TrendingUp, BookOpen, Target, CheckCircle2 } from "lucide-react";

export default function Result() {
  return (
    <div className="flex flex-col min-h-screen pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header Hero */}
        <div className="bg-foreground text-white rounded-3xl p-8 md:p-16 mb-16 relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/30 rounded-full blur-3xl translate-x-1/3 -translate-y-1/4"></div>
           <div className="relative z-10 max-w-3xl">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6 text-sm font-semibold tracking-wide">
               <Trophy className="w-4 h-4 text-secondary" />
               Academic Excellence
             </div>
             <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Consistent 100% Board Results</h1>
             <p className="text-lg md:text-xl text-white/80 leading-relaxed">
               At Sunrise Senior Secondary School, our academic rigor and personalized attention ensure that every student reaches their full potential in CBSE examinations.
             </p>
           </div>
        </div>

        {/* 100% Stat Highlight */}
        <div className="bg-white border-2 border-primary/20 rounded-3xl p-8 md:p-12 mb-24 shadow-sm text-center max-w-4xl mx-auto">
           <div className="flex flex-col items-center justify-center gap-4">
              <span className="text-7xl md:text-8xl font-black text-primary drop-shadow-sm tracking-tighter">100%</span>
              <span className="text-2xl md:text-3xl font-bold text-foreground">Pass Rate in CBSE Board Exams</span>
              <div className="w-24 h-1 bg-secondary rounded-full mt-4"></div>
              <p className="text-muted-foreground mt-4 max-w-2xl text-lg">
                A testament to the hard work of our students and the dedication of our experienced faculty. Year after year, our students clear the boards with flying colors.
              </p>
           </div>
        </div>

        {/* Toppers Section */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Our Shining Stars</h2>
          
          <h3 className="text-2xl font-bold text-primary mb-6 border-b border-border pb-2">Class 12 Toppers</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {[1, 2, 3].map((i) => (
              <div key={`c12-${i}`} className="bg-white p-6 rounded-2xl shadow-sm border border-border flex flex-col items-center text-center">
                 <div className="w-24 h-24 bg-muted rounded-full mb-4 border-4 border-primary/10 flex items-center justify-center">
                   <Trophy className="w-8 h-8 text-primary/40" />
                 </div>
                 <h4 className="font-bold text-lg mb-1">Student Topper {i}</h4>
                 <p className="text-primary font-semibold">9{8 - i}.4%</p>
                 <p className="text-sm text-muted-foreground mt-2">Medical / Non-Medical</p>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-secondary mb-6 border-b border-border pb-2">Class 10 Toppers</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={`c10-${i}`} className="bg-white p-6 rounded-2xl shadow-sm border border-border flex flex-col items-center text-center">
                 <div className="w-24 h-24 bg-muted rounded-full mb-4 border-4 border-secondary/20 flex items-center justify-center">
                   <Trophy className="w-8 h-8 text-secondary/50" />
                 </div>
                 <h4 className="font-bold text-lg mb-1">Student Topper {i}</h4>
                 <p className="text-secondary font-bold text-lg">9{9 - i}.2%</p>
                 <p className="text-sm text-muted-foreground mt-2">All Subjects</p>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Breakdown */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
           <div className="bg-muted/30 p-8 rounded-3xl border border-border">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Target className="w-6 h-6 text-primary" /> Class 10 Performance
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our Class 10 students consistently perform above the national average, with a significant percentage securing distinctions in Science, Mathematics, and English.
              </p>
              <ul className="space-y-4">
                <li className="flex justify-between items-center bg-white p-4 rounded-xl border border-border">
                  <span className="font-semibold">Pass Percentage</span>
                  <span className="text-primary font-bold">100%</span>
                </li>
                <li className="flex justify-between items-center bg-white p-4 rounded-xl border border-border">
                  <span className="font-semibold">Distinctions (75%+)</span>
                  <span className="text-primary font-bold">65%</span>
                </li>
              </ul>
           </div>
           
           <div className="bg-muted/30 p-8 rounded-3xl border border-border">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-primary" /> Class 12 Stream-wise
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Senior Secondary students receive targeted coaching for their chosen streams, ensuring they are ready for higher education and competitive exams.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-semibold w-24">Medical</span>
                  <div className="flex-1 mx-4 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[100%] rounded-full"></div>
                  </div>
                  <span className="font-bold">100% Pass</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="font-semibold w-24">Non-Medical</span>
                  <div className="flex-1 mx-4 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[100%] rounded-full"></div>
                  </div>
                  <span className="font-bold">100% Pass</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="font-semibold w-24">Commerce</span>
                  <div className="flex-1 mx-4 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-secondary w-[100%] rounded-full"></div>
                  </div>
                  <span className="font-bold">100% Pass</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="font-semibold w-24">Arts</span>
                  <div className="flex-1 mx-4 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-secondary w-[100%] rounded-full"></div>
                  </div>
                  <span className="font-bold">100% Pass</span>
                </div>
              </div>
           </div>
        </div>

        {/* CBSE Curriculum & CCE */}
        <div className="grid md:grid-cols-2 gap-8">
           <div className="bg-white p-8 border border-border shadow-sm rounded-3xl hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                 <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">CBSE Curriculum Focus</h3>
              <p className="text-muted-foreground leading-relaxed">
                We strictly follow the CBSE curriculum and NCERT guidelines. Our pedagogy is designed to provide holistic education that promotes critical thinking, problem-solving, and conceptual clarity rather than rote learning.
              </p>
           </div>
           
           <div className="bg-white p-8 border border-border shadow-sm rounded-3xl hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                 <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Continuous & Comprehensive Evaluation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our CCE approach ensures that students are evaluated not just on academics but also on life skills, attitudes, values, and co-curricular activities, providing a complete profile of the learner's development.
              </p>
           </div>
        </div>

      </div>
    </div>
  );
}
