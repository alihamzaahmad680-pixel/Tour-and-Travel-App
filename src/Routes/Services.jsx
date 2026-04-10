import React from "react";
import Footer from "../components/Footer";
import nightImg from "../assets/night.jpg";
import Trip from "../components/Trip";

const Services = () => {
  return (
    <div>
      <div
        className="h-80 bg-cover bg-center flex items-center justify-center text-white text-4xl md:text-5xl font-bold tracking-wide"
        style={{ backgroundImage: `url(${nightImg})` }}
      >
        Our Services
      </div>
      <div className="py-12 px-4 text-center">
        <h2 className="text-3xl font-bold mb-3">What We Offer</h2>

        <p className="max-w-2xl mx-auto text-gray-700 leading-relaxed">
          We provide the best travel services across Pakistan with comfort,
          safety and affordable packages for everyone.
        </p>
      </div>

      <Trip />
      <Footer />

    </div>
  );
};

export default Services;