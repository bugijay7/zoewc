import React from "react";
import { FaChurch, FaBullseye, FaEye } from "react-icons/fa";

export default function MissionVisionPreview() {
  return (
    <section className="md:py-8  py-5 px-6 md:px-12  text-base-content text-center max-w-[1400px] mx-auto">
      <div className="max-w-5xl mx-auto">
        {/* 🔹 Intro */}
        <div className="flex flex-col items-center mb-6">
          <FaChurch className="text-4xl md:text-7xl text-primary mb-3" />
          <h1 className="text-2xl md:text-4xl font-bold uppercase tracking-tight text-primary">
            Welcome To Zoe Worship Centre
          </h1>
        </div>

        <p className="text-xs md:text-sm opacity-90 leading-relaxed mb-12">
          We are Zoe family and one in Christ; We live in the realm of the Divine Book: The Bible; 
          Yes, it is the realm of the Higher Life, Walking from verse to verse, from chapter to chapter; 
          From book to book, and from testament to testament.
        </p>

        {/* 🔹 Mission and Vision Grid */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          {/* Mission */}
          <div>
            <div className="flex flex-col items-center mb-4">
              <FaBullseye className="text-3xl md:text-4xl text-primary mb-2" />
              <h2 className="text-xl md:text-2xl font-bold uppercase text-primary">
                Our Mission
              </h2>
            </div>
            <p className="text-xs md:text-sm leading-relaxed opacity-90">
              We have a Christ-like vision — we win, train, and send to win.
            </p>
          </div>

          {/* Vision */}
          <div>
            <div className="flex flex-col items-center mb-4">
              <FaEye className="text-3xl md:text-4xl text-primary mb-2" />
              <h2 className="text-xl md:text-2xl font-bold uppercase text-primary">
                Our Vision
              </h2>
            </div>
            <p className="text-xs md:text-sm leading-relaxed opacity-90">
              To transform lives by the life and the love of Christ.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
