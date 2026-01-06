import React from "react";
import youthImg from "../../../assets/youths.jpeg";

export default function YouthDepartment() {
  return (
    <div className="bg-white min-h-screen">
      {/* --- CINEMATIC HERO SECTION --- */}
      <section className="relative px-6 pt-12 lg:pt-20">
        <div className="max-w-7xl mx-auto relative group">
          <div className="overflow-hidden shadow-2xl relative">
            <div className="aspect-[21/9] w-full relative">
              <img
                src={youthImg}
                alt="Youth Department"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Dynamic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-black/40"></div>
            </div>
            
            {/* Top Right Accent Badge */}
            <div className="absolute top-0 right-0 flex">
              <div className="bg-amber-500 w-12 h-12 flex items-center justify-center text-black font-black italic text-xl">Z</div>
              <div className="bg-pink-600 px-6 py-3 text-white">
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Bold & Fearless</span>
              </div>
            </div>
          </div>

          {/* Floating Label */}
          <div className="absolute bottom-12 left-0 md:-left-4 bg-black text-white px-8 py-3 shadow-xl z-20">
            <span className="text-[10px] font-black uppercase tracking-[0.5em]">Generational impact</span>
          </div>
        </div>
      </section>

      {/* --- CORE CONTENT SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-5" data-aos="fade-right">
            <div className="mb-8">
              <span className="text-pink-600 text-xs font-black uppercase tracking-[0.5em] mb-4 block">Future Leaders</span>
              <h1 className="text-6xl md:text-8xl font-black text-black uppercase tracking-tighter leading-[0.85]">
                Youth <br />
                <span className="text-amber-500">Ministry</span>
              </h1>
            </div>
            <h2 className="text-xl font-bold uppercase tracking-tight text-zinc-900 mb-8 max-w-sm leading-tight">
              Empowering Young Adults in Faith and Leadership
            </h2>
            <div className="flex gap-2">
               <div className="w-16 h-2 bg-black"></div>
               <div className="w-4 h-2 bg-pink-600"></div>
            </div>
          </div>

          {/* Right Column: Narrative & Focus Areas */}
          <div className="lg:col-span-7 space-y-12" data-aos="fade-left">
            <div className="text-zinc-600 text-lg md:text-xl font-light leading-relaxed space-y-8">
              <p>
                The <strong className="text-black font-bold">Youth Department</strong> at Zoe Worship Centre is designed to engage and inspire young adults to grow spiritually, develop leadership skills, and make a meaningful impact in their communities.
              </p>
              <p className="text-black font-medium">
                Our goal is to equip youth with strong faith, practical skills, and a heart for service 
                so they can thrive and lead effectively in church, school, and society.
              </p>
            </div>

            {/* Interactive Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-10 border-t border-zinc-100">
              {[
                { title: "Spiritual Formation", desc: "Building a foundation", accent: "bg-pink-600" },
                { title: "Leadership Dev", desc: "Unlocking potential", accent: "bg-amber-500" },
                { title: "Active Service", desc: "Impacting society", accent: "bg-black" }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-zinc-50 hover:bg-white hover:shadow-xl transition-all duration-300 group">
                  <div className={`w-8 h-1 ${item.accent} mb-4 group-hover:w-full transition-all duration-500`}></div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-black mb-1">
                    {item.title}
                  </h4>
                  <p className="text-[10px] text-zinc-900 uppercase tracking-tighter">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Contextual Note */}
            <div className="flex items-start gap-4 p-6 border border-zinc-100 italic text-sm text-zinc-500 font-light">
               <span className="text-amber-500 font-black text-2xl leading-none">“</span>
               <p>Through dynamic events, mentorship programs, and community service, we create a space where young believers build lifelong character.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- DECORATIVE MOTIF --- */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-8 opacity-80">
            <div className="text-[10px] font-black uppercase tracking-[1em] text-pink-900 whitespace-nowrap">Passion / Purpose</div>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-300 to-transparent"></div>
        </div>
      </section>

     
    </div>
  );
}