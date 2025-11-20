import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/about-hero.jpeg"; // top image
import img2 from "../../assets/who-we-are.jpg"; // bottom image

function AboutPreview() {
  return (
    <section className="bg-primary-content text-white---content">
      <div className="max-w-[1200px] mx-auto py-12 md:py-20 px-6 md:px-10 grid md:grid-cols-2 gap-10 items-center">
        {/* TEXT */}
        <div className="text-left md:text-left">
          <h2 className="text-2xl md:text-4xl text-primary font-extrabold uppercase mb-6 tracking-tight">
            A god kind of life    
          </h2>

          <p className="text-white---content mb-6 md:max-w-[1000px] leading-relaxed text-xs md:text-sm">
            <span className="text-primary font-semibold">Zoe Worship Centre</span> is a vibrant community where lives are transformed, faith is
            strengthened, and purpose is discovered. We exist to help you grow spiritually, connect with others, and experience the abundant life God
            has for you.
          </p>

          <Link
            to="/about/knowUs"
            className="font-semibold text-primary hover:underline hover:text-primary/80 transition-colors duration-200 text-xs md:text-base uppercase"
          >
            Learn More →
          </Link>
        </div>

        {/* STACKED IMAGES */}
        <div className="relative w-full h-[350px] md:h-[420px]">
          {/* Bottom Image */}
          <img
            src={img2}
            alt="Ministry"
            className="absolute top-0 right-0 w-[80%] h-[80%] object-cover shadow-lg rounded-lg"
          />

          {/* Top Image */}
          <img
            src={img1}
            alt="Church"
            className="absolute bottom-0 left-0 w-[65%] h-[65%] object-cover shadow-xl border-4 border-primary-content rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;