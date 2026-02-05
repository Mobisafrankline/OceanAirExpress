import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import contactImg from "../assets/contactus.jpg";

// Enhanced data structures
const departments = [
  {
    title: "Safety & Compliance",
    name: "Safety Officer",
    phone: "+14049806138",
    formattedPhone: "(+1404) 980-6138",
    email: "safety@oceanairexpress.com",
    icon: "🛡️",
    description: "24/7 safety monitoring and compliance assistance",
    availability: "Mon-Fri: 8AM-6PM EST",
    color: "from-blue-500 to-blue-700"
  },
  {
    title: "Dispatch",
    name: "Head of Dispatch",
    phone: "+14709090419",
    formattedPhone: "(+1470) 909-0419",
    email: "dispatch@oceanairexpress.com",
    icon: "🚚",
    description: "Real-time shipment tracking and coordination",
    availability: "24/7 Emergency Dispatch",
    color: "from-green-500 to-green-700"
  },
  {
    title: "Payroll/Settlement",
    name: "Accounting Dept.",
    phone: "+14049164814",
    formattedPhone: "(+1404) 916-4814",
    email: "accounts@oceanairexpress.com",
    icon: "💳",
    description: "Fast and accurate payment processing",
    availability: "Mon-Fri: 9AM-5PM EST",
    color: "from-purple-500 to-purple-700"
  }
];

const faqs = [
  {
    q: "How do I request a freight quote?",
    a: "You can request a quote through our online form or contact the dispatch team directly. We typically respond within 15 minutes during business hours."
  },
  {
    q: "What areas do you cover?",
    a: "We deliver reliable and efficient logistics solutions across all 48 states, ensuring seamless transportation by road with specialized regional services."
  },
  {
    q: "Do you offer warehousing services?",
    a: "Yes, we provide secure warehousing with real-time inventory tracking, climate-controlled options, and same-day distribution capabilities."
  },
  {
    q: "What is your average delivery time?",
    a: "Delivery times vary by route and service type, but we maintain 98% on-time delivery with real-time tracking updates."
  },
  {
    q: "Do you handle hazardous materials?",
    a: "Yes, we're fully certified for hazardous materials transport with specialized safety protocols and trained personnel."
  }
];

const serviceAreas = [
  "Regional LTL", "Full Truckload", "Expedited Shipping", "Warehousing", 
  "Supply Chain", "Cross-Docking", "Temperature Control", "Hazmat"
];

// Custom Hook for Intersection Observer
const useScrollAnimation = (ref, threshold = 0.1) => {
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold }
    );
    
    if (ref.current) observer.observe(ref.current);
    
    return () => observer.disconnect();
  }, [ref, threshold]);
  
  return isInView;
};

// Floating Elements Component
const FloatingElements = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute bg-white/10 rounded-full"
        initial={{ 
          opacity: 0,
          scale: 0,
          x: Math.random() * 1000,
          y: Math.random() * 800
        }}
        animate={{
          opacity: [0, 0.3, 0],
          scale: [0, 1, 0],
        }}
        transition={{
          duration: Math.random() * 3 + 2,
          repeat: Infinity,
          delay: Math.random() * 2
        }}
        style={{
          width: Math.random() * 100 + 50,
          height: Math.random() * 100 + 50,
        }}
      />
    ))}
  </div>
);

