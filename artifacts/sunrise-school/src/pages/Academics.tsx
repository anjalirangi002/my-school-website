import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Activity, Award, CheckCircle2 } from "lucide-react";

export default function Academics() {
  return (
    <div className="flex flex-col min-h-screen pt-24 pb-16 bg-background">
      
      {/* Header */}
      <div className="bg-primary/5 py-16 border-b border-primary/10">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Academics</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A comprehensive, modern CBSE curriculum designed to ignite curiosity, foster critical thinking, and prepare students for a successful future.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 mt-16">
        
        {/* Overview */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm">
              <Award className="w-4 h-4" /> CBSE Affiliated (No. 531671)
            </div>
            <h2 className="text-3xl font-bold text-foreground">Curriculum Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sunrise Senior Secondary School is affiliated with the Central Board of Secondary Education (CBSE), New Delhi. We follow a structured, child-centric approach that spans from Playway to Grade 12. 
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our teaching methodology incorporates the Continuous and Comprehensive Evaluation (CCE) approach, ensuring students are assessed on both scholastic and co-scholastic areas throughout the year rather than just final exams.
            </p>
            <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-border">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center text-secondary-foreground shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg">100% Board Results</h4>
                <p className="text-sm text-muted-foreground">A consistent track record of academic excellence in Grade 10 and 12 board examinations.</p>
              </div>
            </div>
          </div>
          <div>
            <img src="/images/classroom.jpg" alt="Classroom" className="w-full h-[400px] object-cover rounded-3xl shadow-xl" />
          </div>
        </div>

        {/* Academic Levels */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">Academic Levels</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
              <BookOpen className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-3">Pre-Primary</h3>
              <p className="font-medium text-primary mb-4">Playway to UKG</p>
              <p className="text-muted-foreground">Focuses on sensory-motor development, social skills, and foundational learning through play, music, and interactive activities.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
              <Activity className="w-10 h-10 text-secondary-foreground mb-6" />
              <h3 className="text-2xl font-bold mb-3">Middle School</h3>
              <p className="font-medium text-secondary-foreground mb-4">Grade 1 to Grade 10</p>
              <p className="text-muted-foreground">Builds core competencies in Mathematics, Science, Social Studies, English, and Hindi. Emphasizes conceptual clarity and critical thinking.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
              <GraduationCap className="w-10 h-10 text-accent mb-6" />
              <h3 className="text-2xl font-bold mb-3">Senior Secondary</h3>
              <p className="font-medium text-accent mb-4">Grade 11 & 12</p>
              <p className="text-muted-foreground">Specialized streams preparing students for board exams and higher education competitive entrance tests.</p>
            </div>
          </div>
        </div>

        {/* Senior Secondary Streams */}
        <div className="bg-foreground text-white rounded-3xl p-8 md:p-16 shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Grade 11-12 Streams</h2>
            <p className="text-white/70">We provide specialized faculty and fully equipped laboratories for four distinct academic streams.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-colors">
              <h3 className="text-xl font-bold text-primary mb-4">Medical</h3>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>• Physics</li>
                <li>• Chemistry</li>
                <li>• Biology</li>
                <li>• English</li>
                <li>• Optional Subject</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-colors">
              <h3 className="text-xl font-bold text-accent mb-4">Non-Medical</h3>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>• Physics</li>
                <li>• Chemistry</li>
                <li>• Mathematics</li>
                <li>• English</li>
                <li>• Optional Subject</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-colors">
              <h3 className="text-xl font-bold text-secondary mb-4">Commerce</h3>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>• Accountancy</li>
                <li>• Business Studies</li>
                <li>• Economics</li>
                <li>• English</li>
                <li>• Math/Optional</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-colors">
              <h3 className="text-xl font-bold text-pink-400 mb-4">Arts / Humanities</h3>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>• History</li>
                <li>• Political Science</li>
                <li>• Geography/Economics</li>
                <li>• English</li>
                <li>• Optional Subject</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
