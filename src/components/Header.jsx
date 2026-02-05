import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';

const Header = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVideoError, setIsVideoError] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setIsVideoLoaded(true);
      video.play().catch(() => {});
    };

    const handleError = () => {
      setIsVideoError(true);
    };

    video.addEventListener('canplaythrough', handleCanPlay);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('canplaythrough', handleCanPlay);
      video.removeEventListener('error', handleError);
    };
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className="relative min-h-screen flex flex-col w-full overflow-hidden"
      id="header"
      role="banner"
    >
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        {!isVideoError ? (
          <>
            {!isVideoLoaded && (
              <div className="absolute inset-0 bg-gray-900 animate-pulse" />
            )}

            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              poster="/header-poster.jpg"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                isVideoLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <source src="/header.mp4" type="video/mp4" />
              <source src="/header.webm" type="video/webm" />
            </video>
          </>
        ) : (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/header-poster.jpg')" }}
          />
        )}
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/60 to-transparent" />

      <Navbar />

      {/* Content */}
      <section className="flex flex-1 items-end px-4 sm:px-6 md:px-12 lg:px-20 pb-10 relative z-10">
        <div className="max-w-3xl text-left">
          {/* Heading */}
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4 text-white leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Ocean Air Express
            </span>
            <span className="block text-blue-400 mt-2 text-lg sm:text-xl md:text-2xl">
              Reliable Transport & Logistics
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-200 mb-6 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We deliver fast, secure, and global logistics services. From air and
            ocean freight to ground transport, Ocean Air Express ensures your
            cargo reaches its destination safely and on time.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="#services"
              onClick={(e) => handleSmoothScroll(e, '#services')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold text-sm sm:text-base transition-all"
            >
              Explore Services
            </a>

            <a
              href="#contacts"
              onClick={(e) => handleSmoothScroll(e, '#contacts')}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold text-sm sm:text-base transition-all"
            >
              Contact Us
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="mt-8 flex flex-wrap gap-4 text-xs sm:text-sm text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <span>✔ 99.7% On-Time Delivery</span>
            <span>✔ 24/7 Support</span>
            <span>✔ Global Coverage</span>
          </motion.div>
        </div>
      </section>
    </header>
  );
};

export default Header;
