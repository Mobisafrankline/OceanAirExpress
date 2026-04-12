import { useState, type ReactNode } from "react";
import { Link } from "react-router";
import {
  Search, Package, MapPin, Clock, CheckCircle2, Circle, Truck,
  Plane, Ship, AlertCircle, ArrowRight, Zap, RefreshCw,
  RotateCcw, ChevronDown, ChevronUp,
} from "lucide-react";
import { AnimatedSection } from "../components/AnimatedSection";

// ─── Types ────────────────────────────────────────────────────────────────────

type TrackingStatus = "pending" | "in-transit" | "out-for-delivery" | "delivered";

interface TimelineStep {
  label: string;
  location: string;
  timestamp: string;
  completed: boolean;
  active: boolean;
}

interface ShipmentData {
  trackingNumber: string;
  status: TrackingStatus;
  origin: string;
  destination: string;
  weight: string;
  dimensions: string;
  service: string;
  serviceIcon: typeof Plane;
  estimatedDelivery: string;
  lastUpdate: string;
  currentLocation: string;
  recipient: string;
  timeline: TimelineStep[];
}

// ─── Mock Shipment Database ───────────────────────────────────────────────────

const MOCK_DB: Record<string, ShipmentData> = {
  "OAE-001234": {
    trackingNumber: "OAE-001234",
    status: "in-transit",
    origin: "Atlanta, GA",
    destination: "New York, NY",
    weight: "250 kg",
    dimensions: "120 × 80 × 60 cm",
    service: "Air Freight",
    serviceIcon: Plane,
    estimatedDelivery: "April 15, 2026",
    lastUpdate: "April 12, 2026 — 09:30 AM EST",
    currentLocation: "Charlotte Douglas Intl Airport, NC",
    recipient: "TechNova Inc., New York",
    timeline: [
      { label: "Order Placed",        location: "Atlanta, GA",                     timestamp: "Apr 10 · 09:00 AM", completed: true,  active: false },
      { label: "Picked Up",           location: "Atlanta, GA",                     timestamp: "Apr 10 · 03:30 PM", completed: true,  active: false },
      { label: "Departed Origin",     location: "Hartsfield–Jackson ATL Airport",  timestamp: "Apr 11 · 11:00 PM", completed: true,  active: false },
      { label: "In Transit",          location: "Charlotte Douglas Intl, NC",      timestamp: "Apr 12 · 09:30 AM", completed: false, active: true  },
      { label: "Arrived Destination", location: "JFK Airport, New York",           timestamp: "Est. Apr 13",       completed: false, active: false },
      { label: "Out for Delivery",    location: "New York, NY",                    timestamp: "Est. Apr 14",       completed: false, active: false },
      { label: "Delivered",           location: "New York, NY",                    timestamp: "Est. Apr 15",       completed: false, active: false },
    ],
  },
  "OAE-005678": {
    trackingNumber: "OAE-005678",
    status: "delivered",
    origin: "Los Angeles, CA",
    destination: "Miami, FL",
    weight: "1,200 kg",
    dimensions: "240 × 200 × 180 cm",
    service: "Road Transport",
    serviceIcon: Truck,
    estimatedDelivery: "April 5, 2026",
    lastUpdate: "April 5, 2026 — 02:15 PM EST",
    currentLocation: "Miami, FL (Delivered ✓)",
    recipient: "SunTrade Corp., Miami",
    timeline: [
      { label: "Order Placed",        location: "Los Angeles, CA",         timestamp: "Mar 20 · 10:00 AM", completed: true, active: false },
      { label: "Picked Up",           location: "Los Angeles, CA",         timestamp: "Mar 21 · 02:00 PM", completed: true, active: false },
      { label: "Departed Origin",     location: "LA Distribution Hub",     timestamp: "Mar 23 · 08:00 AM", completed: true, active: false },
      { label: "In Transit",          location: "Interstate 10 Corridor",  timestamp: "Mar 23 – Apr 4",    completed: true, active: false },
      { label: "Arrived Destination", location: "Miami Freight Terminal",  timestamp: "Apr 4 · 06:00 AM",  completed: true, active: false },
      { label: "Out for Delivery",    location: "Miami, FL",               timestamp: "Apr 5 · 09:00 AM",  completed: true, active: false },
      { label: "Delivered",           location: "Miami, FL",               timestamp: "Apr 5 · 02:15 PM",  completed: true, active: true  },
    ],
  },
  "OAE-009012": {
    trackingNumber: "OAE-009012",
    status: "pending",
    origin: "Chicago, IL",
    destination: "Dallas, TX",
    weight: "80 kg",
    dimensions: "60 × 40 × 35 cm",
    service: "Express Courier",
    serviceIcon: Zap,
    estimatedDelivery: "April 14, 2026",
    lastUpdate: "April 12, 2026 — 11:00 AM CST",
    currentLocation: "Chicago, IL (Processing)",
    recipient: "Lone Star Supplies, Dallas",
    timeline: [
      { label: "Order Placed",        location: "Chicago, IL",             timestamp: "Apr 12 · 11:00 AM",   completed: true,  active: false },
      { label: "Picked Up",           location: "Chicago, IL",             timestamp: "Scheduled · 5:00 PM", completed: false, active: true  },
      { label: "Departed Origin",     location: "O'Hare Intl Airport, IL", timestamp: "Est. Apr 13",         completed: false, active: false },
      { label: "In Transit",          location: "En Route",                timestamp: "Est. Apr 13",         completed: false, active: false },
      { label: "Arrived Destination", location: "Dallas Love Field, TX",   timestamp: "Est. Apr 14",         completed: false, active: false },
      { label: "Out for Delivery",    location: "Dallas, TX",              timestamp: "Est. Apr 14",         completed: false, active: false },
      { label: "Delivered",           location: "Dallas, TX",              timestamp: "Est. Apr 14",         completed: false, active: false },
    ],
  },
  "OAE-003456": {
    trackingNumber: "OAE-003456",
    status: "out-for-delivery",
    origin: "Miami, FL",
    destination: "Boston, MA",
    weight: "340 kg",
    dimensions: "160 × 120 × 100 cm",
    service: "Coastal Shipping",
    serviceIcon: Ship,
    estimatedDelivery: "April 12, 2026",
    lastUpdate: "April 12, 2026 — 07:45 AM EST",
    currentLocation: "Boston city limits, MA",
    recipient: "NorthEast Distributors, Boston",
    timeline: [
      { label: "Order Placed",        location: "Miami, FL",                   timestamp: "Apr 8 · 08:00 AM",  completed: true, active: false },
      { label: "Picked Up",           location: "Miami, FL",                   timestamp: "Apr 8 · 04:00 PM",  completed: true, active: false },
      { label: "Departed Origin",     location: "Port of Miami",               timestamp: "Apr 9 · 10:00 PM",  completed: true, active: false },
      { label: "In Transit",          location: "US East Coastline",           timestamp: "Apr 9 – Apr 11",    completed: true, active: false },
      { label: "Arrived Destination", location: "Port of Boston, MA",          timestamp: "Apr 12 · 05:30 AM", completed: true, active: false },
      { label: "Out for Delivery",    location: "Boston city limits, MA",      timestamp: "Apr 12 · 07:45 AM", completed: false, active: true  },
      { label: "Delivered",           location: "Boston, MA",                  timestamp: "Est. Today",        completed: false, active: false },
    ],
  },
};

