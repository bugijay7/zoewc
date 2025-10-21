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
    <section className="py-20 px-6 md:px-20 bg-base-100">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-12 space-y-4">
        <h1 className="text-5xl md:text-6xl font-bold text-primary">
          Get to Know Us
        </h1>
        <p className="text-base-content/70 text-lg md:text-xl leading-relaxed">
          Discover more about our history, culture, leadership, and values that guide Zoe Worship Centre.
        </p>
      </div>

      {/* About Cards as List */}
      <ul className="max-w-2xl mx-auto  bg-secondary-content divide-y-8 divide-base-200">
        {aboutCards.map((card, index) => (
          <li key={index} className="list-row p-4 mt-2 flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <div className="flex-shrink-0 w-34 h-28 md:w-32 md:h-32 overflow-hidden rounded-box">
              <img src={card.img} alt={card.title} className="object-cover w-full h-full" />
            </div>
            <div className="flex-1">
              <div className="text-lg font-medium underline">{card.title}</div>
              <p className="text-xs md:text-sm opacity-70 mt-1">{card.desc}</p>
            </div>
            <div className="flex-shrink-0 mt-2 md:mt-0">
              <Link to={card.link} className="btn btn-secondary btn-sm">
                Learn More
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
