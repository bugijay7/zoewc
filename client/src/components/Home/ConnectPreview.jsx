import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import connectBg from "../../assets/about-hero.jpeg"; 

function ConnectPreview() {
  return (
    <div
      className="hero min-h-[50vh] bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${connectBg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xs"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-16 flex flex-col gap-12 text-neutral">
        
        {/* 🔹 Section 1: Form */}
        <div className="flex flex-col items-center text-center gap-6">
          <h2 className="text-4xl md:text-5xl font-medium text-primary">Connect With Us</h2>
          <p className="text-lg max-w-2xl text-primary-content font-medium">
            We'd love to hear from you! Fill out the form below and we’ll get back to you soon.
          </p>

          {/* Form (in row layout) */}
          <form className="flex flex-col md:flex-row gap-4 w-full max-w-3xl justify-center">
           
            <input
              type="email"
              placeholder="Your Phone Number"
              className="input input-bordered w-full md:w-1/4"
              required
            />
            <input
              type="text"
              placeholder="Your Message"
              className="input input-bordered w-full md:w-1/2"
              required
            />
            <button type="submit" className="btn btn-primary whitespace-nowrap">
              Send Message
            </button>
          </form>
        </div>

        {/* 🔹 Section 2: Contact Info */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 text-center text-base-content">
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-primary-content text-2xl" />
            <p className="text-primary">Nairobi, Kenya</p>
          </div>
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-primary-content text-2xl" />
            <p className="text-primary">+254 700 000 000</p>
          </div>
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-primary-content text-2xl" />
            <p className="text-primary">info@zoeworshipcenter.org</p>
          </div>
        </div>

        {/* 🔹 Section 3: Social Links */}
        <div className="flex justify-center gap-6">
          <a href="#" className="text-secondary hover:text-primary transition text-3xl">
            <FaFacebookF />
          </a>
          <a href="#" className="text-secondary hover:text-primary transition text-3xl">
            <FaInstagram />
          </a>
          <a href="#" className="text-secondary hover:text-primary transition text-3xl">
            <FaYoutube />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ConnectPreview;
