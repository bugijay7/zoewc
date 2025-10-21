import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../../assets/hero.jpg"; 

export default function ProgrammsPreview() {
  return (
    <section
      className="relative min-h-[50vh] flex flex-col items-center justify-center text-center bg-cover bg-center text-base-content"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="max-w-4xl px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 uppercase">
          Connect Programs
        </h1>
        <p className="text-lg md:text-xl mb-10">
          Find a community for you
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
