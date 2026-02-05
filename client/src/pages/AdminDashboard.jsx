import React from "react";
import { Link } from "react-router-dom";
import {
  FaPlusCircle,
  FaCalendarAlt,
  FaBookOpen,
  FaMicrophone,
  FaEnvelope,
  FaUserShield,
} from "react-icons/fa";

function AdminDashboard() {
  const cards = [
    {
      name: "Create Event",
      desc: "Post new church activities",
      icon: <FaPlusCircle />,
      link: "/dashboard/create-event",
      color: "bg-amber-500",
    },
    {
      name: "Manage Events",
      desc: "Edit or remove existing events",
      icon: <FaCalendarAlt />,
      link: "/dashboard/manage-events",
      color: "bg-black",
    },
    {
      name: "Upload Sermon",
      desc: "Share new video teachings",
      icon: <FaMicrophone />,
      link: "/dashboard/create-sermon",
      color: "bg-pink-600",
    },
    {
      name: "Manage Sermons",
      desc: "Archive and library control",
      icon: <FaBookOpen />,
      link: "/dashboard/manage-sermons",
      color: "bg-black",
    },
    {
      name: "View Messages",
      desc: "Read member inquiries",
      icon: <FaEnvelope />,
      link: "/dashboard/messages",
      color: "bg-zinc-800",
    },
  ];

  return (
    <div className="min-h-screen bg-white p-6 md:p-12 lg:p-20 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-pink-600 text-white rounded-full">
              <FaUserShield size={14} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">
              Authorized Personnel Only
            </span>
          </div>
          
          <h2 className="text-7xl md:text-8xl font-black uppercase tracking-tighter text-black leading-[0.8]">
            Admin <br />
            <span className="text-transparent stroke-text">Dashboard</span>
          </h2>
          <p className="max-w-md mt-8 text-zinc-500 font-medium leading-relaxed">
            Centralized control for Zoe Worship Centre. Manage your digital footprint, 
            broadcast sermons, and stay connected with the congregation.
          </p>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <Link 
              to={card.link} 
              key={index}
              className="group relative overflow-hidden bg-zinc-50 border border-zinc-100 p-10 flex flex-col justify-between transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] hover:-translate-y-2"
            >
              {/* Icon & Label */}
              <div className="relative z-10">
                <div className={`w-14 h-14 ${card.color} text-white flex items-center justify-center text-2xl mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  {card.icon}
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tighter text-black mb-2">
                  {card.name}
                </h3>
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
                  {card.desc}
                </p>
              </div>

              {/* Decorative Arrow */}
              <div className="mt-12 flex justify-end transition-transform duration-500 group-hover:translate-x-2">
                <span className="text-xs font-black uppercase tracking-widest text-black flex items-center gap-2">
                  Open Module <span className="text-pink-600">→</span>
                </span>
              </div>

              {/* Hover Background Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-zinc-100 rounded-full -mr-16 -mt-16 transition-all duration-500 group-hover:bg-zinc-200 group-hover:scale-[3]"></div>
            </Link>
          ))}

          {/* Settings/System Placeholder Card */}
          <div className="border-2 border-dashed border-zinc-100 p-10 flex flex-col items-center justify-center text-center opacity-50 grayscale hover:grayscale-0 transition-all cursor-not-allowed">
            <div className="text-zinc-300 text-4xl mb-4 italic font-black uppercase tracking-tighter">ZWC</div>
            <p className="text-[9px] font-black uppercase tracking-widest text-zinc-400">System v2.4.0 <br/> All systems operational</p>
          </div>
        </div>

        {/* Global Footer Styling */}
        <style dangerouslySetInnerHTML={{ __html: `
          .stroke-text {
            -webkit-text-stroke: 2px black;
          }
        `}} />
      </div>
    </div>
  );
}

export default AdminDashboard;