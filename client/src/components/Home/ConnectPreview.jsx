import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import connectBg from "../../assets/hero33.jpg";

function ConnectPreview() {
  return (
    <div
      className="hero min-h-[50vh] bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${connectBg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-16 flex flex-col items-center text-center gap-12 text-neutral">
        
        {/* 🔹 Title Section */}
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-4xl md:text-5xl font-semibold text-primary">
            Connect With Us
          </h2>
          <p className="text-lg md:text-xl max-w-2xl text-primary-content font-medium">
            We'd love to hear from you! Reach us on any of the platforms below.
          </p>
        </div>

        {/* 🔹 Contact Info Section */}
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-6 md:gap-10 text-primary-content">
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-primary text-2xl" />
            <p className="text-primary font-medium">
              Waiyaki Way, Kinoo, Kenya
            </p>
          </div>

          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-primary text-2xl" />
            <p className="text-primary font-medium">+254 722 908 733</p>
          </div>

          <div className="flex items-center gap-3">
            <FaEnvelope className="text-primary text-2xl" />
            <p className="text-primary font-medium">
              zoeworshipcentrekinoo@gmail.com
            </p>
          </div>
        </div>

        {/* 🌐 Social Links Section */}
        <div className="w-full flex flex-col md:flex-row flex-wrap justify-center items-center gap-4 md:gap-6 pt-4">
          <a
            href="https://www.facebook.com/ZoeWorshipCentreYouths"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary-content hover:text-primary transition"
          >
            <FaFacebookF className="text-lg" />
            <span>Follow Zoe on Facebook</span>
          </a>

          <a
            href="https://www.instagram.com/zoewoshipcentrechurch"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary-content hover:text-primary transition"
          >
            <FaInstagram className="text-lg" />
            <span>Like Zoe on Instagram</span>
          </a>

          <a
            href="https://www.tiktok.com/@zoeworshipcentrechurch?_t=ZM-90eMtbIA7fH&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary-content hover:text-primary transition"
          >
            <FaTiktok className="text-lg" />
            <span>Join Zoe on TikTok</span>
          </a>

          <a
            href="https://www.youtube.com/@ZoeWorshipCentreKinoo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary-content hover:text-primary transition"
          >
            <FaYoutube className="text-lg" />
            <span>Subscribe on YouTube</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ConnectPreview;
