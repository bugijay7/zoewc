import React from "react";
import intercessoryImg from "../../../assets/intercessory.jpeg";

export default function IntercessoryDept() {
  return (
    <div className="bg-white min-h-screen">
      {/* --- CINEMATIC HERO SECTION --- */}
      <section className="relative px-6 pt-12 lg:pt-20">
        <div className="max-w-7xl mx-auto relative group">
          <div className="overflow-hidden shadow-2xl relative">
            <div className="aspect-[21/9] w-full relative">
              <img
                src={intercessoryImg}
                alt="Intercessory Ministry"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Deep Spiritual Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent lg:bg-gradient-to-r lg:from-black/50"></div>
            </div>
            
            {/* Top Right Accent Badge */}
            <div className="absolute top-0 right-0 flex">
              <div className="bg-amber-500 w-12 h-12 flex items-center justify-center text-black font-black italic text-xl">Z</div>
              <div className="bg-black px-6 py-3 text-white">
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">The Engine Room</span>
              </div>
            </div>
          </div>

          {/* --- ENHANCED FLOATING LABEL --- */}
          <div className="absolute -bottom-10 left-6 md:left-12 flex items-center z-30 group/label">
            {/* The Leading Badge */}
            <div className="bg-black w-16 h-16 flex items-center justify-center shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-amber-500/20 scale-0 group-hover/label:scale-150 transition-transform duration-700 rounded-full"></div>
              <div className="relative z-10 text-amber-500">
                 {/* Diamond "Strength" Motif */}
                 <div className="w-5 h-5 border-2 border-amber-500 rotate-45 group-hover/label:rotate-[135deg] transition-transform duration-700"></div>
              </div>
            </div>

            {/* The Glassmorphism Text Box */}
            <div className="bg-black/95 backdrop-blur-md text-white py-4 px-8 shadow-2xl flex flex-col justify-center border-b-4 border-amber-500">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-[8px] font-black uppercase tracking-[0.6em] text-zinc-500">Spiritual Pillar</span>
                <div className="h-px w-8 bg-zinc-800"></div>
              </div>
              <span className="text-sm font-black uppercase tracking-[0.2em] leading-none whitespace-nowrap">
                Prayer & <span className="text-amber-500">Breakthrough</span>
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
              <span className="text-amber-500 text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Standing In The Gap</span>
              <h1 className="text-6xl md:text-8xl font-black text-black uppercase tracking-tighter leading-none mb-2">
                Divine
              </h1>
              <h1 className="text-6xl md:text-8xl font-black text-pink-600 uppercase tracking-tighter leading-none ml-8 lg:ml-16 outline-text group-hover:text-black transition-colors duration-500">
                Access
              </h1>
            </div>
            
            <div className="mt-12 space-y-4">
              <h2 className="text-xl font-bold uppercase tracking-tight text-zinc-400 leading-tight">
                Praying and Interceding <br /> for Breakthrough and Guidance
              </h2>
              <div className="flex gap-2">
                 <div className="w-16 h-2 bg-amber-500"></div>
                 <div className="w-4 h-2 bg-black"></div>
              </div>
            </div>
          </div>

          {/* Column 2: Narrative & Feature Evolution */}
          <div className="lg:col-span-7 space-y-12" data-aos="fade-left">
            <div className="text-zinc-600 text-lg md:text-xl font-light leading-relaxed space-y-8">
              <p>
                The <strong className="text-black font-bold uppercase tracking-widest text-sm">Intercessory Department</strong> at Zoe Worship Centre is committed to supporting the church, its members, and the community through dedicated prayer and spiritual guidance.
              </p>
              <p>
                Our mission is to cultivate a strong prayer foundation, empowering believers to experience God’s presence and guidance in every area of life.
              </p>
            </div>

            {/* Feature Grid (Editorial Style) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-zinc-100">
              {[
                { title: "Individual Intercession", desc: "Families & Individuals", color: "bg-black" },
                { title: "Strategic Prayer", desc: "Events & Programs", color: "bg-amber-500" },
                { title: "Persistent Faith", desc: "A culture of prayer", color: "bg-zinc-200" }
              ].map((item, i) => (
                <div key={i} className="group cursor-default">
                  <div className={`h-1 w-12 ${item.color} mb-4 group-hover:w-full transition-all duration-500`}></div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-black mb-1">
                    {item.title}
                  </h4>
                  <p className="text-[10px] text-zinc-400 uppercase tracking-tighter font-medium">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Depth Box */}
            <div className="p-10 bg-black text-white relative overflow-hidden group/box">
               <div className="absolute right-0 top-0 w-2 h-full bg-amber-500"></div>
               <p className="relative z-10 text-zinc-400 text-sm font-light leading-relaxed tracking-wide italic">
                 "Fostering a culture of persistent prayer and faith, ensuring that every spiritual need is met with heaven's response."
               </p>
               {/* Background Glow */}
               <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-amber-500/10 blur-3xl group-hover/box:bg-amber-500/20 transition-colors"></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- DECORATIVE MOTIF --- */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-start opacity-20">
            <div className="flex gap-8 items-center w-full">
              <div className="text-[10px] font-black uppercase tracking-[0.8em] text-zinc-400 whitespace-nowrap">Prayer / Breakthrough / Guidance</div>
              <div className="h-px flex-1 bg-gradient-to-r from-zinc-400 to-transparent"></div>
            </div>
        </div>
      </section>

      {/* FOOTER BAR */}
      
    </div>
  );
}