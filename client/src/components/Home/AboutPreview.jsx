import React from "react";
import { Link } from "react-router-dom";

export default function AboutPreview() {
  return (
    <section className="py-20 px-6 md:px-12 bg-base-100 text-base-content shadow-2xl relative text center md:text-left">
      <div className="max-w-4xl mx-auto">
        {/* 🔹 Title */}
        <h1 className="text-2xl md:text-6xl font-extrabold uppercase mb-6 tracking-tight">
          The God Kind of Life
        </h1>

        {/* 🔹 Subtitle / Introduction */}
        <p className="text-sm md:text-xl opacity-90 leading-relaxed mb-10">
          Welcome to <span className="font-semibold text-primary">Zoe Worship Centre</span> — 
          a place where lives are transformed, faith is strengthened, and purpose is discovered. 
          Experience the abundant life of God through worship, the Word, and community.
        </p>

        {/* 🔹 Call to Action */}
        <Link
          to="/new"
          className="btn btn-primary px-4 text-xs md:text-base font-semibold uppercase tracking-wide"
        >
          Discover More
        </Link>
      </div>
    </section>
  );
}
