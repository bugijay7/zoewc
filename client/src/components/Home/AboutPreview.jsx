import React from "react";
import { Link } from "react-router-dom";

export default function AboutPreview() {
  return (
    <section className="py-14 px-6 md:px-12 font-montserrat text-center bg-base-100 text-base-content">
      <div className="max-w-3xl mx-auto">
        {/* 🔹 Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold uppercase mb-6">
          I’m New
        </h1>

        {/* 🔹 Subtitle */}
        <p className="text-lg md:text-xl opacity-80 mb-10 leading-relaxed">
          Everything you need to get started at zoe worship centre
        </p>

        {/* 🔹 Button */}
        <Link
          to="/new"
          className="btn btn-primary text-sm md:text-base font-medium uppercase"
        >
          Start Here
        </Link>
      </div>
    </section>
  );
}
