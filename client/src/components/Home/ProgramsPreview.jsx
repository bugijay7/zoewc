import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../../assets/hero.jpg";

export default function ProgrammsPreview() {
  return (
    <section
      className="py-20  bg-base-100 text-base-content text-center md:text-right relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-4xl mx-auto  text-white">
        <h1 className="text-2xl md:text-4xl font-extrabold mb-6 uppercase">
          Connect Programs
        </h1>
        <p className="text-xs md:text-sm opacity-90 leading-relaxed mb-10">
          At Zoe Worship Centre, our programs are designed to help you grow in faith, build lasting relationships, and make a meaningful impact in your community. 
          Whether you’re looking to serve, learn, or simply belong, there’s a place here for you to thrive spiritually and connect with others on the same journey.
        </p>
        <Link
          to="/programs"
          className="btn btn-primary px-8 py-3 rounded-lg font-medium text-sm md:text-base"
        >
          Find a Program
        </Link>
      </div>
    </section>
  );
}
