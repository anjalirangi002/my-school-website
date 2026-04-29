import { Link } from "wouter";
import { MapPin, Phone, Mail, Clock, Sun } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white border-t-4 border-primary">
      <div className="container mx-auto px-4 md:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shrink-0">
                <Sun className="w-6 h-6" />
              </div>
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
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="font-bold text-lg border-b-2 border-primary/50 pb-2 inline-block self-start">Quick Links</h3>
            <ul className="flex flex-col gap-3 text-white/80">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/academic" className="hover:text-primary transition-colors">Academic</Link></li>
              <li><Link href="/student-life" className="hover:text-primary transition-colors">Student Life</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <h3 className="font-bold text-lg border-b-2 border-primary/50 pb-2 inline-block self-start">Contact Us</h3>
            <ul className="flex flex-col gap-4 text-white/80 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Vill. Mago Majri (Mago Manas), Khanouri Road, Near Kaithal, Haryana 136027</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <div className="flex flex-col">
                  <span>+91-9255528310</span>
                  <span>+91-8397877909</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>sunrisesr.secschool@yahoo.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span>08:00 AM – 03:00 PM</span>
                  <span className="text-white/60 text-xs">Monday – Saturday</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div className="flex flex-col gap-6">
            <h3 className="font-bold text-lg border-b-2 border-primary/50 pb-2 inline-block self-start">Working Hours</h3>
            <div className="w-full text-white/80 text-sm space-y-2">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Monday - Friday</span>
                <span>08:00 AM - 03:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Saturday</span>
                <span>08:00 AM - 03:00 PM</span>
              </div>
              <div className="flex justify-between text-white/50">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50 text-center md:text-left">
          <p>© {currentYear} Sunrise Senior Secondary School. All rights reserved.</p>
          <div className="flex gap-4 items-center justify-center md:justify-end">
            <span>CBSE Affiliated • Est. 2010</span>
            <span className="hidden md:inline">|</span>
            <span>Managed by Sunrise Education Society</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
