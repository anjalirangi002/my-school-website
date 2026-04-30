import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Calendar, Bell, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NOTICES, type NoticeCategory } from "@/data/notices";

const CATEGORY_FILTERS: ("ALL" | NoticeCategory)[] = [
  "ALL",
  "ADMISSION",
  "EXAM",
  "EVENT",
  "RESULT",
  "NOTICE",
  "HOLIDAY",
];

export default function Updates() {
  const [activeFilter, setActiveFilter] = useState<"ALL" | NoticeCategory>("ALL");

  const filteredNotices = useMemo(() => {
    if (activeFilter === "ALL") return NOTICES;
    return NOTICES.filter((n) => n.badge === activeFilter);
  }, [activeFilter]);

  // If user clicked "Read More" on a Home page notice card, scroll that notice into view.
  useEffect(() => {
    const targetId = sessionStorage.getItem("scrollToNotice");
    if (!targetId) return;
    sessionStorage.removeItem("scrollToNotice");
    const timer = setTimeout(() => {
      const el = document.getElementById(targetId);
      if (!el) return;
      const headerOffset = 140; // sticky header (~72px) + sticky filter bar (~68px)
      const top = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
      window.scrollTo({ top, behavior: "auto" });
    }, 120);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero header */}
      <section className="bg-gradient-to-br from-primary via-primary to-sky-700 text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,white_2px,transparent_2px)] bg-[length:30px_30px]" />
        <div className="container mx-auto px-4 md:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur text-sm font-semibold uppercase tracking-wide mb-6">
              <Bell className="w-4 h-4" />
              School Notice Board
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              Latest Updates & Notices
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
              Stay informed with all the latest school announcements, exam schedules, events, and important notices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter bar */}
      <section className="sticky top-[72px] z-30 bg-white/95 backdrop-blur-md border-b border-border py-4">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-3 overflow-x-auto pb-1">
            <Filter className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            {CATEGORY_FILTERS.map((cat) => {
              const isActive = activeFilter === cat;
              const count = cat === "ALL" ? NOTICES.length : NOTICES.filter((n) => n.badge === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                    isActive
                      ? "bg-primary text-white shadow-sm"
                      : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {cat} <span className="opacity-70 ml-1">({count})</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Notices list */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          {filteredNotices.length === 0 ? (
            <p className="text-center text-muted-foreground py-12">No notices found in this category.</p>
          ) : (
            <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {filteredNotices.map((notice, idx) => (
                <motion.article
                  key={notice.id}
                  id={notice.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.5 }}
                  className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col sm:flex-row gap-6"
                >
                  <div className="flex flex-col items-center justify-center sm:w-24 shrink-0 sm:border-r border-border sm:pr-6">
                    <Calendar className="w-6 h-6 text-primary mb-2" />
                    <span className="text-xs font-bold text-muted-foreground uppercase text-center">{notice.date}</span>
                  </div>
                  <div className="flex-1 space-y-3">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full inline-block ${notice.color}`}>
                      {notice.badge}
                    </span>
                    <h2 className="text-xl font-bold text-foreground leading-snug">{notice.title}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">{notice.detail}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white py-16 border-t border-border">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Have a question about any notice?
          </h2>
          <p className="text-muted-foreground mb-6">
            Reach out to the school office between 8:00 AM and 3:00 PM, Monday to Saturday — we're happy to help.
          </p>
          <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12">
            <Link href="/contact">Contact School Office</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
