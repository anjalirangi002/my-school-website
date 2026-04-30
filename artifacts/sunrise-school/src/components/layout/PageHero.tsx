import { motion } from "framer-motion";
import type { ReactNode } from "react";

type PageHeroProps = {
  image: string;
  alt: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  height?: string;
};

/**
 * Shared full-width hero banner used at the top of every internal page.
 * Keeps the existing blue + white school identity while ensuring every page
 * opens with a strong, image-led impression.
 */
export default function PageHero({
  image,
  alt,
  eyebrow,
  title,
  subtitle,
  height = "h-[55vh] min-h-[380px] md:min-h-[440px]",
}: PageHeroProps) {
  return (
    <section
      className={`relative ${height} w-full flex items-center justify-center overflow-hidden bg-primary/10`}
    >
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          src={image}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/40 to-black/70" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 mt-16 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl mx-auto flex flex-col items-center gap-5"
        >
          {eyebrow && (
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-xs md:text-sm font-semibold tracking-wide uppercase border border-white/30"
            >
              {eyebrow}
            </motion.span>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg md:text-xl text-white/90 max-w-2xl font-medium drop-shadow-md"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>

      {/* Bottom curve to keep the visual gentle and premium */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-background"
           style={{ clipPath: "ellipse(75% 100% at 50% 100%)" }} />
    </section>
  );
}
