import { useState } from "react";
import { Link } from "react-router";
import type { ReactNode } from "react";
import {
  Plane, Ship, Truck, Train, Package, ArrowRight,
  CheckCircle2, Zap, Globe, Clock, Shield, Calculator,
  ChevronDown, AlertCircle, TrendingDown,
} from "lucide-react";
import { AnimatedSection } from "../components/AnimatedSection";

const HERO_IMG = "https://images.unsplash.com/photo-1610970905111-789040dd532d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMGFpcnBsYW5lJTIwZnJlaWdodCUyMGxvZ2lzdGljcyUyMGFlcmlhbHxlbnwxfHx8fDE3NzU5MDE1MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080";
const SHIP_IMG = "https://images.unsplash.com/photo-1774929105002-64492268fb47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250YWluZXIlMjBzaGlwJTIwb2NlYW4lMjBmcmVpZ2h0JTIwcG9ydHxlbnwxfHx8fDE3NzU5MDE1Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080";
const TRUCK_IMG = "https://images.unsplash.com/photo-1769698822097-458694b3cf8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjB3YXJlaG91c2UlMjB0cnVja3MlMjByb2FkJTIwdHJhbnNwb3J0fGVufDF8fHx8MTc3NTkwMTUyN3ww&ixlib=rb-4.1.0&q=80&w=1080";
const TRAIN_IMG = "https://images.unsplash.com/photo-1768813387248-9d46c8a515f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVpZ2h0JTIwdHJhaW4lMjByYWlsJTIwY2FyZ28lMjB0cmFuc3BvcnR8ZW58MXx8fHwxNzc1OTAxNTI3fDA&ixlib=rb-4.1.0&q=80&w=1080";
const COURIER_IMG = "https://images.unsplash.com/photo-1762320723943-527ff68405c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VyaWVyJTIwZGVsaXZlcnklMjBsYXN0JTIwbWlsZSUyMHBhY2thZ2V8ZW58MXx8fHwxNzc1OTAxNTMxfDA&ixlib=rb-4.1.0&q=80&w=1080";
const CRANE_IMG = "https://images.unsplash.com/photo-1713859304089-7ce3059af128?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGVjaWFsJTIwcHJvamVjdCUyMGhlYXZ5JTIwbGlmdCUyMGNhcmdvJTIwY3JhbmV8ZW58MXx8fHwxNzc1OTAxNTMxfDA&ixlib=rb-4.1.0&q=80&w=1080";
const SOLUTIONS_IMG = "https://images.unsplash.com/photo-1774194803011-c3df080fb486?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjBzb2x1dGlvbnMlMjBzdXBwbHklMjBjaGFpbiUyMG1hbmFnZW1lbnR8ZW58MXx8fHwxNzc1OTAxNTM0fDA&ixlib=rb-4.1.0&q=80&w=1080";
const TEAM_IMG = "https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBjb3Jwb3JhdGUlMjBvZmZpY2UlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzc1OTAxNTMwfDA&ixlib=rb-4.1.0&q=80&w=1080";

