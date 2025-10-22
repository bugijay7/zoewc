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
    { title: "Our History", desc: "Discover our journey since 2008 and how faith shaped our path.", img: historyImg, link: "/about/history" },
    { title: "Our Culture", desc: "Experience the heart of our worship, unity, and family culture.", img: cultureImg, link: "/about/culture" },
    { title: "Make an Impact", desc: "See how Zoe Worship Centre impacts lives and communities.", img: impactImg, link: "/about/impact" },
    { title: "Leadership", desc: "Meet the devoted pastors and leaders guiding our vision.", img: leadershipImg, link: "/about/leadership" },
    { title: "Faith Statement", desc: "Explore the beliefs and principles that shape our ministry.", img: faithImg, link: "/about/faithStatement" },
    { title: "Our Anthem", desc: "Learn the words that unite us as the Zoe family.", img: anthemImg, link: "/about/anthem" },
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-base-100 font-montserrat md:pt-30">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-12 space-y-4">
        <h1 className="text-xl md:text-6xl font-bold text-primary">
          Get to Know Us
        </h1>
        <p className="text-base-content/70 text-xs md:text-xl leading-relaxed max-w-[300px] mx-auto">
          Discover more about our history, culture, leadership, and values that guide Zoe Worship Centre.
        </p>
      </div>

      {/* About Cards as List */}
      <ul className="max-w-2xl mx-auto md:max-w-3xl divide-y-8 divide-base-200">
        {aboutCards.map((card, index) => (
          <li key={index} className="flex flex-row md:flex-row items-start gap-4 md:gap-6 py-4">
            {/* Image on left */}
            <div className="flex-shrink-0 w-40 h-20 md:w-52 md:h-32 overflow-hidden">
              <img src={card.img} alt={card.title} className="object-cover w-full h-full" />
            </div>

            {/* Text on right */}
            <div className="flex-1 flex flex-col justify-center">
              <div className="text-[8px] md:text-lg font-medium  mb-1">{card.title}</div>
              <p className="text-[7px] md:text-sm opacity-70 mb-2">{card.desc}</p>
              <Link
                to={card.link}
                className="inline-block  text-primary text-[7px] md:text-sm"
              >
                For More Information Check Here
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
