import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Import your three hero images
import hero1 from "../../assets/her01.jpg";
import hero2 from "../../assets/hero02.jpg";
import hero3 from "../../assets/mission-k.jpeg";

export default function HomeHero() {
  const slides = [
    {
      image: hero1,
      title: "Zoe Worship Centre",
      state: "Welcome to Zoe Worship Centre",
      subtitle: "Transforming lives by the life and love of Christ",
      text: "At Zoe Worship Centre, we believe in the transformative power of faith, worship, and community. Our doors are open to all seeking spiritual growth, fellowship, and opportunities to make a positive impact in their lives and in the lives of others. Join us in worship and experience God’s love.",
      button: {
        text: "Word of Welcome",
        link: "/new",
        type: "primary",
      },
    },
    {
      image: hero2,
      title: "Zoe Worship Centre",
      state: "Join Our Supportive Ministries",
      subtitle: "Serve, grow, and impact lives through our ministries",
      text: "Our church ministries offer a platform to serve God and others while developing your gifts and talents. From youth outreach to music, hospitality, and community service, there’s a place for everyone. Be part of a team that encourages spiritual growth and creates lasting impact in our congregation and community.",
      button: {
        text: "Call to Serve",
        link: "/departments/supportive",
        type: "primary",
      },
    },
    {
      image: hero3,
      title: "Zoe Worship Centre",
      state: "About Our Church",
      subtitle: "Learn about our vision, mission, and community",
      text: "Zoe Worship Centre is a vibrant community of believers committed to sharing God’s love, teaching biblical truth, and fostering fellowship. We strive to impact lives positively, equip members for service, and create a welcoming environment for spiritual growth. Discover our story, mission, and vision as we journey together in Christ.",
      button: {
        text: "Learn More",
        link: "/about/knowUs",
        type: "secondary",
      },
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 9 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* 🖼️ Background Image */}
      <img
        src={slide.image}
        alt={slide.state}
        className="absolute inset-0 w-full h-full object-cover scale-105 transition-opacity duration-1000"
        key={slide.image}
      />

      {/* 🌫️ Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-1000"></div>

      {/* ✨ Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 text-center text-base-100 transition-opacity duration-1000 flex flex-col justify-center h-full">
        {/* 🔹 Title: Smaller subheading */}
        <h2 className="mt-4 text-sm md:text-sm font-medium underline underline-offset-4 text-amber-600 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
          {slide.title}
        </h2>

        {/* 🔹 State: Big headline */}
        <h1 className="text-sm md:text-2xl py-4 tracking-tight text-primary-content drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
          {slide.state}
        </h1>

        {/* 🔹 Subtitle */}
        <p className="mt-2 text-2xl md:text-5xl font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
          {slide.subtitle}
        </p>

        {/* 🔹 Text: 50-word description */}
        <p className="mt-4 text-xs md:text-xs  leading-relaxed max-w-[500px] mx-auto drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
          {slide.text}
        </p>

        {/* 🕊 Button */}
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

      {/* 🔹 Slide indicators */}
      <div className="absolute bottom-6 flex justify-center gap-3 w-full">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-3 h-3 rounded-full ${
              idx === currentSlide ? "bg-primary" : "bg-base-content/50"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
