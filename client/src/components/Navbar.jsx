import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import Logo from "../assets/logo2.png";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // For mobile dropdowns
  const location = useLocation();

  const closeAllMenus = () => {
    setOpenMenu(false);
    setOpenDropdown(null);
  };

  // Pages with transparent background
  const transparentPages = ["/", "/services", "/liveStream"];
  const isTransparent = transparentPages.includes(location.pathname);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isTransparent
          ? "bg-base-200/10 backdrop-blur-sm text-primary-content"
          : "bg-primary text-primary-content shadow-md"
      }`}
    >
      {/* 🔹 Top Bar */}
      <div
        className={`w-full ${
          isTransparent ? "bg-base-100/10" : "bg-secondary-content/20"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 md:px-16 py-2 flex justify-between items-center text-[10px] md:text-xs">
          {/* Left - Contact Info */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <MdEmail className="text-primary text-xs" />
              <a
                href="mailto:zoeworshipcentrekinoo@gmail.com"
                className="underline hover:text-secondary transition"
              >
                zoeworshipcentrekinoo@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-1">
              <MdPhone className="text-primary text-xs" />
              <span>+254 722 908 733</span>
            </div>
          </div>

          
        </div>
      </div>

      {/* 🔹 Main Navbar */}
      <div className="md:max-w-[1400px] max-w-[300px] mx-auto px-6 md:px-16 py-2 flex items-center md:justify-between justify-around relative">
        {/* Logo */}
        <Link
          to="/"
          onClick={closeAllMenus}
          className="flex items-center gap-3 shrink-0"
        >
          <img src={Logo} alt="Zoe Worship Centre Logo" className="h-12 w-auto" />
          <div
            className={`flex flex-col justify-center ${
              isTransparent ? "text-primary-content" : "text-primary-content"
            }`}
          >
            <span className="text-[10px] md:text-sm font-bold">
              Zoe Worship Centre Church
            </span>
            <span className="text-[8px] leading-tight">A God Kind of Life</span>
          </div>
        </Link>

        {/* 🔸 Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-xs md:text-sm uppercase font-semibold">
          {/* Who We Are Dropdown */}
          <li className="relative group">
            <div className="cursor-pointer hover:underline transition">Who We Are</div>
            <ul className="absolute left-0 mt-2 bg-primary/90 text-primary-content uppercase py-2 w-60  opacity-30 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <li><Link to="/about/KnowUs" className="block px-4 py-2 hover:bg-base-200/20">About Us</Link></li>
              <li><Link to="/about/culture" className="block px-4 py-2 hover:bg-base-200/20">Our Culture</Link></li>
              <li><Link to="/about/leadership" className="block px-4 py-2 hover:bg-base-200/20">Our Leadership</Link></li>
              <li><Link to="/about/impact" className="block px-4 py-2 hover:bg-base-200/20">Making an Impact</Link></li>
              <li><Link to="/about/faithStatement" className="block px-4 py-2 hover:bg-base-200/20">Faith Statement</Link></li>
              <li><Link to="/about/history" className="block px-4 py-2 hover:bg-base-200/20">Our History</Link></li>
            </ul>
          </li>

          <li><Link to="/services" className="hover:underline">Sundays</Link></li>
          <li><Link to="/resources" className="hover:underline">Resources</Link></li>

          {/* Ministries Dropdown */}
          <li className="relative group">
            <div className="cursor-pointer hover:underline transition">Ministries</div>
            <ul className="absolute left-0 mt-2 bg-primary/90 text-primary-content uppercase py-2 w-60  opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <li><Link to="/departments/main" className="block px-4 py-2 hover:bg-base-200/20">Main Departments</Link></li>
              <li><Link to="/departments/supportive" className="block px-4 py-2 hover:bg-base-200/20">Supportive Departments</Link></li>
            </ul>
          </li>

          {/* Connect Dropdown */}
          <li className="relative group">
            <div className="cursor-pointer hover:underline transition">Connect</div>
            <ul className="absolute left-0 mt-2 bg-primary/90 text-primary-content uppercase py-2 w-56  opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <li><Link to="/programs" className="block px-4 py-2 hover:bg-base-200/20">Programs</Link></li>
              <li><Link to="/events/eventList" className="block px-4 py-2 hover:bg-base-200/20">Events</Link></li>
              <li><Link to="/contact" className="block px-4 py-2 hover:bg-base-200/20">Contact</Link></li>
            </ul>
          </li>
        </ul>

        {/* 🔸 Mobile Toggle */}
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="md:hidden focus:outline-none"
        >
          {openMenu ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* 🔹 Mobile Menu */}
      {openMenu && (
        <div className="relative inset-0 bg-primary text-primary-content z-[9999] flex flex-col p-8 pt-16 space-y-4 text-base font-semibold overflow-y-auto">
         
          {/* Menu items */}
          {[
            {
              label: "Who we are", to: "/about/knowUs"},
            { label: "Sundays", to: "/services" },
            { label: "Resources", to: "/resources" },
            {
              label: "Main Ministries",
              items: [
                { label: "Men's Ministry", to: "/departments/main/men" },
                 { label: "Women's Ministry", to: "/departments/main/women" },
                  { label: "Youth's Ministriy", to: "/departments/main/youth" },
                   { label: "Sunday School Ministry", to: "/departments/main/sundaySchool" },
                    { label: "Teen's Ministry", to: "/departments/main/teens" }
              ],
            },
            {
              label: "Supportive Ministries",
              items: [
                { label: "Anagkazo Ministry", to: "/departments/supportive/anagkazo" },
                 { label: "Hospitality Ministry", to: "/departments/supportive/hospitality" },
                  { label: "Intercessory Ministry", to: "/departments/supportive/intercessory" },
                   { label: "Media Ministry", to: "/departments/supportive/media" },
                    { label: "Praise & Worship Ministry", to: "/departments/supportive/praiseAndWorship" },
                     { label: "Ushering Ministry", to: "/departments/supportive/ushering" }
              ],
            },
            {
              label: "Connect",
              items: [
                { label: "Programs", to: "/programs" },
                { label: "Events", to: "/events/eventList" },
                { label: "Contact", to: "/contact" },
              ],
            },
               { label: "Give", to: "/donate" }
          ].map((menu, idx) => (
            <div key={idx}>
              {menu.items ? (
                <>
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === idx ? null : idx)
                    }
                    className="flex justify-between w-full py-2 border-b border-base-100/20"
                  >
                    {menu.label}
                    <span>{openDropdown === idx ? "−" : "+"}</span>
                  </button>
                  {openDropdown === idx && (
                    <div className="flex flex-col pl-4 space-y-2 mt-2  border-b border-base-100/20">
                      {menu.items.map((sub, subIdx) => (
                        <Link
                          key={subIdx}
                          to={sub.to}
                          onClick={closeAllMenus}
                          className="hover:underline"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={menu.to}
                  onClick={closeAllMenus}
                  className="block py-2 border-b border-base-100/20"
                >
                  {menu.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
