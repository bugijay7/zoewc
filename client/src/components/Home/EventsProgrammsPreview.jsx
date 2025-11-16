import React from "react";
import { Link } from "react-router-dom";
import programsBg from "../../assets/hero.jpg"; // ✅ background image for programs

export default function EventsProgramsSection() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-stretch max-w-[1400px] mx-auto text-white">
      
      {/* 🔹 Programs Section (with blurred dark bg) */}
      <div
        className="w-full md:w-1/2 relative overflow-hidden flex flex-col justify-center py-20 px-6 md:px-12 text-left md:text-right "
      >
        {/* Background Image with Dark Overlay */}
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-[3px]"
          style={{
            backgroundImage: `url(${programsBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.7)",
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-4xl font-extrabold mb-6 uppercase">
            Connect Programs
          </h1>
          <p className="text-xs md:text-sm opacity-90 leading-relaxed mb-10">
            At <span className="text-primary font-semibold">Zoe Worship Centre</span>, our programs are designed 
            to help you grow in faith, build lasting relationships, and make a meaningful impact 
            in your community. Whether you’re looking to serve, learn, or simply belong, 
            there’s a place here for you.
          </p>
          <Link
            to="/programs"
            className="px-4 text-xs md:text-base text-primary font-semibold uppercase tracking-wide underline underline-offset-8"
          >
            Find a Program →
          </Link>
        </div>
      </div>

      {/* 🔹 Events Section (solid bg-secondary) */}
      <div className="w-full md:w-1/2 bg-primary  flex flex-col justify-center py-20 px-6 md:px-12 text-left md:text-right text-white ">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-4xl font-extrabold mb-6 uppercase">
            Events
          </h1>
          <p className="text-xs md:text-sm mb-10 leading-relaxed opacity-90">
            Discover meaningful opportunities to grow, connect, and serve within a vibrant community 
            of believers. Our events are designed to strengthen your faith, deepen relationships, 
            and empower you to live out your God-given purpose in everyday life.
          </p>
          <Link
            to="/events/eventList"
            className="px-4 text-xs md:text-base text-secondary font-semibold uppercase tracking-wide underline underline-offset-8"
          >
            Browse Events →
          </Link>
        </div>
      </div>
    </section>
  );
}
