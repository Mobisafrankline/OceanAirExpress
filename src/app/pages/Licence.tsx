import { CheckCircle2, Shield, Globe, Award, Truck, ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router";

const certifications = [
  {
    code: "FMCSA",
    name: "Federal Motor Carrier Safety Administration",
    icon: Truck,
    status: "Active",
    issued: "January 2006",
    number: "MC-1834729",
    desc: "Authorized to operate as a freight broker and motor carrier across the United States, in full compliance with all federal safety standards.",
    color: "bg-blue-50",
    iconBg: "bg-[#1A2B5F]",
    badge: "bg-green-100 text-green-700",
  },
  {
    code: "IATA",
    name: "International Air Transport Association",
    icon: Globe,
    status: "Active",
    issued: "March 2007",
    number: "CASS 96-3 84427 8",
    desc: "Accredited IATA cargo agent, authorized to handle and book international air cargo on behalf of all major IATA-member airlines worldwide.",
    color: "bg-amber-50",
    iconBg: "bg-[#C8972B]",
    badge: "bg-green-100 text-green-700",
  },
  {
    code: "FMC",
    name: "Federal Maritime Commission",
    icon: Shield,
    status: "Active",
    issued: "June 2006",
    number: "OTI License #027841N",
    desc: "Licensed Ocean Transportation Intermediary (OTI), authorized to operate as a Non-Vessel Operating Common Carrier (NVOCC) for international ocean freight.",
    color: "bg-green-50",
    iconBg: "bg-green-700",
    badge: "bg-green-100 text-green-700",
  },
  {
    code: "DOT",
    name: "U.S. Department of Transportation",
    icon: Award,
    status: "Active",
    issued: "January 2006",
    number: "USDOT #3847291",
    desc: "Registered and in full compliance with all U.S. Department of Transportation regulations for domestic and cross-border freight operations.",
    color: "bg-purple-50",
    iconBg: "bg-purple-700",
    badge: "bg-green-100 text-green-700",
  },
];

const additionalCerts = [
  { name: "C-TPAT Member", desc: "Customs-Trade Partnership Against Terrorism — enhanced cargo security protocols.", year: "2009" },
  { name: "HAZMAT Certified", desc: "Authorized to handle and transport hazardous materials per DOT 49 CFR regulations.", year: "2008" },
  { name: "ISO 9001:2015", desc: "Internationally recognized quality management system certification.", year: "2012" },
  { name: "SmartWay Partner", desc: "EPA SmartWay Transport Partnership for fuel-efficient and environmentally responsible freight.", year: "2014" },
  { name: "NVOCC Bond", desc: "$150,000 continuous performance bond as required by FMC regulations.", year: "2006" },
  { name: "TSA Certified", desc: "Transportation Security Administration approved indirect air carrier.", year: "2011" },
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

export function Licence() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#1A2B5F] pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8972B] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#C8972B]/20 border border-[#C8972B]/40 rounded-full px-4 py-1.5 mb-6">
            <Shield size={12} className="text-[#C8972B]" />
            <span className="text-[#C8972B] text-xs font-semibold tracking-widest uppercase">Fully Certified</span>
          </div>
          <h1 style={{ fontFamily: "'Sora', sans-serif" }} className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Licences & Certifications
          </h1>
          <p className="text-white/60 max-w-xl mx-auto">
            Ocean Air Express Inc. is fully licensed and certified across all major regulatory bodies in the United States and internationally. Your cargo is always in safe, compliant hands.
          </p>
        </div>
      </section>

      {/* Main Certifications */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel>Primary Licences</SectionLabel>
            <h2 style={{ fontFamily: "'Sora', sans-serif" }} className="text-3xl font-bold text-[#1E1E1E]">
              Core Regulatory Certifications
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map(({ code, name, icon: Icon, status, issued, number, desc, color, iconBg, badge }) => (
              <div key={code} className={`${color} rounded-3xl p-8 border border-white hover:shadow-xl transition-all duration-300 group`}>
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 ${iconBg} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon size={26} className="text-white" />
                    </div>
                    <div>
                      <div style={{ fontFamily: "'Sora', sans-serif" }} className="text-2xl font-bold text-[#1E1E1E]">{code}</div>
                      <div className="text-gray-500 text-xs max-w-48">{name}</div>
                    </div>
                  </div>
                  <span className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full ${badge}`}>
                    <CheckCircle2 size={12} />
                    {status}
                  </span>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">{desc}</p>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/60 rounded-xl p-3">
                    <div className="text-xs text-gray-400 mb-0.5">License Number</div>
                    <div className="font-semibold text-[#1E1E1E] text-sm">{number}</div>
                  </div>
                  <div className="bg-white/60 rounded-xl p-3">
                    <div className="text-xs text-gray-400 mb-0.5">Issued Since</div>
                    <div className="font-semibold text-[#1E1E1E] text-sm">{issued}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Certs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel>Additional Certifications</SectionLabel>
            <h2 style={{ fontFamily: "'Sora', sans-serif" }} className="text-3xl font-bold text-[#1E1E1E]">
              Further Compliance & Accreditations
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {additionalCerts.map(({ name, desc, year }) => (
              <div key={name} className="bg-[#F5F7FA] rounded-2xl p-6 border border-gray-100 hover:border-[#C8972B]/30 hover:shadow-md transition-all group">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#1A2B5F]/10 flex items-center justify-center group-hover:bg-[#1A2B5F] transition-colors">
                    <Shield size={14} className="text-[#1A2B5F] group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-xs font-semibold text-[#C8972B] bg-[#C8972B]/10 px-2 py-0.5 rounded-full">Since {year}</span>
                </div>
                <h4 style={{ fontFamily: "'Sora', sans-serif" }} className="font-bold text-[#1E1E1E] mb-2 text-sm">{name}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-16 bg-[#1A2B5F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center gap-6 mb-8 flex-wrap">
            {["FMCSA", "IATA", "FMC", "DOT", "C-TPAT", "TSA"].map((cert) => (
              <div key={cert} className="px-5 py-2.5 bg-white/10 border border-white/20 rounded-xl">
                <span style={{ fontFamily: "'Sora', sans-serif" }} className="text-white font-bold text-sm">{cert}</span>
              </div>
            ))}
          </div>
          <SectionLabel>Verified Trust</SectionLabel>
          <h2 style={{ fontFamily: "'Sora', sans-serif" }} className="text-3xl font-bold text-white mb-4">
            Ship with Confidence
          </h2>
          <p className="text-white/60 mb-7 max-w-lg mx-auto">
            All our licences are current, valid, and publicly verifiable. Contact us to receive a copy of any certification for your records.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-[#C8972B] text-white px-8 py-4 rounded-xl font-semibold text-sm hover:bg-[#b8861f] transition-colors">
            Request Certificates <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}