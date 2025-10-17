import React from "react";
import { Link } from "react-router-dom";

export default function YouthPreview() {
  return (
    <section className="py-24 px-6 md:px-12 font-montserrat text-center">
      <div className="max-w-3xl mx-auto">
        {/* 🕊 Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold uppercase mb-3">
          Zoe Sunday Youths
        </h1>

        {/* 🕒 Subtitle */}
        <h3 className="text-xl md:text-2xl font-semibold mb-6">
          Every Sunday • 9:00 AM
        </h3>

        {/* 📖 Paragraph */}
        <p className="text-lg md:text-xl mb-10 leading-relaxed">
          A vibrant and passionate community of young believers growing in faith,
          purpose, and friendship. Join our Sunday youth gatherings to connect,
          worship, and be empowered to live boldly for Christ.
        </p>

        {/* 🎈 Button */}
        <Link
          to="/youth"
          className="btn btn-primary font-semibold uppercase"
        >
          Sunday at Zoe
        </Link>
      </div>
    </section>
  );
}
