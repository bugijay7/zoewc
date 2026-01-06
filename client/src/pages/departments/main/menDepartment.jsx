import React from "react";
import menImg from "../../../assets/mens-conference.jpeg";

export default function MensDepartment() {
  return (
    <div className="bg-white min-h-screen pt-10">
      {/* --- HERO SECTION --- */}
      <section className="relative px-6 pt-12 lg:pt-20">
        <div className="max-w-7xl mx-auto overflow-hidden relative">
          <div className="aspect-[21/9] w-full">
            <img
              src={menImg}
              alt="Men's Department"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Subtle Label Overlay */}
          <div className="absolute top-8 left-8 bg-black text-white px-6 py-2">
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Substance & Faith</span>
          </div>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Title Area */}
          <div className="lg:col-span-5" data-aos="fade-right">
            <h1 className="text-5xl md:text-7xl font-black text-black uppercase tracking-tighter leading-none mb-6">
              Men's <br />
              <span className="text-amber-500">Ministry</span>
            </h1>
            <h2 className="text-xl font-bold uppercase tracking-tight text-zinc-900 mb-8 leading-tight">
              Strengthening Men in <br /> Faith and Purpose
            </h2>
            <div className="w-24 h-2 bg-black"></div>
          </div>

          {/* Description Area */}
          <div className="lg:col-span-7 space-y-12" data-aos="fade-left">
            <div className="text-zinc-600 text-lg md:text-xl font-light leading-relaxed space-y-8">
              <p>
                The <strong className="text-black font-bold">Men’s Department</strong> at Zoe Worship Centre is dedicated to inspiring and 
                equipping men to live strong, God-centered lives.
              </p>
              <p>
                Our mission is to build men of integrity, purpose, and faith who impact 
                their families, church, and community for Christ.
              </p>
            </div>

            {/* Feature Grid (Converted from Bullets) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-zinc-100">
              {[
                { title: "Spiritual Growth", color: "bg-black" },
                { title: "Leadership", color: "bg-amber-500" },
                { title: "Community", color: "bg-pink-600" }
              ].map((item, i) => (
                <div key={i} className="group">
                  <div className={`h-1 w-12 ${item.color} mb-4 group-hover:w-full transition-all duration-500`}></div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-black">
                    {item.title}
                  </h4>
                </div>
              ))}
            </div>

            <p className="text-zinc-900 italic text-sm border-l-2 border-zinc-100 pl-6 py-2">
              Focusing on regular meetings, conferences, and outreach programs.
            </p>
          </div>
        </div>
      </section>

      {/* --- DECORATIVE SECTION --- */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 opacity-80">
            <div className="h-px bg-zinc-300 self-center"></div>
            <div className="text-center font-black uppercase text-xs tracking-[0.5em] text-pink-900">Iron Sharpens Iron</div>
            <div className="text-center font-black uppercase text-xs tracking-[0.5em] text-pink-900">Strength in Unity</div>
            <div className="h-px bg-zinc-300 self-center"></div>
        </div>
      </section>

      
    </div>
  );
}