const services = [
  {
    icon: Plane,
    title: "Air Freight",
    desc: "Express and standard air cargo services connecting your business to 150+ countries via the world's busiest air freight hubs.",
    img: HERO_IMG,
    features: ["Next-flight-out options", "Temperature-controlled units", "Dangerous goods handling", "Charter services available"],
    accent: "#1A2B5F",
  },
  {
    icon: Ship,
    title: "Sea Freight",
    desc: "Full Container Load (FCL), Less-than-Container Load (LCL), and bulk shipping solutions across all major ocean trade lanes.",
    img: SHIP_IMG,
    features: ["FCL & LCL options", "Break bulk & RoRo", "Port-to-port & door-to-door", "Real-time vessel tracking"],
    accent: "#1a4b7f",
  },
  {
    icon: Truck,
    title: "Road Transport",
    desc: "Comprehensive trucking and road freight solutions covering the continental US, Canada, and Mexico with GPS-tracked fleets.",
    img: TRUCK_IMG,
    features: ["FTL & LTL options", "Refrigerated transport", "Hazmat certified carriers", "Same-day local delivery"],
    accent: "#0f3a6e",
  },
  {
    icon: Train,
    title: "Rail Freight",
    desc: "Cost-effective rail solutions for heavy, bulk, and intermodal cargo across major rail corridors in North America and Europe.",
    img: TRAIN_IMG,
    features: ["Intermodal solutions", "Bulk commodity transport", "Hazardous materials", "Cross-border rail service"],
    accent: "#1A2B5F",
  },
  {
    icon: Zap,
    title: "Special Project Transport",
    desc: "End-to-end project logistics for oversized, heavy-lift, and high-value cargo requiring custom engineering and planning.",
    img: CRANE_IMG,
    features: ["Heavy lift & oversized", "Project management", "Route survey & permits", "Specialist equipment"],
    accent: "#8B4513",
  },
  {
    icon: Package,
    title: "Courier Services",
    desc: "Fast, reliable door-to-door courier services for documents, parcels, and packages with guaranteed delivery times.",
    img: COURIER_IMG,
    features: ["Same-day & next-day", "Signature on delivery", "Real-time notifications", "International courier"],
    accent: "#1A2B5F",
  },
  {
    icon: Globe,
    title: "Last Mile Delivery",
    desc: "Hyper-local delivery solutions for e-commerce, retail, and enterprise clients with full visibility and optimized routing.",
    img: COURIER_IMG,
    features: ["Route optimization AI", "E-commerce integration", "Proof of delivery", "Returns management"],
    accent: "#0f5a3e",
  },
  {
    icon: Shield,
    title: "Contract Logistics",
    desc: "Strategic 3PL partnerships including warehousing, distribution, inventory management, and value-added services.",
    img: SOLUTIONS_IMG,
    features: ["3PL & 4PL solutions", "Warehouse management", "Inventory optimization", "Value-added services"],
    accent: "#1A2B5F",
  },
];

// ─── Quote Calculator Logic ───────────────────────────────────────────────────

const TRANSPORT_OPTIONS = [
  { value: "air",  label: "Air Freight",   icon: Plane, baseRate: 11.5, transitDays: "1–3 days"   },
  { value: "sea",  label: "Sea Freight",   icon: Ship,  baseRate: 2.2,  transitDays: "14–35 days"  },
  { value: "road", label: "Road Transport",icon: Truck, baseRate: 3.8,  transitDays: "2–7 days"   },
  { value: "rail", label: "Rail Freight",  icon: Train, baseRate: 2.9,  transitDays: "5–15 days"  },
];

const COMMODITY_OPTIONS = [
  { value: "general",    label: "General Cargo",   multiplier: 1.00 },
  { value: "perishable", label: "Perishable Goods", multiplier: 1.25 },
  { value: "hazmat",     label: "Hazardous Material", multiplier: 1.45 },
  { value: "highvalue",  label: "High-Value Cargo", multiplier: 1.30 },
];

function calcEstimate(weightKg: number, transport: string, commodity: string) {
  const t = TRANSPORT_OPTIONS.find((o) => o.value === transport) ?? TRANSPORT_OPTIONS[0];
  const c = COMMODITY_OPTIONS.find((o) => o.value === commodity) ?? COMMODITY_OPTIONS[0];
  const volumeDiscount = weightKg > 500 ? 0.78 : weightKg > 100 ? 0.88 : 1;
  const mid = weightKg * t.baseRate * c.multiplier * volumeDiscount;
  return {
    low: Math.max(50, Math.round(mid * 0.85)),
    high: Math.round(mid * 1.15),
    transitDays: t.transitDays,
  };
}

// ─── Quote Calculator Component ───────────────────────────────────────────────

