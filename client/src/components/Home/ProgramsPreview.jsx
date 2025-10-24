import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../../assets/hero.jpg";

export default function ProgrammsPreview() {
  return (
    <section
      className="py-20 px-6 md:px-12  bg-base-100 text-base-content text-left md:text-right relative overflow-hidden"
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
          Whether you’re looking to serve, learn, or simply belong, there’s a place here for you.
        </p>
        <Link
          to="/programs"
          className=" px-4 py-3 rounded-lg font-medium text-sm md:text-base underline underline-offset-8"
        >
          Find a Program →
        </Link>
      </div>
    </section>
  );
}
