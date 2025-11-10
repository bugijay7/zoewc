import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import heroBg from "../../assets/about-hero.jpeg"; // Desktop background image
import heroVideo from "../../assets/hero1.mp4"; // Mobile background video

export default function HomeHero() {
  const slides = [
    {
      title: "The Year Of",
      state: "Expansion By Faith",
      subtitle: "Isaiah 54:2",
      button: { text: "Word of Welcome", link: "/new", type: "primary" },
    },
    {
      title: "Welcome To Zoe",
      state: "Our Supportive Ministries",
      subtitle: "1 Peter 4:10",
      button: { text: "Call to Serve", link: "/departments/supportive", type: "primary" },
    },
    {
      title: "Zoe Worship Centre",
      state: "The God Kind of Life",
      subtitle: "John 10:10",
      button: { text: "Learn More", link: "/about/knowUs", type: "secondary" },
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
   const videoRef = useRef(null);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

    useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8; 
    }
  }, []);

  const slide = slides[currentSlide];

  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center">
      {/* 🔹 Desktop Background Image */}
      <img
        src={heroBg}
        alt="Zoe Worship Centre Background"
        className="hidden md:block absolute inset-0 w-full h-full object-cover"
      />

      {/* 🔹 Mobile Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="block md:hidden absolute inset-0 bg-black/20 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* 🔹 Slide Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 text-center text-base-100 flex flex-col justify-center h-full">
        <div
          key={currentSlide}
          className="transition-all duration-1000 ease-in-out animate-fadeIn"
        >
          <h2 className="mt-4 text-sm md:text-2xl font-medium text-amber-600 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
            {slide.title}
          </h2>

          <h1 className="text-xl md:text-7xl font-semibold py-4 tracking-tight text-primary-content drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
            {slide.state}
          </h1>

          <p className="mt-2 text-xs md:text-xl font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
            {slide.subtitle}
          </p>

          {/* Button */}
          <div className="flex justify-center mt-10">
            <Link to={slide.button.link}>
              <button
                className={`btn px-8 shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 ${
                  slide.button.type === "primary" ? "btn-primary" : "btn-secondary"
                }`}
              >
                {slide.button.text}
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* 🔹 Slide Indicators */}
      <div className="absolute bottom-6 flex justify-center gap-3 w-full">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-3 h-3 rounded-full transition-colors ${
              idx === currentSlide ? "bg-primary" : "bg-base-content/50"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
