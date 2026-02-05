import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Assets
import heroImg from "../assets/hero.jpg";
import airImg from "../assets/air-freight.jpg";
import seaImg from "../assets/ocean-freight.jpg";
import roadImg from "../assets/road-freight.jpg";
import railImg from "../assets/rail.jpg";
import projectImg from "../assets/project.jpg";
import courierImg from "../assets/courier.jpg";
import deliveryImg from "../assets/delivery.jpg";
import contractImg from "../assets/contract.jpg";
import workerImg from "../assets/worker.jpg";
import dockImg from "../assets/dock.jpg";
import cargoImg from "../assets/cargo.jpg";

// Icons
import { 
  FaPlane, FaShip, FaTruck, FaTrain, 
  FaProjectDiagram, FaShippingFast, 
  FaHome, FaWarehouse, FaClock, 
  FaGlobeAmericas, FaShieldAlt, FaHeadset,
  FaCheckCircle, FaArrowRight, FaQuoteLeft
} from "react-icons/fa";

// Constants
const SERVICES = [
  { 
    id: "air-freight", 
    title: "Air Freight", 
    desc: "Fast, secure global air cargo solutions", 
    detailedDesc: "Our expedited air freight services ensure your time-sensitive shipments reach their destination with maximum speed and security.",
    img: airImg,
    icon: FaPlane,
    features: ["Next-flight-out options", "Real-time tracking", "Temperature-controlled", "Dangerous goods handling"],
    color: "from-blue-500 to-cyan-400"
  },
  { 
    id: "sea-freight", 
    title: "Sea Freight", 
    desc: "Cost-effective ocean shipping solutions", 
    detailedDesc: "Optimize your supply chain with our comprehensive sea freight services. Full container load (FCL) and less than container load (LCL) options available.",
    img: seaImg,
    icon: FaShip,
    features: ["FCL/LCL options", "Port-to-port", "Customs clearance", "Cargo insurance"],
    color: "from-teal-500 to-green-400"
  },
  { 
    id: "road-transport", 
    title: "Road Transport", 
    desc: "Reliable domestic trucking network", 
    detailedDesc: "Our extensive road transport network covers every major route with guaranteed capacity and flexible scheduling options.",
    img: roadImg,
    icon: FaTruck,
    features: ["TL & LTL services", "Express delivery", "Specialized equipment", "24/7 monitoring"],
    color: "from-orange-500 to-red-400"
  },
  { 
    id: "rail-freight", 
    title: "Rail Freight", 
    desc: "Eco-friendly bulk transport solutions", 
    detailedDesc: "Leverage the efficiency and sustainability of rail transport for your bulk shipments. Perfect for heavy commodities and long-distance hauls.",
    img: railImg,
    icon: FaTrain,
    features: ["Intermodal solutions", "Bulk commodities", "Green initiative", "Cost-effective"],
    color: "from-purple-500 to-pink-400"
  },
  { 
    id: "project-transport", 
    title: "Special Project Transport", 
    desc: "Complex logistics made simple", 
    detailedDesc: "From oversized machinery to sensitive equipment, our project logistics team handles the most challenging shipments with precision and care.",
    img: projectImg,
    icon: FaProjectDiagram,
    features: ["Oversized loads", "Engineering support", "Route surveys", "Project management"],
    color: "from-indigo-500 to-purple-400"
  },
  { 
    id: "courier", 
    title: "Courier Services", 
    desc: "Express parcel delivery worldwide", 
    detailedDesc: "Time-critical document and parcel delivery with guaranteed timeframes. Perfect for legal documents, medical supplies, and urgent business materials.",
    img: courierImg,
    icon: FaShippingFast,
    features: ["Same-day delivery", "Document handling", "Signature required", "Insurance included"],
    color: "from-red-500 to-orange-400"
  },
  { 
    id: "last-mile", 
    title: "Last Mile Delivery", 
    desc: "Final delivery excellence", 
    detailedDesc: "Ensure your products reach customers perfectly with our specialized last-mile delivery services. White-glove service available for premium deliveries.",
    img: deliveryImg,
    icon: FaHome,
    features: ["Residential delivery", "Installation services", "Returns management", "Customer notifications"],
    color: "from-green-500 to-teal-400"
  },
  { 
    id: "contract-logistics", 
    title: "Contract Logistics", 
    desc: "End-to-end supply chain management", 
    detailedDesc: "Comprehensive 3PL and 4PL solutions including warehousing, distribution, inventory management, and value-added services.",
    img: contractImg,
    icon: FaWarehouse,
    features: ["Warehousing", "Inventory management", "Order fulfillment", "Value-added services"],
    color: "from-gray-600 to-blue-400"
  },
];

