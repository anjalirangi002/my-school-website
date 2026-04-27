import { Link, useLocation } from "wouter";
import { Menu, X, BookOpen, GraduationCap, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import schoolLogo from "@assets/sunrise_logo.png";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Campus", href: "/campus" },
  { label: "Co-curricular", href: "/co-curricular" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-border py-2" : "bg-white py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src={schoolLogo}
              alt="Sunrise Senior Secondary School official crest"
              className="w-12 h-12 md:w-14 md:h-14 object-contain shrink-0 group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <span className="font-bold text-lg md:text-xl leading-tight text-foreground">
                Sunrise Senior Secondary School
              </span>
              <span className="text-[10px] md:text-xs font-medium text-muted-foreground uppercase tracking-wider">
                CBSE Affiliated • No. 531671 • Est. 2010
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location === link.href 
                    ? "bg-primary/10 text-primary" 
                    : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pl-4 ml-2 border-l border-border">
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-sm">
                <Link href="/admissions">Apply Now</Link>
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg p-4 flex flex-col gap-2">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`px-4 py-3 rounded-md text-base font-medium transition-colors ${
                location === link.href 
                  ? "bg-primary/10 text-primary" 
                  : "text-foreground hover:bg-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="mt-4 w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-12">
            <Link href="/admissions">Admissions Open — Apply Now</Link>
          </Button>
        </div>
      )}
    </header>
  );
}
