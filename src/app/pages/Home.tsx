import { useState } from "react";
import type { ReactNode } from "react";
import { Link } from "react-router";
import {
  Plane, Ship, Truck, Train, ArrowRight, Star, Phone,
  CheckCircle2, Clock, Shield, Award, Users, Package,
  ChevronLeft, ChevronRight, MapPin, Zap, TrendingUp, HeartHandshake, BarChart2
} from "lucide-react";
import { AnimatedSection } from "../components/AnimatedSection";

const HERO_IMG      = "https://images.unsplash.com/photo-1610970905111-789040dd532d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMGFpcnBsYW5lJTIwZnJlaWdodCUyMGxvZ2lzdGljcyUyMGFlcmlhbHxlbnwxfHx8fDE3NzU5MDE1MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080";
const SHIP_IMG      = "https://images.unsplash.com/photo-1774929105002-64492268fb47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250YWluZXIlMjBzaGlwJTIwb2NlYW4lMjBmcmVpZ2h0JTIwcG9ydHxlbnwxfHx8fDE3NzU5MDE1Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080";
const TRUCK_IMG     = "https://images.unsplash.com/photo-1769698822097-458694b3cf8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjB3YXJlaG91c2UlMjB0cnVja3MlMjByb2FkJTIwdHJhbnNwb3J0fGVufDF8fHx8MTc3NTkwMTUyN3ww&ixlib=rb-4.1.0&q=80&w=1080";
const TRAIN_IMG     = "https://images.unsplash.com/photo-1768813387248-9d46c8a515f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVpZ2h0JTIwdHJhaW4lMjByYWlsJTIwY2FyZ28lMjB0cmFuc3BvcnR8ZW58MXx8fHwxNzc1OTAxNTI3fDA&ixlib=rb-4.1.0&q=80&w=1080";
const SOLUTIONS_IMG = "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

const stats = [
  { value: "48",    label: "States Covered",   icon: MapPin  },
  { value: "25K+",  label: "Shipments Monthly", icon: Package },
  { value: "99.2%", label: "On-Time Delivery",  icon: Clock   },
  { value: "18+",   label: "Years Experience",  icon: Award   },
];

const services = [
  { icon: Plane, title: "Air Freight",      desc: "Domestic air cargo connecting every major US hub with speed and reliability — coast to coast.", img: HERO_IMG  },
  { icon: Ship,  title: "Coastal Shipping", desc: "Efficient port-to-port and intercoastal freight along US coastlines and waterways.",             img: SHIP_IMG  },
  { icon: Truck, title: "Road Transport",   desc: "Reliable door-to-door trucking across all 48 contiguous states with real-time tracking.",        img: TRUCK_IMG },
  { icon: Train, title: "Rail Freight",     desc: "Cost-effective rail cargo for heavy and bulk shipments spanning the entire continental US.",      img: TRAIN_IMG },
];

const whyUs = [
  { icon: Shield,         title: "Fully Licensed & Insured", desc: "FMCSA, DOT, and STB certified. Your cargo is always protected under full US compliance."         },
  { icon: Zap,            title: "Lightning Fast Delivery",  desc: "Optimized domestic routes and real-time tracking for express and time-critical shipments."        },
  { icon: MapPin,         title: "Nationwide Coverage",      desc: "All 48 contiguous states covered with trusted carrier partners and regional hubs."               },
  { icon: HeartHandshake, title: "Dedicated Support",        desc: "24/7 customer support with dedicated account managers for every business client."                },
  { icon: TrendingUp,     title: "Competitive Pricing",      desc: "Transparent pricing with no hidden fees. Best domestic rates guaranteed through volume leverage." },
  { icon: Users,          title: "Expert Team",              desc: "600+ logistics professionals with deep US freight expertise and industry certifications."         },
];

const testimonials = [
  { name: "Michael Chen",   role: "VP Supply Chain, TechNova Inc.",     rating: 5, text: "Ocean Air Express transformed our domestic supply chain. Their air freight service is impeccable — shipments arrive on time, every time. The dedicated account manager is worth every cent.",  location: "San Francisco, CA" },
  { name: "Sarah Williams", role: "Director of Operations, GlobalMart",  rating: 5, text: "We've been with Ocean Air Express for 5 years. Their road freight rates are unbeatable and the tracking system gives us full visibility across all our US routes. Truly world-class.",       location: "New York, NY"      },
  { name: "David Okonkwo",  role: "CEO, Central Trade Solutions",        rating: 5, text: "Handling complex cross-state shipments was a nightmare before Ocean Air Express. Now it's seamless. Their compliance team knows every regulation — invaluable for our business.",            location: "Houston, TX"       },
  { name: "Emma Rodriguez", role: "Logistics Manager, FreshProduce Co.", rating: 5, text: "Temperature-sensitive cargo is tricky, but Ocean Air Express handles it perfectly. Their cold chain solutions are best-in-class across the US. Highly recommend for perishables.",         location: "Miami, FL"         },
];

