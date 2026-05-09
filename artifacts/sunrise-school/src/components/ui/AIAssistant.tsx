import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import { X, Send, ChevronRight, ChevronLeft } from "lucide-react";

type Phase = "center" | "corner" | "chat" | "tour";
type Message = { role: "assistant" | "user"; text: string };

const TOUR_STEPS = [
  {
    path: "/",
    title: "🏫 Home",
    message:
      "Welcome to Sunrise Senior Secondary School! We are CBSE-affiliated (No. 531671), established in 2010 in Vill. Mago Majri, Kaithal, Haryana. Let me take you on a quick tour!",
  },
  {
    path: "/about",
    title: "📖 About Us",
    message:
      "Here you will find our school's story, vision, and achievements. We have maintained 100% CBSE board results for 6 consecutive years — a record we are very proud of!",
  },
  {
    path: "/academic",
    title: "📚 Academics",
    message:
      "From Playway to Class 12, we offer complete education. Class 11 & 12 have 4 streams: Medical, Non-Medical, Commerce, and Arts — all with experienced and dedicated faculty.",
  },
  {
    path: "/faculty",
    title: "👩‍🏫 Faculty",
    message:
      "Meet our 32+ qualified and dedicated teachers! Our Principal Mr. Khushi Ram (M.A., B.Ed.) has 30+ years of experience in education.",
  },
  {
    path: "/student-life",
    title: "🎭 Student Life",
    message:
      "Life at Sunrise goes beyond books! Sports, cultural events, science exhibitions, and 8 student clubs — there is something for every student to shine.",
  },
  {
    path: "/campus",
    title: "🏛️ Campus",
    message:
      "Smart classrooms, modern science labs, a rich library, spacious sports grounds, school transport, and 24/7 CCTV security — all within our campus.",
  },
  {
    path: "/updates",
    title: "📢 Updates",
    message:
      "Stay informed! All important notices — admission schedules, exam dates, events, and holiday announcements — are posted here regularly.",
  },
  {
    path: "/contact",
    title: "📞 Contact",
    message:
      "That's the tour! 🎉 To visit or inquire, reach us at Vill. Mago Majri, Kaithal, Haryana. Office: Mon–Sat, 8 AM–3 PM. WhatsApp: +91 92555 28310.",
  },
];

const QUICK_QUESTIONS = [
  "How to get admission?",
  "Classes offered?",
  "School timings?",
  "Contact number?",
  "CBSE results?",
  "Transport available?",
];

