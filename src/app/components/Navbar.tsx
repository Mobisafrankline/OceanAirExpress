import { useState, useEffect } from "react";
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
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open (iOS-safe)
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1A2B5F] shadow-2xl"
          : "bg-[#1A2B5F]/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div>
              <div
                style={{ fontFamily: "'Sora', sans-serif" }}
                className="text-white font-bold text-lg leading-tight"
              >
                Ocean Air Express
              </div>
              <div className="text-[#C8972B] text-xs tracking-widest uppercase">Inc.</div>
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
              className="px-5 py-2.5 bg-[#C8972B] text-white text-sm font-semibold rounded-xl hover:bg-[#b8861f] transition-all duration-200 shadow-lg hover:shadow-[#C8972B]/30 hover:scale-105"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
          isOpen
            ? "max-h-[calc(100dvh-80px)] opacity-100 pointer-events-auto"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="bg-[#12204a] border-t border-white/10 px-4 pt-4 pb-6 flex flex-col gap-1 overflow-y-auto max-h-[calc(100dvh-80px)]">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? "bg-[#C8972B] text-white"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                )}
              </Link>
            );
          })}

          {/* Mobile CTA */}
          <div className="mt-3 pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href="tel:+14709090419"
              className="flex items-center gap-2 text-[#C8972B] text-sm font-medium px-1"
            >
              <Phone size={15} />
              +1 (470) 909-0419
            </a>
            <Link
              to="/contact"
              className="px-5 py-3 bg-[#C8972B] text-white text-sm font-semibold rounded-xl text-center hover:bg-[#b8861f] transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}