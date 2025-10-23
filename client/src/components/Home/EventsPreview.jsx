import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../../assets/events.jpg"; // ✅ background image

export default function EventsPreview() {
  return (
    <section 
      className="relative w-full min-h-[50vh] flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat font-montserrat"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bgImage})`,
      }}
    >
      <div className="max-w-4xl px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 uppercase text-white">
          Events
        </h1>

        <p className="text-lg md:text-xl mb-10 text-white">
          Find seminars, keshas, morning devotions, conferences, and more.
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
