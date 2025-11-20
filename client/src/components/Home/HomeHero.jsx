import React from "react";
import { Link } from "react-router-dom";
import hero1 from "../../assets/service-bg.jpg";
import hero2 from "../../assets/about-hero.jpeg";
import hero3 from "../../assets/who-we-are.jpg";


export default function HomeHero() {
  const slides = [
    { id: 1,
      image: hero1,
      title: "The Year Of",
      state: "Expansion By Faith",
      subtitle: "Isaiah 54:2",
      button: "Word of Welcome",
      link: "/new",
    },
    {
      id: 2,
      image: hero2,
      title: "Welcome To Zoe",
      state: "Supportive Ministries",
      subtitle: "1 Peter 4:10",
      button: "Call to Serve",
      link: "/departments/supportive",
    },
    {
      id: 3,
      image: hero3,
      title: "Zoe Worship Centre",
      state: "The God Kind of Life",
      subtitle: "John 10:10",
      button: "Learn More",
      link: "/about/knowUs", 
    },
  ];

  



  return (
    <div className="carousel w-full min-h-screen relative">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          id={`slide${slide.id}`}
          className="carousel-item relative w-full"
          style={{
            background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${slide.image}) center/cover no-repeat`,
          }}
        >
          <div className="hero-content text-center text-neutral-content px-6 py-16 mx-auto">
            <div className="">
              <h1 className="mb-5 text-4xl md:text-5xl font-semibold text-secondary">{slide.title}</h1>
               <h3 className="mb-5 text-4xl md:text-7xl font-bold">{slide.state}</h3>
              <h2 className="mb-5 text-xl md:text-3xl font-bold">{slide.subtitle}</h2>
             
              <p className="mb-5 text-sm md:text-base leading-relaxed">{slide.text}</p>
              <Link to={slide.link} className="btn btn-primary">
                {slide.button}
              </Link>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href={`#slide${index === 0 ? slides.length : index}`}
              className="btn btn-circle btn-sm md:btn-md"
            >
              ❮
            </a>
            <a
              href={`#slide${index + 2 > slides.length ? 1 : index + 2}`}
              className="btn btn-circle btn-sm md:btn-md"
            >
              ❯
            </a>
          </div>
        </div>
      ))}

      {/* Bottom-left Events button */}
      <div className="absolute bottom-6 left-6 z-20">
        <Link
          to="/events/eventList"
          className="btn btn-outline btn-secondary text-white border-white hover:bg-white hover:text-black transition-all"
        >
          View Events
        </Link>
      </div>
    </div>
  );
  
}
