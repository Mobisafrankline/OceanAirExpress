import React from "react";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-white py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Headline */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            We deliver success through{" "}
            <span className="text-blue-500">exceptional service</span> and high
            value — like no one else
          </h1>
        </div>

        {/* Right: Features */}
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <ArrowRight className="text-blue-500 mt-1" size={22} />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Unmatched Expertise
              </h3>
              <p className="text-gray-600">
                Work with experts who go further, no matter what, and know more
                than anyone else about logistics for your industry, business,
                and customers.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <ArrowRight className="text-blue-500 mt-1" size={22} />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Unrivaled Scale
              </h3>
              <p className="text-gray-600">
                We get you anywhere you need to go—even when others can’t—with
                the full power of our connections, relationships, and global
                reach.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <ArrowRight className="text-blue-500 mt-1" size={22} />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Tailored Solutions
              </h3>
              <p className="text-gray-600">
                Unlock solutions designed for your business through integrated,
                multimodal services and advanced technology capabilities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Bar */}
      <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl shadow-lg flex flex-col md:flex-row justify-between items-center px-8 py-6">
        <h2 className="text-lg md:text-xl font-medium mb-4 md:mb-0">
          Let’s get you where you need to go
        </h2>
        <button className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition">
          Connect with freight experts
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
