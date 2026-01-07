import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/about-hero.jfif";

export default function Visitors() {
  const steps = [
    {
      title: "Fresh Start",
      desc: "If you’re visiting for the first time, we can’t wait to meet you! At Zoe Worship Centre, we want to help you settle in, grow in faith, and become part of our loving family.",
      icon: "🌱",
      link: "/new",
      btn: "Start Here",
      accent: "border-amber-500"
    },
    {
      title: "Main Departments",
      desc: "Get involved in one of our main ministry departments where you can serve, connect with others, and use your unique gifts to make an impact in God’s Kingdom.",
      icon: "🤝",
      link: "/departments/main",
      btn: "Explore Departments",
      accent: "border-pink-600"
    },
    {
      title: "Support Departments",
      desc: "Be part of a team that helps the ministry thrive behind the scenes — from hospitality and media to administration and logistics. Every role makes a difference!",
      icon: "💪",
      link: "/departments/supportive",
      btn: "Get Involved",
      accent: "border-black"
    },
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* --- HERO SECTION --- */}
      <section className="relative px-6 pt-12 lg:pt-20 max-w-7xl mx-auto">
        <div className="relative group overflow-hidden shadow-2xl">
          <div className="aspect-[21/9] w-full relative">
            <img 
                src={heroImg} 
                alt="Zoe Worship Centre" 
                className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent"></div>
          </div>

          {/* Floating Luxury Label */}
          <div className="absolute -bottom-6 left-12 hidden md:flex items-center z-20 group/label">
            <div className="bg-amber-500 w-16 h-16 flex items-center justify-center shadow-xl rotate-45 group-hover/label:rotate-90 transition-transform duration-500">
                <span className="rotate-[-45ms] group-hover/label:rotate-[-90deg] transition-transform duration-500 text-2xl">✨</span>
            </div>
            <div className="bg-black/90 backdrop-blur-md text-white py-4 px-8 shadow-2xl ml-[-32px] pl-12 border-b-4 border-pink-600">
               <span className="text-[10px] font-black uppercase tracking-[0.5em] text-amber-500 block mb-1">Welcome Home</span>
               <span className="text-sm font-black uppercase tracking-widest">Experience Abundant Life</span>
            </div>
          </div>
        </div>

        {/* Hero Text Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-20">
            <div className="lg:col-span-7" data-aos="fade-right">
                <h1 className="text-5xl md:text-8xl font-black text-black uppercase tracking-tighter leading-none mb-8">
                    Deeply <br /> <span className="text-pink-600">Loved.</span>
                </h1>
                <p className="text-zinc-500 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                    Whether this is your first time at Zoe Worship Centre or you’re returning after a while, 
                    know that you are valued. Our doors—and our hearts—are open to you.
                </p>
            </div>
            <div className="lg:col-span-5 flex flex-col justify-end lg:items-end text-right" data-aos="fade-left">
                <div className="p-8 bg-zinc-50 border-r-4 border-amber-500 max-w-sm">
                    <p className="text-zinc-600 italic font-light mb-4">
                        “Come to me with your ears wide open. Listen, and you will find life.”
                    </p>
                    <span className="text-[10px] font-black uppercase tracking-widest text-black">— Isaiah 55:3 (NLT)</span>
                </div>
            </div>
        </div>
      </section>

      {/* --- STEPS SECTION --- */}
      <section className="bg-pink-900 py-24 px-6 text-white">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {steps.map((step, index) => (
                    <div 
                        key={index} 
                        data-aos="fade-up" 
                        data-aos-delay={index * 100}
                        className={`relative p-8 border-l border-white/10 hover:border-amber-500 transition-colors duration-500 group`}
                    >
                        <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-500">
                            {step.icon}
                        </div>
                        <h3 className="text-2xl font-bold uppercase tracking-tighter mb-4 text-amber-500 transition-colors">
                            {step.title}
                        </h3>
                        <p className="text-zinc-50 text-sm font-light leading-relaxed mb-8 h-24 overflow-hidden">
                            {step.desc}
                        </p>
                        <Link 
                            to={step.link} 
                            className="inline-block border border-amber-500 px-6 py-3 text-[10px] font-bold text-amber-500 uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                        >
                            {step.btn}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* --- FINAL CTA SECTION --- */}
      <section className="py-24 px-6 text-center" data-aos="zoom-in">
        <div className="max-w-2xl mx-auto">
            <div className="w-px h-20 bg-gradient-to-b from-transparent to-pink-600 mx-auto mb-8"></div>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6">
                Ready to begin <span className="text-pink-600 text-outline">your journey?</span>
            </h2>
            <p className="text-zinc-500 font-light mb-10">
                We’d love to connect with you and answer any questions you might have about our community.
            </p>
            <Link 
                to="/contact" 
                className="btn btn-lg bg-black text-white hover:bg-pink-600 border-none rounded-none px-12 tracking-widest text-[10px] uppercase font-black"
            >
                Get in Touch
            </Link>
        </div>
      </section>

      
    </div>
  );
}