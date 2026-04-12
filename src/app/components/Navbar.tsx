import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home",     href: "/"         },
  { label: "About",    href: "/about"    },
  { label: "Services", href: "/services" },
  { label: "Track",    href: "/tracking" },
  { label: "Careers",  href: "/careers"  },
  { label: "Licence",  href: "/licence"  },
  { label: "Contact",  href: "/contact"  },
];

export function Navbar() {
  const [isOpen, setIsOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location                = useLocation();
  const scrollYRef              = useRef(0);

  /* ── Scroll detection ───────────────────────────────────── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Close on route change ──────────────────────────────── */
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  /* ── Body scroll lock ───────────────────────────────────── */
  useEffect(() => {
    if (isOpen) {
      scrollYRef.current = window.scrollY;
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      window.scrollTo({ top: scrollYRef.current, behavior: "instant" });
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  const NAVBAR_HEIGHT = 64; // px — keep in sync with h-16

  return (
    <>
      {/* ── Top navbar bar ────────────────────────────────── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#1A2B5F] shadow-2xl"
            : "bg-[#1A2B5F]/95 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">

            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 shrink-0"
              onClick={() => setIsOpen(false)}
            >
              <div>
                <div
                  style={{ fontFamily: "'Sora', sans-serif" }}
                  className="text-white font-bold text-base sm:text-lg leading-tight"
                >
                  Ocean Air Express
                </div>
                <div className="text-[#C8972B] text-xs tracking-widest uppercase">
                  Inc.
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location.pathname === link.href
                      ? "bg-[#C8972B] text-white"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <a
                href="tel:+14709090419"
                className="flex items-center gap-2 text-[#C8972B] text-sm font-medium hover:text-white transition-colors"
              >
                <Phone size={15} />
                +1 (470) 909-0419
              </a>
              <Link
                to="/contact"
                className="px-5 py-2.5 bg-[#C8972B] text-white text-sm font-semibold rounded-xl hover:bg-[#b8861f] transition-all duration-200 shadow-lg"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen((p) => !p)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors touch-manipulation z-[60] relative"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile menu — only rendered when open ─────────── */}
      {isOpen && (
        <>
          {/* Backdrop — unmounts fully when closed, no more tap-blocking */}
          <div
            onClick={() => setIsOpen(false)}
            aria-hidden
            className="lg:hidden fixed inset-0 z-40 bg-black/50"
            style={{ top: `${NAVBAR_HEIGHT}px` }}
          />

          {/* Drawer panel */}
          <div
            className="lg:hidden fixed left-0 bottom-0 z-50 w-72 max-w-[80vw] bg-[#12204a] flex flex-col overflow-y-auto"
            style={{ top: `${NAVBAR_HEIGHT}px` }}
          >
            {/* Nav links */}
            <div className="flex flex-col gap-1 px-4 pt-5 pb-4">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-medium transition-all touch-manipulation ${
                      isActive
                        ? "bg-[#C8972B] text-white"
                        : "text-white/80 hover:text-white hover:bg-white/10 active:bg-white/20"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Mobile CTA */}
            <div className="mt-auto px-4 pt-4 pb-8 border-t border-white/10 flex flex-col gap-3">
              <a
                href="tel:+14709090419"
                className="flex items-center gap-2 text-[#C8972B] text-sm font-medium px-1 py-2 touch-manipulation"
              >
                <Phone size={15} />
                +1 (470) 909-0419
              </a>
              <Link
                to="/contact"
                className="px-5 py-3.5 bg-[#C8972B] text-white text-sm font-semibold rounded-xl text-center hover:bg-[#b8861f] active:bg-[#a07520] transition-colors touch-manipulation"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}