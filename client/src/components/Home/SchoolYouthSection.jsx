import React from "react";
import { Link } from "react-router-dom";
import youthBg from "../../assets/youth.jpeg"; // ✅ add your youth image here

export default function SchoolYouthSection() {

  
  return (
    <section className="flex flex-col md:flex-row items-stretch max-w-[1400px] mx-auto bg-base-100 text-base-content overflow-hidden">
      
      {/* 🔹 Sunday School Section */}
      <div className="w-full md:w-1/2 bg-primary py-20 px-6 md:px-12 flex flex-col justify-center text-center md:text-left text-white">
        <h1 className="text-2xl md:text-4xl font-extrabold uppercase mb-3">
          Zoe Sunday School
        </h1>

        <h3 className="text-xs md:text-xl font-medium mb-6">
          Every Sunday • 9:00 AM
        </h3>

        <p className="text-xs md:text-sm mb-10 leading-relaxed">
          We have Sunday classes for your little ones — and not so little ones!
          A fun, faith-filled environment where kids learn about God’s love and
          grow in their walk with Christ.
        </p>

        <Link
          to="/departments/main/sundaySchool"
          className="px-4 text-xs md:text-base text-secondary font-semibold uppercase tracking-wide underline underline-offset-8"
        >
          Sunday School at Zoe →
        </Link>
      </div>

      {/* 🔹 Youth Section with Background Image */}
      <div
        className="w-full md:w-1/2 py-20 px-6 md:px-12 flex flex-col justify-center text-center md:text-left text-white relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(${youthBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-2xl md:text-4xl font-extrabold uppercase mb-3">
          Zoe Sunday Youths
        </h1>

        <h3 className="text-xl md:text-2xl font-medium mb-6">
          Every Sunday • 9:00 AM
        </h3>

        <p className="text-xs md:text-sm mb-10 leading-relaxed opacity-90">
          A vibrant and passionate community of young believers growing in faith,
          purpose, and friendship. Join our Sunday youth gatherings to connect,
          worship, and be empowered to live boldly for Christ.
        </p>

        <Link
          to="/departments/main/youth"
          className="px-4 text-xs md:text-base text-primary font-semibold uppercase tracking-wide underline underline-offset-8"
        >
          Sunday Youth at Zoe →
        </Link>
      </div>
    </section>
  );
}
