import { Link } from "react-router";
import type { ReactNode } from "react";
import {
  Globe, Award, Users, Package, Target, Eye,
  CheckCircle2, ArrowRight, Compass, Heart, Lightbulb, Star
} from "lucide-react";

const HERO_IMG = "https://images.unsplash.com/photo-1774929105002-64492268fb47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250YWluZXIlMjBzaGlwJTIwb2NlYW4lMjBmcmVpZ2h0JTIwcG9ydHxlbnwxfHx8fDE3NzU5MDE1Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080";
const TEAM_IMG = "https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBjb3Jwb3JhdGUlMjBvZmZpY2UlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzc1OTAxNTMwfDA&ixlib=rb-4.1.0&q=80&w=1080";

const stats = [
  { value: "2006", label: "Founded", icon: Award },
  { value: "150+", label: "Countries Served", icon: Globe },
  { value: "600+", label: "Team Members", icon: Users },
  { value: "25K+", label: "Shipments Monthly", icon: Package },
];

const values = [
  { icon: Star, title: "Excellence", desc: "We hold ourselves to the highest standards in every shipment we handle, every relationship we build, and every commitment we make." },
  { icon: Heart, title: "Integrity", desc: "Transparency and honesty are at the core of our business. We deliver on our promises and communicate clearly at every step." },
  { icon: Lightbulb, title: "Innovation", desc: "Continuously investing in technology and processes to stay ahead of industry trends and deliver smarter logistics solutions." },
  { icon: Compass, title: "Reliability", desc: "Our clients count on us. We have built our reputation on consistent, on-time delivery and dependable service worldwide." },
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
            <div>
              <SectionLabel>Who We Are</SectionLabel>
              <h2 style={{ fontFamily: "'Sora', sans-serif" }} className="text-3xl sm:text-4xl font-bold text-[#1E1E1E] mb-6">
                18 Years of Connecting <span className="text-[#C8972B]">Global Trade</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-5">
                Founded in 2006 and headquartered in Atlanta, Georgia, Ocean Air Express Inc. is a premier USA-based global transport and logistics company. We have built our reputation on a relentless commitment to delivering excellence — faster, safer, and smarter than anyone else in the industry.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Our integrated network spans air, sea, road, and rail, covering 150+ countries and serving clients across every major industry sector — from Fortune 500 enterprises to emerging global brands.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  "FMCSA, IATA, FMC & DOT Certified",
                  "Fully insured cargo protection worldwide",
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
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img src={TEAM_IMG} alt="Our Team" className="w-full h-80 lg:h-96 object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#C8972B] text-white rounded-2xl p-5 shadow-xl">
                <div style={{ fontFamily: "'Sora', sans-serif" }} className="text-3xl font-bold">18+</div>
                <div className="text-sm text-white/80">Years of Excellence</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 size={16} className="text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#1E1E1E]">On-Time Rate</div>
                    <div style={{ fontFamily: "'Sora', sans-serif" }} className="text-lg font-bold text-[#C8972B]">99.2%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#1A2B5F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel>By The Numbers</SectionLabel>
            <h2 style={{ fontFamily: "'Sora', sans-serif" }} className="text-3xl font-bold text-white">
              Our Impact at a Glance
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-colors">
                <Icon size={24} className="text-[#C8972B] mx-auto mb-3" />
                <div style={{ fontFamily: "'Sora', sans-serif" }} className="text-3xl font-bold text-white mb-1">{value}</div>
                <div className="text-white/50 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionLabel>Our Purpose</SectionLabel>
            <h2 style={{ fontFamily: "'Sora', sans-serif" }} className="text-3xl sm:text-4xl font-bold text-[#1E1E1E]">
              Mission & Vision
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-[#1A2B5F] flex items-center justify-center mb-6">
                <Target size={26} className="text-white" />
              </div>
              <div className="text-xs font-semibold tracking-widest uppercase text-[#C8972B] mb-3">Our Mission</div>
              <h3 style={{ fontFamily: "'Sora', sans-serif" }} className="text-2xl font-bold text-[#1E1E1E] mb-4">
                Connecting the World, One Shipment at a Time
              </h3>
              <p className="text-gray-500 leading-relaxed">
                To provide businesses of all sizes with world-class freight and logistics solutions that are fast, reliable, transparent, and cost-effective — enabling our clients to compete confidently in global markets while we handle every mile of the journey.
              </p>
            </div>
            <div className="bg-[#1A2B5F] rounded-3xl p-10 shadow-xl">
              <div className="w-14 h-14 rounded-2xl bg-[#C8972B] flex items-center justify-center mb-6">
                <Eye size={26} className="text-white" />
              </div>
              <div className="text-xs font-semibold tracking-widest uppercase text-[#C8972B] mb-3">Our Vision</div>
              <h3 style={{ fontFamily: "'Sora', sans-serif" }} className="text-2xl font-bold text-white mb-4">
                The World's Most Trusted Logistics Partner
              </h3>
              <p className="text-white/60 leading-relaxed">
                To be the most trusted name in global logistics — recognized for our unwavering commitment to excellence, our innovative approach to supply chain solutions, and our deep, lasting partnerships with clients across every continent and industry.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="text-center mb-10">
            <SectionLabel>Our Values</SectionLabel>
            <h2 style={{ fontFamily: "'Sora', sans-serif" }} className="text-3xl font-bold text-[#1E1E1E]">
              Principles That Guide Us
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow group border border-transparent hover:border-[#C8972B]/20">
                <div className="w-12 h-12 rounded-xl bg-[#C8972B]/10 flex items-center justify-center mb-4 group-hover:bg-[#C8972B] transition-colors">
                  <Icon size={20} className="text-[#C8972B] group-hover:text-white transition-colors" />
                </div>
                <h4 style={{ fontFamily: "'Sora', sans-serif" }} className="font-bold text-[#1E1E1E] mb-2">{title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}