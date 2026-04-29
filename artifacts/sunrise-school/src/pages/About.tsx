import { Link } from "wouter";
import { Flag, Heart, Award, CheckCircle, GraduationCap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About Us</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Founded in 2010 by Sunrise Education Society in Vill. Mago Majri, Kaithal, we are dedicated to academic rigor and moral integrity.
          </p>
        </div>

        {/* Mission, Vision, Core Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="p-8 bg-white rounded-3xl shadow-sm border border-border hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
              <Flag className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To provide high-quality education that balances academic excellence with character building and cultural values in a safe learning environment.
            </p>
          </div>
          
          <div className="p-8 bg-white rounded-3xl shadow-sm border border-border hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center mb-6">
              <Heart className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              To be a beacon of learning, empowering rural youth with the knowledge, skills, and ethical grounding needed to succeed globally while respecting their roots.
            </p>
          </div>

          <div className="p-8 bg-white rounded-3xl shadow-sm border border-border hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Core Values</h2>
            <p className="text-muted-foreground leading-relaxed">
              Integrity, Discipline, Compassion, and Curiosity. We foster a culture where every student feels valued and motivated to achieve their best.
            </p>
          </div>
        </div>

        {/* History and Management */}
        <div className="mb-24 bg-muted/30 rounded-3xl p-8 md:p-16 border border-border flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
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
          </div>
          <div className="w-full md:w-1/2">
             <img src="/images/hero.png" alt="School History" className="w-full h-auto rounded-2xl shadow-lg" />
          </div>
        </div>

        {/* Principal's Detailed Message */}
        <div className="bg-foreground text-white rounded-3xl p-8 md:p-16 shadow-2xl relative overflow-hidden mb-24">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
          <div className="relative z-10 grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-4">
              <img src="/images/principal.png" alt="Principal Mr. Khushi Ram" className="w-full aspect-[3/4] object-cover rounded-2xl shadow-lg border-4 border-white/10" />
            </div>
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
        </div>

        {/* Faculty Overview */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Dedicated Faculty</h2>
            <p className="text-lg text-muted-foreground">Experienced educators committed to nurturing young minds.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
             <div className="bg-white p-8 rounded-2xl border border-border text-center hover:shadow-md transition-all">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full mx-auto flex items-center justify-center mb-4">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">PGTs</h3>
                <p className="text-sm font-semibold text-primary mb-3">Post Graduate Teachers</p>
                <p className="text-muted-foreground text-sm">Subject experts managing Senior Secondary classes (11th & 12th) across all specialized streams.</p>
             </div>
             <div className="bg-white p-8 rounded-2xl border border-border text-center hover:shadow-md transition-all">
                <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-full mx-auto flex items-center justify-center mb-4">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">TGTs</h3>
                <p className="text-sm font-semibold text-secondary mb-3">Trained Graduate Teachers</p>
                <p className="text-muted-foreground text-sm">Highly qualified educators focusing on Middle and Secondary grades (6th to 10th).</p>
             </div>
             <div className="bg-white p-8 rounded-2xl border border-border text-center hover:shadow-md transition-all">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full mx-auto flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">PRTs</h3>
                <p className="text-sm font-semibold text-primary mb-3">Primary Teachers</p>
                <p className="text-muted-foreground text-sm">Caring and patient educators handling Primary and Pre-Primary classes with a strong foundation approach.</p>
             </div>
          </div>
        </div>

        {/* Affiliation & Streams */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Affiliation Details</h3>
            <ul className="space-y-4 text-muted-foreground">
               <li className="flex justify-between border-b border-primary/10 pb-2">
                 <span className="font-semibold text-foreground">Board</span>
                 <span>CBSE, New Delhi</span>
               </li>
               <li className="flex justify-between border-b border-primary/10 pb-2">
                 <span className="font-semibold text-foreground">Affiliation No.</span>
                 <span>531671</span>
               </li>
               <li className="flex justify-between border-b border-primary/10 pb-2">
                 <span className="font-semibold text-foreground">School Code</span>
                 <span>41650</span>
               </li>
               <li className="flex justify-between border-b border-primary/10 pb-2">
                 <span className="font-semibold text-foreground">Type</span>
                 <span>Co-educational, Private Unaided</span>
               </li>
               <li className="flex justify-between border-b border-primary/10 pb-2">
                 <span className="font-semibold text-foreground">Classes</span>
                 <span>Playway to Grade 12</span>
               </li>
               <li className="flex justify-between">
                 <span className="font-semibold text-foreground">Medium</span>
                 <span>English</span>
               </li>
            </ul>
          </div>

          <div>
             <h3 className="text-2xl font-bold mb-6 text-foreground">Streams Offered (Class 11 & 12)</h3>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 bg-white border border-border rounded-2xl flex items-center gap-4 hover:border-primary transition-colors">
                  <div className="w-3 h-3 rounded-full bg-primary shrink-0"></div>
                  <span className="font-bold text-lg">Medical</span>
                </div>
                <div className="p-6 bg-white border border-border rounded-2xl flex items-center gap-4 hover:border-primary transition-colors">
                  <div className="w-3 h-3 rounded-full bg-primary shrink-0"></div>
                  <span className="font-bold text-lg">Non-Medical</span>
                </div>
                <div className="p-6 bg-white border border-border rounded-2xl flex items-center gap-4 hover:border-secondary transition-colors">
                  <div className="w-3 h-3 rounded-full bg-secondary shrink-0"></div>
                  <span className="font-bold text-lg">Commerce</span>
                </div>
                <div className="p-6 bg-white border border-border rounded-2xl flex items-center gap-4 hover:border-secondary transition-colors">
                  <div className="w-3 h-3 rounded-full bg-secondary shrink-0"></div>
                  <span className="font-bold text-lg">Arts / Humanities</span>
                </div>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}
