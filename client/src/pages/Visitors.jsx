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
      title: "Main Departments",
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
        className="relative h-[90vh] md:h-[80vh] flex flex-col items-center justify-center text-center text-white px-6"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.7)), url(${heroImg}) center/cover no-repeat`,
        }}
      >
        <h1 className="text-xl md:text-6xl font-bold uppercase tracking-wide mb-4 text-primary">
         Welcome to Zoe Worship Centre
        </h1>
        <p className="max-w-3xl text-sm md:text-lg leading-relaxed opacity-95 mb-6 pt-10">
          We’re so glad you’re here! Whether this is your first time at Zoe Worship
          Centre or you’re returning after a while, know that you are deeply loved
          and valued. Our doors — and our hearts — are open to you. Come experience
          the joy, warmth, and presence of God with us.
        </p>
        <div className="bg-gray-200/20 backdrop-blur-sm px-6 py-3 rounded-xl max-w-xl italic">
  <p className="text-sm md:text-base font-medium">
    “Come to me with your ears wide open. Listen, and you will find life.”
  </p>
  <p className="text-xs md:text-sm font-semibold mt-1">— Isaiah 55:3 (NLT)</p>
</div>

      </div>

    

      {/* ✨ Steps Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20 pb-20 max-w-7xl mx-auto pt-20">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-base-200 rounded-2xl shadow-lg p-8 text-left hover:shadow-2xl transition"
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
