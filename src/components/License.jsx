import React from "react";
import { motion } from "framer-motion";
import { Shield, Scale, FileText, Globe, Mail, Phone, MapPin } from "lucide-react";

const License = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const sections = [
    {
      icon: Shield,
      title: "Company License",
      content: "Ocean Air Express is a registered logistics and freight forwarding company based in the United States of America. We are authorized and licensed to provide international freight forwarding, customs brokerage, contract logistics, and supply chain management services in compliance with U.S. Department of Transportation (DOT), Federal Maritime Commission (FMC), and Transportation Security Administration (TSA) regulations."
    },
    {
      icon: Scale,
      title: "Legal Disclaimer",
      content: "All services offered by Ocean Air Express are subject to our standard Terms & Conditions, which govern the handling, transportation, and storage of goods. By using our services, customers agree to abide by these terms. Ocean Air Express shall not be held liable for delays, losses, or damages caused by factors beyond our control."
    },
    {
      icon: FileText,
      title: "Use of Website",
      content: "The content on this website, including text, images, and company materials, is the intellectual property of Ocean Air Express. Unauthorized use, reproduction, or distribution of any content without prior written consent is strictly prohibited."
    },
    {
      icon: Globe,
      title: "Compliance",
      content: "Ocean Air Express strictly complies with all U.S. export control laws, international trade regulations, and industry standards. Customers are responsible for ensuring that their shipments meet all legal and regulatory requirements of the origin and destination countries."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      {/* Enhanced Hero Section - Mobile Responsive */}
      <div className="relative h-[40vh] sm:h-[50vh] flex items-center justify-center bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-blue-800/20" />
        
        <motion.div
          className="relative z-10 text-center px-4 sm:px-6 w-full max-w-4xl mx-auto"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            <span className="text-xs sm:text-sm font-medium text-white/90">Legal & Compliance</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            License & 
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent mt-1 sm:mt-2">
              Legal Notice
            </span>
          </h1>
          
          <p className="text-sm sm:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
            Transparency and compliance at the core of our operations
          </p>
        </motion.div>

        {/* Animated background elements */}
        <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 bg-gradient-to-t from-slate-50 to-transparent" />
      </div>

      {/* Enhanced Content Section - Mobile Responsive */}
      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 -mt-12 sm:-mt-16 lg:-mt-20 relative"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 hover:border-blue-200/50"
            >
              <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-blue-100 group-hover:bg-blue-200 transition-colors duration-300 flex-shrink-0">
                  <section.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-blue-700" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-blue-800 transition-colors duration-300 leading-tight">
                  {section.title}
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-[15px]">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Contact Section - Mobile Responsive */}
        <motion.div
          variants={fadeInUp}
          className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-white shadow-2xl"
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
            <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
            Contact Our Legal Department
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
            <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-300 flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-xs sm:text-sm text-blue-100">Email</p>
                <p className="font-semibold text-sm sm:text-base truncate">dispatchoca@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-300 flex-shrink-0" />
              <div>
                <p className="text-xs sm:text-sm text-blue-100">Phone</p>
                <p className="font-semibold text-sm sm:text-base">(+1) 470-909-0419</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-white/10 rounded-lg backdrop-blur-sm sm:col-span-2 lg:col-span-1">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-300 flex-shrink-0" />
              <div>
                <p className="text-xs sm:text-sm text-blue-100">Headquarters</p>
                <p className="font-semibold text-sm sm:text-base">Marietta GA, USA</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Enhanced Footer - Mobile Responsive */}
      <motion.footer
        className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white py-6 sm:py-8 lg:py-12 mt-6 sm:mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
              <span className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
                Ocean Air Express
              </span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-300">
              <span className="px-2 sm:px-3 py-1 bg-white/5 rounded-full">FMC Compliant</span>
              <span className="px-2 sm:px-3 py-1 bg-white/5 rounded-full">DOT Registered</span>
              <span className="px-2 sm:px-3 py-1 bg-white/5 rounded-full">TSA Certified</span>
            </div>
          </div>
          
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
            © {new Date().getFullYear()} Ocean Air Express. All rights reserved. | 
            <span className="block sm:inline"> Licensed Freight Forwarder • Fully Insured • Global Coverage</span>
          </p>
        </div>
      </motion.footer>
    </div>
  );
};

export default License;