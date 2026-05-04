import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { fadeUp, stagger, inView } from "@/lib/animations";
import { GraduationCap, Award, Users, Filter, BookOpen, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PRINCIPAL, TEACHERS, DEPARTMENTS_ORDER, type Department } from "@/data/faculty";

const PRINCIPAL_PHOTO = "/images/principal.png";

const DEPARTMENT_FILTERS: ("ALL" | Department)[] = ["ALL", ...DEPARTMENTS_ORDER];

function getInitials(name: string): string {
  const cleaned = name.replace(/^(Mr\.|Mrs\.|Ms\.|Dr\.|Pt\.)\s*/, "");
  return cleaned
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Faculty() {
  const [activeFilter, setActiveFilter] = useState<"ALL" | Department>("ALL");

  const filteredTeachers = useMemo(() => {
    if (activeFilter === "ALL") return TEACHERS;
    return TEACHERS.filter((t) => t.department === activeFilter);
  }, [activeFilter]);

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary to-sky-800 text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,white_2px,transparent_2px)] bg-[length:30px_30px]" />
        <div className="container mx-auto px-4 md:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur text-sm font-semibold uppercase tracking-wide mb-6">
              <GraduationCap className="w-4 h-4" />
              Our Teaching Team
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              Meet Our Faculty
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
              Experienced, qualified and dedicated educators committed to nurturing every child's potential.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Principal feature */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto bg-white border border-border rounded-2xl shadow-sm overflow-hidden grid md:grid-cols-[280px_1fr]"
          >
            <div className="bg-primary/5 flex items-center justify-center p-8">
              <img
                src={PRINCIPAL_PHOTO}
                alt={`${PRINCIPAL.name}, Principal`}
                className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <span className="text-xs font-bold text-primary uppercase tracking-widest mb-2">From the Principal's Desk</span>
              <h2 className="text-3xl font-bold text-foreground mb-1">{PRINCIPAL.name}</h2>
              <p className="text-base text-muted-foreground mb-1">{PRINCIPAL.role} • {PRINCIPAL.qualification}</p>
              <p className="text-sm text-primary font-semibold mb-5">{PRINCIPAL.experience}</p>
              <Quote className="w-8 h-8 text-primary/30 mb-2" />
              <p className="text-foreground/80 leading-relaxed italic">{PRINCIPAL.bio}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-muted/30 border-y border-border py-12">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
          >
            {[
              { icon: Users, value: `${TEACHERS.length + 1}+`, label: "Total Faculty" },
              { icon: Award, value: "100%", label: "Qualified Teachers" },
              { icon: BookOpen, value: `${DEPARTMENTS_ORDER.length}`, label: "Departments" },
              { icon: GraduationCap, value: "12+", label: "Avg. Experience (yrs)" },
            ].map(({ icon: Icon, value, label }, idx) => (
              <motion.div key={idx} variants={fadeUp} className="text-center">
                <div className="flex justify-center mb-2">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <p className="text-3xl font-bold text-foreground">{value}</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider mt-1">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Filter bar */}
      <section className="sticky top-[72px] z-30 bg-white/95 backdrop-blur-md border-b border-border py-4">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-3 overflow-x-auto pb-1">
            <Filter className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            {DEPARTMENT_FILTERS.map((dept) => {
              const isActive = activeFilter === dept;
              const count = dept === "ALL" ? TEACHERS.length : TEACHERS.filter((t) => t.department === dept).length;
              return (
                <button
                  key={dept}
                  onClick={() => setActiveFilter(dept)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                    isActive
                      ? "bg-primary text-white shadow-sm"
                      : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {dept} <span className="opacity-70 ml-1">({count})</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Teachers grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          {filteredTeachers.length === 0 ? (
            <p className="text-center text-muted-foreground py-12">No teachers found in this department.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {filteredTeachers.map((teacher, idx) => (
                <motion.article
                  key={`${teacher.name}-${idx}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.04, duration: 0.5 }}
                  className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-sky-700 text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-sm">
                      {getInitials(teacher.name)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-foreground leading-tight">{teacher.name}</h3>
                      <p className="text-sm text-primary font-semibold mt-0.5">{teacher.role}</p>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex items-start gap-2">
                      <GraduationCap className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                      <span className="text-foreground/80">{teacher.qualification}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Award className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                      <span className="text-foreground/80">{teacher.experience} experience</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed border-t border-border pt-4 mt-auto">{teacher.bio}</p>
                  <span className="mt-4 inline-block self-start text-[10px] font-bold px-2.5 py-1 rounded-full bg-primary/10 text-primary uppercase tracking-wider">
                    {teacher.department}
                  </span>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 border-t border-border">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Want to know more about our teaching approach?
          </h2>
          <p className="text-muted-foreground mb-6">
            Visit the school or speak with our admission office to learn how our faculty supports every child's growth.
          </p>
          <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12">
            <Link href="/contact">Schedule a Visit</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
