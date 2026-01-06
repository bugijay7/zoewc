import React, { useState } from 'react';
import { ChevronRight, Heart, Music, Users, Video, Home, Shield } from 'lucide-react';

import intercessoryImg from "../../assets/intercessory.jpeg";
import worshipImg from "../../assets/praise.jpg";
import evangelismImg from "../../assets/anagkazo.jpeg";
import mediaImg from "../../assets/media.jpeg";
import hospitalityImg from "../../assets/hospitality.jpeg";
import usheringImg from "../../assets/usher1.jpeg";

export default function SupportiveDepartments() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const departments = [
    { 
      name: "Intercessory Department",
      link: "/departments/supportive/intercessory",
      image: intercessoryImg,
      desc: "A dedicated team committed to prayer and spiritual support, interceding for the church, members, and community. Through continuous prayer meetings, counseling, and guidance, the Intercessory Department fosters a spiritually strong and united church body.",
      icon: Heart,
    },
    { 
      name: "Praise and Worship Department",
      link: "/departments/supportive/praiseAndWorship",
      image: worshipImg,
      desc: "Leading the church in heartfelt worship, this department creates an atmosphere of praise and adoration. Through music, song, and creative expression, they inspire the congregation to connect deeply with God and experience His presence in every service.",
      icon: Music,
    },
    { 
      name: "Anagkazo Department",
      link: "/departments/supportive/anagkazo",
      image: evangelismImg,
      desc: "Focused on outreach and evangelism, the Anagkazo Department brings the message of Christ to the community. Through ministry programs, outreach events, and personal engagement, they equip members to share God's love effectively.",
      icon: Users,
    },
    { 
      name: "Media Department",
      link: "/departments/supportive/media",
      image: mediaImg,
      desc: "Responsible for capturing, streaming, and sharing church events, the Media Department ensures that the ministry's message reaches both local and global audiences. They manage audio-visuals, live streaming, photography, and digital content production with excellence.",
      icon: Video,
    },
    { 
      name: "Hospitality Department",
      link: "/departments/supportive/hospitality",
      image: hospitalityImg,
      desc: "A welcoming team dedicated to making every visitor and member feel at home. The Hospitality Department ensures smooth logistics, warm greetings, and attentive service during all church activities, creating a loving and inclusive atmosphere.",
      icon: Home,
    },
    { 
      name: "Ushering Protocol Department",
      link: "/departments/supportive/ushering",
      image: usheringImg,
      desc: "Maintaining order, safety, and care during services, the Ushering Protocol Department guides members and guests with professionalism. They ensure that every service runs smoothly and that everyone experiences a respectful and organized environment.",
      icon: Shield,
    },
  ];

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-amber-100">
      {/* --- HERO SECTION --- */}
      <section className="bg-zinc-200 py-34 px-6 relative overflow-hidden md:pt-40">
        <div className="max-w-7xl mx-auto text-center relative z-10" data-aos="fade-down">
          <span className="text-pink-600 text-[10px] font-black uppercase tracking-[0.6em] mb-4 block">
            The Engines of Ministry
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-black uppercase tracking-tighter mb-6">
            Supportive <span className="text-amber-500 text-outline">Departments</span>
          </h1>
          <p className="max-w-2xl mx-auto text-zinc-900 font-light text-lg leading-relaxed">
            Meet our supportive departments that help keep the ministry thriving and assist in every aspect of church life. Together, we serve with excellence and love.
          </p>
        </div>
        {/* Subtle geometric background accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-zinc-900/50 to-transparent pointer-events-none"></div>
      </section>

      {/* --- DEPARTMENTS GRID --- */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => {
            const IconComponent = dept.icon;
            const isHovered = hoveredCard === index;
            
            return (
              <div 
                key={index} 
                className="group relative bg-white border border-zinc-100 flex flex-col transition-all duration-500"
                style={{ 
                  transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
                  boxShadow: isHovered ? '0 25px 50px -12px rgba(0, 0, 0, 0.08)' : 'none'
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                {/* Image Wrap */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={dept.image} 
                    alt={dept.name} 
                    className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                  
                  {/* Floating Icon */}
                  <div className="absolute -bottom-6 right-8 w-14 h-14 bg-black flex items-center justify-center text-white shadow-xl transition-colors group-hover:bg-pink-600">
                    <IconComponent size={24} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 pt-12 flex flex-col flex-grow">
                  <h2 className="text-sm font-black uppercase tracking-tight text-pink-500 mb-4">
                    {dept.name}
                  </h2>
                  <p className="text-zinc-900 text-sm leading-relaxed font-light mb-8 flex-grow">
                    {dept.desc}
                  </p>
                  
                  <button 
                    onClick={() => window.location.href = dept.link}
                    className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-amber-500 group/btn hover:text-pink-600 transition-colors"
                  >
                    Learn More 
                    <ChevronRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="bg-zinc-50 py-24 px-6">
        <div className="max-w-4xl mx-auto bg-black p-12 md:p-20 text-center relative" data-aos="zoom-in">
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500 flex items-center justify-center -translate-y-1/2 translate-x-1/2 rotate-45">
            <div className="-rotate-45 text-black">
                <Users size={32} />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6 leading-none">
            Join a <span className="text-pink-600 underline decoration-white/20 underline-offset-8">Department</span> Today
          </h2>
          <p className="text-zinc-900 text-lg font-light mb-10 max-w-xl mx-auto">
            Discover your calling and serve alongside fellow believers. Every gift and talent has a place in God's kingdom.
          </p>
          
        </div>
      </section>

      {/* --- FOOTER STRIPE --- */}
      <div className="h-2 w-full flex">
        <div className="flex-1 bg-amber-500"></div>
        <div className="flex-1 bg-pink-600"></div>
        <div className="flex-1 bg-black"></div>
      </div>
    </div>
  );
}