import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import schoolLogo from "@assets/sunrise_logo.png";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Academic", href: "/academic" },
  { label: "Student Life", href: "/student-life" },
  { label: "Contact Us", href: "/contact" },
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
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-border py-2" : "bg-white py-4"
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
            {NAV_LINKS.map((link) => {
              const isActive = location === link.href;
              const isContact = link.href === "/contact";
              
              return (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all relative group ${
                    isActive
                      ? "text-primary bg-primary/10"
                      : isContact 
                        ? "text-primary bg-primary/5 hover:bg-primary/10" 
                        : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {link.label}
                  {!isActive && !isContact && (
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary -translate-x-1/2 transition-all duration-300 group-hover:w-full rounded-full"></span>
                  )}
                </Link>
              );
            })}
            <div className="pl-4 ml-2 border-l border-border">
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-sm">
                <Link href="/contact">Admission Open</Link>
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
      <div 
        className={`lg:hidden fixed inset-y-0 left-0 w-64 bg-white border-r border-border shadow-2xl transform transition-transform duration-300 z-50 flex flex-col ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 border-b border-border flex justify-between items-center bg-muted/30">
          <span className="font-bold text-primary">Menu</span>
          <button onClick={() => setMobileMenuOpen(false)} className="text-muted-foreground hover:text-foreground">
             <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-4 flex flex-col gap-2 flex-1 overflow-y-auto">
          {NAV_LINKS.map((link) => {
            const isActive = location === link.href;
            const isContact = link.href === "/contact";
            return (
              <Link 
                key={link.href} 
                href={link.href}
                className={`px-4 py-3 rounded-md text-base font-medium transition-colors ${
                  isActive 
                    ? "bg-primary/10 text-primary border-l-4 border-primary" 
                    : isContact
                      ? "bg-primary/5 text-primary border-l-4 border-transparent"
                      : "text-foreground hover:bg-muted border-l-4 border-transparent"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <div className="p-4 border-t border-border bg-muted/10">
          <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-12">
            <Link href="/contact">Admission Open</Link>
          </Button>
        </div>
      </div>
      
      {/* Mobile Backdrop */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/20 z-40 backdrop-blur-sm transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </header>
  );
}
