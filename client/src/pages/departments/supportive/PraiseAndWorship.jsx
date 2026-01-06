import React from "react";
import worshipImg from "../../../assets/praise.jpg";

export default function PraiseAndWorship() {
  return (
    <div className="bg-white min-h-screen">
      {/* --- CINEMATIC HERO SECTION --- */}
      <section className="relative px-6 pt-12 lg:pt-20">
        <div className="max-w-7xl mx-auto relative group">
          <div className="overflow-hidden shadow-2xl relative">
            <div className="aspect-[21/9] w-full relative">
              <img
                src={worshipImg}
                alt="Praise & Worship Department"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Atmospheric Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-black/40"></div>
            </div>
            
            {/* Top Right Ministry Badge */}
            <div className="absolute top-0 right-0 flex">
              <div className="bg-amber-500 w-12 h-12 flex items-center justify-center text-black font-black italic text-xl">Z</div>
              <div className="bg-pink-600 px-6 py-3 text-white">
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Spirit & Truth</span>
              </div>
            </div>
          </div>

          {/* --- ENHANCED FLOATING LABEL --- */}
          <div className="absolute -bottom-10 left-6 md:left-12 flex items-center z-30 group/label">
            {/* The Leading Badge: Atmospheric Icon */}
            <div className="bg-black w-16 h-16 flex items-center justify-center shadow-2xl relative overflow-hidden">
              {/* Pulsing ring animation */}
              <div className="absolute inset-0 border-2 border-amber-500/50 rounded-full animate-ping opacity-0 group-hover/label:opacity-100 transition-opacity"></div>
              <div className="relative z-10 text-amber-500">
                 <div className="w-6 h-6 rounded-full border-2 border-amber-500 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-pink-600 rounded-full"></div>
                 </div>
              </div>
            </div>

            {/* The Glassmorphism Text Box */}
            <div className="bg-black/95 backdrop-blur-md text-white py-4 px-8 shadow-2xl flex flex-col justify-center border-b-4 border-pink-600">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-[8px] font-black uppercase tracking-[0.6em] text-amber-500">Ministry Core</span>
                <div className="h-px w-8 bg-zinc-700"></div>
              </div>
              <span className="text-sm font-black uppercase tracking-[0.2em] leading-none whitespace-nowrap">
                Presence & <span className="text-pink-600">Melody</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* --- CORE CONTENT SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 py-28 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Column 1: Staggered Header */}
          <div className="lg:col-span-5" data-aos="fade-right">
            <div className="relative">
              <span className="text-pink-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">A Sound Of Worship</span>
              <h1 className="text-6xl md:text-8xl font-black text-black uppercase tracking-tighter leading-none mb-2">
                Pure
              </h1>
              <h1 className="text-6xl md:text-8xl font-black text-amber-500 uppercase tracking-tighter leading-none ml-8 lg:ml-16">
                Worship
              </h1>
            </div>
            
            <div className="mt-12 space-y-4">
              <h2 className="text-xl font-bold uppercase tracking-tight text-zinc-400 leading-tight">
                Leading Hearts into God’s <br /> Presence through Music
              </h2>
              <div className="flex gap-1 items-center">
                 <div className="w-12 h-1 bg-black"></div>
                 <div className="w-12 h-1 bg-pink-600"></div>
                 <div className="w-12 h-1 bg-amber-500"></div>
              </div>
            </div>
          </div>

          {/* Column 2: Narrative & Feature Evolution */}
          <div className="lg:col-span-7 space-y-12" data-aos="fade-left">
            <div className="text-zinc-600 text-lg md:text-xl font-light leading-relaxed space-y-8">
              <p>
                The <strong className="text-black font-bold uppercase tracking-widest text-sm">Praise & Worship Department</strong> at Zoe Worship Centre is devoted to creating an atmosphere where hearts connect with God through music and worship.
              </p>
              <p>
                Our mission is to inspire every member to engage in <span className="text-black font-medium border-b-2 border-pink-600 pb-1">heartfelt worship</span>, deepening their relationship with Christ and fostering a spirit-filled church community.
              </p>
            </div>

            {/* Feature Grid (Rhythmic Style) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-zinc-100">
              {[
                { title: "Congregational Leading", desc: "Guiding the assembly", color: "bg-pink-600" },
                { title: "Musician Training", desc: "Excellence in skill", color: "bg-black" },
                { title: "Live Sessions", desc: "Spontaneous worship", color: "bg-amber-500" }
              ].map((item, i) => (
                <div key={i} className="group cursor-default relative pl-6 border-l border-zinc-100 hover:border-pink-600 transition-colors duration-500">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-black mb-1">
                    {item.title}
                  </h4>
                  <p className="text-[10px] text-zinc-400 uppercase tracking-tighter font-medium">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Depth Note */}
            <div className="p-10 border border-zinc-100 bg-zinc-50 relative overflow-hidden group/note">
               <div className="absolute right-0 bottom-0 w-24 h-24 bg-pink-600/5 -mb-10 -mr-10 rounded-full group-hover/note:scale-150 transition-transform duration-700"></div>
               <p className="text-zinc-500 text-sm font-light leading-relaxed italic">
                 "Through regular rehearsals, training vocalists, and live worship sessions, we foster an environment where the Holy Spirit moves freely."
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- DECORATIVE MOTIF --- */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-center opacity-20">
            <div className="flex gap-12 items-center">
              <div className="w-16 h-px bg-zinc-300"></div>
              <div className="text-[10px] font-black uppercase tracking-[0.8em] text-zinc-400">Praise / Worship / Harmony</div>
              <div className="w-16 h-px bg-zinc-300"></div>
            </div>
        </div>
      </section>

      {/* FOOTER BAR */}
      
    </div>
  );
}