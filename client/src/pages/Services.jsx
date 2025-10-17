import React from "react";
import { Link } from "react-router-dom";
import worshipImg from "../assets/her01.jpg";

function Services() {
  return (
    <div className="bg-base-200 text-base-content font-serif">
      {/* 🌅 Hero Section */}
      <div
        className="hero min-h-[80vh] flex items-center justify-center text-center px-6 md:px-20 relative overflow-hidden"
        style={{
          backgroundImage: `url(${worshipImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-neutral/50 backdrop-blur-[1px]"></div>

        {/* Content */}
        <div className="relative z-10 text-base-100 font-montserrat">
          <h1 className="text-5xl md:text-6xl font-extrabold uppercase mb-4">
            Our Services
          </h1>
          <p className="text-lg md:text-xl italic mb-8 max-w-2xl mx-auto leading-relaxed">
            “Let all things be done decently and in order.” —{" "}
            <span className="text-secondary">1 Corinthians 14:40</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/live" className="btn btn-primary">
              Watch Livestream
            </Link>
            <Link to="/contact" className="btn btn-outline btn-secondary">
              Visit Us
            </Link>
          </div>
        </div>
      </div>

      {/* ✝️ Intro Section */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-16 text-center">
        <p className="text-lg md:text-xl leading-relaxed">
          Our services at{" "}
          <strong className="text-primary">Zoe Worship Center</strong> are
          uniquely conducted to inspire, empower, and transform lives through
          the Word of God. Each gathering is Christ-centered, time-bound, and
          full of purpose — nurturing both spiritual and personal growth.
        </p>
      </section>

      {/* 🗓️ Weekly, Monthly, and Annual Services */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-12 flex flex-col gap-12">
        {/* 🕊️ Weekly Services */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-primary uppercase mb-6">
            Weekly Services
          </h2>
          <ul className="space-y-4 text-lg">
            <li>
              <strong>Sunday Service:</strong> 8:00 AM – 1:00 PM
              <ul className="pl-4 mt-1 text-base-content">
                <li>• Ministers Service — 8:00 AM – 9:00 AM</li>
                <li>• First Service — 9:05 AM – 10:45 AM</li>
                <li>• Second Service — 10:50 AM – 1:00 PM</li>
              </ul>
            </li>
            
           
          </ul>
        </div>

        {/* 🌸 Departmental Fellowships */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-primary uppercase mb-6">
            Weekly & Departmental Fellowships
          </h2>

          <ul className="space-y-4 text-lg leading-relaxed">
            <li>
              <strong>Morning Devotions:</strong> Our weekly morning devotions
              run from{" "}
              <span className="text-secondary font-semibold">
                5:30 AM to 7:50 AM
              </span>
              .
            </li>
            <li>
              <strong>Tuesday Fellowship:</strong> Our Tuesday weekly fellowship
              takes place from{" "}
              <span className="text-secondary font-semibold">
                6:30 PM to 7:30 PM
              </span>
              .
            </li>
            <li>
              <strong>Thursday Bodaboda Outreach:</strong> Every Thursday
              beginning at{" "}
              <span className="text-secondary font-semibold">
                3:00 PM to 4:00 PM
              </span>
              .
            </li>
            <li>
              <strong>Friday Mini-Vigil:</strong> Our Friday mini-vigil runs
              from{" "}
              <span className="text-secondary font-semibold">
                9:00 PM to midnight
              </span>
              .
            </li>
            <li>
              <strong>Departmental Fellowships:</strong> These vary based on each
              department’s convenience and focus.
            </li>
          </ul>
        </div>
      </section>

      {/* 🌅 Footer Accent */}
      <section className="bg-base-200 py-10 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-primary mb-3">
          “Christ is the Reason for Life.”
        </h3>
        <p className="italic text-base-content/80">
          Join us this week and experience the divine life in fellowship.
        </p>
      </section>
    </div>
  );
}

export default Services;
