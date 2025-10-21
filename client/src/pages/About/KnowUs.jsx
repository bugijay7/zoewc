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
      desc: "Discover our journey since 2008 and how faith shaped our path.",
      img: historyImg,
      link: "/about/history",
    },
    {
      title: "Our Culture",
      desc: "Experience the heart of our worship, unity, and family culture.",
      img: cultureImg,
      link: "/about/culture",
    },
    {
      title: "Make an Impact",
      desc: "See how zoe worship centre impacts lives and communities.",
      img: impactImg,
      link: "/about/impact",
    },
    {
      title: "Leadership",
      desc: "Meet the devoted pastors and leaders guiding our vision.",
      img: leadershipImg,
      link: "/about/leadership",
    },
    {
      title: "Faith Statement",
      desc: "Explore the beliefs and principles that shape our ministry.",
      img: faithImg,
      link: "/about/faithStatement",
    },
    {
      title: "Our Anthem",
      desc: "Learn the words that unite us as the Zoe family.",
      img: anthemImg,
      link: "/about/anthem",
    },
  ];

  return (
    <div className="bg-base-200 text-base-content">
      {/* 🕊 Hero Section */}
      <div
        className="hero min-h-[80vh] flex items-center justify-start text-center px-6 md:px-24 relative overflow-hidden"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-base-content/50 backdrop-blur-xs"></div>

        <div className="relative z-10 max-w-[1400px] mx-auto text-base-100">
          <h1 className="mb-5 text-xl font-extrabold uppercase tracking-widest">
            Get to Know Us
          </h1>
          <p className="mb-5 font-extrabold text-5xl md:text-7xl mt-10 max-w-[900px] mx-auto leading-tight text-primary">
            A community living the abundant life of Christ
          </p>
          <p className="text-lg text-base-100/90 max-w-[800px] mx-auto mt-6 italic">
            “I have come that they may have life, and have it more abundantly.” —{" "}
            <span className="font-medium text-primary">John 10:10</span>
          </p>
          <div>
            <Link to="/about/history">
  <button className="btn btn-outline btn-primary mt-8">
    Discover Our Story
  </button>
</Link>
          </div>
        </div>
      </div>

  {/* 🌿 About Cards Section */}
<section className="py-20 px-6 md:px-12 bg-base-100 overflow-hidden">
  <div className="max-w-6xl mx-auto">
    {/* Mobile: Carousel */}
    <div className="carousel carousel-center rounded-box space-x-6 overflow-x-auto block md:hidden">
      {aboutCards.map((card, index) => (
        <div key={index} className="carousel-item w-80 flex-shrink-0">
          <div className="card bg-base-200 shadow-md hover:shadow-xl transition-shadow duration-300">
            <figure className="w-full h-48">
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </figure>
            <div className="card-body flex flex-col justify-center p-4">
              <h2 className="card-title text-primary text-2xl font-medium">
                {card.title}
              </h2>
              <p className="text-base-content/80 mt-2">{card.desc}</p>
              <div className="card-actions justify-end mt-4">
                <Link
                  to={card.link}
                  className="btn btn-primary text-base-100"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Desktop: Grid */}
    <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {aboutCards.map((card, index) => (
        <div key={index} className="card bg-base-200 shadow-md hover:shadow-xl transition-shadow duration-300">
          <figure className="w-full h-48">
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-full object-cover rounded-t-lg"
            />
          </figure>
          <div className="card-body flex flex-col justify-center p-4">
            <h2 className="card-title text-primary text-2xl font-medium">
              {card.title}
            </h2>
            <p className="text-base-content/80 mt-2">{card.desc}</p>
            <div className="card-actions justify-start mt-4">
              <Link
                to={card.link}
                className="btn btn-primary text-base-100"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



      {/* ✨ Mission, Vision, and Core Values */}
      <section className="py-20 px-6 md:px-20 bg-base-200">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div>
            <h2 className="text-4xl font-medium text-primary mb-6 uppercase">
              Our Vision
            </h2>
            <p className="text-lg text-base-content mb-10 leading-relaxed">
              To win, train, and send to win.
            </p>

            <h2 className="text-4xl font-medium text-primary mb-6 uppercase">
              Our Mission
            </h2>
            <p className="text-lg text-base-content leading-relaxed">
              Transforming lives by the life and love of Christ.
            </p>
          </div>

          {/* Right Column */}
          <div>
            <h2 className="text-4xl font-medium text-primary mb-6 uppercase">
              Our Core Values
            </h2>
            <ul className="space-y-3 text-lg text-base-content">
              <li>
                <strong className="text-primary">F</strong> — Faith
              </li>
              <li>
                <strong className="text-primary">L</strong> — Love
              </li>
              <li>
                <strong className="text-primary">O</strong> — Obedience
              </li>
              <li>
                <strong className="text-primary">W</strong> — Wisdom
              </li>
              <li>
                <strong className="text-primary">E</strong> — Enthusiasm
              </li>
              <li>
                <strong className="text-primary">R</strong> — Relevance
              </li>
              <li>
                <strong className="text-primary">S</strong> — Service
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
