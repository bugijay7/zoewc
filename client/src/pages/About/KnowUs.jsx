import React from "react";
import { Link } from "react-router-dom";

import historyImg from "../../assets/history1.jpeg";
import cultureImg from "../../assets/culture1.jpeg";
import impactImg from "../../assets/impact1.jpeg";
import leadershipImg from "../../assets/leadership.jpg";
import faithImg from "../../assets/faith1.jpeg";
import anthemImg from "../../assets/anthem.jpeg";
import canadaImg from "../../assets/canada.jpeg";

export default function KnowUs() {
  const aboutCards = [
    {
      title: "Our History",
      img: historyImg,
      link: "/about/history",
      desc: "Discover the humble beginnings of Zoe Worship Centre and how God’s faithfulness has shaped our journey through the years.",
    },
    {
      title: "Our Culture",
      img: cultureImg,
      link: "/about/culture",
      desc: "Experience the heartbeat of our community — a culture built on love, service, worship, and unity in Christ.",
    },
    {
      title: "Make an Impact",
      img: impactImg,
      link: "/about/impact",
      desc: "See how we’re making a difference in lives and communities through outreach, missions, and acts of compassion.",
    },
    {
      title: "Leadership",
      img: leadershipImg,
      link: "/about/leadership",
      desc: "Meet the visionary leaders guiding our church family with faith, wisdom, and a heart for God’s people.",
    },
    {
      title: "Faith Statement",
      img: faithImg,
      link: "/about/faithStatement",
      desc: "Learn about the core beliefs that define who we are and keep us anchored in the truth of God’s Word.",
    },
    {
      title: "Our Anthem",
      img: anthemImg,
      link: "/about/anthem",
      desc: "Celebrate our anthem — a declaration of faith, joy, and the life we share as one body in Christ.",
    },
  ];

  const canadaCard = {
    title: "Canada Assembly",
    img: canadaImg,
    link: "/about/canada",
    desc: "Learn about our growing assembly in Canada — a vibrant extension of Zoe Worship Centre, reaching lives and spreading the Gospel across borders.",
  };

  return (
    <section className="bg-pink-200 min-h-screen font-sans">
      {/* --- HERO HEADER --- */}
      <div className="relative h-[60vh] flex items-center justify-center bg-black overflow-hidden">
        <img 
          src={historyImg} 
          className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale" 
          alt="Background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
        <div className="relative z-10 text-center px-6" data-aos="fade-up">
          <span className="text-amber-500 uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Get to Know Us</span>
          <h1 className="text-5xl md:text-7xl font-black text-black uppercase tracking-tighter mb-4">
            Our <span className="text-pink-600">Identity</span>
          </h1>
          <div className="w-24 h-1.5 bg-black mx-auto"></div>
        </div>
      </div>

      {/* --- MAIN GRID --- */}
      <div className="max-w-7xl mx-auto px-6 pb-24 -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aboutCards.map((card, index) => (
            <Link 
              key={index} 
              to={card.link} 
              className="group bg-white border border-zinc-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={card.img} 
                  alt={card.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h2 className="text-2xl font-black uppercase tracking-tight text-black mb-4 group-hover:text-pink-600 transition-colors">
                  {card.title}
                </h2>
                <p className="text-zinc-500 text-sm leading-relaxed mb-8 flex-grow font-light">
                  {card.desc}
                </p>
                <div className="mt-auto">
                  <span className="inline-block text-[10px] font-black uppercase tracking-widest border-b-2 border-amber-500 pb-1 group-hover:border-black transition-all">
                    Read More →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* --- FEATURED CANADA SECTION --- */}
        <div className="mt-16" data-aos="fade-up">
          <Link to={canadaCard.link} className="group relative block bg-black overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2 items-center">
              <div className="relative h-80 lg:h-[450px] overflow-hidden">
                <img 
                  src={canadaCard.img} 
                  alt={canadaCard.title} 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="p-10 lg:p-20 text-white space-y-6">
                <span className="text-pink-600 text-xs font-black uppercase tracking-[0.3em]">International Assembly</span>
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">
                  Canada <br /> <span className="text-amber-500">Assembly</span>
                </h2>
                <p className="text-zinc-400 text-lg font-light leading-relaxed">
                  {canadaCard.desc}
                </p>
                <button className="btn btn-outline border-white text-white rounded-none hover:bg-white hover:text-black px-10 transition-all uppercase tracking-widest text-xs font-bold">
                  Discover Our Mission in Canada
                </button>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* --- FOOTER DECORATION --- */}
      <div className="py-20 text-center border-t border-zinc-100">
        <div className="max-w-2xl mx-auto px-6">
          <p className="italic text-zinc-400 font-serif text-xl">
            "We are Zoe family and one in Christ; We live in the realm of the Divine Book: The Bible."
          </p>
        </div>
      </div>
    </section>
  );
}