/**
 * Header.tsx
 * -----------------------------------------------------------------------------
 * Sticky top navigation for Sunrise Senior Secondary School.
 *
 * Sections in this file (in order):
 *   1. Imports
 *   2. Constants & types         — Nav link list, scroll threshold
 *   3. Custom hooks              — useStickyScroll, useBodyScrollLock,
 *                                  useCloseOnRouteChange
 *   4. Sub-components            — BrandLogo, DesktopNav, MobileToggleButton,
 *                                  MobileBackdrop, MobileDrawer
 *   5. Main Header component     — Composes everything
 *
 * Visual behaviour is intentionally identical to the previous version; this
 * file only restructures the code for readability and maintainability.
 * -----------------------------------------------------------------------------
 */

// 1. Imports ------------------------------------------------------------------
import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import schoolLogo from "@assets/sunrise_logo.png";

// 2. Constants & types --------------------------------------------------------
type NavLink = {
  label: string;
  href: string;
};

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Academic", href: "/academic" },
  { label: "Faculty", href: "/faculty" },
  { label: "Student Life", href: "/student-life" },
  { label: "Updates", href: "/updates" },
  { label: "Contact Us", href: "/contact" },
];

const CONTACT_HREF = "/contact";
const SCROLL_THRESHOLD_PX = 20;

// 3. Custom hooks -------------------------------------------------------------

/** Tracks whether the user has scrolled past `threshold` pixels. */
function useStickyScroll(threshold = SCROLL_THRESHOLD_PX): boolean {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return isScrolled;
}

/** Locks body scroll while a flag (e.g. mobile drawer) is open. */
function useBodyScrollLock(isLocked: boolean): void {
  useEffect(() => {
    document.body.style.overflow = isLocked ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLocked]);
}

/** Calls `onChange(false)` whenever the wouter route changes. */
function useCloseOnRouteChange(onChange: (open: boolean) => void): void {
  const [location] = useLocation();
  useEffect(() => {
    onChange(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);
}

// 4. Sub-components -----------------------------------------------------------

/** Logo + school name block — appears on the extreme left of the navbar. */
function BrandLogo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 group min-w-0 flex-shrink-0 lg:flex-shrink"
    >
      <img
        src={schoolLogo}
        alt="Sunrise Senior Secondary School official crest"
        className="w-11 h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 object-contain shrink-0 group-hover:scale-105 transition-transform"
      />
      <div className="hidden sm:flex flex-col min-w-0 leading-tight">
        <span className="font-bold text-sm md:text-base lg:text-sm xl:text-[15px] 2xl:text-lg text-foreground truncate">
          <span className="lg:hidden 2xl:inline">Sunrise Senior Secondary School</span>
          <span className="hidden lg:inline 2xl:hidden">Sunrise Sr. Sec. School</span>
        </span>
        <span className="text-[9px] md:text-[10px] lg:text-[10px] xl:text-xs font-medium text-muted-foreground uppercase tracking-wider truncate mt-0.5">
          <span className="lg:hidden 2xl:inline">CBSE Affiliated • No. 531671 • Est. 2010</span>
          <span className="hidden lg:inline 2xl:hidden">CBSE • No. 531671 • Est. 2010</span>
        </span>
      </div>
    </Link>
  );
}

/** Build the className for a desktop nav link based on its state. */
function getDesktopLinkClasses(isActive: boolean, isContact: boolean): string {
  const base =
    "px-3 lg:px-3.5 xl:px-4 py-2 rounded-lg text-sm xl:text-[15px] font-medium transition-all duration-200 relative group whitespace-nowrap";

  if (isContact) {
    const contactBase = `${base} font-semibold border tracking-wide`;
    if (isActive) {
      return `${contactBase} text-primary-foreground bg-primary border-primary shadow-sm`;
    }
    return `${contactBase} text-primary bg-primary/5 border-primary/30 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-sm`;
  }

  if (isActive) return `${base} text-primary bg-primary/10`;
  return `${base} text-foreground/80 hover:text-primary hover:bg-primary/5`;
}