const Contacts = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [activeDepartment, setActiveDepartment] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sectionRefs = {
    hero: useRef(null),
    departments: useRef(null),
    contact: useRef(null),
    map: useRef(null),
    faq: useRef(null)
  };

  const inView = {
    hero: useScrollAnimation(sectionRefs.hero),
    departments: useScrollAnimation(sectionRefs.departments),
    contact: useScrollAnimation(sectionRefs.contact),
    map: useScrollAnimation(sectionRefs.map),
    faq: useScrollAnimation(sectionRefs.faq)
  };

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const handleContactClick = (type, value = null) => {
    switch (type) {
      case 'email':
        const subject = encodeURIComponent("Inquiry from Website");
        const body = encodeURIComponent("Hello, I would like to learn more about your services...");
        window.open(`mailto:${value || 'dispatchoca@gmail.com'}?subject=${subject}&body=${body}`, '_blank');
        break;
      case 'phone':
        window.open(`tel:${value}`, '_blank');
        break;
      default:
        break;
    }
  };

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({ name: "", email: "", phone: "", department: "", message: "" });
    setIsSubmitting(false);
    
    // Show success message (you can replace with toast notification)
    alert("Thank you for your message! We'll get back to you within 24 hours.");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      {/* Enhanced Hero Section */}
      <section 
        ref={sectionRefs.hero}
        className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900"
      >
        <FloatingElements />
        <div className="absolute inset-0 bg-black/40"></div>
        
        <motion.div 
          className="relative text-center text-white max-w-6xl mx-auto z-10"
          variants={containerVariants}
          initial="hidden"
          animate={inView.hero ? "visible" : "hidden"}
        >
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">
              Connect With Excellence
            </span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl lg:text-3xl mb-8 font-light text-gray-200 leading-relaxed"
          >
            Your trusted partner in logistics and transportation solutions
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleContactClick('phone', departments[1].phone)}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300"
            >
              📞 Emergency Dispatch
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleContactClick('email')}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300"
            >
              ✉️ Get Quote
            </motion.button>
          </motion.div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Enhanced Departments Section */}
      <section ref={sectionRefs.departments} className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView.departments ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Expert Departments
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with the right team for specialized assistance and faster resolution
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {departments.map((dept, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`relative bg-gradient-to-br ${dept.color} text-white rounded-2xl p-8 shadow-2xl overflow-hidden group cursor-pointer`}
                onClick={() => setActiveDepartment(idx)}
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all"></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-4">{dept.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{dept.title}</h3>
                  <p className="text-blue-100 mb-4">{dept.description}</p>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center gap-2">
                      <span>👤</span> {dept.name}
                    </p>
                    <p className="flex items-center gap-2">
                      <span>📞</span> {dept.formattedPhone}
                    </p>
                    <p className="flex items-center gap-2">
                      <span>🕒</span> {dept.availability}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Active Department Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDepartment}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto"
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Contact {departments[activeDepartment].title}
                </h3>
                <div className="flex flex-wrap gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleContactClick('phone', departments[activeDepartment].phone)}
                    className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-all"
                  >
                    Call {departments[activeDepartment].name}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleContactClick('email', departments[activeDepartment].email)}
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all"
                  >
                    Email {departments[activeDepartment].title}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Enhanced Contact Form Section */}
      <section ref={sectionRefs.contact} className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView.contact ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            <p className="text-lg text-gray-600 mb-8">
              Have questions? We're here to help. Send us a message and we'll respond within 24 hours.
            </p>
            
            <div className="space-y-4">
              {serviceAreas.map((service, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="inline-block bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700 mr-2 mb-2 shadow-sm"
                >
                  ✓ {service}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView.contact ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select Department</option>
                    {departments.map((dept, idx) => (
                      <option key={idx} value={dept.title}>{dept.title}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-6 rounded-lg transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                    />
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Interactive Map */}
      <section ref={sectionRefs.map} className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView.map ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our National Coverage</h2>
            <p className="text-xl text-gray-600">Serving all 48 states with reliable logistics solutions</p>
          </motion.div>

          <div className="bg-gradient-to-br from-blue-50 to-gray-100 rounded-2xl shadow-2xl overflow-hidden">
            <div className="h-96 relative">
              <iframe
                title="Oceanaire Express National Coverage"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.473674555349!2d-84.4435223!3d33.9668266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f50d89266f9f6f%3A0x865a57a409522b9f!2sMarietta%2C%20GA%2030068%2C%20USA!5e0!3m2!1sen!2sus!4v1694345600000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </div>
            
            <div className="p-8 bg-white">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600">48</div>
                  <div className="text-gray-600">States Served</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600">2+</div>
                  <div className="text-gray-600">Active Trucks</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600">24/7</div>
                  <div className="text-gray-600">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section ref={sectionRefs.faq} className="py-20 px-6 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView.faq ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">Quick answers to common questions</p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/15 transition-all cursor-pointer"
                onClick={() => toggleFaq(idx)}
              >
                <div className="p-6 flex justify-between items-center">
                  <h3 className="text-lg font-semibold pr-4">{faq.q}</h3>
                  <motion.span
                    animate={{ rotate: expandedFaq === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-2xl"
                  >
                    ➕
                  </motion.span>
                </div>
                
                <AnimatePresence>
                  {expandedFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6">
                        <p className="text-gray-200 leading-relaxed">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Logistics?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of satisfied customers who trust us with their shipments</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleContactClick('phone', departments[1].phone)}
              className="bg-white text-blue-600 font-bold py-4 px-8 rounded-full text-lg shadow-2xl hover:shadow-3xl transition-all"
            >
              📞 Call Now for Quote
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleContactClick('email')}
              className="border-2 border-white text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-white hover:text-blue-600 transition-all"
            >
              ✉️ Email Us
            </motion.button>
          </div>
          
          <div className="mt-8 text-sm opacity-75">
            <p>Average response time: <strong>15 minutes</strong> during business hours</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contacts;