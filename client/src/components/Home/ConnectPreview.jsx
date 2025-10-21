import React from "react";
import { FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTiktok } from "react-icons/fa";
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
            We'd love to hear from you! Get in touch with us in any of the platforms below.
          </p>

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
          <a
                            href="https://www.facebook.com/ZoeWorshipCentreYouths"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary text-xl transition"
                          >
                            <FaFacebookF />
                          </a>
                          <a
                            href="https://www.instagram.com/zoewoshipcentrechurch"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary text-xl transition"
                          >
                            <FaInstagram />
                          </a>
                          <a
                            href="https://www.tiktok.com/@zoeworshipcentrechurch?_t=ZM-90eMtbIA7fH&_r=1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary text-xl transition"
                          >
                            <FaTiktok />
                          </a>
                          <a
                            href="https://www.youtube.com/@ZoeWorshipCentreKinoo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary text-xl transition"
                          >
                            <FaYoutube />
                          </a>
        </div>
      </div>
    </div>
  );
}

export default ConnectPreview;
