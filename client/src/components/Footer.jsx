import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-20 pb-10 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* --- MAIN GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* ABOUT SECTION */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-1 h-6 bg-pink-600"></div>
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-zinc-400">About</h2>
            </div>
            <ul className="space-y-4">
              {[
                { label: "Know Us", path: "/about/knowUs" },
                { label: "Our History", path: "/about/history" },
                { label: "Leadership", path: "/about/leadership" },
                { label: "Faith Statement", path: "/about/faithStatement" },
              ].map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.path} 
                    className="text-sm font-light text-zinc-100 hover:text-white hover:pl-2 transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* DEPARTMENTS SECTION */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-1 h-6 bg-amber-500"></div>
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-zinc-400">Departments</h2>
            </div>
            <ul className="space-y-4">
              {[
                { label: "Main Departments", path: "/departments/main" },
                { label: "Supportive Departments", path: "/departments/supportive" },
                { label: "Church Programs", path: "/programs" },
                { label: "Our Services", path: "/services" },
              ].map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.path} 
                    className="text-sm font-light text-zinc-100 hover:text-white hover:pl-2 transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* EVENTS & MEDIA SECTION */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-1 h-6 bg-white"></div>
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-zinc-400">Events & Media</h2>
            </div>
            <ul className="space-y-4">
              {[
                { label: "Upcoming Events", path: "/events/eventList" },
                { label: "Live Stream", path: "/live" },
                { label: "Sermons", path: "/sermons" },
                { label: "New Visitors", path: "/visitors" },
              ].map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.path} 
                    className="text-sm font-light text-zinc-100 hover:text-white hover:pl-2 transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONNECT SECTION */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-1 h-6 bg-pink-600"></div>
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-zinc-100">Connect</h2>
            </div>
            <ul className="space-y-4">
              <li>
                <Link to="/contact" className="text-sm font-light text-zinc-100 hover:text-white transition-all">Contact Us</Link>
              </li>
              <li>
                <Link to="/donate" className="inline-block bg-amber-500 text-black px-4 py-2 text-[10px] font-black uppercase tracking-widest hover:bg-white transition-colors">
                  Give / Donate
                </Link>
              </li>
              <li>
                <Link to="/new" className="text-sm font-light text-zinc-100 hover:text-white transition-all">Are You New?</Link>
              </li>
              <li className="pt-2">
                <a 
                  href="mailto:zoeworshipcentrekinoo@gmail.com"
                  className="text-[10px] font-bold text-pink-600 tracking-tighter hover:text-white transition-colors break-all"
                >
                  ZOEWORSHIPCENTREKINOO@GMAIL.COM
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* --- DIVIDER --- */}
        <div className="relative h-px w-full bg-zinc-800 mb-10">
          <div className="absolute left-0 top-0 h-px w-20 bg-amber-500"></div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Copyright & Credits */}
          <div className="text-center md:text-left order-2 md:order-1">
            <p className="text-[10px] font-medium text-zinc-200 uppercase tracking-widest leading-loose">
              © {currentYear} <span className="text-white font-black">Zoe Worship Centre church – Kenya</span>. All rights reserved.
            </p>
            <p className="text-[9px] text-zinc-200 uppercase tracking-[0.3em] mt-1">
              Architecture by{" "}
              <a
                href="https://yohanlabs.online"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-500 transition-colors"
              >
                Yohan Labs
              </a>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 order-1 md:order-2">
            {[
              { icon: <FaFacebookF />, url: "https://www.facebook.com/ZoeWorshipCentreYouths" },
              { icon: <FaInstagram />, url: "https://www.instagram.com/zoewoshipcentrechurch" },
              { icon: <FaTiktok />, url: "https://www.tiktok.com/@zoeworshipcentrechurch" },
              { icon: <FaYoutube />, url: "https://www.youtube.com/@ZoeWorshipCentreKinoo" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-zinc-800 text-zinc-400 hover:text-black hover:bg-white hover:border-white transition-all duration-500"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

    
    </footer>
  );
}