const NAVIGATION_TABS = [
  { id: "quote", label: "Get a Quote", icon: FaQuoteLeft },
  { id: "contract", label: "Contract Logistics", icon: FaWarehouse },
  { id: "rail", label: "Rail Services", icon: FaTrain },
  { id: "track", label: "Track & Trace", icon: FaClock }
];

const TRUCK_SERVICES = [
  {
    icon: FaClock,
    title: "24/7 Load Management",
    desc: "Round-the-clock dispatch support ensuring your freight moves efficiently, day or night.",
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: FaHeadset,
    title: "Dedicated Support Team",
    desc: "Your personal dispatch coordinator available for instant communication and updates.",
    color: "from-green-500 to-teal-400"
  },
  {
    icon: FaShieldAlt,
    title: "Compliance & Safety",
    desc: "Full regulatory compliance management and safety protocol adherence for worry-free operations.",
    color: "from-purple-500 to-pink-400"
  }
];

// Animation Variants
const ANIMATION_VARIANTS = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  },
  item: {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }
};

// Components
const HeroSection = () => (
  <section
    className="relative h-[60vh] sm:h-[75vh] flex items-center justify-start px-4 sm:px-6 md:px-16"
    style={{
      backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroImg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
    }}
    aria-label="Hero section"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-red-800/60" />
    <HeroContent />
  </section>
);

const HeroContent = () => (
  <motion.div
    className="text-white max-w-3xl relative z-10 px-2 sm:px-0"
    initial={{ opacity: 0, y: 60 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
  >
    <HeroBadge />
    <HeroTitle />
    <HeroDescription />
    <HeroButtons />
  </motion.div>
);

const HeroBadge = () => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.5, duration: 0.8 }}
    className="flex items-center gap-2 mb-4"
  >
    <div className="w-8 sm:w-12 h-1 bg-gradient-to-r from-blue-400 to-red-400" />
    <span className="text-blue-300 font-semibold tracking-wider text-xs sm:text-sm">
      WORLD CLASS LOGISTICS
    </span>
  </motion.div>
);

const HeroTitle = () => (
  <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 drop-shadow-2xl leading-tight">
    Global Logistics <br />
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-red-400">
      Excellence Delivered
    </span>
  </h1>
);

const HeroDescription = () => (
  <p className="text-base sm:text-xl md:text-2xl leading-relaxed mb-6 sm:mb-8 text-gray-200 max-w-2xl">
    Where innovation meets reliability in global supply chain solutions. 
    Your trusted partner for seamless freight management across continents.
  </p>
);

const HeroButtons = () => (
  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
    <MotionButton
      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-base sm:text-lg shadow-2xl hover:shadow-blue-500/30"
      whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)" }}
      onClick={() => window.open('tel:(+1) 470-909-0419')}
    >
      Call Us Now
    </MotionButton>
    <MotionButton
      className="border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-white hover:text-blue-900"
      whileHover={{ scale: 1.05 }}
      onClick={() => window.location.href = 'mailto:dispatchoca@gmail.com'}
    >
      Email Us
    </MotionButton>
  </div>
);

const MotionButton = ({ children, className, whileHover, whileTap = { scale: 0.95 }, ...props }) => (
  <motion.button
    className={`transition-all duration-300 ${className}`}
    whileHover={whileHover}
    whileTap={whileTap}
    {...props}
  >
    {children}
  </motion.button>
);

const NavigationTabs = ({ activeTab, onTabClick }) => (
  <motion.nav
    className="flex flex-wrap justify-center bg-white/95 backdrop-blur-md border-b py-4 sm:py-6 gap-2 sm:gap-4 md:gap-8 shadow-xl sticky top-0 z-50 px-2"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4, duration: 0.8 }}
    aria-label="Main navigation"
  >
    {NAVIGATION_TABS.map((tab) => (
      <TabButton
        key={tab.id}
        tab={tab}
        isActive={activeTab === tab.id}
        onClick={() => onTabClick(tab.id)}
      />
    ))}
  </motion.nav>
);

