import React from "react";
import { Link } from "react-router-dom";

import historyImg from "../../assets/history1.jpeg";
import cultureImg from "../../assets/culture1.jpeg";
import impactImg from "../../assets/impact1.jpeg";
import leadershipImg from "../../assets/leadership.jpg";
import faithImg from "../../assets/faith1.jpeg";
import anthemImg from "../../assets/anthem.jpeg";
import canadaImg from "../../assets/canada.jpeg"; // ✅ Add image for Canada Assembly

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

  const canadaCard = {
    title: "Canada Assembly of Zoe Worship Centre",
    img: canadaImg,
    link: "/about/canada",
    desc:
      "Learn about our growing assembly in Canada — a vibrant extension of Zoe Worship Centre, reaching lives and spreading the Gospel across borders.",
  };

  return (
    <section className="relative bg-gray-200 text-base-content font-montserrat overflow-hidden pb-16">
      {/* 🌸 Desktop Bokeh Background */}
      <div className="hidden md:block absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-400/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-yellow-300/20 rounded-full blur-[100px]"></div>
        <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-gray-200/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] bg-pink-300/20 rounded-full blur-[100px]"></div>
      </div>

      <div className=" px-6 md:px-20 pt-30 md:pt-40 relative z-10">
        <div className="max-w-6xl mx-auto text-left">
          {/* 🌀 Mobile Carousel */}
          <div className="md:hidden relative">
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 scroll-smooth no-scrollbar px-2">
    {[...aboutCards, canadaCard].map((card, index) => (
      <Link
        key={index}
        to={card.link}
        className="flex-shrink-0 snap-center w-[300px] h-[400px] max-w-sm mt-10 mb-10"
      >
        <div className="card image-full shadow-sm hover:shadow-lg transition duration-300 h-full">
          <figure className="h-full">
            <img
              src={card.img}
              alt={card.title}
              className="object-cover w-full h-full transition duration-500"
            />
          </figure>

          <div className="card-body flex flex-col justify-end items-start p-6 text-left">
            <div>
              <h2 className="card-title text-sm font-semibold text-primary mb-2">
                {card.title}
              </h2>
              <p className="text-xs text-gray-200">{card.desc}</p>
            </div>
            <div className="card-actions justify-start mt-2">
              <button className="underline underline-offset-4 text-white hover:bg-secondary-focus text-xs">
                Read More →
              </button>
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

          {/* 🧩 Desktop Grid with bokeh background active */}
          <div className="hidden md:grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 relative z-10">
            {aboutCards.map((card, index) => (
              <Link
                key={index}
                to={card.link}
                className="rounded-sm shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden flex flex-col items-center text-center group bg-gray-200/90 backdrop-blur-sm"
              >
                <div className="overflow-hidden w-full">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="object-cover w-full h-40 md:h-56 transform group-hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="p-4 md:p-6 flex flex-col items-left text-left">
                  <h3 className="text-sm md:text-lg font-semibold text-primary mb-1 group-hover:text-pink-600 transition duration-300">
                    {card.title}
                  </h3>
                  <p className="text-xs text-black/80">{card.desc}</p>
                </div>
              </Link>
            ))}

            {/* 🇨🇦 Canada Assembly Card — spans all 3 columns */}
            <Link
              to={canadaCard.link}
              className="md:col-span-3 rounded-sm shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden flex flex-col md:flex-row items-center text-left group bg-gray-200/90 backdrop-blur-sm"
            >
              <div className="md:w-1/2 overflow-hidden">
                <img
                  src={canadaCard.img}
                  alt={canadaCard.title}
                  className="object-cover w-full h-56 md:h-64 transform group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6 md:p-10 flex flex-col justify-center">
                <h3 className="text-lg md:text-2xl font-semibold text-primary mb-3 group-hover:text-pink-600 transition duration-300">
                  {canadaCard.title}
                </h3>
                <p className="text-sm md:text-base text-black/80">
                  {canadaCard.desc}
                </p>
                <div className="mt-4">
                  <button className="btn btn-sm btn-primary">Read More →</button>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
