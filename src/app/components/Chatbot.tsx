import { useState, useRef, useEffect, type KeyboardEvent } from "react";
import { useNavigate } from "react-router";
import {
  MessageSquare, X, Send, Bot, Package, Calculator, Phone,
  ChevronRight,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

type Role = "user" | "bot";

interface Message {
  id: string;
  role: Role;
  text: string;
}

interface BotResponse {
  text: string;
  /** After a short delay, navigate the user to this path */
  navigateTo?: string;
}

// ─── Rule-based response engine ───────────────────────────────────────────────

function getBotResponse(input: string): BotResponse {
  const q = input.toLowerCase().trim();

  if (/\b(track|tracking|shipment|status|where is|where's|parcel|locate)\b/.test(q)) {
    return {
      text: "I'll take you to our Shipment Tracking page right away! Enter your tracking number there for real-time status updates.\n\nExample numbers to try:\n• OAE-001234 (In Transit)\n• OAE-005678 (Delivered)\n• OAE-009012 (Pending)",
      navigateTo: "/tracking",
    };
  }

  if (/\b(quote|price|cost|rate|pricing|estimate|how much|cheap|expensive)\b/.test(q)) {
    return {
      text: "Great! Our interactive Quote Calculator on the Services page will give you an instant freight estimate based on weight, transport type, and route.\n\nTaking you there now…",
      navigateTo: "/services",
    };
  }

  if (/\b(contact|phone|call|email|reach|support|help|talk|speak|human)\b/.test(q)) {
    return {
      text: "Here's how to reach us:\n\n📞  +1 (470) 909-0419\n✉️  info@oceanairexpress.com\n🏢  Atlanta, Georgia, USA\n\nOur team is available 24 / 7 for urgent enquiries.",
    };
  }

  if (/\b(service|freight|air|sea|ocean|road|rail|truck|courier|last.?mile|contract|warehouse|logistics)\b/.test(q)) {
    return {
      text: "We offer 8 core services:\n\n✈️ Air Freight\n🚢 Sea Freight\n🚚 Road Transport\n🚂 Rail Freight\n🏗️ Special Project Transport\n📦 Courier Services\n🏠 Last Mile Delivery\n📋 Contract Logistics\n\nWant a quote for any of these?",
      navigateTo: "/services",
    };
  }

  if (/\b(hi|hello|hey|good morning|good afternoon|good evening|howdy)\b/.test(q)) {
    return {
      text: "Hello! 👋 Welcome to Ocean Air Express — your global logistics partner. How can I assist you today?\n\nYou can ask about:\n• Tracking a shipment\n• Getting a freight quote\n• Our services\n• Contact details",
    };
  }

  if (/\b(certif|licensed|fmcsa|iata|fmc|dot|complian|insur)\b/.test(q)) {
    return {
      text: "Ocean Air Express holds the following certifications:\n\n🏅 FMCSA — Federal Motor Carrier Safety Admin\n🏅 IATA — International Air Transport Association\n🏅 FMC — Federal Maritime Commission\n🏅 DOT — US Department of Transportation\n\nAll cargo is fully insured.",
    };
  }

  if (/\b(career|job|hiring|work|employ|position|vacancy|apply)\b/.test(q)) {
    return {
      text: "We're always looking for talented logistics professionals! Visit our Careers page to see current openings.",
      navigateTo: "/careers",
    };
  }

  return {
    text: "Thanks for your message! Our team is here to help. For the fastest response, you can:\n\n📞 Call: +1 (470) 909-0419\n✉️ Email: info@oceanairexpress.com\n\nOr use the quick options below.",
  };
}

// ─── Quick suggestion chips ───────────────────────────────────────────────────

const SUGGESTIONS = [
  { label: "Track Shipment", icon: Package,    query: "track my shipment" },
  { label: "Get a Quote",    icon: Calculator, query: "get a quote"        },
  { label: "Contact Us",     icon: Phone,      query: "contact support"   },
] as const;

// ─── Initial bot welcome message ──────────────────────────────────────────────

const WELCOME: Message = {
  id: "welcome",
  role: "bot",
  text: "Hi! I'm the OAE virtual assistant. 👋\n\nI can help you track shipments, get freight quotes, or find contact information. What can I help you with?",
};

// ─── Component ────────────────────────────────────────────────────────────────

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [unread, setUnread] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Auto-scroll to latest message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  // Focus input when chat opens
  useEffect(() => {
    if (open) {
      setUnread(false);
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [open]);

  const addBotMessage = (text: string) => {
    setMessages((prev) => [
      ...prev,
      { id: `bot-${Date.now()}`, role: "bot", text },
    ]);
    if (!open) setUnread(true);
  };

  const sendMessage = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMsg: Message = { id: `user-${Date.now()}`, role: "user", text: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const response = getBotResponse(trimmed);
      setTyping(false);
      addBotMessage(response.text);

      if (response.navigateTo) {
        setTimeout(() => {
          navigate(response.navigateTo!);
          setOpen(false);
        }, 1400);
      }
    }, 850);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3">
      {/* ── Chat Window ─────────────────────────────────────── */}
      <div
        className={`w-[350px] sm:w-[390px] bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right ${
          open
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
        style={{ maxHeight: "560px" }}
        aria-hidden={!open}
      >
        {/* Header */}
        <div className="bg-[#1A2B5F] px-5 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#C8972B] flex items-center justify-center shadow-lg">
              <Bot size={18} className="text-white" />
            </div>
            <div>
              <div
                style={{ fontFamily: "'Sora', sans-serif" }}
                className="text-white font-semibold text-sm"
              >
                OAE Assistant
              </div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-white/60 text-xs">Online · 24/7 Support</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="text-white/50 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
            aria-label="Close chat"
          >
            <X size={18} />
          </button>
        </div>

        {/* Messages */}
        <div
          className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 scroll-smooth"
          style={{ minHeight: "220px", maxHeight: "310px" }}
        >
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-2 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
            >
              {/* Avatar */}
              {msg.role === "bot" ? (
                <div className="w-7 h-7 rounded-full bg-[#1A2B5F] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <Bot size={13} className="text-[#C8972B]" />
                </div>
              ) : (
                <div className="w-7 h-7 rounded-full bg-[#C8972B] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <span className="text-white text-xs font-bold">You</span>
                </div>
              )}

              {/* Bubble */}
              <div
                className={`max-w-[78%] px-4 py-3 text-sm leading-relaxed whitespace-pre-line ${
                  msg.role === "user"
                    ? "bg-[#1A2B5F] text-white rounded-2xl rounded-tr-sm"
                    : "bg-[#F5F7FA] text-[#1E1E1E] rounded-2xl rounded-tl-sm border border-gray-100"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {typing && (
            <div className="flex items-start gap-2">
              <div className="w-7 h-7 rounded-full bg-[#1A2B5F] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                <Bot size={13} className="text-[#C8972B]" />
              </div>
              <div className="bg-[#F5F7FA] border border-gray-100 px-4 py-3 rounded-2xl rounded-tl-sm flex items-center gap-1.5">
                <span
                  className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                  style={{ animationDelay: "0ms" }}
                />
                <span
                  className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                  style={{ animationDelay: "160ms" }}
                />
                <span
                  className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                  style={{ animationDelay: "320ms" }}
                />
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Quick suggestion chips */}
        <div className="px-4 pt-2 pb-1 flex gap-2 overflow-x-auto shrink-0 border-t border-gray-100">
          {SUGGESTIONS.map(({ label, icon: Icon, query }) => (
            <button
              key={label}
              onClick={() => sendMessage(query)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#F5F7FA] border border-gray-200 rounded-full text-xs text-[#1A2B5F] font-medium whitespace-nowrap hover:bg-[#1A2B5F] hover:text-white hover:border-[#1A2B5F] transition-all duration-200 shrink-0"
            >
              <Icon size={11} />
              {label}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="px-4 py-3 border-t border-gray-100 flex items-center gap-2 shrink-0">
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask me anything…"
            className="flex-1 px-4 py-2.5 bg-[#F5F7FA] border border-gray-200 rounded-xl text-sm text-[#1E1E1E] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1A2B5F]/20 focus:border-[#1A2B5F]/30 transition-all"
          />
          <button
            onClick={() => sendMessage(input)}
            disabled={!input.trim() || typing}
            aria-label="Send message"
            className="w-9 h-9 rounded-xl bg-[#1A2B5F] flex items-center justify-center text-white hover:bg-[#C8972B] transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
          >
            <Send size={14} />
          </button>
        </div>
      </div>

      {/* ── Toggle FAB ──────────────────────────────────────── */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close support chat" : "Open support chat"}
        className={`relative w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 ${
          open ? "bg-[#1A2B5F]" : "bg-[#C8972B]"
        }`}
      >
        <div
          className={`absolute inset-0 rounded-full transition-transform duration-300 ${
            open ? "scale-0" : "scale-100"
          }`}
        >
          <span className="absolute inset-0 rounded-full bg-[#C8972B] animate-ping opacity-30" />
        </div>
        {open ? (
          <X size={22} className="text-white relative z-10" />
        ) : (
          <MessageSquare size={22} className="text-white relative z-10" />
        )}

        {/* Unread dot */}
        {unread && !open && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white" />
        )}
      </button>
    </div>
  );
}
