import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import Logo from "../assets/logo2.png";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const closeAllMenus = () => {
    setOpenMenu(false);
    setOpenDropdown(null);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-base-200/80 backdrop-blur-xs shadow-md transition-all duration-300">
  <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-2 flex items-center justify-between h-16">
    
    {/* 🔹 Left Section: Logo + Title */}
    <Link
      to="/"
      onClick={closeAllMenus}
      className="flex items-center gap-3 shrink-0 h-full"
    >
      <img src={Logo} alt="Zoe Worship Centre Logo" className="h-12 w-auto" />

      <div className="flex flex-col justify-center h-full">
        <span className="text-[10px] md:text-sm text-primary tracking-wide font-normal leading-tight">
          Zoe Worship Centre Church
        </span>
        <span className="text-[8px] text-primary leading-tight">
          A god kind of life
        </span>
      </div>
    </Link>

    {/* 🔹 Center Section: Navigation */}
    <div
      className={`${
        openMenu ? "block" : "hidden"
      } absolute md:static top-full left-0 w-full md:w-auto bg-base-100 md:bg-transparent md:flex md:items-center md:space-x-6 shadow-md md:shadow-none`}
    >
      <ul className="flex flex-col md:flex-row gap-2 md:gap-5 text-xs md:text-sm uppercase text-primary px-6 md:px-0 py-4 md:py-0 items-center h-full">
        <li>
          <Link
            to="/about/knowUs"
            onClick={closeAllMenus}
            className="block px-3 py-1 hover:text-primary transition"
          >
            Who we are
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            onClick={closeAllMenus}
            className="block px-3 py-1 hover:text-primary transition"
          >
            Sundays
          </Link>
        </li>
        <li>
          <Link
            to="/gallery"
            onClick={closeAllMenus}
            className="block px-3 py-1 hover:text-primary transition"
          >
            Gallery
          </Link>
        </li>
        <li>
          <Link
            to="/sermons"
            onClick={closeAllMenus}
            className="block px-3 py-1 hover:text-primary transition"
          >
            Sermons
          </Link>
        </li>

        {/* 🔹 Ministries Dropdown */}
        <li className="relative">
          <button
            onClick={() => toggleDropdown("departments")}
            className="flex items-center gap-1 py-1 px-3 hover:text-primary transition uppercase "
          >
            Ministries
          </button>
          {openDropdown === "departments" && (
            <ul className="absolute left-0 mt-2 bg-base-100 text-base-content uppercase shadow-lg py-2 w-60 z-50 border border-base-300 rounded-md">
              <li>
                <Link
                  to="/departments/main"
                  onClick={closeAllMenus}
                  className="block px-4 py-2 rounded-md hover:bg-base-200 hover:text-primary transition-colors"
                >
                  Main departments
                </Link>
              </li>
              <li>
                <Link
                  to="/departments/supportive"
                  onClick={closeAllMenus}
                  className="block px-4 py-2 rounded-md hover:bg-base-200 hover:text-primary transition-colors"
                >
                  Supportive departments
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* 🔹 Connect Dropdown */}
        <li className="relative">
          <button
            onClick={() => toggleDropdown("involved")}
            className="flex items-center gap-1 py-1 px-3 hover:text-primary transition uppercase"
          >
            Connect
          </button>
          {openDropdown === "involved" && (
            <ul className="absolute left-0 mt-2 bg-base-100 text-base-content shadow-lg py-2 w-56 z-50 border border-base-300 rounded-md">
              <li>
                <Link
                  to="/programs"
                  onClick={closeAllMenus}
                  className="block px-4 py-2 rounded-md hover:bg-base-200 hover:text-primary transition-colors"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  to="/events/eventList"
                  onClick={closeAllMenus}
                  className="block px-4 py-2 rounded-md hover:bg-base-200 hover:text-primary transition-colors"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={closeAllMenus}
                  className="block px-4 py-2 rounded-md hover:bg-base-200 hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>

    {/* 🔹 Right Section: Contact Info */}
    <div className="hidden md:flex flex-col justify-center gap-1 h-full text-[10px] text-base-content/80">
      <div className="flex items-center gap-1">
        <MdEmail className="text-primary text-xs" />
        <span>info@zoeworship.org</span>
      </div>
      <div className="flex items-center gap-1">
        <MdPhone className="text-primary text-xs" />
        <span>+254 700 123 456</span>
      </div>
    </div>

    {/* 🔹 Mobile Menu Button */}
    <button
      type="button"
      onClick={() => setOpenMenu(!openMenu)}
      className="md:hidden p-2 text-primary focus:outline-none"
    >
      <FaBars size={22} />
    </button>
  </div>
</nav>

  );
}
