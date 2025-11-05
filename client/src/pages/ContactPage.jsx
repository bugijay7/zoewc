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
import contactBg from "../assets/contact-bg.jpeg";

export default function ContactPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat font-montserrat relative"
      style={{
        backgroundImage: `url(${contactBg})`,
      }}
    >
      {/* 🔹 Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* 🔹 Content Wrapper */}
      <div className="relative z-10 px-4 sm:px-6 md:px-10 lg:px-20 py-24">
        {/* 🕊 Title Section */}
        <div className="text-left md:text-center mb-12 md:mb-20 pt-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3">
            Stay Connect with Us 
          </h1>
          <p className="text-gray-200 max-w-2xl mx-auto text-sm sm:text-base">
            We’d love to hear from you. Reach out with questions, prayers, or partnership opportunities.
          </p>
        </div>

        {/* 🔹 Contact Info + Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
          {/* Contact Info */}
          <div className="space-y-6 bg-black/50 p-6 sm:p-8  backdrop-blur-sm">
            <h2 className="text-2xl font-medium text-primary mb-4">Contact Information</h2>

            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-primary text-lg mt-1" />
              <p className="text-gray-200 text-sm sm:text-base">
                Zoe Worship Centre, Kinoo, Nairobi, Kenya
              </p>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-primary text-lg" />
              <p className="text-gray-200 text-sm sm:text-base">+254 722 908 733</p>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-primary text-lg" />
              <p className="text-gray-200 text-sm sm:text-base">
                zoeworshipcentrekinoo@gmail.com
              </p>
            </div>

            {/* 🌐 Social Links */}
            <div className="pt-6 border-t border-gray-600">
              <h3 className="text-xs font-medium text-gray-300 mb-3 uppercase tracking-wide">
                Follow Us
              </h3>

              <div className="flex flex-col gap-2 text-sm sm:text-base">
                <a
                  href="https://www.facebook.com/ZoeWorshipCentreYouths"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-primary-focus transition"
                >
                  <FaFacebookF className="text-lg" />
                  <span>Facebook</span>
                </a>

                <a
                  href="https://www.instagram.com/zoewoshipcentrechurch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-primary-focus transition"
                >
                  <FaInstagram className="text-lg" />
                  <span>Instagram</span>
                </a>

                <a
                  href="https://www.tiktok.com/@zoeworshipcentrechurch?_t=ZM-90eMtbIA7fH&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-primary-focus transition"
                >
                  <FaTiktok className="text-lg" />
                  <span>TikTok</span>
                </a>

                <a
                  href="https://www.youtube.com/@ZoeWorshipCentreKinoo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-primary-focus transition"
                >
                  <FaYoutube className="text-lg" />
                  <span>YouTube</span>
                </a>
              </div>
            </div>
          </div>

          {/* 📬 Contact Form */}
          <form
            className="bg-base-400/10 shadow-xl  p-6 sm:p-8 space-y-6 border border-base-300 backdrop-blur-sm"
            onSubmit={async (e) => {
              e.preventDefault();

              const name = e.target.name.value.trim();
              const phone = e.target.phone.value.trim();
              const message = e.target.message.value.trim();

              if (!name || !phone || !message) {
                alert("Please fill out all fields.");
                return;
              }

              try {
                const res = await fetch("https://zoewc-1.onrender.com/api/messages", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ name, phone, message }),
                });

                const data = await res.json();
                if (res.ok) {
                  alert("Message sent successfully!");
                  e.target.reset();
                } else {
                  alert(data.error || "Failed to send message.");
                }
              } catch (error) {
                console.error("Error:", error);
                alert("Something went wrong. Please try again later.");
              }
            }}
          >
            <div>
              <label className="block text-primary-content font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="block text-primary-content font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="+254 700 000 000"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="block text-primary-content font-medium mb-2">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Share your thoughts or request......"
                rows="4"
                className="textarea textarea-bordered w-full"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>

        {/* 🗺️ Google Map */}
        <div className=" overflow-hidden shadow-xl border border-base-300">
          <iframe
            title="Zoe Worship Centre Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.027768285977!2d36.696!3d-1.25435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f192ce507bf1f%3A0xfa7385e3b9c92e6a!2sZoe%20Worship%20Center%20Kinoo!5e0!3m2!1sen!2ske!4v1695744000000!5m2!1sen!2ske"
            width="100%"
            height="300"
            className="md:h-[400px]"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
