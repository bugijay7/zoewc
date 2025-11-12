import React from "react";
import { Link } from "react-router-dom";
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

export default function AboutConnectSection() {
  return (
    <section className="flex flex-col md:flex-row items-stretch max-w-[1400px] mx-auto   bg-base-100 text-base-content">
      {/* 🔹 About Section */}
      <div className="w-full md:w-1/2 bg-secondary py-10 px-6 md:px-12 flex flex-col justify-center text-center md:text-left">
        <h1 className="text-2xl md:text-4xl font-extrabold uppercase mb-6 tracking-tight">
          Is this your first time here?
        </h1>

        <p className="text-xs md:text-sm opacity-90 leading-relaxed mb-10">
          Welcome to{" "}
          <span className="font-semibold text-primary">Zoe Worship Centre</span> — 
          a place where lives are transformed, faith is strengthened, and purpose is discovered. 
          Experience the abundant life of God through worship, the Word, and community.
        </p>

        <Link
          to="/visitors"
          className="px-4 text-xs md:text-base text-primary font-semibold uppercase tracking-wide underline underline-offset-8"
        >
          Start here →
        </Link>
      </div>

      {/* 🔹 Connect Section */}
      <div
        className="w-full md:w-1/2  bg-cover bg-center relative flex items-start justify-center"
        style={{ backgroundImage: `url(${connectBg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

        {/* Content */}
        <div className="relative z-10 w-full px-6 py-16 flex flex-col items-center md:text-left text-neutral">
          <h2 className="text-2xl md:text-6xl font-semibold text-primary mb-3">
            Connect With Us
          </h2>
          <p className="text-sm md:text-base text-primary-content font-medium mb-8">
            We'd love to hear from you! Reach us on any of the platforms below.
          </p>

          {/* 🔹 Contact Info */}
          <div className="flex flex-col items-center text-primary-content space-y-3 mb-6">
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

          {/* 🔹 Social Links */}
          <div className="flex flex-row items-start gap-5 space-y-3">
            <a
              href="https://www.facebook.com/ZoeWorshipCentreYouths"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary-content hover:text-primary transition"
            >
              <FaFacebookF className="text-lg" />
            </a>

            <a
              href="https://www.instagram.com/zoewoshipcentrechurch"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary-content hover:text-primary transition"
            >
              <FaInstagram className="text-lg" />
            </a>

            <a
              href="https://www.tiktok.com/@zoeworshipcentrechurch?_t=ZM-90eMtbIA7fH&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary-content hover:text-primary transition"
            >
              <FaTiktok className="text-lg" />
            </a>

            <a
              href="https://www.youtube.com/@ZoeWorshipCentreKinoo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary-content hover:text-primary transition"
            >
              <FaYoutube className="text-lg" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
