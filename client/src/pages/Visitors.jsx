import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/about-hero.jpeg"; // 🖼️ Background image

export default function Visitors() {
  const steps = [
    {
      title: "Fresh Start",
      desc: "If you’re visiting for the first time, we can’t wait to meet you! At Zoe Worship Centre, we want to help you settle in, grow in faith, and become part of our loving family.",
      icon: "🌱",
      link: "/new",
      btn: "Start Here",
    },
    {
      title: " Main Departments",
      desc: "Get involved in one of our main ministry departments where you can serve, connect with others, and use your unique gifts to make an impact in God’s Kingdom.",
      icon: "🤝",
      link: "/departments/main",
      btn: "Explore Departments",
    },
    {
      title: "Support Departments",
      desc: "Be part of a team that helps the ministry thrive behind the scenes — from hospitality and media to administration and logistics. Every role makes a difference!",
      icon: "💪",
      link: "/departments/supportive",
      btn: "Get Involved",
    },
  ];

  return (
    <section className="font-montserrat bg-base-100 text-base-content">
      {/* 🕊️ Hero Section */}
      <div
        className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroImg}) center/cover no-repeat`,
        }}
      >
        <h1 className="text-3xl md:text-6xl font-bold uppercase tracking-wide">
          Welcome, New Visitors
        </h1>
      </div>

      {/* 💒 Welcome Text */}
      <div className="max-w-4xl mx-auto text-center py-16 px-6 md:px-20 space-y-6">
        <h2 className="text-2xl md:text-4xl font-semibold text-primary">
          We’re Glad You’re Here!
        </h2>
        <p className="text-base md:text-lg opacity-90 leading-relaxed">
          Whether you’re new to faith or simply visiting, we believe God has
          brought you here for a reason. Zoe Worship Centre is a place of love,
          growth, and transformation. Our community is dedicated to helping you
          encounter God, build lasting friendships, and discover your divine
          purpose.
        </p>

        {/* 📖 Bible Verse */}
        <div className="bg-base-200 rounded-xl shadow-md p-6 mt-10 italic text-primary">
          <p className="text-lg md:text-xl">
            “See, I am doing a new thing! Now it springs up; do you not
            perceive it? I am making a way in the wilderness and streams in the
            wasteland.”
          </p>
          <p className="mt-2 font-semibold text-primary">— Isaiah 43:19 (NIV)</p>
        </div>
      </div>

      {/* ✨ Steps Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20 pb-20 max-w-7xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-base-200 rounded-2xl shadow-lg p-8 text-left  hover:shadow-2xl transition"
          >
            <div className="text-5xl mb-4">{step.icon}</div>
            <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">
              {step.title}
            </h3>
            <p className="text-sm md:text-base opacity-80 mb-6">{step.desc}</p>
            <Link to={step.link} className="btn btn-primary btn-sm">
              {step.btn} →
            </Link>
          </div>
        ))}
      </div>

      {/* 📞 CTA */}
      <div className="text-center pb-20">
        <p className="text-lg md:text-xl mb-6">
          Ready to begin your journey? We’d love to connect with you.
        </p>
        <Link to="/contact" className="btn btn-primary btn-lg">
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
