import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary text-base-content">
      <div className="mx-auto w-full max-w-screen-xl">
        {/* GRID SECTIONS */}
        <div className="grid grid-cols-2 gap-8 px-4 py-8 md:grid-cols-4 lg:py-10">
          {/* ABOUT */}
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-primary-content">
              About
            </h2>
            <ul className="font-medium space-y-3">
              <li><Link to="/about/knowUs" className="link link-hover">Know Us</Link></li>
              <li><Link to="/about/history" className="link link-hover">Our History</Link></li>
              <li><Link to="/about/leadership" className="link link-hover">Leadership</Link></li>
              <li><Link to="/about/faithStatement" className="link link-hover">Faith Statement</Link></li>
            </ul>
          </div>

          {/* DEPARTMENTS */}
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-primary-content">
              Departments
            </h2>
            <ul className="font-medium space-y-3">
              <li><Link to="/departments/main" className="link link-hover">Main Departments</Link></li>
              <li><Link to="/departments/supportive" className="link link-hover">Supportive Departments</Link></li>
              <li><Link to="/programs" className="link link-hover">Church Programs</Link></li>
              <li><Link to="/services" className="link link-hover">Our Services</Link></li>
            </ul>
          </div>

          {/* EVENTS & MEDIA */}
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-primary-content">
              Events & Media
            </h2>
            <ul className="font-medium space-y-3">
              <li><Link to="/events/eventList" className="link link-hover">Upcoming Events</Link></li>
              <li><Link to="/live" className="link link-hover">Live Stream</Link></li>
              <li><Link to="/sermons" className="link link-hover">Sermons</Link></li>
              <li><Link to="/login" className="link link-hover">Admin</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-primary-content">
              Connect
            </h2>
            <ul className="font-medium space-y-3">
              <li><Link to="/contact" className="link link-hover">Contact Us</Link></li>
              <li><Link to="/donate" className="link link-hover">Give / Donate</Link></li>
              <li><Link to="/new" className="link link-hover">Are You New?</Link></li>
              <li>
                <a
                  href="mailto:info@zoeworshipcenter.org"
                  className="link link-hover"
                >
                  info@zoeworshipcenter.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT & SOCIALS */}
        <div className="px-4 py-6 bg-base-300 border-t border-base-200 md:flex md:items-center md:justify-between">
          <span className="text-sm sm:text-center">
            © {new Date().getFullYear()} <strong>zoe worship centre – Kinoo</strong>. All rights reserved. | Designed by{" "}
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
          <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 text-xl">
            <a href="#" className="hover:text-primary"><FaFacebookF /></a>
            <a href="#" className="hover:text-error"><FaYoutube /></a>
            <a href="#" className="hover:text-secondary"><FaInstagram /></a>
            <a href="#" className="hover:text-info"><FaTwitter /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
