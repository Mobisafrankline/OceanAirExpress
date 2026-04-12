import { Link } from "react-router";
import type { ReactNode } from "react";
import {
  MapPin, Clock, Briefcase, ArrowRight, CheckCircle2,
  Users, TrendingUp, Heart, Globe, Zap, Award, Star
} from "lucide-react";

const HERO_IMG = "https://images.unsplash.com/photo-1758691737492-48e8fdd336f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGRpdmVyc2UlMjBlbXBsb3llZXMlMjB3b3JrcGxhY2UlMjBjdWx0dXJlfGVufDF8fHx8MTc3NTkwMTUzNHww&ixlib=rb-4.1.0&q=80&w=1080";

const perks = [
  { icon: TrendingUp, title: "Career Growth", desc: "Clear promotion pathways and mentorship programs to accelerate your professional development." },
  { icon: Globe, title: "Global Exposure", desc: "Work with teams and clients across 150+ countries. International assignments available." },
  { icon: Heart, title: "Health & Wellness", desc: "Comprehensive medical, dental, and vision insurance. Wellness stipend and mental health support." },
  { icon: Award, title: "Competitive Pay", desc: "Market-leading salaries, annual bonuses, and equity participation for senior roles." },
  { icon: Users, title: "Inclusive Culture", desc: "Diversity, equity, and inclusion are core to how we hire, develop, and retain our people." },
  { icon: Zap, title: "Innovation First", desc: "Work with cutting-edge logistics technology and have a real impact on how the industry evolves." },
];

const jobs = [
  {
    title: "Senior Air Freight Operations Manager",
    department: "Air Freight",
    location: "Atlanta, GA",
    type: "Full-time",
    level: "Senior",
    desc: "Lead day-to-day air freight operations, manage carrier relationships, and drive continuous improvement across our air network.",
    requirements: ["5+ years air freight experience", "IATA accreditation preferred", "Strong analytical skills"],
  },
  {
    title: "Ocean Freight Business Development Executive",
    department: "Sea Freight",
    location: "Miami, FL",
    type: "Full-time",
    level: "Mid-Senior",
    desc: "Drive new business acquisition in the ocean freight space, develop client relationships, and expand our FCL/LCL portfolio.",
    requirements: ["3+ years ocean freight sales", "Proven revenue targets", "FMC knowledge"],
  },
  {
    title: "Last Mile Logistics Coordinator",
    department: "Delivery",
    location: "Chicago, IL",
    type: "Full-time",
    level: "Mid",
    desc: "Coordinate last-mile delivery operations, manage carrier partners, and optimize routing for maximum efficiency.",
    requirements: ["2+ years logistics ops", "Route optimization tools", "Customer service skills"],
  },
  {
    title: "Customs & Trade Compliance Specialist",
    department: "Compliance",
    location: "New York, NY",
    type: "Full-time",
    level: "Mid-Senior",
    desc: "Ensure regulatory compliance for all international shipments, manage customs documentation, and advise internal teams.",
    requirements: ["Customs broker license preferred", "Import/export expertise", "CBP regulations knowledge"],
  },
  {
    title: "Logistics Technology Product Manager",
    department: "Technology",
    location: "Remote",
    type: "Full-time",
    level: "Senior",
    desc: "Drive the product roadmap for our internal TMS and tracking platforms, working closely with engineering and operations.",
    requirements: ["5+ years product management", "Logistics tech background", "Agile certified"],
  },
  {
    title: "Road Freight Dispatcher",
    department: "Road Transport",
    location: "Houston, TX",
    type: "Full-time",
    level: "Entry-Mid",
    desc: "Coordinate daily trucking operations, communicate with drivers and clients, and ensure on-time delivery across the US.",
    requirements: ["1+ year dispatch experience", "DOT regulations", "Strong communication"],
  },
];

const levelColors: Record<string, string> = {
  "Entry-Mid": "bg-green-100 text-green-700",
  "Mid": "bg-blue-100 text-blue-700",
  "Mid-Senior": "bg-purple-100 text-purple-700",
  "Senior": "bg-[#1A2B5F]/10 text-[#1A2B5F]",
};

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 mb-4">
      <span className="w-6 h-0.5 bg-[#C8972B]" />
      <span className="text-xs font-semibold tracking-widest uppercase text-[#C8972B]">{children}</span>
      <span className="w-6 h-0.5 bg-[#C8972B]" />
    </div>
  );
}

