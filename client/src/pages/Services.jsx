import React from "react";
import { Book, Users, Church, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import worshipImg from "../assets/anagkazo.jpeg";

export default function Services() {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[60vh] flex items-center justify-center bg-black overflow-hidden">
        <img 
          src={worshipImg} 
          className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000" 
          alt="Worship Background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
        <div className="relative z-10 text-center px-6" data-aos="fade-up">
          <span className="text-amber-500 uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Fellowship & Word</span>
          <h1 className="text-5xl md:text-7xl font-black text-black uppercase tracking-tighter mb-4">
            Service <span className="text-pink-600">Times</span>
          </h1>
          <div className="w-24 h-1.5 bg-black mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-zinc-600 text-lg md:text-xl font-light leading-relaxed">
            At <strong className="text-black">Zoe Worship Centre</strong>, 
            our services are designed to inspire transformation, ignite spiritual growth, 
            and bring believers together in fellowship, worship, and the Word.
          </p>
        </div>
      </section>

      {/* --- SERVICES LIST SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        
        {/* SUNDAY SERVICES */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-12" data-aos="fade-right">
            <h2 className="text-3xl font-black uppercase tracking-tighter text-black">Sunday <span className="text-pink-600">Services</span></h2>
            <div className="h-[1px] flex-grow bg-zinc-100"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Ministers Service", time: "8:00 AM – 9:00 AM" },
              { num: "02", title: "First Service", time: "9:05 AM – 10:45 AM" },
              { num: "03", title: "Second Service", time: "10:50 AM – 1:00 PM" }
            ].map((service, i) => (
              <div 
                key={i} 
                className="group p-10 bg-zinc-50 border border-zinc-100 hover:bg-black transition-all duration-500"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="flex justify-between items-start mb-8">
                  <span className="text-4xl font-black text-zinc-200 group-hover:text-zinc-800 transition-colors">{service.num}</span>
                  <Church className="text-pink-600 w-6 h-6" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight text-black group-hover:text-white mb-2 transition-colors">
                  {service.title}
                </h3>
                <p className="text-amber-600 font-bold text-xs uppercase tracking-widest">
                  {service.time}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* WEEKLY & DEPARTMENTAL FELLOWSHIPS */}
        <div>
          <div className="flex items-center gap-4 mb-12" data-aos="fade-right">
            <h2 className="text-3xl font-black uppercase tracking-tighter text-black">Weekly <span className="text-amber-500">Fellowships</span></h2>
            <div className="h-[1px] flex-grow bg-zinc-100"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: "01", icon: <Book />, title: "Morning Devotions", time: "5:30 AM – 7:50 AM" },
              { num: "02", icon: <Users />, title: "Tuesday Fellowship", time: "6:30 PM – 7:30 PM" },
              { num: "03", icon: <Users />, title: "Thursday Bodaboda Outreach", time: "3:00 PM – 4:00 PM" },
              { num: "04", icon: <Church />, title: "Friday Mini-Vigil", time: "9:00 PM – Midnight" },
              { num: "05", icon: <Users />, title: "Departmental Fellowships", time: "Scheduled per department" }
            ].map((item, i) => (
              <div 
                key={i} 
                className="flex items-center gap-6 p-6 border-b border-zinc-100 hover:bg-zinc-50 transition-all group"
                data-aos="fade-up"
              >
                <div className="w-12 h-12 shrink-0 flex items-center justify-center bg-zinc-100 text-zinc-400 group-hover:bg-amber-500 group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-black uppercase tracking-tight text-sm text-black">{item.title}</h4>
                  <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mt-1">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="bg-black py-24 px-6 relative overflow-hidden">
        {/* Subtle decorative "ZOE" text in background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <span className="text-[20rem] font-black text-white select-none">ZOE</span>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center" data-aos="zoom-in">
          <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6">
            Stay Connected <span className="text-pink-600">With Us</span>
          </h3>
          <p className="text-zinc-400 text-lg mb-12 font-light max-w-2xl mx-auto">
            Join our services, follow our livestream, or reach out for prayer or support. 
            We’d love to walk with you on your spiritual journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/live" 
              className="btn btn-lg rounded-none bg-pink-600 border-none text-white hover:bg-white hover:text-black px-10 transition-all uppercase tracking-widest text-xs font-bold"
            >
              Watch Livestream
            </a>
            <a 
              href="/contact" 
              className="btn btn-lg rounded-none bg-transparent border-white text-white hover:bg-white hover:text-black px-10 transition-all uppercase tracking-widest text-xs font-bold"
            >
              Plan Your Visit
            </a>
          </div>
        </div>
      </section>
      
      {/* FINAL DECOR */}
      <div className="h-1 w-full flex">
        <div className="flex-1 bg-amber-500"></div>
        <div className="flex-1 bg-pink-600"></div>
        <div className="flex-1 bg-black"></div>
      </div>
    </div>
  );
}