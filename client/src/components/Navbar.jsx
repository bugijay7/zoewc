import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/logo2.png";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeAllMenus = () => {
    setOpenMenu(false);
    setOpenDropdown(null);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? "shadow-xl" : ""}`}>
      {/* Top Bar */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-black text-white py-2 px-6 md:px-12 border-b border-zinc-800 hidden sm:block"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] md:text-xs tracking-[0.2em] uppercase font-medium">
          <div className="flex gap-8">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2 group cursor-pointer">
              <MdEmail className="text-amber-500 text-sm transition-colors group-hover:text-pink-600" />
              <a href="mailto:zoeworshipcentrekinoo@gmail.com" className="hover:text-amber-500 transition-colors">
                zoeworshipcentrekinoo@gmail.com
              </a>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2 group">
              <MdPhone className="text-amber-500 text-sm transition-colors group-hover:text-pink-600" />
              <span className="group-hover:text-amber-500 transition-colors">+254 722 908 733</span>
            </motion.div>
          </div>
          <div className="hidden lg:block text-zinc-500 italic lowercase tracking-widest font-serif">
            "A God Kind of Life"
          </div>
        </div>
      </motion.div>

      {/* Main Navbar */}
      <div className={`transition-all duration-300 ${scrolled ? "bg-gray-200/95 backdrop-blur-md py-3" : "bg-gray-200 py-5"}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" onClick={closeAllMenus} className="flex-shrink-0">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4"
              >
                <motion.img
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                  src={Logo}
                  alt="Zoe Worship Centre Logo"
                  className="h-12 md:h-14 w-auto object-contain"
                />

                <div className="flex flex-col leading-tight">
                  <span className="text-black font-bold text-lg md:text-xl tracking-tighter uppercase">Zoe Worship Centre</span>
                  <span className="text-amber-600 text-[10px] uppercase tracking-[0.3em] font-semibold">A God Kind of Life</span>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-10 text-[13px] font-bold uppercase tracking-widest text-black/70">
              {/* About */}
              <li className="relative group cursor-pointer">
                <motion.div whileHover={{ y: -2 }} className="flex items-center gap-1 group-hover:text-black transition-colors">
                  About <FaChevronDown className="text-[10px] text-amber-500" />
                </motion.div>

                <motion.ul
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-0 mt-4 w-56 bg-gray-200 shadow-2xl border border-zinc-100 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[60]"
                >
                  {[
                    { to: "/about/KnowUs", label: "About Us" },
                    { to: "/about/culture", label: "Our Culture" },
                    { to: "/about/leadership", label: "Our Leadership" },
                    { to: "/about/impact", label: "Making an Impact" },
                    { to: "/about/faithStatement", label: "Faith Statement" },
                    { to: "/about/history", label: "Our History" },
                  ].map((item, idx) => (
                    <motion.li key={idx} whileHover={{ x: 5 }} className="py-2 border-b border-zinc-50 last:border-0">
                      <Link to={item.to} className="hover:text-pink-600 transition-colors block text-[11px] tracking-widest">{item.label}</Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </li>

              <motion.li whileHover={{ y: -2 }}>
                <Link to="/services" className="hover:text-black transition-colors">Sundays</Link>
              </motion.li>

              {/* Ministries */}
              <li className="relative group cursor-pointer">
                <motion.div whileHover={{ y: -2 }} className="flex items-center gap-1 group-hover:text-black transition-colors">
                  Ministries <FaChevronDown className="text-[10px] text-amber-500" />
                </motion.div>

                <motion.ul
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-0 mt-4 w-64 bg-gray-200 shadow-2xl border border-zinc-100 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[60]"
                >
                  {[
                    { to: "/departments/main", label: "Main Departments" },
                    { to: "/departments/supportive", label: "Supportive Departments" },
                  ].map((item, idx) => (
                    <motion.li key={idx} whileHover={{ x: 5 }} className="py-2 border-b border-zinc-50 last:border-0">
                      <Link to={item.to} className="hover:text-pink-600 transition-colors block text-[11px] tracking-widest">{item.label}</Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </li>

              {/* Connect */}
              <li className="relative group cursor-pointer">
                <motion.div whileHover={{ y: -2 }} className="flex items-center gap-1 group-hover:text-black transition-colors">
                  Connect <FaChevronDown className="text-[10px] text-amber-500" />
                </motion.div>

                <motion.ul
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-0 mt-4 w-48 bg-gray-200 shadow-2xl border border-zinc-100 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[60]"
                >
                  {[
                    { to: "/programs", label: "Programs" },
                    { to: "/events/eventList", label: "Events" },
                  ].map((item, idx) => (
                    <motion.li key={idx} whileHover={{ x: 5 }} className="py-2 border-b border-zinc-50 last:border-0">
                      <Link to={item.to} className="hover:text-pink-600 transition-colors block text-[11px] tracking-widest">{item.label}</Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </li>
            </ul>

            <div className="hidden lg:flex items-center gap-6">
              <Link to="/contact" className="btn btn-md bg-black text-white hover:bg-amber-600 border-none rounded-none px-8 text-[12px] tracking-widest transition-all duration-300 shadow-lg hover:shadow-amber-500/20">
                Contact
              </Link>
            </div>

            {/* Mobile Toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setOpenMenu(!openMenu)}
              aria-label="Toggle menu"
              className="lg:hidden text-2xl text-black p-2 bg-gray-200"
            >
              <AnimatePresence mode="wait">
                {openMenu ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <FaTimes />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <FaBars />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 top-[70px] bg-gray-200 z-40 lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col p-8 gap-6 h-full pb-20">
              {[
                { label: "Who we are", to: "/about/knowUs" },
                { label: "Sundays", to: "/services" },
                { label: "Resources", to: "/resources" },
                {
                  label: "Ministries",
                  items: [
                    { label: "Main Ministry", to: "/departments/main" },
                    { label: "Supportive Ministry", to: "/departments/supportive" },
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
                {
                  label: "Social Media",
                  items: [
                    { label: "Facebook", href: "https://www.facebook.com/ZoeWorshipCentreYouths" },
                    { label: "Instagram", href: "https://www.instagram.com/zoewoshipcentrechurch" },
                    { label: "TikTok", href: "https://www.tiktok.com/@zoeworshipcentrechurch" },
                    { label: "YouTube", href: "https://www.youtube.com/@ZoeWorshipCentreKinoo" },
                  ],
                },
                { label: "Give", to: "/donate" },
              ].map((menu, idx) => (
                <motion.div key={idx} className="border-b border-zinc-100 pb-4">
                  {menu.items ? (
                    <>
                      <motion.button
                        className="w-full flex justify-between items-center text-left text-lg font-bold uppercase tracking-widest text-black"
                        onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
                      >
                        {menu.label}
                        <FaChevronDown className={`text-sm transition-transform ${openDropdown === idx ? "rotate-180 text-pink-600" : "text-amber-500"}`} />
                      </motion.button>

                      <AnimatePresence>
                        {openDropdown === idx && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden flex flex-col gap-4 mt-4 pl-4 border-l-2 border-amber-500"
                          >
                            {menu.items.map((sub, subIdx) => (
                              sub.to ? (
                                <Link
                                  key={subIdx}
                                  to={sub.to}
                                  onClick={closeAllMenus}
                                  className="text-zinc-500 font-medium uppercase text-sm tracking-widest hover:text-pink-600 transition-colors"
                                >
                                  {sub.label}
                                </Link>
                              ) : (
                                <a
                                  key={subIdx}
                                  href={sub.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-zinc-500 font-medium uppercase text-sm tracking-widest hover:text-pink-600 transition-colors"
                                >
                                  {sub.label}
                                </a>
                              )
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link 
                      to={menu.to} 
                      onClick={closeAllMenus}
                      className="text-lg font-bold uppercase tracking-widest text-black hover:text-amber-600 transition-colors block"
                    >
                      {menu.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}