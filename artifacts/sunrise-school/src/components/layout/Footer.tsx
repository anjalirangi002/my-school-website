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
