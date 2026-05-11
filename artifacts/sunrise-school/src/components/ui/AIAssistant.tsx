import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import { X, Send, ChevronRight, ChevronLeft } from "lucide-react";

const EL_API_KEY = import.meta.env.VITE_ELEVENLABS_API_KEY as string;
const EL_VOICE_ID = import.meta.env.VITE_ELEVENLABS_VOICE_ID as string;

function stripEmojis(text: string): string {
  return text
    .replace(/[\u{1F300}-\u{1FFFF}]/gu, "")
    .replace(/[\u{2600}-\u{26FF}]/gu, "")
    .replace(/[\u{2700}-\u{27BF}]/gu, "")
    .replace(/[✅🎉🙏]/gu, "")
    .replace(/\n+/g, " ")
    .trim();
}

type Phase = "center" | "corner" | "chat" | "tour";
type Message = { role: "assistant" | "user"; text: string };

interface TourStep {
  path: string;
  scrollId: string | null;
  title: string;
  message: string;
}

const TOUR_STEPS: TourStep[] = [
  // ── HOME ──────────────────────────────────────────────────────────────
  {
    path: "/",
    scrollId: null,
    title: "🏫 Home",
    message:
      "Welcome to Sunrise Senior Secondary School! CBSE affiliated school hai hamaari, affiliation number 531671, jo 2010 mein Vill. Mago Majri, Kaithal, Haryana mein establish hua tha. Yahan jo aap dekh rahe hain — yeh hai hamaara Hero Section. Yeh school ka pehla impression hai — ek strong tagline, beautiful campus ki jhalkti image, aur seedha Admissions aur Tour ka option. Thoda scroll karein — yahan hai Our Story. Sunrise Education Society ke dwara founded, hamaara school modern teaching aur cultural values ka combination hai. 15 saal se hum rural youth ko quality education de rahe hain. Aage badhein — yahan aapko milega Latest Notices ka section. Admissions, exams, events — sab important updates yahan milte hain parents aur students ko. Ab dekhiye Principal's Message. Hamaare Principal hain Mr. Khushi Ram, M.A., B.Ed., 30 se zyada saal ka experience. Unka maanna hai — education sirf results nahi, character banana hai. Aur ab sabse important — Why Parents Trust Us. Chhe strong reasons: 100% board results, 24/7 CCTV security, smart classrooms, experienced faculty, school transport, aur strict discipline. Yahi woh reasons hain jo Sunrise ko alag banate hain. Aur last mein — What Parents Say. Real families, real experiences. Hamare parents khud share karte hain ki unhone Sunrise kyun choose kiya apne bacchon ke liye.",
  },

  // ── ABOUT ─────────────────────────────────────────────────────────────
  {
    path: "/about",
    scrollId: null,
    title: "📖 About Us",
    message:
      "Ab hum aa gaye hain About Us page par. Yahan aap Sunrise School ki poori kahani janenge. 2010 mein Sunrise Education Society ne yeh school establish kiya — ek sapna jo aaj 15 saal baad ek thriving institution ban chuka hai. Hamaari Mission hai quality education dena, Vision hai rural youth ko globally empower karna, aur hamare Values hain — Integrity, Discipline, Compassion aur Curiosity. Aage scroll karein aur dekhein hamaari achievements — 100% board results, Best CBSE School Award, aur 1000 se zyada successful alumni. CBSE affiliation details bhi yahan clearly diye gaye hain.",
  },

  // ── ACADEMICS ─────────────────────────────────────────────────────────
  {
    path: "/academic",
    scrollId: null,
    title: "📚 Academics",
    message:
      "Yeh hai hamaara Academics page. Sunrise mein Playway se lekar Class 12 tak ka ek seamless educational journey hai. Pre-Primary se start hokar Primary, Middle, Secondary aur Senior Secondary tak — har stage par focused learning. Class 11 aur 12 mein chaar streams hain — Medical yaani PCB, Non-Medical yaani PCM, Commerce, aur Arts. Aur hamaara Smart Learning Ecosystem — digital classrooms, advanced science labs, aur digital library — yeh sab milkar students ko future ke liye tayyar karta hai.",
  },

  // ── FACULTY ───────────────────────────────────────────────────────────
  {
    path: "/faculty",
    scrollId: null,
    title: "👩‍🏫 Faculty",
    message:
      "Yeh hai hamaara Faculty page — miliye hamare 32 se zyada dedicated teachers se. Sab B.Ed. ya M.Ed. qualified hain, average 7 saal ka experience hai. Hamare Principal hain Mr. Khushi Ram — M.A., B.Ed., 30 se zyada saal ka anubhav. Unka kehna hai — har bachcha top education ka haqdar hai. Neeche scroll karein aur department-wise poori teaching team dekhen.",
  },

  // ── STUDENT LIFE ──────────────────────────────────────────────────────
  {
    path: "/student-life",
    scrollId: null,
    title: "🎭 Student Life",
    message:
      "Sunrise mein zindagi sirf books tak seemit nahi hai — yeh hai Student Life page. Yahan aap dekhenge hamare annual cultural functions, morning assemblies, sports events aur school excursions. Hamare 8 active clubs hain — Science, Literary, Music aur Dance, Eco Club, Sports, Computer, Art aur Craft, aur Debate Society. Har student ko apni talent dikhane ka mauka milta hai. Gallery mein real campus moments bhi hain — zaroor dekhein.",
  },

  // ── UPDATES ───────────────────────────────────────────────────────────
  {
    path: "/updates",
    scrollId: null,
    title: "📢 Updates",
    message:
      "Yeh hai hamaara Updates page — school ka digital notice board. Yahan parents aur students ko sabhi important updates milti hain. Admission schedules, exam dates, events, results, holidays — sab kuch ek jagah. Category filter se aap apni zaroorat ki notice aasani se dhundh sakte hain. Hum chahte hain ki koi bhi important update miss na ho.",
  },

  // ── CONTACT ───────────────────────────────────────────────────────────
  {
    path: "/contact",
    scrollId: null,
    title: "📞 Contact Us",
    message:
      "Aur yeh hai hamaara Contact page — tour ka aakhri padav. Hamaara address hai Vill. Mago Majri, Khanouri Road, Kaithal, Haryana. Phone number hain +91-9255528310 aur +91-8397877909. School Monday se Saturday, subah 8 baje se dopahar 3 baje tak khula rehta hai. Admission ke liye seedha milne aa sakte hain ya WhatsApp kar sakte hain. Yeh tha aapka Sunrise School ka poora tour — bahut bahut shukriya!",
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
    return "Namaste! 🙏 I'm Orbit, your Sunrise School guide. Ask me anything about admissions, academics, facilities, timings, or contact details!";
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

  return "🤔 I'm not sure about that, but I'd love to help!\n\nTry asking about:\n• Admissions\n• Classes offered\n• Facilities\n• School timings\n• Transport\n• Contact details\n\nOr reach us: +91 92555 28310";
}

function scrollToSection(id: string, delay = 120) {
  setTimeout(() => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 88;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, delay);
}

export default function AIAssistant() {
  const [phase, setPhase] = useState<Phase | null>(null);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "Namaste! 🙏 I'm Orbit, your Sunrise School guide!\n\nAsk me anything about the school, or tap a quick question below.",
    },
  ]);
  const [input, setInput] = useState("");
  const [tourStep, setTourStep] = useState(0);
  const [location, navigate] = useLocation();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const pendingScrollRef = useRef<string | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const sourceNodeRef = useRef<AudioBufferSourceNode | null>(null);
  const autoScrollRef = useRef<number | null>(null);
  const welcomeAudioRef = useRef<HTMLAudioElement | null>(null);

  const stopAutoScroll = useCallback(() => {
    if (autoScrollRef.current !== null) {
      clearInterval(autoScrollRef.current);
      autoScrollRef.current = null;
    }
  }, []);

  const startAutoScroll = useCallback((delayMs = 700) => {
    stopAutoScroll();
    setTimeout(() => {
      autoScrollRef.current = window.setInterval(() => {
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        if (window.scrollY >= maxScroll) {
          stopAutoScroll();
        } else {
          window.scrollBy(0, 1);
        }
      }, 20);
    }, delayMs);
  }, [stopAutoScroll]);

  const stopWelcomeSpeech = useCallback(() => {
    if (welcomeAudioRef.current) {
      welcomeAudioRef.current.pause();
      welcomeAudioRef.current.src = "";
      welcomeAudioRef.current = null;
    }
  }, []);

  const stopSpeech = useCallback(() => {
    if (sourceNodeRef.current) {
      try { sourceNodeRef.current.stop(); } catch { /* already stopped */ }
      sourceNodeRef.current = null;
    }
  }, []);

  const speakWelcome = useCallback(async () => {
    if (!EL_API_KEY || !EL_VOICE_ID) return;
    stopWelcomeSpeech();
    const text = "Hi! I'm Orbit. Welcome to Sunrise School! Take a guided tour through every section, or ask me anything about the school.";
    try {
      const res = await fetch(
        `https://api.elevenlabs.io/v1/text-to-speech/${EL_VOICE_ID}`,
        {
          method: "POST",
          headers: { "xi-api-key": EL_API_KEY, "Content-Type": "application/json" },
          body: JSON.stringify({
            text,
            model_id: "eleven_multilingual_v2",
            voice_settings: { stability: 0.5, similarity_boost: 0.75 },
          }),
        }
      );
      if (!res.ok) return;
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const audio = new Audio(url);
      welcomeAudioRef.current = audio;
      audio.onended = () => URL.revokeObjectURL(url);
      await audio.play();
    } catch {
      // Silently ignore — browser may block autoplay before user gesture
    }
  }, [stopWelcomeSpeech]);

  const speak = useCallback(async (text: string) => {
    if (!EL_API_KEY || !EL_VOICE_ID) return;
    stopSpeech();
    const clean = stripEmojis(text);
    if (!clean) return;

    // Create / resume AudioContext — must happen synchronously in click handler
    if (!audioCtxRef.current) {
      audioCtxRef.current = new AudioContext();
    }
    const ctx = audioCtxRef.current;
    if (ctx.state === "suspended") await ctx.resume();

    try {
      const res = await fetch(
        `https://api.elevenlabs.io/v1/text-to-speech/${EL_VOICE_ID}`,
        {
          method: "POST",
          headers: {
            "xi-api-key": EL_API_KEY,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text: clean,
            model_id: "eleven_multilingual_v2",
            voice_settings: { stability: 0.5, similarity_boost: 0.75 },
          }),
        }
      );
      if (!res.ok) return;
      const arrayBuffer = await res.arrayBuffer();
      const audioBuffer = await ctx.decodeAudioData(arrayBuffer);
      const source = ctx.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(ctx.destination);
      sourceNodeRef.current = source;
      source.start();
      source.onended = () => { sourceNodeRef.current = null; };
    } catch {
      // silently ignore TTS errors
    }
  }, [stopSpeech]);

  // Always show welcome popup on every page load, then speak welcome
  useEffect(() => {
    setPhase("center");
    speakWelcome();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  // Auto-scroll chat messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // After a page navigation, apply any pending scroll target
  useEffect(() => {
    const scrollId = pendingScrollRef.current;
    if (!scrollId) return;

    // Try at 200ms, 500ms, 900ms to allow page to fully render
    const t1 = setTimeout(() => {
      const el = document.getElementById(scrollId);
      if (el) {
        pendingScrollRef.current = null;
        const top = el.getBoundingClientRect().top + window.pageYOffset - 88;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 200);
    const t2 = setTimeout(() => {
      if (!pendingScrollRef.current) return;
      const el = document.getElementById(pendingScrollRef.current);
      if (el) {
        pendingScrollRef.current = null;
        const top = el.getBoundingClientRect().top + window.pageYOffset - 88;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 600);
    const t3 = setTimeout(() => {
      if (!pendingScrollRef.current) return;
      const el = document.getElementById(pendingScrollRef.current);
      if (el) {
        pendingScrollRef.current = null;
        const top = el.getBoundingClientRect().top + window.pageYOffset - 88;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 1000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  function goToTourStep(idx: number) {
    const step = TOUR_STEPS[idx];
    const prevStep = TOUR_STEPS[tourStep];
    setTourStep(idx);
    speak(step.message);
    stopAutoScroll();

    const isSamePage = step.path === prevStep.path || step.path === location;

    if (!step.scrollId) {
      pendingScrollRef.current = null;
      navigate(step.path);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        startAutoScroll(900);
      }, 50);
    } else if (isSamePage) {
      scrollToSection(step.scrollId);
      startAutoScroll(600);
    } else {
      pendingScrollRef.current = step.scrollId;
      navigate(step.path);
      startAutoScroll(900);
    }
  }

  function dismissToCorner() {
    stopWelcomeSpeech();
    stopSpeech();
    stopAutoScroll();
    setPhase("corner");
  }

  function startTour() {
    stopWelcomeSpeech();
    setTourStep(0);
    setPhase("tour");
    pendingScrollRef.current = null;
    navigate(TOUR_STEPS[0].path);
    speak(TOUR_STEPS[0].message);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      startAutoScroll(900);
    }, 50);
  }

  function openChat() {
    stopSpeech();
    stopAutoScroll();
    setPhase("chat");
  }

  function closePanel() {
    stopSpeech();
    stopAutoScroll();
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
      goToTourStep(tourStep + 1);
    } else {
      stopSpeech();
      stopAutoScroll();
      setPhase("corner");
    }
  }

  function prevTourStep() {
    if (tourStep > 0) {
      goToTourStep(tourStep - 1);
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
                  <h3 className="text-lg font-bold text-foreground mb-1.5">Hi! I'm Orbit 👋</h3>
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                    Welcome to Sunrise School! Take a guided tour through every section, or ask me anything about the school.
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
            className="fixed bottom-56 right-5 z-[70] w-[240px] sm:w-[260px] bg-white rounded-2xl shadow-2xl border border-border flex flex-col overflow-hidden"
            style={{ maxHeight: "620px" }}
          >
            {/* Header */}
            <div className="bg-primary px-4 py-3 flex items-center gap-3 shrink-0">
              <img src="/images/ai-bot.png" alt="Orbit" className="w-9 h-9 object-contain" />
              <div className="flex-1">
                <p className="text-white font-bold text-sm leading-none">Orbit</p>
                <p className="text-white/70 text-xs mt-0.5">Sunrise School Guide • Online</p>
              </div>
              <button
                onClick={() => { startTour(); }}
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
            className="fixed bottom-56 right-5 z-[70] w-[240px] sm:w-[260px] bg-white rounded-2xl shadow-2xl border border-border overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary px-4 py-3 flex items-center gap-3">
              <img src="/images/ai-bot.png" alt="Orbit" className="w-9 h-9 object-contain" />
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
              <div className="flex gap-0.5 mb-4">
                {TOUR_STEPS.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 flex-1 rounded-full transition-all duration-400 ${
                      i < tourStep ? "bg-primary/40" : i === tourStep ? "bg-primary" : "bg-muted"
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
                  transition={{ duration: 0.18 }}
                  className="mb-4"
                >
                  <h4 className="font-bold text-foreground text-sm mb-2">
                    {TOUR_STEPS[tourStep].title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed whitespace-pre-line">
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
