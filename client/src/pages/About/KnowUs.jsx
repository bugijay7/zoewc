import React from "react";
import { Link } from "react-router-dom";

import heroImg from "../../assets/about-hero.jpeg"; // Hero background
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
    <section className=" bg-primary-600">
      {/* Hero Section */}
      <div
        className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroImg}) center/cover no-repeat`,
        }}
      >
        <h1 className="text-3xl md:text-6xl font-bold uppercase tracking-wide">
          Who We Are
        </h1>
      </div>

      {/* About Grid */}
      <div className="py-20 px-6 md:px-20">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 max-w-6xl mx-auto">
          {aboutCards.map((card, index) => (
            <Link
              key={index}
              to={card.link}
              className="group block overflow-hidden  hover:shadow-xl transition duration-300"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="object-cover w-full h-40 md:h-56 transform group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Title below image */}
              <h2 className="mt-3 text-left text-[10px] md:text-lg font-semibold text-primary group-hover:text-secondary transition duration-300">
                {card.title}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
