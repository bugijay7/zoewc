import React from "react";
import womenImg from "../../../assets/women.jpeg";

export default function WomenDepartment() {
  return (
    <div className="bg-white min-h-screen">
      {/* --- HERO SECTION --- */}
      <section className="relative px-6 pt-12 lg:pt-20">
        <div className="max-w-7xl mx-auto overflow-hidden relative group">
          <div className="aspect-[21/9] w-full relative">
            <img
              src={womenImg}
              alt="Women's Department"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Elegant Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
          </div>
          {/* Subtle Label Overlay */}
          <div className="absolute bottom-0 right-0 bg-pink-600 text-white px-8 py-4">
            <span className="text-[10px] font-black uppercase tracking-[0.5em]">Grace & Influence</span>
          </div>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Title Area */}
          <div className="lg:col-span-5" data-aos="fade-right">
            <h1 className="text-5xl md:text-7xl font-black text-black uppercase tracking-tighter leading-none mb-6">
              Women's <br />
              <span className="text-pink-600">Ministry</span>
            </h1>
            <h2 className="text-xl font-bold uppercase tracking-tight text-zinc-900 mb-8 leading-tight">
              Empowering Women in <br /> Faith and Leadership
            </h2>
            <div className="w-24 h-2 bg-pink-600"></div>
          </div>

          {/* Description Area */}
          <div className="lg:col-span-7 space-y-12" data-aos="fade-left">
            <div className="text-zinc-600 text-lg md:text-xl font-light leading-relaxed space-y-8">
              <p>
                The <strong className="text-black font-bold uppercase tracking-wider">Women’s Department</strong> at Zoe Worship Centre is devoted to nurturing and 
                equipping women to grow spiritually, lead with wisdom, and impact their communities.
              </p>
              <p>
                Our mission is to raise women of faith, integrity, and influence who inspire 
                transformation in their families, church, and society.
              </p>
            </div>

            {/* Feature Grid (Converted from Bullets) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-zinc-100">
              {[
                { title: "Spiritual Growth", color: "bg-pink-600" },
                { title: "Mentorship", color: "bg-amber-500" },
                { title: "Community Service", color: "bg-black" }
              ].map((item, i) => (
                <div key={i} className="group">
                  <div className={`h-1 w-12 ${item.color} mb-4 group-hover:w-full transition-all duration-500`}></div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-black">
                    {item.title}
                  </h4>
                </div>
              ))}
            </div>

            <div className="p-8 bg-zinc-50 border-l-4 border-pink-600">
              <p className="text-zinc-500 text-sm font-light italic">
                "Through regular meetings, retreats, and outreach programs, we focus on building a sisterhood that reflects the heart of Christ."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- DECORATIVE MOTIF --- */}
      <section className="py-20 px-6 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center opacity-80">
            <div className="h-px flex-1 bg-zinc-200"></div>
            <div className="px-10 text-[10px] font-black uppercase tracking-[0.8em] text-pink-900 whitespace-nowrap">
                Virtue & Strength
            </div>
            <div className="h-px flex-1 bg-zinc-200"></div>
        </div>
      </section>

     
    </div>
  );
}