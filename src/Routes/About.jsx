import React from "react";
import Footer from "../components/Footer";
import nightImg from "../assets/night.jpg";

const About = () => {
  return (
    <div>
      <div
        className="h-80 bg-cover bg-center flex items-center justify-center text-white text-4xl md:text-5xl font-bold tracking-wide"
        style={{ backgroundImage: `url(${nightImg})` }}
      >
        About Us
      </div>

      <div className="py-16 px-6 text-center">

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-3">Our Mission</h2>
          <p className="max-w-2xl mx-auto text-gray-700 leading-relaxed">
            We aim to provide the best travel experience for our customers.
            Our mission is to make every journey comfortable and memorable.
            We focus on quality service and customer satisfaction.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-3">Why Choose Us</h2>
          <p className="max-w-2xl mx-auto text-gray-700 leading-relaxed">
            We offer affordable travel packages with premium quality services.
            Our team ensures safety, comfort, and professional guidance.
            We are trusted by hundreds of happy travelers.
          </p>
        </div>

        {/* Vision */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-3">Our Vision</h2>
          <p className="max-w-2xl mx-auto text-gray-700 leading-relaxed">
            To become the leading travel company in Pakistan.
            To make travel easy, safe, and accessible for everyone.
            To create unforgettable travel experiences worldwide.
          </p>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default About;