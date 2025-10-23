import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import hero1 from "../../assets/hero33.jpg";
import hero2 from "../../assets/hero02.jpg";
import hero3 from "../../assets/hero3.jpg";

export default function HomeHero() {
  const slides = [
    {
      image: hero1,
      title: "The Year Of",
      state: "Expansion By Faith",
      subtitle: "Isaiah 54:2",
      button: { text: "Word of Welcome", link: "/new", type: "primary" },
    },
    {
      image: hero2,
      title: "Welcome To Zoe",
      state: "Our Supportive Ministries",
       subtitle: "Isaiah 54:2",
      button: { text: "Call to Serve", link: "/departments/supportive", type: "primary" },
    },
    {
      image: hero3,
      title: "Zoe Worship Centre",
      state: "The God Kind of Life",
       subtitle: "John 10:10",
      button: { text: "Learn More", link: "/about/knowUs", type: "secondary" },
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Preload the next image for smoother transitions
  useEffect(() => {
    const nextSlide = (currentSlide + 1) % slides.length;
    const img = new Image();
    img.src = slides[nextSlide].image;
  }, [currentSlide]);

  const slide = slides[currentSlide];

  return (
    <section className="relative min-h-[60vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Images with Fade Transition */}
      {slides.map((s, idx) => (
        <img
          key={idx}
          src={s.image}
          alt={s.state}
          loading={idx === 0 ? "eager" : "lazy"} 
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            idx === currentSlide ? "opacity-100 scale-105" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60  transition-opacity duration-1000"></div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 text-center text-base-100 flex flex-col justify-center h-full transition-opacity duration-1000">
        <h2 className="mt-4 text-sm md:text-2xl font-medium  text-amber-600 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
          {slide.title}
        </h2>

        <h1 className="text-lg md:text-7xl font-semibold py-4 tracking-tight text-primary-content drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
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

      {/* Slide Indicators */}
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