const TabButton = ({ tab, isActive, onClick }) => {
  const IconComponent = tab.icon;
  
  return (
    <MotionButton
      className={`flex items-center gap-2 sm:gap-3 px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm md:text-base font-semibold rounded-full transition-all duration-300 ${
        isActive 
          ? "bg-gradient-to-r from-blue-600 to-red-600 text-white shadow-lg transform scale-105" 
          : "bg-gray-100 text-gray-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-red-600 hover:text-white hover:shadow-md"
      }`}
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
    >
      <IconComponent className="text-sm sm:text-lg" />
      <span className="hidden xs:inline">{tab.label}</span>
    </MotionButton>
  );
};

const SearchSection = ({ selected, searchText, onSelectChange, onSearchChange, onSubmit, onRequest }) => (
  <motion.section
    className="relative py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.7, duration: 0.8 }}
    aria-label="Service search"
  >
    <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
    <div className="max-w-5xl mx-auto relative z-10">
      <SearchHeader />
      <SearchForm
        selected={selected}
        searchText={searchText}
        onSelectChange={onSelectChange}
        onSearchChange={onSearchChange}
        onSubmit={onSubmit}
        onRequest={onRequest}
      />
    </div>
  </motion.section>
);

const SearchHeader = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.9 }}
    className="text-center mb-8 sm:mb-12"
  >
    <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
      Find Your Perfect <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-red-600">Logistics Solution</span>
    </h2>
    <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
      Tell us about your shipping needs and let our experts craft the optimal solution for your business
    </p>
  </motion.div>
);

const SearchForm = ({ selected, searchText, onSelectChange, onSearchChange, onSubmit, onRequest }) => (
  <motion.form 
    onSubmit={onSubmit}
    className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 border border-white/20"
    whileHover={{ y: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6">
      <FormSelect
        label="Service Type"
        value={selected}
        onChange={onSelectChange}
        options={SERVICES}
        required
      />
      <FormInput
        label="Shipment Details"
        type="text"
        placeholder="e.g., 100kg machinery from USA to Germany"
        value={searchText}
        onChange={onSearchChange}
      />
      <FormSelect
        label="Urgency"
        options={[
          { id: "standard", title: "Standard (5-10 days)" },
          { id: "express", title: "Express (3-5 days)" },
          { id: "urgent", title: "Urgent (1-2 days)" }
        ]}
      />
    </div>
    
    <FormButtons onRequest={onRequest} />
  </motion.form>
);

const FormSelect = ({ label, value, onChange, options, required = false }) => (
  <div>
    <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
    <select
      className="w-full border-2 border-gray-200 rounded-xl px-3 sm:px-4 py-2 sm:py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm sm:text-base"
      value={value}
      onChange={onChange}
      required={required}
    >
      <option value="">Select a service</option>
      {options.map((option) => (
        <option key={option.id} value={option.id}>{option.title}</option>
      ))}
    </select>
  </div>
);

const FormInput = ({ label, type, placeholder, value, onChange }) => (
  <div>
    <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full border-2 border-gray-200 rounded-xl px-3 sm:px-4 py-2 sm:py-3 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all text-sm sm:text-base"
      value={value}
      onChange={onChange}
    />
  </div>
);

const FormButtons = ({ onRequest }) => (
  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
    <MotionButton
      type="submit"
      className="bg-gradient-to-r from-blue-600 to-red-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl flex items-center gap-2 justify-center"
      whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)" }}
    >
      <FaArrowRight /> Get Instant Quote
    </MotionButton>
    
    <MotionButton
      type="button"
      onClick={() => window.open('tel:(+1) 470-909-0419')}
      className="border-2 border-gray-300 text-gray-700 px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:border-blue-500 hover:text-blue-600"
      whileHover={{ scale: 1.05 }}
    >
      Contact Expert
    </MotionButton>
  </div>
);

const ServicesGrid = ({ onServiceClick }) => (
  <section className="relative py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50/30" aria-label="Our services">
    <div className="max-w-7xl mx-auto">
      <ServicesHeader />
      <motion.div
        variants={ANIMATION_VARIANTS.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
      >
        {SERVICES.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            onClick={() => onServiceClick(service.id)}
          />
        ))}
      </motion.div>
    </div>
  </section>
);

