import { Link } from "react-router";
import type { ReactNode } from "react";
import {
  MapPin, Award, Users, Route, Target, Eye,
  CheckCircle2, ArrowRight, Compass, Heart, Lightbulb, Star, TrendingUp
} from "lucide-react";
import { AnimatedSection } from "../components/AnimatedSection";

const HERO_IMG = "https://images.unsplash.com/photo-1774929105002-64492268fb47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250YWluZXIlMjBzaGlwJTIwb2NlYW4lMjBmcmVpZ2h0JTIwcG9ydHxlbnwxfHx8fDE3NzU5MDE1Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080";
const TEAM_IMG = "https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBjb3Jwb3JhdGUlMjBvZmZpY2UlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzc1OTAxNTMwfDA&ixlib=rb-4.1.0&q=80&w=1080";

const stats = [
  { value: "1",     label: "Years Experience",  icon: Award      },
  { value: "100+",  label: "Happy Clients",      icon: Users      },
  { value: "100k+", label: "Miles Logged",       icon: Route      },
  { value: "99.8%", label: "On-Time Delivery",   icon: TrendingUp },
];

const values = [
  { icon: Star,      title: "Excellence",  desc: "We hold ourselves to the highest standards in every shipment we handle, every relationship we build, and every commitment we make." },
  { icon: Heart,     title: "Integrity",   desc: "Transparency and honesty are at the core of our business. We deliver on our promises and communicate clearly at every step." },
  { icon: Lightbulb, title: "Innovation",  desc: "Continuously investing in technology and processes to stay ahead of industry trends and deliver smarter domestic logistics solutions." },
  { icon: Compass,   title: "Reliability", desc: "Our clients count on us. We have built our reputation on consistent, on-time delivery and dependable service across all 48 states." },
];

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 mb-4">
      <span className="w-6 h-0.5 bg-[#C8972B]" />
      <span className="text-xs font-semibold tracking-widest uppercase text-[#C8972B]">{children}</span>
      <span className="w-6 h-0.5 bg-[#C8972B]" />
    </div>
  );
}

