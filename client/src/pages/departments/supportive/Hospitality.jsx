import React from "react";
import hospitalityImg from "../../../assets/hospitality.jpeg";

export default function HospitalityDept() {
  return (
    <div className="bg-white min-h-screen">
      {/* --- CINEMATIC HERO SECTION --- */}
      <section className="relative px-6 pt-12 lg:pt-20">
        <div className="max-w-7xl mx-auto relative group">
          <div className="overflow-hidden shadow-2xl relative">
            <div className="aspect-[21/9] w-full relative">
              <img
                src={hospitalityImg}
                alt="Hospitality Department"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Soft Warm Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-black/20"></div>
            </div>
            
            {/* Top Right Accent Badge */}
            <div className="absolute top-0 right-0 flex">
              <div className="bg-pink-600 w-12 h-12 flex items-center justify-center text-white font-black italic text-xl">Z</div>
              <div className="bg-amber-500 px-6 py-3 text-black">
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Service & Love</span>
              </div>
            </div>
          </div>

          {/* --- ENHANCED FLOATING LABEL --- */}
          <div className="absolute -bottom-10 left-6 md:left-12 flex items-center z-30 group/label">
            {/* The Leading Badge */}
            <div className="bg-pink-600 w-16 h-16 flex items-center justify-center shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-white/20 scale-0 group-hover/label:scale-150 transition-transform duration-700 rounded-full"></div>
              <div className="relative z-10 text-white">
                 {/* Circular "Welcome" Motif */}
                 <div className="w-6 h-6 rounded-full border-2 border-white group-hover/label:scale-110 transition-transform duration-500 flex items-center justify-center">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                 </div>
              </div>
            </div>

            {/* The Glassmorphism Text Box */}
            <div className="bg-black/90 backdrop-blur-md text-white py-4 px-8 shadow-2xl flex flex-col justify-center border-b-4 border-amber-500">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-[8px] font-black uppercase tracking-[0.6em] text-pink-500">Culture of Care</span>
                <div className="h-px w-8 bg-zinc-700"></div>
              </div>
              <span className="text-sm font-black uppercase tracking-[0.2em] leading-none whitespace-nowrap">
                Excellence & <span className="text-amber-500">Grace</span>
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
              <span className="text-amber-500 text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">The First Impression</span>
              <h1 className="text-6xl md:text-8xl font-black text-black uppercase tracking-tighter leading-none mb-2">
                Warm
              </h1>
              <h1 className="text-6xl md:text-8xl font-black text-pink-600 uppercase tracking-tighter leading-none ml-8 lg:ml-16">
                Welcome
              </h1>
            </div>
            
            <div className="mt-12 space-y-4">
              <h2 className="text-xl font-bold uppercase tracking-tight text-zinc-400 leading-tight">
                Serving the Body of Christ <br /> with Excellence and Love
              </h2>
              <div className="flex gap-2">
                 <div className="w-16 h-2 bg-black"></div>
                 <div className="w-4 h-2 bg-amber-500"></div>
              </div>
            </div>
          </div>

          {/* Column 2: Narrative & Feature Evolution */}
          <div className="lg:col-span-7 space-y-12" data-aos="fade-left">
            <div className="text-zinc-600 text-lg md:text-xl font-light leading-relaxed space-y-8">
              <p>
                The <strong className="text-black font-bold uppercase tracking-widest text-sm">Hospitality Department</strong> at Zoe Worship Centre is committed to creating a welcoming and warm environment for everyone who walks through our doors.
              </p>
              <p>
                Our mission is to make every interaction a reflection of Christ’s love, serving the community with joy, dedication, and a culture of kindness.
              </p>
            </div>

            {/* Feature Grid (Editorial Style) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-zinc-100">
              {[
                { title: "Valued & Cared", desc: "For every visitor", color: "bg-pink-600" },
                { title: "Smooth Logistics", desc: "Support for events", color: "bg-amber-500" },
                { title: "Kindness & Respect", desc: "Fostering culture", color: "bg-black" }
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

            {/* Signature Box */}
            <div className="p-8 bg-zinc-50 border-l-4 border-pink-600 italic text-sm text-zinc-500 font-light">
               "We ensure that the first and last impression of Zoe Worship Centre is one of God's immense love and welcoming grace."
            </div>
          </div>
        </div>
      </section>

      {/* --- DECORATIVE MOTIF --- */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-center opacity-20">
            <div className="flex gap-8 items-center">
              <div className="w-20 h-px bg-zinc-300"></div>
              <div className="text-[10px] font-black uppercase tracking-[0.8em] text-zinc-400">Kindness / Respect / Excellence</div>
              <div className="w-20 h-px bg-zinc-300"></div>
            </div>
        </div>
      </section>

      
    </div>
  );
}