const ServicesHeader = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="text-center mb-12 sm:mb-16"
  >
    <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4">
      <FaGlobeAmericas /> COMPREHENSIVE SOLUTIONS
    </div>
    <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
      Explore Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-red-600">Premium Services</span>
    </h2>
    <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
      From local deliveries to global supply chain management, we provide end-to-end logistics solutions tailored to your unique requirements
    </p>
  </motion.div>
);

const ServiceCard = ({ service, onClick }) => {
  const IconComponent = service.icon;

  return (
    <motion.div
      variants={ANIMATION_VARIANTS.item}
      className="group relative bg-white rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-transparent cursor-pointer"
      whileHover={{ y: -10 }}
      onClick={onClick}
    >
      <div className="relative overflow-hidden">
        <img
          src={service.img}
          alt={service.title}
          className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
        <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
          <div className={`bg-gradient-to-r ${service.color} text-white p-2 sm:p-3 rounded-xl shadow-lg`}>
            <IconComponent className="text-lg sm:text-xl" />
          </div>
        </div>
      </div>
      
      <div className="p-4 sm:p-6">
        <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors">
          {service.title}
        </h3>
        <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
          {service.detailedDesc}
        </p>
        
        <ServiceFeatures features={service.features.slice(0, 2)} />
        <LearnMoreButton />
      </div>
      
      <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r ${service.color} border-transparent bg-origin-border`} />
    </motion.div>
  );
};

const ServiceFeatures = ({ features }) => (
  <div className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
    {features.map((feature, i) => (
      <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
        <FaCheckCircle className="text-green-500 text-xs" />
        {feature}
      </div>
    ))}
  </div>
);

const LearnMoreButton = () => (
  <motion.a
    href=".\Contacts"
    whileHover={{ x: 5 }}
    className="flex items-center gap-2 text-blue-600 font-semibold text-xs sm:text-sm group-hover:text-blue-700 transition-colors"
  >
    Learn More <FaArrowRight className="text-xs" />
  </motion.a>
);

const TruckDispatchSection = () => (
  <section className="relative py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
    <BackgroundEffects />
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center">
        <TruckImagesGrid />
        <TruckContent />
      </div>
    </div>
  </section>
);

const BackgroundEffects = () => (
  <>
    <div className="absolute inset-0 bg-black/40" />
    <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-3xl" />
    <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-red-500/10 rounded-full blur-3xl" />
  </>
);

const TruckImagesGrid = () => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="grid grid-cols-2 gap-4 sm:gap-6"
  >
    <div className="space-y-4 sm:space-y-6">
      <ImageCard 
        src={workerImg} 
        alt="Professional logistics team" 
        className="h-40 sm:h-64"
        badge="Expert Team"
      />
      <ImageCard 
        src={cargoImg} 
        alt="Modern cargo handling" 
        className="h-32 sm:h-48"
      />
    </div>
    <ImageCard 
      src={dockImg} 
      alt="Advanced shipping facility" 
      className="h-56 sm:h-80 mt-8 sm:mt-12"
      badge="24/7 Operations"
    />
  </motion.div>
);

const ImageCard = ({ src, alt, className, badge }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className={`relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl ${className}`}
  >
    <img src={src} alt={alt} className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    {badge && (
      <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
        <div className="bg-blue-600 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-semibold">
          {badge}
        </div>
      </div>
    )}
  </motion.div>
);

const TruckContent = () => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.2 }}
  >
    <TruckBadge />
    <TruckTitle />
    <TruckDescription />
    <TruckServicesList />
    <TruckButtons />
  </motion.div>
);

const TruckBadge = () => (
  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
    <FaShieldAlt /> TRUSTED PARTNER
  </div>
);

const TruckTitle = () => (
  <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
    Why Choose Our 
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-red-400"> Truck Dispatch Services?</span>
  </h2>
);

const TruckDescription = () => (
  <p className="text-base sm:text-lg text-gray-200 mb-6 sm:mb-8 leading-relaxed">
    Experience seamless logistics operations with our professional dispatch services. 
    We handle the complexities while you focus on growing your business across North America.
  </p>
);

const TruckServicesList = () => (
  <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
    {TRUCK_SERVICES.map((service, i) => (
      <TruckServiceItem key={i} service={service} index={i} />
    ))}
  </div>
);

const TruckServiceItem = ({ service, index }) => {
  const IconComponent = service.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all"
    >
      <div className={`p-2 sm:p-3 rounded-xl bg-gradient-to-r ${service.color} shadow-lg`}>
        <IconComponent className="text-lg sm:text-xl" />
      </div>
      <div>
        <h4 className="font-bold text-base sm:text-lg mb-1">{service.title}</h4>
        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{service.desc}</p>
      </div>
    </motion.div>
  );
};

const TruckButtons = () => (
  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
    <MotionButton
      className="bg-gradient-to-r from-blue-600 to-red-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold shadow-2xl hover:shadow-blue-500/30 text-sm sm:text-base"
      whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255,255,255,0.2)" }}
    >
      Get Free Consultation
    </MotionButton>
    <MotionButton
      className="border-2 border-white/30 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold hover:border-white hover:bg-white/10 text-sm sm:text-base"
      whileHover={{ scale: 1.05 }}
    >
      View Case Studies
    </MotionButton>
  </div>
);

const Footer = () => (
  <motion.footer
    className="relative bg-gradient-to-br from-gray-900 to-black text-white py-12 sm:py-16 px-4 sm:px-6 overflow-hidden"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  >
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-red-600" />
    <FooterContent />
  </motion.footer>
);

const FooterContent = () => (
  <div className="max-w-6xl mx-auto text-center">
    <FooterTitle />
    <FooterDescription />
    <FooterIcons />
    <FooterCopyright />
  </div>
);

const FooterTitle = () => (
  <motion.h3
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.2 }}
    className="text-xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6"
  >
    Your Trusted Partner in{" "}
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-red-400">
      Global Logistics Excellence
    </span>
  </motion.h3>
);

const FooterDescription = () => (
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.4 }}
    className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed"
  >
    Where innovation meets reliability in global supply chain solutions. 
    Join thousands of satisfied clients who trust us with their logistics needs.
  </motion.p>
);

const FooterIcons = () => {
  const icons = [FaShip, FaPlane, FaTruck, FaTrain];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.6 }}
      className="flex justify-center gap-3 sm:gap-4 mb-6 sm:mb-8"
    >
      {icons.map((Icon, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.2, rotate: 360 }}
          className="bg-white/10 p-2 sm:p-3 rounded-full backdrop-blur-sm"
        >
          <Icon className="text-lg sm:text-xl" />
        </motion.div>
      ))}
    </motion.div>
  );
};

const FooterCopyright = () => (
  <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay: 0.8 }}
    className="text-gray-400 text-sm sm:text-base"
  >
    © {new Date().getFullYear()} Global Logistics Solutions. All rights reserved. | 
    <span className="text-blue-400"> ISO 9001:2015 Certified</span>
  </motion.p>
);

// Main Component
const Services = () => {
  const [selected, setSelected] = useState("");
  const [searchText, setSearchText] = useState("");
  const [activeTab, setActiveTab] = useState("");
  const navigate = useNavigate();

  const handleRequest = () => {
    if (selected) {
      navigate(`/${selected}`);
    } else {
      alert("Please choose a service first.");
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (selected && searchText.trim()) {
      alert(`Search request submitted for: ${searchText} in ${SERVICES.find(s => s.id === selected)?.title}`);
    } else if (!selected) {
      alert("Please choose a service first.");
    } else {
      alert("Please enter your search criteria.");
    }
  };

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    // Navigation logic here
  };

  const handleServiceClick = (serviceId) => {
    navigate(`/${serviceId}`);
  };

  return (
    <div className="font-sans text-gray-900 overflow-hidden">
      <HeroSection />
      <NavigationTabs activeTab={activeTab} onTabClick={handleTabClick} />
      <SearchSection
        selected={selected}
        searchText={searchText}
        onSelectChange={(e) => setSelected(e.target.value)}
        onSearchChange={(e) => setSearchText(e.target.value)}
        onSubmit={handleSearchSubmit}
        onRequest={handleRequest}
      />
      <ServicesGrid onServiceClick={handleServiceClick} />
      <TruckDispatchSection />
      <Footer />
    </div>
  );
};

export default Services;