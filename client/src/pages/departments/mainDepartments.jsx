import React from "react";
import { Link } from "react-router-dom";

import departmentsBg from "../../assets/departments.jpeg";
import menImg from "../../assets/men.jfif";
import womenImg from "../../assets/women1.jpg";
import youthImg from "../../assets/youth.jfif";
import teenImg from "../../assets/teen.jfif";
import sundaySchoolImg from "../../assets/sunday-school.jfif";

export default function MainDepartments() {
  const departments = [
    { 
      name: "Men Department",
      link: "/departments/main/men",
      image: menImg,
      desc: "A brotherhood of men committed to growing spiritually, leading with integrity, and fulfilling their God-given purpose. The Men’s Department offers a supportive environment where men can sharpen one another through fellowship, prayer, mentorship, and practical teachings that empower them to influence their families, workplaces, and communities with wisdom and strength."
    },
    { 
      name: "Women Department",
      link: "/departments/main/women",
      image: womenImg,
      desc: "A warm and uplifting community where women of all ages are encouraged to deepen their faith, discover their purpose, and thrive in every area of life. Through prayer gatherings, mentorship, fellowship, and empowering programs, the Women’s Department provides a safe space for growth, healing, and spiritual transformation while fostering genuine sisterhood and support."
    },
    { 
      name: "Youth Department",
      link: "/departments/main/youth",
      image: youthImg,
      desc: "A vibrant and dynamic space where young people are nurtured, inspired, and equipped to live boldly for Christ. The Youth Department focuses on discipleship, worship, mentorship, and creative expression—helping young believers build strong spiritual foundations, develop their gifts, and pursue their God-given dreams with passion and purpose."
    },
    { 
      name: "Teens Department",
      link: "/departments/main/teens",
      image: teenImg,
      desc: "A welcoming and supportive environment designed to help teenagers grow spiritually, build strong values, and confidently navigate life’s unique challenges. Through interactive teachings, mentorship, fun activities, and faith-centered discussions, the Teens Department empowers young people to discover their identity in Christ and develop lifelong character."
    },
    { 
      name: "Sunday School Department",
      link: "/departments/main/sundaySchool",
      image: sundaySchoolImg,
      desc: "A joyful and nurturing place where children learn the Word of God through engaging Bible lessons, songs, storytelling, and hands-on activities. The Sunday School Department is dedicated to building strong spiritual foundations in every child, helping them grow in faith, kindness, and confidence while experiencing the love of Christ in a warm and caring environment."
    },
  ];

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-pink-100 selection:text-pink-600">
      {/* --- HERO SECTION --- */}
      <header className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden bg-black">
        <img 
          src={departmentsBg} 
          alt="Departments Header" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-black/20 to-transparent"></div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl" data-aos="zoom-out">
          <div className="inline-block px-4 py-1 border border-amber-500/30 bg-amber-500/10 mb-6">
            <span className="text-amber-500 text-[10px] font-black uppercase tracking-[0.4em]">Our Ministry Arms</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-6 leading-none">
            The Main <br /> <span className="text-pink-600">Departments</span>
          </h1>
          <p className="text-zinc-200 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Discover the heart of our ministry through the various departments serving our community in love, faith, and purpose.
          </p>
        </div>
      </header>

      {/* --- CONTENT SECTION --- */}
      <main className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="space-y-32 md:space-y-48">
          {departments.map((dept, index) => (
            <div 
              key={index} 
              className={`flex flex-col lg:items-center gap-12 lg:gap-24 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/2 relative group">
                {/* Decorative Frame */}
                <div className={`absolute -inset-4 border-2 border-zinc-100 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ${index % 2 === 0 ? "border-l-pink-600" : "border-r-amber-500"}`}></div>
                
                <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100 shadow-2xl">
                  <img 
                    src={dept.image} 
                    alt={dept.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Text Section */}
              <div className="w-full lg:w-1/2 flex flex-col items-start">
                <div className="flex items-center gap-4 mb-6">
                   <span className="text-4xl font-black text-zinc-100 leading-none">0{index + 1}</span>
                   <div className="h-px w-12 bg-zinc-200"></div>
                </div>
                
                <h2 className="text-3xl md:text-5xl font-black text-black uppercase tracking-tighter mb-6">
                  {dept.name.split(' ')[0]} <span className="text-pink-600 italic font-serif lowercase tracking-normal font-normal">{dept.name.split(' ')[1]}</span>
                </h2>
                
                <p className="text-zinc-900 text-lg leading-relaxed font-light mb-10">
                  {dept.desc}
                </p>

                <Link 
                  to={dept.link} 
                  className="group flex items-center gap-4 text-xs font-black uppercase tracking-[0.3em] text-black hover:text-pink-600 transition-colors"
                >
                  Explore This Ministry
                  <span className="w-12 h-px bg-black group-hover:bg-pink-600 group-hover:w-16 transition-all duration-300"></span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

     {/* --- FOOTER CTA --- */}
      <section className="bg-zinc-50 py-24 px-6 text-center border-t border-zinc-100">
        <div data-aos="fade-up" className="max-w-2xl mx-auto">
          <h3 className="text-xs font-black uppercase tracking-[0.5em] text-zinc-900 mb-8 underline decoration-amber-500 underline-offset-8">Get Involved</h3>
          <p className="text-3xl font-black text-black uppercase tracking-tighter mb-10">
            Find your place in the <span className="text-pink-600">Zoe family</span> today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
             <div className="w-2 h-2 bg-pink-600 rotate-45"></div>
             <div className="w-2 h-2 bg-amber-500 rotate-45"></div>
             <div className="w-2 h-2 bg-black rotate-45"></div>
          </div>
        </div>
      </section>
    </div>
  );
}