import { Link } from "react-router";
import { Phone, Mail, MapPin, Globe, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const services = [
  "Air Freight", "Sea Freight", "Road Transport",
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
  "New York — London", "Los Angeles — Tokyo",
  "Chicago — Dubai", "Miami — São Paulo",
  "Atlanta — Frankfurt", "Houston — Singapore",
];

export function Footer() {
  return (
    <footer className="bg-[#0f1d3e] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#C8972B] flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M3 12L21 12M12 3L21 12L12 21" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 7L8 12L3 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
                </svg>
              </div>
              <div>
                <div style={{ fontFamily: "'Sora', sans-serif" }} className="font-bold text-lg leading-tight">Ocean Air Express</div>
                <div className="text-[#C8972B] text-xs tracking-widest">Inc.</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              A USA-based global transport and logistics company delivering excellence across air, sea, road, and rail networks worldwide.
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
                <Globe size={14} className="text-[#C8972B]" />
                <span className="text-xs font-semibold text-[#C8972B] uppercase tracking-wider">Global Coverage</span>
              </div>
              <p className="text-xs text-white/60 leading-relaxed">
                Operating across 150+ countries with a network of trusted partners worldwide.
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