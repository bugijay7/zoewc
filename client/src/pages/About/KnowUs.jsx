import React from "react";
import { Link } from "react-router-dom";

import heroImg from "../../assets/about-hero.jpeg";
import historyImg from "../../assets/history.jpeg";
import cultureImg from "../../assets/culture.jpeg";
import impactImg from "../../assets/impact.jpeg";
import leadershipImg from "../../assets/leadership.jpg";
import faithImg from "../../assets/faith.jpg";
import anthemImg from "../../assets/sunday-school.jpeg";

export default function KnowUs() {
  const aboutCards = [
    {
      title: "Our History",
      img: historyImg,
      link: "/about/history",
      desc:
        "Discover the humble beginnings of Zoe Worship Centre and how God’s faithfulness has shaped our journey through the years.",
    },
    {
      title: "Our Culture",
      img: cultureImg,
      link: "/about/culture",
      desc:
        "Experience the heartbeat of our community — a culture built on love, service, worship, and unity in Christ.",
    },
    {
      title: "Make an Impact",
      img: impactImg,
      link: "/about/impact",
      desc:
        "See how we’re making a difference in lives and communities through outreach, missions, and acts of compassion.",
    },
    {
      title: "Leadership",
      img: leadershipImg,
      link: "/about/leadership",
      desc:
        "Meet the visionary leaders guiding our church family with faith, wisdom, and a heart for God’s people.",
    },
    {
      title: "Faith Statement",
      img: faithImg,
      link: "/about/faithStatement",
      desc:
        "Learn about the core beliefs that define who we are and keep us anchored in the truth of God’s Word.",
    },
    {
      title: "Our Anthem",
      img: anthemImg,
      link: "/about/anthem",
      desc:
        "Celebrate our anthem — a declaration of faith, joy, and the life we share as one body in Christ.",
    },
  ];

  return (
    <section className="bg-primary text-base-content font-montserrat">
      {/* 🌅 Hero Section - Hidden on Mobile */}
      <div
        className="relative hidden md:flex h-[60vh] md:h-[80vh] flex-col items-center justify-center text-center text-white px-6"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroImg}) center/cover no-repeat`,
        }}
      >
        <h1 className="text-xl md:text-6xl font-bold uppercase tracking-wide mb-4">
          Who We Are
        </h1>
        <p className="md:max-w-3xl mx-auto text-sm md:text-lg leading-relaxed text-gray-200">
          At Zoe Worship Centre, we are a Christ-centered community dedicated to
          transforming lives through worship, discipleship, and love. Discover
          our story, our values, and how we’re growing together in faith and
          purpose.
        </p>
      </div>

      {/* 🧭 About Section */}
      <div className="py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-10 text-primary-content">
            Explore Our Journey
          </h2>

          {/* 🌀 Mobile Carousel */}
          <div className="md:hidden relative">
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-2 pb-6 scroll-smooth no-scrollbar">
              {aboutCards.map((card, index) => (
                <Link
                  key={index}
                  to={card.link}
                  className="flex-shrink-0 snap-center w-[80vw] h-[60vh] bg-base-100 shadow-lg overflow-hidden text-left"
                >
                  <img
                    src={card.img}
                    alt={card.title}
                    className="object-cover w-full h-3/5"
                  />
                  <div className="p-6 flex flex-col justify-between h-2/5">
                    <h3 className="text-sm font-semibold text-primary mb-2">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 text-xs">{card.desc}</p>
                    <button className="mt-4 btn btn-sm btn-primary self-start">
                      Read More →
                    </button>
                  </div>
                </Link>
              ))}
            </div>
            <p className="text-xs text-gray-300 mt-2 italic">Swipe to explore →</p>
          </div>

          {/* 🧩 Desktop Grid */}
          <div className="hidden md:grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
            {aboutCards.map((card, index) => (
              <Link
                key={index}
                to={card.link}
                className="rounded-sm shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden flex flex-col items-center text-center group"
              >
                <div className="overflow-hidden w-full">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="object-cover w-full h-40 md:h-56 transform group-hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="p-4 md:p-6 flex flex-col items-left text-left">
                  <h3 className="text-sm md:text-lg font-semibold text-gray-100 mb-1 group-hover:text-primary transition duration-300">
                    {card.title}
                  </h3>
                  <p className="text-xs text-gray-200">{card.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
