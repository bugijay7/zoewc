import React, { useState, useEffect } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import heroBg from "../../assets/about-hero.jpeg"; // ✅ Add your background image here

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
      state: "Supportive Ministries",
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const slide = slides[currentSlide];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <div className="relative min-h-[80vh] md:min-h-[120vh] flex items-center justify-center overflow-hidden">
      {/* ✅ Background image */}
      <img
        src={heroBg}
        alt="Zoe Worship Centre Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* ✅ Soft gradient overlay for warmth and readability */}
      <div className="absolute inset-0  bg-black/80 "></div>

      {/* Animated floating blobs (still visible above overlay) */}
      <Motion.div
        className="absolute top-20 right-20 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <Motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{ scale: [1, 1.3, 1], x: [0, -30, 0], y: [0, -50, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-20 text-center">
        <AnimatePresence mode="wait">
          <Motion.div
            key={currentSlide}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-4xl md:text-5xl font-light text-white mb-4 tracking-wide"
            >
              {slide.title}
            </Motion.h2>

            <Motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-500 to-rose-500 mb-6 leading-tight"
            >
              {slide.state}
            </Motion.h1>

            <Motion.p
              variants={itemVariants}
              className="text-xl sm:text-2xl md:text-3xl text-white font-light italic mb-12"
            >
              {slide.subtitle}
            </Motion.p>

            <Motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href={slide.button.link}
                className={`inline-block px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 ${
                  slide.button.type === "primary"
                    ? "bg-gradient-to-r from-rose-400 to-pink-500 text-white shadow-lg shadow-pink-300 hover:shadow-xl hover:shadow-pink-400"
                    : "bg-white text-rose-500 shadow-lg shadow-gray-200 hover:shadow-xl hover:bg-rose-50 border-2 border-rose-200"
                }`}
              >
                {slide.button.text}
              </a>
            </Motion.div>
          </Motion.div>
        </AnimatePresence>

        {/* Slide Indicators */}
        <div className="flex justify-center items-center gap-3 mt-20">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className="group relative focus:outline-none"
              aria-label={`Go to slide ${idx + 1}`}
            >
              <Motion.div
                className={`h-2 rounded-full transition-all duration-500 ${
                  currentSlide === idx
                    ? "w-12 bg-gradient-to-r from-rose-400 to-pink-500"
                    : "w-2 bg-pink-300"
                }`}
                whileHover={{ scale: 1.2 }}
                animate={{
                  boxShadow:
                    currentSlide === idx
                      ? "0 0 15px rgba(251, 113, 133, 0.5)"
                      : "none",
                }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 48L60 56C120 64 240 80 360 80C480 80 600 64 720 58.7C840 53 960 59 1080 64C1200 69 1320 75 1380 77.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V48Z"
            fill="white"
            fillOpacity="0.3"
          />
        </svg>
      </div>
    </div>
  );
}
