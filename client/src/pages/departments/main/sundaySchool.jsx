import React from "react";
import sundaySchoolImg from "../../../assets/sunday-school.jfif";

export default function SundaySchoolSection() {
  return (
    <div className="bg-white min-h-screen">
      {/* --- CINEMATIC HERO SECTION --- */}
      <section className="relative px-6 pt-12 lg:pt-20">
        <div className="max-w-7xl mx-auto relative group">
          <div className="overflow-hidden shadow-2xl relative">
            <div className="aspect-[21/9] w-full relative">
              <img
                src={sundaySchoolImg}
                alt="Zoe Sunday School"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Soft Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-black/30"></div>
            </div>
            
            {/* Top Right Accent Badge */}
            <div className="absolute top-0 right-0 flex">
              <div className="bg-pink-600 w-12 h-12 flex items-center justify-center text-white font-black italic text-xl">Z</div>
              <div className="bg-amber-500 px-6 py-3 text-black">
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">The Next Generation</span>
              </div>
            </div>
          </div>

          {/* --- FLOATING LABEL COMPONENT --- */}
          <div className="absolute -bottom-8 left-12 hidden md:flex items-center bg-black text-white p-1 pr-10 shadow-2xl z-20 overflow-hidden group/label">
            <div className="bg-pink-600 p-4 mr-6">
               <div className="w-6 h-6 rounded-full border-2 border-white group-hover/label:scale-125 transition-transform duration-500"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] font-black uppercase tracking-[0.5em] text-pink-500 mb-1">Our Future</span>
              <span className="text-sm font-black uppercase tracking-widest leading-none">Nurturing Hearts</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- CORE CONTENT SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Column 1: Staggered Heading */}
          <div className="lg:col-span-5" data-aos="fade-right">
            <div className="relative">
              <span className="text-amber-500 text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Zoe Sunday School</span>
              <h1 className="text-6xl md:text-8xl font-black text-black uppercase tracking-tighter leading-none mb-2">
                Young
              </h1>
              <h1 className="text-6xl md:text-8xl font-black text-pink-600 uppercase tracking-tighter leading-none ml-8 lg:ml-16">
                Hearts
              </h1>
            </div>
            
            <div className="mt-12 space-y-4">
              <h2 className="text-xl font-bold uppercase tracking-tight text-zinc-900 leading-tight">
                Building a Foundation of <br /> Faith and Abundant Life
              </h2>
              <div className="flex gap-1">
                <div className="h-1.5 w-16 bg-black"></div>
                <div className="h-1.5 w-4 bg-amber-500"></div>
                <div className="h-1.5 w-4 bg-pink-600"></div>
              </div>
            </div>
          </div>

          {/* Column 2: Narrative & Feature Evolution */}
          <div className="lg:col-span-7 space-y-12" data-aos="fade-left">
            <div className="text-zinc-600 text-lg md:text-xl font-light leading-relaxed space-y-8">
              <p>
                At <strong className="text-black font-bold uppercase tracking-widest text-sm">Zoe Worship Centre</strong>, our Sunday School is a vibrant space where children and teens grow in the knowledge and love of Christ.
              </p>
              <p>
                We help every child understand God’s Word and experience His abundant life. Our mission is to equip the next generation with faith, values, and a heart for service.
              </p>
            </div>

            {/* Feature Grid (Editorial Style) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-zinc-100">
              {[
                { title: "Interactive Lessons", desc: "Engaging the mind", color: "bg-pink-600" },
                { title: "Creative Activities", desc: "Expressing the spirit", color: "bg-amber-500" },
                { title: "Engaging Worship", desc: "Connecting with God", color: "bg-black" }
              ].map((item, i) => (
                <div key={i} className="group cursor-default">
                  <div className={`h-1 w-12 ${item.color} mb-4 group-hover:w-full transition-all duration-500`}></div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-black mb-1">
                    {item.title}
                  </h4>
                  <p className="text-[10px] text-zinc-900 uppercase tracking-tighter">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Quote/Vision Box */}
            <div className="p-10 bg-zinc-50 border-r-4 border-amber-500 text-right">
               <p className="text-zinc-500 text-sm font-light italic leading-relaxed">
                 "Fostering a foundation that will guide them throughout their lives, making the Word of God accessible and joyful."
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- DECORATIVE MOTIF --- */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between opacity-80">
            <div className="h-px flex-1 bg-zinc-300"></div>
            <div className="px-10 text-[10px] font-black uppercase tracking-[0.6em] text-pink-900 whitespace-nowrap">Grow / Love / Serve</div>
            <div className="h-px flex-1 bg-zinc-300"></div>
        </div>
      </section>

     
      
    </div>
  );
}