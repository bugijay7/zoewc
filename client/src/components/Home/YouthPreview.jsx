import React from "react";
import { Link } from "react-router-dom";

export default function YouthPreview() {
  return (
    <section className="py-20 px-6 md:px-12 bg-base-100 text-base-content text center md:text-left">
      <div className="max-w-4xl mx-auto">
        {/* 🕊 Title */}
        <h1 className="text-2xl md:text-4xl font-extrabold uppercase mb-3">
          Zoe Sunday Youths
        </h1>

        {/* 🕒 Subtitle */}
        <h3 className="text-xl md:text-2xl font-medium mb-6">
          Every Sunday • 9:00 AM
        </h3>

        {/* 📖 Paragraph */}
        <p className="text-xs md:text-sm mb-10 leading-relaxed">
          A vibrant and passionate community of young believers growing in faith,
          purpose, and friendship. Join our Sunday youth gatherings to connect,
          worship, and be empowered to live boldly for Christ.
        </p>

        {/* 🎈 Button */}
        <Link
          to="/departments/main/youth"
          className="px-4 text-xs md:text-base text-primary font-semibold uppercase tracking-wide underline underline-offset-8"
        >
          Sunday at Zoe →
        </Link>
      </div>
    </section>
  );
}
