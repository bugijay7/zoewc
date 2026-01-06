import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-amber-800 pt-24 pb-12 px-6 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto">
        {/* GRID SECTIONS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* ABOUT */}
          <div className="space-y-6">
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-black border-b-2 border-pink-600 inline-block pb-1">
              About
            </h2>
            <ul className="space-y-4 text-sm font-medium text-zinc-200">
              <li className="hover:text-pink-600 transition-colors">
                <Link to="/about/knowUs">Know Us</Link>
              </li>
              <li className="hover:text-pink-600 transition-colors">
                <Link to="/about/history">Our History</Link>
              </li>
              <li className="hover:text-pink-600 transition-colors">
                <Link to="/about/leadership">Leadership</Link>
              </li>
              <li className="hover:text-pink-600 transition-colors">
                <Link to="/about/faithStatement">Faith Statement</Link>
              </li>
            </ul>
          </div>

          {/* DEPARTMENTS */}
          <div className="space-y-6">
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-black border-b-2 border-amber-500 inline-block pb-1">
              Departments
            </h2>
            <ul className="space-y-4 text-sm font-medium text-zinc-200">
              <li className="hover:text-amber-600 transition-colors">
                <Link to="/departments/main">Main Departments</Link>
              </li>
              <li className="hover:text-amber-600 transition-colors">
                <Link to="/departments/supportive">Supportive Departments</Link>
              </li>
              <li className="hover:text-amber-600 transition-colors">
                <Link to="/programs">Church Programs</Link>
              </li>
              <li className="hover:text-amber-600 transition-colors">
                <Link to="/services">Our Services</Link>
              </li>
            </ul>
          </div>

          {/* EVENTS & MEDIA */}
          <div className="space-y-6">
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-black border-b-2 border-pink-600 inline-block pb-1">
              Events & Media
            </h2>
            <ul className="space-y-4 text-sm font-medium text-zinc-200">
              <li className="hover:text-pink-600 transition-colors">
                <Link to="/events/eventList">Upcoming Events</Link>
              </li>
              <li className="hover:text-pink-600 transition-colors">
                <Link to="/live">Live Stream</Link>
              </li>
              <li className="hover:text-pink-600 transition-colors">
                <Link to="/sermons">Sermons</Link>
              </li>
              <li className="hover:text-pink-600 transition-colors">
                <Link to="/visitors">New Visitors</Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="space-y-6">
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-black border-b-2 border-amber-500 inline-block pb-1">
              Connect
            </h2>
            <ul className="space-y-4 text-sm font-medium text-zinc-200">
              <li className="hover:text-amber-600 transition-colors">
                <Link to="/contact">Contact Us</Link>
              </li>
              <li className="hover:text-amber-600 transition-colors">
                <Link to="/donate">Give / Donate</Link>
              </li>
              <li className="hover:text-amber-600 transition-colors">
                <Link to="/new">Are You New?</Link>
              </li>
              <li className="break-all pt-2">
                <a 
                  href="mailto:zoeworshipcentrekinoo@gmail.com" 
                  className="text-xs font-bold text-black hover:text-pink-600 transition-all underline decoration-amber-500 underline-offset-4"
                >
                  zoeworshipcentrekinoo@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-zinc-200 mb-12" />

        {/* COPYRIGHT & SOCIALS */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] uppercase tracking-widest text-zinc-200 text-center md:text-left leading-relaxed">
            © {new Date().getFullYear()} <strong className="text-black">Zoe Worship Centre – Kinoo</strong>. All rights reserved. 
            <br className="hidden md:block"/>
            Designed by{" "}
            <a 
              href="https://yohanlabs.dev" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-pink-600 font-bold hover:underline"
            >
              Yohan Labs
            </a>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-6">
            <a 
              href="https://www.facebook.com/ZoeWorshipCentreYouths" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 flex items-center justify-center rounded-full border border-zinc-200 text-zinc-400 hover:bg-black hover:text-white hover:border-black transition-all"
            >
              <FaFacebookF size={14} />
            </a>
            <a 
              href="https://www.instagram.com/zoewoshipcentrechurch" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 flex items-center justify-center rounded-full border border-zinc-200 text-zinc-400 hover:bg-black hover:text-white hover:border-black transition-all"
            >
              <FaInstagram size={14} />
            </a>
            <a 
              href="https://www.tiktok.com/@zoeworshipcentrechurch" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 flex items-center justify-center rounded-full border border-zinc-200 text-zinc-400 hover:bg-black hover:text-white hover:border-black transition-all"
            >
              <FaTiktok size={14} />
            </a>
            <a 
              href="https://www.youtube.com/@ZoeWorshipCentreKinoo" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 flex items-center justify-center rounded-full border border-zinc-200 text-zinc-400 hover:bg-black hover:text-white hover:border-black transition-all"
            >
              <FaYoutube size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}