import React from "react";
import { Link } from "react-router-dom";

export default function SchoolPreview() {
  return (
    <section className="py-24 px-6 md:px-12 font-montserrat text-center">
      <div className="max-w-3xl mx-auto">
        {/* 🕊 Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold uppercase mb-3">
          Zoe Sunday School
        </h1>

        {/* 🕒 Subtitle */}
        <h3 className="text-xl md:text-2xl font-medium mb-6">
          Every Sunday • 9:00 AM
        </h3>

        {/* 📖 Paragraph */}
        <p className="text-lg md:text-xl mb-10 leading-relaxed">
          We have Sunday classes for your little ones — and not so little ones!
          A fun, faith-filled environment where kids learn about God’s love and
          grow in their walk with Christ.
        </p>

        {/* 🎈 Button */}
        <Link
          to="/services"
          className="btn btn-primary uppercase"
        >
          Sunday at Zoe
        </Link>
      </div>
    </section>
  );
}
