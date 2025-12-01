import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion"; // eslint-disable-line no-unused-vars
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
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 min-w-screen">
      {/* Top Bar */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-primary text-white transition-all duration-300 py-2"
          
      >
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 md:gap-8 text-xs md:text-sm">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 hover:text-blue-200 transition-colors"
            >
              <MdEmail className="text-base" />
              <a href="mailto:zoeworshipcentrekinoo@gmail.com" className="hover:underline">
                zoeworshipcentrekinoo@gmail.com
              </a>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 hover:text-blue-200 transition-colors"
            >
              <MdPhone className="text-base" />
              <span>+254 722 908 733</span>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Main Navbar */}
      <div
        className="backdrop-blur-md bg-white/95 shadow-lg transition-all duration-300 py-4"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" onClick={closeAllMenus}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 group"
              >
                <motion.img
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                  src={Logo}
                  alt="Zoe Worship Centre Logo"
                  className={`transition-all duration-300 ${
                    scrolled ? "h-10 w-10" : "h-14 w-14"
                  } object-contain`}
                />
                <div className="flex flex-col">
                  <span className={`font-bold text-primary transition-all duration-300 ${
                    scrolled ? "text-base" : "text-lg"
                  } group-hover:text-black`}>
                    Zoe Worship Centre Church
                  </span>
                  <span className="text-xs text-black italic group-hover:text-blue-500 transition-colors">
                    A God Kind of Life
                  </span>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-5">
              {/* Who We Are Dropdown */}
              <li className="relative group">
                <motion.div
                  whileHover={{ y: -2 }}
                  className="cursor-pointer py-2 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-pink-600 after:to-pink-400 after:transition-all after:duration-300 hover:after:w-full hover:text-primary"
                >
                About
                </motion.div>
                <motion.ul
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="absolute left-0 top-full mt-2 bg-white rounded-lg shadow-2xl py-3 px-2 min-w-[220px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100"
                >
                  {[
                    { to: "/about/KnowUs", label: "About Us" },
                    { to: "/about/culture", label: "Our Culture" },
                    { to: "/about/leadership", label: "Our Leadership" },
                    { to: "/about/impact", label: "Making an Impact" },
                    { to: "/about/faithStatement", label: "Faith Statement" },
                    { to: "/about/history", label: "Our History" },
                  ].map((item, idx) => (
                    <motion.li key={idx} whileHover={{ x: 5 }}>
                      <Link
                        to={item.to}
                        className="block px-4 py-2  hover:bg-blue-50 rounded-md transition-all duration-200"
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </li>

              <motion.li whileHover={{ y: -2 }}>
                <Link
                  to="/services"
                  className=" py-2 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-pink-600 after:to-pink-400 after:transition-all after:duration-300 hover:after:w-full hover:text-primary"
                >
                  Sundays
                </Link>
              </motion.li>

              <motion.li whileHover={{ y: -2 }}>
               
              </motion.li>

              {/* Ministries Dropdown */}
              <li className="relative group">
                <motion.div
                  whileHover={{ y: -2 }}
                  className="cursor-pointer py-2 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-pink-600 after:to-pink-400 after:transition-all after:duration-300 hover:after:w-full hover:text-primary"
                >
                  Ministries
                </motion.div>
                <motion.ul
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="absolute left-0 top-full mt-2 bg-white rounded-lg shadow-2xl py-3 px-2 min-w-[220px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100"
                >
                  {[
                    { to: "/departments/main", label: "Main Departments" },
                    { to: "/departments/supportive", label: "Supportive Departments" },
                  ].map((item, idx) => (
                    <motion.li key={idx} whileHover={{ x: 5 }}>
                      <Link
                        to={item.to}
                        className="block px-4 py-2 text-primary hover:text-primary hover:bg-blue-50 rounded-md transition-all duration-200"
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </li>

              {/* Connect Dropdown */}
              <li className="relative group">
                <motion.div
                  whileHover={{ y: -2 }}
                  className="cursor-pointer py-2 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-pink-600 after:to-pink-400 after:transition-all after:duration-300 hover:after:w-full hover:text-primary"
                >
                  Connect
                </motion.div>
                <motion.ul
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="absolute left-0 top-full mt-2 bg-white rounded-lg shadow-2xl py-3 px-2 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100"
                >
                  {[
                    { to: "/programs", label: "Programs" },
                    { to: "/events/eventList", label: "Events" },
                    
                  ].map((item, idx) => (
                    <motion.li key={idx} whileHover={{ x: 5 }}>
                      <Link
                        to={item.to}
                        className="block px-4 py-2 text-primary hover:text-primary hover:bg-blue-50 rounded-md transition-all duration-200"
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </li>
               
            </ul>
            

            <button className="bg-primary py-2 px-4 rounded-sm">
            <Link
                  to="/contact"
                  className=" py-2 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-600 after:to-blue-400 after:transition-all after:duration-300 hover:after:w-full hover:text-primary"
                >
                  Contact
                </Link>
                </button>







            {/* Mobile Toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setOpenMenu(!openMenu)}
              className="lg:hidden text-2xl text-primary hover:text-primary transition-colors p-2"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {openMenu ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaTimes />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
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
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/98 backdrop-blur-md shadow-2xl overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 space-y-2 max-h-[70vh] overflow-y-auto">
              {[
                { label: "Who we are", to: "/about/knowUs" },
                { label: "Sundays", to: "/services" },
                { label: "Resources", to: "/resources" },
                {
                  label: " Ministries",
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
               {   label: "Social Media",
                     items: [
                       {
                         label: "Facebook",
                         href: "https://www.facebook.com/ZoeWorshipCentreYouths",
                       },
                       {
                         label: "Instagram",
                         href: "https://www.instagram.com/zoewoshipcentrechurch",
                       },
                       {
                         label: "TikTok",
                         href: "https://www.tiktok.com/@zoeworshipcentrechurch?_t=ZM-90eMtbIA7fH&_r=1",
                       },
                       {
                         label: "YouTube",
                         href: "https://www.youtube.com/@ZoeWorshipCentreKinoo",
                       },
                     ],
                    },
                       { label: "Give", to: "/donate" },
              ].map((menu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className="border-b border-gray-100 last:border-0"
                >
                  {menu.items ? (
                    <>
                      <motion.button
                        whileTap={{ scale: 0.98 }}
                        onClick={() =>
                          setOpenDropdown(openDropdown === idx ? null : idx)
                        }
                        className="w-full text-left px-4 py-3 font-semibold text-primary hover:text-primary hover:bg-blue-50 rounded-lg transition-all duration-200 flex items-center justify-between"
                      >
                        {menu.label}
                        <motion.span
                          animate={{ rotate: openDropdown === idx ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-sm"
                        >
                          ▼
                        </motion.span>
                      </motion.button>
                      <AnimatePresence>
                        {openDropdown === idx && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 overflow-hidden"
                          >
                            {menu.items.map((sub, subIdx) => (
                              <motion.div
                                key={subIdx}
                                initial={{ x: -10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: subIdx * 0.03 }}
                              >
                                <Link
                                  to={sub.to}
                                  onClick={closeAllMenus}
                                  className="block px-4 py-2 text-sm text-gray-600 hover:text-primary hover:bg-blue-50 rounded-md transition-all duration-200"
                                >
                                  {sub.label}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={menu.to}
                      onClick={closeAllMenus}
                      className="block px-4 py-3 font-semibold text-primary hover:text-primary hover:bg-blue-50 rounded-lg transition-all duration-200"
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