const routes = [
  "New York, NY","Los Angeles, CA","Chicago, IL","Houston, TX",
  "Atlanta, GA","Miami, FL","Dallas, TX","Seattle, WA",
  "Phoenix, AZ","Denver, CO","Boston, MA","Nashville, TN",
  "Charlotte, NC","Las Vegas, NV","Portland, OR",
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

export function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [email,  setEmail]  = useState("");
  const [origin, setOrigin] = useState("");

  const prev = () => setActiveTestimonial((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setActiveTestimonial((p) => (p + 1) % testimonials.length);

  return (
    <div>
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center pointer-events-none" style={{ backgroundImage: `url(${HERO_IMG})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A2B5F]/95 via-[#1A2B5F]/75 to-[#1A2B5F]/40 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A2B5F]/60 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
          <div className="max-w-3xl">
            {/* Badge — truncate on very small screens */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-2 mb-6 sm:mb-8 max-w-full">
              <div className="w-2 h-2 rounded-full bg-[#C8972B] animate-pulse shrink-0" />
              <span className="text-white/90 text-xs sm:text-sm font-medium truncate">America's Trusted Logistics Partner</span>
              <CheckCircle2 size={13} className="text-[#C8972B] shrink-0" />
            </div>

            <h1 style={{ fontFamily: "'Sora', sans-serif" }} className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Delivering
              <span className="block text-[#C8972B]">Excellence.</span>
            </h1>

            <p className="text-white/75 text-base sm:text-xl leading-relaxed mb-8 sm:mb-10 max-w-xl">
              Ocean Air Express Inc. keeps American businesses moving with fast, reliable, and fully insured freight solutions across air, road, rail, and coastal shipping — all 48 states.
            </p>

            {/* Buttons stack on mobile, row on sm+ */}
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href="tel:+14709090419"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3.5 sm:py-4 bg-[#C8972B] text-white font-semibold rounded-2xl hover:bg-[#b8861f] transition-all duration-200 shadow-xl text-sm w-full sm:w-auto"
              >
                <Phone size={16} />
                <span className="truncate">Get Started — Call (+1) 470-909-0419</span>
              </a>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3.5 sm:py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-2xl border border-white/30 hover:bg-white/20 transition-all duration-200 text-sm w-full sm:w-auto"
              >
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS ────────────────────────────────────────── */}
      <section className="bg-[#1A2B5F] py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
            {stats.map(({ value, label, icon: Icon }, i) => (
              <AnimatedSection key={label} delay={i * 0.1} className="text-center group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#C8972B]/15 border border-[#C8972B]/30 flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:bg-[#C8972B] transition-colors duration-300">
                  <Icon size={18} className="text-[#C8972B] group-hover:text-white transition-colors" />
                </div>
                <div style={{ fontFamily: "'Sora', sans-serif" }} className="text-2xl sm:text-3xl font-bold text-white mb-0.5">{value}</div>
                <div className="text-white/50 text-xs sm:text-sm">{label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES OVERVIEW ────────────────────────────── */}
      <section className="py-14 sm:py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10 sm:mb-16">
            <SectionLabel>Our Services</SectionLabel>
            <h2 style={{ fontFamily: "'Sora', sans-serif" }} className="text-2xl sm:text-4xl font-bold text-[#1E1E1E] mb-3 sm:mb-4">
              Complete Domestic Logistics Solutions
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
              From express air freight to full truckload — we handle every mile of your domestic supply chain with care and expertise.
            </p>
          </AnimatedSection>

          {/* Single col on mobile, 2 on sm, 4 on lg */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {services.map(({ icon: Icon, title, desc, img }, i) => (
              <AnimatedSection key={title} delay={i * 0.1}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="relative h-44 sm:h-48 overflow-hidden">
                    <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A2B5F]/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 w-10 h-10 rounded-xl bg-[#C8972B] flex items-center justify-center shadow-lg">
                      <Icon size={18} className="text-white" />
                    </div>
                  </div>
                  <div className="p-4 sm:p-5">
                    <h3 style={{ fontFamily: "'Sora', sans-serif" }} className="font-bold text-[#1E1E1E] mb-1.5 sm:mb-2 text-sm sm:text-base">{title}</h3>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">{desc}</p>
                    <Link to="/services" className="inline-flex items-center gap-1.5 text-[#C8972B] text-sm font-semibold hover:gap-2.5 transition-all">
                      Learn more <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SOLUTIONS SECTION ─────────────────────────────── */}
      <section className="py-14 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10 sm:mb-16">
            <SectionLabel>Logistics Solutions</SectionLabel>
            <h2 style={{ fontFamily: "'Sora', sans-serif" }} className="text-2xl sm:text-4xl font-bold text-[#1E1E1E] mb-3 sm:mb-4">
              End-to-End Domestic Supply Chain Mastery
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
              Integrated solutions designed to optimize your entire US logistics operation from pickup to final delivery.
            </p>
          </AnimatedSection>

          {/* Stack on mobile, side-by-side on lg */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <AnimatedSection direction="left">
              <div className="relative rounded-3xl overflow-hidden h-64 sm:h-80 lg:h-full min-h-[260px] sm:min-h-[320px] group">
                <img src={SOLUTIONS_IMG} alt="Warehousing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2B5F]/90 via-[#1A2B5F]/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
                  <span className="text-xs font-semibold tracking-widest uppercase text-[#C8972B] mb-1.5 block">Supply Chain</span>
                  <h3 style={{ fontFamily: "'Sora', sans-serif" }} className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-3">Contract Logistics & Warehousing</h3>
                  <p className="text-white/70 text-xs sm:text-sm mb-3 sm:mb-4 hidden sm:block">Full-service contract logistics including domestic warehousing, distribution, and value-added services across the US.</p>
                  <Link to="/services" className="inline-flex items-center gap-2 bg-[#C8972B] text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold hover:bg-[#b8861f] transition-colors">
                    Explore <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            {/* 2-col grid — works on all screen sizes */}
            <div className="grid grid-cols-2 gap-3 sm:gap-6">
              {[
                { title: "Real-Time Tracking",   desc: "Monitor every domestic shipment 24/7 with our advanced US tracking portal.",                icon: BarChart2, color: "bg-blue-50",   link: "/tracking" },
                { title: "Freight Compliance",   desc: "Expert DOT and FMCSA compliance services for seamless interstate commerce.",                icon: Shield,    color: "bg-amber-50",  link: "/services" },
                { title: "Cold Chain Logistics", desc: "Temperature-controlled solutions for sensitive and perishable cargo across all US regions.", icon: Package,   color: "bg-green-50",  link: "/services" },
                { title: "Express Delivery",     desc: "Time-critical domestic shipments handled with guaranteed coast-to-coast delivery windows.",  icon: Zap,       color: "bg-purple-50", link: "/services" },
              ].map(({ title, desc, icon: Icon, color, link }, i) => (
                <AnimatedSection key={title} delay={0.1 + i * 0.08}>
                  <Link to={link} className={`${color} rounded-2xl p-3 sm:p-6 hover:shadow-md transition-all cursor-pointer group block hover:-translate-y-0.5 h-full`}>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#1A2B5F] flex items-center justify-center mb-2 sm:mb-4 group-hover:bg-[#C8972B] transition-colors">
                      <Icon size={14} className="text-white sm:size-4" />
                    </div>
                    <h4 style={{ fontFamily: "'Sora', sans-serif" }} className="font-bold text-[#1E1E1E] mb-1 text-xs sm:text-sm leading-snug">{title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed hidden sm:block">{desc}</p>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─────────────────────────────────── */}
      <section className="py-14 sm:py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10 sm:mb-16">
            <SectionLabel>Why Choose Us</SectionLabel>
            <h2 style={{ fontFamily: "'Sora', sans-serif" }} className="text-2xl sm:text-4xl font-bold text-[#1E1E1E] mb-3 sm:mb-4">
              The Ocean Air Express Advantage
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
              Built on trust, powered by innovation, and driven by an unwavering commitment to delivering excellence every single day across America.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {whyUs.map(({ icon: Icon, title, desc }, i) => (
              <AnimatedSection key={title} delay={(i % 3) * 0.1}>
                <div className="bg-white rounded-2xl p-5 sm:p-7 shadow-sm hover:shadow-lg transition-all duration-300 group border border-transparent hover:border-[#C8972B]/20 h-full">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#1A2B5F]/5 flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-[#1A2B5F] transition-colors duration-300">
                    <Icon size={20} className="text-[#1A2B5F] group-hover:text-white transition-colors" />
                  </div>
                  <h3 style={{ fontFamily: "'Sora', sans-serif" }} className="font-bold text-[#1E1E1E] mb-1.5 text-sm sm:text-base">{title}</h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ──────────────────────────────────── */}
      <section className="py-14 sm:py-24 bg-[#1A2B5F] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#C8972B] blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-white blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10 sm:mb-16">
            <SectionLabel>Testimonials</SectionLabel>
            <h2 style={{ fontFamily: "'Sora', sans-serif" }} className="text-2xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">
              What Our Clients Say
            </h2>
            <p className="text-white/50 max-w-xl mx-auto text-sm sm:text-base">
              Trusted by hundreds of businesses across every US industry and region.
            </p>
          </AnimatedSection>

          <div className="relative max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-5 sm:p-10">
              <div className="flex gap-1 mb-4 sm:mb-6">
                {Array.from({ length: testimonials[activeTestimonial].rating }).map((_, i) => (
                  <Star key={i} size={15} className="text-[#C8972B] fill-[#C8972B]" />
                ))}
              </div>
              {/* Shorter text size on small screens */}
              <blockquote style={{ fontFamily: "'Sora', sans-serif" }} className="text-white text-sm sm:text-xl font-medium leading-relaxed mb-5 sm:mb-8">
                "{testimonials[activeTestimonial].text}"
              </blockquote>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#C8972B] flex items-center justify-center text-white font-bold text-base sm:text-lg shrink-0">
                    {testimonials[activeTestimonial].name[0]}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm sm:text-base">{testimonials[activeTestimonial].name}</div>
                    <div className="text-white/50 text-xs sm:text-sm">{testimonials[activeTestimonial].role}</div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-white/40 text-xs sm:text-sm">
                  <MapPin size={11} />
                  {testimonials[activeTestimonial].location}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 mt-6 sm:mt-8">
              <button onClick={prev} className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#C8972B] transition-colors touch-manipulation">
                <ChevronLeft size={17} />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    className={`rounded-full transition-all duration-300 touch-manipulation ${i === activeTestimonial ? "w-6 h-2 bg-[#C8972B]" : "w-2 h-2 bg-white/30 hover:bg-white/50"}`}
                  />
                ))}
              </div>
              <button onClick={next} className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#C8972B] transition-colors touch-manipulation">
                <ChevronRight size={17} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── QUOTE BANNER ──────────────────────────────────── */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-gradient-to-r from-[#1A2B5F] to-[#0f3a6e] rounded-3xl p-6 sm:p-10 lg:p-14 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8972B]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
              <div className="relative">
                <div className="text-center mb-7 sm:mb-10">
                  <SectionLabel>Get a Quote</SectionLabel>
                  <h2 style={{ fontFamily: "'Sora', sans-serif" }} className="text-xl sm:text-4xl font-bold text-white mb-2 sm:mb-3">
                    Ready to Ship? Get an Instant Quote
                  </h2>
                  <p className="text-white/60 max-w-lg mx-auto text-xs sm:text-base">
                    Tell us your origin and our team will get back to you with a competitive domestic freight quote within 2 hours.
                  </p>
                </div>
                {/* Always stacked on mobile */}
                <div className="flex flex-col gap-3 max-w-2xl mx-auto sm:flex-row">
                  <input
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    placeholder="Origin city (e.g. Atlanta, GA)"
                    className="flex-1 px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#C8972B] text-sm min-w-0"
                  />
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="flex-1 px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#C8972B] text-sm min-w-0"
                  />
                  <Link
                    to="/contact"
                    className="text-center px-7 py-3 sm:py-3.5 bg-[#C8972B] text-white font-semibold rounded-xl hover:bg-[#b8861f] transition-colors text-sm sm:whitespace-nowrap"
                  >
                    Request Quote
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── ROUTES ────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-8 sm:mb-10">
            <SectionLabel>Domestic Routes</SectionLabel>
            <h2 style={{ fontFamily: "'Sora', sans-serif" }} className="text-xl sm:text-3xl font-bold text-[#1E1E1E] mb-2 sm:mb-3">
              We Serve Major Cities Across the USA
            </h2>
          </AnimatedSection>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {routes.map((city) => (
              <span
                key={city}
                className="flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 bg-white rounded-full shadow-sm border border-gray-100 text-xs sm:text-sm text-[#1E1E1E] font-medium hover:bg-[#1A2B5F] hover:text-white hover:border-[#1A2B5F] transition-all duration-200 cursor-pointer"
              >
                <MapPin size={10} className="text-[#C8972B] shrink-0" />
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}