import React from "react";
import { testimonialsData } from "../assets/assets";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section
      className="container mx-auto py-16 px-4 lg:px-10 w-full"
      id="Testimonials"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-600">
          Customer <span className="font-light text-gray-800">Reviews</span>
        </h1>
        <p className="text-gray-500 mt-3 max-w-lg mx-auto">
          Real stories from clients who trust our services.
        </p>
      </div>

      {/* Scrollable Testimonials */}
      <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 px-2 sm:px-4">
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.97 }}
            className="min-w-[280px] sm:min-w-[320px] lg:min-w-[360px] bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center snap-start hover:shadow-xl transition-all"
          >
            {/* Rating Stars */}
            <div className="flex justify-center mb-4">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>

            {/* Review Text */}
            <p className="text-gray-600 italic mb-6 leading-relaxed">
              “{testimonial.text}”
            </p>

            {/* Reviewer */}
            <h3 className="font-semibold text-lg text-gray-800">
              {testimonial.name}
            </h3>
            <span className="text-sm text-gray-500">{testimonial.title}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
