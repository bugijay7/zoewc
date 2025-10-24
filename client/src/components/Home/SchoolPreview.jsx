import React from "react";
import { Link } from "react-router-dom";

export default function SchoolPreview() {
  return (
    <section className="py-20 bg-base-100 text-base-content text center md:text-left">
      <div className="max-w-4xl mx-auto">
        {/* 🕊 Title */}
        <h1 className="text-2xl md:text-4xl font-extrabold uppercase mb-3">
          Zoe Sunday School
        </h1>

        {/* 🕒 Subtitle */}
        <h3 className="text-xs md:text-xl font-medium mb-6">
          Every Sunday • 9:00 AM
        </h3>

        {/* 📖 Paragraph */}
        <p className="text-xs md:text-sm mb-10 leading-relaxed">
          We have Sunday classes for your little ones — and not so little ones!
          A fun, faith-filled environment where kids learn about God’s love and
          grow in their walk with Christ.
        </p>

        {/* 🎈 Button */}
        <Link
          to="/departments/main/sundaySchool"
          className="btn btn-primary uppercase"
        >
          Sunday at Zoe
        </Link>
      </div>
    </section>
  );
}
