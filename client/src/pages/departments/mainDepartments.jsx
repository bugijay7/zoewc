import React from "react";
import { Link } from "react-router-dom";

import departmentsBg from "../../assets/departments.jpeg";


import menImg from "../../assets/mens-conference.jpeg";
import womenImg from "../../assets/women.jpeg";
import youthImg from "../../assets/youths.jpeg";
import teenImg from "../../assets/teen.jpeg";
import sundaySchoolImg from "../../assets/sunday-school.jpeg";

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
    <div
  className="bg-base-100 text-base-content font-montserrat pt-28 pb-20 bg-cover bg-center"
  style={{ backgroundImage: `url(${departmentsBg})` }}

>
   <div className="absolute  bg-white/40"></div> {/* dark overlay */}

      <div className="max-w-[1200px] mx-auto text-left">
        {/* Header */}
        <h1 className="text-5xl md:text-9xl font-bold mb-6 text-primary pt-10  md:pt-10 uppercase md:pl-30 pl-10 ">
          The Main Departments
        </h1>
        <p className="text-xs md:text-sm text-black font-bold mx-auto mb-12 pl-10  md:pl-30">
          Discover the heart of our ministry through the various departments serving our community in love, faith, and purpose.
        </p>

        {/* Department Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-1 gap-4 md:gap-8">
  {departments.map((dept, index) => (
    <div
      key={index}
      className="max-w-[1200px] mx-auto transition duration-300 flex flex-col md:flex-row items-center text-left"
    >
      {/* Image */}
      <div className="w-full md:w-[450px] h-[250px] flex justify-center mb-4 md:mb-0">
        <img
          src={dept.image}
          alt={dept.name}
          className="w-[90%] md:w-[450px] h-full object-cover border border-primary hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col items-start justify-center text-left w-full md:w-[500px] p-4 md:p-5">
        <h2 className="text-xl font-bold text-primary mb-2">{dept.name}</h2>
        <p className="text-xs md:text-sm text-black md:font-semibold font-normal  italic mb-4">{dept.desc}</p>
        <Link
          to={dept.link}
          className="btn btn-primary btn-sm text-sm px-5"
        >
          Learn More
        </Link>
      </div>
    </div>
  ))}
</div>

      </div>
    </div>
  );
}
