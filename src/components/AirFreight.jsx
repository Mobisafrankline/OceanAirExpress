import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Air Charter Network",
    description:
      "Air freight companies with flexibility and guaranteed capacity for your high-value air cargo.",
    image: "../assets/AirFreight(1).jpg",
    cta: "Read More on Air Charter",
  },
  {
    title: "Sea-Air Freight – First by Ship, Then Onward by Air",
    description:
      "When sea is too slow and air too expensive, why not try a combination of the two for the highest impact?",
    image: "../assets/AirFreight(2).jpg",
    cta: "Read More on Sea-Air",
  },
  {
    title: "Unit Load Devices",
    description:
      "Whatever the size and weight of your shipment, our air freight foundation is built around safe and reliable ULDs.",
    image: "../assets/AirFreight(3).jpg",
    cta: "Explore ULD Solutions",
  },
];

const AirFreight = () => {
  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('../assets/air-freight.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          className="relative z-10 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-blue-500 drop-shadow-lg">
            Air Freight
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200">
            When time matters, we deliver with speed and care.
          </p>
          <Button className="mt-6 bg-blue-600 hover:bg-red-600 text-white px-6 py-3 rounded-full shadow-lg">
            Explore Air Freight Services
          </Button>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="space-y-16">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="rounded-2xl shadow-lg w-full h-72 object-cover hover:scale-105 transition-transform duration-300"
              />

              {/* Text */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-700 mb-6">{service.description}</p>
                <Button className="bg-blue-600 hover:bg-red-600 text-white px-5 py-2 rounded-lg shadow-md">
                  {service.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AirFreight;
