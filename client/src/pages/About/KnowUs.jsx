import React from "react";
import { Link } from "react-router-dom";

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
    <section className="bg-primary/20 text-base-content font-montserrat">
      

      {/* 🧭 About Section */}
      <div className="py-26 px-6 md:px-20 pt-30 md:pt-40 ">
        <div className="max-w-6xl mx-auto text-left">
          
{/* 🌀 Mobile Carousel */}
<div className="md:hidden relative">
  <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 scroll-smooth no-scrollbar px-2">
    {aboutCards.map((card, index) => (
      <Link
        key={index}
        to={card.link}
        className="flex-shrink-0 snap-center w-[85vw] h-[70vh] max-w-sm"
      >
        <div className="card bg-base-100 image-full shadow-sm hover:shadow-lg transition duration-300 h-full">
          <figure className="h-full">
            <img
              src={card.img}
              alt={card.title}
              className="object-cover w-full h-full brightness-90 contrast-105 saturate-[0.85] hover:brightness-100 hover:saturate-100 transition duration-500"
            />
          </figure>

          {/* Text & Button positioned bottom-left */}
          <div className="card-body flex flex-col justify-end items-start p-6 text-left">
            <div>
              <h2 className="card-title text-lg font-semibold text-primary mb-2">
                {card.title}
              </h2>
              <p className="text-sm text-gray-200">{card.desc}</p>
            </div>
            <div className="card-actions justify-start mt-4">
              <button className="btn btn-sm btn-primary">Read More →</button>
            </div>
          </div>
        </div>
      </Link>
    ))}
  </div>

  <p className="text-xs text-primary mt-2 italic text-center">
    Swipe to explore →
  </p>
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
                  <h3 className="text-sm md:text-lg font-semibold text-primary mb-1 group-hover:text-primary transition duration-300">
                    {card.title}
                  </h3>
                  <p className="text-xs text-primary">{card.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
