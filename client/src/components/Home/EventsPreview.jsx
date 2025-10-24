import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../../assets/events.jpg"; // ✅ background image

export default function EventsPreview() {
  return (
    <section 
      className="py-20  bg-base-100 text-base-content text-center md:text-right relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bgImage})`,
      }}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-extrabold mb-6 uppercase text-white">
          Events
        </h1>

        <p className="text-xs md:text-sm mb-10 text-white leading-relaxed opacity-90">
  Discover meaningful opportunities to grow, connect, and serve within a vibrant community of believers. 
  Our programs are designed to strengthen your faith, deepen relationships, and empower you to live out your God-given purpose in everyday life.
</p>

        <Link
          to="/events/eventList"
          className="btn btn-primary text-sm md:text-base font-medium rounded-lg"
        >
          Browse Events
        </Link>
      </div>
    </section>
  );
}
