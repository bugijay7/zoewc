import React from "react";
import { Heart, Music, Users, Video, Home, Shield, ChevronRight } from "lucide-react";

export default function SupportiveDepartments() {
  const departments = [
    { 
      name: "Intercessory Department", 
      link: "/departments/supportive/intercessory", 
      desc: "A dedicated team committed to prayer and spiritual support, interceding for the church, members, and community.", 
      icon: Heart,
      accent: "text-pink-600"
    },
    { 
      name: "Praise and Worship Department", 
      link: "/departments/supportive/praiseAndWorship", 
      desc: "Leading the church in heartfelt worship through music, song, and creative expression.", 
      icon: Music,
      accent: "text-amber-500"
    },
    { 
      name: "Anagkazo Department", 
      link: "/departments/supportive/anagkazo", 
      desc: "Focused on outreach and evangelism, equipping members to share God's love effectively.", 
      icon: Users,
      accent: "text-pink-600"
    },
    { 
      name: "Media Department", 
      link: "/departments/supportive/media", 
      desc: "Capturing, streaming, and sharing church events to reach local and global audiences.", 
      icon: Video,
      accent: "text-amber-500"
    },
    { 
      name: "Hospitality Department", 
      link: "/departments/supportive/hospitality", 
      desc: "Ensuring every visitor and member feels welcomed and cared for during church activities.", 
      icon: Home,
      accent: "text-pink-600"
    },
    { 
      name: "Ushering Protocol Department", 
      link: "/departments/supportive/ushering", 
      desc: "Maintaining order, safety, and care during services and church events.", 
      icon: Shield,
      accent: "text-amber-500"
    },
  ];

  return (
    <div className="bg-amber-600 min-h-screen font-sans antialiased text-black">
      {/* --- HERO SECTION --- */}
      <header className="relative py-24 px-6 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
          <div data-aos="fade-right" className="max-w-2xl pt-20">
            <span className="text-pink-600 text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">
              Backbone of Ministry
            </span>
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6">
              Supportive <br /> <span className="text-zinc-200 text-outline">Departments</span>
            </h1>
            <p className="text-zinc-100 text-lg font-light leading-relaxed italic">
              Meet our supportive departments that help keep the ministry thriving
              and assist in every aspect of church life.
            </p>
          </div>
          <div className="hidden lg:block text-right pb-4" data-aos="fade-left">
             <p className="text-[10px] font-black uppercase tracking-[0.8em] text-zinc-300 transform rotate-90 origin-right translate-y-20">
                Service / Faith
             </p>
          </div>
        </div>
      </header>

      {/* --- DEPARTMENTS GRID --- */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-zinc-100">
          {departments.map((dept, index) => {
            const Icon = dept.icon;

            return (
              <div 
                key={index} 
                data-aos="fade-up" 
                data-aos-delay={index * 50}
                className="group relative p-12 border-r border-b border-zinc-100 hover:bg-zinc-50 transition-all duration-500 flex flex-col justify-between h-[450px]"
              >
                <div>
                  <div className={`mb-8 transition-transform duration-500 group-hover:scale-110 ${dept.accent}`}>
                    <Icon size={40} strokeWidth={1.5} />
                  </div>
                  <h2 className="text-2xl font-black uppercase tracking-tighter mb-6 group-hover:text-pink-600 transition-colors">
                    {dept.name}
                  </h2>
                  <p className="text-zinc-100 text-sm leading-relaxed font-light mb-8">
                    {dept.desc}
                  </p>
                </div>

                <button 
                  onClick={() => (window.location.href = dept.link)}
                  className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-black group-hover:text-amber-500 transition-colors"
                >
                  Learn More <ChevronRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </button>

                {/* Corner Accent for Luxury feel */}
                <div className="absolute top-4 right-4 text-[10px] font-black text-zinc-100 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
                   Department {index + 1}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* --- JOIN CTA SECTION --- */}
      <section className="bg-black py-32 px-6 overflow-hidden relative" data-aos="zoom-in">
        {/* Background Text Effect */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
            <h2 className="text-[20vw] font-black text-white uppercase whitespace-nowrap">SERVE THE LORD</h2>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="w-16 h-px bg-amber-500 mx-auto mb-10"></div>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8 leading-tight">
            Join a Department <span className="text-pink-600">Today</span>
          </h2>
          <p className="text-zinc-400 text-lg font-light leading-relaxed mb-12 max-w-2xl mx-auto">
            Discover your calling and serve alongside fellow believers. Every gift
            and talent has a place in God's kingdom.
          </p>
          
        </div>
      </section>

     
    </div>
  );
}