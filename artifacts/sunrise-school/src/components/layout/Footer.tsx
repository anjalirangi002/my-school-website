import { motion } from "framer-motion";
import { Link } from "wouter";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { fadeUp, stagger, inView } from "@/lib/animations";
import schoolLogo from "@assets/sunrise_logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white border-t-4 border-primary">
      <div className="container mx-auto px-4 md:px-6 pt-16 pb-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
        >
          {/* Brand */}
          <motion.div variants={fadeUp} className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <img
                src={schoolLogo}
                alt="Sunrise Senior Secondary School logo"
                className="w-12 h-12 object-contain shrink-0"
              />
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight text-white">
                  Sunrise Senior Secondary School
                </span>
                <span className="text-xs font-medium text-primary-foreground/80 uppercase tracking-wider">
                  CBSE Affiliated • No. 531671
                </span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              To provide quality education that balances academic excellence with character building and cultural values.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/sunrise_sen_sec_school_ktl?igsh=NjhlNThha3Q0YjJm"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary transition-colors duration-200 flex items-center justify-center"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/share/1BPgni6KVu/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary transition-colors duration-200 flex items-center justify-center"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeUp} className="flex flex-col gap-6">
            <h3 className="font-bold text-lg border-b-2 border-primary/50 pb-2 inline-block self-start">Quick Links</h3>
            <ul className="flex flex-col gap-3 text-white/80">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Academic", href: "/academic" },
                { label: "Faculty", href: "/faculty" },
                { label: "Student Life", href: "/student-life" },
                { label: "Updates", href: "/updates" },
                { label: "Contact Us", href: "/contact" },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="hover:text-primary transition-colors duration-200 hover:pl-1 inline-block"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeUp} className="flex flex-col gap-6">
            <h3 className="font-bold text-lg border-b-2 border-primary/50 pb-2 inline-block self-start">Contact Us</h3>
            <ul className="flex flex-col gap-4 text-white/80 text-sm">
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200" />
                <span>Vill. Mago Majri (Mago Manas), Khanouri Road, Near Kaithal, Haryana 136027</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-primary shrink-0 group-hover:scale-110 transition-transform duration-200" />
                <div className="flex flex-col">
                  <a href="tel:+919255528310" className="hover:text-primary transition-colors">+91-9255528310</a>
                  <a href="tel:+918397877909" className="hover:text-primary transition-colors">+91-8397877909</a>
                </div>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-primary shrink-0 group-hover:scale-110 transition-transform duration-200" />
                <a href="mailto:sunrisesr.secschool@yahoo.com" className="hover:text-primary transition-colors break-all">
                  sunrisesr.secschool@yahoo.com
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200" />
                <div className="flex flex-col">
                  <span>08:00 AM – 03:00 PM</span>
                  <span className="text-white/60 text-xs">Monday – Saturday</span>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Working Hours */}
          <motion.div variants={fadeUp} className="flex flex-col gap-6">
            <h3 className="font-bold text-lg border-b-2 border-primary/50 pb-2 inline-block self-start">Working Hours</h3>
            <div className="w-full text-white/80 text-sm space-y-2">
              <div className="grid grid-cols-[1fr_auto] gap-x-4 border-b border-white/10 pb-2">
                <span>Monday – Friday</span>
                <span className="whitespace-nowrap text-right">8:00 AM – 3:00 PM</span>
              </div>
              <div className="grid grid-cols-[1fr_auto] gap-x-4 border-b border-white/10 pb-2">
                <span>Saturday</span>
                <span className="whitespace-nowrap text-right">8:00 AM – 3:00 PM</span>
              </div>
              <div className="grid grid-cols-[1fr_auto] gap-x-4 text-white/50">
                <span>Sunday</span>
                <span className="text-right">Closed</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={inView}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50 text-center md:text-left"
        >
          <p>© {currentYear} Sunrise Senior Secondary School. All rights reserved.</p>
          <div className="flex gap-4 items-center justify-center md:justify-end">
            <span>CBSE Affiliated • Est. 2010</span>
            <span className="hidden md:inline">|</span>
            <span>Managed by Sunrise Education Society</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
