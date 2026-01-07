import React from "react";
import { Link } from "react-router-dom";
import ministryBg from "../assets/ministry.jpeg";

import {
  FaUsers,
  FaHeart,
  FaHandsHelping,
  FaMotorcycle,
  FaMusic,
  FaGlobe,
  FaBible,
  FaChild,
  FaHandshake,
  FaHome,
  FaChurch,
} from "react-icons/fa";

export default function Programs() {
  const programs = [
    { name: "Men’s Conference and Outreach", link: "/programs/MensConference", description: "Empowering men to lead with integrity, purpose, and spiritual strength through mentorship, outreach, and fellowship.", icon: <FaUsers />, accent: "border-black" },
    { name: "Women’s Conference and Outreach", link: "/programs/WomensConference", description: "Equipping women to live out their divine calling through prayer, empowerment, and community impact programs.", icon: <FaHeart />, accent: "border-pink-600" },
    { name: "Youth ITIG, Outreach and Luncheons", link: "/programs/YouthOutreachLuncheon", description: "Building the next generation through interactive teaching, innovation, and purposeful gatherings that ignite godly ambition.", icon: <FaBible />, accent: "border-amber-500" },
    { name: "Teens Vibes", link: "/programs/teenVibes", description: "A vibrant space for teenagers to connect, grow in faith, and find identity in Christ through fun and mentorship.", icon: <FaChild />, accent: "border-black" },
    { name: "Sunday School Vibes", link: "/programs/sundaySchoolVibes", description: "Nurturing children in the Word of God through engaging stories, music, and creative learning experiences.", icon: <FaHome />, accent: "border-pink-600" },
    { name: "Marriage Therapy", link: "/programs/marriageTherapy", description: "Providing couples with biblical guidance, healing, and tools to strengthen their love and communication.", icon: <FaHandshake />, accent: "border-amber-500" },
    { name: "Local and International Missions", link: "/programs/LocalInternatinalMissions", description: "Spreading the gospel locally and globally, reaching hearts through acts of compassion and evangelism.", icon: <FaGlobe />, accent: "border-black" },
    { name: "Hospitality for the Less Privileged", link: "/programs/ForTheLessPriviledged", description: "Serving our community with love by providing food, care, and support to those in need.", icon: <FaHandsHelping />, accent: "border-pink-600" },
    { name: "BodaBoda Empowerment", link: "/programs/BodaBodaEmpowernment", description: "Empowering riders spiritually and economically through discipleship, safety training, and business mentorship.", icon: <FaMotorcycle />, accent: "border-amber-500" },
    { name: "Breath of Worship", link: "/programs/breathOfWorship", description: "A dynamic worship experience that brings people closer to God through song, prayer, and prophetic expression.", icon: <FaMusic />, accent: "border-pink-600" },
    { name: "Anagkazo Campaign", link: "/programs/anagkazoCampaign", description: "A soul-winning campaign inspired by Luke 14:23 — compelling many to come to Christ through evangelism and outreach.", icon: <FaChurch />, accent: "border-black" },
  ];

  return (
    <div className="bg-amber-100 min-h-screen font-sans antialiased">
      {/* --- PREMIUM HERO SECTION --- */}
      <section className="relative h-[70vh] w-full overflow-hidden bg-black">
        <img 
          src={ministryBg} 
          alt="Ministry Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105 transition-transform duration-1000 group-hover:scale-100" 
        />
        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-amber-100"></div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center px-6 text-center">
          <div data-aos="fade-up" className="max-w-4xl">
            <span className="text-amber-500 text-[10px] font-black uppercase tracking-[0.6em] mb-6 block">
              Equipping & Empowering
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-4">
              Our <span className="text-pink-600">Programs</span>
            </h1>
            <div className="h-1 w-24 bg-white mx-auto mb-8"></div>
            <p className="text-zinc-200 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
              Explore our ministry programs designed to transform lives, strengthen
              families, and impact communities for the glory of God.
            </p>
          </div>
        </div>

        {/* Floating Scroll Badge */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
            <div className="flex flex-col items-center gap-2">
                <span className="text-[8px] text-zinc-400 uppercase tracking-widest font-bold">Discover</span>
                <div className="w-px h-12 bg-gradient-to-b from-zinc-400 to-transparent"></div>
            </div>
        </div>
      </section>

      {/* --- GRID LIST SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-32 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-x-12 md:gap-y-16">
          {programs.map((program, index) => (
            <div 
              key={index} 
              data-aos="fade-up" 
              data-aos-delay={index * 50}
              className={`group flex flex-col border-t-4 ${program.accent} pt-8 transition-all duration-500 hover:translate-y-[-8px]`}
            >
              {/* Icon & Category */}
              <div className="flex items-center justify-between mb-6 text-zinc-900 group-hover:text-black transition-colors">
                <div className="text-2xl">
                    {program.icon}
                </div>
                <span className="text-[9px] font-black uppercase tracking-[0.3em]">Program No. {index + 1}</span>
              </div>

              {/* Content */}
              <div className="flex-grow">
                <h2 className="text-2xl font-black uppercase tracking-tighter text-black mb-4 group-hover:text-pink-600 transition-colors duration-300">
                  {program.name}
                </h2>
                <p className="text-zinc-800 text-sm leading-relaxed mb-8 font-light italic">
                  {program.description}
                </p>
              </div>

             
            </div>
          ))}
        </div>
      </section>

      {/* --- DECORATIVE FOOTER DIVIDER --- */}
      <section className="pb-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center gap-6 opacity-90">
            <div className="h-px flex-1 bg-black"></div>
            <div className="text-[10px] font-black uppercase tracking-[1em] text-black whitespace-nowrap">Passion / Purpose / Impact</div>
            <div className="h-px flex-1 bg-black"></div>
        </div>
      </section>

     
    </div>
  );
}