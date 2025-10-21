// Current Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
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
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md text-base-content shadow-md transition-all duration-300">
      <div className="max-w-screen-xl mx-auto px-6 py-3 flex place-items-end justify-between">
        <Link to="/" onClick={closeAllMenus} className="flex place-items-end gap-3 shrink-0">
          <img src={Logo} alt="Zoe Worship Centre Logo" className="h-10 w-auto" />
          <span className="text-lg md:text-2xl font-extrabold text-primary">
            Zoe Worship Centre
          </span>
        </Link>

        <button
          type="button"
          onClick={() => setOpenMenu(!openMenu)}
          className="md:hidden p-2 text-primary focus:outline-none"
        >
          <FaBars size={24} />
        </button>

        <div
          className={`${
            openMenu ? "block" : "hidden"
          } absolute md:static top-full left-0 w-full md:w-auto bg-base-100 md:bg-transparent md:flex md:items-center md:space-x-6 shadow-md md:shadow-none`}
        >
          <ul className="flex flex-col md:flex-row gap-2 md:gap-4 text-primary-content text-sm font-bold uppercase px-6 md:px-0 py-4 md:py-0">
            <li><Link to="/about/knowUs" onClick={closeAllMenus} className="block px-3 py-2 hover:text-primary transition">Who We Are</Link></li>
            <li><Link to="/services" onClick={closeAllMenus} className="block px-3 py-2 hover:text-primary transition">Sundays</Link></li>
            <li><Link to="/gallery" onClick={closeAllMenus} className="block px-3 py-2 hover:text-primary transition">Gallery</Link></li>
            <li><Link to="/sermons" onClick={closeAllMenus} className="block px-3 py-2 hover:text-primary transition">Sermons</Link></li>

            <li className="relative">
              <button onClick={() => toggleDropdown("departments")} className="flex items-center gap-1 py-2 px-3 hover:text-primary uppercase">
                Ministries
              </button>
              {openDropdown === "departments" && (
             <ul className="absolute left-0 mt-2 bg-base-100 text-base-content rounded-xl shadow-lg py-2 w-60 z-50 border border-base-300">
  <li>
    <Link
      to="/departments/main"
      onClick={closeAllMenus}
      className="block px-4 py-2 rounded-md hover:bg-base-200 hover:text-primary transition-colors"
    >
      Main Departments
    </Link>
  </li>
  <li>
    <Link
      to="/departments/supportive"
      onClick={closeAllMenus}
      className="block px-4 py-2 rounded-md hover:bg-base-200 hover:text-primary transition-colors"
    >
      Supportive Departments
    </Link>
  </li>
</ul>


              )}
            </li>

            <li className="relative">
              <button onClick={() => toggleDropdown("involved")} className="flex items-center gap-1 py-2 px-3 hover:text-primary uppercase">
                Connect
              </button>
              {openDropdown === "involved" && (
               <ul className="absolute left-0 mt-2 bg-base-100 text-base-content rounded-xl shadow-lg py-2 w-56 z-50 uppercase border border-base-300">
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
      </div>
    </nav>
  );
}
