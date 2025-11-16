import React from "react";
import { Link } from "react-router-dom";
import connectBg from "../../assets/hero33.jpg";

export default function AboutConnectSection() {
  return (
    <section className="flex flex-col md:flex-row items-stretch max-w-[1400px] mx-auto bg-base-100 text-base-content">

      {/* 🔹 First Time Visitor */}
      <div className="w-full md:w-1/2 bg-primary py-20  flex flex-col justify-center text-center md:text-left  shadow-lg px-6 md:px-12 text-white">
        <h1 className="text-2xl md:text-4xl font-extrabold uppercase mb-6 tracking-tight">
          Is this your first time here?
        </h1>

        <p className="text-xs md:text-sm opacity-90 leading-relaxed mb-10">
          Welcome to{" "}
          <span className="font-semibold text-secondary">Zoe Worship Centre</span> — 
          a place where lives are transformed, faith is strengthened, and purpose is discovered. 
          Experience the abundant life of God through worship, the Word, and community.
        </p>

        <Link
          to="/visitors"
          className="px-4 text-xs md:text-base text-secondary font-semibold uppercase tracking-wide underline underline-offset-8"
        >
          Start here →
        </Link>
      </div>

    

     {/* 🔹 About Section with Image Background */}
      <div
        className="w-full md:w-1/2 bg-cover bg-center relative py-20 flex items-center justify-end px-6 md:px-12"
        style={{ backgroundImage: `url(${connectBg})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-right text-white">
          <h2 className="text-2xl md:text-4xl font-extrabold uppercase mb-6 tracking-tight">About Zoe Worship Centre</h2>
          <p className="text-sm md:text-sm mb-4">
            <span className="text-primary font-semibold">Zoe Worship Centre</span> is a vibrant community where lives are transformed, faith is strengthened, and purpose is discovered. 
            We exist to help you grow spiritually, connect with others, and experience the abundant life God has for you.
          </p>
          <Link
            to="/about/knowUs"
            className="text-xs md:text-base text-primary font-semibold uppercase underline underline-offset-8"
          >
            Learn More →
          </Link>
        </div>
      </div>
    </section>
  );
}
