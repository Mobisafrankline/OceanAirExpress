import { Link } from "react-router";
import { Phone, Mail, MapPin, Flag, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const services = [
  "Air Freight", "Coastal Shipping", "Road Transport",
  "Rail Freight", "Courier Services", "Last Mile Delivery",
  "Contract Logistics", "Special Projects",
];

const company = [
  { label: "About Us",          href: "/about"      },
  { label: "Services",          href: "/services"   },
  { label: "Track Shipment",    href: "/tracking"   },
  { label: "Careers",           href: "/careers"    },
  { label: "Licences",          href: "/licence"    },
  { label: "Contact",           href: "/contact"    },
  { label: "Components",        href: "/components" },
];

const routes = [
  "New York — Los Angeles",
  "Chicago — Houston",
  "Miami — Atlanta",
  "Dallas — Seattle",
  "Phoenix — Denver",
  "Boston — Nashville",
];

export function Footer() {
  return (
    <footer className="bg-[#0f1d3e] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <div>
              <div style={{ fontFamily: "'Sora', sans-serif" }} className="font-bold text-lg leading-tight">Ocean Air Express</div>
              <div className="text-[#C8972B] text-xs tracking-widest">Inc.</div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              A USA-based domestic transport and logistics company delivering excellence across air, road, rail, and coastal networks — all 48 contiguous states.
            </p>
            <div className="flex flex-col gap-3 text-sm text-white/60">
              <a href="tel:+14709090419" className="flex items-center gap-2 hover:text-[#C8972B] transition-colors">
                <Phone size={14} className="text-[#C8972B]" />
                +1 (470) 909-0419
              </a>
              <a href="mailto:info@oceanairexpress.com" className="flex items-center gap-2 hover:text-[#C8972B] transition-colors">
                <Mail size={14} className="text-[#C8972B]" />
                info@oceanairexpress.com
              </a>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-[#C8972B] mt-0.5 shrink-0" />
                <span>Atlanta, Georgia, USA</span>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-6">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#C8972B] transition-colors">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: "'Sora', sans-serif" }} className="font-semibold text-sm tracking-widest uppercase text-[#C8972B] mb-5">Our Services</h4>
            <ul className="flex flex-col gap-2.5">
              {services.map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#C8972B]" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ fontFamily: "'Sora', sans-serif" }} className="font-semibold text-sm tracking-widest uppercase text-[#C8972B] mb-5">Company</h4>
            <ul className="flex flex-col gap-2.5">
              {company.map((c) => (
                <li key={c.href}>
                  <Link to={c.href} className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#C8972B]" />
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Routes */}
          <div>
            <h4 style={{ fontFamily: "'Sora', sans-serif" }} className="font-semibold text-sm tracking-widest uppercase text-[#C8972B] mb-5">Key Routes</h4>
            <div className="flex flex-wrap gap-2">
              {routes.map((r) => (
                <span key={r} className="px-3 py-1.5 bg-white/10 rounded-lg text-xs text-white/70 hover:bg-[#C8972B]/20 hover:text-white transition-colors cursor-pointer">
                  {r}
                </span>
              ))}
            </div>
            <div className="mt-6 p-4 bg-[#C8972B]/10 border border-[#C8972B]/20 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <Flag size={14} className="text-[#C8972B]" />
                <span className="text-xs font-semibold text-[#C8972B] uppercase tracking-wider">Nationwide Coverage</span>
              </div>
              <p className="text-xs text-white/60 leading-relaxed">
                Serving all 48 contiguous states with DOT & FMCSA certified carriers and regional distribution hubs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © 2026 Ocean Air Express Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/40">
            <a href="#" className="hover:text-white/70 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/70 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white/70 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}