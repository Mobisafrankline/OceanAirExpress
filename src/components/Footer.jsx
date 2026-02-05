import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ChevronUp,
} from "lucide-react";
import { motion } from "framer-motion";
import Logo from "../assets/logo.svg";

const Footer = () => {
  const year = new Date().getFullYear();
  const links = ["About", "Services", "Careers", "Contact"];

  const handleNav = (e, link) => {
    const id = link.toLowerCase();
    const element = document.getElementById(id);

    if (element) {
      e.preventDefault();
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      if (history && history.pushState) {
        history.pushState(null, "", `#${id}`);
      }
    } else {
      e.preventDefault();
      window.location.href = `/${id}`;
    }
  };

  const socials = [
    {
      Icon: Facebook,
      label: "Facebook",
      url: "https://www.facebook.com/OceanAirExpress",
    },
    {
      Icon: Twitter,
      label: "Twitter",
      url: "http://x.com/Oceanairexpress",
    },
    {
      Icon: Instagram,
      label: "Instagram",
      url: "https://www.instagram.com/ocean_airexpress/",
    },
    {
      Icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/ocean-air-express-inc-b04327387/",
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-gray-200 overflow-hidden">
      {/* Animated Gradient Glows */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-red-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-28 -right-28 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl animate-pulse delay-200"></div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-20 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-5">
            <img
              src={Logo}
              alt="Ocean Air Express company logo"
              className="h-16 w-auto drop-shadow-lg"
            />
            <h2 className="text-2xl font-extrabold text-white tracking-wide">
              Ocean Air Express Inc.
            </h2>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Delivering reliable global logistics — by road, air, and sea. Safe,
            fast, and affordable solutions you can trust.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={(e) => handleNav(e, link)}
                  className="group relative inline-block transition"
                  aria-label={`Go to ${link} section`}
                >
                  <span className="text-gray-300 group-hover:text-red-400 transition">
                    {link}
                  </span>
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-red-400 to-pink-500 transition-all group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-lg font-bold text-white mb-4">Contact</h3>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-center gap-3 hover:text-red-400 transition">
              <MapPin size={20} className="text-red-500" />
              Marietta GA, USA
            </li>
            <li className="flex items-center gap-3 hover:text-red-400 transition">
              <Phone size={20} className="text-red-500" />
              (+1) 470-909-0419
            </li>
            <li className="flex items-center gap-3 hover:text-red-400 transition">
              <Mail size={20} className="text-red-500" />
              <a href="mailto:dispatchoca@gmail.com" className="hover:underline">
                dispatchoca@gmail.com
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-lg font-bold text-white mb-4">Follow Us</h3>
          <div className="flex gap-4">
            {socials.map(({ Icon, label, url }, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit our ${label} page`}
                className="group p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 text-white transition-all duration-300 transform hover:scale-110 shadow-md"
              >
                <Icon size={22} className="group-hover:rotate-6 transition" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 mt-10 py-6 text-center md:flex md:items-center md:justify-between px-6 lg:px-20 text-gray-400 text-sm">
        <p>© {year} Ocean Air Express Inc. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="/privacy" className="hover:text-red-400 transition">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-red-400 transition">
            Terms of Service
          </a>
        </div>
      </div>

      {/* Back to Top */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute right-6 bottom-6 bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg transition transform hover:scale-110"
        aria-label="Back to top"
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronUp size={22} />
      </motion.button>
    </footer>
  );
};

export default Footer;
