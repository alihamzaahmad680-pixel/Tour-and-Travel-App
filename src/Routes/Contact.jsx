import React from "react";
import nightImg from "../assets/2.jpg";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>
      <div
        className="h-[450px] bg-cover bg-center flex items-center justify-center text-white text-4xl md:text-5xl font-bold tracking-wide"
        style={{ backgroundImage: `url(${nightImg})` }}
      >
        Contact Us
      </div>
      <div className="py-12 text-center px-4">
        <h2 className="text-3xl font-bold mb-3">Get In Touch</h2>

        <p className="max-w-2xl mx-auto text-gray-700 leading-relaxed">
          Send a message to us for any inquiries, feedback, or support.
        </p>
      </div>

      <div className="flex justify-center px-4 pb-16">
        <form className="w-full max-w-md flex flex-col gap-4">

          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>

          <button
            type="submit"
            className="bg-gray-800 text-white py-3 rounded-lg font-medium hover:bg-gray-900 transition"
          >
            Send Message
          </button>

        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;