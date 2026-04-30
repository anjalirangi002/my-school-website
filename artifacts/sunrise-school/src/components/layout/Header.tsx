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

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b border-transparent ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-border py-2" : "bg-white py-3"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between gap-4 lg:gap-8 xl:gap-12">

            {/* Logo block */}
            <Link href="/" className="flex items-center gap-3 group min-w-0 flex-shrink">
              <img
                src={schoolLogo}
                alt="Sunrise Senior Secondary School official crest"
                className="w-11 h-11 md:w-12 md:h-12 object-contain shrink-0 group-hover:scale-105 transition-transform"
              />
              <div className="flex flex-col min-w-0">
                <span className="font-bold text-sm md:text-base lg:text-[15px] xl:text-base 2xl:text-lg leading-tight text-foreground truncate">
                  Sunrise Senior Secondary School
                </span>
                <span className="text-[9px] md:text-[10px] lg:text-[10px] xl:text-xs font-medium text-muted-foreground uppercase tracking-wider truncate">
                  CBSE Affiliated • No. 531671 • Est. 2010
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 flex-shrink-0">
              {NAV_LINKS.map((link) => {
                const isActive = location === link.href;
                const isContact = link.href === "/contact";

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all relative group whitespace-nowrap ${
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
              <div className="pl-3 ml-2 border-l border-border">
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-sm whitespace-nowrap">
                  <Link href="/contact">Admission Open</Link>
                </Button>
              </div>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 -mr-2 text-foreground flex-shrink-0"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Backdrop */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/40 z-40 backdrop-blur-sm transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer (sibling of header so it's never clipped) */}
      <aside
        className={`lg:hidden fixed top-0 left-0 bottom-0 w-72 max-w-[85vw] bg-white shadow-2xl border-r border-border z-50 transform transition-transform duration-300 ease-out flex flex-col ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Mobile navigation"
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between gap-3 px-4 py-4 border-b border-border bg-primary/5 flex-shrink-0">
          <div className="flex items-center gap-2 min-w-0">
            <img
              src={schoolLogo}
              alt=""
              className="w-9 h-9 object-contain shrink-0"
            />
            <span className="font-bold text-sm text-foreground truncate">Sunrise Sr. Sec. School</span>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors flex-shrink-0"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer nav links */}
        <nav className="flex-1 overflow-y-auto py-4 px-3">
          <ul className="flex flex-col gap-1.5">
            {NAV_LINKS.map((link) => {
              const isActive = location === link.href;
              const isContact = link.href === "/contact";
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block px-4 py-3 rounded-md text-base font-medium transition-colors border-l-4 ${
                      isActive
                        ? "bg-primary/10 text-primary border-primary"
                        : isContact
                          ? "bg-primary/5 text-primary border-primary/40 hover:bg-primary/10"
                          : "text-foreground hover:bg-muted border-transparent"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Drawer footer CTA */}
        <div className="p-4 border-t border-border bg-muted/20 flex-shrink-0">
          <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-12 text-base">
            <Link href="/contact">Admission Open</Link>
          </Button>
          <p className="text-center text-xs text-muted-foreground mt-3">
            CBSE Affiliated • No. 531671
          </p>
        </div>
      </aside>
    </>
  );
}
