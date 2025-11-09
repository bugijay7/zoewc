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
    <footer className="bg-primary/80 text-base-content">
      <div className="mx-auto w-full max-w-screen-xl px-6 py-10">
        {/* GRID SECTIONS */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
          {/* ABOUT */}
          <div>
            <h2 className="mb-4 text-xs md:text-sm  font-semibold uppercase text-primary-content">
              About
            </h2>
            <ul className="font-medium space-y-2 text-xs md:text-sm">
              <li><Link to="/about/knowUs" className="link link-hover">Know Us</Link></li>
              <li><Link to="/about/history" className="link link-hover">Our History</Link></li>
              <li><Link to="/about/leadership" className="link link-hover">Leadership</Link></li>
              <li><Link to="/about/faithStatement" className="link link-hover">Faith Statement</Link></li>
            </ul>
          </div>

          {/* DEPARTMENTS */}
          <div>
            <h2 className="mb-4  text-xs md:text-sm font-semibold uppercase text-primary-content">
              Departments
            </h2>
            <ul className="font-medium space-y-2  text-xs md:text-sm">
              <li><Link to="/departments/main" className="link link-hover">Main Departments</Link></li>
              <li><Link to="/departments/supportive" className="link link-hover">Supportive Departments</Link></li>
              <li><Link to="/programs" className="link link-hover">Church Programs</Link></li>
              <li><Link to="/services" className="link link-hover">Our Services</Link></li>
            </ul>
          </div>

          {/* EVENTS & MEDIA */}
          <div>
            <h2 className="mb-4  text-xs md:text-sm font-semibold uppercase text-primary-content">
              Events & Media
            </h2>
            <ul className="font-medium space-y-2  text-xs md:text-sm">
              <li><Link to="/events/eventList" className="link link-hover">Upcoming Events</Link></li>
              <li><Link to="/live" className="link link-hover">Live Stream</Link></li>
              <li><Link to="/sermons" className="link link-hover">Sermons</Link></li>
              <li><Link to="/visitors" className="link link-hover">New Visitors</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h2 className="mb-4  text-xs md:text-sm font-semibold uppercase text-primary-content">
              Connect
            </h2>
            <ul className="font-medium space-y-2  text-xs md:text-sm">
              <li><Link to="/contact" className="link link-hover">Contact Us</Link></li>
              <li><Link to="/donate" className="link link-hover">Give / Donate</Link></li>
              <li><Link to="/new" className="link link-hover">Are You New?</Link></li>
              <li>
                <a
                  href="mailto:zoeworshipcentrekinoo@gmail.com"
                  className="link link-hover break-words"
                >
                  zoeworshipcentrekinoo@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT & SOCIALS */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-base-200 pt-6">
          <span className="text-xs   text-center sm:text-left">
            © {new Date().getFullYear()} <strong>Zoe Worship Centre – Kinoo</strong>. All rights reserved. | Designed by{" "}
            <a
              href="https://yohanlabs.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="link link-hover font-bold"
            >
              Yohan Labs
            </a>
          </span>

          {/* SOCIAL ICONS */}
          <div className="flex flex-wrap justify-center gap-4 text-xs text-primary-content">
            <a
              href="https://www.facebook.com/ZoeWorshipCentreYouths"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-content transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/zoewoshipcentrechurch"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-content transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@zoeworshipcentrechurch?_t=ZM-90eMtbIA7fH&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-content transition"
            >
              <FaTiktok />
            </a>
            <a
              href="https://www.youtube.com/@ZoeWorshipCentreKinoo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-content transition"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
