import { useState } from "react";
import type { ReactNode } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router";

const HERO_IMG = "https://images.unsplash.com/photo-1769698822097-458694b3cf8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjB3YXJlaG91c2UlMjB0cnVja3MlMjByb2FkJTIwdHJhbnNwb3J0fGVufDF8fHx8MTc3NTkwMTUyN3ww&ixlib=rb-4.1.0&q=80&w=1080";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (470) 909-0419",
    sub: "Mon–Fri 8am–6pm EST",
    href: "tel:+14709090419",
    color: "bg-blue-50",
    iconColor: "text-[#1A2B5F]",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@oceanairexpress.com",
    sub: "Response within 2 hours",
    href: "mailto:info@oceanairexpress.com",
    color: "bg-amber-50",
    iconColor: "text-[#C8972B]",
  },
  {
    icon: MapPin,
    title: "Headquarters",
    value: "Atlanta, Georgia",
    sub: "United States of America",
    href: "#",
    color: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: Clock,
    title: "Availability",
    value: "24/7 Operations",
    sub: "Emergency freight line available",
    href: "#",
    color: "bg-purple-50",
    iconColor: "text-purple-600",
  },
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

export function Contact() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "",
    service: "", origin: "", destination: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative h-80 sm:h-96 flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_IMG})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A2B5F]/95 to-[#1A2B5F]/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-14 pt-32">
          <div className="inline-flex items-center gap-2 bg-[#C8972B]/20 border border-[#C8972B]/40 rounded-full px-4 py-1.5 mb-4">
            <span className="text-[#C8972B] text-xs font-semibold tracking-widest uppercase">Contact Us</span>
          </div>
          <h1 style={{ fontFamily: "'Sora', sans-serif" }} className="text-4xl sm:text-5xl font-bold text-white">
            Get in Touch
          </h1>
          <p className="text-white/65 mt-2 max-w-md">
            Ready to ship? Need a quote? Our team is here 24/7 to help with all your logistics needs.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map(({ icon: Icon, title, value, sub, href, color, iconColor }) => (
              <a
                key={title}
                href={href}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 group hover:-translate-y-0.5"
              >
                <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon size={22} className={iconColor} />
                </div>
                <div className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-1">{title}</div>
                <div style={{ fontFamily: "'Sora', sans-serif" }} className="font-bold text-[#1E1E1E] mb-1 text-sm">{value}</div>
                <div className="text-gray-400 text-xs">{sub}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left column */}
            <div className="lg:col-span-2">
              <SectionLabel>Send a Message</SectionLabel>
              <h2 style={{ fontFamily: "'Sora', sans-serif" }} className="text-3xl font-bold text-[#1E1E1E] mb-5">
                Let's Talk About Your Shipment
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Whether you need a quote, have a question about our services, or want to set up a corporate account — our logistics specialists are ready to help.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  "Free quote within 2 hours",
                  "Dedicated account manager",
                  "No hidden fees",
                  "24/7 shipment tracking support",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-[#C8972B] shrink-0" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10 bg-[#1A2B5F] rounded-2xl p-6 text-white">
                <div className="text-xs font-semibold tracking-widest uppercase text-[#C8972B] mb-2">Emergency Line</div>
                <div style={{ fontFamily: "'Sora', sans-serif" }} className="text-xl font-bold mb-1">+1 (470) 909-0419</div>
                <div className="text-white/60 text-sm">Available 24 hours, 7 days a week</div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-white rounded-3xl p-10 shadow-sm flex flex-col items-center justify-center text-center min-h-96">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-5">
                    <CheckCircle2 size={32} className="text-green-600" />
                  </div>
                  <h3 style={{ fontFamily: "'Sora', sans-serif" }} className="text-2xl font-bold text-[#1E1E1E] mb-3">Message Received!</h3>
                  <p className="text-gray-500 mb-6 max-w-sm">
                    Thank you for reaching out. Our team will get back to you within 2 business hours with a customized quote.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 bg-[#1A2B5F] text-white rounded-xl font-semibold text-sm hover:bg-[#0f2247] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    {[
                      { name: "name", label: "Full Name *", placeholder: "John Smith", type: "text" },
                      { name: "email", label: "Email Address *", placeholder: "john@company.com", type: "email" },
                      { name: "phone", label: "Phone Number", placeholder: "+1 (555) 000-0000", type: "tel" },
                      { name: "company", label: "Company Name", placeholder: "Your Company Inc.", type: "text" },
                    ].map(({ name, label, placeholder, type }) => (
                      <div key={name}>
                        <label className="block text-xs font-semibold text-[#1E1E1E] mb-1.5 uppercase tracking-wider">{label}</label>
                        <input
                          type={type}
                          name={name}
                          value={(form as any)[name]}
                          onChange={handleChange}
                          placeholder={placeholder}
                          required={label.includes("*")}
                          className="w-full px-4 py-3 bg-[#F5F7FA] border border-gray-200 rounded-xl text-sm text-[#1E1E1E] placeholder-gray-400 focus:outline-none focus:border-[#1A2B5F] focus:ring-1 focus:ring-[#1A2B5F] transition-colors"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="mb-5">
                    <label className="block text-xs font-semibold text-[#1E1E1E] mb-1.5 uppercase tracking-wider">Service Required</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#F5F7FA] border border-gray-200 rounded-xl text-sm text-[#1E1E1E] focus:outline-none focus:border-[#1A2B5F] focus:ring-1 focus:ring-[#1A2B5F] transition-colors"
                    >
                      <option value="">Select a service...</option>
                      <option>Air Freight</option>
                      <option>Sea Freight</option>
                      <option>Road Transport</option>
                      <option>Rail Freight</option>
                      <option>Courier Services</option>
                      <option>Last Mile Delivery</option>
                      <option>Contract Logistics</option>
                      <option>Special Projects</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#1E1E1E] mb-1.5 uppercase tracking-wider">Origin</label>
                      <input
                        type="text"
                        name="origin"
                        value={form.origin}
                        onChange={handleChange}
                        placeholder="City, Country"
                        className="w-full px-4 py-3 bg-[#F5F7FA] border border-gray-200 rounded-xl text-sm text-[#1E1E1E] placeholder-gray-400 focus:outline-none focus:border-[#1A2B5F] focus:ring-1 focus:ring-[#1A2B5F] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#1E1E1E] mb-1.5 uppercase tracking-wider">Destination</label>
                      <input
                        type="text"
                        name="destination"
                        value={form.destination}
                        onChange={handleChange}
                        placeholder="City, Country"
                        className="w-full px-4 py-3 bg-[#F5F7FA] border border-gray-200 rounded-xl text-sm text-[#1E1E1E] placeholder-gray-400 focus:outline-none focus:border-[#1A2B5F] focus:ring-1 focus:ring-[#1A2B5F] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-xs font-semibold text-[#1E1E1E] mb-1.5 uppercase tracking-wider">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your shipment requirements, cargo type, weight, dimensions, timeline, etc."
                      rows={4}
                      className="w-full px-4 py-3 bg-[#F5F7FA] border border-gray-200 rounded-xl text-sm text-[#1E1E1E] placeholder-gray-400 focus:outline-none focus:border-[#1A2B5F] focus:ring-1 focus:ring-[#1A2B5F] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#1A2B5F] text-white font-semibold rounded-xl hover:bg-[#C8972B] transition-colors duration-300 flex items-center justify-center gap-2 text-sm"
                  >
                    <Send size={16} />
                    Send Message & Request Quote
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <section className="py-16 bg-[#1A2B5F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionLabel>Quick Quote</SectionLabel>
          <h2 style={{ fontFamily: "'Sora', sans-serif" }} className="text-3xl font-bold text-white mb-3">
            Need a Quote Fast?
          </h2>
          <p className="text-white/60 mb-6">Call us directly for an immediate quote on your shipment.</p>
          <a
            href="tel:+14709090419"
            className="inline-flex items-center gap-3 bg-[#C8972B] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#b8861f] transition-colors text-sm"
          >
            <Phone size={18} />
            Call +1 (470) 909-0419
            <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}