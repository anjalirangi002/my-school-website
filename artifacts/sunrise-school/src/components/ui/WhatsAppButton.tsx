import { motion } from "framer-motion";

const PHONE = "919255528310";
const MESSAGE = encodeURIComponent(
  "Hello, I would like to inquire about admissions at Sunrise Senior Secondary School. Please share details about the available classes and admission process."
);
const WA_URL = `https://wa.me/${PHONE}?text=${MESSAGE}`;

export default function WhatsAppButton() {
  return (
    <motion.a
      href={WA_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp for admission inquiry"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg shadow-green-500/30 bg-[#25D366] text-white"
    >
      {/* Pulsing ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none" />

      {/* WhatsApp SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-7 h-7 fill-white relative z-10"
        aria-hidden="true"
      >
        <path d="M16 2C8.28 2 2 8.28 2 16c0 2.48.66 4.82 1.82 6.84L2 30l7.34-1.8A13.94 13.94 0 0 0 16 30c7.72 0 14-6.28 14-14S23.72 2 16 2Zm0 25.5a11.44 11.44 0 0 1-5.84-1.6l-.42-.25-4.36 1.07 1.1-4.24-.28-.44A11.46 11.46 0 0 1 4.5 16C4.5 9.6 9.6 4.5 16 4.5S27.5 9.6 27.5 16 22.4 27.5 16 27.5Zm6.28-8.56c-.34-.17-2.02-.99-2.34-1.11-.31-.11-.54-.17-.77.17s-.88 1.11-1.08 1.34c-.2.23-.39.25-.73.08a9.3 9.3 0 0 1-2.73-1.68 10.2 10.2 0 0 1-1.89-2.35c-.2-.34-.02-.52.15-.69.15-.15.34-.39.51-.59.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.08-.17-.77-1.85-1.05-2.53-.28-.66-.56-.57-.77-.58h-.66c-.23 0-.59.08-.9.43s-1.18 1.15-1.18 2.8 1.21 3.25 1.38 3.47c.17.23 2.38 3.63 5.77 5.09.81.35 1.44.56 1.93.71.81.26 1.55.22 2.13.13.65-.1 2.02-.82 2.3-1.62.28-.8.28-1.48.2-1.62-.08-.14-.31-.23-.65-.4Z" />
      </svg>
    </motion.a>
  );
}
