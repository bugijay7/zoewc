import React from "react";
import { Link } from "react-router-dom";

export default function EventsProgramsSection() {
  return (
    <section className="flex flex-col md:flex-row items-stretch max-w-[1400px] mx-auto bg-primary-content text-black gap-6 py-12 md:py-20">
      {/* Programs Card */}
      <div className="w-full md:w-1/3 relative flex flex-col justify-center py-20 px-6 md:px-12 text-left md:text-left bg-white/80  rounded-lg shadow-lg">
        <div className="relative z-10 max-[1200px] mx-auto">
          <h1 className="text-sm md:text-xl font-bold mb-6 uppercase text-primary">
           Zoe Worship centre Programs
          </h1>
          <p className="text-xs md:text-sm leading-relaxed mb-10 text-black">
            At <span className="font-semibold text-primary">Zoe Worship Centre</span>, our programs are designed to help you grow in faith, build lasting relationships, 
            and make a meaningful impact in your community. Whether you’re looking to serve, learn, or simply belong, there’s a place here for you.
          </p>
          <Link to="/programs" className="px-4 text-xs md:text-base text-primary font-semibold uppercase tracking-wide underline underline-offset-8">
            Find a Program →
          </Link>
        </div>
      </div>

      {/* First Time Visitor Card */}
      <div className="w-full md:w-1/3 bg-white/80 flex flex-col justify-center text-center md:text-left shadow-lg py-20 px-6 md:px-12 rounded-lg text-black">
        <h1 className="text-sm md:text-xl font-bold mb-6 uppercase text-primary">
          Is this your first time here?
        </h1>
        <p className="text-xs md:text-sm leading-relaxed mb-10">
          Welcome to <span className="font-semibold text-primary">Zoe Worship Centre</span> — a place where lives are transformed, faith is strengthened, and purpose is discovered.
           Experience the abundant life of God through worship, the Word, and <br></br>community.
        </p>
        <Link to="/visitors" className="px-4 text-xs md:text-base text-primary font-semibold uppercase tracking-wide underline underline-offset-8">
          Start here →
        </Link>
      </div>

      {/* Events Card */}
      <div className="w-full md:w-1/3 bg-white/80 flex flex-col justify-center py-20 px-6 md:px-12 text-left md:text-left shadow-lg  rounded-lg text-black">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-sm md:text-xl font-bold mb-6 uppercase text-primary">
            Zoe Worship Centre Events
          </h1>
          <p className="text-xs md:text-sm mb-10 leading-relaxed">
            Discover meaningful opportunities to grow, connect, and serve within a vibrant community of believers. Our events are designed to strengthen your faith,
             deepen relationships, and empower you to live out your God-given purpose in everyday life.
          </p>
          <Link to="/events/eventList" className="px-4 text-xs md:text-base text-primary font-semibold uppercase tracking-wide underline underline-offset-8">
            Browse Events →
          </Link>
        </div>
      </div>
    </section>
  );
}