import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { 
  FaChurch, FaBullseye, FaEye, FaChevronLeft, FaChevronRight,
  FaFacebookF, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt 
} from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

// Assets
import img1 from "../assets/about-hero.jpeg";
import img2 from "../assets/who-we-are.jpg";
import hero1 from "../assets/service-bg.jpg";
import hero2 from "../assets/about-hero.jpeg";
import hero3 from "../assets/who-we-are.jpg";
import youthBg from "../assets/youth.jpeg";
import servicesBg from "../assets/hero02.jpg";

function HomePage() {
  const [sermons, setSermons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const slides = [
    { id: 1, image: hero1, title: "The Year Of", state: "Burning and Shining Light", subtitle: "John 5:35", button: "Word of Welcome", link: "/new", prev: 3, next: 2 },
    { id: 2, image: hero2, title: "Welcome To Zoe", state: "Supportive Ministries", subtitle: "1 Peter 4:10", button: "Call to Serve", link: "/departments/supportive", prev: 1, next: 3 },
    { id: 3, image: hero3, title: "Zoe Worship Centre", state: "The God Kind of Life", subtitle: "John 10:10", button: "Learn More", link: "/about/knowUs", prev: 2, next: 1 },
  ];

  const mainServices = [
    { title: "Zoe Worship Centre – Minister Service", time: "8:00 AM - 9:00 AM" },
    { title: "Zoe Worship Centre – First Service", time: "9:05 AM - 10:45 AM" },
    { title: "Zoe Worship Centre – Second Service", time: "10:50 AM - 1:00 PM" },
  ];

  const socialLinks = [
    { 
      Icon: FaFacebookF, 
      label: 'Facebook', 
      url: "https://www.facebook.com/ZoeWorshipCentreYouths",
      color: 'group-hover:bg-pink-600' 
    },
    { 
      Icon: FaInstagram, 
      label: 'Instagram', 
      url: "https://www.instagram.com/zoewoshipcentrechurch",
      color: 'group-hover:bg-amber-500' 
    },
    { 
      Icon: FaTiktok, 
      label: 'TikTok', 
      url: "https://www.tiktok.com/@zoeworshipcentrechurch",
      color: 'group-hover:bg-pink-600' 
    },
    { 
      Icon: FaYoutube, 
      label: 'YouTube', 
      url: "https://www.youtube.com/@ZoeWorshipCentreKinoo",
      color: 'group-hover:bg-amber-500' 
    },
  ];

  useEffect(() => {
    const fetchLatestSermons = async () => {
      try {
        const response = await axios.get("https://zoewc-1.onrender.com/api/sermons");
        const sorted = response.data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setSermons(sorted.slice(0, 3));
      } catch (err) {
        setError("Failed to load sermons.");
      } finally {
        setLoading(false);
      }
    };
    fetchLatestSermons();
  }, []);

  return (
    <div className="bg-white text-black font-sans selection:bg-pink-200">
      
      {/* 1. HERO SLIDER */}
      <section className="relative w-full h-screen overflow-hidden bg-white">
        <div className="carousel w-full h-full">
          {slides.map((slide) => (
            <div key={slide.id} id={`slide${slide.id}`} className="carousel-item relative w-full h-full flex items-center justify-center">
              <img src={slide.image} className="absolute inset-0 w-full h-full object-cover opacity-80" alt="Hero" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black"></div>
              <div className="relative z-10 text-center px-4 max-w-4xl">
                <span className="text-amber-500 uppercase tracking-[0.4em] text-sm font-bold mb-6 block">{slide.title}</span>
                <h1 className="text-6xl md:text-8xl font-black text-gray-300 tracking-tightermb-6 tracking-tighter uppercase leading-none">{slide.state}</h1>
                <p className="italic text-gray-300 text-xl md:text-2xl mb-10 font-serif">{slide.subtitle}</p>
                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                  <Link to={slide.link} className="btn btn-lg bg-white border-none text-black hover:bg-amber-500 hover:text-white rounded-none px-12 uppercase tracking-widest text-xs font-bold transition-all">
                    {slide.button}
                  </Link>
                  <Link to="/about/KnowUs" className="btn btn-lg btn-outline text-white border-white hover:bg-white hover:text-black rounded-none px-12 uppercase tracking-widest text-xs font-bold">
                    Who We Are
                  </Link>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-20">
                <a href={`#slide${slide.prev}`} className="btn btn-circle bg-white/10 border-none text-white hover:bg-white hover:text-black transition-all"><FaChevronLeft /></a>
                <a href={`#slide${slide.next}`} className="btn btn-circle bg-white/10 border-none text-white hover:bg-white hover:text-black transition-all"><FaChevronRight /></a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section className="py-32 px-6 md:px-12 lg:px-24 grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
        <div className="space-y-8">
          <div className="inline-block px-4 py-1 bg-gray-200 border-l-4 border-pink-600">
            <span className="text-pink-600 text-xs font-bold tracking-widest uppercase">Our Identity</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-black uppercase leading-tight">A God kind <br/> <span className="text-amber-500">of life</span></h2>
          <p className="text-xl leading-relaxed text-zinc-600 font-light max-w-xl">
            <strong className="text-black font-bold italic">Zoe Worship Centre</strong> is a vibrant community where lives are transformed and purpose is discovered.
          </p>
          <Link to="/about/knowUs" className="group flex items-center gap-4 text-black font-bold uppercase tracking-widest text-sm">
            <span className="border-b-2 border-amber-500 pb-1 group-hover:border-pink-600 transition-colors">Learn More</span>
            <span className="bg-amber-500 text-white p-2 group-hover:bg-pink-600 transition-all">→</span>
          </Link>
        </div>
        <div className="relative grid grid-cols-2 gap-6">
          <img src={img2} alt="Ministry" className="w-full h-[450px] object-cover border border-zinc-200 shadow-xl" />
          <img src={img1} alt="Church" className="w-full h-[450px] object-cover mt-12 border border-zinc-200 shadow-xl" />
        </div>
      </section>

      {/* 3. HORIZONTAL MISSION & VISION BAR */}
     <section className="bg-black py-16 px-6 border-y border-zinc-900">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
        
        {/* BRAND BLOCK */}
        <div className="flex flex-col items-center lg:flex-row lg:items-center gap-6 lg:w-1/3 text-center lg:text-left">
          <FaChurch className="text-pink-600 text-4xl lg:text-3xl shrink-0" />
          <div className="space-y-1">
            <h2 className="text-white text-sm font-black uppercase tracking-[0.3em]">Zoe Worship Centre</h2>
            <p className="text-pink-600 text-xs italic tracking-wide">"One family in Christ, living by the Word."</p>
          </div>
        </div>

        {/* MISSION BLOCK */}
        <div className="flex flex-col items-center lg:flex-row lg:items-center gap-6 lg:w-1/3 group 
                        border-t border-zinc-800 pt-12 lg:pt-0 lg:border-t-0 lg:border-l lg:pl-12 w-full lg:w-auto">
          <div className="p-4 rounded-full bg-zinc-900 group-hover:bg-amber-500 transition-all duration-500 shadow-xl group-hover:shadow-amber-500/20">
            <FaBullseye className="text-amber-500 text-2xl lg:text-xl group-hover:text-black transition-colors" />
          </div>
          <div className="text-center lg:text-left">
            <h3 className="text-amber-500 text-[10px] font-black uppercase tracking-[0.4em] mb-2 lg:mb-1">Our Mission</h3>
            <p className="text-white text-sm font-medium tracking-tight">We win, train, and send to win.</p>
          </div>
        </div>

        {/* VISION BLOCK */}
        <div className="flex flex-col items-center lg:flex-row lg:items-center gap-6 lg:w-1/3 group 
                        border-t border-zinc-800 pt-12 lg:pt-0 lg:border-t-0 lg:border-l lg:pl-12 w-full lg:w-auto">
          <div className="p-4 rounded-full bg-zinc-900 group-hover:bg-pink-600 transition-all duration-500 shadow-xl group-hover:shadow-pink-600/20">
            <FaEye className="text-pink-600 text-2xl lg:text-xl group-hover:text-black transition-colors" />
          </div>
          <div className="text-center lg:text-left">
            <h3 className="text-pink-600 text-[10px] font-black uppercase tracking-[0.4em] mb-2 lg:mb-1">Our Vision</h3>
            <p className="text-white text-sm font-medium tracking-tight">Transforming lives by Christ's love.</p>
          </div>
        </div>

      </div>
    </section>

      {/* 4. PROGRAMS GRID */}
      <section className="py-20 bg-zinc-50 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          {['Programs', 'First Time Visitor', 'Events'].map((item, idx) => (
            <div key={idx} className="p-12 bg-white shadow-sm border border-zinc-100 flex flex-col items-center gap-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter">{item}</h2>
              <div className="h-1 w-10 bg-amber-500"></div>
              <Link to={idx === 0 ? "/programs" : idx === 1 ? "/visitors" : "/events/eventList"} className="btn btn-outline rounded-none border-zinc-300 hover:bg-black hover:text-white px-8">
                {idx === 0 ? "Find a Program" : idx === 1 ? "Start Here" : "Browse Events"}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 5. SUNDAY SCHOOL & YOUTH (Centered) */}
      <section className="relative h-[650px] flex items-center justify-center overflow-hidden">
        <img src={youthBg} className="absolute inset-0 w-full h-full object-cover" alt="Youth" />
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="relative z-10 px-6 max-w-5xl w-full">
          <div className="grid md:grid-cols-2 gap-20 text-white text-center">
            <div className="flex flex-col items-center space-y-6">
              <div className="w-12 h-1 bg-amber-500"></div>
              <h2 className="text-5xl font-black uppercase tracking-tighter">Zoe Sunday <span className="text-amber-500">School</span></h2>
              <p className="text-zinc-900 font-bold uppercase tracking-[0.2em] text-xs">Every Sunday • 9:00 AM</p>
              <Link to="/departments/main/sundaySchool" className="btn btn-md bg-transparent border-white text-white hover:bg-amber-500 hover:border-amber-500 rounded-none px-10 transition-all uppercase text-xs tracking-widest font-bold">Sunday School</Link>
            </div>
            <div className="flex flex-col items-center space-y-6">
              <div className="w-12 h-1 bg-pink-600"></div>
              <h2 className="text-5xl font-black uppercase tracking-tighter">Zoe Sunday <span className="text-pink-600">Youths</span></h2>
              <p className="text-zinc-900 font-bold uppercase tracking-[0.2em] text-xs">Every Sunday • 9:00 AM</p>
              <Link to="/departments/main/youth" className="btn btn-md bg-transparent border-white text-white hover:bg-pink-600 hover:border-pink-600 rounded-none px-10 transition-all uppercase text-xs tracking-widest font-bold">Sunday Youth</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SERMONS SECTION */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-white border-t border-zinc-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-4">
              <div className="inline-block px-4 py-1 bg-zinc-100 border-l-4 border-amber-500">
                <span className="text-amber-500 text-xs font-bold tracking-widest uppercase">The Word</span>
              </div>
              <h2 className="text-6xl font-black tracking-tighter text-black uppercase leading-tight">Latest <span className="text-pink-600">Sermons</span></h2>
            </div>
            <Link to="/sermons" className="group flex items-center gap-4 text-black font-bold uppercase tracking-widest text-sm"><span className="border-b-2 border-black pb-1 group-hover:border-pink-600 transition-colors">View All</span><span className="bg-black text-white p-2 group-hover:bg-pink-600 transition-all">→</span></Link>
          </div>
          {loading ? (
            <div className="flex justify-center py-20"><span className="loading loading-spinner loading-lg text-pink-600"></span></div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {sermons.map((sermon) => (
                <div key={sermon._id} className="group bg-white border border-zinc-100 shadow-sm hover:shadow-xl transition-all flex flex-col">
                  <div className="relative aspect-video overflow-hidden bg-black">
                    <iframe className="absolute inset-0 w-full h-full opacity-90" src={sermon.youtubeLink} title={sermon.title} allowFullScreen></iframe>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <span className="text-[10px] font-bold text-pink-600 uppercase mb-3 block">{new Date(sermon.date).toLocaleDateString()}</span>
                    <h3 className="text-xl font-black uppercase mb-4 group-hover:text-amber-500 transition-colors">{sermon.title}</h3>
                    <p className="text-zinc-500 text-sm mb-8 line-clamp-2">{sermon.description}</p>
                    <a href={sermon.youtubeLink} target="_blank" rel="noopener noreferrer" className="mt-auto inline-block text-[10px] font-black uppercase border-b-2 border-amber-500 pb-1 hover:border-black transition-all">Watch Now →</a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

     {/* 7. MAIN SERVICES - GRID CARDS WITH IMAGE BG */}
      <section className="relative py-32 px-6 overflow-hidden">
        {/* Background Image & Overlay */}
        <img 
          src={servicesBg} 
          className="absolute inset-0 w-full h-full object-cover" 
          alt="Service Times Background" 
        />
        {/* Slightly lighter overlay (bg-black/70) to let the image show through the glass cards */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header styled like the rest of the landing page */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-white">
              Service <span className="text-pink-600">Times</span>
            </h2>
            <div className="h-1 w-20 bg-amber-500 mx-auto mt-6"></div>
          </div>
          
          {/* Grid Layout - Matching your Program Section structure */}
          <div className="grid md:grid-cols-3 gap-8">
            {mainServices.map((service, i) => (
              <div 
                key={i} 
                className="group p-10 bg-white/10 backdrop-blur-md border border-white/20 flex flex-col items-center justify-center text-center transition-all duration-500 hover:bg-white/20 hover:border-amber-500"
              >
                <h3 className="text-xl font-black uppercase tracking-tight text-white mb-4 group-hover:text-amber-500 transition-colors">
                  {service.title}
                </h3>
                
                <div className="w-8 h-[1px] bg-zinc-500 mb-4 group-hover:w-16 transition-all duration-500"></div>
                
                <p className="text-zinc-300 font-bold tracking-[0.2em] text-xs uppercase leading-relaxed">
                  {service.time}
                </p>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-16">
            <Link 
              to="/services" 
              className="btn btn-outline border-white text-white rounded-none px-12 hover:bg-white hover:text-black transition-all uppercase tracking-widest text-xs font-bold"
            >
              View Full Schedule
            </Link>
          </div>
        </div>
      </section>

      {/* 8. CONNECT SECTION */}
      <section className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
        
        {/* Left Column: Physical Presence */}
        <div data-aos="fade-right">
          <h2 className="text-6xl font-black mb-12 uppercase tracking-tighter leading-none">
            Connect <br/>
            <span className="text-pink-600">With Us</span>
          </h2>
          <div className="space-y-8">
            <div className="flex items-center gap-6 group cursor-default">
              <div className="w-12 h-12 flex items-center justify-center bg-zinc-50 rounded-full group-hover:bg-amber-500 transition-colors duration-500">
                <FaMapMarkerAlt className="text-amber-500 text-xl group-hover:text-black transition-colors" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 block">Location</span>
                <p className="text-lg font-bold">Waiyaki Way, Kinoo, Kenya</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group cursor-default">
              <div className="w-12 h-12 flex items-center justify-center bg-zinc-50 rounded-full group-hover:bg-pink-600 transition-colors duration-500">
                <FaPhoneAlt className="text-pink-600 text-xl group-hover:text-white transition-colors" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 block">Helpline</span>
                <p className="text-lg font-bold">+254 722 908 733</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Digital Hub Card */}
        <div 
          data-aos="fade-left"
          className="bg-white p-8 md:p-16 border border-zinc-100 shadow-[0_32px_64px_-15px_rgba(0,0,0,0.1)] flex flex-col justify-center relative"
        >
          {/* Decorative Corner Accent */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-zinc-50 flex items-center justify-center italic font-black text-zinc-200 text-2xl">Z</div>
          
          <h4 className="text-amber-500 uppercase tracking-[0.4em] font-black text-center mb-12 text-[10px]">
            Digital Community
          </h4>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {socialLinks.map((social, i) => (
              <a 
                key={i} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 group text-center"
              >
                <div className={`w-14 h-14 flex items-center justify-center rounded-full border border-zinc-100 transition-all duration-500 text-zinc-900 ${social.color} group-hover:text-white group-hover:border-transparent group-hover:shadow-xl`}>
                  <social.Icon className="text-lg" />
                </div>
                <span className="text-[9px] font-black uppercase tracking-[0.2em] group-hover:text-black transition-colors">
                  {social.label}
                </span>
              </a>
            ))}
          </div>
          
          <div className="mt-12 pt-8 border-t border-zinc-50 text-center">
            <p className="text-[10px] text-zinc-900 font-medium uppercase tracking-widest leading-loose">
              Join our global family <br /> and stay inspired daily.
            </p>
          </div>
        </div>
      </div>
    </section>

    </div>
  );
}

export default HomePage;