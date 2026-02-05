import React, { useState } from "react";
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
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    try {
      const res = await fetch("https://zoewc-omsu.onrender.com/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus(data.error || "Failed to send message");
        return;
      }

      setStatus("Message sent successfully!");
      setFormData({ name: "", phone: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("Server error. Try again later.");
    }
  };

  return (
    <div className="bg-zinc-200 min-h-screen">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-black">
        <img
          src={contactBg}
          alt="Contact Zoe"
          className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale"
        />
        <div className="relative z-10 text-center px-6" data-aos="zoom-out">
          <span className="text-pink-600 text-xs font-black uppercase tracking-[0.6em] mb-4 block">
            Reach Out
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">
            Contact <span className="text-amber-500">Us</span>
          </h1>
        </div>
      </section>

      {/* --- BALANCED CONTACT SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 py-16 lg:py-24 bg-zink-200">
        <div className="flex flex-col lg:flex-row items-stretch gap-0 border border-zinc-100 shadow-2xl">
          
          {/* LEFT COLUMN: INFO & SOCIALS */}
          <div className="w-full lg:w-1/2 bg-black text-white p-8 md:p-16 flex flex-col justify-between">
            <div data-aos="fade-right">
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-10 border-l-4 border-amber-500 pl-6">
                Connect <br /> with the Family
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <FaMapMarkerAlt className="text-pink-600 shrink-0" size={24} />
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Location</p>
                    <p className="text-sm font-medium">Kinoo, Nairobi, Kenya</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <FaPhoneAlt className="text-pink-600 shrink-0" size={20} />
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Direct Line</p>
                    <p className="text-sm font-medium">+254 722 908 733</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <FaEnvelope className="text-pink-600 shrink-0" size={20} />
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Email</p>
                    <p className="text-sm font-medium underline decoration-amber-500 underline-offset-4">
                      zoeworshipcentrekinoo@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Grid */}
            <div className="mt-16 pt-10 border-t border-zinc-800" data-aos="fade-up">
              <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-black mb-6">Digital Campus</p>
              <div className="grid grid-cols-4 gap-4">
                {[
                  { icon: <FaFacebookF />, url: "https://www.facebook.com/ZoeWorshipCentreYouths" },
                  { icon: <FaInstagram />, url: "https://www.instagram.com/zoewoshipcentrechurch" },
                  { icon: <FaTiktok />, url: "https://www.tiktok.com/@zoeworshipcentrechurch" },
                  { icon: <FaYoutube />, url: "https://www.youtube.com/@ZoeWorshipCentreKinoo" },
                ].map((social, i) => (
                  <a 
                    key={i}
                    href={social.link} 
                    className="aspect-square flex items-center justify-center border border-zinc-800 hover:bg-white hover:text-black transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: THE FORM */}
          <div className="w-full lg:w-1/2 bg-white p-8 md:p-16">
            <div className="max-w-md mx-auto h-full flex flex-col justify-center" data-aos="fade-left">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-900 mb-8">
                Send a Message
              </h3>
              
              <form
                className="space-y-6"
                onSubmit={handleSubmit}
              >
                <div className="group relative border-b-2 border-zinc-100 focus-within:border-pink-600 transition-all duration-300 py-2">
                  <label className="text-[10px] uppercase font-black text-zinc-900 block mb-1">Full Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Type your name..." 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent outline-none text-black font-medium placeholder:text-gray-400" 
                    required 
                  />
                </div>

                <div className="group relative border-b-2 border-zinc-100 focus-within:border-pink-600 transition-all duration-300 py-2">
                  <label className="text-[10px] uppercase font-black text-zinc-900 block mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    placeholder="+254..." 
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent outline-none text-black font-medium placeholder:text-gray-400" 
                    required 
                  />
                </div>

                <div className="group relative border-b-2 border-zinc-100 focus-within:border-pink-600 transition-all duration-300 py-2">
                  <label className="text-[10px] uppercase font-black text-zinc-900 block mb-1">Your Message</label>
                  <textarea
                    name="message"
                    placeholder="Tell us something..."
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full bg-transparent outline-none text-black font-medium placeholder:text-gray-400 resize-none"
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-black text-white py-6 px-10 text-xs font-black uppercase tracking-[0.3em] hover:bg-amber-500 hover:text-black transition-all duration-500 mt-4"
                >
                  Send Message
                </button>

                {status && <p>{status}</p>}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* --- FULL WIDTH MAP --- */}
      <section className="bg-zinc-200 pt-0 pb-16 px-6">
         <div className="max-w-7xl mx-auto h-[400px] bg-zinc-200  contrast-125">
            <iframe
              title="Zoe Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.027768285977!2d36.696!3d-1.25435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f192ce507bf1f%3A0xfa7385e3b9c92e6a!2sZoe%20Worship%20Center%20Kinoo!5e0!3m2!1sen!2ske!4v1695744000000!5m2!1sen!2ske"
              className="w-full h-full border-none"
              loading="lazy"
            ></iframe>
         </div>
      </section>
    </div>
  );
}
