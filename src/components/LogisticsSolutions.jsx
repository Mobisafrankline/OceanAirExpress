import React, { useState } from "react";

// Import images (make sure these exist in your assets folder)
import RoadFreightImg from "../assets/road-freight.jpg";
import AirFreightImg from "../assets/air-freight.jpg";
import OceanFreightImg from "../assets/ocean-freight.jpg";
import WarehousingImg from "../assets/warehousing.jpg";

const LogisticsSolutions = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const servicesList = [
    {
      title: "Road Freight",
      description: "Reliable ground transport solutions across the USA and neighboring regions.",
      img: RoadFreightImg,
    },
    {
      title: "Air Freight",
      description: "Fast and efficient cargo delivery anywhere in the world.",
      img: AirFreightImg,
    },
    {
      title: "Ocean Freight",
      description: "Secure, cost-effective international shipping for sea cargo.",
      img: OceanFreightImg,
    },
    {
      title: "Warehousing",
      description: "Safe, organized storage with real-time inventory tracking.",
      img: WarehousingImg,
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Header Section */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
            Global Transport & Logistics Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
            Ocean Air Express is a leading transport and logistics company based in the USA. 
            We provide safe, reliable, and efficient delivery solutions across{" "}
            <span className="font-semibold text-blue-700">road, air, and sea</span>. 
            Our technology-driven approach ensures your cargo reaches its destination on time, every time.
          </p>
        </div>

        {/* Services Section */}
        <div id="services" className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {servicesList.map((service, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden">
              {/* Image */}
              <img
                src={service.img}
                alt={service.title}
                className="h-48 w-full object-cover"
              />
              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Catalogue / Quote Form */}
        <div className="bg-white rounded-xl shadow-md p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Request a Free Quote</h2>
            <p className="text-gray-600 mb-6">
              Get a detailed quote for your freight or logistics requirements. Fill in your email and we’ll send you a customized proposal.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 flex-1"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
            >
              Request Quote
            </button>
          </form>
          {submitted && (
            <div className="bg-blue-100 text-blue-700 p-3 rounded-lg mt-4 text-center w-full sm:w-auto">
              Thank you! Our team will contact you shortly.
            </div>
          )}
        </div>

        {/* Agency / About Section */}
        <div className="bg-white rounded-2xl shadow-md p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Why Choose Ocean Air Express?
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            We provide end-to-end logistics solutions tailored to your business needs. From managing domestic shipments to international cargo, our team ensures safe, timely, and reliable delivery.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Services */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Our Services</h3>
              <ul className="space-y-3">
                {[
                  "Road freight across the USA",
                  "Air freight for global destinations",
                  "Ocean shipping with full tracking",
                  "Warehousing & inventory management",
                ].map((service, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-blue-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Locations */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Major Routes & Locations</h3>
              <div className="flex flex-wrap gap-3">
                {["New York", "Los Angeles", "Chicago", "Houston", "Miami", "Seattle", "Atlanta"].map((city) => (
                  <span
                    key={city}
                    className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <a
              href=".\Services"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition inline-block"
            >
              Learn More About Our Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogisticsSolutions;
