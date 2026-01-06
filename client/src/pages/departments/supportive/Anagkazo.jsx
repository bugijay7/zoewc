import React from "react";
import evangelismImg from "../../../assets/anagkazo.jpeg";

export default function AnagkazoDept() {
  return (
    <div className="bg-white min-h-screen">
      {/* --- CINEMATIC HERO SECTION --- */}
      <section className="relative px-6 pt-12 lg:pt-20">
        <div className="max-w-7xl mx-auto relative group">
          <div className="overflow-hidden shadow-2xl relative">
            <div className="aspect-[21/9] w-full relative">
              <img
                src={evangelismImg}
                alt="Anagkazo Evangelism"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Dark Gradient for Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-black/40"></div>
            </div>
            
            {/* Top Right Accent Badge */}
            <div className="absolute top-0 right-0 flex">
              <div className="bg-amber-500 w-12 h-12 flex items-center justify-center text-black font-black italic text-xl">Z</div>
              <div className="bg-pink-600 px-6 py-3 text-white">
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Bold Witnesses</span>
              </div>
            </div>
          </div>

          {/* --- ENHANCED FLOATING LABEL --- */}
          <div className="absolute -bottom-10 left-6 md:left-12 flex items-center z-30 group/label">
            {/* The Leading Badge */}
            <div className="bg-amber-500 w-16 h-16 flex items-center justify-center shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-white/20 scale-0 group-hover/label:scale-150 transition-transform duration-700 rounded-full"></div>
              <div className="relative z-10 text-black">
                 <div className="w-5 h-5 border-2 border-black rotate-45 group-hover/label:rotate-90 transition-transform duration-500"></div>
              </div>
            </div>

            {/* The Glassmorphism Text Box */}
            <div className="bg-black/90 backdrop-blur-md text-white py-4 px-8 shadow-2xl flex flex-col justify-center border-b-4 border-pink-600">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-[8px] font-black uppercase tracking-[0.6em] text-amber-500">Ministry Pillar</span>
                <div className="h-px w-8 bg-zinc-700"></div>
              </div>
              <span className="text-sm font-black uppercase tracking-[0.2em] leading-none whitespace-nowrap">
                Outreach & <span className="text-pink-600">Impact</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* --- CORE CONTENT SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 py-28 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Column 1: Staggered Heading */}
          <div className="lg:col-span-5" data-aos="fade-right">
            <div className="relative">
              <span className="text-pink-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">The Anagkazo Mandate</span>
              <h1 className="text-6xl md:text-8xl font-black text-black uppercase tracking-tighter leading-none mb-2">
                Bold
              </h1>
              <h1 className="text-6xl md:text-8xl font-black text-amber-500 uppercase tracking-tighter leading-none ml-8 lg:ml-16">
                Witness
              </h1>
            </div>
            
            <div className="mt-12 space-y-4">
              <h2 className="text-xl font-bold uppercase tracking-tight text-zinc-400 leading-tight">
                Sharing the Gospel, <br /> Changing Lives Globally
              </h2>
              <div className="flex gap-2">
                 <div className="w-16 h-2 bg-black"></div>
                 <div className="w-4 h-2 bg-pink-600"></div>
              </div>
            </div>
          </div>

          {/* Column 2: Narrative & Feature Evolution */}
          <div className="lg:col-span-7 space-y-12" data-aos="fade-left">
            <div className="text-zinc-600 text-lg md:text-xl font-light leading-relaxed space-y-8">
              <p>
                The <strong className="text-black font-bold uppercase tracking-widest text-sm">Anagkazo Department</strong> at Zoe Worship Centre is dedicated to spreading the Good News of Jesus Christ both locally and globally.
              </p>
              <p>
                Our mission is to raise a generation of bold and compassionate witnesses, impacting lives and expanding God’s kingdom through meaningful service and love.
              </p>
            </div>

            {/* Feature Grid (Editorial Style) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-zinc-100">
              {[
                { title: "Reach the Lost", desc: "A message of hope", color: "bg-pink-600" },
                { title: "Equip Believers", desc: "Effective sharing", color: "bg-amber-500" },
                { title: "Engage Community", desc: "Service and love", color: "bg-black" }
              ].map((item, i) => (
                <div key={i} className="group cursor-default">
                  <div className={`h-1 w-12 ${item.color} mb-4 group-hover:w-full transition-all duration-500`}></div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-black mb-1">
                    {item.title}
                  </h4>
                  <p className="text-[10px] text-zinc-400 uppercase tracking-tighter">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Quote Box */}
            <div className="p-8 border border-zinc-100 bg-zinc-50/50 relative">
               <div className="absolute left-0 top-0 h-1 w-20 bg-amber-500"></div>
               <p className="text-zinc-500 text-sm font-light leading-relaxed italic">
                 "Through outreach programs, campaigns, and personal evangelism, we compel them to come in that His house may be filled."
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- DECORATIVE MOTIF --- */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-8 opacity-20">
            <div className="text-[10px] font-black uppercase tracking-[1em] text-zinc-400 whitespace-nowrap">Compassion / Boldness</div>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-300 to-transparent"></div>
        </div>
      </section>

      
    </div>
  );
}