// ─── Status Configuration ─────────────────────────────────────────────────────

const STATUS_CONFIG: Record<TrackingStatus, {
  label: string;
  badgeClass: string;
  dotClass: string;
  progressPct: number;
  message: string;
}> = {
  pending:            { label: "Processing",        badgeClass: "bg-amber-100 text-amber-700 border border-amber-200",       dotClass: "bg-amber-500",   progressPct: 15,  message: "Your shipment has been received and is being prepared for dispatch." },
  "in-transit":       { label: "In Transit",         badgeClass: "bg-blue-100 text-blue-700 border border-blue-200",         dotClass: "bg-blue-500",    progressPct: 55,  message: "Your shipment is on the move and progressing toward its destination." },
  "out-for-delivery": { label: "Out for Delivery",   badgeClass: "bg-purple-100 text-purple-700 border border-purple-200",   dotClass: "bg-purple-500",  progressPct: 85,  message: "Your shipment is out for final delivery and will arrive today." },
  delivered:          { label: "Delivered ✓",        badgeClass: "bg-emerald-100 text-emerald-700 border border-emerald-200", dotClass: "bg-emerald-500", progressPct: 100, message: "Your shipment has been successfully delivered to the recipient." },
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 mb-4">
      <span className="w-6 h-0.5 bg-[#C8972B]" />
      <span className="text-xs font-semibold tracking-widest uppercase text-[#C8972B]">{children}</span>
      <span className="w-6 h-0.5 bg-[#C8972B]" />
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-start py-3 border-b border-gray-100 last:border-0 gap-4">
      <span className="text-gray-400 text-sm shrink-0">{label}</span>
      <span className="text-[#1E1E1E] text-sm font-medium text-right break-words max-w-[60%]">{value}</span>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function Tracking() {
  const [query, setQuery]               = useState("");
  const [activeTracking, setActiveTracking] = useState<string | null>(null);
  const [error, setError]               = useState(false);
  const [loading, setLoading]           = useState(false);
  const [detailsOpen, setDetailsOpen]   = useState(false);

  const shipment  = activeTracking ? MOCK_DB[activeTracking.toUpperCase()] : null;
  const statusCfg = shipment ? STATUS_CONFIG[shipment.status] : null;

  const handleSearch = () => {
    const key = query.trim().toUpperCase();
    if (!key) return;
    setLoading(true);
    setError(false);
    setDetailsOpen(false);
    setTimeout(() => {
      if (MOCK_DB[key]) {
        setActiveTracking(key);
        setError(false);
      } else {
        setActiveTracking(null);
        setError(true);
      }
      setLoading(false);
    }, 700);
  };

  const handleReset = () => {
    setQuery("");
    setActiveTracking(null);
    setError(false);
    setDetailsOpen(false);
  };

  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative bg-[#1A2B5F] pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-72 sm:w-[500px] h-72 sm:h-[500px] rounded-full bg-[#C8972B] blur-3xl -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-60 sm:w-80 h-60 sm:h-80 rounded-full bg-white blur-3xl translate-y-1/2 -translate-x-1/4" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <div className="inline-flex items-center gap-2 bg-[#C8972B]/20 border border-[#C8972B]/40 rounded-full px-4 py-1.5 mb-5">
              <span className="text-[#C8972B] text-xs font-semibold tracking-widest uppercase">Real-Time Tracking</span>
            </div>
            <h1 style={{ fontFamily: "'Sora', sans-serif" }} className="text-3xl sm:text-5xl font-bold text-white mb-3">
              Track Your Shipment
            </h1>
            <p className="text-white/60 max-w-xl mx-auto mb-8 text-sm sm:text-base px-2">
              Enter your Ocean Air Express tracking number to get live status updates, location history, and estimated delivery time.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto px-2 sm:px-0">
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-2">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  placeholder="e.g. OAE-001234"
                  className="flex-1 px-4 py-3 bg-transparent text-white placeholder-white/40 text-sm focus:outline-none"
                />
                <button
                  onClick={handleSearch}
                  disabled={loading || !query.trim()}
                  className="w-full sm:w-auto px-6 py-3 bg-[#C8972B] text-white font-semibold rounded-xl hover:bg-[#b8861f] transition-colors text-sm flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed shrink-0"
                >
                  {loading ? <RefreshCw size={16} className="animate-spin" /> : <Search size={16} />}
                  {loading ? "Searching…" : "Track"}
                </button>
              </div>

              {/* Demo chips */}
              <div className="flex flex-wrap justify-center gap-2 mt-3">
                <span className="text-white/40 text-xs self-center">Try:</span>
                {Object.keys(MOCK_DB).map((key) => (
                  <button
                    key={key}
                    onClick={() => { setQuery(key); setActiveTracking(key); setError(false); setDetailsOpen(false); }}
                    className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-white/70 text-xs hover:bg-white/20 hover:text-white transition-all"
                  >
                    {key}
                  </button>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Error State ───────────────────────────────────────── */}
      {error && !shipment && (
        <section className="py-12 bg-[#F5F7FA]">
          <div className="max-w-md mx-auto px-4 text-center">
            <AnimatedSection>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4">
                  <AlertCircle size={26} className="text-red-400" />
                </div>
                <h3 style={{ fontFamily: "'Sora', sans-serif" }} className="text-lg font-bold text-[#1E1E1E] mb-2">
                  Tracking Number Not Found
                </h3>
                <p className="text-gray-500 text-sm mb-5">
                  We couldn't find a shipment for <strong className="text-[#1E1E1E] break-all">{query}</strong>. Please check and try again.
                </p>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={handleReset}
                    className="flex items-center justify-center gap-2 px-5 py-2.5 bg-[#1A2B5F] text-white text-sm font-semibold rounded-xl hover:bg-[#C8972B] transition-colors"
                  >
                    <RotateCcw size={14} /> Try Again
                  </button>
                  <Link
                    to="/contact"
                    className="flex items-center justify-center gap-2 px-5 py-2.5 bg-white border border-gray-200 text-[#1E1E1E] text-sm font-semibold rounded-xl hover:border-[#1A2B5F] transition-colors"
                  >
                    Contact Support <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* ── Results ────────────────────────────────────────────── */}
      {shipment && statusCfg && (
        <section className="py-10 sm:py-16 bg-[#F5F7FA]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* ── Status Card ── */}
            <AnimatedSection className="mb-6">
              <div className="bg-white rounded-2xl p-5 sm:p-8 shadow-sm border border-gray-100">
                {/* Header row */}
                <div className="flex flex-col gap-3 mb-5">
                  <div className="flex items-start justify-between gap-3 flex-wrap">
                    <div>
                      <span style={{ fontFamily: "'Sora', sans-serif" }} className="text-lg sm:text-xl font-bold text-[#1E1E1E] block mb-1.5">
                        {shipment.trackingNumber}
                      </span>
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${statusCfg.badgeClass}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${statusCfg.dotClass} animate-pulse`} />
                        {statusCfg.label}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 bg-[#F5F7FA] px-3 py-2 rounded-xl shrink-0">
                      <shipment.serviceIcon size={15} className="text-[#C8972B]" />
                      <span className="text-xs font-medium text-[#1A2B5F]">{shipment.service}</span>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm">{statusCfg.message}</p>
                </div>

                {/* Progress bar */}
                <div className="mb-5">
                  <div className="flex justify-between text-xs text-gray-400 mb-1.5">
                    <span className="truncate max-w-[45%]">{shipment.origin}</span>
                    <span className="truncate max-w-[45%] text-right">{shipment.destination}</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#1A2B5F] to-[#C8972B] rounded-full transition-all duration-1000"
                      style={{ width: `${statusCfg.progressPct}%` }}
                    />
                  </div>
                </div>

                {/* Current location pill */}
                <div className="flex flex-wrap items-center gap-2 bg-[#1A2B5F]/5 border border-[#1A2B5F]/10 rounded-xl px-4 py-3">
                  <MapPin size={14} className="text-[#C8972B] shrink-0" />
                  <span className="text-xs sm:text-sm text-[#1E1E1E] font-medium flex-1 min-w-0">
                    <span className="text-gray-400">Currently at: </span>
                    <span className="text-[#1A2B5F] break-words">{shipment.currentLocation}</span>
                  </span>
                  <span className="text-xs text-gray-400 whitespace-nowrap ml-auto">
                    {shipment.lastUpdate.split("—")[1]?.trim()}
                  </span>
                </div>
              </div>
            </AnimatedSection>

            {/* ── Timeline (full width on mobile) ── */}
            <AnimatedSection className="mb-6" delay={0.05}>
              <div className="bg-white rounded-2xl p-5 sm:p-8 shadow-sm border border-gray-100">
                <h3 style={{ fontFamily: "'Sora', sans-serif" }} className="font-bold text-[#1E1E1E] mb-5 flex items-center gap-2 text-sm sm:text-base">
                  <Clock size={16} className="text-[#C8972B]" />
                  Shipment Timeline
                </h3>
                <div className="relative">
                  {shipment.timeline.map((step, idx) => (
                    <div key={idx} className="flex gap-3 sm:gap-4 relative">
                      {idx < shipment.timeline.length - 1 && (
                        <div
                          className={`absolute left-[15px] top-8 w-0.5 -translate-x-1/2 ${step.completed ? "bg-[#1A2B5F]" : "bg-gray-200"}`}
                          style={{ height: "calc(100% - 8px)" }}
                        />
                      )}
                      <div className="relative z-10 shrink-0 mt-0.5">
                        {step.completed && !step.active ? (
                          <div className="w-8 h-8 rounded-full bg-[#1A2B5F] flex items-center justify-center">
                            <CheckCircle2 size={15} className="text-white" />
                          </div>
                        ) : step.active ? (
                          <div className="w-8 h-8 rounded-full bg-[#C8972B] flex items-center justify-center shadow-md">
                            <div className="w-3 h-3 rounded-full bg-white animate-pulse" />
                          </div>
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-gray-200 flex items-center justify-center">
                            <Circle size={10} className="text-gray-300" />
                          </div>
                        )}
                      </div>
                      <div className="pb-5 flex-1 min-w-0">
                        <div className="flex flex-col xs:flex-row xs:items-start xs:justify-between gap-0.5 xs:gap-2">
                          <div className="min-w-0">
                            <p className={`text-sm font-semibold leading-snug ${step.active ? "text-[#C8972B]" : step.completed ? "text-[#1E1E1E]" : "text-gray-400"}`}>
                              {step.label}
                              {step.active && (
                                <span className="ml-2 text-xs bg-[#C8972B]/10 text-[#C8972B] px-2 py-0.5 rounded-full">Now</span>
                              )}
                            </p>
                            <p className="text-xs text-gray-400 mt-0.5 flex items-center gap-1 flex-wrap">
                              <MapPin size={10} className="shrink-0" />
                              <span className="break-words">{step.location}</span>
                            </p>
                          </div>
                          <span className="text-xs text-gray-400 whitespace-nowrap shrink-0 mt-0.5">{step.timestamp}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* ── Shipment Details — collapsible on mobile ── */}
            <AnimatedSection delay={0.1} className="mb-6">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Toggle header (visible on mobile, always-open label on desktop) */}
                <button
                  onClick={() => setDetailsOpen((p) => !p)}
                  className="w-full flex items-center justify-between p-5 sm:hidden"
                >
                  <span style={{ fontFamily: "'Sora', sans-serif" }} className="font-bold text-[#1E1E1E] flex items-center gap-2 text-sm">
                    <Package size={15} className="text-[#C8972B]" />
                    Shipment Details
                  </span>
                  {detailsOpen ? <ChevronUp size={18} className="text-gray-400" /> : <ChevronDown size={18} className="text-gray-400" />}
                </button>

                {/* Always show on md+ */}
                <div className={`px-5 pb-5 sm:block sm:pt-6 ${detailsOpen ? "block" : "hidden"}`}>
                  <h3 style={{ fontFamily: "'Sora', sans-serif" }} className="hidden sm:flex font-bold text-[#1E1E1E] mb-4 items-center gap-2 text-sm sm:text-base">
                    <Package size={16} className="text-[#C8972B]" />
                    Shipment Details
                  </h3>
                  <InfoRow label="Service"       value={shipment.service} />
                  <InfoRow label="Weight"        value={shipment.weight} />
                  <InfoRow label="Dimensions"    value={shipment.dimensions} />
                  <InfoRow label="Origin"        value={shipment.origin} />
                  <InfoRow label="Destination"   value={shipment.destination} />
                  <InfoRow label="Recipient"     value={shipment.recipient} />
                  <InfoRow label="Est. Delivery" value={shipment.estimatedDelivery} />
                </div>
              </div>
            </AnimatedSection>

            {/* ── Support CTA ── */}
            <AnimatedSection delay={0.12} className="mb-6">
              <div className="bg-[#1A2B5F] rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p style={{ fontFamily: "'Sora', sans-serif" }} className="text-white font-semibold text-sm mb-1">Need Help?</p>
                  <p className="text-white/60 text-xs leading-relaxed">Our 24/7 support team is ready to assist with any shipment queries.</p>
                </div>
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 px-6 py-2.5 bg-[#C8972B] text-white text-sm font-semibold rounded-xl hover:bg-[#b8861f] transition-colors shrink-0"
                >
                  Contact Support <ArrowRight size={13} />
                </Link>
              </div>
            </AnimatedSection>

            {/* Reset button */}
            <AnimatedSection className="text-center" delay={0.15}>
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#1A2B5F] transition-colors py-2"
              >
                <RotateCcw size={14} /> Track another shipment
              </button>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* ── Empty / Idle State ────────────────────────────────── */}
      {!shipment && !error && (
        <section className="py-14 sm:py-20 bg-[#F5F7FA]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-10 sm:mb-14">
              <SectionLabel>How It Works</SectionLabel>
              <h2 style={{ fontFamily: "'Sora', sans-serif" }} className="text-2xl sm:text-3xl font-bold text-[#1E1E1E] mb-3">
                Track in 3 Simple Steps
              </h2>
              <p className="text-gray-500 max-w-lg mx-auto text-sm px-2">
                Your tracking number is emailed when your shipment is booked. It follows the format <strong>OAE-XXXXXX</strong>.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
              {[
                { step: "01", icon: Package, title: "Enter Your Number",  desc: "Type or paste your OAE tracking number into the search bar above." },
                { step: "02", icon: Search,  title: "Instant Lookup",     desc: "Our system immediately retrieves the latest status from our logistics network." },
                { step: "03", icon: MapPin,  title: "Full Visibility",    desc: "View the complete timeline, current location, and estimated delivery date." },
              ].map(({ step, icon: Icon, title, desc }, i) => (
                <AnimatedSection key={step} delay={i * 0.1}>
                  <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-gray-100 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                    <div className="relative mx-auto mb-4 w-14 h-14">
                      <div className="w-14 h-14 rounded-2xl bg-[#1A2B5F]/5 flex items-center justify-center">
                        <Icon size={24} className="text-[#1A2B5F]" />
                      </div>
                      <span style={{ fontFamily: "'Sora', sans-serif" }} className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#C8972B] text-white text-xs font-bold flex items-center justify-center">
                        {step.replace("0", "")}
                      </span>
                    </div>
                    <h4 style={{ fontFamily: "'Sora', sans-serif" }} className="font-bold text-[#1E1E1E] mb-2 text-sm sm:text-base">{title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* CTA */}
            <AnimatedSection delay={0.3} className="text-center">
              <div className="bg-[#1A2B5F] rounded-2xl p-7 sm:p-8 max-w-2xl mx-auto">
                <h3 style={{ fontFamily: "'Sora', sans-serif" }} className="text-lg sm:text-xl font-bold text-white mb-2">
                  Don't have a tracking number?
                </h3>
                <p className="text-white/60 text-sm mb-5">
                  Contact our support team and we'll locate your shipment using your booking reference or waybill number.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link to="/contact" className="px-6 py-3 bg-[#C8972B] text-white font-semibold rounded-xl text-sm hover:bg-[#b8861f] transition-colors text-center">
                    Contact Support
                  </Link>
                  <Link to="/services" className="px-6 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-xl text-sm hover:bg-white/20 transition-colors text-center">
                    Book a Shipment
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}
    </div>
  );
}