/** Desktop navigation: nav links + Admission Open CTA. */
function DesktopNav({ currentPath }: { currentPath: string }) {
  return (
    <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2.5 2xl:gap-4 flex-shrink-0">
      {NAV_LINKS.map((link) => {
        const isActive = currentPath === link.href;
        const isContact = link.href === CONTACT_HREF;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={getDesktopLinkClasses(isActive, isContact)}
          >
            {link.label}
            {!isActive && !isContact && (
              <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-primary -translate-x-1/2 transition-all duration-300 group-hover:w-1/2 rounded-full" />
            )}
          </Link>
        );
      })}

    </nav>
  );
}

/** Hamburger / close icon button — visible only on mobile. */
function MobileToggleButton({
  isOpen,
  onToggle,
}: {
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      className="lg:hidden p-2 -mr-2 text-foreground flex-shrink-0"
      onClick={onToggle}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
    </button>
  );
}

/** Semi-transparent overlay shown behind the open mobile drawer. */
function MobileBackdrop({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <div
      className={`lg:hidden fixed inset-0 bg-black/40 z-40 backdrop-blur-sm transition-opacity duration-300 ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
      aria-hidden="true"
    />
  );
}

/** Build the className for a mobile drawer link based on its state. */
function getMobileLinkClasses(isActive: boolean, isContact: boolean): string {
  const base =
    "block px-4 py-3 rounded-md text-base font-medium transition-colors border-l-4";

  if (isActive) return `${base} bg-primary/10 text-primary border-primary`;
  if (isContact)
    return `${base} bg-primary/5 text-primary border-primary/40 hover:bg-primary/10`;
  return `${base} text-foreground hover:bg-muted border-transparent`;
}

/** Slide-in mobile drawer — sibling of <header> so it never gets clipped. */
function MobileDrawer({
  isOpen,
  onClose,
  currentPath,
}: {
  isOpen: boolean;
  onClose: () => void;
  currentPath: string;
}) {
  return (
    <aside
      className={`lg:hidden fixed top-0 left-0 bottom-0 w-72 max-w-[85vw] bg-white shadow-2xl border-r border-border z-50 transform transition-transform duration-300 ease-out flex flex-col ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      aria-label="Mobile navigation"
    >
      {/* Drawer top: compact logo + close button */}
      <div className="flex items-center justify-between gap-3 px-4 py-4 border-b border-border bg-primary/5 flex-shrink-0">
        <div className="flex items-center gap-2 min-w-0">
          <img src={schoolLogo} alt="" className="w-9 h-9 object-contain shrink-0" />
          <span className="font-bold text-sm text-foreground truncate">
            Sunrise Sr. Sec. School
          </span>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors flex-shrink-0"
          aria-label="Close menu"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Drawer middle: scrollable nav links */}
      <nav className="flex-1 overflow-y-auto py-4 px-3">
        <ul className="flex flex-col gap-1.5">
          {NAV_LINKS.map((link) => {
            const isActive = currentPath === link.href;
            const isContact = link.href === CONTACT_HREF;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={getMobileLinkClasses(isActive, isContact)}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Drawer bottom: CBSE badge */}
      <div className="p-4 border-t border-border bg-muted/20 flex-shrink-0">
        <p className="text-center text-xs text-muted-foreground">
          CBSE Affiliated • No. 531671
        </p>
      </div>
    </aside>
  );
}

// 5. Main Header component ----------------------------------------------------
export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isScrolled = useStickyScroll();
  useBodyScrollLock(mobileMenuOpen);
  useCloseOnRouteChange(setMobileMenuOpen);

  const headerClass = `fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b border-transparent ${
    isScrolled
      ? "bg-white/95 backdrop-blur-md shadow-lg border-border py-2"
      : "bg-white py-3"
  }`;

  return (
    <>
      <header className={headerClass}>
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-10">
          <div className="flex items-center justify-between gap-6 lg:gap-8 xl:gap-12 2xl:gap-16">
            <BrandLogo />
            <DesktopNav currentPath={location} />
            <MobileToggleButton
              isOpen={mobileMenuOpen}
              onToggle={() => setMobileMenuOpen((open) => !open)}
            />
          </div>
        </div>
      </header>

      <MobileBackdrop
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
      <MobileDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        currentPath={location}
      />
    </>
  );
}