function getAnswer(q: string): string {
  const lower = q.toLowerCase();

  if (/hello|hi\b|hey|namaste|namaskar/.test(lower)) {
    return "Namaste! 🙏 I'm Aria, your Sunrise School guide. Ask me anything about admissions, academics, facilities, timings, or contact details!";
  }
  if (/thank/.test(lower)) {
    return "You're welcome! 😊 Feel free to ask anything else. I'm always here to help!";
  }
  if (/admission|apply|enroll|seat|form/.test(lower)) {
    return "📋 Admissions for 2026-27 are OPEN!\nWe accept from Playway to Class 11.\n\nRequired documents:\n• Birth certificate\n• Last report card\n• Aadhaar copy\n• TC (if transfer)\n• 4 passport photos\n\nVisit school Mon–Sat, 8 AM–3 PM or WhatsApp: +91 92555 28310";
  }
  if (/fee|cost|charge|tuition|tution/.test(lower)) {
    return "For the fee structure, please contact our admission office directly.\n📞 WhatsApp: +91 92555 28310\n⏰ Mon–Sat, 8:00 AM – 3:00 PM 😊";
  }
  if (/address|location|where|village|kaithal|mago|majri/.test(lower)) {
    return "📍 Vill. Mago Majri, Kaithal, Haryana.\n\nOur school bus also covers nearby villages! Contact us for route details.";
  }
  if (/contact|phone|number|whatsapp|call|reach/.test(lower)) {
    return "📞 WhatsApp: +91 92555 28310\n⏰ Mon–Sat, 8:00 AM – 3:00 PM\n📍 Vill. Mago Majri, Kaithal, Haryana";
  }
  if (/cbse|board|affiliation/.test(lower)) {
    return "✅ Yes! We are CBSE-affiliated.\nAffiliation No. 531671\n\n🏆 100% board results for 6 consecutive years in Class 10 & 12!";
  }
  if (/result|pass|percentage|score/.test(lower)) {
    return "🏆 100% CBSE board results for 6 consecutive years (2020–2025) in Class 10 & 12!\n\nOur students have excelled across Medical, Non-Medical, Commerce & Arts.";
  }
  if (/principal|khushi|director|head/.test(lower)) {
    return "👨‍💼 Our Principal: Mr. Khushi Ram\n• Qualification: M.A., B.Ed.\n• Experience: 30+ years in education\n• Leading Sunrise School since 2010";
  }
  if (/stream|science|commerce|arts|medical|non.medical|pcm|pcb/.test(lower)) {
    return "📚 Class 11 & 12 streams:\n• 🔬 Medical (PCB)\n• ⚙️ Non-Medical (PCM)\n• 💼 Commerce\n• 🎨 Arts\n\nAll streams have experienced, dedicated teachers!";
  }
  if (/timing|time|hour|open|schedule/.test(lower)) {
    return "⏰ School Timings:\n📅 Monday to Saturday\n🕗 8:00 AM – 3:00 PM\n\nAdmission office operates during the same hours.";
  }
  if (/transport|bus|vehicle|route|pickup/.test(lower)) {
    return "🚌 Yes! We have a dedicated school bus fleet covering Mago Majri and surrounding areas in Kaithal.\n\nFor route details: +91 92555 28310";
  }
  if (/teacher|faculty|staff/.test(lower)) {
    return "👩‍🏫 32+ qualified teachers!\n• All hold B.Ed./M.Ed. degrees\n• 7+ years avg. experience\n• Department-wise dedicated faculty\n• Led by Principal Mr. Khushi Ram";
  }
  if (/facilit|lab|library|classroom|sport|infrastructure/.test(lower)) {
    return "🏫 Campus Facilities:\n• 🖥️ Smart Classrooms\n• 🔬 Science Labs (Physics, Chemistry, Bio, CS)\n• 📚 Rich Library\n• 🏃 Sports Grounds\n• 🚌 School Transport\n• 📹 24/7 CCTV Security";
  }
  if (/establish|founded|year|since|old|history|2010/.test(lower)) {
    return "📅 Sunrise Senior Secondary School was established in 2010.\n\n15+ years of academic excellence in Kaithal, Haryana! 🎉";
  }
  if (/class|grade|standard|playway|nursery|kg/.test(lower)) {
    return "📚 Classes offered:\n• Playway, Nursery, KG (Pre-Primary)\n• Class 1–8 (Primary & Middle)\n• Class 9–10 (Secondary)\n• Class 11–12 (Senior Secondary) — 4 streams\n\nAdmissions open for all levels!";
  }
  if (/holiday|vacation|summer|winter|break/.test(lower)) {
    return "School follows the CBSE / Haryana government holiday calendar. For the exact schedule contact us at +91 92555 28310.";
  }

  return "🤔 I am not sure about that, but I'd love to help!\n\nTry asking about:\n• Admissions\n• Classes offered\n• Facilities\n• School timings\n• Transport\n• Contact details\n\nOr reach us: +91 92555 28310";
}

