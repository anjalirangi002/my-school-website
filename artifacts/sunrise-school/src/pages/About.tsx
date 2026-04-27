import { motion } from "framer-motion";
import { Link } from "wouter";
import { BookOpen, Users, Flag, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About Us</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Discover the history, values, and leadership that make Sunrise Senior Secondary School a pillar of education in rural Haryana.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <div className="p-8 bg-primary/5 rounded-3xl border border-primary/10">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mb-6">
                <Flag className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground italic leading-relaxed">
                "To provide quality education that balances academic excellence with character building and cultural values."
              </p>
            </div>
            
            <div className="p-8 bg-secondary/5 rounded-3xl border border-secondary/20">
              <div className="w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center mb-6">
                <Heart className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be the leading educational institution in the region, empowering rural youth with the knowledge, skills, and ethical grounding needed to succeed in a globalized world while remaining deeply connected to their roots.
              </p>
            </div>
          </div>
          <div className="relative">
            <img src="/images/assembly.png" alt="School Assembly" className="w-full h-[500px] object-cover rounded-3xl shadow-xl" />
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-border hidden md:block">
              <div className="text-4xl font-bold text-primary mb-1">10+ Years</div>
              <div className="text-muted-foreground font-medium">of Excellence in Education</div>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Our History & Management</h2>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-border grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Established in 2010</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Sunrise Senior Secondary School opened its doors in 2010 with a vision to bring quality CBSE education to Vill. Mago Majri and surrounding areas. Over the years, we have grown from a small primary school to a full-fledged Senior Secondary institution, guided by the trust of our community.
              </p>
              <h3 className="text-2xl font-bold text-secondary mb-4">Sunrise Education Society</h3>
              <p className="text-muted-foreground leading-relaxed">
                The school is proudly managed by the Sunrise Education Society, a dedicated group of educators and community leaders committed to providing private, unaided, and high-quality education to children from all backgrounds.
              </p>
            </div>
            <div>
              <img src="/images/hero.png" alt="School Building" className="w-full h-64 object-cover rounded-2xl shadow-md" />
            </div>
          </div>
        </div>

        <div className="bg-foreground text-white rounded-3xl p-8 md:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
          <div className="relative z-10 grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-4">
              <img src="/images/principal.png" alt="Principal Mr. Khushi Ram" className="w-full aspect-[3/4] object-cover rounded-2xl shadow-lg border-4 border-white/10" />
            </div>
            <div className="md:col-span-8 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Principal's Message</h2>
              <blockquote className="text-xl md:text-2xl italic font-medium leading-relaxed text-white/90">
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

      </div>
    </div>
  );
}
