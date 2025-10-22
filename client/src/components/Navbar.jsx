import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import Logo from "../assets/logo2.png";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation();

  const closeAllMenus = () => setOpenMenu(false);

  // ✅ Define pages that use the transparent style
  const transparentPages = ["/", "/services", "/liveStream"];
  const isTransparent = transparentPages.includes(location.pathname);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isTransparent
          ? "bg-base-200/10 backdrop-blur-sm shadow-md text-primary-content"
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

          {/* Right - Give button */}
          <Link
            to="/donate"
            onClick={closeAllMenus}
            className="bg-amber-500 text-white px-4 py-1 text-xs font-semibold hover:bg-amber-600 transition rounded-md"
          >
            Give
          </Link>
        </div>
      </div>

      {/* 🔹 Main Navigation */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 py-2 flex items-center justify-between relative">
        {/* Logo */}
        <Link
          to="/"
          onClick={closeAllMenus}
          className="flex items-center gap-3 shrink-0 h-full"
        >
          <img src={Logo} alt="Zoe Worship Centre Logo" className="h-12 w-auto" />
          <div className="flex flex-col justify-center h-full">
            <span className="text-[10px] md:text-sm text-primary font-bold tracking-wide leading-tight">
              Zoe Worship Centre Church
            </span>
            <span className="text-[8px] text-primary leading-tight">
              A god kind of life
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6 text-xs md:text-sm uppercase font-semibold">
          <li>
            <Link to="/about/knowUs" className="hover:underline underline-offset-5 transition">
              Who we are
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:underline underline-offset-5 transition">
              Sundays
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="hover:underline underline-offset-5 transition">
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/sermons" className="hover:underline underline-offset-5 transition">
              Sermons
            </Link>
          </li>

          {/* Ministries Dropdown */}
          <li className="relative group">
            <div className="flex items-center cursor-pointer hover:underline transition">
              Ministries
            </div>
            <ul className="absolute left-0 mt-2 bg-base-100 text-base-content uppercase shadow-lg py-2 w-60 z-50 border border-base-300 rounded-md 
                 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
              <li>
                <Link
                  to="/departments/main"
                  className="block px-4 py-2 hover:bg-base-200/20 transition"
                >
                  Main departments
                </Link>
              </li>
              <li>
                <Link
                  to="/departments/supportive"
                  className="block px-4 py-2 hover:bg-base-200/20 transition"
                >
                  Supportive departments
                </Link>
              </li>
            </ul>
          </li>

          {/* Connect Dropdown */}
          <li className="relative group">
            <div className="flex items-center cursor-pointer hover:underline transition">
              Connect
            </div>
            <ul className="absolute left-0 mt-2 bg-base-100 text-base-content uppercase shadow-lg py-2 w-56 z-50 border border-base-300 rounded-md 
                 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
              <li>
                <Link
                  to="/programs"
                  className="block px-4 py-2 hover:bg-base-200/20 transition"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  to="/events/eventList"
                  className="block px-4 py-2 hover:bg-base-200/20 transition"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block px-4 py-2 hover:bg-base-200/20 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="md:hidden focus:outline-none"
        >
          {openMenu ? <FaTimes size={24} /> : <FaBars size={22} />}
        </button>

        {/* Mobile Menu Overlay */}
        {openMenu && (
          <div className="fixed inset-0 bg-base-100/95 flex flex-col items-center justify-center space-y-6 text-lg uppercase font-semibold z-50">
            <Link to="/about/knowUs" onClick={closeAllMenus} className="hover:underline">
              Who we are
            </Link>
            <Link to="/services" onClick={closeAllMenus} className="hover:underline">
              Sundays
            </Link>
            <Link to="/gallery" onClick={closeAllMenus} className="hover:underline">
              Gallery
            </Link>
            <Link to="/sermons" onClick={closeAllMenus} className="hover:underline">
              Sermons
            </Link>
            <Link to="/departments/main" onClick={closeAllMenus} className="hover:underline">
              Main departments
            </Link>
            <Link to="/departments/supportive" onClick={closeAllMenus} className="hover:underline">
              Supportive departments
            </Link>
            <Link to="/programs" onClick={closeAllMenus} className="hover:underline">
              Programs
            </Link>
            <Link to="/events/eventList" onClick={closeAllMenus} className="hover:underline">
              Events
            </Link>
            <Link to="/contact" onClick={closeAllMenus} className="hover:underline">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
