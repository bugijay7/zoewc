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
    { title: "Our History", img: historyImg, link: "/about/history" },
    { title: "Our Culture", img: cultureImg, link: "/about/culture" },
    { title: "Make an Impact", img: impactImg, link: "/about/impact" },
    { title: "Leadership", img: leadershipImg, link: "/about/leadership" },
    { title: "Faith Statement", img: faithImg, link: "/about/faithStatement" },
    { title: "Our Anthem", img: anthemImg, link: "/about/anthem" },
  ];

  return (
    <section className="bg-primary text-base-content font-montserrat">
      {/* Hero Section */}
      <div
        className="relative h-[60vh] md:h-[80vh] flex flex-col items-center justify-center text-center text-white px-6"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroImg}) center/cover no-repeat`,
        }}
      >
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-wide mb-4">
          Who We Are
        </h1>
        <p className="max-w-[200px] mx-auto text-sm md:text-lg leading-relaxed text-gray-200">
          At Zoe Worship Centre, we are a Christ-centered community dedicated to
          transforming lives through worship, discipleship, and love. Discover our
          story, our values, and how we’re growing together in faith and purpose.
        </p>
      </div>

      {/* About Grid */}
      <div className="py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-10 text-primary-content">
            Explore Our Journey
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
            {aboutCards.map((card, index) => (
              <Link
                key={index}
                to={card.link}
                className="bg-base-200 rounded-sm shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden flex flex-col items-center text-center group"
              >
                <div className="overflow-hidden w-full">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="object-cover w-full h-40 md:h-56 transform group-hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="p-4 md:p-6 flex flex-col items-left text-left">
                  <h3 className="text-sm md:text-lg font-semibold text-gray-800 mb-1 group-hover:text-primary transition duration-300">
                    {card.title}
                  </h3>
                  <p className="text-xs text-gray-500">
                    Learn more about {card.title.toLowerCase()} and what it means to us.
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
