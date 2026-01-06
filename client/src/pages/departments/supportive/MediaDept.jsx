import React from "react";
import mediaImg from "../../../assets/media.jpeg";

export default function MediaDept() {
  return (
    <div className="bg-white min-h-screen">
      {/* --- CINEMATIC HERO SECTION --- */}
      <section className="relative px-6 pt-12 lg:pt-20">
        <div className="max-w-7xl mx-auto relative group">
          <div className="overflow-hidden shadow-2xl relative">
            <div className="aspect-[21/9] w-full relative">
              <img
                src={mediaImg}
                alt="Media / Sound System Department"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Technical Blueprint Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-black/60"></div>
            </div>
            
            {/* Top Right Technical Badge */}
            <div className="absolute top-0 right-0 flex">
              <div className="bg-pink-600 w-12 h-12 flex items-center justify-center text-white font-black italic text-xl">Z</div>
              <div className="bg-black px-6 py-3 text-white border-l border-white/10">
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Tech & Production</span>
              </div>
            </div>
          </div>

          {/* --- ENHANCED FLOATING LABEL --- */}
          <div className="absolute -bottom-10 left-6 md:left-12 flex items-center z-30 group/label">
            {/* The Leading Badge: Technical Icon */}
            <div className="bg-pink-600 w-16 h-16 flex items-center justify-center shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20 scale-0 group-hover/label:scale-150 transition-transform duration-700 rounded-full"></div>
              <div className="relative z-10 text-white">
                 {/* Waveform/Technical Motif */}
                 <div className="flex gap-1 items-end h-5">
                    <div className="w-1 h-3 bg-white group-hover/label:h-5 transition-all duration-300"></div>
                    <div className="w-1 h-5 bg-white group-hover/label:h-2 transition-all duration-300"></div>
                    <div className="w-1 h-2 bg-white group-hover/label:h-4 transition-all duration-300"></div>
                 </div>
              </div>
            </div>

            {/* The Glassmorphism Text Box */}
            <div className="bg-black/95 backdrop-blur-md text-white py-4 px-8 shadow-2xl flex flex-col justify-center border-b-4 border-amber-500">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-[8px] font-black uppercase tracking-[0.6em] text-pink-500">Infrastructure</span>
                <div className="h-px w-8 bg-zinc-700"></div>
              </div>
              <span className="text-sm font-black uppercase tracking-[0.2em] leading-none whitespace-nowrap">
                Innovation & <span className="text-amber-500">Clarity</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* --- CORE CONTENT SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 py-28 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Column 1: Technical Staggered Heading */}
          <div className="lg:col-span-5" data-aos="fade-right">
            <div className="relative">
              <span className="text-amber-500 text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Digital Excellence</span>
              <h1 className="text-6xl md:text-8xl font-black text-black uppercase tracking-tighter leading-none mb-2">
                Media
              </h1>
              <h1 className="text-6xl md:text-8xl font-black text-pink-600 uppercase tracking-tighter leading-none ml-8 lg:ml-16">
                Systems
              </h1>
            </div>
            
            <div className="mt-12 space-y-4">
              <h2 className="text-xl font-bold uppercase tracking-tight text-zinc-400 leading-tight">
                Enhancing Worship Through <br /> Advanced Technology
              </h2>
              <div className="flex items-center gap-3">
                 <div className="w-16 h-1 bg-black"></div>
                 <div className="w-2 h-2 rounded-full bg-pink-600 animate-pulse"></div>
                 <div className="flex-1 h-px bg-zinc-100"></div>
              </div>
            </div>
          </div>

          {/* Column 2: Narrative & Feature Evolution */}
          <div className="lg:col-span-7 space-y-12" data-aos="fade-left">
            <div className="text-zinc-600 text-lg md:text-xl font-light leading-relaxed space-y-8">
              <p>
                The <strong className="text-black font-bold uppercase tracking-widest text-sm">Media Department</strong> at Zoe Worship Centre is dedicated to using technology to enrich worship and facilitate communication.
              </p>
              <p>
                Our mission is to leverage media production to glorify God and connect our community, making every service a <span className="text-black font-medium border-b-2 border-amber-500 pb-1">meaningful and immersive experience</span>.
              </p>
            </div>

            {/* Feature Grid (Technical Style) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-zinc-100">
              {[
                { title: "Audio / Visual", desc: "High-quality immersion", color: "bg-pink-600" },
                { title: "Live Streaming", desc: "Global reach & recording", color: "bg-black" },
                { title: "Digital Engagement", desc: "Interactive programs", color: "bg-amber-500" }
              ].map((item, i) => (
                <div key={i} className="group border-l border-zinc-100 pl-6 py-2 hover:border-black transition-colors duration-500">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-black mb-1">
                    {item.title}
                  </h4>
                  <p className="text-[10px] text-zinc-400 uppercase tracking-tighter font-medium">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Immersive Note Box */}
            <div className="p-8 bg-zinc-900 text-white relative overflow-hidden">
               <div className="absolute left-0 top-0 h-full w-1 bg-pink-600"></div>
               <p className="text-zinc-400 text-sm font-light leading-relaxed tracking-wide">
                 "Leveraging audio, video, and digital media production to ensure that the message of the Gospel is heard with absolute clarity and excellence."
               </p>
               {/* Decorative digital dots */}
               <div className="absolute right-4 bottom-4 grid grid-cols-3 gap-1 opacity-20">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- DECORATIVE MOTIF --- */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-end opacity-20">
            <div className="flex gap-8 items-center">
              <div className="text-[10px] font-black uppercase tracking-[0.8em] text-zinc-400">Audio / Video / Production</div>
              <div className="w-24 h-px bg-black"></div>
            </div>
        </div>
      </section>

      {/* FOOTER BAR */}
     
    </div>
  );
}