export default function AIAssistant() {
  const [phase, setPhase] = useState<Phase | null>(null);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "Namaste! 🙏 I'm Aria, your Sunrise School guide!\n\nAsk me anything about the school, or tap a quick question below.",
    },
  ]);
  const [input, setInput] = useState("");
  const [tourStep, setTourStep] = useState(0);
  const [, navigate] = useLocation();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const seen = sessionStorage.getItem("aiAssistantSeen");
    setPhase(seen ? "corner" : "center");
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function dismissToCorner() {
    setPhase("corner");
    sessionStorage.setItem("aiAssistantSeen", "true");
  }

  function startTour() {
    setTourStep(0);
    setPhase("tour");
    navigate(TOUR_STEPS[0].path);
    sessionStorage.setItem("aiAssistantSeen", "true");
  }

  function openChat() {
    setPhase("chat");
  }

  function closePanel() {
    setPhase("corner");
  }

  function sendMessage(text?: string) {
    const q = (text ?? input).trim();
    if (!q) return;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: q }]);
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "assistant", text: getAnswer(q) }]);
    }, 450);
  }

  function nextTourStep() {
    if (tourStep < TOUR_STEPS.length - 1) {
      const next = tourStep + 1;
      setTourStep(next);
      navigate(TOUR_STEPS[next].path);
    } else {
      setPhase("corner");
    }
  }

  function prevTourStep() {
    if (tourStep > 0) {
      const prev = tourStep - 1;
      setTourStep(prev);
      navigate(TOUR_STEPS[prev].path);
    }
  }

  if (phase === null) return null;

  return (
    <>
      {/* ── CENTER WELCOME POPUP ── */}
      <AnimatePresence>
        {phase === "center" && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[200]"
              onClick={dismissToCorner}
            />
            <motion.div
              key="center-card"
              initial={{ opacity: 0, scale: 0.4, y: 60 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.3, y: 200 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className="fixed inset-0 z-[201] flex items-center justify-center pointer-events-none"
            >
              <div className="flex flex-col items-center pointer-events-auto">
                <motion.img
                  src="/images/ai-bot.png"
                  alt="AI Assistant"
                  className="w-44 h-44 object-contain drop-shadow-2xl"
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="bg-white rounded-2xl shadow-2xl px-7 py-6 max-w-xs text-center -mt-2 border border-border"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Your Guide</p>
                  <h3 className="text-lg font-bold text-foreground mb-1.5">Hi! I'm Aria 👋</h3>
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                    Welcome to Sunrise School! Take a guided tour or ask me anything about the school.
                  </p>
                  <div className="flex gap-3 justify-center">
                    <motion.button
                      onClick={startTour}
                      whileHover={{ scale: 1.06 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-5 py-2 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary/90 transition-colors shadow-sm"
                    >
                      Start Tour
                    </motion.button>
                    <motion.button
                      onClick={dismissToCorner}
                      whileHover={{ scale: 1.06 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-5 py-2 bg-muted text-muted-foreground text-sm font-semibold rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      No Thanks
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── CORNER ROBOT ── */}
      <AnimatePresence>
        {phase !== "center" && (
          <motion.button
            key="corner-bot"
            initial={{ opacity: 0, scale: 0, x: 80, y: 80 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
            onClick={phase === "corner" ? openChat : closePanel}
            className="fixed bottom-24 right-5 z-[60] focus:outline-none"
            aria-label="Open assistant"
          >
            <motion.img
              src="/images/ai-bot.png"
              alt="AI Assistant"
              className="w-28 h-28 object-contain drop-shadow-xl"
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.15 }}
            />
            {phase === "corner" && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center"
              >
                <span className="w-2 h-2 bg-white rounded-full" />
              </motion.span>
            )}
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── CHAT WINDOW ── */}
      <AnimatePresence>
        {phase === "chat" && (
          <motion.div
            key="chat"
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 320, damping: 26 }}
            className="fixed bottom-56 right-5 z-[70] w-[310px] sm:w-[340px] bg-white rounded-2xl shadow-2xl border border-border flex flex-col overflow-hidden"
            style={{ maxHeight: "430px" }}
          >
            {/* Header */}
            <div className="bg-primary px-4 py-3 flex items-center gap-3 shrink-0">
              <img src="/images/ai-bot.png" alt="Aria" className="w-9 h-9 object-contain" />
              <div className="flex-1">
                <p className="text-white font-bold text-sm leading-none">Aria</p>
                <p className="text-white/70 text-xs mt-0.5">Sunrise School Guide • Online</p>
              </div>
              <button
                onClick={() => { closePanel(); setPhase("tour"); startTour(); }}
                className="text-white/70 hover:text-white text-xs font-semibold px-2 py-1 rounded-full hover:bg-white/20 transition-colors mr-1"
              >
                Tour
              </button>
              <button onClick={closePanel} className="text-white/80 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 space-y-2.5 bg-muted/20" style={{ minHeight: 0 }}>
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  {msg.role === "assistant" && (
                    <img src="/images/ai-bot.png" alt="" className="w-6 h-6 object-contain self-end mr-1.5 shrink-0" />
                  )}
                  <div
                    className={`max-w-[80%] rounded-2xl px-3 py-2 text-xs leading-relaxed whitespace-pre-line ${
                      msg.role === "user"
                        ? "bg-primary text-white rounded-br-sm"
                        : "bg-white text-foreground shadow-sm border border-border/60 rounded-bl-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick questions */}
            <div className="px-2.5 py-2 flex gap-1.5 overflow-x-auto border-t border-border bg-white shrink-0">
              {QUICK_QUESTIONS.map((q) => (
                <button
                  key={q}
                  onClick={() => sendMessage(q)}
                  className="shrink-0 text-[10px] font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors whitespace-nowrap"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="p-2.5 border-t border-border bg-white flex gap-2 items-center shrink-0">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Ask about Sunrise School..."
                className="flex-1 text-xs px-3 py-2 rounded-full border border-border focus:outline-none focus:border-primary bg-muted/30"
              />
              <button
                onClick={() => sendMessage()}
                disabled={!input.trim()}
                className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center disabled:opacity-40 hover:bg-primary/90 transition-colors shrink-0"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── TOUR PANEL ── */}
      <AnimatePresence>
        {phase === "tour" && (
          <motion.div
            key="tour"
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 320, damping: 26 }}
            className="fixed bottom-56 right-5 z-[70] w-[310px] sm:w-[340px] bg-white rounded-2xl shadow-2xl border border-border overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary px-4 py-3 flex items-center gap-3">
              <img src="/images/ai-bot.png" alt="Aria" className="w-9 h-9 object-contain" />
              <div className="flex-1">
                <p className="text-white font-bold text-sm leading-none">School Tour</p>
                <p className="text-white/70 text-xs mt-0.5">
                  Step {tourStep + 1} of {TOUR_STEPS.length}
                </p>
              </div>
              <button
                onClick={() => { closePanel(); setPhase("chat"); }}
                className="text-white/70 hover:text-white text-xs font-semibold px-2 py-1 rounded-full hover:bg-white/20 transition-colors mr-1"
              >
                Chat
              </button>
              <button onClick={closePanel} className="text-white/80 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4">
              {/* Progress bar */}
              <div className="flex gap-1 mb-4">
                {TOUR_STEPS.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 flex-1 rounded-full transition-all duration-400 ${
                      i < tourStep ? "bg-primary/50" : i === tourStep ? "bg-primary" : "bg-muted"
                    }`}
                  />
                ))}
              </div>

              {/* Step content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={tourStep}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.2 }}
                  className="mb-4"
                >
                  <h4 className="font-bold text-foreground text-base mb-2">
                    {TOUR_STEPS[tourStep].title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {TOUR_STEPS[tourStep].message}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevTourStep}
                  disabled={tourStep === 0}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold border border-border text-muted-foreground hover:bg-muted disabled:opacity-30 transition-colors"
                >
                  <ChevronLeft className="w-3.5 h-3.5" /> Back
                </button>
                <button
                  onClick={nextTourStep}
                  className="flex-1 flex items-center justify-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold bg-primary text-white hover:bg-primary/90 transition-colors"
                >
                  {tourStep === TOUR_STEPS.length - 1 ? (
                    "Finish Tour 🎉"
                  ) : (
                    <>Next <ChevronRight className="w-3.5 h-3.5" /></>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
