import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="bg-base-200 min-h-screen pt-30 py-16 px-6 md:px-20 font-montserrat">
      <div className="max-w-6xl mx-auto">
        {/* 🕊 Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-3">
            Get in Touch
          </h1>
          <p className="text-base-content/70">
            We’d love to hear from you. Reach out with questions, prayers, or partnership opportunities.
          </p>
        </div>

        {/* 📞 Contact Info + Form */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-base-content">
              Contact Information
            </h2>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-primary text-xl" />
              <p className="text-base-content/80">
                zoe worship centre, Kinoo, Nairobi, Kenya
              </p>
            </div>

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-primary text-xl" />
              <p className="text-base-content/80">+254 722 908 733</p>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-primary text-xl" />
              <p className="text-base-content/80">zoeworshipcentrekinoo@gmail.com</p>
            </div>

            {/* 🌐 Social Links */}
            <div className="pt-6">
              <h3 className="text-lg font-semibold text-base-content mb-2">
                Follow Us
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/ZoeWorshipCentreYouths"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base-content/60 hover:text-primary text-xl transition"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base-content/60 hover:text-primary text-xl transition"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base-content/60 hover:text-primary text-xl transition"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.youtube.com/@ZoeWorshipCentreKinoo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base-content/60 hover:text-primary text-xl transition"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>

          {/* 📬 Contact Form */}
          <form className="bg-base-100 shadow-xl rounded-xl p-8 space-y-6 border border-base-300">
            <div>
              <label className="block text-base-content font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="block text-base-content font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="block text-base-content font-medium mb-2">
                Message
              </label>
              <textarea
                placeholder="Write your message..."
                rows="4"
                className="textarea textarea-bordered w-full"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>

       {/* 🗺️ Google Map */}
<div className="rounded-xl overflow-hidden shadow-xl border border-base-300">
  <iframe
    title="zoe worship centre Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.027768285977!2d36.696!3d-1.25435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f192ce507bf1f%3A0xfa7385e3b9c92e6a!2sZoe%20Worship%20Center%20Kinoo!5e0!3m2!1sen!2ske!4v1695744000000!5m2!1sen!2ske"
    width="100%"
    height="400"
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