function QuoteCalculator() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState<"kg" | "lbs">("kg");
  const [transport, setTransport] = useState("air");
  const [commodity, setCommodity] = useState("general");
  const [result, setResult] = useState<{ low: number; high: number; transitDays: string } | null>(null);
  const [touched, setTouched] = useState(false);

  const weightKg = unit === "lbs"
    ? parseFloat(weight) * 0.453592
    : parseFloat(weight);

  const isValid = origin.trim() && destination.trim() && parseFloat(weight) > 0;

  const handleCalculate = () => {
    setTouched(true);
    if (!isValid) return;
    setResult(calcEstimate(weightKg, transport, commodity));
  };

  const handleReset = () => {
    setOrigin(""); setDestination(""); setWeight("");
    setTransport("air"); setCommodity("general");
    setResult(null); setTouched(false);
  };

  const selectedTransport = TRANSPORT_OPTIONS.find((o) => o.value === transport)!;

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1A2B5F] to-[#0f3a6e] px-8 py-7">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-[#C8972B] flex items-center justify-center">
            <Calculator size={18} className="text-white" />
          </div>
          <div>
            <h3
              style={{ fontFamily: "'Sora', sans-serif" }}
              className="text-white font-bold text-lg"
            >
              Instant Freight Quote Calculator
            </h3>
            <p className="text-white/60 text-xs">
              Get an estimated rate in seconds — no sign-up required
            </p>
          </div>
        </div>
      </div>

      <div className="p-8">
        {/* Transport type tabs */}
        <div className="mb-6">
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
            Transport Mode
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {TRANSPORT_OPTIONS.map(({ value, label, icon: Icon }) => (
              <button
                key={value}
                onClick={() => { setTransport(value); setResult(null); }}
                className={`flex flex-col items-center gap-1.5 py-3 px-2 rounded-xl border text-xs font-medium transition-all duration-200 ${
                  transport === value
                    ? "bg-[#1A2B5F] text-white border-[#1A2B5F] shadow-md"
                    : "bg-[#F5F7FA] text-gray-600 border-gray-200 hover:border-[#1A2B5F]/30 hover:bg-[#1A2B5F]/5"
                }`}
              >
                <Icon size={18} />
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Form grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          {/* Origin */}
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Origin City / Country
            </label>
            <input
              value={origin}
              onChange={(e) => { setOrigin(e.target.value); setResult(null); }}
              placeholder="e.g. Atlanta, USA"
              className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#1A2B5F]/20 transition-all ${
                touched && !origin.trim()
                  ? "border-red-300 bg-red-50"
                  : "border-gray-200 bg-[#F5F7FA] focus:border-[#1A2B5F]/40"
              }`}
            />
            {touched && !origin.trim() && (
              <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                <AlertCircle size={11} /> Required
              </p>
            )}
          </div>

          {/* Destination */}
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Destination City / Country
            </label>
            <input
              value={destination}
              onChange={(e) => { setDestination(e.target.value); setResult(null); }}
              placeholder="e.g. London, UK"
              className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#1A2B5F]/20 transition-all ${
                touched && !destination.trim()
                  ? "border-red-300 bg-red-50"
                  : "border-gray-200 bg-[#F5F7FA] focus:border-[#1A2B5F]/40"
              }`}
            />
            {touched && !destination.trim() && (
              <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                <AlertCircle size={11} /> Required
              </p>
            )}
          </div>

          {/* Weight */}
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Cargo Weight
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                min="0.1"
                value={weight}
                onChange={(e) => { setWeight(e.target.value); setResult(null); }}
                placeholder="e.g. 250"
                className={`flex-1 px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#1A2B5F]/20 transition-all ${
                  touched && !(parseFloat(weight) > 0)
                    ? "border-red-300 bg-red-50"
                    : "border-gray-200 bg-[#F5F7FA] focus:border-[#1A2B5F]/40"
                }`}
              />
              <div className="flex rounded-xl border border-gray-200 overflow-hidden">
                {(["kg", "lbs"] as const).map((u) => (
                  <button
                    key={u}
                    onClick={() => { setUnit(u); setResult(null); }}
                    className={`px-3 py-3 text-xs font-semibold transition-colors ${
                      unit === u
                        ? "bg-[#1A2B5F] text-white"
                        : "bg-[#F5F7FA] text-gray-500 hover:bg-gray-100"
                    }`}
                  >
                    {u}
                  </button>
                ))}
              </div>
            </div>
            {touched && !(parseFloat(weight) > 0) && (
              <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                <AlertCircle size={11} /> Enter a valid weight
              </p>
            )}
          </div>

          {/* Commodity */}
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Commodity Type
            </label>
            <div className="relative">
              <select
                value={commodity}
                onChange={(e) => { setCommodity(e.target.value); setResult(null); }}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#F5F7FA] text-sm focus:outline-none focus:ring-2 focus:ring-[#1A2B5F]/20 appearance-none cursor-pointer"
              >
                {COMMODITY_OPTIONS.map(({ value, label }) => (
                  <option key={value} value={value}>{label}</option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={handleCalculate}
          className="w-full py-4 bg-[#1A2B5F] text-white font-semibold rounded-xl hover:bg-[#C8972B] transition-all duration-200 text-sm flex items-center justify-center gap-2 group shadow-md hover:shadow-[#C8972B]/30"
        >
          <Calculator size={16} />
          Calculate Estimate
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </button>

        {/* ── Result Display ── */}
        {result && (
          <div className="mt-6 rounded-2xl border border-[#C8972B]/30 bg-gradient-to-br from-[#C8972B]/5 to-[#1A2B5F]/5 p-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="flex items-start justify-between mb-4 flex-wrap gap-3">
              <div>
                <p className="text-xs text-gray-500 mb-1">Estimated Freight Cost</p>
                <div
                  style={{ fontFamily: "'Sora', sans-serif" }}
                  className="text-3xl font-bold text-[#1A2B5F]"
                >
                  ${result.low.toLocaleString()}
                  <span className="text-lg text-gray-400 font-medium mx-1">–</span>
                  ${result.high.toLocaleString()}
                  <span className="text-sm text-gray-400 font-normal ml-1">USD</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 bg-[#1A2B5F]/10 px-3 py-2 rounded-xl">
                <selectedTransport.icon size={14} className="text-[#1A2B5F]" />
                <span className="text-xs font-semibold text-[#1A2B5F]">{selectedTransport.label}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
              <div className="bg-white rounded-xl p-3 text-center shadow-sm">
                <Clock size={14} className="text-[#C8972B] mx-auto mb-1" />
                <p className="text-xs text-gray-500">Transit Time</p>
                <p className="text-sm font-semibold text-[#1E1E1E]">{result.transitDays}</p>
              </div>
              <div className="bg-white rounded-xl p-3 text-center shadow-sm">
                <Package size={14} className="text-[#C8972B] mx-auto mb-1" />
                <p className="text-xs text-gray-500">Weight</p>
                <p className="text-sm font-semibold text-[#1E1E1E]">{parseFloat(weight)} {unit}</p>
              </div>
              <div className="bg-white rounded-xl p-3 text-center shadow-sm col-span-2 sm:col-span-1">
                <TrendingDown size={14} className="text-[#C8972B] mx-auto mb-1" />
                <p className="text-xs text-gray-500">Rate / kg</p>
                <p className="text-sm font-semibold text-[#1E1E1E]">
                  ${(result.low / Math.max(weightKg, 1)).toFixed(2)} – ${(result.high / Math.max(weightKg, 1)).toFixed(2)}
                </p>
              </div>
            </div>

            <p className="text-xs text-gray-400 mb-4 bg-white/60 rounded-lg px-3 py-2">
              ⚠️ This is an indicative estimate only. Final pricing depends on exact dimensions, route, surcharges, and customs requirements. Volume discounts applied for 100+ kg and 500+ kg shipments.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="flex-1 py-3 bg-[#C8972B] text-white text-sm font-semibold rounded-xl hover:bg-[#b8861f] transition-colors text-center flex items-center justify-center gap-2"
              >
                Get Official Quote <ArrowRight size={13} />
              </Link>
              <button
                onClick={handleReset}
                className="flex-1 py-3 bg-white border border-gray-200 text-gray-600 text-sm font-semibold rounded-xl hover:border-[#1A2B5F] transition-colors"
              >
                Reset Calculator
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── SectionLabel (unchanged) ─────────────────────────────────────────────────

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 mb-4">
      <span className="w-6 h-0.5 bg-[#C8972B]" />
      <span className="text-xs font-semibold tracking-widest uppercase text-[#C8972B]">{children}</span>
      <span className="w-6 h-0.5 bg-[#C8972B]" />
    </div>
  );
}

export function Services() {
  return (
    <div>
      {/* Hero — unchanged */}
      <section className="relative h-96 sm:h-[420px] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_IMG})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A2B5F]/95 to-[#1A2B5F]/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-14 pt-32">
          <div className="inline-flex items-center gap-2 bg-[#C8972B]/20 border border-[#C8972B]/40 rounded-full px-4 py-1.5 mb-4">
            <span className="text-[#C8972B] text-xs font-semibold tracking-widest uppercase">World Class Logistics</span>
          </div>
          <h1 style={{ fontFamily: "'Sora', sans-serif" }} className="text-4xl sm:text-5xl font-bold text-white mb-3">
            Our Services
          </h1>
          <p className="text-white/65 max-w-xl">
            Comprehensive freight and logistics solutions across every mode of transport — designed for the demands of modern global commerce.
          </p>
        </div>
      </section>

      {/* Intro — with animation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <SectionLabel>What We Offer</SectionLabel>
            <h2 style={{ fontFamily: "'Sora', sans-serif" }} className="text-3xl sm:text-4xl font-bold text-[#1E1E1E] mb-5 max-w-2xl mx-auto">
              Every Mode. Every Route. <span className="text-[#C8972B]">Delivered.</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
              From the first mile to the last, Ocean Air Express offers a full portfolio of freight and logistics services. Our integrated approach means we can handle everything under one roof — simplifying your supply chain and reducing your total logistics cost.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 max-w-3xl mx-auto">
            {[
              { icon: Clock, label: "On-Time Rate", value: "99.2%" },
              { icon: Globe, label: "Countries", value: "150+" },
              { icon: Package, label: "Monthly Shipments", value: "25K+" },
              { icon: Shield, label: "Certifications", value: "4" },
            ].map(({ icon: Icon, label, value }, i) => (
              <AnimatedSection key={label} delay={i * 0.08}>
                <div className="bg-[#F5F7FA] rounded-2xl p-5 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <Icon size={20} className="text-[#C8972B] mx-auto mb-2" />
                  <div style={{ fontFamily: "'Sora', sans-serif" }} className="text-2xl font-bold text-[#1A2B5F] mb-1">{value}</div>
                  <div className="text-gray-500 text-xs">{label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid — with animation */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <SectionLabel>Services</SectionLabel>
            <h2 style={{ fontFamily: "'Sora', sans-serif" }} className="text-3xl sm:text-4xl font-bold text-[#1E1E1E]">
              Complete Service Portfolio
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map(({ icon: Icon, title, desc, img, features }, i) => (
              <AnimatedSection key={title} delay={(i % 2) * 0.1}>
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-[#C8972B]/20 h-full">
                  <div className="relative h-52 overflow-hidden">
                    <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1A2B5F]/80 to-[#1A2B5F]/20" />
                    <div className="absolute top-5 left-5 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#C8972B] flex items-center justify-center shadow-lg">
                        <Icon size={18} className="text-white" />
                      </div>
                      <h3 style={{ fontFamily: "'Sora', sans-serif" }} className="text-xl font-bold text-white">{title}</h3>
                    </div>
                  </div>
                  <div className="p-7">
                    <p className="text-gray-500 text-sm leading-relaxed mb-5">{desc}</p>
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {features.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-xs text-gray-600">
                          <CheckCircle2 size={13} className="text-[#C8972B] shrink-0" />
                          {f}
                        </div>
                      ))}
                    </div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1A2B5F] text-white text-sm font-semibold rounded-xl hover:bg-[#C8972B] transition-colors duration-200"
                    >
                      Get a Quote <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quote Calculator Section (NEW) ─────────────────────── */}
      <section className="py-20 bg-white" id="quote-calculator">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <SectionLabel>Quote Calculator</SectionLabel>
            <h2 style={{ fontFamily: "'Sora', sans-serif" }} className="text-3xl sm:text-4xl font-bold text-[#1E1E1E] mb-4">
              Estimate Your Freight Cost
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Get an instant ballpark figure for your shipment. Enter your route, cargo weight, and transport preference to see an estimated rate range.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <QuoteCalculator />
          </AnimatedSection>
        </div>
      </section>

      {/* CTA — unchanged */}
      <section className="py-20 bg-[#1A2B5F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <SectionLabel>Get Started</SectionLabel>
            <h2 style={{ fontFamily: "'Sora', sans-serif" }} className="text-3xl sm:text-4xl font-bold text-white mb-5">
              Need a Custom Logistics Solution?
            </h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              Our expert team will assess your needs and design a tailored logistics strategy. Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-8 py-4 bg-[#C8972B] text-white font-semibold rounded-xl hover:bg-[#b8861f] transition-colors text-sm">
                Contact Our Team
              </Link>
              <a href="tel:+14709090419" className="px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors text-sm">
                Call +1 (470) 909-0419
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}