export function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-80 sm:h-96 flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_IMG})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A2B5F]/95 to-[#1A2B5F]/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-14 pt-32">
          <div className="inline-flex items-center gap-2 bg-[#C8972B]/20 border border-[#C8972B]/40 rounded-full px-4 py-1.5 mb-4">
            <span className="text-[#C8972B] text-xs font-semibold tracking-widest uppercase">About Us</span>
          </div>
          <h1 style={{ fontFamily: "'Sora', sans-serif" }} className="text-4xl sm:text-5xl font-bold text-white">
            Our Story & Mission
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <SectionLabel>Who We Are</SectionLabel>
              <h2 style={{ fontFamily: "'Sora', sans-serif" }} className="text-3xl sm:text-4xl font-bold text-[#1E1E1E] mb-6">
                Driving American Business <span className="text-[#C8972B]">Forward</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-5">
                Headquartered in Atlanta, Georgia, Ocean Air Express Inc. is a USA-based domestic transport and logistics company built on a relentless commitment to delivering excellence — faster, safer, and smarter than anyone else in the industry.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Our integrated network spans air, road, rail, and coastal shipping across all 48 contiguous states, serving clients from growing small businesses to established enterprises across every major industry sector.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  "FMCSA & DOT Certified",
                  "Fully insured cargo protection on every shipment",
                  "24/7 real-time shipment tracking",
                  "Dedicated account management",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-[#C8972B] shrink-0" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-[#1A2B5F] text-white font-semibold rounded-xl hover:bg-[#0f2247] transition-colors text-sm">
                Get in Touch <ArrowRight size={14} />
              </Link>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img src={TEAM_IMG} alt="Our Team" className="w-full h-80 lg:h-96 object-cover" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-[#C8972B] text-white rounded-2xl p-5 shadow-xl">
                  <div style={{ fontFamily: "'Sora', sans-serif" }} className="text-3xl font-bold">100k+</div>
                  <div className="text-sm text-white/80">Miles Logged</div>
                </div>
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#1E1E1E]">On-Time Rate</div>
                      <div style={{ fontFamily: "'Sora', sans-serif" }} className="text-lg font-bold text-[#C8972B]">99.8%</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#1A2B5F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <SectionLabel>By The Numbers</SectionLabel>
            <h2 style={{ fontFamily: "'Sora', sans-serif" }} className="text-3xl font-bold text-white">
              Our Track Record Speaks for Itself
            </h2>
            <p className="text-white/50 mt-3 max-w-md mx-auto text-sm">
              Consistent excellence in every metric that matters.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map(({ value, label, icon: Icon }, i) => (
              <AnimatedSection key={label} delay={i * 0.1}>
                <div className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-colors">
                  <Icon size={24} className="text-[#C8972B] mx-auto mb-3" />
                  <div style={{ fontFamily: "'Sora', sans-serif" }} className="text-3xl font-bold text-white mb-1">{value}</div>
                  <div className="text-white/50 text-sm">{label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <SectionLabel>Our Purpose</SectionLabel>
            <h2 style={{ fontFamily: "'Sora', sans-serif" }} className="text-3xl sm:text-4xl font-bold text-[#1E1E1E]">
              Mission & Vision
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <AnimatedSection direction="left">
              <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow h-full">
                <div className="w-14 h-14 rounded-2xl bg-[#1A2B5F] flex items-center justify-center mb-6">
                  <Target size={26} className="text-white" />
                </div>
                <div className="text-xs font-semibold tracking-widest uppercase text-[#C8972B] mb-3">Our Mission</div>
                <h3 style={{ fontFamily: "'Sora', sans-serif" }} className="text-2xl font-bold text-[#1E1E1E] mb-4">
                  Driving Your Business Forward
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  To revolutionize domestic logistics through innovative technology, unwavering reliability, and a commitment to building lasting partnerships — providing businesses of all sizes with freight solutions that are fast, transparent, and cost-effective across every corner of America.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="bg-[#1A2B5F] rounded-3xl p-10 shadow-xl h-full">
                <div className="w-14 h-14 rounded-2xl bg-[#C8972B] flex items-center justify-center mb-6">
                  <Eye size={26} className="text-white" />
                </div>
                <div className="text-xs font-semibold tracking-widest uppercase text-[#C8972B] mb-3">Our Vision</div>
                <h3 style={{ fontFamily: "'Sora', sans-serif" }} className="text-2xl font-bold text-white mb-4">
                  Shaping the Future of Logistics
                </h3>
                <p className="text-white/60 leading-relaxed">
                  To be the most trusted and innovative domestic logistics partner in the United States — setting new standards for excellence while creating sustainable value for our clients, our team, and the communities we serve across America.
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Values */}
          <AnimatedSection className="text-center mb-10">
            <SectionLabel>Our Values</SectionLabel>
            <h2 style={{ fontFamily: "'Sora', sans-serif" }} className="text-3xl font-bold text-[#1E1E1E]">
              Principles That Guide Us
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <AnimatedSection key={title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow group border border-transparent hover:border-[#C8972B]/20 h-full">
                  <div className="w-12 h-12 rounded-xl bg-[#C8972B]/10 flex items-center justify-center mb-4 group-hover:bg-[#C8972B] transition-colors">
                    <Icon size={20} className="text-[#C8972B] group-hover:text-white transition-colors" />
                  </div>
                  <h4 style={{ fontFamily: "'Sora', sans-serif" }} className="font-bold text-[#1E1E1E] mb-2">{title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-gradient-to-r from-[#1A2B5F] to-[#0f3a6e] rounded-3xl p-10 lg:p-14 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#C8972B]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
              <div className="relative">
                <MapPin size={32} className="text-[#C8972B] mx-auto mb-4" />
                <h2 style={{ fontFamily: "'Sora', sans-serif" }} className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Ready to Ship Across America?
                </h2>
                <p className="text-white/60 max-w-lg mx-auto mb-8">
                  Get in touch with our team today and discover how Ocean Air Express can power your domestic logistics.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:+14709090419" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#C8972B] text-white font-semibold rounded-xl hover:bg-[#b8861f] transition-colors text-sm">
                    Call (+1) 470-909-0419
                  </a>
                  <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors text-sm">
                    Request a Quote <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}