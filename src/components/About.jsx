import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaBullseye,
  FaEye,
  FaHandshake,
  FaShieldAlt,
  FaUsers,
  FaLightbulb,
  FaGlobeAmericas,
  FaAward,
  FaChartLine
} from "react-icons/fa";
import { MdOutlineLocalShipping, MdSpeed } from "react-icons/md";
import { IoStatsChart } from "react-icons/io5";

// Assets
import heroImage from "../assets/about-hero.jpg";
import teamImage from "../assets/team.jpg";
import logisticsImage from "../assets/logistics-network.jpg";
import valuesImage from "../assets/values.jpg";

// Constants
const STATS = [
  { number: "1", label: "Years Experience", icon: <FaAward className="text-2xl" /> },
  { number: "100+", label: "Happy Clients", icon: <FaUsers className="text-2xl" /> },
  { number: "100k+", label: "Miles Logged", icon: <MdOutlineLocalShipping className="text-2xl" /> },
  { number: "99.8%", label: "On-Time Delivery", icon: <MdSpeed className="text-2xl" /> }
];

const VALUES = [
  {
    icon: <FaShieldAlt className="text-3xl" />,
    title: "Safety First",
    description: "Rigorous safety protocols and continuous training ensure every shipment arrives securely.",
    color: "from-blue-500 to-blue-700"
  },
  {
    icon: <MdOutlineLocalShipping className="text-3xl" />,
    title: "Customer Commitment",
    description: "Your success is our priority. We build partnerships, not just client relationships.",
    color: "from-red-500 to-red-700"
  },
  {
    icon: <FaHandshake className="text-3xl" />,
    title: "Integrity",
    description: "Transparent pricing, honest communication, and ethical business practices always.",
    color: "from-green-500 to-green-700"
  },
  {
    icon: <FaLightbulb className="text-3xl" />,
    title: "Innovation",
    description: "Leveraging cutting-edge technology to optimize routes and improve efficiency.",
    color: "from-purple-500 to-purple-700"
  },
  {
    icon: <FaBullseye className="text-3xl" />,
    title: "Reliability",
    description: "Consistent, dependable service you can count on for your most important shipments.",
    color: "from-orange-500 to-orange-700"
  },
  {
    icon: <FaGlobeAmericas className="text-3xl" />,
    title: "Global Reach",
    description: "Extensive network covering regional and international logistics solutions.",
    color: "from-teal-500 to-teal-700"
  }
];

// Components
const ScrollIndicator = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.2 }}
    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
  >
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
    >
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-1 h-3 bg-white rounded-full mt-2"
      />
    </motion.div>
  </motion.div>
);

const HeroSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern logistics and transportation"
          className="w-full h-full object-cover"
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/60" />
      </motion.div>
      
      <motion.div 
        style={{ opacity }}
        className="relative z-10 text-center text-white px-6 max-w-4xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 bg-blue-600 rounded-full text-sm font-semibold mb-6"
          >
            Trusted Logistics Partner 
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl sm:text-7xl font-bold mb-6 leading-tight"
          >
            Delivering
            <span className="block text-yellow-400"> Excellence</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl sm:text-2xl mb-8 leading-relaxed"
          >
            Your trusted partner for reliable, efficient, and innovative 
            logistics solutions across the globe.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-yellow-500 text-blue-900 font-bold rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              Get Started Today - Call Us: (+1) 470-909-0419
            </motion.button>
            <motion.a
              href="/services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-900 transition-colors text-center"
            >
              Learn More
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      <ScrollIndicator />
    </section>
  );
};

const StatsSection = () => (
  <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader
        title="By The Numbers"
        description="Our track record speaks for itself. Consistent excellence in every metric that matters."
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {STATS.map((stat, index) => (
          <StatCard key={stat.label} stat={stat} index={index} />
        ))}
      </div>
    </div>
  </section>
);

const StatCard = ({ stat, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}
    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group text-center"
  >
    <div className="text-blue-600 mb-4 flex justify-center group-hover:scale-110 transition-transform">
      {stat.icon}
    </div>
    <motion.div
      initial={{ scale: 0.5 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
      className="text-4xl font-bold text-gray-900 mb-2"
    >
      {stat.number}
    </motion.div>
    <div className="text-gray-600 font-semibold">{stat.label}</div>
  </motion.div>
);

const MissionVisionSection = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <MissionCard />
        <VisionCard />
      </div>
    </div>
  </section>
);

const MissionCard = () => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
    className="relative"
  >
    <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20" />
    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-400 rounded-full opacity-20" />
    
    <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-10 text-white shadow-2xl">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-white/20 rounded-2xl">
          <FaBullseye className="text-3xl" />
        </div>
        <h3 className="text-3xl font-bold">Our Mission</h3>
      </div>
      <p className="text-lg leading-relaxed mb-6">
        To revolutionize logistics through innovative technology, unwavering reliability, 
        and a commitment to building lasting partnerships that drive our clients' success.
      </p>
      <div className="flex items-center gap-2 text-blue-200">
        <IoStatsChart />
        <span className="font-semibold">Driving your business forward</span>
      </div>
    </div>
  </motion.div>
);

const VisionCard = () => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
    className="relative"
  >
    <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-400 rounded-full opacity-20" />
    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-400 rounded-full opacity-20" />
    
    <div className="relative bg-gradient-to-br from-gray-900 to-gray-700 rounded-3xl p-10 text-white shadow-2xl">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-white/20 rounded-2xl">
          <FaEye className="text-3xl" />
        </div>
        <h3 className="text-3xl font-bold">Our Vision</h3>
      </div>
      <p className="text-lg leading-relaxed mb-6">
        To be the most trusted and innovative logistics partner globally, 
        setting new standards for excellence while creating sustainable value 
        for our clients, team, and communities.
      </p>
      <div className="flex items-center gap-2 text-gray-300">
        <FaChartLine />
        <span className="font-semibold">Shaping the future of logistics</span>
      </div>
    </div>
  </motion.div>
);

const ValuesSection = () => (
  <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader
        title="Our Core Values"
        description="The principles that guide every decision, every shipment, and every relationship."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {VALUES.map((value, index) => (
          <ValueCard key={value.title} value={value} index={index} />
        ))}
      </div>
    </div>
  </section>
);

const ValueCard = ({ value, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className="group"
  >
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all h-full border border-gray-100">
      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${value.color} text-white mb-6 group-hover:scale-110 transition-transform`}>
        {value.icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        {value.title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {value.description}
      </p>
    </div>
  </motion.div>
);

const CTASection = () => (
  <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Logistics?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Join hundreds of satisfied clients who trust Ocean Air Express Inc. 
          for their most important shipments.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-yellow-500 text-blue-900 font-bold rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            Get Free Consultation
          </motion.button>
          <motion.a
            href="./Services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-900 transition-all inline-block"
          >
            View Our Services
          </motion.a>
        </div>
      </motion.div>
    </div>
  </section>
);

const SectionHeader = ({ title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
    className="text-center mb-16"
  >
    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
      {title}
    </h2>
    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
      {description}
    </p>
  </motion.div>
);

// Main Component
const About = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <HeroSection />
      <StatsSection />
      <MissionVisionSection />
      <ValuesSection />
      <CTASection />
    </div>
  );
};

export default About;