export function Careers() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-96 sm:h-[450px] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-top" style={{ backgroundImage: `url(${HERO_IMG})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A2B5F]/95 via-[#1A2B5F]/75 to-[#1A2B5F]/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16 pt-32">
          <div className="inline-flex items-center gap-2 bg-[#C8972B]/20 border border-[#C8972B]/40 rounded-full px-4 py-1.5 mb-4">
            <span className="text-[#C8972B] text-xs font-semibold tracking-widest uppercase">We're Hiring</span>
          </div>
          <h1 style={{ fontFamily: "'Sora', sans-serif" }} className="text-4xl sm:text-5xl font-bold text-white mb-3">
            Build Your Career with
            <span className="block text-[#C8972B]">Ocean Air Express</span>
          </h1>
          <p className="text-white/65 max-w-xl">
            Join 600+ logistics professionals shaping the future of global freight. Competitive pay, global opportunities, and a culture built on excellence.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel>Why Work With Us</SectionLabel>
            <h2 style={{ fontFamily: "'Sora', sans-serif" }} className="text-3xl sm:text-4xl font-bold text-[#1E1E1E] mb-4">
              More Than Just a Job
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              At Ocean Air Express, we invest in our people as much as we invest in our global network. Here's what makes us different.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg transition-all duration-300 group border border-transparent hover:border-[#C8972B]/20">
                <div className="w-12 h-12 rounded-2xl bg-[#1A2B5F]/5 flex items-center justify-center mb-4 group-hover:bg-[#1A2B5F] transition-colors">
                  <Icon size={22} className="text-[#1A2B5F] group-hover:text-white transition-colors" />
                </div>
                <h3 style={{ fontFamily: "'Sora', sans-serif" }} className="font-bold text-[#1E1E1E] mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Banner */}
      <section className="py-20 bg-[#1A2B5F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionLabel>Our Culture</SectionLabel>
              <h2 style={{ fontFamily: "'Sora', sans-serif" }} className="text-3xl font-bold text-white mb-5">
                A Team That Moves the World
              </h2>
              <p className="text-white/60 leading-relaxed mb-6">
                We are a team of problem-solvers, relationship-builders, and logistics innovators. Our culture is built on mutual respect, high performance, and a genuine passion for connecting businesses to global markets.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "600+", label: "Team Members" },
                  { value: "4.8★", label: "Glassdoor Rating" },
                  { value: "85%", label: "Internal Promotion Rate" },
                  { value: "28", label: "Avg. Employee Age" },
                ].map(({ value, label }) => (
                  <div key={label} className="bg-white/10 border border-white/20 rounded-xl p-4">
                    <div style={{ fontFamily: "'Sora', sans-serif" }} className="text-2xl font-bold text-[#C8972B]">{value}</div>
                    <div className="text-white/50 text-xs mt-0.5">{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              {["Collaborative", "Innovative", "Data-Driven", "Global", "Inclusive", "Fast-Paced", "Client-First", "Transparent", "Ambitious"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm hover:bg-[#C8972B] hover:text-white hover:border-[#C8972B] transition-all cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel>Open Positions</SectionLabel>
            <h2 style={{ fontFamily: "'Sora', sans-serif" }} className="text-3xl sm:text-4xl font-bold text-[#1E1E1E] mb-4">
              Current Opportunities
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              We're growing fast. Explore open roles across operations, technology, sales, and more.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {jobs.map((job) => (
              <div key={job.title} className="bg-[#F5F7FA] rounded-2xl p-7 border border-gray-100 hover:border-[#C8972B]/30 hover:shadow-md transition-all duration-200 group">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 style={{ fontFamily: "'Sora', sans-serif" }} className="font-bold text-[#1E1E1E] mb-1 group-hover:text-[#1A2B5F] transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <Briefcase size={11} /> {job.department}
                      </span>
                      <span className="text-gray-200">·</span>
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <MapPin size={11} /> {job.location}
                      </span>
                      <span className="text-gray-200">·</span>
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <Clock size={11} /> {job.type}
                      </span>
                    </div>
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full shrink-0 ml-3 ${levelColors[job.level]}`}>
                    {job.level}
                  </span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{job.desc}</p>
                <div className="flex flex-col gap-1.5 mb-5">
                  {job.requirements.map((r) => (
                    <div key={r} className="flex items-center gap-2 text-xs text-gray-600">
                      <CheckCircle2 size={12} className="text-[#C8972B] shrink-0" />
                      {r}
                    </div>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1A2B5F] text-white text-sm font-semibold rounded-xl hover:bg-[#C8972B] transition-colors duration-200"
                >
                  Apply Now <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 text-sm mb-4">Don't see the right role? We're always looking for exceptional talent.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#1A2B5F] text-[#1A2B5F] rounded-xl font-semibold text-sm hover:bg-[#1A2B5F] hover:text-white transition-colors">
              Send Speculative Application <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}