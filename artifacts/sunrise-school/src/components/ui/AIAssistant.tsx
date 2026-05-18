import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import { X, Send, ChevronRight, ChevronLeft, Pause, Play } from "lucide-react";

const CARTESIA_API_KEY = import.meta.env.VITE_CARTESIA_API_KEY as string;
const CARTESIA_VOICE_ID = ((import.meta.env.VITE_CARTESIA_VOICE_ID as string) ?? "").trim().replace(/^-\s*/, "");
const CARTESIA_MODEL = "sonic-2";

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY as string;
const GROQ_MODEL = "llama-3.1-8b-instant";

const GROQ_SYSTEM_PROMPT = `You are Orbit, a friendly AI assistant for Sunrise Senior Secondary School (CBSE affiliated, affiliation no. 531671, established 2010, located at Vill. Mago Majri, Khanouri Road, Kaithal, Haryana).

Your ONLY job is to answer questions about this school. You must REFUSE to answer any question that is not related to Sunrise Senior Secondary School.

Key facts you know:
- School name: Sunrise Senior Secondary School
- Type: CBSE affiliated senior secondary school
- Affiliation No: 531671
- Established: 2010, by Sunrise Education Society
- Location: Vill. Mago Majri, Khanouri Road, Kaithal, Haryana
- Principal: Mr. Khushi Ram (M.A., B.Ed., 30+ years experience)
- Timings: Monday to Saturday, 8:00 AM – 3:00 PM
- Contact: +91-9255528310, +91-8397877909
- Classes: Playway, Nursery, KG (Pre-Primary), Class 1–8 (Primary & Middle), Class 9–10 (Secondary), Class 11–12 (Senior Secondary)
- Class 11 & 12 streams: Medical (PCB), Non-Medical (PCM), Commerce, Arts
- Faculty: 32+ qualified teachers, all B.Ed./M.Ed., average 7+ years experience
- Results: 100% CBSE board results for 6 consecutive years (Class 10 & 12)
- Facilities: Smart classrooms, Science labs (Physics, Chemistry, Biology, Computer Science), Library, Sports grounds, School transport, 24/7 CCTV security
- Transport: School bus covers Mago Majri and surrounding areas in Kaithal
- Admissions: Open for 2026–27, Playway to Class 11. Documents needed: Birth certificate, last report card, Aadhaar copy, TC (if transfer), 4 passport photos
- Fee structure: Contact school directly for fee details
- Clubs: Science, Literary, Music & Dance, Eco Club, Sports, Computer, Art & Craft, Debate Society

If the user asks ANYTHING not related to this school (e.g. general knowledge, other schools, personal advice, current events, coding, jokes, etc.), politely say: "I can only answer questions about Sunrise Senior Secondary School. Please ask me about admissions, academics, facilities, timings, or other school-related topics."

Keep responses concise, helpful, and friendly. Use simple language. You may reply in Hindi or English based on what the user writes.`;

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

const LOCAL_AUDIO_KEYS = [
  "welcome", "hero", "home-intro", "home-notices", "home",
  "home-principal", "home-trust", "home-campus", "home-testimonials",
  "about", "about-values", "about-achievements", "principal-message", "about-affiliation",
  "academic", "academic-structure", "academic-streams", "academic-smart",
  "faculty", "faculty-principal", "faculty-stats", "faculty-grid",
  "student-life", "studentlife-events", "studentlife-clubs", "studentlife-gallery",
  "updates", "updates-notices",
  "contact", "contact-info",
] as const;
type LocalAudioKey = typeof LOCAL_AUDIO_KEYS[number];

interface TourStep {
  path: string;
  scrollId: string | null;
  title: string;
  message: string;
  audioKey: LocalAudioKey | null;
}

