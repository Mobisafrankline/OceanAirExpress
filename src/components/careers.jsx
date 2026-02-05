import React from "react";
import { motion } from "framer-motion";

const openings = []; // Currently no open positions

const Careers = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4"
        >
          Careers at Ocean Air Express Inc.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed"
        >
          At <strong className="text-red-400">Ocean Air Express</strong>, we
          believe our strength lies in our people. We value{" "}
          <span className="font-semibold text-yellow-300">safety</span>,{" "}
          <span className="font-semibold text-yellow-300">reliability</span>, and{" "}
          <span className="font-semibold text-yellow-300">respect</span>. Whether
          on the road or in the office, every role is essential to our mission.
        </motion.p>
      </section>

      {/* Open Positions */}
      <section className="py-16 px-6 md:px-12 lg:px-20">
        <div className="bg-white shadow-xl rounded-2xl p-8 max-w-6xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-blue-700 mb-6">
            Current Openings
          </h2>

          {openings.length > 0 ? (
            <div className="grid sm:grid-cols-2 gap-6">
              {openings.map((job, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-5 rounded-xl shadow-md hover:shadow-xl transition"
                >
                  <h3 className="font-bold text-base text-red-400">
                    {job.title}
                  </h3>
                  <p className="mt-2 text-gray-200 text-sm">
                    {job.description}
                  </p>
                  <a
                    href="mailto:careers@oceanairexpress.com"
                    className="inline-block mt-4 bg-blue-600 hover:bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                  >
                    Apply Now
                  </a>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-gray-600"
            >
              <p className="text-sm sm:text-base mb-3">
                🚫 There are no current openings at the moment.
              </p>
              <p className="mb-5 text-sm sm:text-base">
                We’re always happy to connect with passionate professionals.
                Send us your resume and we’ll reach out when a suitable role
                opens up.
              </p>
              <a
                href="mailto:careers@oceanairexpress.com"
                className="bg-red-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition"
              >
                Submit Resume
              </a>
            </motion.div>
          )}
        </div>
      </section>

      {/* Culture & Perks */}
      <section className="py-14 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-gray-100 to-gray-200 text-center">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-800 mb-6">
          Why Work With Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-base font-bold text-blue-600">Growth</h3>
            <p className="mt-2 text-sm text-gray-600">
              Training, skill development, and clear career progression.
            </p>
          </div>

          <div className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-base font-bold text-red-600">Community</h3>
            <p className="mt-2 text-sm text-gray-600">
              A respectful team culture where everyone matters.
            </p>
          </div>

          <div className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-base font-bold text-yellow-600">Benefits</h3>
            <p className="mt-2 text-sm text-gray-600">
              Competitive pay, wellness support, and work-life balance.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
