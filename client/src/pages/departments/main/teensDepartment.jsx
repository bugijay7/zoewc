import React from "react";
import teenImg from "../../../assets/teen.jpeg";

export default function TeensDepartment() {
  return (
    <div className="bg-white min-h-screen">
      {/* --- PREMIUM HERO SECTION --- */}
      <section className="relative px-6 pt-12 lg:pt-20">
        <div className="max-w-7xl mx-auto relative group">
          {/* Decorative Background Element */}
          <div className="absolute -top-4 -right-4 w-64 h-64 bg-zinc-50 -z-10 group-hover:bg-amber-50 transition-colors duration-700"></div>
          
          <div className="aspect-[21/9] w-full overflow-hidden shadow-2xl relative">
            <img
              src={teenImg}
              alt="Teens Department"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Minimalist Border Overlay */}
            <div className="absolute inset-8 border border-white/20 pointer-events-none"></div>
          </div>

          {/* Floating Label */}
          <div className="absolute bottom-12 left-0 md:-left-4 bg-black text-white px-8 py-3 shadow-xl z-20">
            <span className="text-[10px] font-black uppercase tracking-[0.5em]">Identity & Purpose</span>
          </div>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Column 1: Staggered Heading */}
          <div className="lg:col-span-5" data-aos="fade-right">
            <div className="relative">
              <span className="text-amber-500 text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Building Foundations</span>
              <h1 className="text-6xl md:text-8xl font-black text-black uppercase tracking-tighter leading-none mb-2">
                Teens
              </h1>
              <h1 className="text-6xl md:text-8xl font-black text-pink-600 uppercase tracking-tighter leading-none ml-8 lg:ml-16">
                Ministry
              </h1>
            </div>
            
            <div className="mt-12 space-y-4">
              <h2 className="text-xl font-bold uppercase tracking-tight text-zinc-400 leading-tight">
                Guiding Teens to Grow in <br /> Faith and Character
              </h2>
              <div className="h-1.5 w-32 bg-gradient-to-r from-black via-pink-600 to-amber-500"></div>
            </div>
          </div>

          {/* Column 2: Narrative & Bullet Evolution */}
          <div className="lg:col-span-7 space-y-12" data-aos="fade-left">
            <div className="text-zinc-600 text-lg md:text-xl font-light leading-relaxed space-y-8">
              <p>
                The <strong className="text-black font-bold uppercase tracking-widest text-sm">Teens Department</strong> at Zoe Worship Centre is focused on nurturing teenagers in their spiritual journey, helping them develop strong values, and empowering them to live purpose-driven lives.
              </p>
              <p>
                Our mission is to equip teens with a <span className="text-black font-medium underline decoration-pink-600 underline-offset-4 decoration-2">firm foundation in Christ</span>, preparing them to navigate life’s challenges with faith, wisdom, and confidence.
              </p>
            </div>

            {/* Feature List (Editorial Style) */}
            <div className="space-y-8 pt-8 border-t border-zinc-100">
              {[
                { title: "Spiritual Growth", desc: "Biblical understanding and foundation", icon: "01" },
                { title: "Life Skills", desc: "Building character and resilience", icon: "02" },
                { title: "Peer Mentorship", desc: "Community engagement and support", icon: "03" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <span className="text-xs font-black text-zinc-200 group-hover:text-amber-500 transition-colors duration-300">
                    {item.icon}
                  </span>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-[0.2em] text-black mb-1">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-zinc-400 uppercase tracking-wider font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Fellowship Box */}
            <div className="p-8 border border-zinc-100 relative overflow-hidden bg-zinc-50/50">
               <div className="absolute top-0 right-0 w-1 h-full bg-amber-500"></div>
               <p className="text-zinc-500 text-sm font-light leading-relaxed">
                 Through interactive programs, mentorship, and fellowship, we create an environment where every teen feels seen, heard, and valued.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- MINIMALIST FOOTER DECOR --- */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto flex justify-center opacity-20">
            <div className="flex gap-12 items-center">
              <div className="w-12 h-px bg-zinc-400"></div>
              <div className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400">Faith / Wisdom / Confidence</div>
              <div className="w-12 h-px bg-zinc-400"></div>
            </div>
        </div>
      </section>

     
      
    </div>
  );
}