const TOUR_STEPS: TourStep[] = [
  // ── HOME ──────────────────────────────────────────────────────────────────
  {
    path: "/", scrollId: null, title: "🏫 Welcome", audioKey: "hero",
    message: "Welcome to Sunrise Senior Secondary School! CBSE affiliated, established 2010, Village Mago Majri, Kaithal, Haryana. Aapka swagat hai Sunrise mein!",
  },
  {
    path: "/", scrollId: "home-intro", title: "🌱 Our Story", audioKey: "home-intro",
    message: "Rooted in Values, Growing Towards Excellence. Sunrise Education Society ne 2010 mein ek sapna dekha — quality education sabke liye, rural Haryana tak.",
  },
  {
    path: "/", scrollId: "home-notices", title: "📢 Latest Notices", audioKey: "home-notices",
    message: "Yahan aap dekh sakte hain school ki latest notices aur important announcements. Sab kuch ek jagah — up to date rehiye.",
  },
  {
    path: "/", scrollId: "home-principal", title: "👨‍💼 Principal's Message", audioKey: "home-principal",
    message: "Principal Mr. Khushi Ram — M.A., B.Ed., 30 se zyada saal ka anubhav. Unka kehna hai — character banana hi asli taleem hai.",
  },
  {
    path: "/", scrollId: "home-trust", title: "🤝 Why Trust Us", audioKey: "home-trust",
    message: "100% board results, 24 ghante CCTV, smart classrooms, experienced faculty, aur school transport — yahi hai Sunrise ka fark.",
  },
  {
    path: "/", scrollId: "home-campus", title: "🏛️ Our Campus", audioKey: "home-campus",
    message: "Hamaara campus — khule maidan, science labs, library, aur ek safe environment jahan bacche khulkar seekhte aur badhte hain.",
  },
  {
    path: "/", scrollId: "home-testimonials", title: "💬 What Parents Say", audioKey: "home-testimonials",
    message: "Real families, real experiences. Sunte hain kya kehte hain Sunrise ke parents apne bachon ki padhai aur growth ke baare mein.",
  },

  // ── ABOUT ─────────────────────────────────────────────────────────────────
  {
    path: "/about", scrollId: null, title: "📖 About Us", audioKey: "about",
    message: "About Us page par aapka swagat hai. Yahan milegi Sunrise School ki poori kahani — foundation se lekar aaj tak ki har udaan.",
  },
  {
    path: "/about", scrollId: "about-values", title: "🎯 Mission & Values", audioKey: "about-values",
    message: "Hamaara mission — integrity, discipline, compassion aur curiosity. Yeh hi woh values hain jo ek Sunrise student ko alag banati hain.",
  },
  {
    path: "/about", scrollId: "about-achievements", title: "🏆 Achievements", audioKey: "about-achievements",
    message: "6 saal lagaataar 100% CBSE board results. Awards, recognitions, aur students ki safalata — yeh hai Sunrise ki asli pehchaan.",
  },
  {
    path: "/about", scrollId: "principal-message", title: "👨‍💼 Principal's Message", audioKey: "principal-message",
    message: "Principal Mr. Khushi Ram ka sandesh — 30 saal ke anubhav se nikli ek baat — education sirf exams nahi, zindagi ki taiyaari hai.",
  },
  {
    path: "/about", scrollId: "about-affiliation", title: "📜 CBSE Affiliation", audioKey: "about-affiliation",
    message: "Hum CBSE affiliated hain — affiliation number 531671. National standard ka hissa banna hamare students ko ek global edge deta hai.",
  },

  // ── ACADEMICS ─────────────────────────────────────────────────────────────
  {
    path: "/academic", scrollId: null, title: "📚 Academics", audioKey: "academic",
    message: "Academics page par aapka swagat hai. Playway se lekar Class 12 tak — ek structured, modern CBSE curriculum jo har bacche ke sapne poore karta hai.",
  },
  {
    path: "/academic", scrollId: "academic-structure", title: "🏗️ Academic Structure", audioKey: "academic-structure",
    message: "Pre-Primary, Primary, Middle aur Senior Secondary — har level par specialized teaching approach aur dedicated faculty ka full support.",
  },
  {
    path: "/academic", scrollId: "academic-streams", title: "🔬 Streams", audioKey: "academic-streams",
    message: "Class 11 aur 12 mein 4 streams — Medical PCB, Non-Medical PCM, Commerce, aur Arts. Har student ka interest aur sapna yahan welcome hai.",
  },
  {
    path: "/academic", scrollId: "academic-smart", title: "💡 Smart Learning", audioKey: "academic-smart",
    message: "Smart classrooms, interactive boards, aur modern science labs — technology aur education ka perfect combination sirf Sunrise mein milta hai.",
  },

  // ── FACULTY ───────────────────────────────────────────────────────────────
  {
    path: "/faculty", scrollId: null, title: "👩‍🏫 Faculty", audioKey: "faculty",
    message: "Faculty page par aapka swagat hai. Miliye 32 se zyada dedicated teachers se jo har student ki success ke liye din raat committed hain.",
  },
  {
    path: "/faculty", scrollId: "faculty-principal", title: "👨‍💼 Principal", audioKey: "faculty-principal",
    message: "Principal Mr. Khushi Ram — school ke captain. 30 saal ka anubhav aur ek vision — har baccha apni best version mein jiye.",
  },
  {
    path: "/faculty", scrollId: "faculty-stats", title: "📊 Our Numbers", audioKey: "faculty-stats",
    message: "32 plus teachers, sabhi B.Ed ya M.Ed qualified, average 7 saal se zyada teaching experience. Quality education — guaranteed.",
  },
  {
    path: "/faculty", scrollId: "faculty-grid", title: "🌟 Meet the Faculty", audioKey: "faculty-grid",
    message: "Yeh hain hamare dedicated teachers — Science, Commerce, Arts, Physical Education — har department mein subject specialists.",
  },

  // ── STUDENT LIFE ──────────────────────────────────────────────────────────
  {
    path: "/student-life", scrollId: null, title: "🎭 Student Life", audioKey: "student-life",
    message: "Student Life page par aapka swagat hai. Sunrise mein zindagi sirf books tak seemit nahi — yahan har student apni talent mein shine karta hai.",
  },
  {
    path: "/student-life", scrollId: "studentlife-events", title: "🎉 Events & Activities", audioKey: "studentlife-events",
    message: "Annual functions, sports meets, Republic Day, Independence Day — events ka yeh calendar students mein confidence aur team spirit bharta hai.",
  },
  {
    path: "/student-life", scrollId: "studentlife-clubs", title: "🎨 Clubs", audioKey: "studentlife-clubs",
    message: "Science Club, Music, Dance, Eco Club, Debate Society — 8 se zyada clubs mein bachche apni hidden talents discover karte hain.",
  },
  {
    path: "/student-life", scrollId: "studentlife-gallery", title: "📸 Gallery", audioKey: "studentlife-gallery",
    message: "In tasveeeron mein hai Sunrise ki asli pehchaan — khushi, mehnat, aur ek aise school ki kahani jo apne students ko sach mein pyar karta hai.",
  },

  // ── UPDATES ───────────────────────────────────────────────────────────────
  {
    path: "/updates", scrollId: null, title: "📢 Updates", audioKey: "updates",
    message: "Updates page — school ka digital notice board. Yahan milte hain sab latest announcements, exam schedules aur school news.",
  },
  {
    path: "/updates", scrollId: "updates-notices", title: "📋 Notice Board", audioKey: "updates-notices",
    message: "Yeh hain hamare latest notices — admission updates, exam dates, school events. Sab kuch yahan regularly updated rehta hai.",
  },

  // ── CONTACT ───────────────────────────────────────────────────────────────
  {
    path: "/contact", scrollId: null, title: "📞 Contact Us", audioKey: "contact",
    message: "Contact page — tour ka aakhri padav. Humse miliye, baat kariye, aur apne bachon ke ujjwal future ki shuruaat Sunrise se kariye.",
  },
  {
    path: "/contact", scrollId: "contact-info", title: "📍 Get in Touch", audioKey: "contact-info",
    message: "Phone: +91 9255528310. Mon–Sat, 8 AM to 3 PM. Village Mago Majri, Kaithal, Haryana. Humara darwaza hamesha khula hai — aapka swagat hai!",
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
  if (/hello|hi\b|hey|namaste|namaskar/.test(lower))
    return "Namaste! 🙏 I'm Orbit, your Sunrise School guide. Ask me anything about admissions, academics, facilities, timings, or contact details!";
  if (/thank/.test(lower))
    return "You're welcome! 😊 Feel free to ask anything else. I'm always here to help!";
  if (/admission|apply|enroll|seat|form/.test(lower))
    return "📋 Admissions for 2026-27 are OPEN!\nWe accept from Playway to Class 11.\n\nRequired documents:\n• Birth certificate\n• Last report card\n• Aadhaar copy\n• TC (if transfer)\n• 4 passport photos\n\nVisit school Mon–Sat, 8 AM–3 PM or WhatsApp: +91 92555 28310";
  if (/fee|cost|charge|tuition|tution/.test(lower))
    return "For the fee structure, please contact our admission office directly.\n📞 WhatsApp: +91 92555 28310\n⏰ Mon–Sat, 8:00 AM – 3:00 PM 😊";
  if (/address|location|where|village|kaithal|mago|majri/.test(lower))
    return "📍 Vill. Mago Majri, Kaithal, Haryana.\n\nOur school bus also covers nearby villages! Contact us for route details.";
  if (/contact|phone|number|whatsapp|call|reach/.test(lower))
    return "📞 WhatsApp: +91 92555 28310\n⏰ Mon–Sat, 8:00 AM – 3:00 PM\n📍 Vill. Mago Majri, Kaithal, Haryana";
  if (/cbse|board|affiliation/.test(lower))
    return "✅ Yes! We are CBSE-affiliated.\nAffiliation No. 531671\n\n🏆 100% board results for 6 consecutive years in Class 10 & 12!";
  if (/result|pass|percentage|score/.test(lower))
    return "🏆 100% CBSE board results for 6 consecutive years (2020–2025) in Class 10 & 12!\n\nOur students have excelled across Medical, Non-Medical, Commerce & Arts.";
  if (/principal|khushi|director|head/.test(lower))
    return "👨‍💼 Our Principal: Mr. Khushi Ram\n• Qualification: M.A., B.Ed.\n• Experience: 30+ years in education\n• Leading Sunrise School since 2010";
  if (/stream|science|commerce|arts|medical|non.medical|pcm|pcb/.test(lower))
    return "📚 Class 11 & 12 streams:\n• 🔬 Medical (PCB)\n• ⚙️ Non-Medical (PCM)\n• 💼 Commerce\n• 🎨 Arts\n\nAll streams have experienced, dedicated teachers!";
  if (/timing|time|hour|open|schedule/.test(lower))
    return "⏰ School Timings:\n📅 Monday to Saturday\n🕗 8:00 AM – 3:00 PM\n\nAdmission office operates during the same hours.";
  if (/transport|bus|vehicle|route|pickup/.test(lower))
    return "🚌 Yes! We have a dedicated school bus fleet covering Mago Majri and surrounding areas in Kaithal.\n\nFor route details: +91 92555 28310";
  if (/teacher|faculty|staff/.test(lower))
    return "👩‍🏫 32+ qualified teachers!\n• All hold B.Ed./M.Ed. degrees\n• 7+ years avg. experience\n• Department-wise dedicated faculty\n• Led by Principal Mr. Khushi Ram";
  if (/facilit|lab|library|classroom|sport|infrastructure/.test(lower))
    return "🏫 Campus Facilities:\n• 🖥️ Smart Classrooms\n• 🔬 Science Labs (Physics, Chemistry, Bio, CS)\n• 📚 Rich Library\n• 🏃 Sports Grounds\n• 🚌 School Transport\n• 📹 24/7 CCTV Security";
  if (/establish|founded|year|since|old|history|2010/.test(lower))
    return "📅 Sunrise Senior Secondary School was established in 2010.\n\n15+ years of academic excellence in Kaithal, Haryana! 🎉";
  if (/class|grade|standard|playway|nursery|kg/.test(lower))
    return "📚 Classes offered:\n• Playway, Nursery, KG (Pre-Primary)\n• Class 1–8 (Primary & Middle)\n• Class 9–10 (Secondary)\n• Class 11–12 (Senior Secondary) — 4 streams\n\nAdmissions open for all levels!";
  if (/holiday|vacation|summer|winter|break/.test(lower))
    return "School follows the CBSE / Haryana government holiday calendar. For the exact schedule contact us at +91 92555 28310.";
  return "🤔 I'm not sure about that, but I'd love to help!\n\nTry asking about:\n• Admissions\n• Classes offered\n• Facilities\n• School timings\n• Transport\n• Contact details\n\nOr reach us: +91 92555 28310";
}

export default function AIAssistant() {
  const [phase, setPhase] = useState<Phase | null>(null);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", text: "Namaste! 🙏 I'm Orbit, your Sunrise School guide!\n\nAsk me anything about the school, or tap a quick question below." },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [tourStep, setTourStep] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isPaused, setIsPaused] = useState(false);

  const [location, navigate] = useLocation();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const tourTextRef = useRef<HTMLDivElement>(null);
  const pendingScrollRef = useRef<string | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const sourceNodeRef = useRef<AudioBufferSourceNode | null>(null);
  const welcomeAudioRef = useRef<HTMLAudioElement | null>(null);
  const localBuffers = useRef<Partial<Record<LocalAudioKey, ArrayBuffer>>>({});
  const tourStepRef = useRef(0);
  const speechOnEndedRef = useRef<(() => void) | null>(null);
  const typeIntervalRef = useRef<number | null>(null);

  // ── Typewriter ─────────────────────────────────────────────────────────────
  const startTypewriter = useCallback((text: string) => {
    if (typeIntervalRef.current !== null) {
      clearInterval(typeIntervalRef.current);
      typeIntervalRef.current = null;
    }
    setTypedText("");
    if (!text) return;
    const chars = text.length;
    // Aim for ~4 seconds to type any message, min 20ms max 70ms per char
    const intervalMs = Math.max(20, Math.min(70, 4000 / chars));
    let idx = 0;
    typeIntervalRef.current = window.setInterval(() => {
      idx++;
      setTypedText(text.slice(0, idx));
      if (idx >= chars) {
        clearInterval(typeIntervalRef.current!);
        typeIntervalRef.current = null;
      }
    }, intervalMs);
  }, []);

  // Auto-scroll tour text box as new characters appear
  useEffect(() => {
    if (tourTextRef.current) {
      tourTextRef.current.scrollTop = tourTextRef.current.scrollHeight;
    }
  }, [typedText]);

  // ── Smooth section scroll ──────────────────────────────────────────────────
  const smoothScrollToSection = useCallback((scrollId: string | null) => {
    const doScroll = () => {
      if (!scrollId) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return true;
      }
      const el = document.getElementById(scrollId);
      if (el) {
        const top = Math.max(0, el.getBoundingClientRect().top + window.pageYOffset - 80);
        window.scrollTo({ top, behavior: "smooth" });
        return true;
      }
      return false;
    };
    if (!doScroll()) {
      setTimeout(doScroll, 350);
      setTimeout(doScroll, 750);
    }
  }, []);

  // ── Stop helpers ───────────────────────────────────────────────────────────
  const stopWelcomeSpeech = useCallback(() => {
    if (welcomeAudioRef.current) {
      welcomeAudioRef.current.pause();
      welcomeAudioRef.current.src = "";
      welcomeAudioRef.current = null;
    }
  }, []);

  const stopSpeech = useCallback(() => {
    speechOnEndedRef.current = null;
    if (sourceNodeRef.current) {
      try { sourceNodeRef.current.stop(); } catch { /* already stopped */ }
      sourceNodeRef.current = null;
    }
  }, []);

  // ── Cartesia TTS ───────────────────────────────────────────────────────────
  async function cartesiaFetch(transcript: string): Promise<ArrayBuffer | null> {
    if (!CARTESIA_API_KEY || !CARTESIA_VOICE_ID) return null;
    try {
      const res = await fetch("https://api.cartesia.ai/tts/bytes", {
        method: "POST",
        headers: {
          "X-API-Key": CARTESIA_API_KEY,
          "Cartesia-Version": "2024-06-10",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model_id: CARTESIA_MODEL,
          transcript,
          voice: { mode: "id", id: CARTESIA_VOICE_ID },
          output_format: { container: "mp3", encoding: "mp3", sample_rate: 44100 },
        }),
      });
      if (!res.ok) return null;
      return await res.arrayBuffer();
    } catch {
      return null;
    }
  }

  // Play a pre-generated local audio file
  const speakLocal = useCallback(async (key: LocalAudioKey, onEnded?: () => void) => {
    stopSpeech();
    const raw = localBuffers.current[key];
    if (!raw) {
      if (onEnded) setTimeout(onEnded, 4500);
      return;
    }
    try {
      if (!audioCtxRef.current) audioCtxRef.current = new AudioContext();
      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") await ctx.resume();
      const audioBuffer = await ctx.decodeAudioData(raw.slice(0));
      const source = ctx.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(ctx.destination);
      sourceNodeRef.current = source;
      speechOnEndedRef.current = onEnded ?? null;
      source.start();
      source.onended = () => {
        sourceNodeRef.current = null;
        const cb = speechOnEndedRef.current;
        speechOnEndedRef.current = null;
        if (cb) cb();
      };
    } catch {
      if (onEnded) setTimeout(onEnded, 4500);
    }
  }, [stopSpeech]);

  // Speak via Cartesia runtime TTS
  const speak = useCallback(async (text: string, onEnded?: () => void) => {
    if (!CARTESIA_API_KEY || !CARTESIA_VOICE_ID) {
      if (onEnded) setTimeout(onEnded, 4500);
      return;
    }
    stopSpeech();
    const clean = stripEmojis(text);
    if (!clean) { if (onEnded) setTimeout(onEnded, 1500); return; }
    try {
      if (!audioCtxRef.current) audioCtxRef.current = new AudioContext();
      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") await ctx.resume();
      const buffer = await cartesiaFetch(clean);
      if (!buffer) { if (onEnded) setTimeout(onEnded, 4500); return; }
      const audioBuffer = await ctx.decodeAudioData(buffer);
      const source = ctx.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(ctx.destination);
      sourceNodeRef.current = source;
      speechOnEndedRef.current = onEnded ?? null;
      source.start();
      source.onended = () => {
        sourceNodeRef.current = null;
        const cb = speechOnEndedRef.current;
        speechOnEndedRef.current = null;
        if (cb) cb();
      };
    } catch {
      if (onEnded) setTimeout(onEnded, 4500);
    }
  }, [stopSpeech]);

  // ── Mount: preload audio + welcome ─────────────────────────────────────────
  useEffect(() => {
    setPhase("center");

    // Preload all local audio files in parallel
    LOCAL_AUDIO_KEYS.forEach((key) => {
      fetch(`/audio/${key}.mp3`)
        .then((r) => (r.ok ? r.arrayBuffer() : null))
        .then((buf) => { if (buf) localBuffers.current[key] = buf; })
        .catch(() => {});
    });

    // Welcome audio: play on first user interaction (browser autoplay policy)
    let played = false;
    const playWelcomeOnce = async () => {
      if (played) return;
      played = true;
      let buf = localBuffers.current["welcome"];
      if (!buf) {
        try {
          const r = await fetch("/audio/welcome.mp3");
          if (r.ok) { buf = await r.arrayBuffer(); localBuffers.current["welcome"] = buf; }
        } catch { /* ignore */ }
      }
      if (!buf) return;
      const blob = new Blob([buf], { type: "audio/mpeg" });
      const url = URL.createObjectURL(blob);
      const audio = new Audio(url);
      welcomeAudioRef.current = audio;
      audio.onended = () => URL.revokeObjectURL(url);
      audio.play().catch(() => {});
    };
    document.addEventListener("pointerdown", playWelcomeOnce, { once: true });
    return () => {
      document.removeEventListener("pointerdown", playWelcomeOnce);
      if (typeIntervalRef.current !== null) clearInterval(typeIntervalRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Auto-scroll chat messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // After page navigation, scroll to pending section target
  useEffect(() => {
    if (!pendingScrollRef.current) return;
    const target = pendingScrollRef.current;

    const tryScroll = () => {
      const el = document.getElementById(target);
      if (el) {
        pendingScrollRef.current = null;
        const top = Math.max(0, el.getBoundingClientRect().top + window.pageYOffset - 80);
        window.scrollTo({ top, behavior: "smooth" });
        return true;
      }
      return false;
    };

    const t1 = setTimeout(tryScroll, 250);
    const t2 = setTimeout(() => { if (pendingScrollRef.current) tryScroll(); }, 600);
    const t3 = setTimeout(() => { if (pendingScrollRef.current) tryScroll(); }, 1000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  // ── Tour navigation ────────────────────────────────────────────────────────
  function goToTourStep(idx: number) {
    const step = TOUR_STEPS[idx];
    if (!step) return;
    const prevPath = TOUR_STEPS[tourStepRef.current]?.path ?? location;
    tourStepRef.current = idx;
    setTourStep(idx);
    stopSpeech();

    // Start typewriter immediately — text types in while audio loads/plays
    startTypewriter(step.message);

    const isSamePage = step.path === prevPath || step.path === location;

    if (isSamePage) {
      smoothScrollToSection(step.scrollId);
    } else {
      if (step.scrollId) {
        pendingScrollRef.current = step.scrollId;
      } else {
        pendingScrollRef.current = null;
        setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 200);
      }
      navigate(step.path);
    }

    const advance = () => {
      const nextIdx = tourStepRef.current + 1;
      if (nextIdx < TOUR_STEPS.length) {
        goToTourStep(nextIdx);
      } else {
        stopSpeech();
        setPhase("corner");
      }
    };

    if (step.audioKey) {
      speakLocal(step.audioKey, advance);
    } else {
      speak(step.message, advance);
    }
  }

  function dismissToCorner() {
    stopWelcomeSpeech();
    stopSpeech();
    if (typeIntervalRef.current !== null) { clearInterval(typeIntervalRef.current); typeIntervalRef.current = null; }
    setPhase("corner");
  }

  function startTour() {
    stopWelcomeSpeech();
    tourStepRef.current = 0;
    setTourStep(0);
    setPhase("tour");
    pendingScrollRef.current = null;

    const firstStep = TOUR_STEPS[0];
    startTypewriter(firstStep.message);
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(firstStep.path);

    const advance = () => {
      const nextIdx = tourStepRef.current + 1;
      if (nextIdx < TOUR_STEPS.length) goToTourStep(nextIdx);
    };

    if (firstStep.audioKey) {
      speakLocal(firstStep.audioKey, advance);
    } else {
      speak(firstStep.message, advance);
    }
  }

  function openChat() {
    stopSpeech();
    if (typeIntervalRef.current !== null) { clearInterval(typeIntervalRef.current); typeIntervalRef.current = null; }
    setPhase("chat");
  }

  function closePanel() {
    stopSpeech();
    if (typeIntervalRef.current !== null) { clearInterval(typeIntervalRef.current); typeIntervalRef.current = null; }
    setPhase("corner");
  }

  async function sendMessage(text?: string) {
    const q = (text ?? input).trim();
    if (!q || isTyping) return;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: q }]);
    setIsTyping(true);
    try {
      if (GROQ_API_KEY) {
        const history = messages.map((m) => ({ role: m.role, content: m.text }));
        const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
          method: "POST",
          headers: { "Authorization": `Bearer ${GROQ_API_KEY}`, "Content-Type": "application/json" },
          body: JSON.stringify({
            model: GROQ_MODEL,
            messages: [{ role: "system", content: GROQ_SYSTEM_PROMPT }, ...history, { role: "user", content: q }],
            max_tokens: 300,
            temperature: 0.4,
          }),
        });
        if (res.ok) {
          const data = await res.json() as { choices: { message: { content: string } }[] };
          const reply = data.choices?.[0]?.message?.content?.trim() ?? getAnswer(q);
          setMessages((prev) => [...prev, { role: "assistant", text: reply }]);
          return;
        }
      }
      setMessages((prev) => [...prev, { role: "assistant", text: getAnswer(q) }]);
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", text: getAnswer(q) }]);
    } finally {
      setIsTyping(false);
    }
  }

  function pauseTour() {
    setIsPaused(true);
    stopSpeech();
    if (typeIntervalRef.current !== null) {
      clearInterval(typeIntervalRef.current);
      typeIntervalRef.current = null;
    }
  }

  function resumeTour() {
    setIsPaused(false);
    goToTourStep(tourStepRef.current);
  }

  function nextTourStep() {
    setIsPaused(false);
    if (tourStep < TOUR_STEPS.length - 1) {
      goToTourStep(tourStep + 1);
    } else {
      stopSpeech();
      setPhase("corner");
    }
  }

  function prevTourStep() {
    setIsPaused(false);
    if (tourStep > 0) goToTourStep(tourStep - 1);
  }

  if (phase === null) return null;

  const currentStep = TOUR_STEPS[tourStep];
  const isTourDone = tourStep >= TOUR_STEPS.length - 1;

  return (
    <>
      {/* ── CENTER WELCOME POPUP ──────────────────────────────────────────── */}
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
              <div className="flex flex-col items-center pointer-events-auto" onClick={(e) => e.stopPropagation()}>
                <img src="/images/ai-bot.png" alt="AI Assistant" className="w-44 h-44 object-contain drop-shadow-2xl" />
                <motion.div
                  className="relative bg-white rounded-2xl shadow-2xl px-7 py-6 max-w-xs text-center -mt-2 border border-border"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <button
                    onClick={dismissToCorner}
                    className="absolute top-3 right-3 p-1 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    aria-label="Close"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Your Guide</p>
                  <h3 className="text-lg font-bold text-foreground mb-1.5">Hi! I'm Orbit 👋</h3>
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                    Welcome to Sunrise School! Take a guided tour through every section, or ask me anything about the school.
                  </p>
                  <div className="flex gap-3 justify-center">
                    <motion.button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); startTour(); }}
                      whileHover={{ scale: 1.06 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-5 py-2 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary/90 transition-colors shadow-sm"
                    >
                      Start Tour
                    </motion.button>
                    <motion.button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); stopWelcomeSpeech(); openChat(); }}
                      whileHover={{ scale: 1.06 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-5 py-2 bg-muted text-muted-foreground text-sm font-semibold rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      Ask Anything
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── CORNER ROBOT ─────────────────────────────────────────────────── */}
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

      {/* ── CHAT WINDOW ──────────────────────────────────────────────────── */}
      <AnimatePresence>
        {phase === "chat" && (
          <motion.div
            key="chat"
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 320, damping: 26 }}
            className="fixed bottom-56 right-5 z-[70] w-[280px] bg-white rounded-2xl shadow-2xl border border-border flex flex-col overflow-hidden"
            style={{ maxHeight: "calc(100vh - 300px)", minHeight: "320px" }}
          >
            <div className="bg-primary px-4 py-3 flex items-center gap-3 shrink-0">
              <img src="/images/ai-bot.png" alt="Orbit" className="w-9 h-9 object-contain" />
              <div className="flex-1">
                <p className="text-white font-bold text-sm leading-none">Orbit</p>
                <p className="text-white/70 text-xs mt-0.5">Sunrise School Guide • Online</p>
              </div>
              <button
                onClick={() => startTour()}
                className="text-white/70 hover:text-white text-xs font-semibold px-2 py-1 rounded-full hover:bg-white/20 transition-colors mr-1"
              >
                Tour
              </button>
              <button onClick={closePanel} className="text-white/80 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto overscroll-contain p-3 space-y-2.5 bg-muted/20" style={{ minHeight: 0 }}>
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
              {isTyping && (
                <div className="flex justify-start">
                  <img src="/images/ai-bot.png" alt="" className="w-6 h-6 object-contain self-end mr-1.5 shrink-0" />
                  <div className="bg-white text-foreground shadow-sm border border-border/60 rounded-2xl rounded-bl-sm px-3 py-2 flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="px-2.5 py-2 flex gap-1.5 overflow-x-auto border-t border-border bg-white shrink-0">
              {QUICK_QUESTIONS.map((q) => (
                <button
                  key={q}
                  onClick={() => sendMessage(q)}
                  disabled={isTyping}
                  className="shrink-0 text-[10px] font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors whitespace-nowrap disabled:opacity-40"
                >
                  {q}
                </button>
              ))}
            </div>

            <div className="p-2.5 border-t border-border bg-white flex gap-2 items-center shrink-0">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder={isTyping ? "Orbit is typing..." : "Ask about Sunrise School..."}
                disabled={isTyping}
                className="flex-1 text-xs px-3 py-2 rounded-full border border-border focus:outline-none focus:border-primary bg-muted/30 disabled:opacity-60"
              />
              <button
                onClick={() => sendMessage()}
                disabled={!input.trim() || isTyping}
                className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center disabled:opacity-40 hover:bg-primary/90 transition-colors shrink-0"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── TOUR PANEL ───────────────────────────────────────────────────── */}
      <AnimatePresence>
        {phase === "tour" && (
          <motion.div
            key="tour"
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 320, damping: 26 }}
            className="fixed bottom-56 right-5 z-[70] w-[280px] bg-white rounded-2xl shadow-2xl border border-border flex flex-col overflow-hidden"
            style={{ height: "300px" }}
          >
            {/* Header */}
            <div className="bg-primary px-4 py-3 flex items-center gap-3 shrink-0">
              <motion.img
                src="/images/ai-bot.png"
                alt="Orbit"
                className="w-9 h-9 object-contain"
                animate={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="flex-1 min-w-0">
                <p className="text-white font-bold text-sm leading-none">School Tour</p>
                <p className="text-white/70 text-xs mt-0.5 truncate">
                  {currentStep?.title ?? ""} · {tourStep + 1}/{TOUR_STEPS.length}
                </p>
              </div>
              <button
                onClick={() => { closePanel(); setPhase("chat"); }}
                className="text-white/70 hover:text-white text-xs font-semibold px-2 py-1 rounded-full hover:bg-white/20 transition-colors mr-1 shrink-0"
              >
                Chat
              </button>
              <button onClick={closePanel} className="text-white/80 hover:text-white transition-colors shrink-0">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Progress bar */}
            <div className="flex gap-0.5 px-3 pt-3 shrink-0">
              {TOUR_STEPS.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                    i < tourStep ? "bg-primary/40" : i === tourStep ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>

            {/* Typewriter text area — fixed height, scrollable */}
            <div
              ref={tourTextRef}
              className="flex-1 overflow-y-auto overscroll-contain px-4 py-3 min-h-0"
              style={{ scrollBehavior: "smooth" }}
            >
              <p className="text-sm text-foreground leading-relaxed whitespace-pre-wrap">
                {typedText}
                {typeIntervalRef.current !== null && (
                  <span className="inline-block w-0.5 h-4 bg-primary ml-0.5 align-middle animate-pulse" />
                )}
              </p>
            </div>

            {/* Navigation buttons */}
            <div className="px-4 pb-4 flex gap-2 shrink-0">
              <button
                onClick={prevTourStep}
                disabled={tourStep === 0}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl border border-border text-xs font-semibold text-muted-foreground hover:bg-muted/40 disabled:opacity-30 transition-colors"
              >
                <ChevronLeft className="w-3.5 h-3.5" /> Prev
              </button>
              <button
                onClick={isPaused ? resumeTour : pauseTour}
                title={isPaused ? "Resume Tour" : "Pause Tour"}
                className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors border ${
                  isPaused
                    ? "bg-primary text-white border-primary hover:bg-primary/90"
                    : "border-border text-muted-foreground hover:bg-muted/40"
                }`}
              >
                {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={nextTourStep}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-semibold transition-colors bg-primary text-white hover:bg-primary/90"
              >
                {isTourDone ? "Finish" : "Next"} <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
