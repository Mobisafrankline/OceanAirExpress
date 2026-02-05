import React from "react";

// Import images from your assets folder
import RoadFreightImg from "../assets/road-freight.jpg";
import AirFreightImg from "../assets/air-freight.jpg";
import OceanFreightImg from "../assets/ocean-freight.jpg";
import WarehousingImg from "../assets/warehousing.jpg";

const services = [
  {
    name: "Road Freight",
    img: RoadFreightImg,
    description: "Fast and reliable ground transport for regional deliveries."
  },
  {
    name: "Air Freight",
    img: AirFreightImg,
    description: "Quick and efficient cargo delivery by air, anywhere in the world."
  },
  {
    name: "Ocean Freight",
    img: OceanFreightImg,
    description: "Secure and cost-effective shipping for international sea cargo."
  },
  {
    name: "Warehousing",
    img: WarehousingImg,
    description: "Safe, organized storage solutions with real-time inventory tracking."
  },
];

const ServicesSection = () => (
  <section className="py-20 bg-white w-full text-center">
    <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4">
      Our Services
    </h2>
    <p className="text-black text-lg sm:text-xl mb-12 max-w-4xl mx-auto">
      At Ocean Air Express, we provide a wide range of logistics solutions to meet your business needs. 
      From ground to air and sea transport, including reliable warehousing, our services ensure your cargo 
      reaches its destination safely, efficiently, and on time.
    </p>

    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 w-full">
      {services.map((service) => (
        <div
          key={service.name}
          className="relative overflow-hidden shadow-md hover:shadow-lg transition h-64 sm:h-72 md:h-80 lg:h-96 w-full"
        >
          {/* Service Image with continuous animation */}
          <img
            src={service.img}
            alt={service.name}
            className="w-full h-full object-cover animate-move"
          />
          {/* Text overlay at bottom left */}
          <div className="absolute bottom-0 left-0 p-4 sm:p-6 bg-black bg-opacity-50 w-full text-left">
            <h3 className="font-semibold text-lg sm:text-xl text-blue-400">
              {service.name}
            </h3>
            <p className="text-white text-sm sm:text-base">
              {service.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ServicesSection;
