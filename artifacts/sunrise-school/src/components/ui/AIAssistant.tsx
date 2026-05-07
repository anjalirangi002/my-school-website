import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Phase = "center" | "corner";

export default function AIAssistant() {
  const [phase, setPhase] = useState<Phase | null>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("aiAssistantSeen");
    setPhase(seen ? "corner" : "center");
  }, []);

  function dismiss() {
    setPhase("corner");
    sessionStorage.setItem("aiAssistantSeen", "true");
  }

  function reopen() {
    setPhase("center");
  }

  if (phase === null) return null;

  return (
    <>
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
              onClick={dismiss}
            />

            <motion.div
              key="center-card"
              initial={{ opacity: 0, scale: 0.4, y: 60 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.3, x: "calc(50vw - 60px)", y: "calc(50vh - 60px)" }}
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
                  transition={{ delay: 0.25, duration: 0.4 }}
                >
                  <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Your Guide</p>
                  <h3 className="text-lg font-bold text-foreground mb-1.5">Hi! I'm Aria 👋</h3>
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                    Welcome to Sunrise School! Would you like a quick tour of our website?
                  </p>
                  <div className="flex gap-3 justify-center">
                    <motion.button
                      onClick={dismiss}
                      whileHover={{ scale: 1.06 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-5 py-2 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary/90 transition-colors shadow-sm"
                    >
                      Start Tour
                    </motion.button>
                    <motion.button
                      onClick={dismiss}
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

      <AnimatePresence>
        {phase === "corner" && (
          <motion.button
            key="corner-bot"
            initial={{ opacity: 0, scale: 0, x: 80, y: 80 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
            onClick={reopen}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            className="fixed bottom-24 right-5 z-[60] flex flex-col items-center focus:outline-none"
            aria-label="Open assistant"
          >
            <AnimatePresence>
              {hovered && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.88 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.88 }}
                  transition={{ duration: 0.18 }}
                  className="mb-1.5 bg-white text-foreground text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap border border-border"
                >
                  Need help? Click me! 😊
                </motion.div>
              )}
            </AnimatePresence>

            <motion.img
              src="/images/ai-bot.png"
              alt="AI Assistant"
              className="w-16 h-16 object-contain drop-shadow-xl"
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.18, rotate: [0, -5, 5, 0] }}
            />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
